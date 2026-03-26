import { i18n as i18n_eng } from "../i18n/en";
import { i18n as i18n_ru } from "../i18n/ru";
import { ETargetType, EBuffTimeType, EBuffType, EDebuffType, EHeroAttackType, EHeroClass, EUnitType, IUnit, EHeroClassType } from "../types";
import { LANG } from "./consts";
import { phycisalAttackSkill } from "./skills/commonSkillConsts";

//  BASIC HEROES  //////////////////////////////////////////////////////////////

const i18n = LANG === "eng" ? i18n_eng : i18n_ru;

// BARD
export const bardHero: IUnit = {
    heroClass: EHeroClass.BARD,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 11,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.BARD,
    id: "BARD",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// DARK
export const darkHero: IUnit = {
    heroClass: EHeroClass.DARK,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 4,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.DARK,
    id: "DARK",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MAGIC
export const magicHero: IUnit = {
    heroClass: EHeroClass.MAGIC,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 8,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.MAGIC,
    id: "MAGIC",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MASTER
export const masterHero: IUnit = {
    heroClass: EHeroClass.MASTER,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.MASTER,
    id: "MASTER",
    skills: [phycisalAttackSkill],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MYSTIC
export const summonHero: IUnit = {
    heroClass: EHeroClass.SUMMON,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 8,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.SUMMON,
    id: "SUMMON",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ORDER
export const orderHero: IUnit = {
    heroClass: EHeroClass.ORDER,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 2,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.ORDER,
    id: "ORDER",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// PRIEST
export const priestHero: IUnit = {
    heroClass: EHeroClass.PRIEST,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.PRIEST,
    id: "PRIEST",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WARRIOR
export const warriorHero: IUnit = {
    heroClass: EHeroClass.WARRIOR,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicMaxHp: 9,
    basicHpRegen: 0,
    basicArmor: 1,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.WARRIOR,
    id: "WARRIOR",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WILD
export const wildHero: IUnit = {
    heroClass: EHeroClass.WILD,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.BASIC,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.basic.WILD,
    id: "WILD",
    skills: [],
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};
