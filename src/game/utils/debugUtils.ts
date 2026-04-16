import { ECardType, ICard } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1 } from "../basicWeaponItemConsts";
import { assasinHero, bladedancerHero, paladinHero } from "../mcHeroConsts";
import { blindingBeamSkill, heatUpSkill, nextBAArea, radiantWallSkill, removeDebuffSkill, statusesIntoHeal } from "../skills/commonSkillConsts";
import { poisonRandom } from "../skills/darkSkillConsts";
import { fireflySelfPoison } from "../skills/mobSkills";
import { healSelf } from "../skills/priestSkillConsts";
import { debuffWorthyFoe } from "../skills/warriorSkillConsts";
import { attrDescArmor } from "../skills/wildSkillConsts";
import { fireflySummonMob_6 } from "../units/summonMobUnits";
import { dagger22 } from "../weaponItem2Consts";
import { music5AddBuffTarget } from "../weaponItem5Consts";

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
    return [null, { type: ECardType.UNIT, price: 0, unit: bladedancerHero }, null];
    //return [null, { type: ECardType.UNIT, price: 0, unit: orderHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: orderHero },
        //{ type: ECardType.SKILL, price: 0, skill: {...radiantWallSkill, isChained: true} },
        //{ type: ECardType.SKILL, price: 0, skill: {...radiantWallSkill, isChained: true} },
        //{ type: ECardType.ITEM, price: 0, item: dagger1 },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.ITEM, price: 0, item: music5AddBuffTarget },
        { type: ECardType.UNIT, price: 0, unit: fireflySummonMob_6 },
    ];
};
