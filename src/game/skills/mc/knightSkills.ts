import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const knightSkill: IHeroSkillSet = {
    id: "KnightArmor",
    //name: "Knight armor",
    //desc: "<NOT IMPLEMENTED>",
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
        },
    ],
};

export const knightSkills: THeroSkills = [knightSkill];
