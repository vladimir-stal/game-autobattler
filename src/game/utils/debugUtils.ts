import { ECardType, ICard } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, wand1 } from "../basicWeaponItemConsts";
import { assasinHero, paladinHero } from "../mcHeroConsts";
import { blindingBeamSkill, heatUpSkill, nextBAArea, radiantWallSkill, removeDebuffSkill, statusesIntoHeal } from "../skills/commonSkillConsts";
import { magicAttackX3, poisonRandom } from "../skills/darkSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { fireflySelfPoison } from "../skills/mobSkills";
import { healSelf } from "../skills/priestSkillConsts";
import { debuffWorthyFoe } from "../skills/warriorSkillConsts";
import { attrDescArmor } from "../skills/wildSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { fireflySummonMob_6 } from "../units/summonMobUnits";
import { dagger22 } from "../weaponItem2Consts";

export const debugHeroSelectRoom = false; // true // false
export const debugStartingItemsRoom = false;

/*
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];
*/

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: { ...magicHero, skills: [magicAttack] } }, null];
    //return [null, { type: ECardType.UNIT, price: 0, unit: orderHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: orderHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackX3 },
        //{ type: ECardType.ITEM, price: 0, item: dagger1 },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        //{ type: ECardType.SKILL, price: 0, skill: nextBAArea },
        { type: ECardType.ITEM, price: 0, item: wand1 },
        { type: ECardType.UNIT, price: 0, unit: goblinUnit },
    ];
};
