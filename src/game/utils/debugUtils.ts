import { ECardType, ICard } from "../../types";
import { darkHero, masterHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, sword1 } from "../basicWeaponItemConsts";
import { scrollSkillArmor } from "../commonItemConsts3";
import { itemCoin } from "../mobItemConsts";
import { statusesIntoHeal } from "../skills/commonSkillConsts";
import { debuffBaNextBaAll, magicAttackX3 } from "../skills/darkSkillConsts";
import { feintAttack } from "../skills/masterSkillConsts";
import { fireflySelfPoison } from "../skills/mobSkills";
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

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: wildHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.SKILL, price: 0, skill: statusesIntoHeal },
        { type: ECardType.SKILL, price: 0, skill: fireflySelfPoison },
        { type: ECardType.ITEM, price: 0, item: dagger1 },
    ];
};
