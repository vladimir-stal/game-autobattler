import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType } from "../../types";
import { basic_boots, basic_hat, basic_hat_2, basic_pants, basic_pants_2 } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin, itemCoin2 } from "../mobItemConsts";
import { noBasicAttackSkill } from "../skills/commonSkillConsts";
import { mobNoSkill, pirateCallTheCannons, pirateDeadmansCurse, pirateDragNDrown } from "../skills/mobSkills";

export const pirate1Unit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.MASTER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.PIRATE_1,
    id: "PIRATE1",
    skills: [mobNoSkill,pirateDragNDrown,noBasicAttackSkill], 
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
            { item: itemCoin, probability: 10 }, // 10%
            { item: basic_hat, probability: 11 }, // 10% ~ 10/0.9
            { item: basic_pants, probability: 12 }, // 10% ~ 10/0.9/0.89
            { item: basic_boots, probability: 14 }, // 10% ~ 10/0.9/0.89/0.88
            // nothing ~ 100*0.90*0.89*0.88*0.86 = 60%
            { skill: pirateDragNDrown, probability: 16 }
    ],
};
// drag and drown
//  ~ debuff -atk -pp -mp

export const pirate2Unit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.MASTER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.PIRATE_2,
    id: "PIRATE2",
    skills: [noBasicAttackSkill,pirateCallTheCannons,mobNoSkill,pirateDeadmansCurse],
    items: [],
    level: 4,
    exp: 0,
    mobItems: [
            { item: itemCoin2, probability: 10 }, // 10%
            { item: basic_hat_2, probability: 11 }, // 10% ~ 10/0.9
            { item: basic_pants_2, probability: 12 }, // 10% ~ 10/0.9/0.89
            { skill: pirateCallTheCannons, probability: 14 }, // 10% ~ 10/0.9/0.89/0.88
            // nothing ~ 100*0.90*0.89*0.88*0.86 = 60%
            { skill: pirateDeadmansCurse, probability: 16 }
    ],
};

// call the cannons
//   AoE physical, bleed + fire
// deadmans curse
//   per buffs number -> apply debuff