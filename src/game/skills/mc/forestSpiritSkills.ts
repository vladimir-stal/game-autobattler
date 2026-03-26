import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const forestSpititSkill_2: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    name: "Spirit Sacrifice(2)",
    desc: "Sacrifice self armor to gain\n[40%xARMOR] hp regen",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "hpRegen",
            value: 40,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 100,
            valueType: "percent",
            targetType: ETargetType.SELF,
        },
    ],
};

export const forestSpititSkill: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    name: "Spirit Sacrifice",
    desc: "Sacrifice self armor to gain\n[20%xARMOR] hp regen",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "hpRegen",
            value: 20,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 100,
            valueType: "percent",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: forestSpititSkill_2,
};

export const forestSpititSkills: THeroSkills = [forestSpititSkill];
