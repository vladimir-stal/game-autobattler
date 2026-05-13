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
    INestedBuffEffect,
    AnimationType,
} from "../../types";
import { allyTargets, CRIT_MODIFIER, eachTurnDebuffs, EVASION_MODIFIER, summonItemBattleBonuses } from "../battleConsts";
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
    checkBuffToRemove,
    checkDebuffToRemove,
    getItemBonusValue,
} from "../utils/battleUtils";
import { getRandomArrayIndex, getRandomArrayItem, getRandomIntFromInterval } from "../utils/commonUtils";
import { calculateSkillValue } from "../utils/skillUtils";
import { performTotemSkill } from "../utils/totemBattleUtils";
import { forEachNestedEffects } from "../utils/unitUtils";

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
    relevantTriggerUnitId?: string;
    anchorTriggerUnitId?: string;

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
                animation: skillSet.animationType,
            };
            unit.customNumber = 0;
            this.battleRecord.push(skillSetBattleAction);

            let lastTargetId: string | undefined = undefined;
            skillSet.skills.forEach((skill) => {
                if (skill.condition === ESkillCondition.NOT_BEFORE_COMBAT) return;
                if (skill.condition) {
                    const isConditionFulfilled = checkSkillCondition(unit, skill.condition, this);
                    if (isConditionFulfilled) {
                        lastTargetId = this.performSkill(unit, skill, isPlayer1, true, lastTargetId);
                    }
                } else {
                    lastTargetId = this.performSkill(unit, skill, isPlayer1, true, lastTargetId);
                }
                //this.performSkill(unit, skill, isPlayer1, true);
            });
            unit.customNumber = 0;
        });
        // pre battle triggers
        triggerBattleTrigger(EAppTriggerType.PRE_BATTLE, this);
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
        if (bt.originBattleUnit.hp <= 0 && !at.allowCastFromDead) {
            if (bfodbf.buff) {
                removeBuff(bt.anchorTarget, bfodbf.buff, this.battleRecord);
            } else if (bfodbf.debuff) {
                removeDebuffSimple(bt.anchorTarget, bfodbf.debuff, this.battleRecord);
            }
            bt.type = EAppTriggerType.NONE;
            return;
        }
        //console.log("-= Perform Trigger Action =-", bt, at, this.relevantTriggerUnitId);
        if (isTriggerReady(at)) {
            const triggerBattleAction: IBattleAction = {
                unitId: bt.originBattleUnit.id,
                type: EBattleActionType.BATTLE_TRIGGER,
                targetId: bt.anchorTarget.id,
                name: bt.type.toString() + " / " + bt.targetCheck.toString(),
            };
            this.anchorTriggerUnitId = bt.anchorTarget.id;
            this.battleRecord.push(triggerBattleAction);
            let lastTargetId: string | undefined = undefined;
            at.skill.forEach((sk) => {
                if (sk.condition) {
                    const isConditionFulfilled = checkSkillCondition(bt.originBattleUnit, sk.condition, this);
                    if (isConditionFulfilled) {
                        lastTargetId = this.performSkill(bt.originBattleUnit, sk, bt.isPlayer1, false, lastTargetId);
                    }
                } else {
                    lastTargetId = this.performSkill(bt.originBattleUnit, sk, bt.isPlayer1, false, lastTargetId);
                }
                //this.performSkill(bt.originBattleUnit, sk, bt.isPlayer1, false);
            });
            if (at.limitedRepeats) {
                if (bfodbf.buff) {
                    console.log("limited repeats", bfodbf.buff.totalValue);
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
            this.anchorTriggerUnitId = undefined;
        }
    }

    performSkillset(unit: IBattleUnit, isPlayer1: boolean, skillSet: IHeroSkillSet, forcedSingleCast: boolean) {
        const skillSetBattleAction: IBattleAction = {
            unitId: unit.id,
            type: EBattleActionType.PEFORM_SKILLSET,
            name: skillSet.name,
            animation: skillSet.animationType,
        };
        this.battleRecord.push(skillSetBattleAction);
        unit.customNumber = 0;
        let sameLastTarget: string | undefined; // SAME_LAST_TARGET
        skillSet.skills.forEach((skill) => {
            if (forcedSingleCast && skill.type === EHeroSkillType.FORCE_UNIT_CAST_SKILL) return; // Ban FORCE_UNIT_CAST_SKILL on FORCE_UNIT_CAST_SKILL
            if (skill.condition) {
                const isConditionFulfilled = checkSkillCondition(unit, skill.condition, this);
                if (isConditionFulfilled) {
                    sameLastTarget = this.performSkill(unit, skill, isPlayer1, false, sameLastTarget);
                }
            } else {
                sameLastTarget = this.performSkill(unit, skill, isPlayer1, false, sameLastTarget);
            }
        });
        unit.customNumber = 0;
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
            type: !forcedSingleCast ? EBattleActionType.TURN_START : EBattleActionType.BONUS_ACTION,
            name: unit.id,
            unitId: unit.id,
        });

        if (!forcedSingleCast && recurseDeep === 0) {
            this.currentActingUnitId = unit.id;
            triggerBattleTrigger(EAppTriggerType.TURN_START, this, unit, unit.id);
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
                let disableSkillDebuff = false;
                forEachNestedEffects(unit, (ne) => {
                    if (ne.debuffType === EDebuffType.DISABLE_SKILL && ne.totalValue > 0 && !disableSkillDebuff) {
                        ne.totalValue -= 1;
                        disableSkillDebuff = true;
                    }
                });
                if (disableSkillDebuff) {
                    isSkillDisabled = true;
                    checkDebuffToRemove(unit, EDebuffType.DISABLE_SKILL, this.battleRecord);
                }
            }

            if (isSkillDisabled) {
                this.performBasicAttack(unit, undefined, isPlayer1);
                return;
            }

            this.performSkillset(unit, isPlayer1, skillSet, forcedSingleCast);

            if (forcedSingleCast) return; // do not skill chain or basic attack
            if (skillSet.isChained && recurseDeep < 5) {
                this.battleRecord.push({
                    unitId: unit.id,
                    type: EBattleActionType.SKILL_CHAIN,
                });
                this.performAction(unit, round, isPlayer1, recurseDeep + 1);
            } else if (skillSet.isBasicAttack || skillSet.isBasicAttack === undefined) {
                let skipAttackDebuff = false;
                forEachNestedEffects(unit, (ne) => {
                    if (ne.debuffType === EDebuffType.SKILL_SKIP_BASIC_ATTACK && ne.value > 0 && !skipAttackDebuff) {
                        ne.value -= 1;
                        skipAttackDebuff = true;
                    }
                });
                if (skipAttackDebuff) {
                    checkDebuffToRemove(unit, EDebuffType.SKILL_SKIP_BASIC_ATTACK, this.battleRecord);
                } else {
                    this.performBasicAttack(unit, undefined, isPlayer1);
                }
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
                    let lastTargetId: string | undefined;
                    itemSkillSet.skills.forEach((skill) => {
                        if (skill.condition) {
                            const isConditionFulfilled = checkSkillCondition(unit, skill.condition, this);
                            if (isConditionFulfilled) {
                                lastTargetId = this.performSkill(unit, skill, isPlayer1, false, lastTargetId);
                            }
                        } else {
                            lastTargetId = this.performSkill(unit, skill, isPlayer1, false, lastTargetId);
                        }
                    });
                    unit.customNumber = 0;
                });
            this.currentActingUnitId = undefined;
        }
    }

    /** Execute all after action activities every round:
     * statuses activation (poison, bleed, burn, hpRegen);
     * totem actions;
     * every turn buffs and debufs actions
     */
    executeAfterAction(unit: IBattleUnit, isPlayer1: boolean) {
        const { hpRegen, statuses, totem, debuffs, buffs } = unit;
        if (unit.hp <= 0) {
            return;
        }
        triggerBattleTrigger(EAppTriggerType.TURN_END, this, unit, unit.id);
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
            if (st.type === EStatusType.BLEED) {
                /** Bleed lose half stacks every round, but not below 1 */
                /** (but Bleed can be increased with physical crits or physical attack skills) */
                const reduction = Math.floor(st.value / 2); // half round down
                // e.g. 1-0=1, 2-1=1, 3-1=2, 4-2=2...
                reduceStatus(unit, unit, st.type, reduction, this.battleRecord);
            }
            if (st.type === EStatusType.POISON) {
                /** Poison lose 1 stack every round, but not below 1 */
                if (st.value > 1) {
                    reduceStatus(unit, unit, st.type, 1, this.battleRecord);
                }
            }
            takeStatusDamage(unit, value, type, this.battleRecord);
        });
        // totem
        totem && this.performTotemActionSkill(totem, unit, isPlayer1);
        if (unit.hp <= 0) {
            triggerBattleTrigger(EAppTriggerType.DEATH, this, unit, unit.id);
        }
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

    performSkill(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        if (skill.condition === ESkillCondition.ONLY_BEFORE_COMBAT && !isStartBattle) {
            return sameLastTargetId;
        }

        switch (skill.type) {
            case EHeroSkillType.ATTACK:
                return this.performAttack(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.ATTRIBUTE_INCREASE:
                return this.performAttrIncrease(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.ATTRIBUTE_DECREASE:
                return this.performAttrDecrease(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.BUFF:
                return this.performBuff(unit, skill, skill.buff, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.BUFF_COPY:
                return this.performBuffCopy(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.BUFF_INCREASE_VALUE:
                return this.performBuffValueIncrease(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.BUFF_REMOVE:
                return this.performBuffRemove(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.DEBUFF:
                return this.performDebuff(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.DEBUFF_REMOVE:
                return this.performDebuffRemove(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.HEAL:
                return this.performHeal(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.STATUS_APPLY:
                return this.performApplyStatus(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.STATUS_REMOVE:
                return this.performRemoveStatus(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.STATUS_MODIFY_AMOUNT:
                return this.performStatusModifyAmount(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.SUMMON:
                this.performSummon(unit, skill, isPlayer1, isStartBattle);
                return sameLastTargetId;
            case EHeroSkillType.SUMMON_REMOVE:
                return this.performRemoveSummon(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.SWAP_HP:
                return this.performSwapHp(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.TOTEM:
                this.performTotem(unit, skill, isPlayer1, isStartBattle);
                return sameLastTargetId;
            case EHeroSkillType.TOTEM_REMOVE:
                return this.performRemoveTotem(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.TOTEM_INCREASE_VALUE:
                this.performTotemIncreaseValue(unit, skill, isPlayer1, isStartBattle);
                return sameLastTargetId;
            case EHeroSkillType.FORCE_REWIND_SKILL_INDEX:
                return this.performRewind(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.COPY_UNIT_CAST_SKILL:
                this.performCastAnotherUnitSkill(unit, skill, isPlayer1, true, isStartBattle);
                return sameLastTargetId;
            case EHeroSkillType.REPEATING_SKILL:
                if (skill.childSkill) {
                    const count = Math.min(calculateSkillValue(skill, unit), 20);
                    console.log("REPEATING_SKILL x" + count);
                    let lastSameId;
                    for (let i = 0; i < count; i++) {
                        if (skill.childSkill.condition) {
                            const isConditionFulfilled = checkSkillCondition(unit, skill.childSkill.condition, this);
                            if (isConditionFulfilled) {
                                lastSameId = this.performSkill(unit, skill.childSkill, isPlayer1, isStartBattle, sameLastTargetId) || lastSameId;
                            }
                        } else {
                            lastSameId = this.performSkill(unit, skill.childSkill, isPlayer1, isStartBattle, sameLastTargetId) || lastSameId;
                        }
                    }
                    return lastSameId || sameLastTargetId;
                }
                return sameLastTargetId;
            case EHeroSkillType.CALCULATE_NUMBER:
                return this.performCustomCalculation(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
            case EHeroSkillType.FORCE_UNIT_MAKE_ATTACK:
                return this.performForceOutOfTurnAction(unit, skill, isPlayer1, false, isStartBattle, sameLastTargetId);
            case EHeroSkillType.FORCE_UNIT_CAST_SKILL:
                return this.performForceOutOfTurnAction(unit, skill, isPlayer1, true, isStartBattle, sameLastTargetId);
            case EHeroSkillType.FORCE_TOTEM_ACTION:
                return this.performForceOutOfTurnTotem(unit, skill, isPlayer1, isStartBattle, sameLastTargetId);
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

        let additionalBaTimes = 0;
        forEachNestedEffects(unit, (ne) => {
            if (ne.buffType === EBuffType.BASIC_ATTACK_ADD_TIMES) {
                additionalBaTimes += ne.totalValue;
            }
        });
        //const baTimesBuff = unit.buffs.find((buff) => buff.type === EBuffType.BASIC_ATTACK_ADD_TIMES);
        //const additionalBaTimes = baTimesBuff ? baTimesBuff.value : 0;
        const twiceAttackMods = unit.itemBonuses.filter((ib) => ib.type == EItemBattleBonusType.BASIC_ATTACK_TWICE).map((ib) => getItemBonusValue(unit,ib));
        twiceAttackMods.sort((a, b) => b - a);
        //console.log("DEBUG: twice attacks: " + twiceAttackMods.join(", "));

        let lastTargetId: string | undefined;
        if (twiceAttackMods.length > 0) {
            // get maximum twice attack mod (first index position)
            // and perform 2+addBaTimes attacks
            for (let i = -2; i < additionalBaTimes; i++) {
                lastTargetId = lastTargetId || this.basicAttack(unit, isPlayer1, twiceAttackMods[0]);
            }
            // perform 1 attack per rest twice attack mods (excluding max mod)
            for (let j = 1; j < twiceAttackMods.length; j++) {
                lastTargetId = lastTargetId || this.basicAttack(unit, isPlayer1, twiceAttackMods[j]);
            }
        } else {
            lastTargetId = lastTargetId || this.basicAttack(unit, isPlayer1);
            for (let i = 0; i < additionalBaTimes; i++) {
                lastTargetId = lastTargetId || this.basicAttack(unit, isPlayer1);
            }
        }
        // triggers
        //console.log("performBasicAttack",unit.id,">",lastTargetId);
        triggerBattleTrigger(EAppTriggerType.BASIC_ATTACK, this, unit, lastTargetId);
        // remove TILL_NEXT_BA buffs and debuffs
        this.removeBuffs(unit, EBuffTimeType.TILL_NEXT_BA);
        this.removeDebuffs(unit, EBuffTimeType.TILL_NEXT_BA);
    }

    performAttack(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, value, valueFrom, valueType, attackType, mpScale, ppScale } = skill;
        if (!targetType || !attackType || value === undefined) {
            console.log("NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        if (!targets) {
            return sameLastTargetId;
        }

        let isCritAllowed = false;
        if (attackType === EHeroAttackType.PHYSICAL) {
            // check if crit with magic available
            const isCritWithPhys = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_WITH_PHYSICAL);
            isCritAllowed = !!isCritWithPhys;
        }
        if (attackType === EHeroAttackType.MAGIC) {
            // check if crit with magic available
            const isCritWithMagic = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_WITH_MAGIC);
            isCritAllowed = !!isCritWithMagic;
        }

        const baseValue =
            !valueType || valueType === "number" // || valueType === "evolvedNumber"
                ? value
                : valueFrom
                  ? Math.floor((unit[valueFrom] * value) / 100)
                  : Math.floor((unit.attack * value) / 100);

        // calculate attack damage
        const { attackDamage, isCrit } = calculateDamageBonuses(unit, attackType, baseValue, isCritAllowed, mpScale, ppScale);

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

        let lastAliveTargetId: string | undefined = undefined;
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
            let antiskillShieldBuff = false;
            forEachNestedEffects(finalTarget, (ne) => {
                if (ne.buffType === EBuffType.ANTISKILL_MIRROR && ne.totalValue > 0 && !antiskillShieldBuff) {
                    ne.totalValue -= 1;
                    this.dealDamage(unit, unit, attackDamage, skill.attackType!, parentUnit, attackRecord);
                    antiskillShieldBuff = true;
                }
            });
            if (antiskillShieldBuff) {
                checkBuffToRemove(target, EBuffType.ANTISKILL_MIRROR, this.battleRecord);
                return;
            }
            // triggers
            triggerBattleTrigger(EAppTriggerType.TAKE_SKILL_ATTACK, this, finalTarget, unit.id);
            if (unit.hp <= 0) {
                return;
            }

            this.dealDamage(unit, finalTarget, attackDamage, skill.attackType!, parentUnit, attackRecord);
            if (finalTarget.hp > 0) {
                lastAliveTargetId = finalTarget.id;
            }
        });

        if (isCrit) {
            triggerBattleTrigger(EAppTriggerType.AFTER_CRIT, this, unit, lastAliveTargetId);
        }
        triggerBattleTrigger(EAppTriggerType.AFTER_SKILL_ATTACK, this, unit, lastAliveTargetId);
        return lastAliveTargetId || sameLastTargetId;
    }

    performAttrIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { value, valueType, valueFrom, attribute, targetType, mpScale, ppScale } = skill;

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

        if ((!value && mpScaleValue + ppScaleValue === 0) || !valueType || !attribute || !targetType) {
            console.log("performAttrIncrease RETURN 1");
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        if (!targets) {
            console.log("performAttrIncrease RETURN 2");
            return sameLastTargetId;
        }

        const battleAction: IBattleAction = {
            unitId: unit.id,
            type: EBattleActionType.ATTRIBUTE_INCREASE,
            targets: [],
            skill,
            isStartBattle,
        };
        this.battleRecord.push(battleAction);

        let lastTargetId;
        targets.forEach((target) => {
            //console.log("INCR ATTR TARGET", attribute, target);
            const increaseValue = calculateIncreaseValue(target[attribute], value || 0, valueType, valueFrom && unit[valueFrom]) + mpScaleValue + ppScaleValue;
            let addValue = 0;
            if (attribute === "armor") {
                target.itemBonuses.forEach(bonus => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_ARMOR_GAIN) {
                        addValue += calculateIncreaseValue(increaseValue, getItemBonusValue(target,bonus), bonus.valueType);
                    }
                })
            }
            target[attribute] += increaseValue + addValue;
            battleAction.targets?.push({
                targetId: target.id,
                attribute,
                value: increaseValue + addValue,
                // @ts-ignore
                ATTR: target[attribute],
            });
            // }
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performAttrDecrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { value, valueType, attribute, targetType, targetUnitId, mpScale, ppScale } = skill;

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

        if (value === undefined || (!value && mpScaleValue + ppScaleValue === 0) || !valueType || !attribute || !targetType) {
            console.log("performAttrIncrease RETURN 1");
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, targetUnitId, sameLastTargetId);

        if (!targets) {
            return sameLastTargetId;
        }

        let lastTargetId;
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
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performBuff(
        unit: IBattleUnit,
        skill: IHeroSkill | undefined,
        buff: IBuff | undefined,
        isPlayer1: boolean,
        isStartBattle?: boolean,
        sameLastTargetId?: string,
    ): string | undefined {
        if (!buff) {
            console.log("performBuff RETURN 1");
            return sameLastTargetId;
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
        //const targets = getAllyTargets(unit, allyUnits, targetType, targetUnitId);
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill?.markType, targetUnitId, sameLastTargetId);

        //const t = this.getTargetsSimple(unit,targetType,isPlayer1);
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
        let lastTargetId;
        targets.forEach((target) => {
            if (target) {
                applyBuff(target, buff, buffAction, this, unit, isPlayer1);
                if (!buff.cannotBeTargeted) {
                    triggerBattleTrigger(EAppTriggerType.RECIEVE_BUFF, this, target, target.id);
                }
                lastTargetId = target.id;
            }
        });
        return lastTargetId || sameLastTargetId;
    }

    performBuffValueIncrease(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, value, valueType, targetBuffId } = skill;

        if (!targetType || value === undefined || !valueType) {
            return sameLastTargetId;
        }

        let targets: IBattleUnit[] | null;
        if (
            targetType === ETargetType.SAME_LAST_TARGET ||
            targetType === ETargetType.BY_UNIT_ID ||
            targetType === ETargetType.BY_RELEVANT_ID ||
            targetType === ETargetType.ANCHOR_TARGET
        ) {
            targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        } else {
            const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
            const filteredUnits = targetBuffId ? allyUnits.filter((u) => !!u && u.buffs.some((b) => b.name === targetBuffId)) : allyUnits;
            targets = getAllyTargets(unit, filteredUnits, targetType);
        }

        //console.log("performBuffValueIncrease > get buff from", targets);

        // check if at least one buffed ally found
        if (!targets?.[0]) {
            console.log("performBuffValueIncrease > no buff to copy found");
            return sameLastTargetId;
        }

        let lastTargetId;
        // get buff from target and increse its value
        targets?.forEach((target) => {
            const buff = targetBuffId
                ? { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted && b.name === targetBuffId)) }
                : { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted)) };

            if (!buff) {
                return;
            }
            buff.nestedEffects = buff.nestedEffects?.map((ne) => {
                const copyNestedEffect: INestedBuffEffect = { ...ne };
                return copyNestedEffect;
            });
            buff.nestedEffects?.forEach((ne) => {
                const addValue = calculateIncreaseValue(ne.totalValue || 0, value, valueType);
                ne.value = buff.timeType === EBuffTimeType.DURATION ? (ne.totalValue || 0) + addValue : addValue;
                ne.valueType = "number";
            });
            const addValue = calculateIncreaseValue(buff.totalValue || 0, value, valueType);
            buff.value = buff.timeType === EBuffTimeType.DURATION ? (buff.totalValue || 0) + addValue : addValue;
            buff.valueType = "number";
            buff.targetType = ETargetType.BY_UNIT_ID;
            buff.targetUnitId = target.id;
            buff.cannotBeTargeted = true; // do not trigger After_buff

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
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performBuffCopy(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, value, valueType, targetFromType } = skill;

        if (!targetType || !targetFromType || value === undefined || !valueType) {
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetFromType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);

        // check if at least one buffed ally found
        if (!targets?.[0]) {
            console.log("performBuffCopy > no buff to copy found");
            return sameLastTargetId;
        }

        let lastTargetId: string | undefined;
        // get buff from target and copy it to random ally
        targets?.forEach((target) => {
            const buff = { ...getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted)) };
            buff.targetType = targetType; //ETargetType.RANDOM_ALLY;

            if (!buff) {
                console.log("no buff found for copy!");
                return;
            }
            buff.nestedEffects = buff.nestedEffects?.map((ne) => {
                const copyNestedEffect: INestedBuffEffect = { ...ne };
                return copyNestedEffect;
            });

            lastTargetId = this.performBuff(unit, skill, buff, isPlayer1, isStartBattle, sameLastTargetId) || lastTargetId;
        });
        return lastTargetId || sameLastTargetId;
    }

    /**
     *
     * @param unit who applies status
     */
    performApplyStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { status, targetType, targetUnitId, value, mpScale, ppScale, valueFrom, valueType, markType } = skill;
        if (!status || !targetType || value === undefined) {
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, markType, targetUnitId, sameLastTargetId);
        //getTargets(unit, allyUnits, opponentUnits, targetType, targetUnitId);

        if (!targets) {
            return sameLastTargetId;
        }

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        const baseValue = !valueType || valueType === "number" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0; // || valueType === "evolvedNumber"

        let finalValue = baseValue + mpScaleValue + ppScaleValue;

        const itemBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === getStatusItemBonusType(status));
        if (itemBonus) {
            finalValue += calculateIncreaseValue(1, itemBonus.value, itemBonus.valueType);
        }

        let lastTargetId;
        targets.forEach((target) => {
            //console.log("APPLY STATUS", unit, target, status, finalValue);
            applyStatus(unit, target, status, finalValue, this.battleRecord, isStartBattle);
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performStatusModifyAmount(
        unit: IBattleUnit,
        skill: IHeroSkill,
        isPlayer1: boolean,
        isStartBattle?: boolean,
        sameLastTargetId?: string,
    ): string | undefined {
        const { status, targetType, targetUnitId, value, mpScale, ppScale, valueFrom, valueType, markType } = skill;
        if (!targetType || value === undefined) {
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, markType, targetUnitId, sameLastTargetId);
        //getTargets(unit, allyUnits, opponentUnits, targetType, targetUnitId);

        if (!targets) {
            return sameLastTargetId;
        }

        // check scaling from MP and PP
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        const baseValue = !valueType || valueType === "number" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0; //|| valueType === "evolvedNumber"

        let finalValue = baseValue + mpScaleValue + ppScaleValue;

        /*const itemBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === getStatusItemBonusType(status));
        if (itemBonus) {
            finalValue += calculateIncreaseValue(1, itemBonus.value, itemBonus.valueType);
        }*/

        let lastTargetId;
        targets.forEach((target) => {
            //console.log("APPLY STATUS", unit, target, status, finalValue);
            if (valueType === "percent") {
                //|| valueType === "evolvedPercent"
                const finalPercent = finalValue < 0 ? (finalValue > -100 ? 100 + finalValue : 0) : 100 + finalValue;
                target.statuses?.forEach((st) => {
                    if (((!!status && st.type === status) || !status) && st.value > 0) {
                        const newValue = Math.floor((st.value * finalPercent) / 100 + 0.5);
                        if (newValue < st.value) {
                            reduceStatus(unit, target, st.type, st.value - newValue, this.battleRecord);
                            st.value = newValue > 0 ? newValue : 0;
                        } else if (status) {
                            applyStatus(unit, target, status, newValue - st.value, this.battleRecord, isStartBattle);
                        }
                    }
                });
            } else {
                target.statuses?.forEach((st) => {
                    if (((!!status && st.type === status) || !status) && st.value > 0) {
                        const newValue = st.value + finalValue;
                        if (newValue < st.value) {
                            reduceStatus(unit, target, st.type, st.value - newValue, this.battleRecord);
                            st.value = newValue > 0 ? newValue : 0;
                        } else if (status) {
                            applyStatus(unit, target, status, newValue - st.value, this.battleRecord, isStartBattle);
                        }
                    }
                });
            }
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    /** Remove random status from target units */
    performRemoveStatus(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        if (!targets) {
            return sameLastTargetId;
        }

        let lastTargetId;
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
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performDebuff(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { debuff } = skill;
        if (!debuff) {
            return sameLastTargetId;
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

        const { type, targetType, name, attribute, value, mpScale, ppScale, duration } = debuff;
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId);
        if (!targets) {
            console.log("performDebuff: FAIL to find targets", targetType, skill.markType);
            return sameLastTargetId;
        } else {
            this.battleRecord.push(debuffAction);
            let lastTargetId;
            targets.forEach((target) => {
                if (target) {
                    // check if target unit has antis debuff bonuses (ANTISKILL_SHIELD, IGNORE_NEXT_DEBUFF)
                    let antiskillShieldBuff = false;
                    forEachNestedEffects(target, (ne) => {
                        if (ne.buffType === EBuffType.ANTISKILL_MIRROR && ne.totalValue > 0 && !antiskillShieldBuff) {
                            ne.totalValue -= 1;
                            applyDebuff(unit, debuff, debuffAction, this, unit, isPlayer1);
                            antiskillShieldBuff = true;
                        }
                    });
                    if (antiskillShieldBuff) {
                        checkBuffToRemove(target, EBuffType.ANTISKILL_MIRROR, this.battleRecord);
                        return;
                    }
                    let ignoreDebuffBuff = false;
                    forEachNestedEffects(target, (ne) => {
                        if (ne.buffType === EBuffType.IGNORE_NEXT_DEBUFF && ne.totalValue > 0 && !ignoreDebuffBuff) {
                            ne.totalValue -= 1;
                            ignoreDebuffBuff = true;
                        }
                    });
                    if (ignoreDebuffBuff) {
                        checkBuffToRemove(target, EBuffType.IGNORE_NEXT_DEBUFF, this.battleRecord);
                        return;
                    }
                    applyDebuff(target, debuff, debuffAction, this, unit, isPlayer1);
                    if (!debuff.cannotBeTargeted) {
                        triggerBattleTrigger(EAppTriggerType.RECIEVE_DEBUFF, this, target);
                    }
                    lastTargetId = target.id;
                }
            });
            return lastTargetId || sameLastTargetId;
        }
    }

    performDebuffRemove(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, markType, targetUnitId } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, markType, targetUnitId, sameLastTargetId);
        console.log("performDebuffRemove targets", targets);
        if (!targets || targets.length === 0) {
            return sameLastTargetId;
        }
        let lastTargetId;
        targets.forEach((target) => {
            if (target) {
                if (target.debuffs.length === 0) {
                    return;
                }
                const rndDebuff = getRandomArrayItem(target.debuffs.filter((d) => !d.cannotBeTargeted));
                if (rndDebuff) {
                    removeDebuffSimple(target, rndDebuff, this.battleRecord);
                    lastTargetId = target.id;
                }
            }
        });
        return lastTargetId || sameLastTargetId;
    }

    performBuffRemove(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, markType, targetUnitId } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, markType, targetUnitId, sameLastTargetId);
        console.log("performBuffRemove targets", targets);
        if (!targets || targets.length === 0) {
            return sameLastTargetId;
        }
        let lastTargetId;
        targets.forEach((target) => {
            if (target) {
                if (target.buffs.length === 0) {
                    return;
                }
                const rndBuff = getRandomArrayItem(target.buffs.filter((b) => !b.cannotBeTargeted));
                if (rndBuff) {
                    removeBuff(target, rndBuff, this.battleRecord);
                    lastTargetId = target.id;
                }
            }
        });
        return lastTargetId || sameLastTargetId;
    }

    performHeal(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, value, mpScale, ppScale, valueType, valueFrom, markType, targetUnitId } = skill;
        if (!targetType || !value) {
            console.log("NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, markType, targetUnitId, sameLastTargetId);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return sameLastTargetId;
        }

        // calculate outgoing heal value
        const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
        const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
        const baseValue = !valueType || valueType === "number" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0; // || valueType === "evolvedNumber"
        //console.log("Heal base value ",baseValue,value,valueType,valueFrom);
        let finalHeal = baseValue + mpScaleValue + ppScaleValue;

        // calculate outgoing heal value accordint to buffs and debuffs
        forEachNestedEffects(unit, (ne) => {
            if (ne.buffType === EBuffType.OUTGOING_HEAL) {
                const { totalValue, valueType } = ne;
                if (!valueType || totalValue === undefined) {
                    return;
                }
                finalHeal += calculateIncreaseValue(finalHeal, totalValue, valueType);
            }
        });
        // calculate outgoing heal bonuses from items
        unit.itemBonuses.forEach((bonus) => {
            if (bonus.type === EItemBattleBonusType.HEAL_INCREASE) {
                finalHeal += calculateIncreaseValue(finalHeal, getItemBonusValue(unit,bonus), bonus.valueType);
            }
        });
        // check crit
        const isCritWithHeal = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_WITH_HEAL);
        if (isCritWithHeal && unit.critChance > 0) {
            if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
                finalHeal += Math.floor(finalHeal * CRIT_MODIFIER);
            }
        }

        // check for DARK_HEAL buff
        let darkHealMod = 0;
        forEachNestedEffects(unit, (ne) => {
            if (ne.buffType === EBuffType.DARK_HEAL) {
                darkHealMod += ne.totalValue;
            }
        });
        if (darkHealMod > 0) {
            const damageValue = Math.floor((finalHeal * darkHealMod) / 100 + 0.5);
            this.performDarkHealAttack(unit, skill, damageValue, isPlayer1, isStartBattle);
            return sameLastTargetId;
        }
        // OVERHEAL_TO_DAMAGE

        let overhealTotal = 0;
        let lastTargetId;
        targets.forEach((target) => {
            if (target) {
                // calculate incoming heal value from target buffs and debuffs
                forEachNestedEffects(unit, (ne) => {
                    if (ne.debuffType === EDebuffType.HEALING_DECREASE && ne.totalValue > 0) {
                        const { totalValue, valueType } = ne;
                        if (!valueType) {
                            return;
                        }
                        finalHeal -= calculateIncreaseValue(finalHeal, totalValue, valueType);
                    }
                });
                //console.log("FINAL HEAL after buffs/debuffs", finalHeal);

                // check if target has antiheal debuffs (like ANTIHEAL)
                let antihealDebuff = false;
                forEachNestedEffects(target, (ne) => {
                    if (ne.debuffType === EDebuffType.ANTIHEAL && ne.totalValue > 0 && !antihealDebuff) {
                        ne.totalValue -= 1;
                        antihealDebuff = true;
                    }
                });
                if (antihealDebuff) {
                    checkDebuffToRemove(target, EDebuffType.ANTIHEAL, this.battleRecord);
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
                lastTargetId = target.id;

                target.hp += finalHeal;
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
        triggerBattleTrigger(EAppTriggerType.AFTER_HEAL, this, unit, lastTargetId);
        // overheal managing
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        dealOverhealDamage(overhealTotal, unit, unit.id, skill, opponentUnits, this);
        return lastTargetId || sameLastTargetId;
    }

    performDarkHealAttack(unit: IBattleUnit, skill: IHeroSkill, value: number, isPlayer1: boolean, isStartBattle?: boolean) {
        const { targetType } = skill;

        let newTargetType = ETargetType.FIRST_ENEMY;
        switch (targetType) {
            case ETargetType.ALL_ALLIES:
                newTargetType = ETargetType.ALL_ENEMIES;
                break;
            case ETargetType.LOW_PERCENT_ALLY:
            case ETargetType.LOW_HP_ALLY:
                newTargetType = ETargetType.LOW_HP_ENEMY;
                break;
            default:
                newTargetType = ETargetType.FIRST_ENEMY;
        }

        const attackSkill: IHeroSkill = {
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
        if (unit.summon || unit.isSummon) {
            console.log("summon already exists !");
            return;
        }
        if (unit.totem) {
            removeTotem(unit);
        }

        unit.summon = prepareSummonToBattle(summon, unit.isBackRowPosition);

        // check unique summon types
        prepareUniqueSummonToBattle(unit);

        const summonBonuses = unit.itemBonuses.filter((bonus) => summonItemBattleBonuses.includes(bonus.type));
        summonBonuses.forEach((bonus) => {
            const { type, valueType } = bonus;
            if (type === EItemBattleBonusType.INCREASE_SUMMON_ATTACK) {
                unit.summon!.attack += calculateIncreaseValue(unit.summon!.attack, getItemBonusValue(unit,bonus), valueType);
            } else if (type === EItemBattleBonusType.INCREASE_SUMMON_HP) {
                const addHpValue = calculateIncreaseValue(unit.summon!.maxHp, getItemBonusValue(unit,bonus), valueType);
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

        triggerBattleTrigger(EAppTriggerType.SUMMON, this, unit, unit.summon.id);

        // this.listOfTriggers.forEach((bt) => {
        //     if (bt.type === EAppTriggerType.SUMMON && this.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1))
        //         checkBattleTriggerBuffDebuff(bt, this);
        // });
    }

    performRewind(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        if (!skill.targetType) {
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, skill.targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        const steps = skill.value || 1;
        let lastTargetId;
        targets?.forEach((target) => {
            if (target) {
                for (let i = 0; i < steps; i++) {
                    target.currentSkillIndex--;
                    if (target.currentSkillIndex < 0) {
                        target.currentSkillIndex = 3;
                    }
                }
                lastTargetId = target.id;
            }
        });
        return lastTargetId || sameLastTargetId;
    }

    performRemoveSummon(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        if (!skill.targetType) {
            return sameLastTargetId;
        }

        const targetList = this.getTargetsSimple(unit, skill.targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        if (!targetList) {
            return sameLastTargetId;
        }

        let lastTargetId;
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
                lastTargetId = target.id;
            }
        }
        return lastTargetId || sameLastTargetId;
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

    performRemoveTotem(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        if (!skill.targetType) {
            return;
        }

        const targetList = this.getTargetsSimple(unit, skill.targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);
        if (!targetList) {
            return sameLastTargetId;
        }

        let lastTargetId;
        for (let i = 0; i < (skill.value || 1); i++) {
            const target = getTargetWithTotem(targetList);
            if (target) {
                removeTotem(target);
                this.battleRecord.push({
                    unitId: unit.id,
                    targetId: target.id,
                    type: EBattleActionType.TOTEM_REMOVE,
                    isStartBattle,
                });
                lastTargetId = target.id;
            }
        }
        return lastTargetId || sameLastTargetId;
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

    performSwapHp(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, valueType } = skill;
        if (!targetType) {
            console.log("performSwapHp > NO TARGET TYPE");
            return sameLastTargetId;
        }

        const isSwapPercentage = valueType === "percent";
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);

        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performSwapHp > NO TARGET FOUND");
            return sameLastTargetId;
        }

        let lastTargetId;
        targets.forEach((target) => {
            swapHp(unit, target, this.battleRecord, isStartBattle, isSwapPercentage);
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performCastAnotherUnitSkill(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isCastSkill: boolean, isStartBattle?: boolean) {
        const { targetType, value } = skill;
        if (!targetType) {
            console.log("performCastAnotherUnitSkill > NO TARGET TYPE OR VALUE");
            return;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType);
        const skillSetList: IHeroSkillSet[] = [];
        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performCastAnotherUnitSkill > NO TARGET FOUND");
            return;
        }
        targets.forEach((target) => {
            const sksIndex = ((value || -4) >= 0 ? value : (4 + target.currentSkillIndex + (value || -4)) % 4) || 0;
            if (sksIndex >= 0 && sksIndex <= 3 && !!target.skills[sksIndex]) {
                skillSetList.push(target.skills[sksIndex]);
            }
        });
        if (skillSetList.length > 0) {
            this.battleRecord.push({
                type: EBattleActionType.BONUS_ACTION,
                name: unit.id,
                unitId: unit.id,
            });
            this.performSkillset(unit, isPlayer1, getRandomArrayItem(skillSetList), true);
        } else {
            console.log("performCastAnotherUnitSkill > EMPTY RESULING SKILLSET LIST");
            if (skill.childSkill) {
                this.performSkill(unit, skill.childSkill, isPlayer1, isStartBattle);
            }
        }
    }

    performForceOutOfTurnAction(
        unit: IBattleUnit,
        skill: IHeroSkill,
        isPlayer1: boolean,
        isCastSkill: boolean,
        isStartBattle?: boolean,
        sameLastTargetId?: string,
    ): string | undefined {
        const { targetType } = skill;
        if (!targetType) {
            console.log("performForceOutOfTurnAction > NO TARGET TYPE OR VALUE");
            return sameLastTargetId;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);

        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performForceOutOfTurnAction > NO TARGET FOUND");
            return sameLastTargetId;
        }

        let lastTargetId;
        targets.forEach((target) => {
            if (isCastSkill) this.performAction(target, 0, isPlayer1, 0, true);
            else this.performBasicAttack(target, undefined, isPlayer1);
            lastTargetId = target.id;
        });
        return lastTargetId || sameLastTargetId;
    }

    performForceOutOfTurnTotem(
        unit: IBattleUnit,
        skill: IHeroSkill,
        isPlayer1: boolean,
        isStartBattle?: boolean,
        sameLastTargetId?: string,
    ): string | undefined {
        const { targetType } = skill;
        if (!targetType) {
            console.log("performForceOutOfTurnAction > NO TARGET TYPE");
            return sameLastTargetId;
        }
        const targets = this.getTargetsSimple(unit, targetType, isPlayer1, skill.markType, skill.targetUnitId, sameLastTargetId);

        if (!targets || targets.length === 0 || !targets[0]) {
            console.log("performForceOutOfTurnAction > NO TARGET FOUND");
            return sameLastTargetId;
        }

        let lastTargetId;
        targets.forEach((target) => {
            if (target.totem) {
                this.performTotemActionSkill(target.totem, target, isPlayer1);
                lastTargetId = target.id;
            }
        });
        return lastTargetId || sameLastTargetId;
    }

    findUnitByUnitId(unitId: string): IBattleUnit | undefined {
        const allUnits = [...this.player1BattleUnits, ...this.player2BattleUnits].filter((unit) => !!unit);
        const allSummons: IBattleUnit[] = allUnits
            .map((unit) => {
                return unit.summon;
            })
            .filter((u) => !!u);
        if (unitId === "[ActingUnit]") {
            return allUnits.find((u) => u.id === unitId) || allSummons.find((u) => u.id === this.currentActingUnitId);
        } else {
            return allUnits.find((u) => u.id === unitId) || allSummons.find((u) => u.id === unitId);
        }
    }

    getTargetsSimple(
        unit: IBattleUnit,
        targetType: ETargetType,
        isPlayer1?: boolean,
        debuffType?: EDebuffType,
        targetUnitId?: string,
        sameLastTargetId?: string,
    ): IBattleUnit[] | null {
        if (targetType === ETargetType.BY_UNIT_ID && targetUnitId) {
            const unitById = this.findUnitByUnitId(targetUnitId);
            return unitById ? [unitById] : null;
        }
        if (targetType === ETargetType.SAME_LAST_TARGET && sameLastTargetId) {
            const unitById = this.findUnitByUnitId(sameLastTargetId);
            return unitById ? [unitById] : null;
        }
        if (targetType === ETargetType.BY_UNIT_ID && this.currentActingUnitId) {
            const unitById = this.findUnitByUnitId(this.currentActingUnitId);
            return unitById ? [unitById] : null;
        }
        if (targetType === ETargetType.ANCHOR_TARGET && this.anchorTriggerUnitId) {
            const unitById = this.findUnitByUnitId(this.anchorTriggerUnitId);
            return unitById ? [unitById] : null;
        }
        if (targetType === ETargetType.BY_RELEVANT_ID && this.relevantTriggerUnitId) {
            console.log("getTarget > BY_RELEVANT_ID", this.relevantTriggerUnitId);
            const unitById = this.findUnitByUnitId(this.relevantTriggerUnitId);
            return unitById ? [unitById] : null;
        }
        const allyUnits = isPlayer1 ? this.player1BattleUnits : this.player2BattleUnits;
        const opponentUnits = isPlayer1 ? this.player2BattleUnits : this.player1BattleUnits;
        if (targetType === ETargetType.EVERY_UNIT) {
            return [...allyUnits, ...opponentUnits].filter((unit) => !!unit);
        } else {
            return getTargets(unit, allyUnits, opponentUnits, targetType, this.currentActingUnitId, debuffType);
        }
    }

    isTarget(target: IBattleUnit, unit: IBattleUnit, targetType: ETargetType, isPlayer1?: boolean): boolean {
        const dbgTargets = this.getTargetsSimple(unit, targetType, isPlayer1);
        /*console.log(
            "-= isTarget =-",
            dbgTargets?.map((t) => t.id),
            target.id,
            targetType,
            !!dbgTargets?.includes(target),
        );*/
        return !!dbgTargets?.includes(target);
    }

    performCustomCalculation(unit: IBattleUnit, skill: IHeroSkill, isPlayer1: boolean, isStartBattle?: boolean, sameLastTargetId?: string): string | undefined {
        const { targetType, value } = skill;
        if (!targetType) {
            console.log("NO TARGET TYPE");
            return sameLastTargetId;
        }

        const targets = this.getTargetsSimple(unit, targetType, isPlayer1);
        if (!targets) {
            console.log("NO TARGET FOUND");
            return sameLastTargetId;
        }

        let lastTargetId;
        if (skill.childSkill) {
            targets.forEach((t) => {
                if (
                    skill.childSkill?.condition &&
                    (skill.childSkill.condition === ESkillCondition.NOT_BEFORE_COMBAT || checkSkillCondition(t, skill.childSkill.condition, this))
                ) {
                    unit.customNumber++;
                    lastTargetId = t.id;
                } else if (skill.childSkill?.type === EHeroSkillType.BUFF) {
                    unit.customNumber += t.buffs.reduce((acc: number, buff: IBuff) => {
                        return !!buff && !buff.cannotBeTargeted ? acc + 1 : acc;
                    }, 0);
                } else if (skill.childSkill?.type === EHeroSkillType.DEBUFF) {
                    unit.customNumber += t.debuffs.reduce((acc: number, debuff) => {
                        return !!debuff && !debuff.cannotBeTargeted ? acc + 1 : acc;
                    }, 0);
                }
            });
        } else if (skill.status) {
            targets.forEach((t) => {
                const v = t.statuses?.find((s) => s.type === skill.status);
                if (v) {
                    unit.customNumber += v.value;
                    lastTargetId = t.id;
                }
            });
        } else if (skill.attribute) {
            targets.forEach((t) => {
                if (skill.attribute) {
                    unit.customNumber += t[skill.attribute];
                    lastTargetId = t.id;
                }
            });
        } else if (skill.valueType === "number") {
            // || skill.valueType === "evolvedNumber"
            unit.customNumber = value || 0;
        } else if (skill.valueType === "percent" && skill.valueFrom) {
            //|| skill.valueType === "evolvedPercent"
            targets.forEach((t) => {
                if (skill.valueFrom) {
                    const v = Math.floor(((value || 100) * t[skill.valueFrom]) / 100);
                    unit.customNumber += v;
                    lastTargetId = t.id;
                }
            });
        } else if (skill.valueType === "percent") {
            // || skill.valueType === "evolvedPercent"
            if (value === undefined) {
                console.log("NO PERCENT VALUE WAS SET");
                return sameLastTargetId;
            }
            unit.customNumber = Math.floor((value * unit.customNumber) / 100);
        } else if (skill.targetBuffId) {
            targets.forEach((t) => {
                t?.buffs.forEach((b) => {
                    if (b?.name === skill.targetBuffId && b.totalValue) {
                        unit.customNumber += b.totalValue;
                        lastTargetId = t.id;
                    }
                });
                t?.debuffs.forEach((d) => {
                    if (d?.name === skill.targetBuffId && d.totalValue) {
                        unit.customNumber += d.totalValue;
                        lastTargetId = t.id;
                    }
                });
            });
        } else {
            console.log("Error. Wrong calculation arguments.", skill);
            return sameLastTargetId;
        }
        console.log(">>> Calculate >>>", unit.customNumber, skill);
        return lastTargetId || sameLastTargetId;
    }

    /** Summonned unit performs a skill or basic attack */
    performActionSummon(summonUnit: IBattleUnit, isPlayer1: boolean) {
        const skillIndex = summonUnit.currentSkillIndex;
        if (summonUnit.currentSkillIndex === 3) {
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
                animation: skillSet.animationType,
            };
            this.battleRecord.push(skillSetBattleAction);

            summonUnit.customNumber = 0;
            let lastTargetId: string | undefined;
            skillSet.skills.forEach((skill) => {
                if (skill.condition) {
                    if (checkSkillCondition(summonUnit, skill.condition, this)) {
                        lastTargetId = this.performSkill(summonUnit, skill, isPlayer1, false, lastTargetId);
                    }
                } else {
                    lastTargetId = this.performSkill(summonUnit, skill, isPlayer1, false, lastTargetId);
                }
                // !!!! NO CHAIN SKILLS FOR SUMMONS
            });
        }

        if (!skillSet || skillSet.isBasicAttack) {
            // if there is no skill for the round perform basic attack
            this.performBasicAttack(summonUnit, undefined, isPlayer1);
            // remove TILL_NEXT_BA buffs and debuffs
            this.removeBuffs(summonUnit, EBuffTimeType.TILL_NEXT_BA);
            this.removeDebuffs(summonUnit, EBuffTimeType.TILL_NEXT_BA);
        }
    }

    /**
     * @function basicAttack calculates basic attack damage from offensive buffs and debuffs and perform an attack
     * @returns lastTargetId - id of basic attack target
     */
    basicAttack(unit: IBattleUnit, isPlayer1: boolean, attackPercent?: number): string | undefined {
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

        let { attackDamage, isCrit } = calculateDamageBonuses(unit, unit.attackType, unit.attack, true, 0, 0);

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

        const statusesOnAttack: Map<EStatusType, number> = new Map<EStatusType, number>();
        //forEachNestedEffects(unit,ne => {}) // cannot be statusType in nestedEffects
        unit.buffs.forEach((buff) => {
            if (buff.type === EBuffType.ADD_STATUS_ON_BASIC_ATTACK) {
                const { statusType, value } = buff;
                if (!statusType || value === undefined) {
                    return;
                }
                if (statusesOnAttack.has(statusType)) {
                    // @ts-ignore
                    statusesOnAttack.set(statusType, statusesOnAttack[statusType] + value);
                } else {
                    statusesOnAttack.set(statusType, value);
                }
            }
        });

        console.log("unit.itemBonuses", unit.itemBonuses);

        unit.itemBonuses
            .filter((itemBonus) => itemBonus.type === EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK)
            .forEach((applyStatusBonus) => {
                const { status } = applyStatusBonus;
                const value = getItemBonusValue(unit,applyStatusBonus);
                if (!status) {
                    return;
                }
                if (statusesOnAttack.has(status)) {
                    // @ts-ignore;
                    statusesOnAttack.set(status, statusesOnAttack.get(status) + value);
                } else {
                    statusesOnAttack.set(status, value);
                }
            });

        console.log("unit.itemBonuses", unit.itemBonuses);

        let lastTargetId: string | undefined;
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
            if (isCrit) {
                const bleedStacks = finalTarget.statuses.find((st) => st.type === EStatusType.BLEED);
                //console.log("basicAttack --> ",finalTarget,bleedStacks)
                if (bleedStacks && bleedStacks.value > 0) {
                    // increase BLEED stacks for each used skill
                    const increase = Math.floor(bleedStacks.value / 10) + 1;
                    applyStatus(unit, finalTarget, bleedStacks.type, increase, this.battleRecord);
                }
            }
            // check if target has on-basic-attack buffs (like FIRE_SHIELD)
            finalTarget.buffs.forEach((buff) => {
                if (buff?.type === EBuffType.THORNS_SHIELD) {
                    if (buff.statusType) {
                        const burnSkill: IHeroSkill = {
                            type: EHeroSkillType.STATUS_APPLY,
                            status: buff.statusType,
                            value: buff.totalValue,
                            valueType: "number",
                            targetType: ETargetType.BY_UNIT_ID,
                            targetUnitId: unit.id,
                            animation: AnimationType.NONE,
                        };
                        this.performApplyStatus(finalTarget, burnSkill, !isPlayer1, false);
                    } else {
                        const thornsSkill: IHeroSkill = {
                            type: EHeroSkillType.ATTACK,
                            attackType: finalTarget.attackType,
                            value: buff.totalValue,
                            valueType: "number",
                            targetType: ETargetType.BY_UNIT_ID,
                            targetUnitId: unit.id,
                            animation: AnimationType.NONE,
                        };
                        this.performAttack(finalTarget, thornsSkill, !isPlayer1, false);
                    }
                }
            });
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
            triggerBattleTrigger(EAppTriggerType.TAKE_ATTACK, this, finalTarget, unit.id);
            if (unit.hp <= 0) {
                return;
            }

            //
            this.dealDamage(unit, finalTarget, attackDamage, unit.attackType, parentUnit, attackRecord);
            if (finalTarget.hp > 0) {
                lastTargetId = finalTarget.id;
                //console.log("basicAttack",unit.id,">",lastTargetId);
            }

            // apply statuses on basic attack
            statusesOnAttack.forEach((v, k) => {
                applyStatus(unit, target, k, v, this.battleRecord);
            });

            this.removeBuffs(target, EBuffTimeType.TILL_GOT_HIT);
            this.removeDebuffs(target, EBuffTimeType.TILL_GOT_HIT);
        });

        if (isCrit) {
            triggerBattleTrigger(EAppTriggerType.AFTER_CRIT, this, unit, lastTargetId);
        }
        //console.log("final last target",unit.id,">",lastTargetId);
        return lastTargetId;
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
        let cosmicShield = false;
        forEachNestedEffects(target, (ne) => {
            if (ne.buffType === EBuffType.COSMIC_SHIELD && ne.totalValue > 0 && !cosmicShield) {
                ne.totalValue -= 1;
                cosmicShield = true;
            }
        });
        if (cosmicShield) {
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.TAKE_DAMAGE,
                value: 0,
                value2: target.hp,
            });
            triggerBattleTrigger(EAppTriggerType.AFTER_FULL_BLOCK, this, target, unit.id);
            checkBuffToRemove(target, EBuffType.COSMIC_SHIELD, this.battleRecord);
            return;
        }
        let resistDecreasePercent = 0;
        let resistDecreaseAbsolute = 0;
        forEachNestedEffects(target, (ne) => {
            if (ne.debuffType === EDebuffType.RESIST_DECREASE && ne.totalValue > 0) {
                const { totalValue, valueType } = ne;
                if (valueType === "percent") {
                    resistDecreasePercent += totalValue;
                } else {
                    resistDecreaseAbsolute += totalValue;
                }
            }
        });
        if (damageType === EHeroAttackType.PHYSICAL) {
            forEachNestedEffects(target, (ne) => {
                if ((ne.debuffType === EDebuffType.MARK_HUNTER || ne.debuffType === EDebuffType.MARK_PREDATOR) && ne.totalValue > 0) {
                    const { totalValue, valueType } = ne;
                    if (valueType === "percent") {
                        resistDecreasePercent += totalValue;
                    } else {
                        resistDecreaseAbsolute += totalValue;
                    }
                }
            });
        }
        if (resistDecreasePercent > 0 || resistDecreaseAbsolute) {
            finalDamageValue = Math.floor((finalDamageValue * (100 + resistDecreasePercent)) / 100 + resistDecreaseAbsolute);
        }

        // check bonus damage to summons
        if (target.isSummon) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
                    }
                });
        }

        // check bonus damage to bleeding target
        if (target.statuses.find((status) => status.type === EStatusType.BLEED)) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
                    }
                });
        }

        // check bonus damage to poisoned target
        if (target.statuses.find((status) => status.type === EStatusType.POISON)) {
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
                    }
                });
        }

        // EVASION
        // by default evasion only works versus physical attacks and skills
        let blindDebuff2 = 0;
        forEachNestedEffects(target, (ne) => {
            if (ne.debuffType === EDebuffType.BLIND && ne.totalValue > 0) {
                blindDebuff2 += ne.totalValue;
            }
        });

        const possibleEvasion = (damageType === EHeroAttackType.PHYSICAL ? target.evasionChance : 0) + blindDebuff2;
        // magic attacks ignore [target.evasionChance], but can be dodged due BLIND debuff stacks
        if (possibleEvasion > 0) {
            if (getRandomIntFromInterval(0, 100) <= possibleEvasion) {
                finalDamageValue = Math.floor(finalDamageValue * EVASION_MODIFIER);
                recordTarget.isEvasion = true;
            }
        }
        if (!recordTarget.isEvasion) {
            let evadeBuff = false;
            forEachNestedEffects(target, (ne) => {
                if (ne.buffType === EBuffType.EVADE && ne.totalValue > 0 && !evadeBuff) {
                    evadeBuff = true;
                    ne.totalValue -= 1;
                }
            });
            if (evadeBuff) {
                finalDamageValue = Math.floor(finalDamageValue * EVASION_MODIFIER);
                recordTarget.isEvasion = true;
                checkBuffToRemove(target, EBuffType.EVADE, this.battleRecord);
            }
        }

        let divineShield2 = false;
        forEachNestedEffects(target, (ne) => {
            if (ne.buffType === EBuffType.DIVINE_SHIELD && ne.totalValue > 0 && !divineShield2) {
                if (finalDamageValue > ne.totalValue) {
                    ne.totalValue = 0;
                }
                divineShield2 = true;
            }
        });
        if (divineShield2) {
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.TAKE_DAMAGE,
                value: 0,
                value2: target.hp,
            });
            triggerBattleTrigger(EAppTriggerType.AFTER_FULL_BLOCK, this, target, unit.id);
            checkBuffToRemove(target, EBuffType.DIVINE_SHIELD, this.battleRecord);
            return;
        }
        // ARMOR

        let ignoreArmorBuff = false;
        forEachNestedEffects(unit, (ne) => {
            if (ne.buffType == EBuffType.IGNORE_ARMOR && ne.totalValue > 0) {
                ignoreArmorBuff = true;
            }
        });
        if (ignoreArmorBuff) {
            // check for pure hp damage bonuses
            unit.itemBonuses &&
                unit.itemBonuses.forEach((bonus) => {
                    if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_HP) {
                        finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
                    }
                });
        } else {
            //TODO:calculate total armor
            let armor = target.armor;

            // check if damage dealt to armor
            if (target.armor > 0) {
                // check for armor damage bonuses
                unit.itemBonuses &&
                    unit.itemBonuses.forEach((bonus) => {
                        if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR) {
                            finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
                        }
                    });
            } else {
                // check for pure hp damage bonuses
                unit.itemBonuses &&
                    unit.itemBonuses.forEach((bonus) => {
                        if (bonus.type === EItemBattleBonusType.INCREASE_DAMAGE_TO_HP) {
                            finalDamageValue += calculateIncreaseValue(finalDamageValue, getItemBonusValue(unit,bonus), bonus.valueType);
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
            if (finalDamageValue <= 0) {
                finalDamageValue = 0;
                triggerBattleTrigger(EAppTriggerType.AFTER_FULL_BLOCK, this, target, unit.id);
            }
            // decrease armor
            target.armor = armorLeft;
            //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_ARMOR_DAMAGE, value: finalDamageValue, value2: armorLeft });
        }

        this.takeDamage(target, finalDamageValue, parentUnit, recordTarget);

        const bonusDmgFromRadiate = target.statuses.find((st) => st.type === EStatusType.RADIATE)?.value;
        if (bonusDmgFromRadiate) takeStatusDamage(target, bonusDmgFromRadiate, EStatusType.RADIATE, this.battleRecord);

        if (target.hp <= 0) {
            triggerBattleTrigger(EAppTriggerType.KILL, this, unit);
        }
        if (recordTarget.isEvasion) {
            triggerBattleTrigger(EAppTriggerType.AFTER_EVADE, this, target, unit.id);
        }
        // this.listOfTriggers.forEach((bt) => {
        //     if (bt.type === EAppTriggerType.KILL && this.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1))
        //         checkBattleTriggerBuffDebuff(bt, this);
        // });
    }

    takeDamage(target: IBattleUnit, damageValue: number, parentUnit: IBattleUnit | undefined, recordTarget: IActionTarget) {
        target.hp -= damageValue;
        // @ts-ignore
        recordTarget.HP = target.hp;

        //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp });
        recordTarget.damageValue = damageValue;

        if (target.hp <= 0) {
            target.hp = 0;
            this.battleRecord.push({
                unitId: target.id,
                type: EBattleActionType.DEATH,
            });
            triggerBattleTrigger(EAppTriggerType.DEATH, this, target, target.id);
            // if summon dies remove it from parent unit
            if (parentUnit) {
                console.log("SUMMON is DED!", parentUnit.summon);
                parentUnit.summon = undefined;
            } /*else {
                // triggers
                // ~ summons do not trigger DEATH
                // ~~> will be checked elsewhere
                triggerBattleTrigger(EAppTriggerType.DEATH, this, target);
            }*/
        }
    }

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

    getUnitsInFrontOrBehind(origin: IBattleUnit, getBehind: boolean): IBattleUnit[] {
        let combatPosition: number;
        let isPlayer1;
        if (origin.isSummon) {
            const p1index = this.player1BattleUnits.findIndex((bu) => bu?.summon?.id === origin.id);
            isPlayer1 = p1index >= 0;
            combatPosition = isPlayer1 ? p1index : this.player2BattleUnits.findIndex((bu) => bu?.summon?.id === origin.id);
        } else {
            const p1index = this.player1BattleUnits.findIndex((bu) => bu?.id === origin.id);
            isPlayer1 = p1index >= 0;
            combatPosition = isPlayer1 ? p1index : this.player2BattleUnits.findIndex((bu) => bu?.id === origin.id);
        }
        if (combatPosition >= 0) {
            if (isPlayer1) {
                // @ts-ignore
                return this.player1BattleUnits.filter(
                    (bu, index) => bu?.hp && (getBehind ? index > combatPosition && bu.hp > 0 : index < combatPosition && bu.hp > 0),
                );
            } else {
                // @ts-ignore
                return this.player2BattleUnits.filter(
                    (bu, index) => bu?.hp && (getBehind ? index > combatPosition && bu?.hp && bu.hp > 0 : index < combatPosition && bu?.hp && bu.hp > 0),
                );
            }
        } else return [];
    }
}
