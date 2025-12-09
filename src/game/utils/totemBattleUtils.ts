import { EBattleActionType, EHeroSkillType, EItemBattleBonusType, IBattleUnit, IHeroSkill, ITotem, TBattleRecord, TBattleUnits } from "../../types";
import { calculateIncreaseValue, dealDamage, getAllyTargets, getOpponentTargets } from "./battleUtils";

export const performTotemSkill = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: (IBattleUnit | null)[],
    opponentUnits: (IBattleUnit | null)[],
    battleRecord: TBattleRecord
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
            performTotemAttack(unit, totem, skill, opponentUnits, totemValueBonus, battleRecord);
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
            performTotemHeal(unit, totem, skill, allyUnits, totemValueBonus, battleRecord);
            break;
        // case EHeroSkillType.SUMMON:
        //     this.performSummon(unit, skill, isPlayer1);
        //     break;
        // case EHeroSkillType.TOTEM:
        //     this.performTotem(unit, skill, isPlayer1);
        //     break;
        default:
            console.log("No handler for skill type", skill.type);
    }
};

const performTotemAttack = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    opponentUnits: TBattleUnits,
    totemValueBonus: number,
    battleRecord: TBattleRecord
) => {
    const { targetType, value, attackType } = skill;
    if (!targetType || !attackType || value === undefined) {
        console.log("NO TARGET TYPE OR VALUE");
        return;
    }

    const targets = getOpponentTargets(opponentUnits, targetType);
    if (!targets) {
        return;
    }

    // calculate attack damage according to buffs and debuffs
    let attackDamage = value + totemValueBonus;
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

    targets.forEach((target) => {
        // check if target has a summon - summon takes damage instead
        let finalTarget = target;
        if (target.summon) {
            finalTarget = target.summon;
        }
        // record
        battleRecord.push({ unitId: totem.id, targetId: finalTarget.id, type: EBattleActionType.ATTACK, value: attackDamage });
        //
        dealDamage(finalTarget, attackDamage, skill.attackType!, battleRecord);
    });
};

const performTotemHeal = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: TBattleUnits,
    totemValueBonus: number,
    battleRecord: TBattleRecord
) => {
    const { targetType, value } = skill;
    if (!targetType || value === undefined) {
        console.log("NO TARGET TYPE OR VALUE");
        return;
    }

    const targets = getAllyTargets(unit, allyUnits, targetType);
    if (!targets) {
        console.log("NO TARGET FOUND");
        return;
    }

    targets.forEach((target) => {
        // TODO: calculate heal value (buffs)
        target.hp += value;
        if (target.hp > target.maxHp) {
            target.hp = target.maxHp;
        }

        battleRecord.push({ unitId: totem.id, targetId: target.id, type: EBattleActionType.HEAL, value });
    });
};

const performTotemAttrIncrease = (
    unit: IBattleUnit,
    totem: ITotem,
    skill: IHeroSkill,
    allyUnits: TBattleUnits,
    totemValueBonus: number,
    battleRecord: TBattleRecord
) => {
    const { targetType, value, attribute, valueType } = skill;
    if (!targetType || value === undefined || !attribute || !valueType) {
        console.log("NO TARGET TYPE OR VALUE OR ATTR OR VALUETYPE");
        return;
    }

    const targets = getAllyTargets(unit, allyUnits, targetType);
    if (!targets) {
        console.log("NO TARGET FOUND");
        return;
    }

    targets.forEach((target) => {
        const attrValue = target[attribute];
        const increaseValue = calculateIncreaseValue(attrValue, value, valueType) + totemValueBonus;
        target[attribute] = attrValue + increaseValue;

        battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.ATTRIBUTE_INCREASE, attribute, value: increaseValue });
    });
};
