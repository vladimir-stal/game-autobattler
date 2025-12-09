import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, EUnitType, IHeroSkillSet, IUnit, THeroSkills } from "../../types";

// SUMMON UNITS

// FIREFLY SUMMON UNIT

export const fireflySummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 3,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Firefly",
    id: "FIREFLY_SUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const fireflySummon_2: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 4,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Firefly(2)",
    id: "FIREFLY_SUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const fireflySummon_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 6,
    basicAttackTimes: 1,
    basicMaxHp: 6,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Firefly(3)",
    id: "FIREFLY_SUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

// SPARK SUMMON UNIT

export const sparkSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Spark",
    id: "SPARK_SUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const sparkSummon_2: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Spark",
    id: "SPARK_SUMMON",
    skills: [],
    items: [],
    level: 2,
    exp: 0,
};

export const sparkSummon_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 6,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Spark",
    id: "SPARK_SUMMON",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
};

// FIREFLY SUMMON SKILL

export const fireflySummonSkill_3: IHeroSkillSet = {
    id: "fireflySummon",
    name: "Firefly Summon(3)",
    desc: "Summon magic creature [6,6]",
    level: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: fireflySummon_3,
        },
    ],
};

export const fireflySummonSkill_2: IHeroSkillSet = {
    id: "fireflySummon",
    name: "Firefly Summon(2)",
    desc: "Summon magic creature [3,4]",
    level: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: fireflySummon_2,
        },
    ],
    nextLevel: fireflySummonSkill_3,
};

export const fireflySummonSkill: IHeroSkillSet = {
    id: "fireflySummon",
    name: "Firefly Summon",
    desc: "Summon magic creature [2,3]",
    level: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: fireflySummon,
        },
    ],
    nextLevel: fireflySummonSkill_2,
};

// SPARK SUMMON SKILL

export const sparkSummonSkill_3: IHeroSkillSet = {
    id: "sparkSummon",
    name: "Spark Summon(3)",
    desc: "Summon magic spark [7,1]",
    level: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: sparkSummon_3,
        },
    ],
};

export const sparkSummonSkill_2: IHeroSkillSet = {
    id: "sparkSummon",
    name: "Spark Summon(2)",
    desc: "Summon magic spark [4,1]",
    level: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: sparkSummon_2,
        },
    ],
    nextLevel: sparkSummonSkill_3,
};

export const sparkSummonSkill: IHeroSkillSet = {
    id: "sparkSummon",
    name: "Spark Summon",
    desc: "Summon magic spark [3,1]",
    level: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: sparkSummon,
        },
    ],
    nextLevel: sparkSummonSkill_2,
};

// INCREASE CURRENT SUMMON BA SKILL

export const incrSummonBa_3: IHeroSkillSet = {
    id: "incrSummonBa",
    name: "Increase summon attack(3)",
    desc: "Increase current summon basic attack damage [1]+[MP]",
    level: 4,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 1,
            valueType: "number",
            mpScale: 100,
        },
    ],
};

export const incrSummonBa_2: IHeroSkillSet = {
    id: "incrSummonBa",
    name: "Increase summon attack(2)",
    desc: "Increase current summon basic attack damage [1]+[MP*70%]",
    level: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 1,
            valueType: "number",
            mpScale: 70,
        },
    ],
    nextLevel: incrSummonBa_3,
};

export const incrSummonBa: IHeroSkillSet = {
    id: "incrSummonBa",
    name: "Increase summon attack",
    desc: "Increase current summon basic attack damage [1]+[MP*50%]",
    level: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 1,
            valueType: "number",
            mpScale: 50,
            targetType: ETargetType.SUMMON_CURRENT,
        },
    ],
    nextLevel: incrSummonBa_2,
};

//

export const summonSkills: THeroSkills = [fireflySummonSkill, sparkSummonSkill];

export const summonSkills_2: THeroSkills = [incrSummonBa, fireflySummonSkill, sparkSummonSkill];
