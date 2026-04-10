import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const bladedancerSkill_2: IHeroSkillSet = {
    id: "bladedancerBuff",
    //name: "Dance of steel", //i18n.skills.mc.DivineShield.name,
    //desc: "Сonsecutive basic attacks\ndeal more damage", //i18n.skills.mc.DivineShield.desc1,
    name: i18n.skills.mc.bladedancerSkill.name,
    desc: i18n.skills.mc.bladedancerSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLADEDANCER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Blade dance",
                type: EBuffType.BLADEDANCE,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 2,
            },
        },
    ],
};

export const bladedancerSkill: IHeroSkillSet = {
    id: "bladedancerBuff",
    //name: "Dance of steel", //i18n.skills.mc.DivineShield.name,
    //desc: "Сonsecutive basic attacks\ndeal more damage", //i18n.skills.mc.DivineShield.desc1,
    name: i18n.skills.mc.bladedancerSkill.name,
    desc: i18n.skills.mc.bladedancerSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLADEDANCER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Blade dance",
                type: EBuffType.BLADEDANCE,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
        },
    ],
    nextLevel: bladedancerSkill_2,
};

export const bladedancerSkills: THeroSkills = [bladedancerSkill];
