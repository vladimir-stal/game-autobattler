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
import { i18n } from "./consts";
import {
    IMAGE_ITEM_AXE_3,
    IMAGE_ITEM_AXE_RED,
    IMAGE_ITEM_BOOK_MAGIC,
    IMAGE_ITEM_DAGGER_3,
    IMAGE_ITEM_DAGGER_31,
    IMAGE_ITEM_LUTE_1,
    IMAGE_ITEM_MACE_3,
    IMAGE_ITEM_MUSIC_31,
    IMAGE_ITEM_MUSIC_32,
    IMAGE_ITEM_SCEPTER_3,
    IMAGE_ITEM_SHIELD_3,
    IMAGE_ITEM_SHIELD_31,
    IMAGE_ITEM_SPIRIT_SPEAR,
    IMAGE_ITEM_STAFF_31,
    IMAGE_ITEM_SWORD_3,
    IMAGE_ITEM_TOTEM_3,
    IMAGE_ITEM_TOTEM_31,
    IMAGE_ITEM_WAND_3,
} from "./utils/load/imageLoadItems";

////////////////////////  LEVEL 3 WEAPONS /////////////////////////////////////////

////// MAGIC BOOKS /////////////////////////////////////////

export const magicBook31_3: IItem = {
    id: "magicBook31",
    name: i18n.items.magicBook31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_BOOK_MAGIC,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.SUMMON, EHeroClass.DARK, EHeroClass.PRIEST],
    weaponType: EWeaponItemType.BOOK,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMagicPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MP, value: 4 }],
};

export const magicBook31_2: IItem = {
    id: "magicBook31",
    name: i18n.items.magicBook31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_BOOK_MAGIC,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.SUMMON, EHeroClass.DARK, EHeroClass.PRIEST],
    weaponType: EWeaponItemType.BOOK,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMagicPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MP, value: 2 }],
    nextLevel: magicBook31_3,
};

export const magicBook31: IItem = {
    id: "magicBook31",
    name: i18n.items.magicBook31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_BOOK_MAGIC,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.SUMMON, EHeroClass.DARK, EHeroClass.PRIEST],
    weaponType: EWeaponItemType.BOOK,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMagicPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MP, value: 1 }],
    nextLevel: magicBook31_2,
};

////// SPEARS /////////////////////////////////////////

export const magicSpear31_3: IItem = {
    id: "magicSpear31",
    name: i18n.items.magicSpear31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SPIRIT_SPEAR,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER, EHeroClass.WILD, EHeroClass.MASTER],
    weaponType: EWeaponItemType.SPEAR,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 4 }],
};

export const magicSpear31_2: IItem = {
    id: "magicSpear31",
    name: i18n.items.magicSpear31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SPIRIT_SPEAR,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER, EHeroClass.WILD, EHeroClass.MASTER],
    weaponType: EWeaponItemType.SPEAR,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 2 }],
    nextLevel: magicSpear31_3,
};

export const magicSpear31: IItem = {
    id: "magicSpear31",
    name: i18n.items.magicSpear31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SPIRIT_SPEAR,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER, EHeroClass.WILD, EHeroClass.MASTER],
    weaponType: EWeaponItemType.SPEAR,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 1 }],
    nextLevel: magicSpear31_2,
};

////// AXES /////////////////////////////////////////

// AXE 31

export const axe31_3: IItem = {
    id: "axe31",
    name: i18n.items.axe31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR, value: 60, valueType: "percent" }],
};

export const axe31_2: IItem = {
    id: "axe31",
    name: i18n.items.axe31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR, value: 50, valueType: "percent" }],
    nextLevel: axe31_3,
};

export const axe31: IItem = {
    id: "axe31",
    name: i18n.items.axe31,
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

// AXE 32

export const axe32_3: IItem = {
    id: "axe32",
    name: i18n.items.axe32,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_RED,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 9, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 3 },
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 2, condition: EItemAfterDuelBonusCondition.WON },
    ],
};

