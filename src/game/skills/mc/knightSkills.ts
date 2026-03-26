import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const knightSkill: IHeroSkillSet = {
    id: "KnightArmor",
    name: "Knight armor",
    desc: "<NOT IMPLEMENTED>",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 8, //TODO PP: add pp to armor
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
        },
    ],
};

export const knightSkills: THeroSkills = [knightSkill];
