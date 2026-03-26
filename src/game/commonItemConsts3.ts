import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_POTION_1 } from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 3 /////////////////////////////////////////////////

//
// CRIT AMULET
//

export const crit_amulet_3: IItem = {
    id: "crit_amulet",
    name: "Crit amulet(3)",
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 4 }],
};

export const crit_amulet_2: IItem = {
    id: "crit_amulet",
    name: "Crit amulet(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 3 }],
    nextLevel: crit_amulet_3,
};

export const crit_amulet: IItem = {
    id: "crit_amulet",
    name: "Crit amulet",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 2 }],
    nextLevel: crit_amulet_2,
};

//
// EVASION AMULET
//

export const evasion_amulet_3: IItem = {
    id: "evasion_amulet",
    name: "Evasion amulet(3)",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 4 }],
};

export const evasion_amulet_2: IItem = {
    id: "evasion_amulet",
    name: "Evasion amulet(2)",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 3 }],
    nextLevel: evasion_amulet_3,
};

export const evasion_amulet: IItem = {
    id: "evasion_amulet",
    name: "Evasion amulet",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 2 }],
    nextLevel: evasion_amulet_2,
};

//
// ???
//
