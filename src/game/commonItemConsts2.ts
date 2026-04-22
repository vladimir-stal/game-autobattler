import { EHeroClass, EItemAfterDuelBonusCondition, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, IItem } from "../types";
import { i18n } from "./consts";
import {
    IMAGE_ITEM_ARMOR_2,
    IMAGE_ITEM_BOOTS_2,
    IMAGE_ITEM_GLOVES_21,
    IMAGE_ITEM_HELM_2,
    IMAGE_ITEM_HOLY_GLOVES_1,
    IMAGE_ITEM_MAGIC_GLOVES_1,
    IMAGE_ITEM_PANTS_2,
    IMAGE_ITEM_POTION_1,
    IMAGE_ITEM_RING_ATTACK_2,
    IMAGE_ITEM_RING_HEAL_2,
    IMAGE_ITEM_RING_REGEN_2,
} from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 2 ////////////////////////////////////////////////////////////////////////////////////

// ARMOR AMULET

export const armor_amulet_3: IItem = {
    id: "armor_amulet",
    name: i18n.items.armor_amulet,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 8 }],
};

export const armor_amulet_2: IItem = {
    id: "armor_amulet",
    name: i18n.items.armor_amulet,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 4 }],
    nextLevel: armor_amulet_3,
};

export const armor_amulet: IItem = {
    id: "armor_amulet",
    name: i18n.items.armor_amulet,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 2 }],
    nextLevel: armor_amulet_2,
};

// HP AMULET

export const hp_amulet_3: IItem = {
    id: "hp_amulet",
    name: i18n.items.hp_amulet,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 8 }],
};

export const hp_amulet_2: IItem = {
    id: "hp_amulet",
    name: i18n.items.hp_amulet,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 4 }],
    nextLevel: hp_amulet_3,
};

export const hp_amulet: IItem = {
    id: "hp_amulet",
    name: i18n.items.hp_amulet,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 2 }],
    nextLevel: hp_amulet_2,
};

///////////////////// HELMET

export const hat21_3: IItem = {
    id: "hat21",
    name: i18n.items.hat21,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 26, valueType: "number", attribute: "basicArmor" }],
};

export const hat21_2: IItem = {
    id: "hat21",
    name: i18n.items.hat21,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 14, valueType: "number", attribute: "basicArmor" }],
    nextLevel: hat21_3,
};

export const hat21: IItem = {
    id: "hat21",
    name: i18n.items.hat21,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HELM_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
    nextLevel: hat21_2,
};

///////////////////// BOOTS

export const boots21_3: IItem = {
    id: "boots21",
    name: i18n.items.boots21,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 25, valueType: "number", attribute: "basicEvasionChance" }],
};

export const boots21_2: IItem = {
    id: "boots21",
    name: i18n.items.boots21,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicEvasionChance" }],
    nextLevel: boots21_3,
};

export const boots21: IItem = {
    id: "boots21",
    name: i18n.items.boots21,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_BOOTS_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicEvasionChance" }],
    nextLevel: boots21_2,
};

///////////////////// PANTS

export const pants21_3: IItem = {
    id: "pants21",
    name: i18n.items.pants21,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_PANTS_2,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 18, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor" },
    ],
};

export const pants21_2: IItem = {
    id: "pants21",
    name: i18n.items.pants21,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_PANTS_2,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: pants21_3,
};

export const pants21: IItem = {
    id: "pants21",
    name: i18n.items.pants21,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_PANTS_2,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: pants21_2,
};

///////////////////// ARMOR

export const jacket21_3: IItem = {
    id: "jacket21",
    name: i18n.items.jacket21,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 27, valueType: "number", attribute: "basicMaxHp" }],
};

export const jacket21_2: IItem = {
    id: "jacket21",
    name: i18n.items.jacket21,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 15, valueType: "number", attribute: "basicMaxHp" }],
    nextLevel: jacket21_3,
};

export const jacket21: IItem = {
    id: "jacket21",
    name: i18n.items.jacket21,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_ARMOR_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicMaxHp" }],
    nextLevel: jacket21_2,
};

// GLOVES WARRIOR /////////////////////

export const gloves_war2_3: IItem = {
    id: "gloves_war2",
    name: i18n.items.gloves_war2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 8, valueType: "number" } },
    ],
};

