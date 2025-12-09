import {
    EBattleActionType,
    ETargetType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroSkillType,
    IBattleAction,
    IBattleUnit,
    IHeroSkill,
    IUnit,
    TUnits,
    IBuff,
    EStatusType,
    ITotem,
    TBattleRecord,
    IActionAttackTarget,
    EItemBattleBonusType,
} from "../../types";
import { eachTurnDebuffs, summonItemBattleBonuses } from "../battleConsts";
import { PHYSICAL_RESIST_DESCREASE_DEBUFFS } from "../heroConsts";
import {
    applyStatus,
    calculateBuffValue,
    calculateDebuffValue,
    calculateIncreaseValue,
    calculateUnitsAfterBattle,
    executeDebuff,
    getAllyTargets,
    getAllyTotems,
    getOpponentTargets,
    getStatusItemBonusType,
    getTargetWithSummon,
    getTargetWithTotem,
    prepareSummonToBattle,
    prepareTotemToBattle,
    prepareUnitToBattle,
    removeBuff,
    removeDebuff,
    removeStatus,
    removeSummon,
    removeTotem,
    swapHp,
} from "../utils/battleUtils";
import { getRandomArrayIndex, getRandomArrayItem, getRandomIntFromInterval } from "../utils/commonUtils";
import { performTotemSkill } from "../utils/totemBattleUtils";

const CRIT_MODIFIER = 0.5;
const EVASION_MODIFIER = 0.5;
const slotCount = 4;

export class BattleController {
    roundCount: number = 1;
    isTillDeath: boolean;

    player1Units: TUnits;
    player2Units: TUnits;

    player1BattleUnits: (IBattleUnit | null)[];
    player2BattleUnits: (IBattleUnit | null)[];

    battleRecord: TBattleRecord;

    isBattleWin: boolean;

    constructor() {
        this.roundCount = 1;
    }

    start(player1Units: (IUnit | null)[], player2Units: (IUnit | null)[], isTillDeath: boolean, roundCount: number) {
        console.log("battle start", player1Units, roundCount);
        this.player1Units = player1Units;
        this.player2Units = player2Units;
        this.roundCount = roundCount;
        this.isTillDeath = isTillDeath;
        this.prepareToBattle();
        //
        this.battleRecord = [];

        if (this.isTillDeath) {
            this.roundCount = 30;
        }

        let battleIsOver = false;
        console.log("start battle " + this.roundCount);
        for (let i = 0; i < this.roundCount; i++) {
            if (battleIsOver) {
                break;
            }
            this.battleRecord.push({ type: EBattleActionType.ROUND_START, value: i });
            // calculate attacks order
            for (let j = 0; j < slotCount; j++) {
                const player1Unit = this.player1BattleUnits[j];
                this.performAction(player1Unit, i, true);
                if (player1Unit && this.checkBattleOver()) {
                    console.log("BATTLE IS OVER");
                    battleIsOver = true;
                    break;
                }
                const player2Unit = this.player2BattleUnits[j];
                this.performAction(player2Unit, i, false);
                if (player2Unit && this.checkBattleOver()) {
                    console.log("BATTLE IS OVER");
                    battleIsOver = true;
                    break;
                }
            }
            this.battleRecord.push({ type: EBattleActionType.ROUND_END, value: i });
        }
        //console.log("battle display record");
        // display battle record
        //this.displayBattleRecord();
        // move battle units back to units
        this.player1Units = calculateUnitsAfterBattle(this.player1BattleUnits);
    }

    prepareToBattle() {
        this.player1BattleUnits = this.player1Units.map((unit) => {
            if (!unit) {
                return null;
            }

            return prepareUnitToBattle(unit);
        });

        this.player2BattleUnits = this.player2Units.map((unit) => {
            if (!unit) {
                return null;
            }

            return prepareUnitToBattle(unit);
        });
    }

