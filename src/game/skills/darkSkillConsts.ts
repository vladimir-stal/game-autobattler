import {
    AnimationType,
    EBuffTimeType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    EStatusType,
    ETargetType,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_MAGIC_MISSILES, IMAGE_SKILL_POISON } from "../utils/imageLoadUtil";
import { stealPPorMPSkill } from "./commonSkill3Consts";
import { removeBuffSkill } from "./commonSkillConsts";

// DEBUFF NEXT BA

export const debuffBaNextBaAll_3: IHeroSkillSet = {
    id: "debuffBaNextBa",
    name: "-BA Debuff all(3)",
    desc: "Debuff next basic attack [1]+[MP] all enemies",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "debuff ba all",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                mpScale: 100,
            },
        },
    ],
};

export const debuffBaNextBaAll_2: IHeroSkillSet = {
    id: "debuffBaNextBa",
    name: "-BA Debuff all(2)",
    desc: "Debuff next basic attack [1]+[MP*70%] all enemies",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "debuff ba all",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                mpScale: 70,
            },
        },
    ],
    nextLevel: debuffBaNextBaAll_3,
};

export const debuffBaNextBaAll: IHeroSkillSet = {
    id: "debuffBaNextBa",
    name: "-BA Debuff all",
    desc: "Debuff next basic attack [1]+[MP*50%] all enemies",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "debuff ba all",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                mpScale: 50,
            },
        },
    ],
    nextLevel: debuffBaNextBaAll_2,
};

// POISON RANDOM

export const poisonRandom_3: IHeroSkillSet = {
    id: "poisonRandom",
    name: i18n.skills.basic.poisonRandom.name + "(3)",
    desc: i18n.skills.basic.poisonRandom.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 5,
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    image: IMAGE_SKILL_POISON,
};

export const poisonRandom_2: IHeroSkillSet = {
    id: "poisonRandom",
    name: i18n.skills.basic.poisonRandom.name + "(2)",
    desc: i18n.skills.basic.poisonRandom.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 6,
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    nextLevel: poisonRandom_3,
    image: IMAGE_SKILL_POISON,
};

export const poisonRandom: IHeroSkillSet = {
    id: "poisonRandom",
    name: i18n.skills.basic.poisonRandom.name,
    desc: i18n.skills.basic.poisonRandom.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 3,
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    nextLevel: poisonRandom_2,
    image: IMAGE_SKILL_POISON,
};

// MAGIC ATTACK X3

export const magicAttackX3_3: IHeroSkillSet = {
    id: "magicAttackX3",
    //name: "Magic Attack x3(3)",
    //desc: "Deal [4] magic damage to random enemy 3 times",
    name: i18n.skills.basic.magicAttackX3.name + "(3)",
    desc: i18n.skills.basic.magicAttackX3.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    image: IMAGE_SKILL_MAGIC_MISSILES,
};

export const magicAttackX3_2: IHeroSkillSet = {
    id: "magicAttackX3",
    //name: "Magic Attack x3(2)",
    //desc: "Deal [3] magic damage to random enemy 3 times",
    name: i18n.skills.basic.magicAttackX3.name + "(2)",
    desc: i18n.skills.basic.magicAttackX3.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttackX3_3,
    image: IMAGE_SKILL_MAGIC_MISSILES,
};

export const magicAttackX3: IHeroSkillSet = {
    id: "magicAttackX3",
    //name: "Magic Attack x3",
    //desc: "Deal [2] magic damage to random enemy 3 times",
    name: i18n.skills.basic.magicAttackX3.name,
    desc: i18n.skills.basic.magicAttackX3.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            animation: AnimationType.NONE,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            animation: AnimationType.NONE,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
            animation: AnimationType.NONE,
        },
    ],
    nextLevel: magicAttackX3_2,
    image: IMAGE_SKILL_MAGIC_MISSILES,
    animation: AnimationType.UNIT_ATTACK,
};

export const darkSkills: THeroSkills = [poisonRandom, magicAttackX3];

export const darkSkills_2: THeroSkills = darkSkills.concat([debuffBaNextBaAll, removeBuffSkill]);

export const darkSkills_3: THeroSkills = darkSkills_2.concat([stealPPorMPSkill]);
