import { EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

// export const druidSkill_2: IHeroSkillSet = {
//     id: "DruidBurn",
//     name: "Druid burn(2)",
//     desc: "Apply [1]+[MP*70%] burn on all enemies",
//     level: 2,
//     heroClasses: [EHeroClass.DRUID],
//     isMcSkill: true,
//     skills: [
//         {
//             type: EHeroSkillType.STATUS_APPLY,
//             isBasicAttack: true,
//             status: EStatusType.BURN,
//             value: 1,
//             targetType: ETargetType.ALL_ENEMIES,
//             mpScale: 70,
//         },
//     ],
// };

// export const druidSkill: IHeroSkillSet = {
//     id: "DruidBurn",
//     name: "Druid burn",
//     desc: "Apply [1]+[MP*50%] burn on all enemies",
//     level: 1,
//     heroClasses: [EHeroClass.DRUID],
//     isMcSkill: true,
//     skills: [
//         {
//             type: EHeroSkillType.STATUS_APPLY,
//             isBasicAttack: true,
//             status: EStatusType.BURN,
//             value: 1,
//             targetType: ETargetType.ALL_ENEMIES,
//             mpScale: 50,
//         },
//     ],
//     nextLevel: druidSkill_2,
// };

//TODO: how to improve skill with level? more targets?

export const druidSkill_2: IHeroSkillSet = {
    id: "DruidShock",
    name: "Chain lightning(2)",
    desc: "Apply [1] shock to\nrandom enemy 3 times",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: false,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: false,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
    ],
    //nextLevel: druidSkill_2,
};

export const druidSkill: IHeroSkillSet = {
    id: "DruidShock",
    name: "Chain lightning",
    desc: "Apply [1] shock to\nrandom enemy 3 times",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: false,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: false,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.SHOCK,
            value: 1,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            //mpScale: 50,
        },
    ],
    nextLevel: druidSkill_2,
};

export const druidSkills: THeroSkills = [druidSkill];
