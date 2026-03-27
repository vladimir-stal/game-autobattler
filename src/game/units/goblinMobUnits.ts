import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, EItemAfterDuelBonusType } from "../../types";
import { i18n } from "../consts";
import { itemCoin, itemCoin2, itemGoblinBoneDagger, itemGoblinSilverCoin } from "../mobItemConsts";
import { goblinApplyShock, goblinShamanHpRegIncr } from "../skills/mobSkills";

export const weakGoblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MASTER,
    mobHeroClasses: [EHeroClass.MASTER],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WEAKGOBLIN,
    id: "WEAKGOBLIN",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [{ item: itemCoin, probability: 40 }],
};

export const goblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.GLADIATOR,
    mobHeroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 8,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.GOBLIN,
    id: "GOBLIN",
    skills: [goblinApplyShock],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 },
        { item: itemGoblinBoneDagger, probability: 12 },
        { item: itemCoin2, probability: 14 },
        // 100*0.80*0.88*0.86 = 60% not to get anything
    ],
};

export const goblinShamanUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MAGIC,
    mobHeroClasses: [EHeroClass.MAGIC],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 14,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.GOBLINSHAMAN,
    id: "GOBLINSHAMAN",
    skills: [goblinShamanHpRegIncr],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 15 },
        { item: itemGoblinSilverCoin, probability: 17 },
        { item: itemGoblinBoneDagger, probability: 14 },
        // 100*0.85*0.83*0.86 = 60% not to get anything
    ],
};

export const goldGoblin1Unit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.BARD,
    mobHeroClasses: [EHeroClass.BARD],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    //name: "Goblin trader",
    name: i18n.units.GOLDGOBLIN1,
    id: "GOLDGOBLIN1",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 1 }],
    mobItems: [
        { item: itemCoin, probability: 15 }, // 15%
        { item: itemGoblinSilverCoin, probability: 17 }, // 15% ~ 15/0.85
        { item: itemGoblinBoneDagger, probability: 14 }, // 10% ~ 10/(0.85*0.83)
        // 100*0.85*0.83*0.86 = 60% not to get anything
    ],
};
