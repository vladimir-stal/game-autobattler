import {
    EItemBattleBonusType,
    EItemBonusType,
    EItemType,
    EStatusType,
    EWeaponItemType,
    IItem,
} from "../types";
import { i18n } from "./consts";
import {
    IMAGE_ITEM_DAGGER_5,
    IMAGE_ITEM_MUSIC_5,
    IMAGE_ITEM_STAFF_5,
    IMAGE_ITEM_TOTEM_5,
    IMAGE_ITEM_WAND_5,
} from "./utils/load/imageLoadItems";

////////////////////////  LEVEL 4 WEAPONS /////////////////////////////////////////

////// MAGIC BOOKS /////////////////////////////////////////

////// AXES /////////////////////////////////////////

// AXE 31

////// DAGGERS  /////////////////////////////////////////

// DAGGER +1 BA - gives two basic attacks with no damage penalty

export const dagger5_ba: IItem = {
    id: "dagger5_ba",
    name: i18n.items.dagger5, // "The Flurry",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    image: IMAGE_ITEM_DAGGER_5,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 100, valueType: "percent" }],
};

////// MACES  /////////////////////////////////////////

// MACE 31

////// STAFFS  /////////////////////////////////////////

export const staff5MagicCrit: IItem = {
    id: "staff5MagicCrit",
    name: i18n.items.staff5, //"The Volcano",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicMagicPower" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_WITH_MAGIC, value: 100, valueType: "percent" }],
    image: IMAGE_ITEM_STAFF_5,
};

////// MUSICAL  /////////////////////////////////////////

export const music5AddBuffTarget: IItem = {
    id: "music5AddBuffTarget",
    name: i18n.items.music5, //"The Chorus",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.ADDITIONAL_BUFF_TARGET, value: 1, valueType: "number" }],
    image: IMAGE_ITEM_MUSIC_5,
};

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 31

////// SHIELDS  /////////////////////////////////////////

// SHIELD 31

////// SWORDS  /////////////////////////////////////////

////// TOTEMS  /////////////////////////////////////////

// DEAL % OF SELF CURRENT HP

export const totem5HptoDmg: IItem = {
    id: "totem5HptoDmg",
    name: i18n.items.totem5, //"The Titan",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 30, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_TOTAL_DAMAGE_FROM_HP, value: 50, valueType: "percent" }],
    image: IMAGE_ITEM_TOTEM_5,
};

////// WANDS  /////////////////////////////////////////

export const wand5ShockOnBA: IItem = {
    id: "wand5ShockOnBA",
    name: i18n.items.wand5, //"The Thunder",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK, value: 1, valueType: "number", status: EStatusType.SHOCK }],
    image: IMAGE_ITEM_WAND_5,
};
