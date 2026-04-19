import { ECardType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, wand1 } from "../basicWeaponItemConsts";
import { summonerMantle3 } from "../commonItemConsts3";
import { enemy1_test, enemy5 } from "../duelConsts";
import { necromancerHero } from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";

export const debugHeroSelectRoom = false; // true // false
export const debugStartingItemsRoom = false;
export const debugAlwaysOneEnemy = false;

export const debugEnemy: TDuelEnemy = enemy5;

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
        //{ type: ECardType.UNIT, price: 0, unit: orderHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackX3 },
        { type: ECardType.ITEM, price: 0, item: summonerMantle3 },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.ITEM, price: 0, item: itemGoblinBoneDagger },
        //{ type: ECardType.UNIT, price: 0, unit: goblinUnit },
    ];
};
