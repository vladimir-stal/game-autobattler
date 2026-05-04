import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const jesterSkill_2: IHeroSkillSet = {
    id: "MagicBardBuff",
    //name: "Fire fists(2)",
    //desc: "Apply [1]+[70%xMP] burn\non basic attacks",
    name: i18n.skills.mc.jesterSkill.name,
    desc: i18n.skills.mc.jesterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.JESTER],
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

export const jesterSkill: IHeroSkillSet = {
    id: "MagicBardBuff",
    //name: "Fire fists",
    //desc: "Apply [1]+[50%xMP] burn\non basic attacks",
    name: i18n.skills.mc.jesterSkill.name,
    desc: i18n.skills.mc.jesterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.JESTER],
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
    nextLevel: jesterSkill_2,
};

export const jesterSkills: THeroSkills = [jesterSkill];
