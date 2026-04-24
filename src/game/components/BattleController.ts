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
    TBattleRecord,
    IActionTarget,
    EItemBattleBonusType,
    IHeroSkillSet,
    IDebuff,
    ESkillCondition,
    EAppTriggerType,
    IAppTrigger,
    IBuffOrDebuff,
    ITotem,
    IBattleTrigger,
} from "../../types";
import { eachTurnDebuffs, EVASION_MODIFIER, summonItemBattleBonuses } from "../battleConsts";
import { PHYSICAL_RESIST_DESCREASE_DEBUFFS } from "../heroConsts";
import {
    applyBuff,
    applyDebuff,
    applyStatus,
    calculateBuffValue,
    calculateDamageBonuses,
    calculateDebuffValue,
    calculateIncreaseValue,
    calculateUnitsAfterBattle,
    changeBuffCurrent,
    changeBuffValue,
    checkBattleTriggerBuffDebuff,
    checkSkillCondition,
    executeDebuff,
    getAllyTargets,
    getAllyTotems,
    getExistingBuff,
    getOpponentTargets,
    getStatusItemBonusType,
    getTargets,
    getTargetWithSummon,
    getTargetWithTotem,
    prepareSummonToBattle,
    prepareTotemToBattle,
    prepareUniqueSummonToBattle,
    prepareUnitToBattle,
    reduceStatus,
    removeBuff,
    removeDebuff,
    removeDebuffSimple,
    removeStatus,
    removeSummon,
    removeTotem,
    swapHp,
    takeStatusDamage,
    isTriggerReady,
    triggerBattleTrigger,
    dealOverhealDamage,
} from "../utils/battleUtils";
import { getRandomArrayIndex, getRandomArrayItem, getRandomIntFromInterval } from "../utils/commonUtils";
import { calculateSkillValue } from "../utils/skillUtils";
import { performTotemSkill } from "../utils/totemBattleUtils";

const slotCount = 4;

export class BattleController {
    roundCount: number = 1;
    isTillDeath: boolean;

    player1Units: TUnits;
    player2Units: TUnits;

    player1BattleUnits: (IBattleUnit | null)[];
    player2BattleUnits: (IBattleUnit | null)[];

    listOfTriggers: IBattleTrigger[];

    battleRecord: TBattleRecord;

    isBattleWin: boolean;
    currentActingUnitId?: string;

    constructor() {
        this.roundCount = 1;
    }

    activateOnStartSkills() {
        const onStartSkills: {
            unit: IBattleUnit;
            skillSet: IHeroSkillSet;
            isPlayer1: boolean;
        }[] = [];
        const passiveBuffs: {
            unit: IBattleUnit;
            buff: IBuff;
            isPlayer1: boolean;
        }[] = [];
        // normal skills
        this.player1BattleUnits.forEach((unit) => {
            if (!unit) {
                return;
            }
            if (unit.passiveSkill?.preBattleBuff)
                passiveBuffs.push({
                    unit,
                    buff: unit.passiveSkill?.preBattleBuff,
                    isPlayer1: true,
                });
            unit.skills.forEach((skill) => {
                if (skill.isActivateOnStart) {
                    onStartSkills.push({
                        unit,
                        skillSet: skill,
                        isPlayer1: true,
                    });
                }
            });
        });
        this.player2BattleUnits.forEach((unit) => {
            if (!unit) {
                return;
            }
            if (unit.passiveSkill?.preBattleBuff)
                passiveBuffs.push({
                    unit,
                    buff: unit.passiveSkill?.preBattleBuff,
                    isPlayer1: false,
                });
            unit.skills.forEach((skill) => {
                if (skill.isActivateOnStart) {
                    onStartSkills.push({
                        unit,
                        skillSet: skill,
                        isPlayer1: false,
                    });
                }
            });
        });
        //console.log("ON START SKILLS", onStartSkills);
        passiveBuffs.forEach(({ unit, buff, isPlayer1 }) => {
            this.performBuff(unit, undefined, buff, isPlayer1, true);
        });
        //
        onStartSkills.forEach(({ unit, skillSet, isPlayer1 }) => {
            const skillSetBattleAction: IBattleAction = {
                unitId: unit.id,
                type: EBattleActionType.PEFORM_SKILLSET,
                name: skillSet.name,
                animation: skillSet.animation,
            };
            unit.customNumber = 0;
            this.battleRecord.push(skillSetBattleAction);

            skillSet.skills.forEach((skill) => {
                if (skill.condition === ESkillCondition.NOT_BEFORE_COMBAT) return;
                if (skill.condition) {
                    const isConditionFulfilled = checkSkillCondition(unit, skill.condition);
                    if (isConditionFulfilled) {
                        this.performSkill(unit, skill, isPlayer1, true);
                    }
                } else {
                    this.performSkill(unit, skill, isPlayer1, true);
                }
                //this.performSkill(unit, skill, isPlayer1, true);
            });
        });
    }

    async start(player1Units: (IUnit | null)[], player2Units: (IUnit | null)[], isTillDeath: boolean, roundCount: number) {
        //console.log("battle start", player1Units, roundCount);
        this.player1Units = player1Units;
        this.player2Units = player2Units;
        this.roundCount = roundCount;
        this.isTillDeath = isTillDeath;
        this.prepareToBattle();
        console.log("-= Pre battle =-", this.player1BattleUnits, this.player2BattleUnits);
        //
        this.battleRecord = [];

        if (this.isTillDeath) {
            this.roundCount = 30;
        }

        let battleIsOver = false;

        // activate all on start skills
        this.activateOnStartSkills();

        //console.log("start battle " + this.roundCount);
        for (let i = 0; i < this.roundCount; i++) {
            if (battleIsOver) {
                break;
            }
            this.battleRecord.push({
                type: EBattleActionType.ROUND_START,
                value: i,
            });

            //
            // calculate attacks order
            for (let j = 0; j < slotCount; j++) {
                const player1Unit = this.player1BattleUnits[j];
                this.performAction(player1Unit, i, true);
                if (player1Unit && this.checkBattleOver()) {
                    console.log("BATTLE IS OVER. player 1 units all dead");
                    battleIsOver = true;
                    break;
                }
                const player2Unit = this.player2BattleUnits[j];
                this.performAction(player2Unit, i, false);
                if (player2Unit && this.checkBattleOver()) {
                    console.log("BATTLE IS OVER. player 2 units all dead");
                    battleIsOver = true;
                    break;
                }
            }
            // ROUND_CYCLE EAppTrigger
            this.listOfTriggers.forEach((bt) => {
                triggerBattleTrigger(EAppTriggerType.ROUND_CYCLE, this);
                // if (bt && bt.type === EAppTriggerType.ROUND_CYCLE) {
                //     checkBattleTriggerBuffDebuff(bt, this);
                // }
            });
            this.listOfTriggers = this.listOfTriggers.filter((t) => t.type !== EAppTriggerType.NONE);
            //console.log(" -= DEBUG =- trigger list size", this.listOfTriggers.length);
            //
            this.battleRecord.push({
                type: EBattleActionType.ROUND_END,
                value: i,
            });
        }
        //console.log("battle display record");
        // display battle record
        //this.displayBattleRecord();
        // move battle units back to units
        this.player1Units = calculateUnitsAfterBattle(this.player1BattleUnits);
    }

