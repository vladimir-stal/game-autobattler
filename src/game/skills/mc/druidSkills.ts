import { EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

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

// TODO: make times depend on MP!

const druidSkillset = (repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: repeats,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.STATUS_APPLY,
                status: EStatusType.SHOCK,
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ENEMY,
            },
        },
    ];
};

export const druidSkill_3: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning(2)",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(5),
};

export const druidSkill_2: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning(2)",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(4),
    nextLevel: druidSkill_3,
};

export const druidSkill: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(3),
    nextLevel: druidSkill_2,
};

export const druidSkills: THeroSkills = [druidSkill];
