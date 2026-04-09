import { ECardType, ICard } from "../../types";
import { darkHero, masterHero, summonHero, warriorHero } from "../basicHeroConsts";
import { sword1 } from "../basicWeaponItemConsts";
import { scrollSkillArmor } from "../commonItemConsts3";
import { itemCoin } from "../mobItemConsts";
import { debuffBaNextBaAll, magicAttackX3 } from "../skills/darkSkillConsts";
import { feintAttack } from "../skills/masterSkillConsts";
import { fireflySummonSkill } from "../skills/summonSkillConsts2";
import { debuffWorthyFoe } from "../skills/warriorSkillConsts";
import { dagger21 } from "../weaponItem2Consts";

export const debugHeroSelectRoom = true;
export const debugStartingItemsRoom = true;

/*
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];
*/

export const customHeroSelectRoom = (): ICard[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: masterHero }, null];;
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.SKILL, price: 0, skill: feintAttack },
        { type: ECardType.ITEM, price: 0, item: sword1 },
    ];
};