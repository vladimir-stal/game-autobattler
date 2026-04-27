import {
    AnimationType,
    EEffectAnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillSetType,
    EStatusType,
    ETargetType,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_BURN, IMAGE_SKILL_DRAGON_FIRE, IMAGE_SKILL_LIGHTNING, IMAGE_SKILL_SHOCK_HAND } from "../utils/load/skillImagesLoad";
import { buffSelfMPorPP } from "./commonSkill3Consts";
import { blindingBeamSkill, heatUpSkill } from "./commonSkillConsts";

// MAGIC ATTACK

export const magicAttack_3: IHeroSkillSet = {
    id: "magicAttack",
    name: i18n.skills.basic.magicAttack.name,
    desc: i18n.skills.basic.magicAttack.desc3, //"Deal [5] magic damage to first enemy",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 9, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    image: IMAGE_SKILL_LIGHTNING,
};

export const magicAttack_2: IHeroSkillSet = {
    id: "magicAttack",
    name: i18n.skills.basic.magicAttack.name,
    desc: i18n.skills.basic.magicAttack.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 7, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttack_3,
    image: IMAGE_SKILL_LIGHTNING,
};

export const magicAttack: IHeroSkillSet = {
    id: "magicAttack",
    name: i18n.skills.basic.magicAttack.name,
    desc: i18n.skills.basic.magicAttack.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    //isActivateOnStart: true,
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 5, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            effectAnimationType: EEffectAnimationType.EFFECT_LIGHTNING_1,
            effectAnimationDelay: 800,
            effectAnimDistanceInverted: { x: 250 },
        },
    ],
    nextLevel: magicAttack_2,
    image: IMAGE_SKILL_LIGHTNING,
};

// APPLY BURN

export const applyBurn_3: IHeroSkillSet = {
    id: "applyBurn",
    name: i18n.skills.basic.applyBurn.name,
    desc: i18n.skills.basic.applyBurn.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 6,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_BURN,
};

export const applyBurn_2: IHeroSkillSet = {
    id: "applyBurn",
    name: i18n.skills.basic.applyBurn.name,
    desc: i18n.skills.basic.applyBurn.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 4,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: applyBurn_3,
    image: IMAGE_SKILL_BURN,
};

export const applyBurn: IHeroSkillSet = {
    id: "applyBurn",
    name: i18n.skills.basic.applyBurn.name,
    desc: i18n.skills.basic.applyBurn.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC],
    //isActivateOnStart: true,
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 3,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: applyBurn_2,
    image: IMAGE_SKILL_BURN,
};

////////////////////////////////////////// LEVEL 2 ////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// MAGIC ATTACK ALL ENEMIES

export const magicAttackAll_3: IHeroSkillSet = {
    id: "magicAttackAll",
    //name: "Magic Attack All(3)",
    //desc: "Deal [1]+[MP] magic damage to all enemies",
    name: i18n.skills.level2.magicAttackAll.name,
    desc: i18n.skills.level2.magicAttackAll.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 60,
        },
    ],
    image: IMAGE_SKILL_DRAGON_FIRE,
};

export const magicAttackAll_2: IHeroSkillSet = {
    id: "magicAttackAll",
    //name: "Magic Attack All(2)",
    //desc: "Deal [1]+[MP*70%] magic damage to all enemies",
    name: i18n.skills.level2.magicAttackAll.name,
    desc: i18n.skills.level2.magicAttackAll.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 40,
        },
    ],
    nextLevel: magicAttackAll_3,
    image: IMAGE_SKILL_DRAGON_FIRE,
};

export const magicAttackAll: IHeroSkillSet = {
    id: "magicAttackAll",
    // name: "Magic Attack All",
    //desc: "Deal [1]+[MP*50%] magic damage to all enemies",
    name: i18n.skills.level2.magicAttackAll.name,
    desc: i18n.skills.level2.magicAttackAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 20,
        },
    ],
    nextLevel: magicAttackAll_2,
    image: IMAGE_SKILL_DRAGON_FIRE,
};

////////////////////////////////////////// APPLY SHOCK TO 1 ENEMY

export const applyShock_3: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 3,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_SHOCK_HAND,
};

export const applyShock_2: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_SHOCK_HAND,
    nextLevel: applyShock_3,
};

export const applyShock: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 1,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_SHOCK_HAND,
    nextLevel: applyShock_2,
};

// meteorite fall
//   buff round_cycle trigger 1-3 times : aoe magic damage+burn

//
export const magicSkills: THeroSkills = [magicAttack, applyBurn];

export const magicSkills_2: THeroSkills = magicSkills.concat([magicAttackAll, applyShock, heatUpSkill, blindingBeamSkill]);

export const magicSkills_3: THeroSkills = magicSkills_2.concat([buffSelfMPorPP]);
