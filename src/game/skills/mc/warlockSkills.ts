import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const warlockSkill_2: IHeroSkillSet = {
    id: "WarlockCurse",
    name: "Warlock curse(2)",
    desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MP] poison.",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-20% ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 20,
                valueType: "percent",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 4, //TODO MP: use unit MP
            targetType: ETargetType.HIGH_ATTACK_ENEMY,
            mpScale: 100,
        },
    ],
};

export const warlockSkill: IHeroSkillSet = {
    id: "WarlockCurse",
    name: "Warlock curse",
    desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MPx50%] poison.",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-20% ba", // +MP ????
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 20,
                valueType: "percent",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 4, //TODO MP: use unit MP
            targetType: ETargetType.HIGH_ATTACK_ENEMY,
            mpScale: 50,
        },
    ],
    nextLevel: warlockSkill_2,
};

export const warlockSkills: THeroSkills = [warlockSkill];
