import { ECardType, ICard } from "../../types";
import { summonHero } from "../basicHeroConsts";
import { scrollSkillArmor } from "../commonItemConsts3";
import { itemCoin } from "../mobItemConsts";
import { fireflySummonSkill } from "../skills/summonSkillConsts2";

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
    return [null, { type: ECardType.UNIT, price: 0, unit: summonHero }, null];;
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.SKILL, price: 0, skill: fireflySummonSkill },
        { type: ECardType.ITEM, price: 0, item: itemCoin },
    ];
};