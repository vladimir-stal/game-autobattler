import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_pants, basic_ring_regen } from "../commonItemConsts";
import { hp_amulet } from "../commonItemConsts2";
import { i18n } from "../consts";
import { itemCoin, itemCoin2 } from "../mobItemConsts";
import { noBasicAttackSkill } from "../skills/commonSkillConsts";
import { bigWolfSummonSkill } from "../skills/mobs/bigWolfMobSkills";
import { regularWolfSkill } from "../skills/mobs/wolfMobSkills";
import { mobNoSkill } from "../skills/mobSkills";
import { STRONG_WOLF_ID, WOLF_ID } from "./mobUnitConsts";

export const wolfUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.WILD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 8,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WOLF,
    id: WOLF_ID,
    skills: [mobNoSkill, regularWolfSkill, noBasicAttackSkill],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: basic_ring_regen, probability: 15 }, // 15%
        { item: basic_pants, probability: 17 }, // 15% ~ 15/0.85
        { item: itemCoin, probability: 14 }, // 10% ~ 10/(0.85*0.83)
        // 100*0.85*0.83*0.86 = 60% not to get anything
        { skill: regularWolfSkill, probability: 16 }, // ~10%
    ],
};

export const strongWolfUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.WILD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.STRONGWOLF,
    id: STRONG_WOLF_ID,
    skills: [noBasicAttackSkill, regularWolfSkill, mobNoSkill, bigWolfSummonSkill],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: basic_ring_regen, probability: 15 }, // 15%
        { item: hp_amulet, probability: 17 }, // 15% ~ 15/0.85
        { item: itemCoin2, probability: 14 }, // 10% ~ 10/(0.85*0.83)
        // 100*0.85*0.83*0.86 = 60% not to get anything
        //{ skill: bigWolfSummonSkill, probability: 8 }, // ~5%
        { skill: regularWolfSkill, probability: 9 }, // ~5%
    ],
};
