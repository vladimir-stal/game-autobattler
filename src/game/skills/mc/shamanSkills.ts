import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

//TODO: use this skill
// const shamanSkills_OLD: THeroSkills = [
//     {
//         id: "ShamanTotem",
//         name: "Shaman totem",
//         desc: "Place a totem that \nheals low hp ally",
//         level: 1,
//         heroClasses: [EHeroClass.SHAMAN],
//         isMcSkill: true,
//         skills: [
//             {
//                 //heroClasses: [EHeroClass.ALL],
//                 type: EHeroSkillType.TOTEM,
//                 isBasicAttack: true,
//                 totem: {
//                     id: "SHAMAN_TOTEM",
//                     name: "Shaman totem",
//                     skills: [
//                         {
//                             type: EHeroSkillType.HEAL,
//                             isBasicAttack: false,
//                             value: 3, // TODO MP: add MP modifier to value
//                             valueType: "number",
//                             targetType: ETargetType.LOW_HP_ALLY,
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
// ];

export const shamanSkill_3: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc2,
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
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc2,
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
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc1,
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
