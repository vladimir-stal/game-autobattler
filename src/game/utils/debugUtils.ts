import { ECardType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, dagger1_2, wand1 } from "../basicWeaponItemConsts";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";
import { necromancerHero } from "../mcHeroConsts";
import { onlyBasicAttackSkill } from "../skills/commonSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { peasantUnit } from "../units/mobUnitConsts";

export const debugHeroSelectRoom = false; // true // false
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
        { type: ECardType.ITEM, price: 0, item: dagger1_2 },
        { type: ECardType.UNIT, price: 0, unit: peasantUnit },
        { type: ECardType.UNIT, price: 0, unit: peasantUnit },
        //{ type: ECardType.SKILL, price: 0, skill: onlyBasicAttackSkill },
        //{ type: ECardType.ITEM, price: 0, item: wand1 },
        //{ type: ECardType.UNIT, price: 0, unit: goblinUnit },
    ];
};
