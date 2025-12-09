import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import {
    IMAGE_ITEM_GOBLIN_BONE_DAGGER,
    IMAGE_ITEM_GOBLIN_GOLD_COIN,
    IMAGE_ITEM_GOBLIN_SILVER_COIN,
    IMAGE_ITEM_PEASANTS_PITCHFORK,
} from "./utils/imageLoadUtil";

////// MOB ITEMS /////////////////////////////////////////

// PEASANT

// PEASANT PITCHFORK

export const itemPeasantPitchfork: IItem = {
    id: "peasantPitchfork",
    name: "Pitchfork",
    type: EItemType.WEAPON,
    level: 1,
    priceLevel: 1,
    heroClasses: [],
    weaponType: EWeaponItemType.AXE,
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 1, valueType: "number", attribute: "basicAttack" }],
    image: IMAGE_ITEM_PEASANTS_PITCHFORK,
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
};

//////
