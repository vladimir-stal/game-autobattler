import { ECardType, ICard } from "../../types";

import { darkHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1 } from "../basicWeaponItemConsts";
import { assasinHero } from "../mcHeroConsts";
import { nextBAArea, removeDebuffSkill, statusesIntoHeal } from "../skills/commonSkillConsts";
import { poisonRandom } from "../skills/darkSkillConsts";
import { fireflySelfPoison } from "../skills/mobSkills";
import { attrDescArmor } from "../skills/wildSkillConsts";
import { fireflySummonMob_6 } from "../units/summonMobUnits";
import { dagger22 } from "../weaponItem2Consts";

export const debugHeroSelectRoom = false;
export const debugStartingItemsRoom = false;

/*
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];
*/

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: priestHero }, null];
    //return [null, { type: ECardType.UNIT, price: 0, unit: orderHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.UNIT, price: 0, unit: orderHero },
        { type: ECardType.SKILL, price: 0, skill: removeDebuffSkill },
        { type: ECardType.SKILL, price: 0, skill: fireflySelfPoison },
        { type: ECardType.ITEM, price: 0, item: dagger1 },
        { type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.ITEM, price: 0, item: dagger22 },
        { type: ECardType.UNIT, price: 0, unit: fireflySummonMob_6 },
    ];
};
