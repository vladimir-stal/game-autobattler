import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const minstrelSkill_2: IHeroSkillSet = {
    id: "minstrelBuff",
    //name: "Double buff(2)",
    //desc: "Tripls value of a random buff on ally",
    name: i18n.skills.mc.minstrelSkill.name,
    desc: i18n.skills.mc.minstrelSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.MINSTREL],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF_INCREASE_VALUE,
            isBasicAttack: true,
            value: 200,
            valueType: "percent",
            targetFromType: ETargetType.BUFFED_ALLY_RANDOM,
            targetType: ETargetType.BUFFED_ALLY_RANDOM,
        },
    ],
};

export const minstrelSkill: IHeroSkillSet = {
    id: "minstrelBuff",
    //name: "Double buff",
    //desc: "Doubles value of a random buff on ally",
    name: i18n.skills.mc.minstrelSkill.name,
    desc: i18n.skills.mc.minstrelSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MINSTREL],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF_INCREASE_VALUE,
            isBasicAttack: true,
            value: 100,
            valueType: "percent",
            //targetFromType: ETargetType.BUFFED_ALLY_RANDOM, // not used?
            targetType: ETargetType.BUFFED_ALLY_RANDOM,

        },
    ],
    nextLevel: minstrelSkill_2,
};

export const minstrelSkills: THeroSkills = [minstrelSkill];