    prepareToBattle() {
        const player1NumberOfHeroes = this.player1Units.filter((u) => !!u).length;
        const player2NumberOfHeroes = this.player2Units.filter((u) => !!u).length;
        //console.log("Party size",player1NumberOfHeroes,player2NumberOfHeroes);
        this.listOfTriggers = [];

        this.player1BattleUnits = this.player1Units.map((unit, index) => {
            if (!unit) {
                return null;
            }
            const frontRow = (player1NumberOfHeroes <= 2 && index === 0) || (player1NumberOfHeroes > 2 && index <= 1);
            //console.log("Unit",unit," index",index," front",frontRow);
            return prepareUnitToBattle(unit, !frontRow);
        });

        this.player2BattleUnits = this.player2Units.map((unit, index) => {
            if (!unit) {
                return null;
            }
            const frontRow = (player2NumberOfHeroes <= 2 && index === 0) || (player2NumberOfHeroes > 2 && index <= 1);
            //console.log("Unit",unit," index",index," front",frontRow);
            return prepareUnitToBattle(unit, !frontRow);
        });
    }

    performTriggerAction(bt: IBattleTrigger, at: IAppTrigger, bfodbf: IBuffOrDebuff) {
        console.log("-= Perform Trigger Action =-",bt,at);
        if (isTriggerReady(at)) {
            const triggerBattleAction: IBattleAction = {
                unitId: bt.originBattleUnit.id,
                type: EBattleActionType.BATTLE_TRIGGER,
                targetId: bt.anchorTarget.id,
                name: bt.type.toString() + " / " + bt.targetCheck.toString(),
            };
            this.battleRecord.push(triggerBattleAction);
            at.skill.forEach((sk) => {
                this.performSkill(bt.originBattleUnit, sk, bt.isPlayer1, false);
            });
            if (at.limitedRepeats) {
                if (bfodbf.buff) {
                    bfodbf.buff.totalValue = (bfodbf.buff.totalValue || 0) - 1;
                    if (bfodbf.buff.totalValue < 1) {
                        removeBuff(bt.anchorTarget, bfodbf.buff, this.battleRecord);
                        bt.type = EAppTriggerType.NONE;
                    }
                }
                if (bfodbf.debuff) {
                    bfodbf.debuff.totalValue = (bfodbf.debuff.totalValue || 0) - 1;
                    if (bfodbf.debuff.totalValue < 1) {
                        removeDebuffSimple(bt.anchorTarget, bfodbf.debuff, this.battleRecord);
                        bt.type = EAppTriggerType.NONE;
                    }
                }
            }
        }
    }

    performAction(unit: IBattleUnit | null, round: number, isPlayer1: boolean, recurseDeep: number = 0, forcedSingleCast: boolean = false) {
        // forcedSingleCast ~ do NOT skill chain & do NOT basic attack
        if (!unit) {
            return;
        }

        if (unit.hp <= 0) {
            return;
        }

        this.battleRecord.push({
            type: EBattleActionType.TURN_START,
            name: unit.id,
            unitId: unit.id,
        });

        if (!forcedSingleCast && recurseDeep === 0) {
            this.currentActingUnitId = unit.id;
        }

        const skillIndex = unit.currentSkillIndex;
        if (unit.currentSkillIndex === 3) {
            unit.currentSkillIndex = 0;
        } else {
            unit.currentSkillIndex++;
        }

        const skillSet = unit.skills.length >= skillIndex ? unit.skills[skillIndex] : null;

        let isSkillDisabled = false;
        if (skillSet) {
            /* TODO: this mechanic if some unique debuff is present
            const bleedStacks = unit.statuses.find((st) => st.type === EStatusType.BLEED);
            if (bleedStacks && bleedStacks.value > 0) {
                // increase BLEED stacks for each used skill
                const increase =  Math.floor(bleedStacks.value/3)+1;
                applyStatus(unit,unit,bleedStacks.type,increase,this.battleRecord);
            }
            */

            // check for disable skill debuffs (DISABLE_SKILL)
            if (!skillSet.isMcSkill) {
                //console.log("skillset: ", skillSet.name);
                const disableSkillDebuffIndex = unit.debuffs.findIndex((db) => db.type === EDebuffType.DISABLE_SKILL);
                if (disableSkillDebuffIndex !== -1) {
                    isSkillDisabled = true;
                    removeDebuff(unit, unit, disableSkillDebuffIndex, this.battleRecord);
                }
            }

            if (isSkillDisabled) {
                this.performBasicAttack(unit, undefined, isPlayer1);
                return;
            }

            const skillSetBattleAction: IBattleAction = {
                unitId: unit.id,
                type: EBattleActionType.PEFORM_SKILLSET,
                name: skillSet.name,
                animation: skillSet.animation,
            };
            this.battleRecord.push(skillSetBattleAction);

            unit.customNumber = 0;

            skillSet.skills.forEach((skill) => {
                if (forcedSingleCast && skill.type === EHeroSkillType.FORCE_UNIT_CAST_SKILL) return; // Ban FORCE_UNIT_CAST_SKILL on FORCE_UNIT_CAST_SKILL
                if (skill.condition) {
                    const isConditionFulfilled = checkSkillCondition(unit, skill.condition);
                    if (isConditionFulfilled) {
                        this.performSkill(unit, skill, isPlayer1);
                    }
                } else {
                    this.performSkill(unit, skill, isPlayer1);
                }
            });
            if (forcedSingleCast) return; // do not skill chain or basic attack
            if (skillSet.isChained && recurseDeep < 5) {
                this.battleRecord.push({
                    unitId: unit.id,
                    type: EBattleActionType.SKILL_CHAIN,
                });
                this.performAction(unit, round, isPlayer1, recurseDeep + 1);
            } else if (skillSet.isBasicAttack || skillSet.isBasicAttack === undefined) {
                this.performBasicAttack(unit, undefined, isPlayer1);
            }
        } else {
            // if there is no skill for the round perform basic attack
            this.performBasicAttack(unit, undefined, isPlayer1);
        }

        if (forcedSingleCast) return; // skip executeAfterAction
        if (recurseDeep === 0) {
            this.executeAfterAction(unit, isPlayer1);

            // items with CAST_SKILL_X_ROUND - use skill in the item
            unit.itemBonuses
                .filter((ib) => ib.type === EItemBattleBonusType.CAST_SKILL_X_ROUND && ib.value === round && ib.relatedSkill)
                .forEach((ib) => {
                    const itemSkillSet = ib.relatedSkill;
                    if (!itemSkillSet) {
                        return;
                    }
                    unit.customNumber = 0;
                    itemSkillSet.skills.forEach((skill) => {
                        if (skill.condition) {
                            const isConditionFulfilled = checkSkillCondition(unit, skill.condition);
                            if (isConditionFulfilled) {
                                this.performSkill(unit, skill, isPlayer1);
                            }
                        } else {
                            this.performSkill(unit, skill, isPlayer1);
                        }
                    });
                });
            this.currentActingUnitId = undefined;
        }
    }

