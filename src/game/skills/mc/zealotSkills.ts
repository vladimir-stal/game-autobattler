// [
//     {
//         type: EHeroSkillType.DEBUFF,
//         isBasicAttack: true,
//         debuff: {
//             name: "-30% healing",
//             type: EDebuffType.HEALING_DECREASE,
//             value: 30,
//             valueType: "percent",
//             targetType: ETargetType.FIRST_ENEMY,
//             timeType: EBuffTimeType.DUEL,
//         },
//     },
// ],

// const zealotSkills: THeroSkills = [
//     {
//         id: "ZealotDebuff",
//         name: "Zealot debuff",
//         desc: "Debuff first enemy hp regen -[100]%",
//         level: 1,
//         heroClasses: [EHeroClass.ZEALOT],
//         isMcSkill: true,
//         skills: [
//             {
//                 type: EHeroSkillType.DEBUFF,
//                 isBasicAttack: true,
//                 debuff: {
//                     name: "hpReg -100%",
//                     type: EDebuffType.ATTRIBUTE_DECREASE,
//                     targetType: ETargetType.FIRST_ENEMY,
//                     timeType: EBuffTimeType.DUEL,
//                     value: 100,
//                     valueType: "percent",
//                     attribute: "hpRegen",
//                 },
//             },
//         ],
//     },
// ];

//TODO: add this debuff as common for dark

import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

// TODO: add scaling from mp? add value if heal < value => debuff is not removed

export const zealotSkill_2: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: "Antiheal(2)",
    desc: "Curse first enemy with\nantiheal which transforms next incoming\nheal into damage",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                type: EDebuffType.ANTIHEAL,
                name: "Antiheal",
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
                targetType: ETargetType.FIRST_ENEMY,
            },
        },
    ],
};

export const zealotSkill: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: "Antiheal",
    desc: "Curse first enemy with\nantiheal which transforms next incoming\nheal into damage",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                type: EDebuffType.ANTIHEAL,
                name: "Antiheal",
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
                targetType: ETargetType.FIRST_ENEMY,
            },
        },
    ],
    nextLevel: zealotSkill_2,
};

export const zealotSkills: THeroSkills = [zealotSkill];