export const axe32_2: IItem = {
    id: "axe32",
    name: i18n.items.axe32,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_RED,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 2 },
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
    nextLevel: axe32_3,
};

export const axe32: IItem = {
    id: "axe32",
    name: i18n.items.axe32,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_AXE_RED,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 1 },
        { type: EItemAfterDuelBonusType.STAT_CRIT_CHANCE, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
    nextLevel: axe32_2,
};

////// DAGGERS  /////////////////////////////////////////

// DAGGER 31

export const dagger31_3: IItem = {
    id: "dagger31",
    name: i18n.items.dagger31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_31,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 16, valueType: "number", attribute: "basicEvasionChance" },
    ],
};

export const dagger31_2: IItem = {
    id: "dagger31",
    name: i18n.items.dagger31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_31,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicEvasionChance" },
    ],
    nextLevel: dagger31_3,
};

export const dagger31: IItem = {
    id: "dagger31",
    name: i18n.items.dagger31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_31,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicEvasionChance" },
    ],
    nextLevel: dagger31_2,
};

// DAGGER 32

export const dagger32_3: IItem = {
    id: "dagger32",
    name: i18n.items.dagger32,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 3, isEvolving: true }],
};

export const dagger32_2: IItem = {
    id: "dagger32",
    name: i18n.items.dagger32,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 2, isEvolving: true }],
    nextLevel: dagger32_3,
};

export const dagger32: IItem = {
    id: "dagger32",
    name: i18n.items.dagger32,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_DAGGER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicPhysicalPower" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_PP, value: 1, isEvolving: true }],
    nextLevel: dagger32_2,
};

////// MACES  /////////////////////////////////////////

// MACE 31

export const mace31_3: IItem = {
    id: "mace31",
    name: i18n.items.mace31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicPhysicalPower" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicMagicPower" },
    ],
};

export const mace31_2: IItem = {
    id: "mace31",
    name: i18n.items.mace31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicPhysicalPower" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicMagicPower" },
    ],
    nextLevel: mace31_3,
};

export const mace31: IItem = {
    id: "mace31",
    name: i18n.items.mace31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_MACE_3,
    heroClasses: [],
    weaponType: EWeaponItemType.MACE,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicPhysicalPower" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMagicPower" },
    ],

    nextLevel: mace31_2,
};

////// SWORDS  /////////////////////////////////////////

// SWORD 31

export const sword31_3: IItem = {
    id: "sword31",
    name: i18n.items.sword31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicPhysicalPower" },
    ],
};

export const sword31_2: IItem = {
    id: "sword31",
    name: i18n.items.sword31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    nextLevel: sword31_3,
};

export const sword31: IItem = {
    id: "sword31",
    name: i18n.items.sword31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SWORD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicPhysicalPower" },
    ],
    nextLevel: sword31_2,
};

////// STAFFS  /////////////////////////////////////////

// STAFF 31

export const staff31_3: IItem = {
    id: "staff31",
    name: i18n.items.staff31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_31,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 8, valueType: "number" }],
};

export const staff31_2: IItem = {
    id: "staff31",
    name: i18n.items.staff31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_31,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 4, valueType: "number" }],
    nextLevel: staff31_3,
};

export const staff31: IItem = {
    id: "staff31",
    name: i18n.items.staff31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_STAFF_31,
    heroClasses: [],
    weaponType: EWeaponItemType.STAFF,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE, value: 2, valueType: "number" }],
    nextLevel: staff31_2,
};

////// MUSICAL  /////////////////////////////////////////

// MUSICAL 31

export const musical31_3: IItem = {
    id: "musical31",
    name: i18n.items.musical31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_31,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicMaxHp" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 3 }],
};

