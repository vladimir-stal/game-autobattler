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
    IMAGE_ITEM_COIN,
    IMAGE_ITEM_GOBLIN_BONE_DAGGER,
    IMAGE_ITEM_GOBLIN_GOLD_COIN,
    IMAGE_ITEM_GOBLIN_SILVER_COIN,
    IMAGE_ITEM_PEASANTS_PITCHFORK,
    IMAGE_ITEM_REGEN_MANTLE,
    IMAGE_ITEM_SPIRIT_ARMOR,
    IMAGE_ITEM_SPIRIT_SPEAR,
} from "./utils/load/imageLoadItems";

////// MOB ITEMS /////////////////////////////////////////

// COMMON

export const itemCoin3: IItem = {
    id: "coin",
    name: "Монета(3)",
    type: EItemType.COMMON,
    level: 10,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [],
    image: IMAGE_ITEM_COIN,
};

export const itemCoin2: IItem = {
    id: "coin",
    name: "Монета(2)",
    type: EItemType.COMMON,
    level: 3,
    priceLevel: 2,
    heroClasses: [],
    bonuses: [],
    image: IMAGE_ITEM_COIN,
    nextLevel: itemCoin3,
};

export const itemCoin: IItem = {
    id: "coin",
    name: "Монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    image: IMAGE_ITEM_COIN,
    nextLevel: itemCoin2,
};

// PEASANT

// PEASANT PITCHFORK

export const itemPeasantPitchfork_3: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork(3)",
    type: EItemType.WEAPON,
    level: 3,
    priceLevel: 3,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: -4, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 25, valueType: "number", attribute: "basicCritChance" },
        { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicMaxHp" },
    ],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
};

export const itemPeasantPitchfork_2: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [
        { type: EItemBonusType.ATTRIBUTE, value: -2, valueType: "number", attribute: "basicAttack" },
        { type: EItemBonusType.ATTRIBUTE, value: 20, valueType: "number", attribute: "basicCritChance" },
    ],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
    nextLevel: itemPeasantPitchfork_3,
};

export const itemPeasantPitchfork: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.SWORD,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
    nextLevel: itemPeasantPitchfork_2,
};

// GOBLIN

// GOBLIN SILVER COIN

export const itemGoblinSilverCoin_2: IItem = {
    id: "goblin_silver_coin",
    name: "Серебряная монета(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 2,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 2, condition: EItemAfterDuelBonusCondition.WON },
        { type: EItemAfterDuelBonusType.EXP, value: 3, condition: EItemAfterDuelBonusCondition.LOST },
    ],
    image: IMAGE_ITEM_GOBLIN_SILVER_COIN,
};

export const itemGoblinSilverCoin: IItem = {
    id: "goblin_silver_coin",
    name: "Серебряная монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 2,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 1, condition: EItemAfterDuelBonusCondition.WON },
        { type: EItemAfterDuelBonusType.EXP, value: 2, condition: EItemAfterDuelBonusCondition.LOST },
    ],
    image: IMAGE_ITEM_GOBLIN_SILVER_COIN,
    nextLevel: itemGoblinSilverCoin_2,
};

// GOBLIN GOLD COIN

export const itemGoblinGoldCoin_2: IItem = {
    id: "goblin_gold_coin",
    name: "Золотая монета(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 2 },
        { type: EItemAfterDuelBonusType.EXP, value: 2, condition: EItemAfterDuelBonusCondition.LOST },
    ],
    image: IMAGE_ITEM_GOBLIN_GOLD_COIN,
};

export const itemGoblinGoldCoin: IItem = {
    id: "goblin_gold_coin",
    name: "Золотая монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 3,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [
        { type: EItemAfterDuelBonusType.GOLD, value: 1 },
        { type: EItemAfterDuelBonusType.EXP, value: 1, condition: EItemAfterDuelBonusCondition.LOST },
    ],
    image: IMAGE_ITEM_GOBLIN_GOLD_COIN,
    nextLevel: itemGoblinGoldCoin_2,
};

// GOBLIN BONE DAGGER

export const itemGoblinBoneDagger_2: IItem = {
    id: "goblinBoneDagger",
    name: "Bone dagger(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    battleBonuses: [{ type: EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK, value: 1, valueType: "number", status: EStatusType.POISON }],
    heroClassBonuses: [
        {
            heroClass: EHeroClass.MOB,
            bonus: {
                type: EItemBonusType.ATTRIBUTE,
                value: 1,
                valueType: "number",
                attribute: "basicAttack",
            },
        },
    ],
    image: IMAGE_ITEM_GOBLIN_BONE_DAGGER,
};

export const itemGoblinBoneDagger: IItem = {
    id: "goblinBoneDagger",
    name: "Bone dagger",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.DAGGER,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    heroClassBonuses: [
        {
            heroClass: EHeroClass.MOB,
            battleBonus: {
                type: EItemBattleBonusType.APPLY_STATUS_ON_BASIC_ATTACK,
                value: 1,
                valueType: "number",
                status: EStatusType.POISON,
            },
        },
    ],
    image: IMAGE_ITEM_GOBLIN_BONE_DAGGER,
    nextLevel: itemGoblinBoneDagger_2,
};

// REGENERATION MANTLE

export const regenMantle_2: IItem = {
    id: "regen_mantle",
    name: "Мантия регенерации(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 2, condition: EItemAfterDuelBonusCondition.WON }],
    image: IMAGE_ITEM_REGEN_MANTLE,
};

export const regenMantle: IItem = {
    id: "regen_mantle",
    name: "Мантия регенерации",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1, condition: EItemAfterDuelBonusCondition.WON }],
    image: IMAGE_ITEM_REGEN_MANTLE,
    nextLevel: regenMantle_2,
};

// SPIRIT SPEAR

export const itemSpiritSpear_2: IItem = {
    id: "spiritSpear",
    name: "Spirit Spear(2)",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ALL],
    weaponType: EWeaponItemType.SPEAR,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MP, value: 1, condition: EItemAfterDuelBonusCondition.WON }],
    image: IMAGE_ITEM_SPIRIT_SPEAR,
};

export const itemSpiritSpear: IItem = {
    id: "spiritSpear",
    name: "Spirit Spear",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    weaponType: EWeaponItemType.SPEAR,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_MP, value: 1, condition: EItemAfterDuelBonusCondition.WON }],
    image: IMAGE_ITEM_SPIRIT_SPEAR,
    nextLevel: itemSpiritSpear_2,
};

// SPIRIT ARMOR

export const spiritArmor_2: IItem = {
    id: "spiritArmor",
    name: "Spirit Armor(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.SUMMON, bonus: { type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicMagicPower" } },
    ],
    image: IMAGE_ITEM_SPIRIT_ARMOR,
};

export const spiritArmor: IItem = {
    id: "spiritArmor",
    name: "Spirit Armor",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 5, valueType: "number", attribute: "basicArmor" }],
    heroClassBonuses: [
        { heroClass: EHeroClass.SUMMON, bonus: { type: EItemBonusType.ATTRIBUTE, value: 4, valueType: "number", attribute: "basicMagicPower" } },
    ],
    image: IMAGE_ITEM_SPIRIT_ARMOR,
    nextLevel: spiritArmor_2,
};
