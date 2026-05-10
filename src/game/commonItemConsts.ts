import { EItemAfterDuelBonusCondition, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, IItem } from "../types";
import { i18n } from "./consts";
import {
    IMAGE_ITEM_ARMOR_1,
    IMAGE_ITEM_BOOTS_1,
    IMAGE_ITEM_GOLD_BAG_1,
    IMAGE_ITEM_HELM_1,
    IMAGE_ITEM_PANTS_1,
    IMAGE_ITEM_RING_ATTACK_1,
    IMAGE_ITEM_RING_EXP_1,
    IMAGE_ITEM_RING_HEAL_1,
    IMAGE_ITEM_RING_REGEN_1,
} from "./utils/load/imageLoadItems";

////// BASIC COMMON ITEMS /////////////////////////////////////////

// BASIC HAT

export const basic_hat_3: IItem = {
    id: "basic_hat",
    name: i18n.items.basic_hat,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 2, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
};

export const basic_hat_2: IItem = {
    id: "basic_hat",
    name: i18n.items.basic_hat,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: basic_hat_3,
};

export const basic_hat: IItem = {
    id: "basic_hat",
    name: i18n.items.basic_hat,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_HELM_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" }],
    nextLevel: basic_hat_2,
};

// BASIC JACKET

export const basic_jacket_3: IItem = {
    id: "basic_jacket",
    name: i18n.items.basic_jacket,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 12, valueType: "number", attribute: "basicMaxHp" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 2, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
};

export const basic_jacket_2: IItem = {
    id: "basic_jacket",
    name: i18n.items.basic_jacket,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicMaxHp" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: basic_jacket_3,
};

export const basic_jacket: IItem = {
    id: "basic_jacket",
    name: i18n.items.basic_jacket,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_ARMOR_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" }],
    nextLevel: basic_jacket_2,
};

// BASIC PANTS

export const basic_pants_3: IItem = {
    id: "basic_pants",
    name: i18n.items.basic_pants,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_PANTS_1,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicArmor" },
    ],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.STAT_MAX_HP, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON },
        { type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON },
    ],
};

export const basic_pants_2: IItem = {
    id: "basic_pants",
    name: i18n.items.basic_pants,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_PANTS_1,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicArmor" },
    ],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_ARMOR, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: basic_pants_3,
};

export const basic_pants: IItem = {
    id: "basic_pants",
    name: i18n.items.basic_pants,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_PANTS_1,
    heroClasses: [],
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicMaxHp" },
        { type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicArmor" },
    ],
    nextLevel: basic_pants_2,
};

// BASIC BOOTS

export const basic_boots_3: IItem = {
    id: "basic_boots",
    name: i18n.items.basic_boots,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 14, valueType: "number", attribute: "basicEvasionChance" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 2, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
};

export const basic_boots_2: IItem = {
    id: "basic_boots",
    name: i18n.items.basic_boots,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 7, valueType: "number", attribute: "basicEvasionChance" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_EVAS_CHANCE, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: basic_boots_3,
};

export const basic_boots: IItem = {
    id: "basic_boots",
    name: i18n.items.basic_boots,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_BOOTS_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicEvasionChance" }],
    nextLevel: basic_boots_2,
};

// BASIC RING REGEN
export const basic_ring_regen_3: IItem = {
    id: "basic_ring_regen",
    //name: "Regen ring",
    name: i18n.items.basic_ring_regen,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_REGEN_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicHpRegen" }],
};

export const basic_ring_regen_2: IItem = {
    id: "basic_ring_regen",
    //name: "Regen ring",
    name: i18n.items.basic_ring_regen,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_REGEN_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 2, valueType: "number", attribute: "basicHpRegen" }],
    nextLevel: basic_ring_regen_3,
};

export const basic_ring_regen: IItem = {
    id: "basic_ring_regen",
    //name: "Regen ring",
    name: i18n.items.basic_ring_regen,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_REGEN_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicHpRegen" }],
    nextLevel: basic_ring_regen_2,
};

// BASIC RING DAMAGE

export const basic_ring_damage_3: IItem = {
    id: "basic_ring_damage",
    name: i18n.items.basic_ring_damage,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_ATTACK_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_BASIC_ATTACK, value: 2, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
};

export const basic_ring_damage_2: IItem = {
    id: "basic_ring_damage",
    name: i18n.items.basic_ring_damage,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_ATTACK_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_BASIC_ATTACK, value: 1, isEvolving: true, condition: EItemAfterDuelBonusCondition.WON }],
    nextLevel: basic_ring_damage_3,
};

export const basic_ring_damage: IItem = {
    id: "basic_ring_damage",
    name: i18n.items.basic_ring_damage,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_ATTACK_1,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    nextLevel: basic_ring_damage_2,
};

// BASIC GOLD BAG

export const basic_gold_bag_3: IItem = {
    id: "basic_gold_bag",
    name: i18n.items.basic_gold_bag,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_GOLD_BAG_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 3 },
        { type: EItemAfterDuelBonusType.GOLD, value: 2, condition: EItemAfterDuelBonusCondition.WON },
    ],
};

export const basic_gold_bag_2: IItem = {
    id: "basic_gold_bag",
    name: i18n.items.basic_gold_bag,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_GOLD_BAG_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 2 },
        { type: EItemAfterDuelBonusType.GOLD, value: 1, condition: EItemAfterDuelBonusCondition.WON },
    ],
    nextLevel: basic_gold_bag_3,
};

export const basic_gold_bag: IItem = {
    id: "basic_gold_bag",
    name: i18n.items.basic_gold_bag,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_GOLD_BAG_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 1 }],
    nextLevel: basic_gold_bag_2,
};

// BASIC EXP BAG

export const basic_exp_bag_3: IItem = {
    id: "basic_exp_ring",
    name: i18n.items.basic_exp_ring,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_EXP_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.EXP, value: 3 },
        { type: EItemAfterDuelBonusType.EXP, value: 2, condition: EItemAfterDuelBonusCondition.IS_MOB },
    ],
};

export const basic_exp_bag_2: IItem = {
    id: "basic_exp_ring",
    name: i18n.items.basic_exp_ring,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_EXP_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.EXP, value: 2 },
        { type: EItemAfterDuelBonusType.EXP, value: 1, condition: EItemAfterDuelBonusCondition.IS_MOB },
    ],
    nextLevel: basic_exp_bag_3,
};

/**
 * @constant basic_exp_bag After duel [1/2/3]xp, mob +[1/1/2]xp
 */
export const basic_exp_bag: IItem = {
    id: "basic_exp_ring",
    name: i18n.items.basic_exp_ring,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_EXP_1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.EXP, value: 1 },
        { type: EItemAfterDuelBonusType.EXP, value: 1, condition: EItemAfterDuelBonusCondition.IS_MOB },
    ],
    nextLevel: basic_exp_bag_2,
};

// BASIC HEAL

export const basic_heal_3: IItem = {
    id: "basic_heal",
    name: i18n.items.basic_heal,
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_HEAL_1,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 5, valueType: "number" }],
};

export const basic_heal_2: IItem = {
    id: "basic_heal",
    name: i18n.items.basic_heal,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_HEAL_1,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 2, valueType: "number" }],
    nextLevel: basic_heal_3,
};

export const basic_heal: IItem = {
    id: "basic_heal",
    name: i18n.items.basic_heal,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    image: IMAGE_ITEM_RING_HEAL_1,
    heroClasses: [],
    bonuses: [],
    battleBonuses: [{ type: EItemBattleBonusType.HEAL_INCREASE, value: 1, valueType: "number" }],
    nextLevel: basic_heal_2,
};
