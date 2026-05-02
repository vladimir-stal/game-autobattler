import {
    EBattleActionType,
    EBuffType,
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
    dealOverhealDamage,
    emptyBattleUnit,
    getAllyTargets,
    getOpponentTargets,
    getStatusItemBonusType,
    reduceStatus,
} from "./battleUtils";

export const performTotemSkill = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: (IBattleUnit | null)[],
    opponentUnits: (IBattleUnit | null)[],
    battleRecord: TBattleRecord,
    battleController: BattleController,
) => {
    let totemValueBonus = 0;

    // check item bonuses

    unit.itemBonuses.forEach((bonus) => {
        if (bonus.type === EItemBattleBonusType.TOTEM_INCREASE_VALUE) {
            totemValueBonus += calculateIncreaseValue(1, bonus.value, bonus.valueType);
        }
    });

    switch (skill.type) {
        case EHeroSkillType.ATTACK:
            performTotemAttack(unit, totem, skill, opponentUnits, totemValueBonus, battleController);
            break;
        case EHeroSkillType.ATTRIBUTE_INCREASE:
            performTotemAttrIncrease(unit, totem, skill, allyUnits, totemValueBonus, battleRecord);
            break;
        // case EHeroSkillType.BUFF:
        //     this.performBuff(unit, skill.buff, isPlayer1);
        //     break;
        // case EHeroSkillType.DEBUFF:
        //     this.performDebuff(unit, skill, isPlayer1);
        //     break;
        case EHeroSkillType.HEAL:
            performTotemHeal(unit, totem, skill, allyUnits, opponentUnits, totemValueBonus, battleRecord, battleController);
            break;
        case EHeroSkillType.STATUS_APPLY:
            performTotemStatusApply(unit, totem, skill, opponentUnits, totemValueBonus, battleController);
            break;
        // case EHeroSkillType.TOTEM:
        //     this.performTotem(unit, skill, isPlayer1);
        //     break;
        default:
            console.log("No handler for skill type", skill.type);
    }
};

const performTotemStatusApply = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    opponentUnits: TBattleUnits,
    totemValueBonus: number,
    battleController: BattleController,
) => {
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
    const baseValue =
        !valueType || valueType === "number" || valueType === "evolvedNumber" ? value : valueFrom ? Math.floor((unit[valueFrom] * value) / 100) : 0;

    let finalValue = baseValue + totemValueBonus + mpScaleValue + ppScaleValue;

    const itemBonus = unit.itemBonuses.find((itemBonus) => itemBonus.type === getStatusItemBonusType(status));
    if (itemBonus) {
        finalValue += calculateIncreaseValue(1, itemBonus.value, itemBonus.valueType);
    }

    targets.forEach((target) => {
        applyStatus(unit, target, status, finalValue, battleController.battleRecord, false);
    });
};

const performTotemAttack = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    opponentUnits: TBattleUnits,
    totemValueBonus: number,
    battleController: BattleController,
) => {
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

    // calculate attack damage according to buffs and debuffs
    let attackDamage = value + totemValueBonus + mpScaleValue + ppScaleValue;
    // unit.buffs.forEach((buff) => {
    //     if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
    //         const { value, valueType, valueFrom } = buff;
    //         if (!valueType || value === undefined) {
    //             return;
    //         }
    //         const percentFrom = valueFrom ? unit[valueFrom] : undefined;
    //         attackDamage = calculateIncreasedValue(attackDamage!, value, valueType, percentFrom);
    //     }
    // });
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
    totemValueBonus: number,
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
    const finalValue = calcHealBonuses(unit, value + totemValueBonus + mpScaleValue + ppScaleValue);

    let overhealTotal = 0;
    targets.forEach((target) => {
        let finalReduction = 0;
        // BLEED & POISON interaction
        target.statuses.forEach((status) => {
            if (status.type === EStatusType.BLEED) {
                const reduction = Math.min(Math.floor(finalValue / 5) + 1, status.value);
                reduceStatus(target, target, status.type, reduction, battleRecord);
            }
            if (status.type === EStatusType.POISON) {
                finalReduction = Math.min(finalValue, Math.floor(status.value / 2) + 1, status.value);
                reduceStatus(target, target, status.type, finalReduction, battleRecord);
                //finalHeal -= finalReduction;
            }
        });

        target.hp += finalValue - finalReduction;
        if (target.hp > target.maxHp) {
            overhealTotal += target.hp - target.maxHp;
            target.hp = target.maxHp;
        }

        battleRecord.push({
            unitId: totem.id,
            targetId: target.id,
            type: EBattleActionType.HEAL,
            value,
        });
    });

    // overheal managing
    dealOverhealDamage(overhealTotal, unit, totem.id, skill, opponentUnits, battleController);
};

const performTotemAttrIncrease = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: TBattleUnits,
    totemValueBonus: number,
    battleRecord: TBattleRecord,
) => {
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
        const increaseValue = calculateIncreaseValue(attrValue, value, valueType) + totemValueBonus + ppScaleValue + mpScaleValue;
        target[attribute] = attrValue + increaseValue;

        battleRecord.push({
            unitId: totem.id,
            targetId: target.id,
            type: EBattleActionType.ATTRIBUTE_INCREASE,
            attribute,
            value: increaseValue,
        });
    });
};
