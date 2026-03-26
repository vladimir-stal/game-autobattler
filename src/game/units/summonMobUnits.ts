import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { i18n } from "../consts";
import { itemCoin } from "../mobItemConsts";

//////////// SPIRIT WARRIOR //////////////////////////

export const warriorSummonMob_5: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 12,
    basicAttackTimes: 1,
    basicMaxHp: 30,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "WARRIORSUMMON", // change to diff from summoned unit (+add record in imageUtils)
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [{ item: itemCoin, probability: 5 }],
};

export const warriorSummonMob: IUnit = {
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
    id: "WARRIORSUMMON", // change to diff from summoned unit (+add record in imageUtils)
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [{ item: itemCoin, probability: 5 }],
};

//////////// FIREFLY //////////////////////////

export const fireflySummonMob: IUnit = {
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
    name: i18n.units.FIREFLY,
    id: "FIREFLYSUMMON", // change to diff from summoned unit (+add record in imageUtils)
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};
