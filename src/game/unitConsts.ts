import { IMobRewardType, IMobsVariants } from "../types";
import { dagger1, shield1, staff1, wand1, wand1_2 } from "./basicWeaponItemConsts";
import {
    basic_boots,
    basic_exp_bag_2,
    basic_hat,
    basic_heal,
    basic_jacket,
    basic_pants,
    basic_ring_damage,
    basic_ring_regen,
    basic_ring_regen_2,
} from "./commonItemConsts";
import { armor_amulet, hp_amulet, hp_amulet_2 } from "./commonItemConsts2";

import {
    itemCoin,
    itemCoin2,
    itemCoin3,
    itemGoblinBoneDagger,
    itemGoblinGoldCoin,
    itemGoblinSilverCoin,
    itemPeasantPitchfork,
    itemPeasantPitchfork_2,
    itemSpiritSpear,
    regenMantle,
    spiritArmor,
} from "./mobItemConsts";
import { goblinShamanUnit, goblinUnit, goldGoblin1Unit, goldGoblinBattleUnit, weakGoblinUnit } from "./units/goblinMobUnits";
import {
    fireflySummonMob,
    fireflySummonMob_6,
    shieldWarriorsSummonMob,
    warriorSummonMob,
    warriorSummonMob_3,
    warriorSummonMob_5,
} from "./units/summonMobUnits";
import { skeletonMageUnit, skeletonUnit, skeletonWarriorUnit } from "./units/skeletonsMobUnits";
import { strongWolfUnit, wolfUnit } from "./units/wolfsMobUnits";
import { musical31 } from "./weaponItem3Consts";
import { i18n } from "./consts";
import { pirate1Unit, pirate2Unit } from "./units/piratesMobUnits";
import { scrollOfSkill } from "./commonItemConsts3";
import { regularWolfSkill } from "./skills/mobs/wolfMobSkills";
import { bigWolfSummonSkill } from "./skills/mobs/bigWolfMobSkills";
import { dagger21, dagger22 } from "./weaponItem2Consts";
import { peasantLastStandSkill, peasantsStronkSkill } from "./skills/mobs/peasantMobSkills";
import { pirateCallTheCannons, pirateDeadmansCurse, pirateDragNDrown } from "./skills/mobs/pirateMobSkills";
import { fireflyConfusingMistSkill, fireflyUnfairExchange } from "./skills/mobs/fireflyMobSkills";
import { spiritShieldRadiate, spiritTeamFlurry, spiritTeamRevenge } from "./skills/mobs/spiritWarriorMobSkills";
import { skeletonArmorSelfAndLow, skeletonPoisonedFlames, skeletonUnholyLeap } from "./skills/mobs/skeletonMobSkills";
import { goblinApplyShock, goblinPocketSand, goblinShamanHpRegIncr, goldGoblinBuff } from "./skills/mobs/goblinMobSkills";
import { peasantUnit, peasantUnit_4 } from "./units/peasantMobUnits";
import { peasantUnit_1 } from "./units/mobUnitConsts";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;
export const MOB_MAX_ITEM_COUNT = 1;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

// TODO: add system percentage for reward to appear

export const mobsLvl1: IMobsVariants[] = [
    {
        name: i18n.mobs.level1.peasants,
        level: 1,
        description: "A trio of filthy peasants", // stat 1/3
        // 1 2 3 attacks ~ 6 dmg, hp 9
        units: [peasantUnit_1, peasantUnit_1, peasantUnit_1, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 1 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 1 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(peasantLastStandSkill), exp: 1 },
            { type: IMobRewardType.SKILL, skill: peasantLastStandSkill, exp: 1 },
        ],
    },
    {
        name: i18n.mobs.level1.weakgoblins,
        level: 1,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinPocketSand), exp: 1 },
            { type: IMobRewardType.SKILL, skill: goblinPocketSand, exp: 1 },
        ],
    },
    {
        name: i18n.mobs.level1.spiritwarrior,
        level: 1,
        description: "A warrior that is 99% spirit", // stat 2/3 (buffed to 3/9)
        units: [warriorSummonMob, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.GOLD, value: 1, exp: 1 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 1 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 1 },
            { type: IMobRewardType.SKILL, skill: spiritTeamFlurry, exp: 1 },
        ],
    },
    {
        name: i18n.mobs.level1.fireflies,
        level: 1,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(fireflyConfusingMistSkill), exp: 1 },
            { type: IMobRewardType.SKILL, skill: fireflyConfusingMistSkill, exp: 1 },
        ],
    },
    {
        name: i18n.mobs.level1.wolf,
        level: 1,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(regularWolfSkill), exp: 1 },
            { type: IMobRewardType.SKILL, skill: regularWolfSkill, exp: 1 },
        ],
    },
    // {
    //     name: i18n.mobs.level1.pirate,
    //     level: 1,
    //     description: "Brave pirate from the deepest ocean",
    //     units: [pirate1Unit, null, null, null],
    //     rewards: [
    //         { type: IMobRewardType.GOLD, value: 1, exp: 1 },
    //         { type: IMobRewardType.GOLD, value: 1, exp: 1 },
    //         { type: IMobRewardType.GOLD, value: 1, exp: 1 },
    //         { type: IMobRewardType.GOLD, value: 1, exp: 1 },
    //         { type: IMobRewardType.GOLD, value: 1, exp: 1 },
    //         //{ type: IMobRewardType.ITEM, item: basic_pants, exp: 1 },
    //         //{ type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 1 },
    //     ],
    // },
];