    /** Execute all after action activities every round:
     * statuses actication (poison, bleed, burn, hpRegen);
     * totem actions;
     * every turn buffs and debufs actions
     */
    executeAfterAction(unit: IBattleUnit, isPlayer1: boolean) {
        const { hpRegen, statuses, totem, debuffs, buffs } = unit;
        // debuffs
        debuffs.forEach((debuff) => {
            if (eachTurnDebuffs.includes(debuff.type)) {
                executeDebuff(unit, debuff, this.battleRecord);
            }
            if (debuff.timeType === EBuffTimeType.DURATION) {
                debuff.duration = (debuff.duration || 0) - 1;
                if (debuff.duration < 1) {
                    removeDebuffSimple(unit, debuff, this.battleRecord);
                }
            }
        });
        buffs.forEach((buff) => {
            if (buff.timeType === EBuffTimeType.DURATION) {
                buff.duration = (buff.duration || 0) - 1;
                console.log("buff", buff.name, "time", buff.duration);
                if (buff.duration < 1) {
                    removeBuff(unit, buff, this.battleRecord);
                }
            }
        });

        // regenerates hp
        const regenHp = hpRegen;
        if (regenHp > 0) {
            unit.hp += regenHp;
            if (unit.hp > unit.maxHp) {
                unit.hp = unit.maxHp;
            }
            this.battleRecord.push({
                unitId: unit.id,
                type: EBattleActionType.REGEN_HP,
                value: regenHp,
                value2: unit.hp,
            });
        }
        // check statuses
        statuses.forEach((st) => {
            const { type, value } = st;
            //this.takeStatusDamage(unit, value, type);
            if (st.type === EStatusType.SHOCK) {
                return;
            }
            if (st.type === EStatusType.RADIATE) {
                removeStatus(unit, unit, st.type, this.battleRecord);
                return;
            }
            if (st.type === EStatusType.BLEED && hpRegen > 0) {
                const reduction = Math.min(Math.floor(hpRegen / 5) + 1, st.value);
                reduceStatus(unit, unit, st.type, reduction, this.battleRecord);
                // BLEED may reduce hp regeneration
                unit.hpRegen -= Math.max(0, Math.min(hpRegen, Math.floor(reduction / 2)));
            }
            takeStatusDamage(unit, value, type, this.battleRecord);
        });
        // totem
        this.performTotemActionSkill(totem, unit, isPlayer1);
    }

    performTotemActionSkill(totem: ITotem, unit: IBattleUnit, isPlayer1: boolean) {
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        if (totem) {
            totem.skills.forEach((skill) => {
                performTotemSkill(unit, totem, skill, allyUnits, opponentUnits, this.battleRecord, this);
            });
        }
    }

