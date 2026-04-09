import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_PHYS_ATTACK, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";

////////////// COMMON SKILLS FOR MULTPLE BASIC CLASSES //////////////////////////////////////////////////////////////////////

// NO BASIC ATTACK
// always chained. to circle fast through skills

export const noBasicAttackSkill: IHeroSkillSet = {
    id: "noBasicAttack",
    name: "No basic attack",
    desc: "Perform no basic attack",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ALL],
    skills: [
        {
            type: EHeroSkillType.NONE,
            isBasicAttack: false,
        },
    ],
    isChained: true,
    image: IMAGE_SKILL_TEST,
};

// ONLY BASIC ATTACK
// always chained. to circle fast through skills

// export const onlyBasicAttackSkill: IHeroSkillSet = {
//     id: "onlyBasicAttack",
//     name: "Only basic attack",
//     desc: "Perform a basic attack",
//     level: 1,
//     priceLevel: 2,
//     heroClasses: [EHeroClass.ALL],
//     skills: [
//         {
//             type: EHeroSkillType.NONE,
//             isBasicAttack: true,
//         },
//     ],
//     isChained: true,
//     image: IMAGE_SKILL_TEST,
// };

// PHYSICAL ATTACK

export const phycisalAttackSkill_3: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name + "(3)",
    desc: i18n.skills.basic.phycAttack.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 6,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill_2: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name + "(2)",
    desc: i18n.skills.basic.phycAttack.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 50,
        },
    ],
    nextLevel: phycisalAttackSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 35,
        },
    ],
    //isChained: true,
    nextLevel: phycisalAttackSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

// REMOVE DEBUFF

export const removeDebuffSkill_3: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 3,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const removeDebuffSkill_2: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 2,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeDebuffSkill_3,
    image: IMAGE_SKILL_TEST,
};

export const removeDebuffSkill: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 1,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeDebuffSkill_2,
    image: IMAGE_SKILL_TEST,
};

// REMOVE BUFF

export const removeBuffSkill_3: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 3,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const removeBuffSkill_2: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 2,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: false,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeBuffSkill_3,
    image: IMAGE_SKILL_TEST,
};

export const removeBuffSkill: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 1,
    priceLevel: 2,
    rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.BUFF_REMOVE,
            isBasicAttack: true,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeBuffSkill_2,
    image: IMAGE_SKILL_TEST,
};
