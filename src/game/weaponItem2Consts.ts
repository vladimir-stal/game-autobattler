import { EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import {
    IMAGE_ITEM_AXE_1,
    IMAGE_ITEM_DAGGER_1,
    IMAGE_ITEM_LUTE_1,
    IMAGE_ITEM_MACE_1,
    IMAGE_ITEM_SCEPTER_1,
    IMAGE_ITEM_SHIELD_1,
    IMAGE_ITEM_STAFF_1,
    IMAGE_ITEM_SWORD_1,
    IMAGE_ITEM_TOTEM_1,
    IMAGE_ITEM_WAND_1,
} from "./utils/imageLoadUtil";

// LEVEL 2

////// AXES /////////////////////////////////////////

// AXE 21

export const axe21_3: IItem = {
    id: "axe21",
    name: "Axe 2.1(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 4,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 3, valueType: "number" }],
};

export const axe21_2: IItem = {
    id: "axe21",
    name: "Axe 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 2, valueType: "number" }],
    nextLevel: axe21_3,
};

export const axe21: IItem = {
    id: "axe21",
    name: "Axe 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 1, valueType: "number" }],
    nextLevel: axe21_2,
};

// AXE 22

export const axe22_2: IItem = {
    id: "axe22",
    name: "Axe 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 1, valueType: "number" }],
};

export const axe22: IItem = {
    id: "axe22",
    name: "Axe 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING, value: 1, valueType: "number" }],
    nextLevel: axe22_2,
};

////// DAGGERS  /////////////////////////////////////////

// DAGGER 21

export const dagger21_2: IItem = {
    id: "dagger21",
    name: "Dagger 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const dagger21: IItem = {
    id: "dagger21",
    name: "Dagger 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: dagger21_2,
};

// DAGGER 22

export const dagger22_2: IItem = {
    id: "dagger22",
    name: "Dagger 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const dagger22: IItem = {
    id: "dagger22",
    name: "Dagger 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: dagger22_2,
};

////// MACES  /////////////////////////////////////////

// MACE 21

export const mace21_2: IItem = {
    id: "mace21",
    name: "Mace 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR, value: 1, valueType: "number" }],
};

export const mace21: IItem = {
    id: "mace21",
    name: "Mace 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR, value: 1, valueType: "number" }],
    nextLevel: mace21_2,
};

// MACE 22

export const mace22_2: IItem = {
    id: "mace22",
    name: "Mace 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
};

export const mace22: IItem = {
    id: "mace22",
    name: "Mace 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
    nextLevel: mace22_2,
};

////// SWORDS  /////////////////////////////////////////

// SWORD 21

export const sword21_2: IItem = {
    id: "sword21",
    name: "Sword 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
};

export const sword21: IItem = {
    id: "sword21",
    name: "Sword 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
    nextLevel: sword21_2,
};

// SWORD 22

export const sword22_2: IItem = {
    id: "sword22",
    name: "Sword 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
};

export const sword22: IItem = {
    id: "sword22",
    name: "Sword 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SWORD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    //battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_HP, value: 1, valueType: "number" }],
    nextLevel: sword22_2,
};

////// STAFFS  /////////////////////////////////////////

// STAFF 21

export const staff21_2: IItem = {
    id: "staff21",
    name: "Staff 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_SUMMON_ATTACK, value: 1, valueType: "number" }],
};

export const staff21: IItem = {
    id: "staff21",
    name: "Staff 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_SUMMON_ATTACK, value: 1, valueType: "number" }],
    nextLevel: staff21_2,
};

// STAFF 22

export const staff22_2: IItem = {
    id: "staff22",
    name: "Staff 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 1, valueType: "number" }],
};

export const staff22: IItem = {
    id: "staff22",
    name: "Staff 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_MAGIC_DAMAGE, value: 1, valueType: "number" }],
    nextLevel: staff22_2,
};

////// MUSICAL  /////////////////////////////////////////

// MUSICAL 21

export const musical21_2: IItem = {
    id: "musical21",
    name: "Lute 2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_LUTE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
    ],
};

export const musical21: IItem = {
    id: "musical21",
    name: "Lute 2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_LUTE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
    ],
    nextLevel: musical21_2,
};

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 21

export const scepter21_2: IItem = {
    id: "scepter21",
    name: "Scepter 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 2, valueType: "number" }],
};

export const scepter21: IItem = {
    id: "scepter21",
    name: "Scepter 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 1, valueType: "number" }],
    nextLevel: scepter21_2,
};

// SCEPTER 22

export const scepter22_2: IItem = {
    id: "scepter22",
    name: "Scepter 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
};

export const scepter22: IItem = {
    id: "scepter22",
    name: "Scepter 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON, value: 1, valueType: "number" }],
    nextLevel: scepter22_2,
};

////// SHIELDS  /////////////////////////////////////////

// SHIELD 21

export const shield21_2: IItem = {
    id: "shield21",
    name: "Shield 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" },
    ],
};

export const shield21: IItem = {
    id: "shield21",
    name: "Shield 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: shield21_2,
};

// SHIELD 22

export const shield22_2: IItem = {
    id: "shield22",
    name: "Shield 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" },
    ],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE, value: 1, valueType: "number" }],
};

export const shield22: IItem = {
    id: "shield22",
    name: "Shield 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_1,
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

export const totem21_2: IItem = {
    id: "totem21",
    name: "Totem 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" },
    ],
};

export const totem21: IItem = {
    id: "totem21",
    name: "Totem 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" },
    ],
    nextLevel: totem21_2,
};

// TOTEM 22

export const totem22_2: IItem = {
    id: "totem22",
    name: "Totem 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 2, valueType: "number" }],
};

export const totem22: IItem = {
    id: "totem22",
    name: "Totem 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED, value: 1, valueType: "number" }],
    nextLevel: totem22_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 21

export const wand21_2: IItem = {
    id: "wand21",
    name: "Wand 2.1(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const wand21: IItem = {
    id: "wand21",
    name: "Wand 2.1",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: wand21_2,
};

// WAND 22

export const wand22_2: IItem = {
    id: "wand22",
    name: "Wand 2.2(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
};

export const wand22: IItem = {
    id: "wand22",
    name: "Wand 2.2",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    nextLevel: wand22_2,
};
