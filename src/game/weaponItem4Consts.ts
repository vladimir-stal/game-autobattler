import {
    EItemBattleBonusType,
    EItemBonusType,
    EItemType,
    EStatusType,
    EWeaponItemType,
    IItem,
} from "../types";
import { i18n } from "./consts";
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
    name: i18n.items.totem41, // "Toxic totem",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS, value: 60, valueType: "percent", status:EStatusType.POISON }],
};

export const totem41_2: IItem = {
    id: "totem41",
    name: i18n.items.totem41,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS, value: 40, valueType: "percent", status:EStatusType.POISON }],
    nextLevel: totem41_3,
};

export const totem41: IItem = {
    id: "totem41",
    name: i18n.items.totem41,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 4,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS, value: 30, valueType: "percent", status:EStatusType.POISON }],
    nextLevel: totem41_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 31
