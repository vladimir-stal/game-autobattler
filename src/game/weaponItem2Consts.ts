import { EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import { i18n } from "./consts";
import {
    IMAGE_ITEM_AXE_21,
    IMAGE_ITEM_AXE_22,
    IMAGE_ITEM_DAGGER_2,
    IMAGE_ITEM_DAGGER_21,
    IMAGE_ITEM_LUTE_2,
    IMAGE_ITEM_MACE_2,
    IMAGE_ITEM_MACE_21,
    IMAGE_ITEM_SCEPTER_2,
    IMAGE_ITEM_SCEPTER_21,
    IMAGE_ITEM_SHIELD_2,
    IMAGE_ITEM_SHIELD_21,
    IMAGE_ITEM_STAFF_2,
    IMAGE_ITEM_STAFF_21,
    IMAGE_ITEM_SWORD_2,
    IMAGE_ITEM_SWORD_21,
    IMAGE_ITEM_TOTEM_2,
    IMAGE_ITEM_TOTEM_21,
    IMAGE_ITEM_WAND_2,
    IMAGE_ITEM_WAND_21,
} from "./utils/load/imageLoadItems";

////////////////////////  LEVEL 2 WEAPONS /////////////////////////////////////////

////// AXES /////////////////////////////////////////

// AXE 21

export const axe21_3: IItem = {
    id: "axe21",
    name: i18n.items.axe21, //"Rending axe",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_22,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 3, valueType: "number" }],
};

export const axe21_2: IItem = {
    id: "axe21",
    name: i18n.items.axe21, //"Rending axe",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_22,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 2, valueType: "number" }],
    nextLevel: axe21_3,
};

export const axe21: IItem = {
    id: "axe21",
    name: i18n.items.axe21, //"Rending axe",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_22,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 1, valueType: "number" }],
    nextLevel: axe21_2,
};

// AXE 22

export const axe22_3: IItem = {
    id: "axe22",
    name: i18n.items.axe22, //"Mighty axe",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicPhysicalPower" },
    ],
};

export const axe22_2: IItem = {
    id: "axe22",
    name: i18n.items.axe22, //"Mighty axe",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    nextLevel: axe22_3,
};

export const axe22: IItem = {
    id: "axe22",
    name: i18n.items.axe22, //"Mighty axe",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    nextLevel: axe22_2,
};

////// DAGGERS  /////////////////////////////////////////

// DAGGER 21

export const dagger21_3: IItem = {
    id: "dagger21",
    name: i18n.items.dagger21, //"Swift dagger",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const dagger21_2: IItem = {
    id: "dagger21",
    name: i18n.items.dagger21, //"Swift dagger",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: dagger21_3,
};

export const dagger21: IItem = {
    id: "dagger21",
    name: i18n.items.dagger21, //"Swift dagger",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: dagger21_2,
};

// DAGGER 22

export const dagger22_3: IItem = {
    id: "dagger22",
    name: i18n.items.dagger22, //"Mighty dagger",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
};

export const dagger22_2: IItem = {
    id: "dagger22",
    name: i18n.items.dagger22, //"Mighty dagger",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    nextLevel: dagger22_3,
};

export const dagger22: IItem = {
    id: "dagger22",
    name: i18n.items.dagger22, //"Mighty dagger",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    nextLevel: dagger22_2,
};

////// MACES  /////////////////////////////////////////

// MACE 21

export const mace21_3: IItem = {
    id: "mace21",
    name: i18n.items.mace21, //"Shattering mace",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR, value: 3, valueType: "number" }],
};

export const mace21_2: IItem = {
    id: "mace21",
    name: i18n.items.mace21, //"Shattering mace",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR, value: 2, valueType: "number" }],
    nextLevel: mace21_3,
};

export const mace21: IItem = {
    id: "mace21",
    name: i18n.items.mace21, //"Shattering mace",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_21,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR, value: 1, valueType: "number" }],
    nextLevel: mace21_2,
};

// MACE 22

