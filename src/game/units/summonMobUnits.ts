import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_heal } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin, itemCoin2, itemSpiritSpear, spiritArmor } from "../mobItemConsts";
import { mobNoSkill, fireflySelfPoison } from "../skills/mobSkills";
import { attrArmorSelf } from "../skills/orderSkillConsts";

//////////// SPIRIT WARRIOR //////////////////////////

export const warriorSummonMob_5: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.WARRIOR, EHeroClass.MOB],
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
    id: "SPIRITWARRIOR",
    skills: [],
    items: [],
    level: 5,
    exp: 0,
    mobItems: [
        { item: itemCoin2, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};

export const warriorSummonMob_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
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
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        { item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};

export const warriorSummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
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

//////////// SPIRIT WARRIOR WITH SHIELD //////////////////////////

export const shieldWarriorsSummonMob: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 0,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "SPIRITSHIELDWARRIOR",
    skills: [attrArmorSelf, attrArmorSelf, attrArmorSelf, attrArmorSelf],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        //{ item: spiritArmor, probability: 12 }, // 10% ~ 10/0.8
        //{ item: itemSpiritSpear, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
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
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLY",
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

export const fireflySummonMob_6: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.SUMMON, EHeroClass.WILD, EHeroClass.MOB],
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_TWO_ENEMIES,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 2,
    basicHpRegen: 0,
    basicArmor: 13,
    basicCritChance: 0,
    basicEvasionChance: 100,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLY",
    skills: [mobNoSkill, mobNoSkill, mobNoSkill, fireflySelfPoison],
    items: [],
    level: 6,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 }, // 20%
        { item: itemCoin2, probability: 12 }, // 10% ~ 10/0.8
        { item: basic_heal, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};
