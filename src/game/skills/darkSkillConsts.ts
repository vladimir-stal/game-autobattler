import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EDebuffType,
    EEffectAnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_DRAFT_HUBRIS,
    IMAGE_DRAFT_POISONHOST,
    IMAGE_SKILL_DARK_21,
    IMAGE_SKILL_DARK_22,
    IMAGE_SKILL_DARK_MISSILES_RAIN,
    IMAGE_SKILL_MAGIC_MISSILES,
    IMAGE_SKILL_POISON,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";
import { removeBuffSkill, toxicTuneSkill, venomHeartSkill } from "./commonSkillConsts";

// DEBUFF NEXT BA

export const debuffBaNextBaAll_3: IHeroSkillSet = {
    id: "debuffBaNextBa",
    //name: "-BA Debuff all(3)",
    //desc: "Debuff next basic attack [1]+[MP] all enemies",
    name: i18n.skills.level2.debuffBaNextBaAll.name,
    desc: i18n.skills.level2.debuffBaNextBaAll.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
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
    //name: "-BA Debuff all(2)",
    //desc: "Debuff next basic attack [1]+[MP*70%] all enemies",
    name: i18n.skills.level2.debuffBaNextBaAll.name,
    desc: i18n.skills.level2.debuffBaNextBaAll.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
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
    //name: "-BA Debuff all",
    //desc: "Debuff next basic attack [1]+[MP*50%] all enemies",
    name: i18n.skills.level2.debuffBaNextBaAll.name,
    desc: i18n.skills.level2.debuffBaNextBaAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
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
    name: i18n.skills.basic.poisonRandom.name,
    desc: i18n.skills.basic.poisonRandom.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.POISON,
            value: 9,
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    image: IMAGE_SKILL_POISON,
};

export const poisonRandom_2: IHeroSkillSet = {
    id: "poisonRandom",
    name: i18n.skills.basic.poisonRandom.name,
    desc: i18n.skills.basic.poisonRandom.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.POISON,
            value: 5,
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
    name: i18n.skills.basic.magicAttackX3.name,
    desc: i18n.skills.basic.magicAttackX3.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            childSkill: {
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
    image: IMAGE_SKILL_MAGIC_MISSILES,
};

export const magicAttackX3_2: IHeroSkillSet = {
    id: "magicAttackX3",
    //name: "Magic Attack x3(2)",
    //desc: "Deal [3] magic damage to random enemy 3 times",
    name: i18n.skills.basic.magicAttackX3.name,
    desc: i18n.skills.basic.magicAttackX3.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 2, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            childSkill: {
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
    name: i18n.skills.basic.magicAttackX3.name,
    desc: i18n.skills.basic.magicAttackX3.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 2, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            childSkill: {
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
    animationType: AnimationType.UNIT_ATTACK,
};

//
// STEAL MP/PP - Steal MP,PP from highest MP or PP enemy, depending of your highest attr
//

const stealPPorMPSkillset = (amount: number): IHeroSkill[] => {
    return [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            type: EHeroSkillType.CALCULATE_NUMBER,
            value: -1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            type: EHeroSkillType.CALCULATE_NUMBER,
            value: 1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        // MP_IS_HIGHER_THAN_PP
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_NEGATIVE,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "magicPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.HIGH_MP_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_NEGATIVE,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "magicPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
        // PP_IS_HIGHER_THAN_MP
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "physicalPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.HIGH_PP_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "physicalPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
        // EQUAL
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "magicPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.HIGH_MP_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "magicPower",
            value: amount,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ];
};

export const stealPPorMPSkill_3: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    name: i18n.skills.level3.stealPPorMPSkill.name,
    desc: i18n.skills.level3.stealPPorMPSkill.desc3,
    //name: "Steal power(3)",
    //desc: "Steal [12] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: stealPPorMPSkillset(12),
    image: IMAGE_SKILL_DARK_22,
};

export const stealPPorMPSkill_2: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    name: i18n.skills.level3.stealPPorMPSkill.name,
    desc: i18n.skills.level3.stealPPorMPSkill.desc2,
    //name: "Steal power(2)",
    //desc: "Steal [8] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: stealPPorMPSkillset(7),
    image: IMAGE_SKILL_DARK_22,
    nextLevel: stealPPorMPSkill_3,
};

export const stealPPorMPSkill: IHeroSkillSet = {
    id: "stealPPorMPSkill",
    name: i18n.skills.level3.stealPPorMPSkill.name,
    desc: i18n.skills.level3.stealPPorMPSkill.desc1,
    //name: "Steal power",
    //desc: "Steal [4] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: stealPPorMPSkillset(4),
    image: IMAGE_SKILL_DARK_22,
    nextLevel: stealPPorMPSkill_2,
};

//
// MAGIC RAIN - creates magic missiles which count depends on MP
//

export const magicRain_3: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.level3.magicRain.name,
    desc: i18n.skills.level3.magicRain.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 3, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            mpScale: 60,
            childSkill: {
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
    image: IMAGE_SKILL_DARK_MISSILES_RAIN,
    animationType: AnimationType.UNIT_ATTACK,
};

export const magicRain_2: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.level3.magicRain.name,
    desc: i18n.skills.level3.magicRain.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 2, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            mpScale: 50,
            childSkill: {
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
    image: IMAGE_SKILL_DARK_MISSILES_RAIN,
    animationType: AnimationType.UNIT_ATTACK,
};

export const magicRain: IHeroSkillSet = {
    id: "magicRain",
    name: i18n.skills.level3.magicRain.name,
    desc: i18n.skills.level3.magicRain.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1, // how many repeats, can be calculated (max 20)
            targetType: ETargetType.SELF, // not used
            animation: AnimationType.NONE,
            mpScale: 40,
            childSkill: {
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
    image: IMAGE_SKILL_DARK_MISSILES_RAIN,
    animationType: AnimationType.UNIT_ATTACK,
};

const concentrateThePoisonSkillset = (mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.HIGH_POISON_ENEMY,
            status: EStatusType.POISON,
            value: 0,
            mpScale: mpScale,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.HIGH_POISON_ENEMY,
            status: EStatusType.POISON,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_ATTACK,
            targetType: ETargetType.HIGH_POISON_ENEMY,
            status: EStatusType.POISON,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
        },
    ];
};