    performSkill(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        if (skill.condition === ESkillCondition.ONLY_BEFORE_COMBAT && !isStartBattle) return;
        switch (skill.type) {
            case EHeroSkillType.ATTACK:
                this.performAttack(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.ATTRIBUTE_INCREASE:
                this.performAttrIncrease(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.ATTRIBUTE_DECREASE:
                this.performAttrDecrease(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.BUFF:
                this.performBuff(unit, skill, skill.buff, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.BUFF_COPY:
                this.performBuffCopy(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.BUFF_INCREASE_VALUE:
                this.performBuffValueIncrease(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.BUFF_REMOVE:
                this.performBuffRemove(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.DEBUFF:
                this.performDebuff(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.DEBUFF_REMOVE:
                this.performDebuffRemove(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.HEAL:
                this.performHeal(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.STATUS_APPLY:
                this.performApplyStatus(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.STATUS_REMOVE:
                this.performRemoveStatus(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.SUMMON:
                this.performSummon(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.SUMMON_REMOVE:
                this.performRemoveSummon(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.SWAP_HP:
                this.performSwapHp(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.TOTEM:
                this.performTotem(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.TOTEM_REMOVE:
                this.performRemoveTotem(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.TOTEM_INCREASE_VALUE:
                this.performTotemIncreaseValue(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.REPEATING_SKILL:
                if (skill.childSkill) {
                    const count = Math.min(calculateSkillValue(skill, unit), 20);
                    console.log("REPEATING_SKILL x" + count);
                    for (let i = 0; i < count; i++) {
                        if (skill.childSkill.condition) {
                            const isConditionFulfilled = checkSkillCondition(unit, skill.childSkill.condition);
                            if (isConditionFulfilled) {
                                this.performSkill(unit, skill.childSkill, isPlayer1);
                            }
                        } else {
                            this.performSkill(unit, skill.childSkill, isPlayer1);
                        }
                    }
                }
                break;
            case EHeroSkillType.CALCULATE_NUMBER:
                this.performCustomCalculation(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.FORCE_UNIT_MAKE_ATTACK:
                this.performForceOutOfTurnAction(unit, skill, isPlayer1, false, isStartBattle);
                break;
            case EHeroSkillType.FORCE_UNIT_CAST_SKILL:
                this.performForceOutOfTurnAction(unit, skill, isPlayer1, true, isStartBattle);
                break;
            case EHeroSkillType.FORCE_TOTEM_ACTION:
                this.performForceOutOfTurnTotem(unit, skill, isPlayer1, isStartBattle);
                break;
            case EHeroSkillType.NONE:
                {
                }
                break;
            default:
                console.log("No handler for skill type", skill.type);
        }
    }

    performBasicAttack(unit: IBattleUnit, skill: IHeroSkill | undefined, isPlayer1: boolean) {
        //if (!skill || skill.isBasicAttack) {
        if (unit.summon) {
            this.performActionSummon(unit.summon, isPlayer1);
            return;
        }

        const baTimesBuff = unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_ADD_TIMES);
        const additionalBaTimes = baTimesBuff ? baTimesBuff.value : 0;
        const twiceAttackMods = unit.itemBonuses.filter((ib) => ib.type == EItemBattleBonusType.BASIC_ATTACK_TWICE).map((ib) => ib.value);
        twiceAttackMods.sort((a, b) => b - a);
        //console.log("DEBUG: twice attacks: " + twiceAttackMods.join(", "));

        if (twiceAttackMods.length > 0) {
            // get maximum twice attack mod (first index position)
            // and perform 2+addBaTimes attacks
            for (let i = -2; i < additionalBaTimes; i++) this.basicAttack(unit, isPlayer1, twiceAttackMods[0]);
            // perform 1 attack per rest twice attack mods (excluding max mod)
            for (let j = 1; j < twiceAttackMods.length; j++) this.basicAttack(unit, isPlayer1, twiceAttackMods[j]);
        } else {
            this.basicAttack(unit, isPlayer1);
            for (let i = 0; i < additionalBaTimes; i++) {
                this.basicAttack(unit, isPlayer1);
            }
        }
        // remove TILL_NEXT_BA buffs and debuffs
        this.removeBuffs(unit, EBuffTimeType.TILL_NEXT_BA);
        this.removeDebuffs(unit, EBuffTimeType.TILL_NEXT_BA);
        // triggers
        triggerBattleTrigger(EAppTriggerType.BASIC_ATTACK, this, unit);
    }

    performAttack(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, value, attackType, mpScale, ppScale } = skill;
        if (!targetType || !attackType || value === undefined) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const targets = getOpponentTargets(opponentUnits, targetType, skill.markType);
        if (!targets) {
            return;
        }

        let isCritAllowed = attackType === EHeroAttackType.PHYSICAL;
        if (attackType === EHeroAttackType.MAGIC) {
            // check if crit with magic available
            const isCritWithMagic = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_WITH_MAGIC);
            isCritAllowed = !!isCritWithMagic;
        }

        // calculate attack damage
        const { attackDamage, isCrit } = calculateDamageBonuses(unit, attackType, value, isCritAllowed, mpScale, ppScale);

        // calculate attack damage according to items bonuses
        // const bonusType =
        //     unit.attackType === EHeroAttackType.MAGIC ? EItemBattleBonusType.INCREASE_MAGIC_DAMAGE : EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE;
        // unit.itemBonuses.forEach((bonus) => {
        //     if (bonus.type === bonusType) {
        //         attackDamage += calculateIncreaseValue(attackDamage, bonus.value, bonus.valueType);
        //     }
        // });

        // calculate scale from MP or PP
        // const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        // const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        // attackDamage += mpScaleValue + ppScaleValue;

        // calculate attack damage according to buffs and debuffs
        // unit.buffs.forEach((buff) => {
        //     if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
        //         const { value, valueType, valueFrom } = buff;
        //         if (!valueType || value === undefined) {
        //             return;
        //         }
        //         const percentFrom = valueFrom ? unit[valueFrom] : undefined;
        //         attackDamage += calculateIncreaseValue(attackDamage!, value, valueType, percentFrom);
        //     }
        // });

        // calculate critical strike value
        // let isCrit = false;
        // if (unit.critChance > 0) {
        //     if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
        //         isCrit = true;
        //         attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
        //     }
        // }

        // record
        const attackRecord = {
            unitId: unit.id,
            type: EBattleActionType.ATTACK,
            value: attackDamage,
            isCrit,
            targets: [],
            skill,
            isStartBattle,
        };
        this.battleRecord.push(attackRecord);

        targets.forEach((target) => {
            // check if target has a summon - summon takes damage instead
            let parentUnit; // owner of a summon
            let finalTarget = target;
            if (target.summon) {
                finalTarget = target.summon;
                parentUnit = target;
            }
            if (isCritAllowed) {
                const bleedStacks = finalTarget.statuses.find((st) => st.type === EStatusType.BLEED);
                if (bleedStacks && bleedStacks.value > 0) {
                    // increase BLEED stacks for each used skill
                    const increase = Math.floor(bleedStacks.value / 5) + 1;
                    applyStatus(unit, finalTarget, bleedStacks.type, increase, this.battleRecord);
                }
            }
            // check if target unit has antiskill shield
            const antiskillShieldBuff = finalTarget.buffs.find((buff) => buff.type === EBuffType.ANTISKILL_MIRROR);
            if (antiskillShieldBuff) {
                removeBuff(target, antiskillShieldBuff, this.battleRecord);
                this.dealDamage(unit, unit, attackDamage, skill.attackType!, parentUnit, attackRecord);
                return;
            }

            this.dealDamage(unit, finalTarget, attackDamage, skill.attackType!, parentUnit, attackRecord);
        });
    }

    performAttrIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { value, valueType, valueFrom, attribute, targetType, mpScale, ppScale } = skill;
        if (!value || !valueType || !attribute || !targetType) {
            console.log("performAttrIncrease RETURN 1");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets) {
            console.log("performAttrIncrease RETURN 2");
            return;
        }

        const battleAction: IBattleAction = {
            unitId: unit.id,
            type: EBattleActionType.ATTRIBUTE_INCREASE,
            targets: [],
            skill,
            isStartBattle,
        };
        this.battleRecord.push(battleAction);

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

        targets.forEach((target) => {
            //console.log("INCR ATTR TARGET", attribute, target);
            const increaseValue = calculateIncreaseValue(target[attribute], value, valueType, valueFrom && unit[valueFrom]) + mpScaleValue + ppScaleValue;

            target[attribute] += increaseValue;
            //console.log(">>>>", increaseValue, target[attribute]);
            //this.battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.ATTRIBUTE_INCREASE, attribute, value: increaseValue });
            battleAction.targets?.push({
                targetId: target.id,
                attribute,
                value: increaseValue,
            });
        });
    }

    performAttrDecrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { value, valueType, attribute, targetType, targetUnitId } = skill;
        if (!value || !valueType || !attribute || !targetType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        const targets = getTargets(unit, allyUnits, opponentUnits, targetType, targetUnitId);

        if (!targets) {
            return;
        }

        targets.forEach((target) => {
            const decreaseValue = calculateIncreaseValue(target[attribute], value, valueType);
            target[attribute] -= decreaseValue;
            if (target[attribute] < 0) {
                target[attribute] = 0;
            }
            this.battleRecord.push({
                unitId: unit.id,
                targetId: target.id,
                type: EBattleActionType.ATTRIBUTE_DECREASE,
                attribute,
                value: decreaseValue,
                isStartBattle,
            });
        });
    }

    performBuff(unit: IBattleUnit, skill: IHeroSkill | undefined, buff: IBuff | undefined, isPlayer1: boolean, isStartBattle?: boolean) {
        if (!buff) {
            console.log("performBuff RETURN 1");
            return;
        }
        //console.log("performBuff > ", skill, buff);
        // record
        const buffAction: IBattleAction = {
            unitId: unit.id,
            type: EBattleActionType.BUFF,
            buffTargets: [],
            buff,
            isStartBattle,
            skill,
        };
        this.battleRecord.push(buffAction);

        const { type, targetType, targetUnitId, attribute, value, statusType, mpScale, ppScale } = buff;
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType, targetUnitId);
        if (!targets) {
            console.log("ERROR! No targets found for buff", buff);
            return;
        }
        if (targets.length === 1) {
            const isAdditionalTarget = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.ADDITIONAL_BUFF_TARGET);
            if (isAdditionalTarget) {
                //const additionalTargets = getAllyTargets(unit, allyUnits, ETargetType.RANDOM_ALLY_EXCEPT_ID, targets[0].id);
                const additionalTargets = allyUnits.filter((u) => !!u && u.id !== targets[0].id);
                const rndTarget = additionalTargets.at(getRandomIntFromInterval(0, additionalTargets.length - 1));
                //console.log("ADDITIONAL_BUFF_TARGET item bonus",additionalTargets,allyUnits,rndTarget);
                additionalTargets && rndTarget && targets.push(rndTarget);
            }
        }
        targets.forEach((target) => {
            if (target) {
                applyBuff(target, buff, buffAction, this, unit, isPlayer1);
                if (!buff.cannotBeTargeted) {
                    triggerBattleTrigger(EAppTriggerType.RECIEVE_BUFF, this, target);
                }
            }
        });
    }

    performBuffValueIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, value, valueType, targetBuffId } = skill;

        if (!targetType || value === undefined || !valueType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const filteredUnits = targetBuffId ? allyUnits.filter((u) => !!u && u.buffs.some((b) => b.name === targetBuffId)) : allyUnits;
        const targets = getAllyTargets(unit, filteredUnits, targetType);

        //console.log("performBuffValueIncrease > get buff from", targets);

        // check if at least one buffed ally found
        if (!targets?.[0]) {
            console.log("performBuffValueIncrease > no buff to copy found");
            return;
        }

        // get buff from target and increse its value
        targets?.forEach((target) => {
            const buff = targetBuffId
                ? { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted && b.name === targetBuffId)) }
                : { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted)) };

            if (!buff) {
                return;
            }

            const addValue = calculateIncreaseValue(buff.totalValue || 0, value, valueType);
            buff.value = buff.timeType === EBuffTimeType.DURATION ? (buff.totalValue || 0) + addValue : addValue;
            buff.valueType = "number";
            buff.targetType = ETargetType.BY_UNIT_ID;
            buff.targetUnitId = target.id;

            //console.log("performBuffValueIncrease > BUFF", buff);

            // record
            // const buffAction: IBattleAction = {
            //     unitId: unit.id,
            //     type: EBattleActionType.BUFF,
            //     buffTargets: [{ targetId: target.id, existingBuff: true }],
            //     buff,
            //     isStartBattle,
            // };
            // this.battleRecord.push(buffAction);

            this.performBuff(unit, skill, buff, isPlayer1, isStartBattle);
        });
    }

    performBuffCopy(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, value, valueType, targetFromType } = skill;

        if (!targetType || !targetFromType || value === undefined || !valueType) {
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetFromType);

        // check if at least one buffed ally found
        if (!targets?.[0]) {
            console.log("performBuffCopy > no buff to copy found");
            return;
        }

        // get buff from target and copy it to random ally
        targets?.forEach((target) => {
            const buff = { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted)) };
            buff.targetType = targetType; //ETargetType.RANDOM_ALLY;

            if (!buff) {
                console.log("no buff found for copy!");
                return;
            }

            this.performBuff(unit, skill, buff, isPlayer1, isStartBattle);
        });
    }

    /**
     *
     * @param unit who applies status
     */
    performApplyStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { status, targetType, targetUnitId, value, mpScale, ppScale, valueFrom, valueType } = skill;
        if (!status || !targetType || value === undefined) {
            return;
        }
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        //const targets = getOpponentTargets(opponentUnits, targetType, undefined, targetUnitId);
        const targets = getTargets(unit, allyUnits, opponentUnits, targetType, targetUnitId);

        if (!targets) {
            return;
        }

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        const baseValue =
            !valueType || valueType === "number" || valueType === "evolvedNumber" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0;

        let finalValue = baseValue + mpScaleValue + ppScaleValue;

        const itemBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === getStatusItemBonusType(status));
        if (itemBonus) {
            finalValue += calculateIncreaseValue(1, itemBonus.value, itemBonus.valueType);
        }

        targets.forEach((target) => {
            //console.log("APPLY STATUS", unit, target, status, finalValue);
            applyStatus(unit, target, status, finalValue, this.battleRecord, isStartBattle);
        });
    }

    /** Remove random status from target units */
    performRemoveStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
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
            removeStatus(unit, target, randomStatus.type, this.battleRecord, isStartBattle);
        });
    }

