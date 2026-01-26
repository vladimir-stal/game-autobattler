import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import {
    IMAGE_ITEM_GOBLIN_BONE_DAGGER,
    IMAGE_ITEM_GOBLIN_GOLD_COIN,
    IMAGE_ITEM_GOBLIN_SILVER_COIN,
    IMAGE_ITEM_PEASANTS_PITCHFORK,
    IMAGE_ITEM_REGEN_MANTLE,
} from "./utils/imageLoadUtil";

////// MOB ITEMS /////////////////////////////////////////

// PEASANT

// PEASANT PITCHFORK

export const itemPeasantPitchfork_2: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork(2)",
    type: EItemType.WEAPON,
    level: 2,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 6, valueType: "number", attribute: "basicAttack" }],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
};

export const itemPeasantPitchfork: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 3, valueType: "number", attribute: "basicAttack" }],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
    nextLevel: itemPeasantPitchfork_2,
};

// GOBLIN

// GOBLIN SILVER COIN

export const itemGoblinSilverCoin: IItem = {
    id: "goblin_silver_coin",
    name: "Серебряная монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 1 }],
    image: IMAGE_ITEM_GOBLIN_SILVER_COIN,
};

// GOBLIN GOLD COIN

export const itemGoblinGoldCoin: IItem = {
    id: "goblin_silver_coin",
    name: "Серебряная монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 2 }],
    image: IMAGE_ITEM_GOBLIN_GOLD_COIN,
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
    battleBonuses: [{ type: EItemBattleBonusType.APPLY_POISON_ON_HIT, value: 1, valueType: "number" }],
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
    image: IMAGE_ITEM_GOBLIN_BONE_DAGGER,
    nextLevel: itemGoblinBoneDagger_2,
};

//////

export const regenMantle: IItem = {
    id: "goblin_silver_coin",
    name: "Серебряная монета",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    bonuses: [],
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.STAT_HP_REGEN, value: 1 }],
    image: IMAGE_ITEM_REGEN_MANTLE,
};
