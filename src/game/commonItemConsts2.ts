import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_ARMOR_1, IMAGE_ITEM_BOOTS_1, IMAGE_ITEM_GLOVES_21, IMAGE_ITEM_HELM_1, IMAGE_ITEM_HOLY_GLOVES_1, IMAGE_ITEM_POTION_1 } from "./utils/load/imageLoadItems";

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

///////////////////// HELMET 

export const hat21_2: IItem = {
    id: "hat21",
    name: "Helmet 2.1(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
};

export const hat21: IItem = {
    id: "hat21",
    name: "Helmet 2.1",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    nextLevel: hat21_2,
};

///////////////////// BOOTS 

export const boots21_2: IItem = {
    id: "boots21",
    name: "Boots 2.1(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicEvasionChance" }],
};

export const boots21: IItem = {
    id: "boots21",
    name: "Boots 2.1",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicEvasionChance" }],
    nextLevel: boots21_2,
};

///////////////////// ARMOR 

export const jacket21_2: IItem = {
    id: "jacket21",
    name: "Armor 2.1(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicMaxHp" }],
};

export const jacket21: IItem = {
    id: "jacket21",
    name: "Armor 2.1",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicMaxHp" }],
    nextLevel: jacket21_2,
};

// GLOVES WARRIOR /////////////////////

export const gloves_war2_3: IItem = {
    id: "gloves_war2",
    name: "Warrior Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 8, valueType: "number" } },
    ],
};

export const gloves_war2_2: IItem = {
    id: "gloves_war2",
    name: "Warrior Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 4, valueType: "number" } },
    ],
    nextLevel: gloves_war2_3,
};

export const gloves_war2: IItem = {
    id: "gloves_war2",
    name: "Warrior Gloves",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 2, valueType: "number" } },
    ],
    nextLevel: gloves_war2_2,
};

// GLOVES PRIEST /////////////////////

export const gloves_priest2_2: IItem = {
    id: "gloves_priest2",
    name: "Priest Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [EHeroClass.PRIEST],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 3, valueType: "number" } }],
};

export const gloves_priest2: IItem = {
    id: "gloves_priest2",
    name: "Priest Gloves",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [EHeroClass.PRIEST],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 2, valueType: "number" } }],
    nextLevel: gloves_priest2_2,
};

// GLOVES MAGIC /////////////////////

export const gloves_magic2_2: IItem = {
    id: "gloves_magic2",
    name: "Mage Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [], //[EHeroClass.MAGIC],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 2, valueType: "number" } }],
};

export const gloves_magic2: IItem = {
    id: "gloves_magic2",
    name: "Mage Gloves",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [], //[EHeroClass.MAGIC],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 1, valueType: "number" } }],
    nextLevel: gloves_magic2_2,
};

/////////////////////
