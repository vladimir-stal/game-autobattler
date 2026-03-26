import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { staff1, sword1 } from "../basicWeaponItemConsts";
import { basic_boots, basic_hat, basic_pants } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin } from "../mobItemConsts";

export const skeletonUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
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
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 5 },
        { item: basic_hat, probability: 5 },
        { item: basic_pants, probability: 5 },
        { item: basic_boots, probability: 5 },
    ],
};

export const skeletonWarriorUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
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
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 5 },
        { item: sword1, probability: 5 },
    ],
};

export const skeletonMageUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MAGIC,
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
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 5 },
        { item: staff1, probability: 5 },
    ],
};