export const mace22_3: IItem = {
    id: "mace22",
    name: i18n.items.mace22, //"Purifying mace",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 4, valueType: "number" }],
};

export const mace22_2: IItem = {
    id: "mace22",
    name: i18n.items.mace22, //"Purifying mace",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 2, valueType: "number" }],
    nextLevel: mace22_3,
};

export const mace22: IItem = {
    id: "mace22",
    name: i18n.items.mace22, //"Purifying mace",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
    nextLevel: mace22_2,
};

////// SWORDS  /////////////////////////////////////////

// SWORD 21

export const sword21_3: IItem = {
    id: "sword21",
    name: i18n.items.sword21, //"Slaying sword",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 3, valueType: "number" }],
};

export const sword21_2: IItem = {
    id: "sword21",
    name: i18n.items.sword21, //"Slaying sword",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
    nextLevel: sword21_3,
};

export const sword21: IItem = {
    id: "sword21",
    name: i18n.items.sword21, //"Slaying sword",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
    nextLevel: sword21_2,
};

// SWORD 22

export const sword22_3: IItem = {
    id: "sword22",
    name: i18n.items.sword22, //"Mighty sword",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 14, valueType: "number", attribute: "basicAttack" }],
};

export const sword22_2: IItem = {
    id: "sword22",
    name: i18n.items.sword22, //"Mighty sword",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" }],
    nextLevel: sword22_3,
};

export const sword22: IItem = {
    id: "sword22",
    name: i18n.items.sword22, //"Mighty sword",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    nextLevel: sword22_2,
};

////// STAFFS  /////////////////////////////////////////

// STAFF 21

export const staff21_3: IItem = {
    id: "staff21",
    name: i18n.items.staff21, //"Summoners staff",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_2,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_SUMMON_ATTACK, value: 8, valueType: "number" }],
};

export const staff21_2: IItem = {
    id: "staff21",
    name: i18n.items.staff21, //"Summoners staff",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_2,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_SUMMON_ATTACK, value: 4, valueType: "number" }],
    nextLevel: staff21_3,
};

export const staff21: IItem = {
    id: "staff21",
    name: i18n.items.staff21, //"Summoners staff",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_2,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_SUMMON_ATTACK, value: 2, valueType: "number" }],
    nextLevel: staff21_2,
};

// STAFF 22

export const staff22_3: IItem = {
    id: "staff22",
    name: i18n.items.staff22, //"Wizards staff",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_21,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 4, valueType: "number" }],
};

export const staff22_2: IItem = {
    id: "staff22",
    name: i18n.items.staff22, //"Wizards staff",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_21,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 2, valueType: "number" }],
    nextLevel: staff22_3,
};

export const staff22: IItem = {
    id: "staff22",
    name: i18n.items.staff22, //"Wizards staff",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_21,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 1, valueType: "number" }],
    nextLevel: staff22_2,
};

////// MUSICAL  /////////////////////////////////////////

// MUSICAL 21

export const musical21_3: IItem = {
    id: "musical21",
    name: i18n.items.musical21, //"Fine lute",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_LUTE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMagicPower" },
    ],
};

export const musical21_2: IItem = {
    id: "musical21",
    name: i18n.items.musical21, //"Fine lute",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_LUTE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 9, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
    ],
    nextLevel: musical21_3,
};

export const musical21: IItem = {
    id: "musical21",
    name: i18n.items.musical21, //"Fine lute",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_LUTE_2,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
    ],
    nextLevel: musical21_2,
};

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 21

export const scepter21_3: IItem = {
    id: "scepter21",
    name: i18n.items.scepter21, //"Healers scepter",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 5, valueType: "number" }],
};

export const scepter21_2: IItem = {
    id: "scepter21",
    name: i18n.items.scepter21, //"Healers scepter",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 3, valueType: "number" }],
    nextLevel: scepter21_3,
};

export const scepter21: IItem = {
    id: "scepter21",
    name: i18n.items.scepter21, //"Healers scepter",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 1, valueType: "number" }],
    nextLevel: scepter21_2,
};

