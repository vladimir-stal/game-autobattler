import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, IMobRewardType, EItemAfterDuelBonusType, IMobsVariants } from "../../types";
import { itemCoin, itemPeasantPitchfork, itemPeasantPitchfork_2 } from "../mobItemConsts";

export const peasantUnit_4: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.BARBARIAN,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 10,
    basicAttackTimes: 1,
    basicMaxHp: 30,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Peasant",
    id: "PEASANT",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemPeasantPitchfork, probability: 20 }, // 20%
        { item: itemCoin, probability: 12 }, // 10% ~ 10/0.8
        { item: itemPeasantPitchfork_2, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
    ],
};

export const peasantUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 3,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Peasant",
    id: "PEASANT",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemPeasantPitchfork, probability: 25 },
        { item: itemCoin, probability: 20 }, // 15% ~ 15/(100-25)
        // nothing = 100*0.75*0.80
    ],
};