export const mobsLvl2: IMobsVariants[] = [
    {
        name: i18n.mobs.level1.peasants,
        level: 2,
        description: "A trio of filthy peasants", // stat 1/3
        // 1 2 3 attacks ~ 6 dmg, hp 9
        units: [peasantUnit_1, peasantUnit_1, peasantUnit_1, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 1 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 1 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(peasantLastStandSkill), exp: 1 },
            { type: IMobRewardType.SKILL, skill: peasantLastStandSkill, exp: 1 },
        ],
    },
    {
        name: i18n.mobs.level2.goblins,
        level: 2,
        description: "Two sicky goblins, but one is healthy", // stat 5/8 + 2/5
        // (approx 5 dmg/turn) first 2 rounds, second 3 rounds ~ 5+6 = 11 dmg
        units: [goblinUnit, weakGoblinUnit, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 2 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 2 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinPocketSand), exp: 2 },
            { type: IMobRewardType.SKILL, skill: goblinPocketSand, exp: 2 },
        ],
    },
    {
        name: i18n.mobs.level2.goblinshaman,
        level: 2,
        description: "One shaman doing a ritual of good harvest",
        units: [goblinShamanUnit, null, null], // stat 4/14
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 2 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 2 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinShamanHpRegIncr), exp: 2 },
            { type: IMobRewardType.SKILL, skill: goblinShamanHpRegIncr, exp: 2 },
        ],
    },
    {
        name: i18n.mobs.level2.skeleton,
        level: 2,
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
        name: i18n.mobs.level2.spiritwarrirors,
        level: 2,
        description: "A trio of spiritual soldiers",
        units: [warriorSummonMob, warriorSummonMob, warriorSummonMob], // 3x 3/9
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob, exp: 2 },
            //{ type: IMobRewardType.UNIT, unit: shieldWarriorsSummonMob, exp: 2 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 2 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 2 },
            { type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 2 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritShieldRadiate), exp: 2 },
        ],
    },
    {
        name: i18n.mobs.level2.wolves,
        level: 2,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(regularWolfSkill), exp: 2 },
            { type: IMobRewardType.SKILL, skill: regularWolfSkill, exp: 2 },
        ],
    },
    {
        name: i18n.mobs.level2.fireflies,
        level: 2,
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
            { type: IMobRewardType.ITEM, item: scrollOfSkill(fireflyConfusingMistSkill), exp: 2 },
            //{ type: IMobRewardType.UNIT, unit: fireflySummonMob, exp: 1 },
            { type: IMobRewardType.SKILL, skill: fireflyConfusingMistSkill, exp: 2 },
        ],
    },
    {
        name: i18n.mobs.level2.pirates,
        level: 2,
        description: "Brave pirate from the deepest ocean",
        units: [pirate1Unit, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 2 },
            { type: IMobRewardType.GOLD, value: 2, exp: 2 },
            { type: IMobRewardType.GOLD, value: 3, exp: 2 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDragNDrown), exp: 2 },
            { type: IMobRewardType.UNIT, unit: pirate1Unit, exp: 1 },
            { type: IMobRewardType.SKILL, skill: pirateDragNDrown, exp: 2 },
        ],
    },
];

