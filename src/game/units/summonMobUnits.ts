import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_heal } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin, itemCoin2, itemSpiritSpear, spiritArmor } from "../mobItemConsts";
import { noBasicAttackSkill as chainToNextSkill, noBasicAttackSkill } from "../skills/commonSkillConsts";
import { fireflyConfusingMistSkill, fireflyUnfairExchange, infernoFlyPassive } from "../skills/mobs/fireflyMobSkills";
import { spiritShieldRadiate, spiritTeamFlurry, spiritTeamRevenge, spiritWarriorPassive } from "../skills/mobs/spiritWarriorMobSkills";
import { mobNoSkill } from "../skills/mobSkills";

//////////// SPIRIT WARRIOR //////////////////////////

export const warriorSummonMob_5: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.HIGH_RADIATE_ENEMY,
    basicAttack: 12,
    basicAttackTimes: 1,
    basicMaxHp: 30,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 5,
    name: i18n.units.WARRIORSUMMON,
    id: "SPIRITWARRIOR",
    skills: [chainToNextSkill, spiritTeamRevenge, mobNoSkill, spiritTeamFlurry],
    items: [],
    level: 5,
    exp: 0,
    passiveSkill: spiritWarriorPassive, // regain up to (12/3 + 5)= 9 armor (3/turn)
    mobItems: [
        { item: itemCoin2, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        { skill: spiritTeamRevenge, probability: 16 },
    ],
};

export const warriorSummonMob_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.HIGH_RADIATE_ENEMY,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 14,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "SPIRITWARRIOR",
    skills: [chainToNextSkill, spiritTeamFlurry],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        { skill: spiritTeamFlurry, probability: 16 },
    ],
};

export const warriorSummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.HIGH_RADIATE_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "SPIRITWARRIOR",
    skills: [mobNoSkill, spiritTeamFlurry, chainToNextSkill],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        { skill: spiritTeamFlurry, probability: 16 },
    ],
};
// spiritTeamRevenge - like Riposte but after attack and apply Bleed
// spiritTeamFlurry - make barrage of physical skill attacks
// spiritShieldRadiate - gain armor, enemy get Radiate

//////////// SPIRIT WARRIOR WITH SHIELD //////////////////////////

export const shieldWarriorsSummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.HIGH_RADIATE_ENEMY,
    basicAttack: 0,
    basicAttackTimes: 1,
    basicMaxHp: 15, // was 20
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 9,
    name: i18n.units.WARRIORSUMMON,
    id: "SPIRITSHIELDWARRIOR",
    skills: [chainToNextSkill, spiritShieldRadiate],
    passiveSkill: spiritWarriorPassive, // regain up to (0 + 9)= 9 armor (3/turn)
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: spiritArmor, probability: 25 }, // 20% ~ 20/0.8
        // nothing = 100*0.80*0.75
        { skill: spiritShieldRadiate, probability: 16 },
    ],
};

//////////// FIREFLY //////////////////////////

export const fireflySummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 35,
    basicMagicPower: 5,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLY",
    skills: [mobNoSkill, fireflyConfusingMistSkill, chainToNextSkill],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: itemCoin2, probability: 12 }, // 10% ~ 10/0.8
        { item: basic_heal, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        { skill: fireflyConfusingMistSkill, probability: 16 },
    ],
};

export const fireflySummonMob_6: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.MOB],
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_TWO_ENEMIES,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 2,
    basicHpRegen: 0,
    basicArmor: 13,
    basicCritChance: 0,
    basicEvasionChance: 100,
    basicMagicPower: 5,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLY",
    skills: [mobNoSkill, fireflyUnfairExchange, chainToNextSkill],
    items: [],
    level: 6,
    exp: 0,
    passiveSkill: infernoFlyPassive,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: itemCoin2, probability: 12 }, // 10% ~ 10/0.8
        { item: basic_heal, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        //{ skill: fireflyUnfairExchange, probability: 16 },
    ],
};
