import { EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import {
    IMAGE_ITEM_AXE_1,
    IMAGE_ITEM_AXE_3,
    IMAGE_ITEM_DAGGER_1,
    IMAGE_ITEM_DAGGER_3,
    IMAGE_ITEM_LUTE_1,
    IMAGE_ITEM_MACE_1,
    IMAGE_ITEM_MACE_3,
    IMAGE_ITEM_SCEPTER_1,
    IMAGE_ITEM_SCEPTER_3,
    IMAGE_ITEM_SHIELD_1,
    IMAGE_ITEM_SHIELD_3,
    IMAGE_ITEM_STAFF_1,
    IMAGE_ITEM_STAFF_3,
    IMAGE_ITEM_SWORD_1,
    IMAGE_ITEM_SWORD_3,
    IMAGE_ITEM_TOTEM_1,
    IMAGE_ITEM_TOTEM_3,
    IMAGE_ITEM_WAND_1,
    IMAGE_ITEM_WAND_3,
} from "./utils/imageLoadUtil";

// LEVEL 2

////// AXES /////////////////////////////////////////

// AXE 31

export const axe31_3: IItem = {
    id: "axe31",
    name: "Axe 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR, value: 60, valueType: "percent" }],
};

export const axe31_2: IItem = {
    id: "axe31",
    name: "Axe 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 9, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR, value: 50, valueType: "percent" }],
    nextLevel: axe31_3,
};

export const axe31: IItem = {
    id: "axe31",
    name: "Axe 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR, value: 40, valueType: "percent" }],
    nextLevel: axe31_2,
};

////// DAGGERS  /////////////////////////////////////////

// DAGGER 31

export const dagger31_3: IItem = {
    id: "dagger31",
    name: "Dagger 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 16, valueType: "number", attribute: "basicEvasionChance" },
    ],
};

export const dagger31_2: IItem = {
    id: "dagger31",
    name: "Dagger 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicEvasionChance" },
    ],
    nextLevel: dagger31_3,
};

export const dagger31: IItem = {
    id: "dagger31",
    name: "Dagger 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicEvasionChance" },
    ],
    nextLevel: dagger31_2,
};

////// MACES  /////////////////////////////////////////

// MACE 31

export const mace31_3: IItem = {
    id: "mace31",
    name: "Mace 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1 }],
};

export const mace31_2: IItem = {
    id: "mace31",
    name: "Mace 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1 }],
    nextLevel: mace31_3,
};

export const mace31: IItem = {
    id: "mace31",
    name: "Mace 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1 }],
    nextLevel: mace31_2,
};

////// SWORDS  /////////////////////////////////////////

// SWORD 31

export const sword31_3: IItem = {
    id: "sword31",
    name: "Sword 3.1*(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicPhysicalPower" },
    ],
};

export const sword31_2: IItem = {
    id: "sword31",
    name: "Sword 3.1*(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    nextLevel: sword31_3,
};

export const sword31: IItem = {
    id: "sword31",
    name: "Sword 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    nextLevel: sword31_2,
};

////// STAFFS  /////////////////////////////////////////

// STAFF 31

export const staff31_3: IItem = {
    id: "staff31",
    name: "Staff 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_3,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 3, valueType: "number" }],
};

export const staff31_2: IItem = {
    id: "staff31",
    name: "Staff 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_3,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 2, valueType: "number" }],
    nextLevel: staff31_3,
};

export const staff31: IItem = {
    id: "staff31",
    name: "Staff 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_3,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 1, valueType: "number" }],
    nextLevel: staff31_2,
};

////// MUSICAL  /////////////////////////////////////////

//TODO: add musical lvl 3

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 31

export const scepter31_3: IItem = {
    id: "scepter31",
    name: "Scepter 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicMagicPower" },
    ],
};

export const scepter31_2: IItem = {
    id: "scepter31",
    name: "Scepter 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMagicPower" },
    ],
    nextLevel: scepter31_3,
};

export const scepter31: IItem = {
    id: "scepter31",
    name: "Scepter 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMagicPower" },
    ],
    nextLevel: scepter31_2,
};

////// SHIELDS  /////////////////////////////////////////

// SHIELD 31

export const shield31_3: IItem = {
    id: "shield31",
    name: "Shield 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 20, valueType: "number", attribute: "basicArmor" }],
};

export const shield31_2: IItem = {
    id: "shield31",
    name: "Shield 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicArmor" }],
    nextLevel: shield31_3,
};

export const shield31: IItem = {
    id: "shield31",
    name: "Shield 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicArmor" }],
    nextLevel: shield31_2,
};

////// TOTEMS  /////////////////////////////////////////

// TOTEM 31

export const totem31_3: IItem = {
    id: "totem31",
    name: "Totem 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.TOTEM_INCREASE_VALUE, value: 3, valueType: "number" }],
};

export const totem31_2: IItem = {
    id: "totem31",
    name: "Totem 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.TOTEM_INCREASE_VALUE, value: 2, valueType: "number" }],
    nextLevel: totem31_3,
};

export const totem31: IItem = {
    id: "totem31",
    name: "Totem 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.TOTEM_INCREASE_VALUE, value: 1, valueType: "number" }],
    nextLevel: totem31_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 31

export const wand31_3: IItem = {
    id: "wand31",
    name: "Wand 3.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_WAND_3,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 8, valueType: "number" }],
};

export const wand31_2: IItem = {
    id: "wand31",
    name: "Wand 3.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_WAND_3,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 5, valueType: "number" }],
    nextLevel: wand31_3,
};

export const wand31: IItem = {
    id: "wand31",
    name: "Wand 3.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_WAND_3,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 3, valueType: "number" }],
    nextLevel: wand31_2,
};
