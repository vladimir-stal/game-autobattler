import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

// {
//         id: "BattlemageDebuff",
//         name: "Battlemage debuff",
//         desc: "Debuff magic resist -[20]% to first enemy",
//         level: 1,
//         heroClasses: [EHeroClass.BATTLE_MAGE],
//         isMcSkill: true,
//         skills: [
//             {
//                 type: EHeroSkillType.DEBUFF,
//                 isBasicAttack: true,
//                 debuff: {
//                     name: "-20% magic resist",
//                     type: EDebuffType.MAGIC_RESIST_DECREASE,
//                     value: 20,
//                     valueType: "percent",
//                     targetType: ETargetType.FIRST_ENEMY,
//                     timeType: EBuffTimeType.DUEL,
//                 },
//             },
//         ],
//     },

export const battleMageSkill: IHeroSkillSet = {
    id: "BattlemageAttack",
    name: "Multi attack",
    desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 20,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 20,
        },
    ],
    isBasicAttack: false,
};

export const battleMageSkills: THeroSkills = [battleMageSkill];
