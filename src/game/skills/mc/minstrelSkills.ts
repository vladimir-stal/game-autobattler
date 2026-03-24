import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const minstrelSkill_2: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: "Double buff(2)",
    desc: "Tripls value of a random buff on ally",
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
    id: "MagicBardBuff",
    name: "Double buff",
    desc: "Doubles value of a random buff on ally",
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
            targetFromType: ETargetType.BUFFED_ALLY_RANDOM,
            targetType: ETargetType.BUFFED_ALLY_RANDOM,
        },
    ],
    nextLevel: minstrelSkill_2,
};

export const minstrelSkills: THeroSkills = [minstrelSkill];
