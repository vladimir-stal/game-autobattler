import {
    AnimationType,
    EBuffTimeType,
    EBuffType,
    EEffectAnimationType,
    EHeroSkillType,
    ESkillCondition,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
} from "../../types";
/*
    this file is similar to skillUtil.ts but doesn't refer to skillConsts.ts
    if a function from here is moved to skillUtil.ts - it would create
    circular reference and game will fail to load
*/

export const skillsetSummon = (summon: IUnit, atkPure: number, atkPercent: number, atkMpScale: number, hpPure: number, armorPure: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "maxHp",
            value: hpPure,
            valueType: "number",
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: hpPure,
            valueType: "number",
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: armorPure,
            valueType: "number",
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
            animation: AnimationType.NONE,
        },

        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "attack",
            value: atkPure,
            valueType: "number",
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: atkPercent,
                valueType: "percent",
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                mpScale: atkMpScale,
            },
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: summon,
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const substituteSummonDescription = (skillset: IHeroSkillSet): string => {
    // const s = skillset.desc.split("[stats]");
    // if (s.length > 1) {
    //     const unit = skillset.skills.find(sk => sk.type === EHeroSkillType.SUMMON).summon;
    //     const atk = unit.basicAttack ? unit.basicAttack : "?";
    //     const hp = unit.basicMaxHp ? unit.basicMaxHp : "?";
    //     return s.join("["+atk+","+hp+"]");
    // } else
    //     return skillset.desc;

    const { desc, skills } = skillset;
    if (desc.includes("[stats]")) {
        const { summon } = skills.find((sk) => sk.type === EHeroSkillType.SUMMON) || {};
        const atk = summon?.basicAttack || "?";
        const hp = summon?.basicMaxHp || "?";
        return desc.replace("[stats]", "[" + atk + "," + hp + "]");
    }
    return desc;
};
