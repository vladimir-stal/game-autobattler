import { EBuffTimeType, EDebuffType, EHeroAttackType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// DEBUFF NEXT BA

export const debuffBaNextBaAll_3: IHeroSkillSet = {
    id: "debuffBaNextBa",
    name: "-BA Debuff all(3)",
    desc: "Debuff next basic attack [1]+[MP] all enemies",
    level: 5,
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
    level: 4,
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
    level: 3,
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
    name: "Posion random(3)",
    desc: "Poison [5] random enemy",
    level: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 5, //TODO MP: use unit MP
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
};

export const poisonRandom_2: IHeroSkillSet = {
    id: "poisonRandom",
    name: "Posion random(2)",
    desc: "Poison [4] random enemy",
    level: 2,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 5, //TODO MP: use unit MP
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    nextLevel: poisonRandom_3,
};

export const poisonRandom: IHeroSkillSet = {
    id: "poisonRandom",
    name: "Posion random",
    desc: "Poison [3] random enemy",
    level: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 3, //TODO MP: use unit MP
            targetType: ETargetType.RANDOM_ENEMY,
        },
    ],
    nextLevel: poisonRandom_2,
};

// MAGIC ATTACK X3

export const magicAttackX3_3: IHeroSkillSet = {
    id: "magicAttackX3",
    name: "Magic Attack x3(3)",
    desc: "Deal [4] magic damage to random enemy 3 times",
    level: 3,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 4, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
};

export const magicAttackX3_2: IHeroSkillSet = {
    id: "magicAttackX3",
    name: "Magic Attack x3(2)",
    desc: "Deal [3] magic damage to random enemy 3 times",
    level: 2,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 3, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttackX3_3,
};

export const magicAttackX3: IHeroSkillSet = {
    id: "magicAttackX3",
    name: "Magic Attack x3",
    desc: "Deal [2] magic damage to random enemy 3 times",
    level: 1,
    heroClasses: [EHeroClass.DARK],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 2, //TODO MP: add MP to attack
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttackX3_2,
};

export const darkSkills: THeroSkills = [poisonRandom, magicAttackX3];

export const darkSkills_2: THeroSkills = [debuffBaNextBaAll, poisonRandom, magicAttackX3];
