import {
    EHeroClass,
    EItemAfterDuelBonusCondition,
    EItemAfterDuelBonusType,
    EItemBattleBonusType,
    EItemBonusType,
    EItemType,
    EWeaponItemType,
    IItem,
} from "../types";
import { IMAGE_ITEM_TOTEM_3 } from "./utils/load/imageLoadItems";

////////////////////////  LEVEL 4 WEAPONS /////////////////////////////////////////

////// MAGIC BOOKS /////////////////////////////////////////

////// AXES /////////////////////////////////////////

// AXE 31

////// DAGGERS  /////////////////////////////////////////

// DAGGER 31

////// MACES  /////////////////////////////////////////

// MACE 31

////// SWORDS  /////////////////////////////////////////

// SWORD 31

////// STAFFS  /////////////////////////////////////////

// STAFF 31

////// MUSICAL  /////////////////////////////////////////

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 31

////// SHIELDS  /////////////////////////////////////////

// SHIELD 31

////// TOTEMS  /////////////////////////////////////////

// TOTEM 41

export const totem41_3: IItem = {
    id: "totem41",
    name: "Totem 4.1(2)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 60, valueType: "percent" }],
};

export const totem41_2: IItem = {
    id: "totem41",
    name: "Totem 4.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 40, valueType: "percent" }],
    nextLevel: totem41_3,
};

export const totem41: IItem = {
    id: "totem41",
    name: "Totem 4.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 30, valueType: "percent" }],
    nextLevel: totem41_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 31
