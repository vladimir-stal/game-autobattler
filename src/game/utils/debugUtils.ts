import { ECardType, EItemBattleBonusType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";

import { barbarianHero, doomsayerHero, illusionistHero, mimicHero, necromancerHero, oracleHero, samuraiHero, witchHero } from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { onlyBasicAttackSkill, phycisalAttackSkill, radiantWallSkill } from "../skills/commonSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { incrSummonBa } from "../skills/summonSkillConsts2";
import { totemAttackSkill } from "../skills/wildSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { peasantUnit } from "../units/mobUnitConsts";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { shieldWarriorsSummonMob } from "../units/summonMobUnits";
import { strongWolfUnit, wolfUnit } from "../units/wolfsMobUnits";
import { dagger31 } from "../weaponItem3Consts";
import { inquisitorHero } from "../mcHeroConsts";
import { ringOfHealingSkill } from "../skills/priestSkillConsts";
import { mortalStrikeSkill } from "../skills/warriorSkillConsts";
import { debuffBaNextBaAll } from "../skills/darkSkillConsts";
import { skeletonMageUnit } from "../units/skeletonsMobUnits";
import { skeletonPoisonedFlames } from "../skills/mobSkills";
import { scrollOfSkill } from "../commonItemConsts3";

export const debugHeroSelectRoom = false;
export const debugStartingItemsRoom = false;
export const debugAlwaysOneEnemy = false;

export const debugEnemy: TDuelEnemy = enemy4_test;

/*
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];
*/

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: doomsayerHero }, { type: ECardType.UNIT, price: 0, unit: oracleHero }];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        { type: ECardType.UNIT, price: 0, unit: peasantUnit },
        //{ type: ECardType.SKILL, price: 0, skill: skeletonPoisonedFlames },
        //{ type: ECardType.ITEM, price: 0, item: scrollOfSkill(skeletonPoisonedFlames) },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackX3 },
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
        { type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