export const mobsLvl3: IMobsVariants[] = [
    {
        name: i18n.mobs.level3.skeletons,
        level: 3,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonUnholyLeap), exp: 3 },
            { type: IMobRewardType.SKILL, skill: skeletonUnholyLeap, exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level3.goblinshamans,
        level: 3,
        description: "Two shamans want to find a cure for their village",
        units: [goblinShamanUnit, goblinShamanUnit, null, null], // stat 4/14
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: regenMantle, exp: 3 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinShamanHpRegIncr), exp: 2 },
            { type: IMobRewardType.SKILL, skill: goblinShamanHpRegIncr, exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level3.goblins,
        level: 3,
        description: "Weak goblin called his two friends",
        units: [weakGoblinUnit, goblinUnit, goblinUnit, null], // stat 5/8 + 2/5
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.UNIT, unit: goblinUnit, exp: 3 },
            { type: IMobRewardType.UNIT, unit: weakGoblinUnit, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinApplyShock), exp: 3 },
            { type: IMobRewardType.SKILL, skill: goblinApplyShock, exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level3.spiritwarrirors,
        level: 3,
        description: "A well known spiritual duo", // was trio
        units: [warriorSummonMob_3, warriorSummonMob_3], // stat 5/14 (was 6_10)
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemCoin, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_damage, exp: 3 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob_3, exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 2 },
            { type: IMobRewardType.SKILL, skill: spiritTeamFlurry, exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level3.wolves,
        level: 3,
        description: "Wolf's older brother",
        units: [strongWolfUnit, null, null, null], // stat 10/18
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 3 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(bigWolfSummonSkill), exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level3.pirates,
        level: 3,
        description: "Brave pirates from the deepest ocean",
        units: [pirate1Unit, pirate1Unit, pirate1Unit, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 1, exp: 3 },
            { type: IMobRewardType.GOLD, value: 2, exp: 3 },
            { type: IMobRewardType.GOLD, value: 3, exp: 3 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 3 },
            { type: IMobRewardType.ITEM, item: dagger21, exp: 3 },
            { type: IMobRewardType.ITEM, item: dagger22, exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDragNDrown), exp: 3 },
            { type: IMobRewardType.UNIT, unit: pirate1Unit, exp: 3 },
            { type: IMobRewardType.SKILL, skill: pirateDragNDrown, exp: 3 },
        ],
    },
];

