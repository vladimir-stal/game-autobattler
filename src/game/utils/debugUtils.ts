import { ECardType, EItemBonusType, EItemTargetType, ICard, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { dagger1, wand1 } from "../basicWeaponItemConsts";
import { basic_exp_bag, basic_jacket } from "../commonItemConsts";
import { jacket21_3 } from "../commonItemConsts2";
import { summonerMantle3 } from "../commonItemConsts3";
import { enemy1_test, enemy4_test, enemy5 } from "../duelConsts";
import { barbarianHero, illusionistHero, mimicHero, necromancerHero, samuraiHero, witchHero } from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { phycisalAttackSkill, radiantWallSkill } from "../skills/commonSkillConsts";
import { magicAttack } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { incrSummonBa } from "../skills/summonSkillConsts2";
import { totemAttackSkill } from "../skills/wildSkillConsts";
import { goblinUnit } from "../units/goblinMobUnits";
import { peasantUnit } from "../units/mobUnitConsts";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { shieldWarriorsSummonMob } from "../units/summonMobUnits";
import { strongWolfUnit, wolfUnit } from "../units/wolfsMobUnits";
import { dagger31 } from "../weaponItem3Consts";

export const debugHeroSelectRoom = false;
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
    return [null, { type: ECardType.UNIT, price: 0, unit: summonHero }, null];
};

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        { type: ECardType.UNIT, price: 0, unit: warriorHero },
        { type: ECardType.SKILL, price: 0, skill: radiantWallSkill },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackX3 },
        /*{
            type: ECardType.ITEM,
            price: 0,
            item: {
                ...basic_jacket,
                bonuses: [
                    ...basic_jacket.bonuses,
                    { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "evolvedNumber", attribute: "basicPhysicalPower", targetType: EItemTargetType.SELF },
                ],
            },

        },*/
        { type: ECardType.SKILL, price: 0, skill: phycisalAttackSkill },
        { type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
