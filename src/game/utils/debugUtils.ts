import { ECardType, ICard } from "../../types";
import { darkHero, summonHero, warriorHero } from "../basicHeroConsts";
import { sword1 } from "../basicWeaponItemConsts";
import { scrollSkillArmor } from "../commonItemConsts3";
import { itemCoin } from "../mobItemConsts";
import { increaseMaxHpSkill } from "../skills/commonSkill3Consts";
import { removeBuffSkill } from "../skills/commonSkillConsts";
import { debuffBaNextBaAll, poisonRandom, stealPPorMPSkill } from "../skills/darkSkillConsts";
import { applyShock, magicAttackAll } from "../skills/magicSkillConsts";
import { fireflySummonSkill } from "../skills/summonSkillConsts2";
import { debuffWorthyFoe } from "../skills/warriorSkillConsts";
import { attrDescArmor } from "../skills/wildSkillConsts";
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
    return [null, { type: ECardType.UNIT, price: 0, unit: darkHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        { type: ECardType.SKILL, price: 0, skill: attrDescArmor },
        { type: ECardType.SKILL, price: 0, skill: removeBuffSkill },
        { type: ECardType.SKILL, price: 0, skill: increaseMaxHpSkill },
        { type: ECardType.SKILL, price: 0, skill: magicAttackAll },
        { type: ECardType.SKILL, price: 0, skill: applyShock },
    ];
};
