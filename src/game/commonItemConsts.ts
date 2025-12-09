import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import {
    IMAGE_ITEM_ARMOR_1,
    IMAGE_ITEM_BOOTS_1,
    IMAGE_ITEM_GLOVES_21,
    IMAGE_ITEM_GOLD_BAG_1,
    IMAGE_ITEM_HELM_1,
    IMAGE_ITEM_HOLY_GLOVES_1,
    IMAGE_ITEM_PANTS_1,
    IMAGE_ITEM_RING_ATTACK_1,
    IMAGE_ITEM_RING_EXP_1,
    IMAGE_ITEM_RING_HEAL_1,
    IMAGE_ITEM_RING_REGEN_1,
} from "./utils/imageLoadUtil";

////// BASIC COMMON ITEMS /////////////////////////////////////////

// BASIC HAT

export const basic_hat_2: IItem = {
    id: "basic_hat",
    name: "Helmet(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
};

export const basic_hat: IItem = {
    id: "basic_hat",
    name: "Helmet",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    nextLevel: basic_hat_2,
};

// BASIC JACKET

export const basic_jacket_2: IItem = {
    id: "basic_jacket",
    name: "Armor(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicMaxHp" }],
};

export const basic_jacket: IItem = {
    id: "basic_jacket",
    name: "Armor",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" }],
    nextLevel: basic_jacket_2,
};

// BASIC PANTS

export const basic_pants_2: IItem = {
    id: "basic_pants",
    name: "Pants(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_PANTS_1,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicArmor" },
    ],
};

export const basic_pants: IItem = {
    id: "basic_pants",
    name: "Pants",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_PANTS_1,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: basic_pants_2,
};

// BASIC BOOTS

export const basic_boots_2: IItem = {
    id: "basic_boots",
    name: "Boots(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicEvasionChance" }],
};

export const basic_boots: IItem = {
    id: "basic_boots",
    name: "Boots",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicEvasionChance" }],
    nextLevel: basic_boots_2,
};

// BASIC RING REGEN

export const basic_ring_regen: IItem = {
    id: "basic_ring_regen",
    name: "Regen ring",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_REGEN_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" }],
};

// BASIC RING DAMAGE

export const basic_ring_damage: IItem = {
    id: "basic_ring_damage",
    name: "Damage ring",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_ATTACK_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
};

// BASIC GOLD BAG

export const basic_gold_bag: IItem = {
    id: "basic_gold_bag",
    name: "Gold bag",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_GOLD_BAG_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 1 }],
};

// BASIC EXP BAG

export const basic_exp_bag: IItem = {
    id: "basic_exp_bag",
    name: "Exp ring",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_EXP_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.EXP, value: 1 }],
};

// BASIC HEAL

export const basic_heal_2: IItem = {
    id: "basic_heal",
    name: "Heal ring(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_HEAL_1,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 2, valueType: "number" }],
};

export const basic_heal: IItem = {
    id: "basic_heal",
    name: "Heal ring",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_HEAL_1,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 1, valueType: "number" }],
    nextLevel: basic_heal_2,
};

////// COMMON ITEMS LVL 2 /////////////////////////////////////////

export const hat21: IItem = {
    id: "hat21",
    name: "Helmet 2.1",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
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
};

export const jacket21: IItem = {
    id: "jacket21",
    name: "Armor 2.1",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMaxHp" }],
};

// GLOVES WARRIOR

export const gloves_war2_2: IItem = {
    id: "gloves_war2",
    name: "Warrior Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [EHeroClass.WARRIOR],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 3, valueType: "number" } },
    ],
};

export const gloves_war2: IItem = {
    id: "gloves_war2",
    name: "Warrior Gloves",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [EHeroClass.WARRIOR],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 2, valueType: "number" } },
    ],
    nextLevel: gloves_war2_2,
};

// GLOVES PRIEST

export const gloves_priest2_2: IItem = {
    id: "gloves_priest2",
    name: "Priest Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [EHeroClass.PRIEST],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 1, valueType: "number" } }],
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

// GLOVES MAGIC

export const gloves_magic2_2: IItem = {
    id: "gloves_magic2",
    name: "Mage Gloves(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [EHeroClass.MAGIC],
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
    heroClasses: [EHeroClass.MAGIC],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 1, valueType: "number" } }],
    nextLevel: gloves_magic2_2,
};
