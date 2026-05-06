import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { i18n } from "../consts";
import { regularWolfSkill } from "../skills/mobs/wolfMobSkills";
import { mobNoSkill } from "../skills/mobSkills";
import { WOLF_ID } from "./mobUnitConsts";

export const wolfUnitSmol: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.WILD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 4,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WOLF,
    id: WOLF_ID,
    skills: [mobNoSkill, regularWolfSkill],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [],
};