    performDebuff(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { debuff } = skill;
        if (!debuff) {
            return;
        }
        //console.log("performDebuff", debuff);
        // record
        const debuffAction: IBattleAction = {
            unitId: unit.id,
            type: EBattleActionType.DEBUFF,
            buffTargets: [],
            debuff,
            isStartBattle,
            skill,
        };
        this.battleRecord.push(debuffAction);

        const { type, targetType, name, attribute, value, mpScale, ppScale, duration } = debuff;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        const targets = getOpponentTargets(opponentUnits, targetType, skill.markType);
        if (!targets) {
            console.log("performDebuff: FAIL to find targets", targetType, skill.markType);
            return;
        } else
            targets.forEach((target) => {
                if (target) {
                    // check if target unit has antis debuff bonuses (ANTISKILL_SHIELD, IGNORE_NEXT_DEBUFF)
                    const antiskillShieldBuff = target.buffs.find((buff) => buff.type === EBuffType.ANTISKILL_MIRROR);
                    if (antiskillShieldBuff) {
                        removeBuff(target, antiskillShieldBuff, this.battleRecord);
                        applyDebuff(unit, debuff, debuffAction, this, unit, isPlayer1);
                        return;
                    }
                    const ignoreDebuffBuff = target.buffs.find((buff) => buff.type === EBuffType.IGNORE_NEXT_DEBUFF);
                    if (ignoreDebuffBuff) {
                        changeBuffValue(target, ignoreDebuffBuff, -1, this.battleRecord);
                        return;
                    }
                    applyDebuff(target, debuff, debuffAction, this, unit, isPlayer1);
                    if (!debuff.cannotBeTargeted) {
                        triggerBattleTrigger(EAppTriggerType.RECIEVE_DEBUFF, this, target);
                    }
                }
            });
    }

