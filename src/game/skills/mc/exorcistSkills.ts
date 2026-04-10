import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const exorcistSkill_2: IHeroSkillSet = {
    id: "ExorcistClear",
    //name: "Exorcist clear(2)",
    //desc: "Remove a summon and remove a totem\n from enemies",
    name: i18n.skills.mc.exorcistSkill.name,
    desc: i18n.skills.mc.exorcistSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.EXORCIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.CUSTOM,
        },
        {
            type: EHeroSkillType.SUMMON_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.CUSTOM,
        },
    ],
    //nextLevel: exorcistSkill_2
};

export const exorcistSkill: IHeroSkillSet = {
    id: "ExorcistClear",
    //name: "Exorcist clear",
    //desc: "Remove a summon and remove a totem\n from enemies",
    name: i18n.skills.mc.exorcistSkill.name,
    desc: i18n.skills.mc.exorcistSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.EXORCIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.CUSTOM,
        },
        {
            type: EHeroSkillType.SUMMON_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.CUSTOM,
        },
    ],
    nextLevel: exorcistSkill_2,
};

export const exorcistSkills: THeroSkills = [exorcistSkill];
