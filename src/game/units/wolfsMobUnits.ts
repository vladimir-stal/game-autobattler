import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_pants, basic_ring_regen } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin } from "../mobItemConsts";

export const wolfUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 6,
    basicAttackTimes: 1,
    basicMaxHp: 8,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WOLF,
    id: "WOLF",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 5 },
        { item: basic_pants, probability: 5 },
        { item: basic_ring_regen, probability: 5 },
    ],
};

export const strongWolfUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 10,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.STRONGWOLF,
    id: "STRONGWOLF",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 10 },
        { item: basic_pants, probability: 5 },
        { item: basic_ring_regen, probability: 5 },
    ],
};
