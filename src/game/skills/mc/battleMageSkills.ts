import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

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

const battleMageSkillset = (atk:number, ppScale: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTACK,
            value: atk,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: ppScale,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: atk,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            mpScale: mpScale,
        },
    ]
}

export const battleMageSkill_3: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(9, 65, 65),
    isBasicAttack: false,
};

export const battleMageSkill_2: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(6, 50, 50),
    isBasicAttack: false,
    nextLevel: battleMageSkill_3,
};

export const battleMageSkill: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(4, 35, 35),
    isBasicAttack: false,
    nextLevel: battleMageSkill_2,
};

export const battleMageSkills: THeroSkills = [battleMageSkill];
