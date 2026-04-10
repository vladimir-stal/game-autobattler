import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

// TODO: rework!
export const mimicSkill: IHeroSkillSet = {
    id: "MimicSkill",
    //name: "Mimicry",
    //desc: "<NOT IMPLEMENTED>",
    name: i18n.skills.mc.mimicSkill.name,
    desc: i18n.skills.mc.mimicSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MIMIC],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 8,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
};

export const mimicSkills: THeroSkills = [mimicSkill];
