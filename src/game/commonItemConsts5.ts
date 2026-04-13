import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem } from "../types";
import { i18n } from "./consts";
import { IMAGE_ITEM_POTION_1 } from "./utils/load/imageLoadItems";

////// COMMON ITEMS LEVEL 5 (LEGENDARY) /////////////////////////////////////////////////

//
// +1 WEAPONS SLOT ITEM
//

//todo Обратный эффект

export const weaponSlotSheath: IItem = {
    id: "weapon_slot_sheath",
    name: i18n.items.weaponSlotSheath,
    type: EItemType.COMMON,
    level: 1,
    priceLevel: 5,
    image: IMAGE_ITEM_POTION_1,
    heroClasses: [EHeroClass.ALL],
    bonuses: [{ type: EItemBonusType.ITEM_WEAPON_SLOT, value: 1, valueType: "number" }],
};
