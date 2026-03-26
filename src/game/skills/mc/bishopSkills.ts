import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const bishopSkill_2: IHeroSkillSet = {
    id: "bishopHeal",
    name: "Chain heal(2)",
    desc: "Heals low hp ally\n[2]+[70%xMP] 3 times",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 70,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 70,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 70,
        },
    ],
    //nextLevel: bishopSkill_3
};

export const bishopSkill: IHeroSkillSet = {
    id: "bishopHeal",
    name: "Chain heal",
    desc: "Heals low hp ally\n[2]+[50%xMP] 3 times",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 50,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 50,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 50,
        },
    ],
    nextLevel: bishopSkill_2,
};

export const bishopSkills: THeroSkills = [bishopSkill];