export const mobsLvl4: IMobsVariants[] = [
    {
        name: i18n.mobs.level4.skeletons,
        level: 4,
        description: "One skeleton lieutenant and one private",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonUnit, null], // stats 7/16 + 4/10
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_hat, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_boots, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_pants, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_jacket, exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonArmorSelfAndLow), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonUnholyLeap), exp: 4 },
            { type: IMobRewardType.SKILL, skill: skeletonArmorSelfAndLow, exp: 4 },
            { type: IMobRewardType.SKILL, skill: skeletonUnholyLeap, exp: 4 },
        ],
    },
    {
        name: i18n.mobs.level4.goblins,
        level: 4,
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
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinApplyShock), exp: 3 },
            { type: IMobRewardType.SKILL, skill: goblinApplyShock, exp: 4 },
        ],
    },
    {
        name: i18n.mobs.level4.peasants,
        level: 4,
        description: "Two not so regular peasants",
        units: [peasantUnit_4, peasantUnit_4, null, null], // stat 5/20 (was 10/30)
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork, exp: 4 },
            { type: IMobRewardType.ITEM, item: dagger1, exp: 4 },
            { type: IMobRewardType.ITEM, item: shield1, exp: 4 },
            { type: IMobRewardType.UNIT, unit: peasantUnit, exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(peasantsStronkSkill), exp: 4 },
            { type: IMobRewardType.SKILL, skill: peasantsStronkSkill, exp: 4 },
        ],
    },
    {
        name: i18n.mobs.level4.infernoflies,
        level: 4,
        description: "Firefly from hell",
        units: [fireflySummonMob_6, null, null, null], // stat 10/2+8
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.UNIT, unit: fireflySummonMob_6, exp: 4 },
            { type: IMobRewardType.ITEM, item: wand1_2, exp: 4 },
            { type: IMobRewardType.ITEM, item: musical31, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 4 },
            { type: IMobRewardType.ITEM, item: basic_exp_bag_2, exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(fireflyUnfairExchange), exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level4.pirates,
        level: 4,
        description: "Pirate captain from the dippest ocean",
        units: [pirate2Unit, null, null, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.GOLD, value: 4, exp: 4 },
            { type: IMobRewardType.GOLD, value: 4, exp: 4 },
            { type: IMobRewardType.GOLD, value: 5, exp: 4 },
            { type: IMobRewardType.GOLD, value: 5, exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateCallTheCannons), exp: 3 },
            // { type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDeadmansCurse), exp: 3 },
            { type: IMobRewardType.SKILL, skill: pirateCallTheCannons, exp: 4 },
            { type: IMobRewardType.SKILL, skill: pirateDeadmansCurse, exp: 4 },
        ],
    },
    {
        name: i18n.mobs.level4.spiritwarrirors,
        level: 4,
        description: "Mixed spriritual unit",
        units: [shieldWarriorsSummonMob, warriorSummonMob_5, warriorSummonMob_3, warriorSummonMob], // stat 5/14 (was 6_10)
        rewards: [
            { type: IMobRewardType.GOLD, value: 2, exp: 4 },
            { type: IMobRewardType.GOLD, value: 3, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 4 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 4 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob_3, exp: 4 },
            { type: IMobRewardType.UNIT, unit: shieldWarriorsSummonMob, exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamRevenge), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritShieldRadiate), exp: 4 },
            { type: IMobRewardType.SKILL, skill: spiritTeamFlurry, exp: 4 },
            { type: IMobRewardType.SKILL, skill: spiritTeamRevenge, exp: 4 },
        ],
    },
];
export const mobsLvl5: IMobsVariants[] = [
    {
        name: i18n.mobs.level5.skeletons,
        level: 5,
        description: "Two warriors and one mage",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit], // stat 7/16 + 8/9
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonWarriorUnit, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonMageUnit, exp: 5 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonArmorSelfAndLow), exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonPoisonedFlames), exp: 5 },
            { type: IMobRewardType.SKILL, skill: skeletonArmorSelfAndLow, exp: 5 },
            { type: IMobRewardType.SKILL, skill: skeletonPoisonedFlames, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level5.spiritwarrirors,
        level: 5,
        description: "Gang of two spirits",
        units: [warriorSummonMob_5, warriorSummonMob_5], // stat 12/30
        rewards: [
            { type: IMobRewardType.GOLD, value: 3, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob_5, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 5 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamRevenge), exp: 5 },
            { type: IMobRewardType.SKILL, skill: spiritTeamFlurry, exp: 5 },
            { type: IMobRewardType.SKILL, skill: spiritTeamRevenge, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level5.goblins,
        level: 5,
        description: "Goblin regiment",
        units: [goblinShamanUnit, weakGoblinUnit, goblinUnit, goldGoblinBattleUnit], // stats 4/18 + 5/8
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.UNIT, unit: goblinShamanUnit, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemGoblinSilverCoin, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemGoblinGoldCoin, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemGoblinBoneDagger, exp: 5 },
            { type: IMobRewardType.UNIT, unit: goldGoblin1Unit, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinApplyShock), exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinPocketSand), exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goblinShamanHpRegIncr), exp: 3 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(goldGoblinBuff), exp: 3 },
            { type: IMobRewardType.SKILL, skill: goblinApplyShock, exp: 5 },
            { type: IMobRewardType.SKILL, skill: goblinPocketSand, exp: 5 },
            { type: IMobRewardType.SKILL, skill: goblinShamanHpRegIncr, exp: 5 },
            { type: IMobRewardType.SKILL, skill: goldGoblinBuff, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level5.pirates,
        level: 5,
        description: "Pirate crew from the dippest ocean",
        units: [pirate1Unit, pirate1Unit, pirate2Unit, null],
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: pirate1Unit, exp: 5 },
            { type: IMobRewardType.UNIT, unit: pirate2Unit, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateCallTheCannons), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDeadmansCurse), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDragNDrown), exp: 4 },
            { type: IMobRewardType.SKILL, skill: pirateCallTheCannons, exp: 5 },
            { type: IMobRewardType.SKILL, skill: pirateDeadmansCurse, exp: 5 },
            { type: IMobRewardType.SKILL, skill: pirateDragNDrown, exp: 5 },
        ],
    },
];
export const mobsLvl6: IMobsVariants[] = [
    {
        name: i18n.mobs.level6.skeletons,
        level: 6,
        description: "Two warriors and two mages",
        units: [skeletonWarriorUnit, skeletonWarriorUnit, skeletonMageUnit, skeletonMageUnit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonWarriorUnit, exp: 5 },
            { type: IMobRewardType.UNIT, unit: skeletonMageUnit, exp: 5 },
            { type: IMobRewardType.ITEM, item: armor_amulet, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonArmorSelfAndLow), exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(skeletonPoisonedFlames), exp: 5 },
            { type: IMobRewardType.SKILL, skill: skeletonArmorSelfAndLow, exp: 5 },
            { type: IMobRewardType.SKILL, skill: skeletonPoisonedFlames, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level6.peasants,
        level: 6,
        description: "Agricultural quartet",
        units: [peasantUnit_4, peasantUnit_4, peasantUnit_4, peasantUnit_4], // stat 5/20 (was 10/30)
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemPeasantPitchfork_2, exp: 5 },
            { type: IMobRewardType.ITEM, item: dagger1, exp: 5 },
            { type: IMobRewardType.ITEM, item: shield1, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: peasantUnit_4, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(peasantsStronkSkill), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(peasantLastStandSkill), exp: 4 },
            { type: IMobRewardType.SKILL, skill: peasantsStronkSkill, exp: 5 },
            { type: IMobRewardType.SKILL, skill: peasantLastStandSkill, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level6.infernoflies,
        level: 6,
        description: "Fireflies from hell",
        units: [fireflySummonMob_6, fireflySummonMob_6, fireflySummonMob_6, fireflySummonMob_6], // stat 10/2+8
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: fireflySummonMob_6, exp: 5 },
            { type: IMobRewardType.ITEM, item: wand1_2, exp: 5 },
            { type: IMobRewardType.ITEM, item: musical31, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_exp_bag_2, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(fireflyUnfairExchange), exp: 3 },
        ],
    },
    {
        name: i18n.mobs.level6.wolves,
        level: 6,
        description: "Full pack of wolves",
        units: [strongWolfUnit, wolfUnit, strongWolfUnit, strongWolfUnit], // stat 10/18
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.ITEM, item: hp_amulet_2, exp: 5 },
            { type: IMobRewardType.ITEM, item: basic_ring_regen_2, exp: 5 },
            { type: IMobRewardType.ITEM, item: itemCoin2, exp: 5 },
            { type: IMobRewardType.UNIT, unit: strongWolfUnit, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(bigWolfSummonSkill), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(regularWolfSkill), exp: 4 },
            { type: IMobRewardType.SKILL, skill: regularWolfSkill, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level6.spiritwarrirors,
        level: 6,
        description: "Veterans of spirit army",
        units: [shieldWarriorsSummonMob, warriorSummonMob_5, warriorSummonMob_5, warriorSummonMob], // stat 12/30
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: warriorSummonMob_5, exp: 4 },
            { type: IMobRewardType.ITEM, item: itemSpiritSpear, exp: 5 },
            { type: IMobRewardType.ITEM, item: spiritArmor, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamFlurry), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(spiritTeamRevenge), exp: 4 },
            { type: IMobRewardType.SKILL, skill: spiritTeamFlurry, exp: 5 },
            { type: IMobRewardType.SKILL, skill: spiritTeamRevenge, exp: 5 },
        ],
    },
    {
        name: i18n.mobs.level6.pirates,
        level: 6,
        description: "Pirate crew from the dippest ocean",
        units: [pirate1Unit, pirate1Unit, pirate2Unit, pirate2Unit],
        rewards: [
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 4, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 5, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.GOLD, value: 6, exp: 5 },
            { type: IMobRewardType.UNIT, unit: pirate1Unit, exp: 5 },
            { type: IMobRewardType.UNIT, unit: pirate2Unit, exp: 5 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateCallTheCannons), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDeadmansCurse), exp: 4 },
            //{ type: IMobRewardType.ITEM, item: scrollOfSkill(pirateDragNDrown), exp: 4 },
            { type: IMobRewardType.SKILL, skill: pirateCallTheCannons, exp: 5 },
            { type: IMobRewardType.SKILL, skill: pirateDeadmansCurse, exp: 5 },
            { type: IMobRewardType.SKILL, skill: pirateDragNDrown, exp: 5 },
        ],
    },
];

export const unitsLvl1 = [peasantUnit, weakGoblinUnit, warriorSummonMob, fireflySummonMob];
export const unitsLvl2 = [goblinUnit, skeletonUnit, wolfUnit];
export const unitsLvl3 = [goldGoblin1Unit, shieldWarriorsSummonMob, pirate1Unit];
export const unitsLvl4 = [skeletonWarriorUnit, warriorSummonMob_3, peasantUnit_4];
export const unitsLvl5 = [skeletonMageUnit, strongWolfUnit, warriorSummonMob_5, pirate2Unit];
