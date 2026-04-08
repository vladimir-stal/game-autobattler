import { IMobRewardType, IMobsVariants } from "../types";
import { dagger1, shield1, staff1, wand1, wand1_2 } from "./basicWeaponItemConsts";
import { basic_boots, basic_exp_bag_2, basic_hat, basic_heal, basic_jacket, basic_pants, basic_ring_damage, basic_ring_regen } from "./commonItemConsts";
import { armor_amulet, hp_amulet } from "./commonItemConsts2";

import {
    itemCoin,
    itemCoin2,
    itemGoblinBoneDagger,
    itemGoblinGoldCoin,
    itemGoblinSilverCoin,
    itemPeasantPitchfork,
    itemPeasantPitchfork_2,
    itemSpiritSpear,
    regenMantle,
    spiritArmor,
} from "./mobItemConsts";
import { peasantUnit, peasantUnit_4 } from "./units/mobUnitConsts";
import { goblinShamanUnit, goblinUnit, goldGoblin1Unit, weakGoblinUnit } from "./units/goblinMobUnits";
import { fireflySummonMob, fireflySummonMob_6, warriorSummonMob, warriorSummonMob_3, warriorSummonMob_5 } from "./units/summonMobUnits";
import { skeletonMageUnit, skeletonUnit, skeletonWarriorUnit } from "./units/skeletonsMobUnits";
import { strongWolfUnit, wolfUnit } from "./units/wolfsMobUnits";
import { musical31 } from "./weaponItem3Consts";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;
export const MOB_MAX_ITEM_COUNT = 1;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

// TODO: add system percentage for reward to appear

export const mobsLvl1: IMobsVariants[] = [
    {
        name: "Peasants",
        description: "A trio of filthy peasants", // stat 1/3
        // 1 2 3 attacks ~ 6 dmg, hp 9
        units: [peasantUnit, peasantUnit, peasantUnit, null],
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
        description: "Two sicky goblins", // stat 2/5 ~ hp 10, dmg~10
        // (formula: first position lives 2 rounds, second +1 round)
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
        description: "A warrior that is 99% spirit", // stat 2/3 (buffed to 3/9)
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
        description: "A pair of magic moth",
        units: [fireflySummonMob, fireflySummonMob, null, null], // stat 4/1
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.UNIT, unit: fireflySummonMob, exp: 1 },
            { type: IMobRewardType.ITEM, item: wand1, exp: 1 },
            { type: IMobRewardType.ITEM, item: staff1, exp: 1 },
        ],
    },
    {
        name: "Wolf",
        description: "A lone beast in search of red riding hood",
        units: [wolfUnit, null, null, null], // stat 6/8 (nerfed to 5/8)
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
        description: "Two sicky goblins, but one is healthy", // stat 5/8 + 2/5
        // (approx 5 dmg/turn) first 2 rounds, second 3 rounds ~ 5+6 = 11 dmg
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
        description: "One shaman doing a ritual of good harvest",
        units: [goblinShamanUnit, null, null], // stat 4/14
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 2 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 2 },
        ],
    },
    {
        name: "Skeletons(2)",
        description: "One bone skull soldier",
        units: [skeletonUnit, null, null, null], // stat 4/10
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
        description: "A trio of spiritual soldiers",
        units: [warriorSummonMob, warriorSummonMob, warriorSummonMob], // 3x 3/9
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 2 },
        ],
    },
    {
        name: "Wolfs(2)",
        description: "Around you are two wolves",
        units: [wolfUnit, wolfUnit, null, null], // stat 5/8
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.UNIT, unit: wolfUnit, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 2 },
        ],
    },
    {
        name: "Fireflies",
        description: "Swarm of magic moth",
        units: [fireflySummonMob, fireflySummonMob, fireflySummonMob, fireflySummonMob], // stat 4/1
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 1 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: wand1, exp: 2 },
            { type: IMobRewardType.ITEM, item: staff1, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_heal, exp: 2 },
        ],
    },
];
export const mobsLvl3: IMobsVariants[] = [
    {
        name: "Skeletons(3)",
        description: "One bone skull soldier and his buddy",
        units: [skeletonUnit, skeletonUnit, null, null], // stat 4/10
        rewards: [
            { type: IMobRewardType.UNIT, unit: skeletonUnit, exp: 2 },
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
        description: "Two shamans want to find a cure for their village",
        units: [goblinShamanUnit, goblinShamanUnit, null], // stat 4/14
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
        description: "Weak goblin called his three friends",
        units: [weakGoblinUnit, goblinUnit, goblinUnit, goblinUnit], // stat 5/8 + 2/5
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
        description: "A well known spiritual trio",
        units: [warriorSummonMob_3, warriorSummonMob_3, warriorSummonMob_3], // stat 5/14 (was 6_10)
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
        description: "Wolf's older brother",
        units: [strongWolfUnit, null, null, null], // stat 10/18
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 3 },
        ],
    },
];

