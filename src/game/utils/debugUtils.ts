import { ECardType, EItemBattleBonusType, EItemBonusType, EItemTargetType, EStatusType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";

import {
    alchemistHero,
    assasinHero,
    barbarianHero,
    battleMageHero,
    beastMasterHero,
    bishopHero,
    blackKnightHero,
    bladedancerHero,
    commanderHero,
    doomsayerHero,
    druidHero,
    duelistHero,
    exorcistHero,
    forestSpiritHero,
    gladiatorHero,
    heraldHero,
    hunterHero,
    illusionistHero,
    jesterHero,
    knightHero,
    mimicHero,
    minstrelHero,
    monkHero,
    necromancerHero,
    oracleHero,
    paladinHero,
    predatorHero,
    runecasterHero,
    samuraiHero,
    shadowMasterHero,
    shamanHero,
    sorcererHero,
    warlockHero,
    witchHero,
    zealotHero,
} from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { chainBasicAttackSkill, phycisalAttackSkill, radiantWallSkill, toxicTuneSkill, venomHeartSkill } from "../skills/commonSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { fireflySummonSkill, incrSummonBa, warriorSummonSkill } from "../skills/summonSkillConsts2";
import { goblinUnit } from "../units/goblinMobUnits";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { fireflySummonMob, shieldWarriorsSummonMob, warriorSummonMob_3 } from "../units/summonMobUnits";
import { strongWolfUnit, wolfUnit } from "../units/wolfsMobUnits";
import { axe31, dagger31, staff31 } from "../weaponItem3Consts";
import { inquisitorHero } from "../mcHeroConsts";
import { healFirst, healSelf, ringOfHealingSkill } from "../skills/priestSkillConsts";
import { buffNextBaTimes, buffNextBaTimes_2, mortalStrikeSkill } from "../skills/warriorSkillConsts";
import { debuffBaNextBaAll } from "../skills/darkSkillConsts";
import { skeletonMageUnit, skeletonUnit } from "../units/skeletonsMobUnits";
import {} from "../skills/mobSkills";
import { regularWolfSkill } from "../skills/mobs/wolfMobSkills";
import { peasantLastStandSkill, peasantsStronkSkill } from "../skills/mobs/peasantMobSkills";
import { pirateCallTheCannons, pirateDeadmansCurse, pirateDragNDrown } from "../skills/mobs/pirateMobSkills";
import { fireflyConfusingMistSkill } from "../skills/mobs/fireflyMobSkills";
import { spiritTeamFlurry, spiritTeamRevenge } from "../skills/mobs/spiritWarriorMobSkills";
import { buffTotalDmgSkill } from "../skills/bardSkillConsts";
import { dagger1, shield1, sword1 } from "../basicWeaponItemConsts";
import { goblinPocketSand } from "../skills/mobs/goblinMobSkills";
import { basic_jacket_2 } from "../commonItemConsts";
import { outHealBuffSkill } from "../skills/commonSkill3Consts";
import { scrollOfSkill } from "../commonItemConsts3";
import { totem5HptoDmg } from "../weaponItem5Consts";
import { wildBasicTotemSkill } from "../skills/wildSkillConsts";
import { runecasterSkill } from "../skills/mc/runecasterSkills";
import { ministrelPassive } from "../skills/mc/minstrelSkills";

export const debugHeroSelectRoom = false;
export const debugStartingItemsRoom = false;
export const debugAlwaysOneEnemy = false;

export const debugEnemy: TDuelEnemy = enemy4_test;

//

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [
        { type: ECardType.UNIT, price: 0, unit: sorcererHero },
        { type: ECardType.UNIT, price: 0, unit: necromancerHero },
        { type: ECardType.UNIT, price: 0, unit: battleMageHero },
    ];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.UNIT, price: 0, unit: shamanHero },
        { type: ECardType.UNIT, price: 0, unit: predatorHero },
        //{ type: ECardType.UNIT, price: 0, unit: commanderHero },
        { type: ECardType.UNIT, price: 0, unit: inquisitorHero },
        //{ type: ECardType.UNIT, price: 0, unit: necromancerHero },
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: fireflySummonMob },
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        { type: ECardType.SKILL, price: 0, skill: wildBasicTotemSkill },
        //{ type: ECardType.SKILL, price: 0, skill: venomHeartSkill },
        //{ type: ECardType.SKILL, price: 0, skill: outHealBuffSkill },
        //{ type: ECardType.ITEM, price: 0, item: totem5HptoDmg },
        //{ type: ECardType.ITEM, price: 0, item: scrollOfSkill(goblinPocketSand) },
        // { type: ECardType.ITEM, price: 0, item: itemGoblinBoneDagger },
        // {
        //     type: ECardType.ITEM,
        //     price: 0,
        //     item: basic_jacket_2,
        // },
        //{ type: ECardType.ITEM, price: 0, item: staff31 },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackAll },
        // { type: ECardType.SKILL, price: 0, skill: { ...warriorSummonSkill, isChained: true } },
        // { type: ECardType.SKILL, price: 0, skill: pirateDragNDrown },
        // { type: ECardType.SKILL, price: 0, skill: pirateCallTheCannons },
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: warriorHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: { ...buffNextBaTimes, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: { ...buffNextBaTimes_2, isChained: true } },

        //{ type: ECardType.SKILL, price: 0, skill: ringOfHealingSkill },
        {
            type: ECardType.ITEM,
            price: 0,
            item: {
                ...jacket21_3,
                bonuses: [
                    ...jacket21_3.bonuses,
                    {
                        type: EItemBonusType.ATTRIBUTE,
                        value: 50,
                        valueType: "number",
                        attribute: "basicMagicPower",
                        targetType: EItemTargetType.ALL_ALLIES,
                        valueFrom: "basicMaxHp",
                    },
                ],
                battleBonuses: [
                    {
                        type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS,
                        value: 30,
                        valueType: "percent",
                        valueFrom: "attack",
                        status: EStatusType.POISON,
                    },
                ],
            },
        },
        //{ type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
