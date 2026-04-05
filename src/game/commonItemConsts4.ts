import { EItemBonusType, EItemTargetType, EItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_ARMOR_41, IMAGE_ITEM_HELMET_41 } from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 3 /////////////////////////////////////////////////

//
// MASS HP ARMOR
//

export const armorMassHp_2: IItem = {
    id: "armorMassHp",
    name: i18n.items.armorMassHp,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 4,
    image: IMAGE_ITEM_ARMOR_41,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 20, valueType: "number", attribute: "basicMaxHp", targetType: EItemTargetType.ALL_ALLIES }],
};

export const armorMassHp: IItem = {
    id: "armorMassHp",
    name: i18n.items.armorMassHp,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 4,
    image: IMAGE_ITEM_ARMOR_41,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicMaxHp", targetType: EItemTargetType.ALL_ALLIES }],
    nextLevel: armorMassHp_2,
};

//
// MASS ARMOR HELMET
//

export const helmetMassArmor_2: IItem = {
    id: "helmetMassArmor",
    name: i18n.items.helmetMassArmor,
    type: EItemType.COMMON,
    level: 2,
    priceLevel: 4,
    image: IMAGE_ITEM_HELMET_41,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 20, valueType: "number", attribute: "basicArmor", targetType: EItemTargetType.ALL_ALLIES }],
    //nextLevel: helmetMassArmor_2,
};

export const helmetMassArmor: IItem = {
    id: "helmetMassArmor",
    name: i18n.items.helmetMassArmor,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 4,
    image: IMAGE_ITEM_HELMET_41,
    heroClasses: [],
    bonuses: [{ type: EItemBonusType.ATTRIBUTE, value: 10, valueType: "number", attribute: "basicArmor", targetType: EItemTargetType.ALL_ALLIES }],
    nextLevel: helmetMassArmor_2,
};