export const mobsLvl4: IMobsVariants[] = [
    {
        name: "Skeletons(4)",
        description: "One skeleton lieutenant and one private",
        units: [skeletonWarriorUnit, skeletonUnit, null, null], // stats 7/16 + 4/10
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
        description: "Shaman showing his 3 buddies why no good harvest",
        units: [goblinShamanUnit, goblinUnit, goblinUnit, goblinUnit], // stats 4/18 + 5/8
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
        description: "Two not so regular peasants",
        units: [peasantUnit_4, peasantUnit_4, null, null], // stat 5/20 (was 10/30)
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
        description: "Two warriors and one mage",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit], // stat 7/16 + 8/9
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonWarriorUnit, exp: 4 },
            { type: IMobRewardType.UNIT, unit: skeletonMageUnit, exp: 4 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
        ],
    },
    {
        name: "Spirit warriors(5)",
        description: "Gang of two spirits",
        units: [warriorSummonMob_5, warriorSummonMob_5], // stat 12/30
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob_3, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 5 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 5 },
        ],
    },
];
export const mobsLvl6: IMobsVariants[] = [
    {
        name: "Skeletons(6)",
        description: "Two warriors and two mages",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit, skeletonMageUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonWarriorUnit, exp: 4 },
            { type: IMobRewardType.UNIT, unit: skeletonMageUnit, exp: 4 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
        ],
    },
    {
        name: "Peasants(6)",
        description: "Agricultural quartet",
        units: [peasantUnit_4, peasantUnit_4, peasantUnit_4, peasantUnit_4], // stat 5/20 (was 10/30)
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork_2, exp: 4 },
            { type: IMobRewardType.ITEM, item: dagger1, exp: 4 },
            { type: IMobRewardType.ITEM, item: shield1, exp: 4 },
            { type: IMobRewardType.UNIT, unit: peasantUnit_4, exp: 4 },
        ],
    },
    {
        name: "Infernoflies(6)",
        description: "Fireflies from hell",
        units: [fireflySummonMob_6, fireflySummonMob_6, fireflySummonMob_6, fireflySummonMob_6], // stat 10/2+8
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: fireflySummonMob_6, exp: 4 },
            { type: IMobRewardType.ITEM, item: wand1_2, exp: 2 },
            { type: IMobRewardType.ITEM, item: musical31, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 2 },
            { type: IMobRewardType.ITEM, item: basic_exp_bag_2, exp: 2 },
        ],
    },
];

export const unitsLvl1 = [peasantUnit, weakGoblinUnit];
export const unitsLvl2 = [goblinUnit];
export const unitsLvl3 = [goblinUnit, goldGoblin1Unit, skeletonUnit, wolfUnit];
export const unitsLvl4 = [skeletonWarriorUnit, goldGoblin1Unit];
export const unitsLvl5 = [skeletonWarriorUnit, skeletonMageUnit, strongWolfUnit];
