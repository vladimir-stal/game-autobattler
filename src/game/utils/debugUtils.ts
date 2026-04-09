import { ECardType, ICard } from "../../types";
import { darkHero, masterHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1 } from "../basicWeaponItemConsts";
import { statusesIntoHeal } from "../skills/commonSkillConsts";
import { fireflySelfPoison } from "../skills/mobSkills";
import { attrDescArmor } from "../skills/wildSkillConsts";

export const debugHeroSelectRoom = true;
export const debugStartingItemsRoom = true;

/*
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];
*/

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: wildHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.SKILL, price: 0, skill: attrDescArmor },
        { type: ECardType.SKILL, price: 0, skill: statusesIntoHeal },
        { type: ECardType.SKILL, price: 0, skill: fireflySelfPoison },
        { type: ECardType.ITEM, price: 0, item: dagger1 },
    ];
};