    performDebuffRemove(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1);
        console.log("performDebuffRemove targets", targets);
        if (!targets || targets.length === 0) {
            return;
        }
        targets.forEach((target) => {
            if (target) {
                if (target.debuffs.length === 0) {
                    return;
                }
                const rndDebuff = getRandomArrayItem(target.debuffs.filter((d) => !d.cannotBeTargeted));
                if (rndDebuff) {
                    removeDebuffSimple(target, rndDebuff, this.battleRecord);
                }
            }
        });
    }

    performBuffRemove(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1);
        console.log("performBuffRemove targets", targets);
        if (!targets || targets.length === 0) {
            return;
        }
        targets.forEach((target) => {
            if (target) {
                if (target.buffs.length === 0) {
                    return;
                }
                const rndBuff = getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted));
                if (rndBuff) {
                    removeBuff(target, rndBuff, this.battleRecord);
                }
            }
        });
    }

    performHeal(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, value, mpScale, ppScale, valueType, valueFrom } = skill;
        if (!targetType || !value) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }
        const targets = this.getTargetsSimple(unit,targetType,isPlayer1);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return;
        }

        // calculate outgoing heal value
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        const baseValue =
            !valueType || valueType === "number" || valueType === "evolvedNumber" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0;
        //console.log("Heal base value ",baseValue,value,valueType,valueFrom);
        let finalHeal = baseValue + mpScaleValue + ppScaleValue;

        // calculate outgoing heal value accordint to buffs and debuffs
        unit.buffs.forEach((buff) => {
            if (buff.type === EBuffType.OUTGOING_HEAL) {
                const { value, valueType, valueFrom } = buff;
                if (!valueType || value === undefined) {
                    return;
                }
                const percentFrom = valueFrom ? unit[valueFrom] : undefined;
                finalHeal += calculateIncreaseValue(finalHeal, value, valueType, percentFrom);
            }
        });
        // calculate outgoing heal bonuses from items
        unit.itemBonuses.forEach((bonus) => {
            if (bonus.type === EItemBattleBonusType.HEAL_INCREASE) {
                finalHeal += calculateIncreaseValue(finalHeal, bonus.value, bonus.valueType);
            }
        });

        // check for DARK_HEAL buff
        const darkHealBuff = unit.buffs.find((buff) => buff.type === EBuffType.DARK_HEAL);
        if (darkHealBuff) {
            this.performDarkHealAttack(unit, skill, finalHeal, isPlayer1, isStartBattle);
            return;
        }
        // OVERHEAL_TO_DAMAGE

        let overhealTotal = 0;
        targets.forEach((target) => {
            if (target) {
                // calculate incoming heal value from target buffs and debuffs
                target.debuffs.forEach((debuff) => {
                    if (debuff.type === EDebuffType.HEALING_DECREASE) {
                        finalHeal = finalHeal - calculateDebuffValue(unit, finalHeal, debuff);
                    }
                });
                //console.log("FINAL HEAL after buffs/debuffs", finalHeal);

                // check if target has antiheal debuffs (like ANTIHEAL)
                const antihealDebuffIndex = target.debuffs.findIndex((debuff) => debuff.type === EDebuffType.ANTIHEAL);

                if (antihealDebuffIndex !== -1) {
                    removeDebuff(target, target, antihealDebuffIndex, this.battleRecord);
                    //const antihealDebuff = target.debuffs[antihealDebuffIndex];
                    //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: 0, value2: target.hp });
                    // record
                    const attackRecord: IBattleAction = {
                        unitId: target.id,
                        type: EBattleActionType.ATTACK,
                        value: finalHeal,
                        targets: [],
                    };
                    this.battleRecord.push(attackRecord);
                    const recordTarget = {
                        targetId: target.id,
                        isEvasion: false,
                    };
                    attackRecord?.targets?.push(recordTarget);
                    //
                    this.takeDamage(target, finalHeal, undefined, recordTarget);
                    //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.BUFF_REMOVED, name: "Divine shield" });
                    return;
                }
                let finalReduction = 0;
                // BLEED & POISON interaction
                target.statuses.forEach((status) => {
                    if (status.type === EStatusType.BLEED) {
                        const reduction = Math.min(Math.floor(finalHeal / 5) + 1, status.value);
                        reduceStatus(target, target, status.type, reduction, this.battleRecord);
                    }
                    if (status.type === EStatusType.POISON) {
                        const finalReduction = Math.min(finalHeal, Math.floor(status.value / 2) + 1, status.value);
                        reduceStatus(target, target, status.type, finalReduction, this.battleRecord);
                        //finalHeal -= reduction;
                    }
                });
                //
                target.hp += finalHeal - finalReduction;
                if (target.hp > target.maxHp) {
                    overhealTotal += target.hp - target.maxHp;
                    target.hp = target.maxHp;
                }

                this.battleRecord.push({
                    unitId: unit.id,
                    targetId: target.id,
                    type: EBattleActionType.HEAL,
                    value: finalHeal,
                    isStartBattle,
                });
            }
        });
        // overheal managing
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        dealOverhealDamage(overhealTotal, unit, unit.id, skill, opponentUnits, this);
    }

    performDarkHealAttack(unit: IBattleUnit, skill: IHeroSkill, value: number, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, isBasicAttack } = skill;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;

        let newTargetType = ETargetType.FIRST_ENEMY;
        switch (targetType) {
            case ETargetType.ALL_ALLIES:
                newTargetType = ETargetType.ALL_ENEMIES;
                break;
            case ETargetType.LOW_HP_ALLY:
                newTargetType = ETargetType.ALL_ENEMIES;
                break;
            default:
                newTargetType = ETargetType.FIRST_ENEMY;
        }

        const attackSkill: IHeroSkill = {
            isBasicAttack,
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.MAGIC,
            targetType: newTargetType,
            value,
            valueType: "number",
        };

        this.performAttack(unit, attackSkill, isPlayer1, isStartBattle);
    }

    performSummon(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { summon } = skill;
        if (!summon) {
            return;
        }

        // TODO: apply bonuses instead if summon already exists
        // --> bonuses will be checked & applied in summon skill
        //     by adding condition HAS_SUMMON
        //     and normal summoning with condition HAS_NO_SUMMON_OR_TOTEM
        if (unit.summon) {
            console.log("summon already exists !");
            return;
        }

        unit.summon = prepareSummonToBattle(summon, unit.isBackRowPosition);

        // check unique summon types
        prepareUniqueSummonToBattle(unit);

        const summonBonuses = unit.itemBonuses.filter((bonus) => summonItemBattleBonuses.includes(bonus.type));
        summonBonuses.forEach((bonus) => {
            const { type, value, valueType } = bonus;
            if (type === EItemBattleBonusType.INCREASE_SUMMON_ATTACK) {
                unit.summon!.attack += calculateIncreaseValue(unit.summon!.attack, value, valueType);
            } else if (type === EItemBattleBonusType.INCREASE_SUMMON_HP) {
                const addHpValue = calculateIncreaseValue(unit.summon!.maxHp, value, valueType);
                unit.summon!.maxHp += addHpValue;
                unit.summon!.hp += addHpValue;
            }
        });
        this.battleRecord.push({
            unitId: unit.id,
            type: EBattleActionType.SUMMON,
            name: summon.name,
            summon: { ...unit.summon },
            skill,
            isStartBattle,
        });

        triggerBattleTrigger(EAppTriggerType.SUMMON, this, unit);
        // this.listOfTriggers.forEach((bt) => {
        //     if (bt.type === EAppTriggerType.SUMMON && this.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1))
        //         checkBattleTriggerBuffDebuff(bt, this);
        // });
    }

    performRemoveSummon(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const targetList = this.getTargetsSimple(unit, skill.targetType, isPlayer1);
        for (let i = 0; i < (skill.value || 1); i++) {
            const target = getTargetWithSummon(targetList);
            if (target) {
                removeSummon(target);
                this.battleRecord.push({
                    unitId: unit.id,
                    targetId: target.id,
                    type: EBattleActionType.SUMMON_REMOVE,
                    isStartBattle,
                });
            }
        }
    }

    performTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { totem } = skill;
        if (!totem) {
            return;
        }

        if (unit.summon) {
            removeSummon(unit);
        }

        unit.totem = prepareTotemToBattle(totem);
        this.battleRecord.push({
            unitId: unit.id,
            type: EBattleActionType.TOTEM_PLACE,
            name: totem.name,
            totem: unit.totem,
            skill,
            isStartBattle,
        });
    }

    performRemoveTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const target = getTargetWithTotem(opponentUnits);

        if (!target) {
            return;
        }

        removeTotem(target);
        this.battleRecord.push({
            unitId: unit.id,
            targetId: target.id,
            type: EBattleActionType.TOTEM_REMOVE,
            isStartBattle,
        });
    }

    performTotemIncreaseValue(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
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

            this.battleRecord.push({
                unitId: unit.id,
                type: EBattleActionType.TOTEM_INCREASE_VALUE,
                name: "Increase totem value",
                totem,
                isStartBattle,
            });
        });
    }

    performSwapHp(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("performSwapHp > NO TARGET TYPE OR VALUE");
            return;
        }

        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;

        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performSwapHp > NO TARGET FOUND");
            return;
        }

        targets.forEach((target) => {
            swapHp(unit, target, this.battleRecord, isStartBattle);
        });
    }

    performForceOutOfTurnAction(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isCastSkill: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("performForceOutOfTurnAction > NO TARGET TYPE OR VALUE");
            return;
        }
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performForceOutOfTurnAction > NO TARGET FOUND");
            return;
        }

        targets.forEach((target) => {
            if (isCastSkill) this.performAction(target, 0, isPlayer1, 0, true);
            else this.performBasicAttack(target, undefined, isPlayer1);
        });
    }
    performForceOutOfTurnTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;
        if (!targetType) {
            console.log("performForceOutOfTurnAction > NO TARGET TYPE OR VALUE");
            return;
        }
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const targets = getAllyTargets(unit, allyUnits, targetType);
        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performForceOutOfTurnAction > NO TARGET FOUND");
            return;
        }

        targets.forEach((target) => {
            this.performTotemActionSkill(target.totem, target, isPlayer1);
        });
    }

    getTargetsSimple(unit: IBattleUnit, targetType: ETargetType, isPlayer1?: boolean): IBattleUnit[] | null {
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        if (targetType === ETargetType.EVERY_UNIT) {
            return [...allyUnits, ...opponentUnits].filter((unit) => !!unit);
        } else {
            return getTargets(unit, allyUnits, opponentUnits, targetType, this.currentActingUnitId);
        }
    }

    isTarget(target: IBattleUnit, unit: IBattleUnit, targetType: ETargetType, isPlayer1?: boolean): boolean {
        const dbgTargets = this.getTargetsSimple(unit, targetType, isPlayer1);
        console.log("-= isTarget =-",dbgTargets?.map(t => t.id),target.id,targetType,!!(dbgTargets?.includes(target)));
        return !!(dbgTargets?.includes(target));
    }

    performCustomCalculation(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType, value } = skill;
        if (!targetType || value === undefined) {
            console.log("NO TARGET TYPE OR VALUE");
            return;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return;
        }

        if (skill.childSkill) {
            targets.forEach((t) => {
                if (checkSkillCondition(t, skill.childSkill.condition)) {
                    unit.customNumber++;
                }
            });
        } else if (skill.status) {
            targets.forEach((t) => {
                const v = t.statuses?.find((s) => s.type === skill.status);
                !!v && (unit.customNumber += v.value);
            });
        } else if (skill.attribute) {
            targets.forEach((t) => {
                if (skill.attribute) {
                    unit.customNumber += t[skill.attribute];
                }
            });
        } else if (skill.valueType === "number" || skill.valueType === "evolvedNumber") {
            if (skill.value) {
                unit.customNumber = skill.value;
            }
        } else if ((skill.valueType === "percent" || skill.valueType === "evolvedPercent") && skill.valueFrom) {
            targets.forEach((t) => {
                if (skill.value && skill.valueFrom) {
                    const v = Math.floor((skill.value * t[skill.valueFrom]) / 100);
                    unit.customNumber += v;
                }
            });
        } else if (skill.valueType === "percent" || skill.valueType === "evolvedPercent") {
            if (skill.value) {
                unit.customNumber = Math.floor((skill.value * unit.customNumber) / 100);
            }
        } else {
            console.log("Error. Wrong calculation arguments.", skill);
            return;
        }
        //console.log("-= Calculate ", unit.customNumber, skill);
    }

    /** Summonned unit performs a skill or basic attack */
    performActionSummon(summonUnit: IBattleUnit, isPlayer1: boolean) {
        const skillIndex = summonUnit.currentSkillIndex;
        if (summonUnit.currentSkillIndex === 2) {
            summonUnit.currentSkillIndex = 0;
        } else {
            summonUnit.currentSkillIndex++;
        }

        const skillSet = summonUnit.skills.length >= skillIndex ? summonUnit.skills[skillIndex] : null;

        if (skillSet) {
            const skillSetBattleAction: IBattleAction = {
                unitId: summonUnit.id,
                type: EBattleActionType.PEFORM_SKILLSET,
                name: skillSet.name,
                animation: skillSet.animation,
            };
            this.battleRecord.push(skillSetBattleAction);

            summonUnit.customNumber = 0;
            // TODO: skill set should store isBasicAttack instead of skill
            skillSet.skills.forEach((skill) => {
                this.performSkill(summonUnit, skill, isPlayer1);

                // !!!! NO CHAIN SKILLS FOR SUMMONS
                // if (skillSet.isChained) {
                //     this.battleRecord.push({ unitId: unit.id, type: EBattleActionType.SKILL_CHAIN });
                //     this.performAction(unit, round, isPlayer1);
                // } else {
                //     this.performBasicAttack(unit, skill, isPlayer1, skillIndex);
                // }
            });
        }

        if (!skillSet || skillSet.isBasicAttack) {
            // if there is no skill for the round perform basic attack
            this.performBasicAttack(summonUnit, undefined, isPlayer1);
        }
        // remove TILL_NEXT_BA buffs and debuffs
        this.removeBuffs(summonUnit, EBuffTimeType.TILL_NEXT_BA);
        this.removeDebuffs(summonUnit, EBuffTimeType.TILL_NEXT_BA);
    }

    /** Calculate basic attack damage from offensive buffs and debuffs and perform an attack */
    basicAttack(unit: IBattleUnit, isPlayer1: boolean, attackPercent?: number) {
        const { attackTargetType, summon, buffs } = unit;
        //let finalUnit = unit;
        // if unit has a summon - summon attacks instead
        // if (summon) {
        //     finalUnit = summon;
        // }

        // check change target buffs
        const changeTargetBuff = buffs.find((buff) => buff.type === EBuffType.CHANGE_TARGET_TYPE);
        const targetType = changeTargetBuff ? changeTargetBuff.changeTargetTypeTo : attackTargetType;
        const markType = changeTargetBuff ? changeTargetBuff.changeTargetMarkType : unit.basicAttackMarkType;
        if (changeTargetBuff) {
            console.log("basicAttack : CHANGE TARGET buff,", changeTargetBuff.changeTargetTypeTo, "redirect", targetType, markType);
        }
        // find attack target
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        const opponentTargetType = summon ? summon.attackTargetType : targetType || ETargetType.FIRST_ENEMY;
        const targets = getOpponentTargets(opponentUnits, opponentTargetType, markType, this.currentActingUnitId);
        if (!targets) {
            return;
        }

        let isCritAllowed = unit.attackType === EHeroAttackType.PHYSICAL;
        if (unit.attackType === EHeroAttackType.MAGIC) {
            // check if crit with magic available
            const isCritWithMagic = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_WITH_MAGIC);
            isCritAllowed = !!isCritWithMagic;
        }

        let { attackDamage, isCrit } = calculateDamageBonuses(unit, unit.attackType, unit.attack, isCritAllowed, 0, 0);

        // calculate basic attack damage according to buffs and debuffs
        //unit.buffs.forEach((buff) => {
        // unit.buffs.forEach((buff) => {
        //     if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
        //         const { value, valueType, valueFrom } = buff;
        //         if (!valueType || value === undefined) {
        //             return;
        //         }
        //         const percentFrom = valueFrom ? unit[valueFrom] : undefined;
        //         attackDamage += calculateIncreaseValue(attackDamage, value, valueType, percentFrom);
        //     }
        // });

        //CRIT

        // calculate critical strike value
        // let isCrit = false;
        // if (unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_IS_CRIT)) {
        //     isCrit = true;
        //     attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
        // } else if (unit.critChance > 0) {
        //     if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
        //         isCrit = true;
        //         attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
        //     }
        // }

        // const critNonCritBonus = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR);
        // if (critNonCritBonus) {
        //     // increase damage if critical hit, descrese damage on non critical hit
        //     if (isCrit) {
        //         attackDamage += calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
        //     } else {
        //         attackDamage -= calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
        //     }
        // }

        // calculate dmg if using daggers with 2 attacks but lower damage
        attackDamage = attackPercent ? Math.floor((attackDamage * attackPercent) / 100) : attackDamage;

        // record
        const attackRecord = {
            unitId: unit.id,
            type: EBattleActionType.ATTACK,
            value: attackDamage,
            isCrit,
            targets: [],
        };
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
            if (isCritAllowed && isCrit) {
                const bleedStacks = finalTarget.statuses.find((st) => st.type === EStatusType.BLEED);
                //console.log("basicAttack --> ",finalTarget,bleedStacks)
                if (bleedStacks && bleedStacks.value > 0) {
                    // increase BLEED stacks for each used skill
                    const increase = Math.floor(bleedStacks.value / 10) + 1;
                    applyStatus(unit, finalTarget, bleedStacks.type, increase, this.battleRecord);
                }
            }
            // check if target has on-basic-attack buffs (like FIRE_SHIELD)
            const fireShieldBuff = finalTarget.buffs.find((buff) => buff.type === EBuffType.FIRE_SHIELD);
            if (fireShieldBuff) {
                //console.log("basicAttack >>> fireShieldBuff FOUND");
                //removeBuff(target, antiskillShieldBuff, this.battleRecord);
                const burnSkill: IHeroSkill = {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.BURN,
                    value: fireShieldBuff.value,
                    valueType: "number",
                    targetType: ETargetType.BY_UNIT_ID,
                    targetUnitId: unit.id,
                    isBasicAttack: false,
                };
                this.performApplyStatus(target, burnSkill, !isPlayer1, false);
            }
            //
            // check if target has on-basic debuffs (like BLADEDANCER_MARK)
            const bladedanceBuff = unit.buffs.find((buff) => buff.type === EBuffType.BLADEDANCE);
            if (bladedanceBuff) {
                //

                const debuff: IDebuff = {
                    type: EDebuffType.MARK_BLADEDANCER,
                    value: 1,
                    totalValue: 1,
                    targetType: ETargetType.CUSTOM,
                    timeType: EBuffTimeType.DUEL,
                    name: "Bladedancer mark",
                };
                const debuffAction: IBattleAction = {
                    unitId: unit.id,
                    type: EBattleActionType.DEBUFF,
                    buffTargets: [],
                    debuff,
                };
                this.battleRecord.push(debuffAction);

                applyDebuff(finalTarget, debuff, debuffAction, this);

                const bladedancerMark = finalTarget.debuffs.find((debuff) => debuff.type === EDebuffType.MARK_BLADEDANCER);
                if (bladedancerMark && bladedancerMark.totalValue) {
                    attackDamage += bladedancerMark.totalValue;
                }
            }

            // triggers
            triggerBattleTrigger(EAppTriggerType.TAKE_ATTACK, this, finalTarget);
            if (unit.hp <= 0) {
                return;
            }

            //
            this.dealDamage(unit, finalTarget, attackDamage, unit.attackType, parentUnit, attackRecord);

            // apply statuses on basic attack
            //TODO: move out of targets.forEach
            unit.buffs.forEach((buff) => {
                if (buff.type === EBuffType.ADD_STATUS_ON_BASIC_ATTACK) {
                    const { statusType, value } = buff;
                    if (!statusType || value === undefined) {
                        return;
                    }
                    applyStatus(unit, target, statusType, value, this.battleRecord);
                }
            });

            //TODO: move out of targets.forEach
            //const applyStatusBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === EItemBattleBonusType.APPLY_POISON_ON_HIT);
            const applyStatusBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK);
            if (applyStatusBonus) {
                const { type, value, status } = applyStatusBonus;
                if (!type || !status || value === undefined) {
                    return;
                }
                applyStatus(unit, target, status, value, this.battleRecord);
            }
            this.removeBuffs(target, EBuffTimeType.TILL_GOT_HIT);
            this.removeDebuffs(target, EBuffTimeType.TILL_GOT_HIT);
        });
    }

    /** Calculate final damage according to TARGET unit defense, buffs and debuffs */
    dealDamage(
        unit: IBattleUnit,
        target: IBattleUnit,
        damageValue: number,
        damageType: EHeroAttackType,
        parentUnit: IBattleUnit | undefined,
        attackRecord: IBattleAction,
    ) {
        const recordTarget = {
            targetId: target.id,
            damageValue: 0,
            isEvasion: false,
        };
        attackRecord.targets?.push(recordTarget);
        let finalDamageValue = damageValue;

        // check if cosmic shield is active
        const cosmicShield = target.buffs.find((buff) => buff.type === EBuffType.COSMIC_SHIELD);
        if (cosmicShield) {
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.TAKE_DAMAGE,
                value: 0,
                value2: target.hp,
            });
            changeBuffValue(target, cosmicShield, -1, this.battleRecord);

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
                    const { value, valueType, totalValue } = debuff;
                    if (!valueType) {
                        console.log("ERROR! No valueType");
                        return;
                    }
                    finalDamageValue += calculateIncreaseValue(finalDamageValue, totalValue || value, valueType);
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
        const evadeBuff = target.buffs.find((buff) => buff.type === EBuffType.EVADE);
        const blindDebuff = unit.debuffs.find((debuff) => debuff.type === EDebuffType.BLIND)?.totalValue || 0;
        const possibleEvasion = (damageType === EHeroAttackType.PHYSICAL ? target.evasionChance : 0) + blindDebuff;
        // magic attacks ignore [target.evasionChance], but can be dodged due BLIND debuff stacks
        if (possibleEvasion > 0) {
            if (getRandomIntFromInterval(0, 100) <= possibleEvasion) {
                finalDamageValue = Math.floor(finalDamageValue * EVASION_MODIFIER);
                recordTarget.isEvasion = true;
            }
        } else if (evadeBuff) {
            changeBuffValue(target, evadeBuff, -1, this.battleRecord);
            finalDamageValue = Math.floor(finalDamageValue * EVASION_MODIFIER);
            recordTarget.isEvasion = true;
        }

        // check if divine shield is active
        const divineShield = target.buffs.find((buff) => buff.type === EBuffType.DIVINE_SHIELD);
        if (divineShield) {
            const stacks = divineShield.totalValue;
            if (stacks) {
                if (finalDamageValue <= stacks) {
                    this.battleRecord.push({
                        unitId: target.id,
                        type: EBattleActionType.TAKE_DAMAGE,
                        value: 0,
                        value2: target.hp,
                    });
                    return;
                } else {
                    changeBuffValue(target, divineShield, finalDamageValue - stacks, this.battleRecord);
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

        const bonusDmgFromOverheal = target.statuses.find((st) => st.type === EStatusType.RADIATE)?.value;
        if (bonusDmgFromOverheal) takeStatusDamage(target, bonusDmgFromOverheal, EStatusType.RADIATE, this.battleRecord);

        if (target.hp <= 0) {
            triggerBattleTrigger(EAppTriggerType.KILL, this, unit);
        }
        // this.listOfTriggers.forEach((bt) => {
        //     if (bt.type === EAppTriggerType.KILL && this.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1))
        //         checkBattleTriggerBuffDebuff(bt, this);
        // });
    }

    takeDamage(target: IBattleUnit, damageValue: number, parentUnit: IBattleUnit | undefined, recordTarget: IActionTarget) {
        target.hp -= damageValue;

        //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp });
        recordTarget.damageValue = damageValue;

        if (target.hp <= 0) {
            target.hp = 0;
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.DEATH,
            });
            // if summon dies remove it from parent unit
            if (parentUnit) {
                console.log("SUMMON is DED!", parentUnit.summon);
                parentUnit.summon = undefined;
            } else {
                // triggers
                // ~ summons do not trigger DEATH
                triggerBattleTrigger(EAppTriggerType.DEATH, this, target);
            }
        }
    }

    // takeStatusDamage(target: IBattleUnit, damageValue: number, statusType: EStatusType) {
    //     target.hp -= damageValue;

    //     const { armor } = target;

    //     const ignoreArmor = [EStatusType.BLEED, EStatusType.POISON].includes(statusType);

    //     if (!ignoreArmor && target.armor > 0) {
    //         // calclate damage to armor
    //         let finalDamageValue = damageValue;
    //         let armorLeft = armor - finalDamageValue;
    //         if (armorLeft < 0) {
    //             armorLeft = 0;
    //         }

    //         const armorDamaged = armorLeft > 0 ? finalDamageValue : armor;

    //         finalDamageValue -= armor;
    //         if (finalDamageValue < 0) {
    //             finalDamageValue = 0;
    //         }
    //         // decrease armor
    //         target.armor = armorLeft;
    //         this.battleRecord.push({
    //             unitId: target.id,
    //             type: EBattleActionType.TAKE_DAMAGE,
    //             value: finalDamageValue,
    //             value2: target.hp,
    //             status: statusType,
    //             armorValue: armorDamaged,
    //         });
    //     } else {
    //         this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp, status: statusType });
    //     }

    //     // remove BURN after damage
    //     if (statusType === EStatusType.BURN) {
    //         removeStatus(target, target, statusType, this.battleRecord);
    //     }

    //     if (target.hp <= 0) {
    //         target.hp = 0;
    //         this.battleRecord.push({ unitId: target.id, type: EBattleActionType.DEATH });
    //     }
    // }

    checkBattleOver() {
        //console.log("checkBattleOver");
        const allPlayerHeroesDead = this.player1BattleUnits.every((unit) => unit === null || unit.hp <= 0);
        if (allPlayerHeroesDead) {
            //console.log("all Player Heroes Dead");
            this.isBattleWin = false;
            return true;
        }
        const allEnemyHeroesDead = this.player2BattleUnits.every((unit) => unit === null || unit.hp <= 0);
        if (allEnemyHeroesDead) {
            this.isBattleWin = true;
            //console.log("all enemy Heroes Dead");
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
        debuffToRemoveIndexes.sort((a, b) => b - a);
        debuffToRemoveIndexes.forEach((index) => removeDebuff(unit, unit, index, this.battleRecord));
    }

    addTrigger(trigger: IBattleTrigger) {
        this.listOfTriggers.push(trigger);
    }
}