// SCEPTER 22

export const scepter22_3: IItem = {
    id: "scepter22",
    name: i18n.items.scepter22, //"Purifying scepter",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 4, valueType: "number" }],
};

export const scepter22_2: IItem = {
    id: "scepter22",
    name: i18n.items.scepter22, //"Purifying scepter",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 2, valueType: "number" }],
    nextLevel: scepter22_3,
};

export const scepter22: IItem = {
    id: "scepter22",
    name: i18n.items.scepter22, //"Purifying scepter",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
    nextLevel: scepter22_2,
};

////// SHIELDS  /////////////////////////////////////////

// SHIELD 21

export const shield21_3: IItem = {
    id: "shield21",
    name: i18n.items.shield21, //"Hard shield",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 18, valueType: "number", attribute: "basicArmor" },
    ],
};

export const shield21_2: IItem = {
    id: "shield21",
    name: i18n.items.shield21, //"Hard shield",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor" },
    ],
};

export const shield21: IItem = {
    id: "shield21",
    name: i18n.items.shield21, //"Hard shield",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_2,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: shield21_2,
};

// SHIELD 22

export const shield22_3: IItem = {
    id: "shield22",
    name: i18n.items.shield22, //"Champions shield",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" },
    ],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE, value: 5, valueType: "number" }],
};

export const shield22_2: IItem = {
    id: "shield22",
    name: i18n.items.shield22, //"Champions shield",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" },
    ],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE, value: 2, valueType: "number" }],
    nextLevel: shield22_3,
};

export const shield22: IItem = {
    id: "shield22",
    name: i18n.items.shield22, //"Champions shield",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_21,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicArmor" },
    ],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE, value: 1, valueType: "number" }],
    nextLevel: shield22_2,
};

////// TOTEMS  /////////////////////////////////////////

// TOTEM 21

export const totem21_3: IItem = {
    id: "totem21",
    name: i18n.items.totem21, //"Verdant totem",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_21,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicHpRegen" },
    ],
};

export const totem21_2: IItem = {
    id: "totem21",
    name: i18n.items.totem21, //"Verdant totem",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_21,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" },
    ],
    nextLevel: totem21_3,
};

export const totem21: IItem = {
    id: "totem21",
    name: i18n.items.totem21, //"Verdant totem",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_21,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" },
    ],
    nextLevel: totem21_2,
};

// TOTEM 22

export const totem22_3: IItem = {
    id: "totem22",
    name: i18n.items.totem22, //"Poisoners totem",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_2,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 4, valueType: "number" }],
};

export const totem22_2: IItem = {
    id: "totem22",
    name: i18n.items.totem22, //"Poisoners totem",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_2,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 2, valueType: "number" }],
    nextLevel: totem22_3,
};

export const totem22: IItem = {
    id: "totem22",
    name: i18n.items.totem22, //"Poisoners totem",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_2,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 1, valueType: "number" }],
    nextLevel: totem22_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 21

export const wand21_3: IItem = {
    id: "wand21",
    name: i18n.items.wand21, //"Swift wand",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_2,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 60, valueType: "percent" }],
};

export const wand21_2: IItem = {
    id: "wand21",
    name: i18n.items.wand21, //"Swift wand",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_2,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 50, valueType: "percent" }],
    nextLevel: wand21_3,
};

export const wand21: IItem = {
    id: "wand21",
    name: i18n.items.wand21, //"Swift wand",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_2,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: wand21_2,
};

// WAND 22

export const wand22_3: IItem = {
    id: "wand22",
    name: i18n.items.wand22, //"Wand 2.2(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_21,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 11, valueType: "number", attribute: "basicAttack" }],
};

export const wand22_2: IItem = {
    id: "wand22",
    name: i18n.items.wand22, //"Power wand",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_21,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
};

export const wand22: IItem = {
    id: "wand22",
    name: i18n.items.wand22, //"Power wand",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_21,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    nextLevel: wand22_2,
};
