import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const samuraiSkill_2: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc2,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+3 bleed on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BLEED,
                value: 3,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    isChained: true,
    //nextLevel: samuraiSkill_3,
};

export const samuraiSkill: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+2 bleed on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BLEED,
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    isChained: true,
    nextLevel: samuraiSkill_2,
};

export const samuraiSkills: THeroSkills = [samuraiSkill];
