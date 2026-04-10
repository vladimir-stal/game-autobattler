import {
    AnimationType,
    EBuffTimeType,
    EDebuffType,
    EEffectAnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_DARK_21, IMAGE_SKILL_DARK_22, IMAGE_SKILL_MAGIC_MISSILES, IMAGE_SKILL_POISON, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";
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
    image: IMAGE_SKILL_DARK_21,
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
    image: IMAGE_SKILL_DARK_21,
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
    image: IMAGE_SKILL_DARK_21,
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
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 4,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
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
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 3,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
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
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 2,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
        },
    ],
    nextLevel: magicAttackX3_2,
    image: IMAGE_SKILL_MAGIC_MISSILES,
    animation: AnimationType.UNIT_ATTACK,
};

//
// STEAL MP/PP - Steal MP,PP from highest MP or PP enemy, depending of your highest attr
//

export const stealPPorMPSkill_3: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Steal power(3)",
    desc: "Steal [12] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "magicPower",
            value: 12,
            valueType: "number",
            targetType: ETargetType.HIGH_MP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "magicPower",
            value: 12,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
        //
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "physicalPower",
            value: 12,
            valueType: "number",
            targetType: ETargetType.HIGH_PP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "physicalPower",
            value: 12,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    image: IMAGE_SKILL_DARK_22,
};

export const stealPPorMPSkill_2: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Steal power(2)",
    desc: "Steal [8] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "magicPower",
            value: 8,
            valueType: "number",
            targetType: ETargetType.HIGH_MP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "magicPower",
            value: 8,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
        //
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "physicalPower",
            value: 8,
            valueType: "number",
            targetType: ETargetType.HIGH_PP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "physicalPower",
            value: 8,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    image: IMAGE_SKILL_DARK_22,
    nextLevel: stealPPorMPSkill_3,
};

export const stealPPorMPSkill: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Steal power",
    desc: "Steal [4] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "magicPower",
            value: 4,
            valueType: "number",
            targetType: ETargetType.HIGH_MP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "magicPower",
            value: 4,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
        //
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "physicalPower",
            value: 4,
            valueType: "number",
            targetType: ETargetType.HIGH_PP_ENEMY,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: true,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "physicalPower",
            value: 4,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    image: IMAGE_SKILL_DARK_22,
    nextLevel: stealPPorMPSkill_2,
};

//
// MAGIC RAIN - creates magic missiles which count depends on MP
//

export const magicRain_3: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.basic.magicRain.name,
    desc: i18n.skills.basic.magicRain.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            mpScale: 60,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 2,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
        },
    ],
    image: IMAGE_SKILL_MAGIC_MISSILES,
    animation: AnimationType.UNIT_ATTACK,
};

export const magicRain_2: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.basic.magicRain.name,
    desc: i18n.skills.basic.magicRain.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.REPEATING_SKILL,
            value: 2, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            mpScale: 50,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 2,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
        },
    ],
    nextLevel: magicRain_3,
    image: IMAGE_SKILL_MAGIC_MISSILES,
    animation: AnimationType.UNIT_ATTACK,
};

export const magicRain: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.basic.magicRain.name,
    desc: i18n.skills.basic.magicRain.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.UNIT_ATTACK,
            mpScale: 40,
            childSkill: {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 2,
                targetType: ETargetType.RANDOM_ENEMY,
                attackType: EHeroAttackType.MAGIC,
                animation: AnimationType.NONE,
                effectAnimationType: EEffectAnimationType.EFFECT_DARK_ATTACK,
                effectAnimationDelay: 250,
                // TODO: fix animation & animations delays
            },
        },
    ],
    nextLevel: magicRain_2,
    image: IMAGE_SKILL_MAGIC_MISSILES,
    animation: AnimationType.UNIT_ATTACK,
};

export const darkSkills: THeroSkills = [poisonRandom, magicAttackX3];

export const darkSkills_2: THeroSkills = darkSkills.concat([debuffBaNextBaAll, removeBuffSkill]);

export const darkSkills_3: THeroSkills = darkSkills_2.concat([stealPPorMPSkill, magicRain]);
