import {
    EHeroClass,
    EItemAfterDuelBonusType,
    EItemBattleBonusType,
    EItemBonusType,
    EItemTargetType,
    EItemType,
    EWeaponItemType,
    IHeroSkillSet,
    IItem,
} from "../types";
import { i18n } from "./consts";
import { skeletonArmorSelfAndLow } from "./skills/mobs/skeletonMobSkills";
import { IMAGE_CARD_EXP } from "./utils/imageLoadUtil";
import {
    IMAGE_ITEM_AMULET_CRIT_3,
    IMAGE_ITEM_AMULET_EVASION_3,
    IMAGE_ITEM_BOOK_MAGIC,
    IMAGE_ITEM_POTION_1,
    IMAGE_ITEM_SUMMONER_MANTLE_3,
} from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 3 /////////////////////////////////////////////////

//
// CRIT AMULET
//

export const crit_amulet_3: IItem = {
    id: "crit_amulet",
    name: i18n.items.crit_amulet,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_CRIT_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 8 }],
};

export const crit_amulet_2: IItem = {
    id: "crit_amulet",
    name: i18n.items.crit_amulet,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_CRIT_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 5 }],
    nextLevel: crit_amulet_3,
};

export const crit_amulet: IItem = {
    id: "crit_amulet",
    name: i18n.items.crit_amulet,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_CRIT_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 3 }],
    nextLevel: crit_amulet_2,
};

//
// EVASION AMULET
//

export const evasion_amulet_3: IItem = {
    id: "evasion_amulet",
    name: i18n.items.evasion_amulet,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_EVASION_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 8 }],
};

export const evasion_amulet_2: IItem = {
    id: "evasion_amulet",
    name: i18n.items.evasion_amulet,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_EVASION_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 5 }],
    nextLevel: evasion_amulet_3,
};

export const evasion_amulet: IItem = {
    id: "evasion_amulet",
    name: i18n.items.evasion_amulet,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_AMULET_EVASION_3,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 3 }],
    nextLevel: evasion_amulet_2,
};

//
// EVASION MANTLE
//

export const summonerMantle3_3: IItem = {
    id: "summoner_mantle",
    name: i18n.items.summonerMantle3,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 19, valueType: "number", attribute: "basicMaxHp" }],
    heroClassBonuses: [{ heroClass: EHeroClass.SUMMON, battleBonus: { type: EItemBattleBonusType.INCREASE_SUMMON_HP, value: 19, valueType: "number" } }],
    image: IMAGE_ITEM_SUMMONER_MANTLE_3,
};

export const summonerMantle3_2: IItem = {
    id: "summoner_mantle",
    name: i18n.items.summonerMantle3,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 13, valueType: "number", attribute: "basicMaxHp" }],
    heroClassBonuses: [{ heroClass: EHeroClass.SUMMON, battleBonus: { type: EItemBattleBonusType.INCREASE_SUMMON_HP, value: 13, valueType: "number" } }],
    image: IMAGE_ITEM_SUMMONER_MANTLE_3,
    nextLevel: summonerMantle3_3,
};

export const summonerMantle3: IItem = {
    id: "summoner_mantle",
    name: i18n.items.summonerMantle3,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 9, valueType: "number", attribute: "basicMaxHp" }],
    heroClassBonuses: [{ heroClass: EHeroClass.SUMMON, battleBonus: { type: EItemBattleBonusType.INCREASE_SUMMON_HP, value: 9, valueType: "number" } }],
    image: IMAGE_ITEM_SUMMONER_MANTLE_3,
    nextLevel: summonerMantle3_2,
};

// Scroll of protection
export const scrollSkillArmor: IItem = {
    id: "scroll_armor",
    name: "Scroll of armor",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [],
    // CAST_SKILL_X_ROUND ~ rounds are numbered starting at 0
    battleBonuses: [{ type: EItemBattleBonusType.CAST_SKILL_X_ROUND, value: 1, valueType: "number", relatedSkill: skeletonArmorSelfAndLow }],
    heroClassBonuses: [],
    image: IMAGE_CARD_EXP,
};

export const scrollOfSkill = (skill: IHeroSkillSet): IItem => {
    return {
        id: "scroll_of_skill",
        //name: "Skill book of " + skill.name,
        name: i18n.items.scrollOfSkill + "\n" + i18n.skills.mobs[skill.id].name,
        type: EItemType.COMMON,
        level: skill.level,
        priceLevel: skill.priceLevel,
        heroClasses: [],
        bonuses: [],
        battleBonuses: [{ type: EItemBattleBonusType.UNPACK_SKILL_IN_STASH, value: 1, valueType: "number", relatedSkill: skill }],
        heroClassBonuses: [],
        image: IMAGE_ITEM_BOOK_MAGIC,
    };
};
