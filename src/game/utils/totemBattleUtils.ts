import {
    EBattleActionType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroSkillType,
    EItemBattleBonusType,
    EStatusType,
    ETargetType,
    IBattleAction,
    IBattleUnit,
    IHeroSkill,
    ITotem,
    TBattleRecord,
    TBattleUnits,
} from "../../types";
import { BattleController } from "../components/BattleController";
import {
    applyStatus,
    calculateIncreaseValue,
    checkDebuffToRemove,
    dealOverhealDamage,
    emptyBattleUnit,
    getAllyTargets,
    getItemBonusValue,
    getOpponentTargets,
    reduceStatus,
} from "./battleUtils";
import { forEachNestedEffects } from "./unitUtils";

export const performTotemSkill = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: (IBattleUnit | null)[],
    opponentUnits: (IBattleUnit | null)[],
    battleRecord: TBattleRecord,
    battleController: BattleController,
) => {
    switch (skill.type) {
        case EHeroSkillType.ATTACK:
            performTotemAttack(unit, totem, skill, opponentUnits, battleController);
            break;
        case EHeroSkillType.ATTRIBUTE_INCREASE:
            performTotemAttrIncrease(unit, totem, skill, allyUnits, battleRecord);
            break;
        // case EHeroSkillType.BUFF:
        //     this.performBuff(unit, skill.buff, isPlayer1);
        //     break;
        // case EHeroSkillType.DEBUFF:
        //     this.performDebuff(unit, skill, isPlayer1);
        //     break;
        case EHeroSkillType.HEAL:
            performTotemHeal(unit, totem, skill, allyUnits, opponentUnits, battleRecord, battleController);
            break;
        case EHeroSkillType.STATUS_APPLY:
            performTotemStatusApply(unit, totem, skill, opponentUnits, battleController);
            break;
        // case EHeroSkillType.TOTEM:
        //     this.performTotem(unit, skill, isPlayer1);
        //     break;
        default:
            console.log("No handler for skill type", skill.type);
    }
};

const calcTotemValue = (base: number, mpv: number, ppv: number, totem: ITotem): number => {
    return Math.floor(((base + mpv + ppv) * (100 + (totem.valuesIncreasePercent || 0))) / 100) + (totem.valuesIncreaseFlat || 0);
};

const performTotemStatusApply = (unit: IBattleUnit, totem: ITotem, skill: IHeroSkill, opponentUnits: TBattleUnits, battleController: BattleController) => {
    const { targetType, value, ppScale, mpScale, status, valueType, valueFrom } = skill;
    if (!targetType || value === undefined || !status) {
        console.log("NO TARGET TYPE, VALUE OR STATUS");
        return;
    }

    const targets = getOpponentTargets(opponentUnits, targetType);
    if (!targets) {
        return;
    }
    battleController.battleRecord.push({
        unitId: totem.id,
        targets: [],
        type: EBattleActionType.ATTACK,
        value: 0,
    });
    // check scaling from MP and PP
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    const baseValue = !valueType || valueType === "number" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0; //|| valueType === "evolvedNumber"

    let finalValue = calcTotemValue(baseValue, mpScaleValue, ppScaleValue, totem);

    let bonusFlat = 0;
    let bonusPercent = 0;
    unit.itemBonuses.forEach((b) => {
        if (b.type === EItemBattleBonusType.STATUS_APPLY_INCREASE && b.status === status) {
            const v = getItemBonusValue(unit, b);
            b.valueType === "percent" ? (bonusPercent += v) : (bonusFlat += v);
        }
    });
    finalValue += calculateIncreaseValue(1, bonusPercent, "percent");
    finalValue += calculateIncreaseValue(1, bonusFlat, "number");

    targets.forEach((target) => {
        applyStatus(unit, target, status, finalValue, battleController.battleRecord, false);
    });
};

const performTotemAttack = (unit: IBattleUnit, totem: ITotem, skill: IHeroSkill, opponentUnits: TBattleUnits, battleController: BattleController) => {
    const { targetType, value, attackType, ppScale, mpScale } = skill;
    if (!targetType || !attackType || value === undefined) {
        console.log("NO TARGET TYPE OR VALUE");
        return;
    }

    const targets = getOpponentTargets(opponentUnits, targetType);
    if (!targets) {
        return;
    }

    // check scaling from MP and PP
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

    const bladedanceBuff = unit.buffs.find((buff) => buff.type === EBuffType.BLADEDANCE);

    // calculate attack damage according to buffs and debuffs
    let attackDamage = calcTotemValue(value, mpScaleValue, ppScaleValue, totem);

    const attackRecord: IBattleAction = {
        unitId: totem.id,
        targets: [],
        type: EBattleActionType.ATTACK,
        value: attackDamage,
    };

    targets.forEach((target) => {
        // check if target has a summon - summon takes damage instead
        let finalTarget = target;
        if (target.summon) {
            finalTarget = target.summon;
        }
        if (bladedanceBuff) {
            if (finalTarget.id === bladedanceBuff.targetUnitId && bladedanceBuff.totalValue) {
                attackDamage += bladedanceBuff.totalValue;
                attackRecord.value = attackDamage;
                bladedanceBuff.totalValue = (bladedanceBuff.totalValue || 0) + bladedanceBuff.value;
                battleController.battleRecord.push({
                    unitId: unit.id,
                    type: EBattleActionType.BUFF,
                    buff: bladedanceBuff,
                    buffTargets: [{ targetId: unit.id, isExisting: true, value: bladedanceBuff.totalValue }],
                });
            }
        }
        battleController.dealDamage(emptyBattleUnit, finalTarget, attackDamage, skill.attackType!, undefined, attackRecord);
    });
    battleController.battleRecord.push(attackRecord);
};