export const concentrateThePoisonSkill_3: IHeroSkillSet = {
    id: "concentrateThePoison",
    //name: "Amplify poison",
    //desc: "Apply +[75%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
    name: i18n.skills.level2.concentrateThePoison.name,
    desc: i18n.skills.level2.concentrateThePoison.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    skills: concentrateThePoisonSkillset(75),
    image: IMAGE_SKILL_POISON,
};

export const concentrateThePoisonSkill_2: IHeroSkillSet = {
    id: "concentrateThePoison",
    //name: "Amplify poison",
    //desc: "Apply +[65%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
    name: i18n.skills.level2.concentrateThePoison.name,
    desc: i18n.skills.level2.concentrateThePoison.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    skills: concentrateThePoisonSkillset(65),
    nextLevel: concentrateThePoisonSkill_3,
    image: IMAGE_SKILL_POISON,
};

export const concentrateThePoisonSkill: IHeroSkillSet = {
    id: "concentrateThePoison",
    //name: "Amplify poison",
    //desc: "Apply +[50%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
    name: i18n.skills.level2.concentrateThePoison.name,
    desc: i18n.skills.level2.concentrateThePoison.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    skills: concentrateThePoisonSkillset(50),
    nextLevel: concentrateThePoisonSkill_2,
    image: IMAGE_SKILL_POISON,
};

