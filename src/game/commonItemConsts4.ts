import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemTargetType, EItemType, EWeaponItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_POTION_1 } from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 3 /////////////////////////////////////////////////

//
// MASS HP ARMOR
//

export const armorMassHp_2: IItem = {
    id: "armorMassHp",
    name: "Health for all(2)",
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 4,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 30, valueType: "number", attribute: "basicMaxHp", targetType: EItemTargetType.ALL_ALLIES }],
};

export const armorMassHp: IItem = {
    id: "armorMassHp",
    name: "Health for all",
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 4,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 20, valueType: "number", attribute: "basicMaxHp", targetType: EItemTargetType.ALL_ALLIES }],
    nextLevel: armorMassHp_2,
};

//
// ???
//