const calcHealBonuses = (unit: IBattleUnit, baseValue: number): number => {
    let finalHeal = baseValue;
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
    return finalHeal;
};

const performTotemHeal = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: TBattleUnits,
    opponentUnits: TBattleUnits,
    battleRecord: TBattleRecord,
    battleController: BattleController,
) => {
    const { targetType, value, ppScale, mpScale } = skill;
    if (!targetType || value === undefined) {
        console.log("NO TARGET TYPE OR VALUE");
        return;
    }

    const targets = getAllyTargets(unit, allyUnits, targetType);
    if (!targets) {
        console.log("NO TARGET FOUND");
        return;
    }

    // check scaling from MP and PP
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    // Totem heal recieve healing bonuses from Hero
    const finalValue = calcHealBonuses(unit, calcTotemValue(value, mpScaleValue, ppScaleValue, totem));

    let overhealTotal = 0;
    targets.forEach((target) => {
        // check if target has antiheal debuffs (like ANTIHEAL)
        let antihealDebuff = false;
        forEachNestedEffects(target, (ne) => {
            if (ne.debuffType === EDebuffType.ANTIHEAL && ne.totalValue > 0 && !antihealDebuff) {
                ne.totalValue -= 1;
                antihealDebuff = true;
            }
        });
        if (antihealDebuff) {
            checkDebuffToRemove(target, EDebuffType.ANTIHEAL, battleRecord);
            // record
            const attackRecord: IBattleAction = {
                unitId: target.id,
                type: EBattleActionType.ATTACK,
                value: finalValue,
                targets: [],
            };
            battleRecord.push(attackRecord);
            const recordTarget = {
                targetId: target.id,
                isEvasion: false,
            };
            attackRecord?.targets?.push(recordTarget);
            //
            battleController.takeDamage(target, finalValue, undefined, recordTarget);
            //this.battleRecord.push({ unitId: target.id, type: EBattleActionType.BUFF_REMOVED, name: "Divine shield" });
            return;
        }

        target.latestDamageRecieved -= Math.min(target.maxHp - target.hp, finalValue);
        target.hp += finalValue;
        if (target.hp > target.maxHp) {
            overhealTotal += target.hp - target.maxHp;
            target.hp = target.maxHp;
        }

        battleRecord.push({
            unitId: totem.id,
            targetId: target.id,
            type: EBattleActionType.HEAL,
            value: finalValue,
        });
    });

    // overheal managing
    dealOverhealDamage(overhealTotal, unit, totem.id, skill, opponentUnits, battleController);
};

const performTotemAttrIncrease = (unit: IBattleUnit, totem: ITotem, skill: IHeroSkill, allyUnits: TBattleUnits, battleRecord: TBattleRecord) => {
    const { targetType, value, attribute, valueType, ppScale, mpScale } = skill;
    if (!targetType || value === undefined || !attribute || !valueType) {
        console.log("NO TARGET TYPE OR VALUE OR ATTR OR VALUETYPE");
        return;
    }

    const targets = getAllyTargets(unit, allyUnits, targetType);
    if (!targets) {
        console.log("NO TARGET FOUND");
        return;
    }
    // check scaling from MP and PP
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;

    targets.forEach((target) => {
        const attrValue = target[attribute];
        const increaseValue = calcTotemValue(calculateIncreaseValue(attrValue, value, valueType), mpScaleValue, ppScaleValue, totem);
        let addValue = 0;
        if (attribute === "armor") {
            target.itemBonuses.forEach((bonus) => {
                if (bonus.type === EItemBattleBonusType.INCREASE_ARMOR_GAIN) {
                    addValue += calculateIncreaseValue(increaseValue, getItemBonusValue(target, bonus), bonus.valueType);
                }
            });
        }
        target[attribute] = attrValue + increaseValue + addValue;

        battleRecord.push({
            unitId: totem.id,
            targetId: target.id,
            type: EBattleActionType.ATTRIBUTE_INCREASE,
            attribute,
            value: increaseValue + addValue,
        });
    });
};
