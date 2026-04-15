import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const knightSkill_3: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 20,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 65,
        },
    ],
};

export const knightSkill_2: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 15,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 50,
        },
    ],
    nextLevel: knightSkill_3,
};

export const knightSkill: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 12, //TODO PP: add pp to armor
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 35,
        },
    ],
    nextLevel: knightSkill_2,
};

export const knightSkills: THeroSkills = [knightSkill];
