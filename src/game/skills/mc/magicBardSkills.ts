import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const magicBardSkill_2: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: "Fire fists(2)",
    desc: "Apply [1]+[70%xMP] burn\non basic attacks",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.MAGIC_BARD],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Fire fists",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BURN,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                mpScale: 70,
            },
        },
    ],
};

export const magicBardSkill: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: "Fire fists",
    desc: "Apply [1]+[50%xMP] burn\non basic attacks",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MAGIC_BARD],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Fire fists",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BURN,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                mpScale: 50,
            },
        },
    ],
    nextLevel: magicBardSkill_2,
};

export const magicBardSkills: THeroSkills = [magicBardSkill];
