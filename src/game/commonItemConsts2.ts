import { EHeroClass, EItemAfterDuelBonusType, EItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_POTION_1 } from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 2 ////////////////////////////////////////////////////////////////////////////////////

// ARMOR AMULET

export const armor_amulet_3: IItem = {
    id: "armor_amulet",
    name: "Armor amulet(3)",
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 3 }],
};

export const armor_amulet_2: IItem = {
    id: "armor_amulet",
    name: "Armor amulet(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 2 }],
    nextLevel: armor_amulet_3,
};

export const armor_amulet: IItem = {
    id: "armor_amulet",
    name: "Armor amulet",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1 }],
    nextLevel: armor_amulet_2,
};

// HP AMULET

export const hp_amulet_3: IItem = {
    id: "hp_amulet",
    name: "Health amulet(3)",
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 3 }],
};

export const hp_amulet_2: IItem = {
    id: "hp_amulet",
    name: "Health amulet(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 2 }],
    nextLevel: hp_amulet_3,
};

export const hp_amulet: IItem = {
    id: "hp_amulet",
    name: "Health amulet",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 1 }],
    nextLevel: hp_amulet_2,
};