    performAction(unit: IBattleUnit | null, round: number, isPlayer1: boolean) {
        if (!unit) {
            return;
        }

        if (unit.hp <= 0) {
            return;
        }

        this.battleRecord.push({ type: EBattleActionType.TURN_START, name: unit.id, unitId: unit.id });

        //const skillIndex = round % 3;
        const skillIndex = unit.currentSkillIndex;
        unit.currentSkillIndex++;
        const skillSet = unit.skills.length >= skillIndex ? unit.skills[skillIndex] : null;

        if (skillSet) {
            skillSet.skills.forEach((skill) => {
                this.performSkill(unit, skill, isPlayer1);

                if (skillSet.isChained) {
                    this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.SKILL_CHAIN });
                    this.performAction(unit, round, isPlayer1);
                } else {
                    this.performBasicAttack(unit, skill, isPlayer1);
                }

                // const baTimesBuff = unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_ADD_TIMES);
                // const additionalBaTimes = baTimesBuff ? baTimesBuff.value : 0;

                // if (skill.isBasicAttack) {
                //     if (unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.BASIC_ATTACK_TWICE)) {
                //         this.basicAttack(unit, isPlayer1, 40);
                //         this.basicAttack(unit, isPlayer1, 40);
                //         for (let i = 0; i < additionalBaTimes; i++) {
                //             this.basicAttack(unit, isPlayer1, 40);
                //         }
                //     } else {
                //         this.basicAttack(unit, isPlayer1);
                //         for (let i = 0; i < additionalBaTimes; i++) {
                //             this.basicAttack(unit, isPlayer1);
                //         }
                //     }
                // }
            });
        } else {
            // if there is no skill for the round perform basic attack
            this.performBasicAttack(unit, undefined, isPlayer1);
        }

        this.executeAfterAction(unit, isPlayer1);
    }

    /** Execute all after action activities every round:
     * statuses actication (poison, bleed, burn, hpRegen);
     * totem actions;
     */
    executeAfterAction(unit: IBattleUnit, isPlayer1: boolean) {
        const { hpRegen, statuses, totem, debuffs } = unit;
        // debuffs
        debuffs.forEach((debuff) => {
            if (eachTurnDebuffs.includes(debuff.type)) {
                executeDebuff(unit, debuff, this.battleRecord);
            }
        });
        // regenerates hp
        const regenHp = hpRegen;
        if (regenHp > 0) {
            unit.hp += regenHp;
            if (unit.hp > unit.maxHp) {
                unit.hp = unit.maxHp;
            }
            this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.REGEN_HP, value: regenHp, value2: unit.hp });
        }
        // check statuses
        statuses.forEach((st) => {
            const { type, value } = st;
            this.takeStatusDamage(unit, value, type);
        });
        // totem
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        if (totem) {
            totem.skills.forEach((skill) => {
                performTotemSkill(unit, totem, skill, allyUnits, opponentUnits, this.battleRecord);
            });
        }
    }

    performSkill(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        switch (skill.type) {
            case EHeroSkillType.ATTACK:
                this.performAttack(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.ATTRIBUTE_INCREASE:
                this.performAttrIncrease(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.ATTRIBUTE_DECREASE:
                this.performAttrDecrease(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.BUFF:
                this.performBuff(unit, skill.buff, isPlayer1);
                break;
            case EHeroSkillType.BUFF_COPY:
                this.performBuffCopy(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.BUFF_INCREASE_VALUE:
                this.performBuffValueIncrease(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.DEBUFF:
                this.performDebuff(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.DEBUFF_REMOVE:
                this.performDebuffRemove(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.HEAL:
                this.performHeal(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.STATUS_APPLY:
                this.performApplyStatus(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.STATUS_REMOVE:
                this.performRemoveStatus(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.SUMMON:
                this.performSummon(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.SUMMON_REMOVE:
                this.performRemoveSummon(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.SWAP_HP:
                this.performSwapHp(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.TOTEM:
                this.performTotem(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.TOTEM_REMOVE:
                this.performRemoveTotem(unit, skill, isPlayer1);
                break;
            case EHeroSkillType.TOTEM_INCREASE_VALUE:
                this.performTotemIncreaseValue(unit, skill, isPlayer1);
                break;
            default:
                console.log("No handler for skill type", skill.type);
        }
    }

    performBasicAttack(unit: IBattleUnit, skill: IHeroSkill | undefined, isPlayer1: boolean) {
        //TODO: basic atack should go after skill set (not every skill in skillset)

        if (!skill || skill.isBasicAttack) {
            const baTimesBuff = unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_ADD_TIMES);
            const additionalBaTimes = baTimesBuff ? baTimesBuff.value : 0;

            if (unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.BASIC_ATTACK_TWICE)) {
                this.basicAttack(unit, isPlayer1, 40);
                this.basicAttack(unit, isPlayer1, 40);
                for (let i = 0; i < additionalBaTimes; i++) {
                    this.basicAttack(unit, isPlayer1, 40);
                }
            } else {
                this.basicAttack(unit, isPlayer1);
                for (let i = 0; i < additionalBaTimes; i++) {
                    this.basicAttack(unit, isPlayer1);
                }
            }
        }
    }

    performAttack(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType, value, attackType } = skill;
        if (!targetType || !attackType || value === undefined) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const targets = getOpponentTargets(opponentUnits, targetType, skill.markType);
        if (!targets) {
            return;
        }

        // calculate attack damage
        let attackDamage = value;

        // calculate attack damage according to items bonuses
        const bonusType =
            unit.attackType === EHeroAttackType.MAGIC ? EItemBattleBonusType.INCREASE_MAGIC_DAMAGE : EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE;
        unit.itemBonuses.forEach((bonus) => {
            if (bonus.type === bonusType) {
                attackDamage += calculateIncreaseValue(attackDamage, bonus.value, bonus.valueType);
            }
        });

        // calculate attack damage according to buffs and debuffs
        unit.buffs.forEach((buff) => {
            if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
                const { value, valueType, valueFrom } = buff;
                if (!valueType || value === undefined) {
                    return;
                }
                const percentFrom = valueFrom ? unit[valueFrom] : undefined;
                attackDamage += calculateIncreaseValue(attackDamage!, value, valueType, percentFrom);
            }
        });

        // calculate critical strike value
        let isCrit = false;
        if (unit.critChance > 0) {
            if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
                isCrit = true;
                attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
            }
        }

        // record
        const attackRecord = { unitId: unit.id, type: EBattleActionType.ATTACK, value: attackDamage, isCrit, targets: [] };
        this.battleRecord.push(attackRecord);

        targets.forEach((target) => {
            // check if target has a summon - summon takes damage instead
            let parentUnit;
            let finalTarget = target;
            if (target.summon) {
                finalTarget = target.summon;
                parentUnit = target;
            }
            // record
            //this.battleRecord.push({ unitId: unit.id, targetId: finalTarget.id, type: EBattleActionType.ATTACK, value: attackDamage });
            //
            this.dealDamage(unit, finalTarget, attackDamage!, skill.attackType!, parentUnit, attackRecord);
        });
    }

    performAttrIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { value, valueType, valueFrom, attribute, targetType } = skill;
        if (!value || !valueType || !attribute || !targetType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            return;
        }

        targets.forEach((target) => {
            console.log("INCR ATTR TARGET", attribute, target);
            const increaseValue = calculateIncreaseValue(target[attribute], value, valueType, valueFrom && unit[valueFrom]);
            target[attribute] += increaseValue;
            console.log(">>>>", increaseValue, target[attribute]);
            this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.ATTRIBUTE_INCREASE, attribute, value: increaseValue });
        });
    }

    performAttrDecrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { value, valueType, attribute, targetType } = skill;
        if (!value || !valueType || !attribute || !targetType) {
            return;
        }

        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        const targets = getOpponentTargets(opponentUnits, targetType);
        if (!targets) {
            return;
        }

        targets.forEach((target) => {
            const decreaseValue = calculateIncreaseValue(target[attribute], value, valueType);
            target[attribute] -= decreaseValue;
            if (target[attribute] < 0) {
                target[attribute] = 0;
            }
            this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.ATTRIBUTE_DECREASE, attribute, value: decreaseValue });
        });
    }

    performBuff(unit: IBattleUnit, buff: IBuff | undefined, isPlayer1: boolean) {
        if (!buff) {
            return;
        }

        // record
        const buffAction: IBattleAction = { unitId: unit.id, type: EBattleActionType.BUFF, buffTargets: [], buff };
        this.battleRecord.push(buffAction);

        const { type, targetType, attribute, value, statusType } = buff;
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        switch (type) {
            case EBuffType.ADD_STATUS_ON_BASIC_ATTACK:
                {
                    if (!statusType || value === undefined) {
                        console.log("ERROR! Buff has no statusType or value", buff);
                        return;
                    }

                    const targets = getAllyTargets(unit, allyUnits, targetType);
                    if (!targets) {
                        console.log("ERROR! No targets found for buff", buff);
                        return;
                    }

                    targets.forEach((target) => {
                        target.buffs.push({ ...buff, totalValue: value });
                        buffAction.buffTargets?.push({ targetId: target.id });
                        //this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.BUFF, name });
                    });
                }
                break;
            case EBuffType.ATTRIBUTE_INCREASE:
                {
                    if (!attribute) {
                        return;
                    }

                    const targets = getAllyTargets(unit, allyUnits, targetType);
                    if (!targets) {
                        return;
                    }

                    targets.forEach((target) => {
                        // calculate buff value and add to unit attribute
                        const buffValue = calculateBuffValue(unit[attribute], buff, target);
                        target[attribute] += buffValue;

                        // save buff with calculated total value to unit buffs
                        target.buffs.push({ ...buff, totalValue: buffValue });
                        buffAction.buffTargets?.push({ targetId: target.id });
                        //this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.BUFF, name, buff });

                        this.battleRecord.push({
                            unitId: unit.id,
                            targetId: target.id,
                            type: EBattleActionType.ATTRIBUTE_INCREASE,
                            attribute,
                            value: buffValue,
                        });
                    });
                }
                break;
            case EBuffType.DIVINE_SHIELD:
            case EBuffType.IGNORE_ARMOR:
            case EBuffType.TOTAL_DAMAGE_INCREASE:
            case EBuffType.BASIC_ATTACK_IS_CRIT:
            case EBuffType.BASIC_ATTACK_ADD_TIMES:
                {
                    const targets = getAllyTargets(unit, allyUnits, targetType);
                    if (!targets) {
                        return;
                    }
                    targets.forEach((target) => {
                        target.buffs.push(buff);
                        buffAction.buffTargets?.push({ targetId: target.id });
                    });
                }
                break;
            default:
                console.log("No handler for buff type", type);
        }
    }

    performBuffValueIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType, value, valueType } = skill;

        if (!targetType || value === undefined || !valueType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);

        // get buff from target and increse its value
        targets?.forEach((target) => {
            const buff = getRandomArrayItem(target.buffs);

            if (!buff) {
                return;
            }

            const addValue = calculateIncreaseValue(buff.value, value, valueType);
            buff.value += addValue;

            // record
            const buffAction: IBattleAction = { unitId: unit.id, type: EBattleActionType.BUFF, buffTargets: [], buff };
            this.battleRecord.push(buffAction);
        });
    }

    performBuffCopy(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType, value, valueType } = skill;

        if (!targetType || value === undefined || !valueType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);

        // get buff from target and copy it to random ally
        targets?.forEach((target) => {
            const buff = { ...getRandomArrayItem(target.buffs) };
            buff.targetType = ETargetType.RANDOM_ALLY;

            if (!buff) {
                return;
            }

            this.performBuff(unit, buff, isPlayer1);
        });
    }

    performApplyStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { status, targetType, value } = skill;
        if (!status || !targetType || value === undefined) {
            return;
        }
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        const targets = getOpponentTargets(opponentUnits, targetType);
        if (!targets) {
            return;
        }

        let finalValue = value;

        const itemBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === getStatusItemBonusType(status));
        if (itemBonus) {
            finalValue += calculateIncreaseValue(1, itemBonus.value, itemBonus.valueType);
        }

        targets.forEach((target) => {
            applyStatus(unit, target, status, finalValue, this.battleRecord);
        });
    }

    /** Remove random status from target units */
    performRemoveStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            return;
        }

        targets.forEach((target) => {
            if (target.statuses.length === 0) {
                return;
            }
            if (target.statuses.length === 1) {
                removeStatus(unit, target, target.statuses[0].type, this.battleRecord);
                return;
            }
            const randomStatus = getRandomArrayItem(target.statuses);
            removeStatus(unit, target, randomStatus.type, this.battleRecord);
        });
    }

    performDebuff(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { debuff } = skill;
        if (!debuff) {
            return;
        }

        console.log("performDebuff", debuff);

        // record
        const debuffAction: IBattleAction = { unitId: unit.id, type: EBattleActionType.DEBUFF, buffTargets: [], debuff };
        this.battleRecord.push(debuffAction);

        const { type, targetType, name, attribute, value, mpScale, ppScale } = debuff;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        const targets = getOpponentTargets(opponentUnits, targetType);
        if (!targets) {
            return;
        }

        switch (type) {
            case EDebuffType.ATTRIBUTE_DECREASE:
                {
                    if (!attribute) {
                        return;
                    }

                    targets.forEach((target) => {
                        // calculate buff value and add to unit attribute
                        const debuffValue = calculateDebuffValue(unit, target[attribute], debuff!);
                        target[attribute] -= debuffValue;
                        // save buff with calculated total value to unit buffs
                        target.debuffs.push({ ...debuff, totalValue: debuffValue });
                        debuffAction.buffTargets?.push({ targetId: target.id });

                        this.battleRecord.push({
                            unitId: unit.id,
                            targetId: target.id,
                            type: EBattleActionType.ATTRIBUTE_DECREASE,
                            attribute,
                            value: debuffValue,
                        });
                    });
                }
                break;
            case EDebuffType.HEALING_DECREASE:
            case EDebuffType.MAGIC_RESIST_DECREASE:
                {
                    targets.forEach((target) => {
                        target.debuffs.push({ ...debuff });
                        debuffAction.buffTargets?.push({ targetId: target.id });
                    });
                }
                break;
            case EDebuffType.MARK_HUNTER:
            case EDebuffType.MARK_PREDATOR:
            case EDebuffType.PHYSICAL_RESIST_DECREASE:
                {
                    targets.forEach((target) => {
                        target.debuffs.push({ ...debuff });
                        debuffAction.buffTargets?.push({ targetId: target.id });
                    });
                }
                break;
            default:
                console.log("No handler for debuff type", type);
        }
    }

    performDebuffRemove(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            return;
        }

        targets.forEach((target) => {
            if (target.debuffs.length === 0) {
                return;
            }
            if (target.debuffs.length === 1) {
                removeDebuff(unit, target, 0, this.battleRecord);
                return;
            }
            const randomIndex = getRandomArrayIndex(target.debuffs);
            removeDebuff(unit, target, randomIndex, this.battleRecord);
        });
    }

    performHeal(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType, value, mpScale, ppScale } = skill;
        if (!targetType || !value) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return;
        }

        // calculate outgoing heal value
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        let finalHeal = value + mpScaleValue + ppScaleValue;
        // TODO: calculate outgoing heal value accordint to buffs and debuffs

        // calculate outgoing heal bonuses from items
        unit.itemBonuses.forEach((bonus) => {
            if (bonus.type === EItemBattleBonusType.HEAL_INCREASE) {
                finalHeal += calculateIncreaseValue(finalHeal, bonus.value, bonus.valueType);
            }
        });

        targets.forEach((target) => {
            // calculate incoming heal value from target buffs and debuffs
            target.debuffs.forEach((debuff) => {
                if (debuff.type === EDebuffType.HEALING_DECREASE) {
                    finalHeal = finalHeal - calculateDebuffValue(unit, finalHeal, debuff);
                }
            });
            console.log("FINAL HEAL after buffs/debuffs", finalHeal);

            target.hp += finalHeal;
            if (target.hp > target.maxHp) {
                target.hp = target.maxHp;
            }

            this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.HEAL, value: finalHeal });
        });
    }

    performSummon(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { summon } = skill;
        if (!summon) {
            return;
        }

        unit.summon = prepareSummonToBattle(summon);

        const summonBonuses = unit.itemBonuses.filter((bonus) => summonItemBattleBonuses.includes(bonus.type));
        summonBonuses.forEach((bonus) => {
            const { type, value, valueType } = bonus;
            if (type === EItemBattleBonusType.INCREASE_SUMMON_ATTACK) {
                unit.summon!.attack += calculateIncreaseValue(unit.summon!.attack, value, valueType);
            } else if (type === EItemBattleBonusType.INCREASE_SUMMON_HP) {
                unit.summon!.maxHp += calculateIncreaseValue(unit.summon!.maxHp, value, valueType);
            }
        });

        this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.SUMMON, name: summon.name, summon: { ...unit.summon } });
    }

    performRemoveSummon(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const target = getTargetWithSummon(opponentUnits);

        if (!target) {
            return;
        }

        removeSummon(target);
        this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.SUMMON_REMOVE });
    }

    performTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { totem } = skill;
        if (!totem) {
            return;
        }

        if (unit.summon) {
            removeSummon(unit);
        }

        unit.totem = prepareTotemToBattle(totem);
        this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.TOTEM_PLACE, name: totem.name, totem: unit.totem });
    }

    performRemoveTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const target = getTargetWithTotem(opponentUnits);

        if (!target) {
            return;
        }

        removeTotem(target);
        this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.TOTEM_REMOVE });
    }

    performTotemIncreaseValue(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType, value, valueType, valueFrom, mpScale, ppScale } = skill;

        if (!targetType || value === undefined || !valueType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const totemTargets = getAllyTotems(unit, allyUnits, targetType);

        if (totemTargets.length === 0) {
            return;
        }

        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

        totemTargets.forEach((totem) => {
            totem.skills.forEach((totemSkill) => {
                if (totemSkill.value === undefined) {
                    return;
                }
                const percentFrom = valueFrom ? unit[valueFrom] : undefined;
                totemSkill.value += calculateIncreaseValue(totemSkill.value, value, valueType, percentFrom) + mpScaleValue + ppScaleValue;
            });

            this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.TOTEM_INCREASE_VALUE, name: "Increase totem value", totem });
        });
    }

    performSwapHp(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return;
        }

        targets.forEach((target) => {
            swapHp(unit, target, this.battleRecord);
        });
    }

    /** Calculate basic attack damage from offensive buffs and debuffs and perform an attack */
    basicAttack(unit: IBattleUnit, isPlayer1: boolean, attackPercent?: number) {
        const { attackTargetType, summon } = unit;
        let finalUnit = unit;
        // if unit has a summon - summon attacks instead
        if (summon) {
            finalUnit = summon;
        }

        // find attack target
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const targets = getOpponentTargets(opponentUnits, summon ? summon.attackTargetType : attackTargetType, unit.basicAttackMarkType);
        if (!targets) {
            return;
        }

        // calculate basic attack damage according to buffs and debuffs
        let attackDamage = attackPercent ? Math.floor((finalUnit.attack * attackPercent) / 100) : finalUnit.attack;
        unit.buffs.forEach((buff) => {
            if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
                const { value, valueType, valueFrom } = buff;
                if (!valueType || value === undefined) {
                    return;
                }
                const percentFrom = valueFrom ? unit[valueFrom] : undefined;
                attackDamage += calculateIncreaseValue(attackDamage, value, valueType, percentFrom);
            }
        });

        //CRIT

        // calculate critical strike value
        let isCrit = false;
        if (unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_IS_CRIT)) {
            isCrit = true;
            attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
        } else if (unit.critChance > 0) {
            if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
                isCrit = true;
                attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
            }
        }

        const critNonCritBonus = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR);
        if (critNonCritBonus) {
            // increase damage if critical hit, descrese damage on non critical hit
            if (isCrit) {
                attackDamage += calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
            } else {
                attackDamage -= calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
            }
        }

        // record
        const attackRecord = { unitId: finalUnit.id, type: EBattleActionType.ATTACK, value: attackDamage, isCrit, targets: [] };
        this.battleRecord.push(attackRecord);
        //
        targets.forEach((target) => {
            // check if target has a summon - summon takes damage instead
            let finalTarget = target;
            let parentUnit;
            if (target.summon) {
                finalTarget = target.summon;
                parentUnit = target;
            }
            //
            this.dealDamage(unit, finalTarget, attackDamage, finalUnit.attackType, parentUnit, attackRecord);
            // apply statuses on basic attack
            unit.buffs.forEach((buff) => {
                if (buff.type === EBuffType.ADD_STATUS_ON_BASIC_ATTACK) {
                    const { statusType, value } = buff;
                    if (!statusType || value === undefined) {
                        return;
                    }
                    applyStatus(unit, target, statusType, value, this.battleRecord);
                }
            });
        });

        // remove TILL_NEXT_BA buffs and debuffs
        this.removeBuffs(unit, EBuffTimeType.TILL_NEXT_BA);
        this.removeDebuffs(unit, EBuffTimeType.TILL_NEXT_BA);
    }

    /** Calculate final damage according to TARGET unit defense, buffs and debuffs */
    dealDamage(
        unit: IBattleUnit,
        target: IBattleUnit,
        damageValue: number,
        damageType: EHeroAttackType,
        parentUnit: IBattleUnit | undefined,
        attackRecord: IBattleAction
    ) {
        const recordTarget = { targetId: target.id, damageValue: 0, isEvasion: false };
        attackRecord.targets?.push(recordTarget);
        let finalDamageValue = damageValue;

        // check if divine shield is active
        const divineShield = target.buffs.find((buff) => buff.type === EBuffType.DIVINE_SHIELD);
        if (divineShield) {
            this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: 0, value2: target.hp });
            removeBuff(target, divineShield, this.battleRecord);
            //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.BUFF_REMOVED, name: "Divine shield" });
            return;
        }

        if (damageType === EHeroAttackType.MAGIC) {
            // calculate defense debuffs
            target.debuffs.forEach((debuff) => {
                if (debuff.type === EDebuffType.MAGIC_RESIST_DECREASE) {
                    const { value, valueType } = debuff;
                    if (!valueType) {
                        console.log("ERROR! No valueType");
                        return;
                    }
                    finalDamageValue += calculateIncreaseValue(finalDamageValue, value, valueType);
                }
            });
        } else if (damageType === EHeroAttackType.PHYSICAL) {
            // calculate defense debuffs
            target.debuffs.forEach((debuff) => {
                if (PHYSICAL_RESIST_DESCREASE_DEBUFFS.includes(debuff.type)) {
                    const { value, valueType } = debuff;
                    if (!valueType) {
                        console.log("ERROR! No valueType");
                        return;
                    }
                    finalDamageValue += calculateIncreaseValue(finalDamageValue, value, valueType);
                }
            });
        }

        // check bonus damage to summons
        if (target.isSummon) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                    }
                });
        }

        // check bonus damage to bleeding target
        if (target.statuses.find((status) => status.type === EStatusType.BLEED)) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                    }
                });
        }

        // check bonus damage to poisoned target
        if (target.statuses.find((status) => status.type === EStatusType.POISON)) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                    }
                });
        }

        // EVASION

        // by default evasion only works versus physical attacks and skills
        if (damageType === EHeroAttackType.PHYSICAL) {
            let isEvasion = false;
            if (unit.evasionChance > 0) {
                if (getRandomIntFromInterval(0, 100) <= unit.evasionChance) {
                    isEvasion = true;
                    finalDamageValue = Math.floor(finalDamageValue * EVASION_MODIFIER);
                    recordTarget.isEvasion = true;
                }
            }
        }

        // ARMOR

        const ignoreArmorBuff = unit.buffs.find((buff) => buff.type === EBuffType.IGNORE_ARMOR);
        if (ignoreArmorBuff) {
            // check for pure hp damage bonuses
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_HP) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                    }
                });
        }

        if (!ignoreArmorBuff) {
            //TODO:calculate total armor
            let armor = target.armor;

            // check if damage dealt to armor
            if (target.armor > 0) {
                // check for armor damage bonuses
                unit.itemBonuses &&
                    unit.itemBonuses.forEach((bonus) => {
                        if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR) {
                            finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                        }
                    });
            } else {
                // check for pure hp damage bonuses
                unit.itemBonuses &&
                    unit.itemBonuses.forEach((bonus) => {
                        if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_HP) {
                            finalDamageValue += calculateIncreaseValue(finalDamageValue, bonus.value, bonus.valueType);
                        }
                    });
            }
            // check if damage dealt to hp

            let armorLeft = armor - finalDamageValue;
            if (armorLeft < 0) {
                armorLeft = 0;
            }

            const armorDamaged = armorLeft > 0 ? finalDamageValue : armor;
            if (armorDamaged > 0 && attackRecord?.targets) {
                attackRecord.targets[attackRecord.targets.length - 1].armorValue = armorDamaged;
            }

            finalDamageValue -= armor;
            if (finalDamageValue < 0) {
                finalDamageValue = 0;
            }
            // decrease armor
            target.armor = armorLeft;
            //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_ARMOR_DAMAGE, value: finalDamageValue, value2: armorLeft });
        }

        this.takeDamage(target, finalDamageValue, parentUnit, recordTarget);
    }

    takeDamage(target: IBattleUnit, damageValue: number, parentUnit: IBattleUnit | undefined, recordTarget: IActionAttackTarget) {
        target.hp -= damageValue;

        //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp });
        recordTarget.damageValue = damageValue;

        if (target.hp <= 0) {
            target.hp = 0;
            this.battleRecord.push({ unitId: target.id, type: EBattleActionType.DEATH });
            // if summon dies remove it from parent unit
            if (parentUnit) {
                parentUnit.summon = undefined;
            }
        }
    }

    takeStatusDamage(target: IBattleUnit, damageValue: number, statusType: EStatusType) {
        target.hp -= damageValue;

        const { armor } = target;

        const ignoreArmor = [EStatusType.BLEED, EStatusType.POISON].includes(statusType);

        if (!ignoreArmor && target.armor > 0) {
            // calclate damage to armor
            let finalDamageValue = damageValue;
            let armorLeft = armor - finalDamageValue;
            if (armorLeft < 0) {
                armorLeft = 0;
            }

            const armorDamaged = armorLeft > 0 ? finalDamageValue : armor;

            finalDamageValue -= armor;
            if (finalDamageValue < 0) {
                finalDamageValue = 0;
            }
            // decrease armor
            target.armor = armorLeft;
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.TAKE_DAMAGE,
                value: finalDamageValue,
                value2: target.hp,
                status: statusType,
                armorValue: armorDamaged,
            });
        } else {
            this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp, status: statusType });
        }

        // remove BURN after damage
        if (statusType === EStatusType.BURN) {
            removeStatus(target, target, statusType, this.battleRecord);
        }

        if (target.hp <= 0) {
            target.hp = 0;
            this.battleRecord.push({ unitId: target.id, type: EBattleActionType.DEATH });
        }
    }

    checkBattleOver() {
        //console.log("checkBattleOver");
        const allPlayerHeroesDead = this.player1BattleUnits.every((unit) => unit === null || unit.hp <= 0);
        if (allPlayerHeroesDead) {
            console.log("all Player Heroes Dead");
            this.isBattleWin = false;
            return true;
        }
        const allEnemyHeroesDead = this.player2BattleUnits.every((unit) => unit === null || unit.hp <= 0);
        if (allEnemyHeroesDead) {
            this.isBattleWin = true;
            console.log("all enemy Heroes Dead");
            return true;
        }
        return false;
    }

    removeBuffs(unit: IBattleUnit, timeType: EBuffTimeType) {
        const buffsToRemove = unit.buffs.filter((buff) => buff.timeType === timeType);
        buffsToRemove.forEach((buff) => removeBuff(unit, buff, this.battleRecord));
    }

    removeDebuffs(unit: IBattleUnit, timeType: EBuffTimeType) {
        const debuffToRemoveIndexes = unit.debuffs.reduce((indexesToRemove, debuff, index) => {
            if (debuff.timeType === timeType) {
                indexesToRemove.push(index);
            }
            return indexesToRemove;
        }, [] as number[]);
        debuffToRemoveIndexes.forEach((index) => removeDebuff(unit, unit, index, this.battleRecord));
    }

    displayBattleRecord() {
        this.battleRecord.forEach((action) => {
            switch (action.type) {
                case EBattleActionType.STATUS_APPLY:
                    {
                        console.log(action.unitId + " applies " + action.status + " " + action.value + " on " + action.targetId);
                    }
                    break;
                case EBattleActionType.ATTRIBUTE_INCREASE:
                    {
                        console.log(action.unitId + " increase " + action.attribute + " to " + action.value + " for " + action.targetId);
                    }
                    break;
                case EBattleActionType.ATTACK:
                    {
                        console.log(action.unitId + " basic attack " + action.targets?.[0].targetId + " with " + action.value);
                    }
                    break;
                case EBattleActionType.BUFF:
                    {
                        const target = action.targetId || "self";
                        console.log(action.unitId + " buff " + target + " with " + action.name);
                    }
                    break;
                case EBattleActionType.BUFF_REMOVED:
                    {
                        console.log(action.name + " removed from " + action.unitId);
                    }
                    break;
                case EBattleActionType.DEBUFF:
                    {
                        const target = action.targetId || "self";
                        console.log(action.unitId + " debuff " + target + " with " + action.name);
                    }
                    break;
                case EBattleActionType.DEATH:
                    {
                        console.log(action.unitId + " DIED !");
                    }
                    break;
                case EBattleActionType.HEAL:
                    {
                        console.log(action.unitId + " heals " + action.value + " " + action.targetId);
                    }
                    break;
                case EBattleActionType.REGEN_HP:
                    {
                        console.log(action.unitId + " regens " + action.value + "hp");
                    }
                    break;
                case EBattleActionType.ROUND_END:
                    {
                        console.log("--------- ");
                    }
                    break;
                case EBattleActionType.ROUND_START:
                    {
                        console.log("--------- " + action.value);
                    }
                    break;
                case EBattleActionType.SUMMON:
                    {
                        console.log(action.unitId + " summons " + action.name);
                    }
                    break;
                case EBattleActionType.TAKE_DAMAGE:
                    {
                        console.log(action.unitId + " takes " + action.value + " damage, " + action.value2 + " hp left");
                    }
                    break;
                case EBattleActionType.TOTEM_PLACE:
                    {
                        console.log(action.unitId + " places totem " + action.name);
                    }
                    break;
                case EBattleActionType.TURN_START:
                    {
                        console.log("-- " + action.name);
                    }
                    break;
                default:
                    console.log("No description for action", action.type);
            }
        });
    }
}