export const gloves_war2_2: IItem = {
    id: "gloves_war2",
    name: i18n.items.gloves_war2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 4, valueType: "number" } },
    ],
    nextLevel: gloves_war2_3,
};

export const gloves_war2: IItem = {
    id: "gloves_war2",
    name: i18n.items.gloves_war2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_GLOVES_21,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.WARRIOR, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicPhysicalPower", value: 2, valueType: "number" } },
    ],
    nextLevel: gloves_war2_2,
};

// GLOVES PRIEST /////////////////////

export const gloves_priest2_3: IItem = {
    id: "gloves_priest2",
    name: i18n.items.gloves_priest2,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 5, valueType: "number" } }],
};

export const gloves_priest2_2: IItem = {
    id: "gloves_priest2",
    name: i18n.items.gloves_priest2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 3, valueType: "number" } }],
    nextLevel: gloves_priest2_3,
};

export const gloves_priest2: IItem = {
    id: "gloves_priest2",
    name: i18n.items.gloves_priest2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_HOLY_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.PRIEST, battleBonus: { type: EItemBattleBonusType.HEAL_INCREASE, value: 2, valueType: "number" } }],
    nextLevel: gloves_priest2_2,
};

// GLOVES MAGIC /////////////////////

export const gloves_magic2_3: IItem = {
    id: "gloves_magic2",
    name: i18n.items.gloves_magic2,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_MAGIC_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 8, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 4, valueType: "number" } }],
};

export const gloves_magic2_2: IItem = {
    id: "gloves_magic2",
    name: i18n.items.gloves_magic2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_MAGIC_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 2, valueType: "number" } }],
    nextLevel: gloves_magic2_3,
};

export const gloves_magic2: IItem = {
    id: "gloves_magic2",
    name: i18n.items.gloves_magic2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_MAGIC_GLOVES_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [{ heroClass: EHeroClass.MAGIC, bonus: { type: EItemBonusType.ATTRIBUTE, attribute: "basicMagicPower", value: 1, valueType: "number" } }],
    nextLevel: gloves_magic2_2,
};

///////////////////// RINGS ///

// HEAL RING ///////////////////////

export const ring_heal2_3: IItem = {
    id: "ring_heal2",
    name: i18n.items.ring_heal2,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_HEAL_2,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 8, valueType: "number" }],
};

export const ring_heal2_2: IItem = {
    id: "ring_heal2",
    name: i18n.items.ring_heal2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_HEAL_2,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 5, valueType: "number" }],
    nextLevel: ring_heal2_3,
};

export const ring_heal2: IItem = {
    id: "ring_heal2",
    name: i18n.items.ring_heal2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_HEAL_2,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 3, valueType: "number" }],
    nextLevel: ring_heal2_2,
};

// ATTACK RING /////////////////////

export const ring_damage2_3: IItem = {
    id: "ring_damage2",
    name: i18n.items.ring_damage2,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_ATTACK_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    evolving: true,
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_BASIC_ATTACK, value: 1 },
        { type: EItemAfterDuelBonusType.STAT_BASIC_ATTACK, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
};

export const ring_damage2_2: IItem = {
    id: "ring_damage2",
    name: i18n.items.ring_damage2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_ATTACK_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    evolving: true,
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_BASIC_ATTACK, value: 1, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: ring_damage2_3,
};

export const ring_damage2: IItem = {
    id: "ring_damage2",
    name: i18n.items.ring_damage2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_ATTACK_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    nextLevel: ring_damage2_2,
};

// REGEN RING /////////////////////

export const ring_regen2_3: IItem = {
    id: "ring_regen2",
    name: i18n.items.ring_regen2,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_REGEN_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicHpRegen" }],
    evolving: true,
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1 },
        { type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
};

export const ring_regen2_2: IItem = {
    id: "ring_regen2",
    name: i18n.items.ring_regen2,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_REGEN_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicHpRegen" }],
    evolving: true,
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: ring_regen2_3,
};

export const ring_regen2: IItem = {
    id: "ring_regen2",
    name: i18n.items.ring_regen2,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    image: IMAGE_ITEM_RING_REGEN_2,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicHpRegen" }],
    nextLevel: ring_regen2_2,
};
