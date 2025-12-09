import { EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import { heraldHero } from "./mcHeroConsts";
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

//////  LVL 1 (BASIC) WEAPONS /////////////////////////////////////////

////// AXE /////////////////////////////////////////

export const axe1_2: IItem = {
    id: "axe1",
    name: "Axe(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
};

export const axe1: IItem = {
    id: "axe1",
    name: "Axe",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_AXE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    nextLevel: axe1_2,
};

////// DAGGER /////////////////////////////////////////

export const dagger1_2: IItem = {
    id: "dagger1",
    name: "Dagger(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const dagger1: IItem = {
    id: "dagger1",
    name: "Dagger",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_DAGGER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: dagger1_2,
};

////// MACE /////////////////////////////////////////

export const mace1_2: IItem = {
    id: "mace1",
    name: "Mace(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicArmor" },
    ],
};

export const mace1: IItem = {
    id: "mace1",
    name: "Mace",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_MACE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: mace1_2,
};

////// MUSICAL /////////////////////////////////////////

export const musical1_2: IItem = {
    id: "musical1",
    name: "Lute(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_LUTE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
    ],
};

export const musical1: IItem = {
    id: "musical1",
    name: "Lute",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_LUTE_1,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
    ],
    nextLevel: musical1_2,
};

////// SCEPTER /////////////////////////////////////////

export const scepter1_2: IItem = {
    id: "scepter1",
    name: "Scepter(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
};

export const scepter1: IItem = {
    id: "scepter1",
    name: "Scepter",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_SCEPTER_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    nextLevel: scepter1_2,
};

////// SHIELD /////////////////////////////////////////

export const shield1_2: IItem = {
    id: "shield1",
    name: "Shield(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_SHIELD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" },
    ],
};

export const shield1: IItem = {
    id: "shield1",
    name: "Shield",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_SHIELD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: shield1_2,
};

////// STAFF /////////////////////////////////////////

export const staff1_2: IItem = {
    id: "staff1",
    name: "Staff(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
};

export const staff1: IItem = {
    id: "staff1",
    name: "Staff",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_STAFF_1,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    nextLevel: staff1_2,
};

////// SWORD /////////////////////////////////////////

export const sword1_2: IItem = {
    id: "sword1",
    name: "Sword(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    heroClasses: [],
    image: IMAGE_ITEM_SWORD_1,
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
};

export const sword1: IItem = {
    id: "sword1",
    name: "Sword",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_SWORD_1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    nextLevel: sword1_2,
};

////// TOTEM /////////////////////////////////////////

export const totem1_2: IItem = {
    id: "totem1",
    name: "Totem(2)",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
    ],
};

export const totem1: IItem = {
    id: "totem1",
    name: "Totem",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_TOTEM_1,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicAttack" },
    ],
    nextLevel: totem1_2,
};

////// WAND /////////////////////////////////////////

export const wand1_2: IItem = {
    id: "wand1",
    name: "Wand(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
};

export const wand1: IItem = {
    id: "wand1",
    name: "Wand",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_WAND_1,
    heroClasses: [],
    weaponType: EWeaponItemType.WAND,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.BASIC_ATTACK_TWICE, value: 40, valueType: "percent" }],
    nextLevel: wand1_2,
};
