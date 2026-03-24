import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, IMobRewardType, EItemAfterDuelBonusType, IMobsVariants } from "../types";
import { basic_boots, basic_hat, basic_jacket, basic_pants } from "./commonItemConsts";
import { i18n } from "./consts";
import { itemCoin, itemGoblinBoneDagger, itemGoblinSilverCoin, itemPeasantPitchfork, itemSpiritSpear, regenMantle } from "./mobItemConsts";
import { goblinApplyShock, goblinShamanHpRegIncr } from "./skills/mobSkills";
import { warriorSummon } from "./skills/summonSkillConsts2";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

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
        { item: itemCoin, probability: 20 },
        { item: itemPeasantPitchfork, probability: 20 },
    ],
};

export const weakGoblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
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
};

export const goblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
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
};

export const goblinShamanUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WILD,
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
};

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
    //name: "Skeleton",
    name: i18n.units.SKELETON,
    id: "SKELETON",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
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
    //name: "Skeleton warrior",
    name: i18n.units.SKELETONWARRIOR,
    id: "SKELETONWARRIOR",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
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
    //name: "Skeleton Mage",
    name: i18n.units.SKELETONMAGE,
    id: "SKELETONMAGE",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
};

export const soldierUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    //name: "Soldier",
    name: i18n.units.SOLDIER,
    id: "SOLDIER",
    skills: [],
    items: [],
    level: 5,
    exp: 0,
};

export const goldGoblin1Unit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
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
};

//
//
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//

export const mobsLvl1: IMobsVariants[] = [
    {
        name: "Peasants",
        units: [peasantUnit, peasantUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            //{ type: IMobRewardType.ITEM, item: itemCoin, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 1 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 1 },
        ],
    },
    {
        name: "Weak goblins",
        units: [weakGoblinUnit, weakGoblinUnit, null, null],
        rewards: [
            //{ type: IMobRewardType.ITEM, item: itemCoin, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 1 },
        ],
    },
    {
        name: "Spirit warriror",
        units: [warriorSummon, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 1 },
            //{ type: IMobRewardType.ITEM, item: itemCoin, exp: 1 },
        ],
    },
];
export const mobsLvl2: IMobsVariants[] = [
    {
        name: "Goblins",
        units: [goblinUnit, weakGoblinUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 2 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 2 },
        ],
    },
    {
        name: "Goblin shaman",
        units: [goblinShamanUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 2 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 2 },
        ],
    },
    {
        name: "Skeletons(2)",
        units: [skeletonUnit, null, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 2 },
        ],
    },
];
export const mobsLvl3: IMobsVariants[] = [
    {
        name: "Skeletons(3)",
        units: [skeletonUnit, skeletonUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 3 },
        ],
    },
    {
        name: "Goblin shaman",
        units: [goblinShamanUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 3 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 3 },
        ],
    },
    {
        name: "Goblins",
        units: [weakGoblinUnit, goblinUnit, goblinUnit, goblinUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 1 },
            { type: IMobRewardType.UNIT, unit: goblinUnit, exp: 1 },
        ],
    },
];

export const mobsLvl4: IMobsVariants[] = [
    {
        name: "Skeletons(4)",
        units: [skeletonWarriorUnit, skeletonUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 4 },
        ],
    },
    {
        name: "Goblins(4)",
        units: [goblinShamanUnit, goblinUnit, goblinUnit, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 4 },
            { type: IMobRewardType.UNIT, unit: goblinUnit, exp: 4 },
        ],
    },
];
export const mobsLvl5: IMobsVariants[] = [
    {
        name: "Skeletons(5)",
        units: [null, skeletonWarriorUnit, skeletonMageUnit, null],
        rewards: [
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 4 },
        ],
    },
];
export const mobsLvl6: IMobsVariants[] = [
    {
        name: "Skeletonwarrior, Skeleton, Skeleton mage",
        units: [null, skeletonWarriorUnit, skeletonUnit, skeletonMageUnit],
        rewards: [{ type: IMobRewardType.ITEM, item: basic_hat, exp: 3 }],
    },
];

export const unitsLvl1 = [peasantUnit];
export const unitsLvl2 = [weakGoblinUnit];
export const unitsLvl3 = [goblinUnit, goldGoblin1Unit];
export const unitsLvl4 = [skeletonUnit, skeletonWarriorUnit];
export const unitsLvl5 = [skeletonWarriorUnit, goldGoblin1Unit];
