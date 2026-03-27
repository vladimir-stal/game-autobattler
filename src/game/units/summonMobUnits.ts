import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_heal } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin, itemCoin2, itemSpiritSpear, spiritArmor } from "../mobItemConsts";

//////////// SPIRIT WARRIOR //////////////////////////

export const warriorSummonMob_5: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.KNIGHT,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.WARRIOR],
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
    mobItems: [
        { item: itemCoin2, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};

export const warriorSummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.ORDER,
    mobHeroClasses: [EHeroClass.ORDER],
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
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};

//////////// FIREFLY //////////////////////////

export const fireflySummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.SUMMON,
    mobHeroClasses: [EHeroClass.SUMMON],
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
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: itemCoin2, probability: 12 }, // 10% ~ 10/0.8
        { item: basic_heal, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};
