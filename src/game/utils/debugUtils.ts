import { ECardType, EHeroClass, EHeroSkillType, EItemBattleBonusType, EItemBonusType, EItemTargetType, EStatusType, ETargetType, ICard, IHeroSkillSet, TDuelEnemy } from "../../types";

import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "../basicHeroConsts";
import { jacket21_3 } from "../commonItemConsts2";

import {
    assasinHero,
    barbarianHero,
    bladedancerHero,
    commanderHero,
    doomsayerHero,
    forestSpiritHero,
    gladiatorHero,
    illusionistHero,
    mimicHero,
    necromancerHero,
    oracleHero,
    predatorHero,
    samuraiHero,
    shamanHero,
    witchHero,
} from "../mcHeroConsts";
import { itemGoblinBoneDagger } from "../mobItemConsts";
import { chainBasicAttackSkill, grudgeHealSkill, hopeSkill, phycisalAttackSkill, radiantWallSkill, removeDebuffSkill, toxicTuneSkill, venomHeartSkill } from "../skills/commonSkillConsts";
import { magicAttack, painBoltsSkill } from "../skills/magicSkillConsts";
import { followupComboSkill, riposteSkill } from "../skills/masterSkillConsts";
import { fireflySummonSkill, incrSummonBa, warriorSummonSkill } from "../skills/summonSkillConsts2";
import { goblinUnit } from "../units/goblinMobUnits";
import { pirate1Unit, pirate2Unit } from "../units/piratesMobUnits";
import { fireflySummonMob, shieldWarriorsSummonMob, warriorSummonMob_3 } from "../units/summonMobUnits";
import { strongWolfUnit, wolfUnit } from "../units/wolfsMobUnits";
import { axe31, dagger31, staff31 } from "../weaponItem3Consts";
import { inquisitorHero } from "../mcHeroConsts";
import { fireBloodSkill, healFirst, healSelf, ringOfHealingSkill } from "../skills/priestSkillConsts";
import { buffNextBaTimes, buffNextBaTimes_2, mortalStrikeSkill } from "../skills/warriorSkillConsts";
import { debuffBaNextBaAll, poisonHostSkill } from "../skills/darkSkillConsts";
import { skeletonMageUnit, skeletonUnit } from "../units/skeletonsMobUnits";
import {} from "../skills/mobSkills";
import { regularWolfSkill } from "../skills/mobs/wolfMobSkills";
import { peasantLastStandSkill, peasantsStronkSkill } from "../skills/mobs/peasantMobSkills";
import { pirateCallTheCannons, pirateDeadmansCurse, pirateDragNDrown } from "../skills/mobs/pirateMobSkills";
import { fireflyConfusingMistSkill } from "../skills/mobs/fireflyMobSkills";
import { spiritTeamFlurry, spiritTeamRevenge } from "../skills/mobs/spiritWarriorMobSkills";
import { buffTotalDmgSkill } from "../skills/bardSkillConsts";
import { dagger1, shield1, sword1, wand1 } from "../basicWeaponItemConsts";
import { goblinPocketSand } from "../skills/mobs/goblinMobSkills";
import { basic_jacket_2 } from "../commonItemConsts";
import { outHealBuffSkill } from "../skills/commonSkill3Consts";
import { scrollOfSkill } from "../commonItemConsts3";
import { totem5HptoDmg } from "../weaponItem5Consts";
import { wildBasicTotemSkill } from "../skills/wildSkillConsts";
import { buildDuelEnemy } from "./duelUtils";
import { duelEnemies2 } from "../duelConsts";
import { martyrSkill, momentumSkill } from "../skills/orderSkillConsts";
import { peasantUnit_4 } from "../units/peasantMobUnits";
import { removeDebuff } from "./battleUtils";
import { IMAGE_SKILL_TEST } from "./load/skillImagesLoad";

export const debugHeroSelectRoom = true;
export const debugStartingItemsRoom = true;
export const debugAlwaysOneEnemy = false;

export const debugEnemy: TDuelEnemy = buildDuelEnemy(duelEnemies2.find(d => d.name === "MeAndMySon")?.unitData || []);

//

export const customHeroSelectRoom = (): (ICard | null)[] => {
    return [null, { type: ECardType.UNIT, price: 0, unit: orderHero }];
};

const debugCustomSkill: IHeroSkillSet = {
    id: "debugSkill",
    name: "Debug skill",
    desc: "Something",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.SELF,
            status: EStatusType.BURN,
            value: 40,
            valueType: "number",
        }
    ],
    isChained: true,
    image: IMAGE_SKILL_TEST,
}

export const customStartingItemsRoom = (): ICard[] => {
    return [
        //{ type: ECardType.UNIT, price: 0, unit: shamanHero },
        //{ type: ECardType.UNIT, price: 0, unit: predatorHero },
        //{ type: ECardType.UNIT, price: 0, unit: commanderHero },
        //{ type: ECardType.UNIT, price: 0, unit: inquisitorHero },
        //{ type: ECardType.UNIT, price: 0, unit: necromancerHero },
        //{ type: ECardType.UNIT, price: 0, unit: wolfUnit },
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: fireflySummonMob },
        //{ type: ECardType.UNIT, price: 0, unit: peasantUnit_4 },
        { type: ECardType.SKILL, price: 0, skill: debugCustomSkill },
        { type: ECardType.SKILL, price: 0, skill: martyrSkill },
        //{ type: ECardType.SKILL, price: 0, skill: outHealBuffSkill },
        //{ type: ECardType.ITEM, price: 0, item: dagger31 },
        //{ type: ECardType.ITEM, price: 0, item: wand1 },
        //{ type: ECardType.ITEM, price: 0, item: scrollOfSkill(goblinPocketSand) },
        // { type: ECardType.ITEM, price: 0, item: itemGoblinBoneDagger },
        // {
        //     type: ECardType.ITEM,
        //     price: 0,
        //     item: basic_jacket_2,
        // },
        //{ type: ECardType.ITEM, price: 0, item: staff31 },
        //{ type: ECardType.SKILL, price: 0, skill: magicAttackAll },
        // { type: ECardType.SKILL, price: 0, skill: { ...warriorSummonSkill, isChained: true } },
        // { type: ECardType.SKILL, price: 0, skill: pirateDragNDrown },
        // { type: ECardType.SKILL, price: 0, skill: pirateCallTheCannons },
        //{ type: ECardType.UNIT, price: 0, unit: pirate1Unit },
        //{ type: ECardType.UNIT, price: 0, unit: warriorHero },
        //{ type: ECardType.SKILL, price: 0, skill: { ...debuffWorthyFoe, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: { ...buffNextBaTimes, isChained: true } },
        //{ type: ECardType.SKILL, price: 0, skill: { ...buffNextBaTimes_2, isChained: true } },

        //{ type: ECardType.SKILL, price: 0, skill: ringOfHealingSkill },
        
        { type: ECardType.ITEM, price: 0, item: jacket21_3 },
    ];
};
