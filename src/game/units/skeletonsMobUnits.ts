import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { dagger1, staff1, sword1, totem1 } from "../basicWeaponItemConsts";
import { basic_boots, basic_exp_bag, basic_hat, basic_pants, basic_ring_damage } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin } from "../mobItemConsts";
import { chainToNextSkill } from "../skills/commonSkillConsts";
import { skeletonArmorSelfAndLow, skeletonPoisonedFlames, skeletonUnholyLeap } from "../skills/mobs/skeletonMobSkills";
import { mobNoSkill } from "../skills/mobSkills";

export const skeletonUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.DARK, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.SKELETON,
    id: "SKELETON",
    skills: [mobNoSkill, skeletonUnholyLeap, chainToNextSkill],
    // cast no skill 1st round, cast unique skill 2nd round, then fast forward to make skill rotation 3 rounds instead of 4
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 10 }, // 10%
        { item: basic_hat, probability: 11 }, // 10% ~ 10/0.9
        { item: basic_pants, probability: 12 }, // 10% ~ 10/0.9/0.89
        { item: basic_boots, probability: 14 }, // 10% ~ 10/0.9/0.89/0.88
        // nothing ~ 100*0.90*0.89*0.88*0.86 = 60%
        { skill: skeletonUnholyLeap, probability: 16 },
    ],
};

export const skeletonWarriorUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.DARK, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 7,
    basicAttackTimes: 1,
    basicMaxHp: 16,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.SKELETONWARRIOR,
    id: "SKELETONWARRIOR",
    skills: [chainToNextSkill, skeletonArmorSelfAndLow],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 10 }, // 10%
        { item: sword1, probability: 11 }, // 10% ~ 10/0.9
        { item: totem1, probability: 12 }, // 10% ~ 10/0.9/0.89
        { item: basic_ring_damage, probability: 14 }, // 10% ~ 10/0.9/0.89/0.88
        // nothing ~ 100*0.90*0.89*0.88*0.86 = 60%
        { skill: skeletonArmorSelfAndLow, probability: 16 }, // ~10%
    ],
};

export const skeletonMageUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.DARK, EHeroClass.MOB],
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.SKELETONMAGE,
    id: "SKELETONMAGE",
    skills: [mobNoSkill, skeletonPoisonedFlames, chainToNextSkill],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 10 }, // 10%
        { item: staff1, probability: 11 }, // 10% ~ 10/0.9
        { item: dagger1, probability: 12 }, // 10% ~ 10/0.9/0.89
        { item: basic_exp_bag, probability: 14 }, // 10% ~ 10/0.9/0.89/0.88
        // nothing ~ 100*0.90*0.89*0.88*0.86 = 60%
        { skill: skeletonPoisonedFlames, probability: 16 }, // ~10%
    ],
};
