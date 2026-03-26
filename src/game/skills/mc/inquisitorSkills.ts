import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const inquisitorSkill_2: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: "Inquisitor Burn(2)",
    desc: "Debuff highest MP enemy \nwith mark that applies\n [10] burn every turn.",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Burn mark(2)",
                type: EDebuffType.MARK_BURN,
                value: 10,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
};

export const inquisitorSkill: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: "Inquisitor Burn",
    desc: "Debuff highest MP enemy \nwith mark that applies\n [5] burn every turn.",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Burn mark",
                type: EDebuffType.MARK_BURN,
                value: 5,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: inquisitorSkill_2,
};

export const inquisitorSkills: THeroSkills = [inquisitorSkill];