export const musical31_2: IItem = {
    id: "musical31",
    name: i18n.items.musical31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_31,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicMaxHp" }],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 2 },
        { type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
    nextLevel: musical31_3,
};

export const musical31: IItem = {
    id: "musical31",
    name: i18n.items.musical31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_31,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 2 }],
    nextLevel: musical31_2,
};

// MUSICAL 32

export const musical32_3: IItem = {
    id: "musical32",
    name: i18n.items.musical32,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_32,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 26, valueType: "number", attribute: "basicMagicPower" }],
};

export const musical32_2: IItem = {
    id: "musical32",
    name: i18n.items.musical32,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_32,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 14, valueType: "number", attribute: "basicMagicPower" }],
    nextLevel: musical32_3,
};

export const musical32: IItem = {
    id: "musical32",
    name: i18n.items.musical32,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_MUSIC_32,
    heroClasses: [],
    weaponType: EWeaponItemType.MUSICAL,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicMagicPower" }],
    nextLevel: musical32_2,
};

////// SCEPTERS  /////////////////////////////////////////

// SCEPTER 31

export const scepter31_3: IItem = {
    id: "scepter31",
    name: i18n.items.scepter31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicMagicPower" },
    ],
};

export const scepter31_2: IItem = {
    id: "scepter31",
    name: i18n.items.scepter31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicMagicPower" },
    ],
    nextLevel: scepter31_3,
};

export const scepter31: IItem = {
    id: "scepter31",
    name: i18n.items.scepter31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SCEPTER_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SCEPTER,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMagicPower" },
    ],
    nextLevel: scepter31_2,
};

////// SHIELDS  /////////////////////////////////////////

// SHIELD 31

export const shield31_3: IItem = {
    id: "shield31",
    name: i18n.items.shield31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 22, valueType: "number", attribute: "basicArmor" }],
};

export const shield31_2: IItem = {
    id: "shield31",
    name: i18n.items.shield31,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 16, valueType: "number", attribute: "basicArmor" }],
    nextLevel: shield31_3,
};

export const shield31: IItem = {
    id: "shield31",
    name: i18n.items.shield31,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_3,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicArmor" }],
    nextLevel: shield31_2,
};

// SHIELD 32

export const shield32_3: IItem = {
    id: "shield32",
    name: i18n.items.shield32,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_31,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 5 }],
};

export const shield32_2: IItem = {
    id: "shield32",
    name: i18n.items.shield32,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_31,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 3 }],
    nextLevel: shield32_3,
};

export const shield32: IItem = {
    id: "shield32",
    name: i18n.items.shield32,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_SHIELD_31,
    heroClasses: [],
    weaponType: EWeaponItemType.SHIELD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 2 }],
    nextLevel: shield32_2,
};

////// TOTEMS  /////////////////////////////////////////

// TOTEM 31

export const totem31_3: IItem = {
    id: "totem31",
    name: i18n.items.totem31,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_3,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.TOTEM_INCREASE_VALUE, value: 4, valueType: "number" }],
};

export const totem31_2: IItem = {
    id: "totem31",
    name: i18n.items.totem31,
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
    name: i18n.items.totem31,
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

// TOTEM 32

export const totem32_3: IItem = {
    id: "totem32",
    name: i18n.items.totem32,
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_31,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 3 }],
};

export const totem32_2: IItem = {
    id: "totem32",
    name: i18n.items.totem32,
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_31,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 2 }],
    nextLevel: totem32_3,
};

export const totem32: IItem = {
    id: "totem32",
    name: i18n.items.totem32,
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 3,
    image: IMAGE_ITEM_TOTEM_31,
    heroClasses: [],
    weaponType: EWeaponItemType.TOTEM,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1 }],
    nextLevel: totem32_2,
};

////// WANDS  /////////////////////////////////////////

// WAND 31

export const wand31_3: IItem = {
    id: "wand31",
    name: i18n.items.wand31,
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
    name: i18n.items.wand31,
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
    name: i18n.items.wand31,
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
