import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, IMobRewardType, EItemAfterDuelBonusType, IMobsVariants } from "../types";
import { dagger1, shield1, staff1, wand1 } from "./basicWeaponItemConsts";
import { basic_boots, basic_hat, basic_jacket, basic_pants, basic_ring_damage, basic_ring_regen } from "./commonItemConsts";
import { armor_amulet, hp_amulet } from "./commonItemConsts2";

import {
    itemCoin,
    itemGoblinBoneDagger,
    itemGoblinGoldCoin,
    itemGoblinSilverCoin,
    itemPeasantPitchfork,
    itemSpiritSpear,
    regenMantle,
    spiritArmor,
} from "./mobItemConsts";
import { peasantUnit, peasantUnit_4 } from "./units/mobUnitConsts";
import { warriorSummon, warriorSummon_3 } from "./skills/summonSkillConsts2";
import { goblinShamanUnit, goblinUnit, goldGoblin1Unit, weakGoblinUnit } from "./units/goblinMobUnits";
import { fireflySummonMob, warriorSummonMob, warriorSummonMob_5 } from "./units/summonMobUnits";
import { skeletonMageUnit, skeletonUnit, skeletonWarriorUnit } from "./units/skeletonsMobUnits";
import { strongWolfUnit, wolfUnit } from "./units/wolfsMobUnits";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

// export const soldierUnit: IUnit = {
//     unitType: EUnitType.UNIT,
//     heroClass: EHeroClass.WARRIOR,
//     attackType: EHeroAttackType.PHYSICAL,
//     attackTargetType: ETargetType.FIRST_ENEMY,
//     basicAttack: 8,
//     basicAttackTimes: 1,
//     basicMaxHp: 10,
//     basicHpRegen: 0,
//     basicArmor: 0,
//     basicCritChance: 0,
//     basicEvasionChance: 0,
//     basicMagicPower: 0,
//     basicPhysicalPower: 0,
//     //name: "Soldier",
//     name: i18n.units.SOLDIER,
//     id: "SOLDIER",
//     skills: [],
//     items: [],
//     level: 5,
//     exp: 0,
// };

//
//
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//

// TODO: add system percentage for reward to appear

export const mobsLvl1: IMobsVariants[] = [
    {
        name: "Peasants",
        units: [peasantUnit, peasantUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 1 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 1 },
        ],
    },
    {
        name: "Weak goblins",
        units: [weakGoblinUnit, weakGoblinUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 1 },
        ],
    },
    {
        name: "Spirit warriror",
        units: [warriorSummonMob, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 1 },
        ],
    },
    {
        name: "Fireflies",
        units: [fireflySummonMob, fireflySummonMob, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: wand1, exp: 1 },
            { type: IMobRewardType.ITEM, item: staff1, exp: 1 },
        ],
    },
    {
        name: "Wolf",
        units: [wolfUnit, null, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 1 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 1 },
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
    {
        name: "Spirit warrirors(2)",
        units: [warriorSummon, warriorSummon, warriorSummon],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 2 },
        ],
    },
    {
        name: "Wolfs(2)",
        units: [wolfUnit, wolfUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 2 },
        ],
    },
];
export const mobsLvl3: IMobsVariants[] = [
    {
        name: "Skeletons(3)",
        units: [skeletonUnit, skeletonUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 3 },
        ],
    },
    {
        name: "Goblin shaman",
        units: [goblinShamanUnit, goblinShamanUnit, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 3 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 3 },
        ],
    },
    {
        name: "Goblins",
        units: [weakGoblinUnit, goblinUnit, goblinUnit, goblinUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.UNIT, unit: goblinUnit, exp: 3 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 2 },
        ],
    },
    {
        name: "Spirit warrirors(3)",
        units: [warriorSummon_3, warriorSummon_3, warriorSummon_3],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemCoin, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_damage, exp: 3 },
        ],
    },
    {
        name: "Wolfs(3)",
        units: [strongWolfUnit, null, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 3 },
        ],
    },
];

export const mobsLvl4: IMobsVariants[] = [
    {
        name: "Skeletons(4)",
        units: [skeletonWarriorUnit, skeletonUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 4 },
        ],
    },
    {
        name: "Goblins(4)",
        units: [goblinShamanUnit, goblinUnit, goblinUnit, goblinUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.UNIT, unit: goblinUnit, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemGoblinGoldCoin, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 4 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 4 },
        ],
    },
    {
        name: "Peasants(4)",
        units: [peasantUnit_4, peasantUnit_4, peasantUnit_4, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 4 },
            { type: IMobRewardType.ITEM, item: dagger1, exp: 4 },
            { type: IMobRewardType.ITEM, item: shield1, exp: 4 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 4 },
        ],
    },
];
export const mobsLvl5: IMobsVariants[] = [
    {
        name: "Skeletons(5)",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 5 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
        ],
    },
    {
        name: "Spirit warriors(5)",
        units: [warriorSummonMob_5, warriorSummonMob_5],
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 5 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 5 },
        ],
    },
];
export const mobsLvl6: IMobsVariants[] = [
    {
        name: "Skeletons(6)",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit, skeletonMageUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 5 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
        ],
    },
];

export const unitsLvl1 = [peasantUnit, weakGoblinUnit];
export const unitsLvl2 = [goblinUnit];
export const unitsLvl3 = [goblinUnit, goldGoblin1Unit, skeletonUnit, wolfUnit];
export const unitsLvl4 = [skeletonWarriorUnit, goldGoblin1Unit];
export const unitsLvl5 = [skeletonWarriorUnit, skeletonMageUnit, strongWolfUnit];
