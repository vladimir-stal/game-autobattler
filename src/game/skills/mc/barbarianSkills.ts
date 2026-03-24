import { EBuffTimeType, EBuffType, EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const barbarianSkill: IHeroSkillSet = {
    id: "BarbarianShout",
    name: "Barbarian shout",
    desc: "Add hp regen value to self next basic attack",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "add hpReg to next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 100,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
};

export const barbarianSkills: THeroSkills = [barbarianSkill];
