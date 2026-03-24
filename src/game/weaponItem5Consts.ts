import {
    EHeroClass,
    EItemAfterDuelBonusCondition,
    EItemAfterDuelBonusType,
    EItemBattleBonusType,
    EItemBonusType,
    EItemType,
    EStatusType,
    EWeaponItemType,
    IItem,
} from "../types";
import {
    IMAGE_ITEM_AXE_3,
    IMAGE_ITEM_BOOK_MAGIC,
    IMAGE_ITEM_DAGGER_1,
    IMAGE_ITEM_DAGGER_3,
    IMAGE_ITEM_LUTE_1,
    IMAGE_ITEM_MACE_3,
    IMAGE_ITEM_POTION_1,
    IMAGE_ITEM_SCEPTER_3,
    IMAGE_ITEM_SHIELD_3,
    IMAGE_ITEM_STAFF_3,
    IMAGE_ITEM_SWORD_3,
    IMAGE_ITEM_TOTEM_3,
    IMAGE_ITEM_WAND_3,
} from "./utils/imageLoadUtil";

////////////////////////  LEVEL 4 WEAPONS /////////////////////////////////////////

////// MAGIC BOOKS /////////////////////////////////////////

////// AXES /////////////////////////////////////////

// AXE 31

////// DAGGERS  /////////////////////////////////////////

// DAGGER +1 BA - gives two basic attacks with no damage penalty

export const dagger5_ba: IItem = {
    id: "dagger5_ba",
    name: "furry",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_1,
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
    name: "Crit Staff",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicMagicPower" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_WITH_MAGIC, value: 100, valueType: "percent" }],
    image: IMAGE_ITEM_POTION_1,
};

////// MUSICAL  /////////////////////////////////////////

export const music5AddBuffTarget: IItem = {
    id: "music5AddBuffTarget",
    name: "Double buff",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.ADDITIONAL_BUFF_TARGET, value: 1, valueType: "number" }],
    image: IMAGE_ITEM_POTION_1,
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
    name: "Totem of wealth",
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
    image: IMAGE_ITEM_POTION_1,
};

////// WANDS  /////////////////////////////////////////

export const wand5ShockOnBA: IItem = {
    id: "wand5ShockOnBA",
    name: "Shock wand",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 5,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK, value: 1, valueType: "number", status: EStatusType.SHOCK }],
    image: IMAGE_ITEM_POTION_1,
};
