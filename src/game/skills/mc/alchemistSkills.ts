import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const alchemistSkill_2: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    name: "Alchemist hp swap(2)",
    desc: "Swap hp with first ally and heal self [5]+[MPx40%]",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            isBasicAttack: false,
            targetType: ETargetType.LOW_HP_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 40,
        },
    ],
};

export const alchemistSkill: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    name: "Alchemist hp swap",
    desc: "Swap hp with first ally and heal self [5]+[MPx20%]",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            isBasicAttack: false,
            targetType: ETargetType.LOW_HP_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 20,
        },
    ],
};

export const alchemistSkills: THeroSkills = [alchemistSkill];
