import {
    EBuffTimeType,
    EBuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_SUMMON_FIREFLY, IMAGE_SKILL_SUMMON_SPIRIT, IMAGE_SKILL_TEST } from "../utils/imageLoadUtil";
import { skillsetSummon } from "../utils/skillUtils";

// SUMMON UNITS

// FIREFLY SUMMON UNIT

export const fireflySummon: IUnit = {
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
    name: i18n.units.FIREFLY,
    id: "FIREFLYSUMMON",
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
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY + "(2)",
    id: "FIREFLYSUMMON",
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
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY + "(3)",
    id: "FIREFLYSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

// WARRIOR SUMMON UNIT

export const warriorSummon: IUnit = {
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
    name: i18n.units.WARRIORSUMMON,
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const warriorSummon_2: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON + "(2)",
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 2,
    exp: 0,
};

export const warriorSummon_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 6,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON + "(3)",
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
};

// FIREFLY SUMMON SKILL

export const fireflySummonSkill_3: IHeroSkillSet = {
    id: "fireflySummon",
    //name: "Firefly Summon(3)",
    //desc: "Summon magic creature [6,6]",
    name: i18n.skills.basic.fireflySummon.name + "(3)",
    desc: i18n.skills.basic.fireflySummon.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: skillsetSummon(fireflySummon_3,4,35,35,0,1), // summon 8/1,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
};

export const fireflySummonSkill_2: IHeroSkillSet = {
    id: "fireflySummon",
    //name: "Firefly Summon(2)",
    //desc: "Summon magic creature [3,4]",
    name: i18n.skills.basic.fireflySummon.name + "(2)",
    desc: i18n.skills.basic.fireflySummon.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: skillsetSummon(fireflySummon_2,2,35,35,0,1), // summon 5/1,
    nextLevel: fireflySummonSkill_3,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
};

export const fireflySummonSkill: IHeroSkillSet = {
    id: "fireflySummon",
    //name: "Firefly Summon",
    // desc: "Summon magic creature [2,3]",
    name: i18n.skills.basic.fireflySummon.name,
    desc: i18n.skills.basic.fireflySummon.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: skillsetSummon(fireflySummon,1,35,35,0,1), // summon 3/1,
    nextLevel: fireflySummonSkill_2,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
};

// WAAAaahRIOR SUMMON SKILL

export const warriorSummonSkill_3: IHeroSkillSet = {
    id: "warriorSummon",
    //name: "Spark Summon(3)",
    //desc: "Summon magic spark [7,1]",
    name: i18n.skills.basic.sparkSummon.name + "(3)",
    desc: i18n.skills.basic.sparkSummon.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills:skillsetSummon(warriorSummon_3,2,35,20,3,3), // summon 6/10
    image: IMAGE_SKILL_SUMMON_SPIRIT,
};

export const warriorSummonSkill_2: IHeroSkillSet = {
    id: "warriorSummon",
    //name: "Spark Summon(2)",
    //desc: "Summon magic spark [4,1]",
    name: i18n.skills.basic.sparkSummon.name + "(2)",
    desc: i18n.skills.basic.sparkSummon.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: skillsetSummon(warriorSummon_2,1,35,20,2,2), // summon 3/5
    nextLevel: warriorSummonSkill_3,
    image: IMAGE_SKILL_SUMMON_SPIRIT,
};

export const warriorSummonSkill: IHeroSkillSet = {
    id: "warriorSummon",
    name: i18n.skills.basic.sparkSummon.name,
    desc: i18n.skills.basic.sparkSummon.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    skills: skillsetSummon(warriorSummon,1,35,20,1,1),// summon 2/3
    nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_SUMMON_SPIRIT,
};

// INCREASE CURRENT SUMMON BA SKILL

export const incrSummonBa_3: IHeroSkillSet = {
    id: "incrSummonBa",
    name: "Increase summon attack(3)",
    desc: "Increase current summon basic attack damage [1]+[MP]",
    level: 3,
    priceLevel: 2,
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
    level: 2,
    priceLevel: 2,
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
    level: 1,
    priceLevel: 2,
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

//
// BUFF SUMMON CRIT CHANCE
//

//TODO: remove and use from commonSkill3Consts

export const buffSummonCritSkill_2: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Crit summon(2)",
    desc: "Buff summon crit\nchance [5]+[30%xMP]",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Crit",
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                value: 5,
                valueType: "number",
                mpScale: 30,
            },
        },
    ],
    //nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_TEST,
};

export const buffSummonCritSkill: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Crit summon",
    desc: "Buff summon crit\nchance [5]+[20%xMP]",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Crit",
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                value: 5,
                valueType: "number",
                mpScale: 20,
            },
        },
    ],
    nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_TEST,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const summonSkills: THeroSkills = [fireflySummonSkill, warriorSummonSkill];

export const summonSkills_2: THeroSkills = summonSkills.concat([incrSummonBa]);

export const summonSkills_3: THeroSkills = summonSkills_2.concat([buffSummonCritSkill]); // buffSummonCritSkill
