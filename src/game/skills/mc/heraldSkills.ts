import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const heraldSkill_2: IHeroSkillSet = {
    id: "HeraldHorn",
    name: "Herald horn",
    desc: "Armor all allies [4]+[200%xPP]",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HERALD],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 4,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 200,
        },
    ],
};

export const heraldSkill: IHeroSkillSet = {
    id: "HeraldHorn",
    name: "Herald horn",
    desc: "Armor all allies [4]+[PP]",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HERALD],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 4,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 100,
        },
    ],
    nextLevel: heraldSkill_2,
};

export const heraldSkills: THeroSkills = [heraldSkill];
