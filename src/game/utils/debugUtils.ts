import { ECardType, EItemBattleBonusType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, wand1 } from "../basicWeaponItemConsts";
import { basic_exp_bag, basic_jacket } from "../commonItemConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { summonerMantle3 } from "../commonItemConsts3";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";
import { barbarianHero, illusionistHero, mimicHero, necromancerHero, samuraiHero, witchHero } from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { phycisalAttackSkill, radiantWallSkill } from "../skills/commonSkillConsts";
import { magicAttack, meteoriteFallSkill } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { ringOfHealingSkill } from "../skills/priestSkillConsts";
import { explodingSummonsBuffSkill, familiarSummon, incrSummonBa, summonerFamiliarSkill } from "../skills/summonSkillConsts2";
import { mortalStrikeSkill } from "../skills/warriorSkillConsts";
import { totemAttackSkill } from "../skills/wildSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { peasantUnit } from "../units/mobUnitConsts";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { wolfUnit } from "../units/wolfsMobUnits";
import { dagger31 } from "../weaponItem3Consts";

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
    return [null, { type: ECardType.UNIT, price: 0, unit: warriorHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
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
        //{ type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