const poisonHostSkillset = (percent: number): IHeroSkill[] => {
    // Move all poison from enemies to last enemy and debuff him: on death apply 50% of poison to random enemy
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ENEMIES,
            status: EStatusType.POISON,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_MODIFY_AMOUNT,
            targetType: ETargetType.ALL_ENEMIES,
            status: EStatusType.POISON,
            value: -100,
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.LAST_ENEMY,
            status: EStatusType.POISON,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Host",
                timeType: EBuffTimeType.DUEL,
                type: EDebuffType.BATTLE_TRIGGER,
                targetType: ETargetType.LAST_ENEMY,
                value: 1,
                nestedEffects: [
                    {
                        debuffType: EDebuffType.MARK_STATUS_GROW,
                        status: EStatusType.POISON,
                        value: 1,
                        valueType: "number",
                    }
                ],
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Posion boom",
                    type: EAppTriggerType.DEATH,
                    allowCastFromDead: true,
                    skill: [
                        {
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.ANCHOR_TARGET,
                            status: EStatusType.POISON,
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            targetType: ETargetType.RANDOM_ENEMY,
                            status: EStatusType.POISON,
                            value: percent,
                            valueType: "percent",
                            valueFrom: "customNumber",
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const poisonHostSkill_3: IHeroSkillSet = {
    id: "poisonHostSkill",
    name: "Poison host",
    desc: "Move all poison from all\nenemies to last enemy, each\nturn he gets 1 poison and\nwhen he dies, 50% of his\npoison is applied to\nrandom enemy",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: poisonHostSkillset(75),
    image: IMAGE_DRAFT_POISONHOST, //IMAGE_SKILL_TEST,
};

export const poisonHostSkill_2: IHeroSkillSet = {
    id: "poisonHostSkill",
    name: "Poison host",
    desc: "Move all poison from all\nenemies to last enemy, each\nturn he gets 1 poison and\nwhen he dies, 50% of his\npoison is applied to\nrandom enemy",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: poisonHostSkillset(65),
    nextLevel: poisonHostSkill_3,
    image: IMAGE_DRAFT_POISONHOST, //IMAGE_SKILL_TEST,
};

export const poisonHostSkill: IHeroSkillSet = {
    id: "poisonHostSkill",
    name: "Poison host",
    desc: "Move all poison from all\nenemies to last enemy, each\nturn he gets 1 poison and\nwhen he dies, 50% of his\npoison is applied to\nrandom enemy",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: poisonHostSkillset(50),
    nextLevel: poisonHostSkill_2,
    image: IMAGE_DRAFT_POISONHOST, //IMAGE_SKILL_TEST,
};

const hubrisSkillset = (crit: number, atk: number): IHeroSkill[] => {
    // curse highest crit enemy, reducing crit & ba
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Hubris",
                targetType: ETargetType.HIGH_CRIT_ENEMY,
                timeType: EBuffTimeType.DUEL,
                type: EDebuffType.ATTRIBUTE_DECREASE,
                value: crit,
                valueType: "number",
                attribute: "critChance",
                nestedEffects: [
                    {
                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                        attribute: "attack",
                        value: atk,
                        valueType: "number",
                    }
                ]
            }
        }
    ];
};

export const hubrisSkill_3: IHeroSkillSet = {
    id: "hubrisSkill",
    name: "Hubris",
    desc: "Curse highest crit enemy,\nreducing his crit by 15\nand basic attack by 3",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: hubrisSkillset(15,1),
    image: IMAGE_DRAFT_HUBRIS, //IMAGE_SKILL_TEST,
};

export const hubrisSkill_2: IHeroSkillSet = {
    id: "hubrisSkill",
    name: "Hubris",
    desc: "Curse highest crit enemy,\nreducing his crit by 10\nand basic attack by 2",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: hubrisSkillset(10,1),
    nextLevel: hubrisSkill_3,
    image: IMAGE_DRAFT_HUBRIS, //IMAGE_SKILL_TEST,
};

export const hubrisSkill: IHeroSkillSet = {
    id: "hubrisSkill",
    name: "Hubris",
    desc: "Curse highest crit enemy,\nreducing his crit by 5\nand basic attack by 1",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK],
    type: ESkillSetType.DEBUFF,
    skills: hubrisSkillset(5,1),
    nextLevel: hubrisSkill_2,
    image: IMAGE_DRAFT_HUBRIS, //IMAGE_SKILL_TEST,
};

export const darkSkills: THeroSkills = [poisonRandom, magicAttackX3];

export const darkSkills_2: THeroSkills = darkSkills.concat([debuffBaNextBaAll, concentrateThePoisonSkill, removeBuffSkill, toxicTuneSkill, venomHeartSkill, poisonHostSkill, hubrisSkill]);

export const darkSkills_3: THeroSkills = darkSkills_2.concat([stealPPorMPSkill, magicRain]);
