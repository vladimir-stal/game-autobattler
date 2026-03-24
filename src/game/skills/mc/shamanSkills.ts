import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const shamanSkill_3: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: "Empower all totems(3)",
    desc: "Increase all totems values by [1]+[MP]",
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 100,
        },
    ],
};

export const shamanSkill_2: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: "Empower all totems(2)",
    desc: "Increase all totems values by [1]+[MP*70%]",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 70,
        },
    ],
    nextLevel: shamanSkill_3,
};

export const shamanSkill: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    //name: "Empower all totems",
    name: i18n.skills.mc.shamanTotemEmpower.name,
    //desc: "Increase all totems values by [1]",
    desc: i18n.skills.mc.shamanTotemEmpower.desc1, //"Increase all totems values by [1]+[MP*50%]",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 50,
        },
    ],
    nextLevel: shamanSkill_2,
};

export const shamanSkills: THeroSkills = [shamanSkill];
