import { ECardType, EItemBattleBonusType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";

import {
    barbarianHero,
    battleMageHero,
    doomsayerHero,
    forestSpiritHero,
    illusionistHero,
    mimicHero,
    necromancerHero,
    oracleHero,
    samuraiHero,
    witchHero,
} from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { chainBasicAttackSkill, phycisalAttackSkill, radiantWallSkill } from "../skills/commonSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { incrSummonBa, warriorSummonSkill } from "../skills/summonSkillConsts2";
import { totemAttackSkill } from "../skills/wildSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { fireflySummonMob, shieldWarriorsSummonMob, warriorSummonMob_3 } from "../units/summonMobUnits";
import { strongWolfUnit, wolfUnit } from "../units/wolfsMobUnits";
import { dagger31 } from "../weaponItem3Consts";
import { inquisitorHero } from "../mcHeroConsts";
import { ringOfHealingSkill } from "../skills/priestSkillConsts";
import { mortalStrikeSkill } from "../skills/warriorSkillConsts";
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

export const debugHeroSelectRoom = false;
export const debugStartingItemsRoom = false;
export const debugAlwaysOneEnemy = false;

export const debugEnemy: TDuelEnemy = enemy4_test;

//

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: battleMageHero }];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        // { type: ECardType.UNIT, price: 0, unit: summonHero },
        // { type: ECardType.UNIT, price: 0, unit: barbarianHero },
        // { type: ECardType.UNIT, price: 0, unit: necromancerHero },
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: fireflySummonMob },
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        //{ type: ECardType.SKILL, price: 0, skill: skeletonPoisonedFlames },
        //{ type: ECardType.ITEM, price: 0, item: scrollOfSkill(skeletonPoisonedFlames) },
        { type: ECardType.ITEM, price: 0, item: itemGoblinBoneDagger },
        {
            type: ECardType.ITEM,
            price: 0,
            item: basic_jacket_2,
        },
        {
            type: ECardType.ITEM,
            price: 0,
            item: basic_jacket_2,
        },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackAll },
        // { type: ECardType.SKILL, price: 0, skill: { ...warriorSummonSkill, isChained: true } },
        // { type: ECardType.SKILL, price: 0, skill: pirateDragNDrown },
        // { type: ECardType.SKILL, price: 0, skill: pirateCallTheCannons },

        /*{
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: warriorHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        { type: ECardType.SKILL, price: 0, skill: mortalStrikeSkill },
        {

            type: ECardType.ITEM,
            price: 0,
            item: {
                ...jacket21_3,
                bonuses: [
                    ...jacket21_3.bonuses,
                    { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "evolvedNumber", attribute: "basicMagicPower", targetType: EItemTargetType.SELF },
                ],
                battleBonuses: [{ type: EItemBattleBonusType.SUMMON_INCREASE_DAMAGE, value: 4, valueType: "number" }],
            },
        },
        { type: ECardType.SKILL, price: 0, skill: ringOfHealingSkill },
         */
        //{ type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
