import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const inquisitorSkill_3: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc2,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Burn mark(3)",
                type: EDebuffType.MARK_BURN,
                value: 15,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
};

export const inquisitorSkill_2: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc3,
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
    nextLevel: inquisitorSkill_3,
};

export const inquisitorSkill: IHeroSkillSet = {
    id: "InquisitorBurn",
    //name: "Inquisitor Burn",
    //desc: "Debuff highest MP enemy \nwith mark that applies\n [5] burn every turn.",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc1,
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
