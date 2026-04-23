import { ECardType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, wand1 } from "../basicWeaponItemConsts";
import { basic_exp_bag } from "../commonItemConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { summonerMantle3 } from "../commonItemConsts3";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";
import { necromancerHero, witchHero } from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { incrSummonBa } from "../skills/summonSkillConsts2";
import { goblinUnit } from "../units/goblinMobUnits";
import { peasantUnit } from "../units/mobUnitConsts";
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
    return [null, { type: ECardType.UNIT, price: 0, unit: necromancerHero }, null];
    //return [null, { type: ECardType.UNIT, price: 0, unit: orderHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.UNIT, price: 0, unit: peasantUnit },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackX3 },
        {
            type: ECardType.ITEM,
            price: 0,
            item: {
                ...jacket21_3,
                bonuses: [
                    ...jacket21_3.bonuses,
                    { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "evolvedNumber", attribute: "basicMagicPower", targetType: EItemTargetType.SELF },
                ],
            },
        },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.SKILL, price: 0, skill: incrSummonBa },
        { type: ECardType.ITEM, price: 0, item: dagger31 },
        //{ type: ECardType.UNIT, price: 0, unit: goblinUnit },
    ];
};
