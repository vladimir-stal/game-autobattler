import { ECardType, EItemBattleBonusType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";
import { inquisitorHero } from "../mcHeroConsts";
import { ringOfHealingSkill } from "../skills/priestSkillConsts";
import { mortalStrikeSkill } from "../skills/warriorSkillConsts";

export const debugHeroSelectRoom = true;
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
    return [null, { type: ECardType.UNIT, price: 0, unit: inquisitorHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: warriorHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        { type: ECardType.SKILL, price: 0, skill: mortalStrikeSkill },
        {
            type: ECardType.ITEM,
            price: 0,
            item: {
                ...jacket21_3,
                bonuses: [
                    ...jacket21_3.bonuses,
                    { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "evolvedNumber", attribute: "basicMagicPower", targetType: EItemTargetType.SELF },
                ],
                battleBonuses: [{ type: EItemBattleBonusType.SUMMON_INCREASE_DAMAGE, value: 4, valueType: "number" }],
            },
        },
        { type: ECardType.SKILL, price: 0, skill: ringOfHealingSkill },
        //{ type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
