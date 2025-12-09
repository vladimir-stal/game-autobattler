import { EHeroClass, EItemBonusType, EItemType, EWeaponItemType, IItem, IItemBonus, IUnit } from "../../types";
import { axe1 } from "../basicWeaponItemConsts";
import { gloves_magic2, gloves_priest2, gloves_war2 } from "../commonItemConsts";
import {
    basicCommonItems,
    basicItems,
    basicItemsByClass,
    basicWeaponItemsByClass,
    basicWeapons,
    commonItemsLvl2,
    commonItemsLvl3,
    ITEM_MAX_LEVEL,
    itemsLvl2,
    itemsLvl3,
    weaponsLvl2,
    weaponsLvl3,
} from "../itemConsts";
import { calculateIncreaseValue } from "./battleUtils";
import { getRandomArrayItem, getRandomArrayItems } from "./commonUtils";

/** Apply item bonuses to unit on equip */
export const applyItemBonuses = (item: IItem, unit: IUnit) => {
    item.bonuses.forEach((bonus) => applyItemBonus(bonus, unit));
    item.heroClassBonuses &&
        item.heroClassBonuses.forEach((hCbonus) => {
            if (hCbonus.heroClass === unit.heroClass) {
                if (hCbonus.bonus) {
                    applyItemBonus(hCbonus.bonus, unit);
                }
                //TODO: apply battle bonuses
                // if (hCbonus.battleBonus) {
                //     applyItemBattleBonus(hCbonus.bonus, unit);
                // }
            }
        });
};

const applyItemBonus = (bonus: IItemBonus, unit: IUnit) => {
    const { type, attribute, value, valueType } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }

                const newAttrValue = unit[attribute] + calculateIncreaseValue(unit[attribute], value, valueType);
                unit[attribute] = newAttrValue;
            }
            break;
        default:
            console.log("ERROR! No handler bonus apply handler fort item", type);
    }
};

/** Remove item bonuses from unit on unequip */
export const removeItemBonuses = (item: IItem, unit: IUnit) => {
    item.bonuses.forEach((bonus) => removeItemBonus(bonus, unit));
    item.heroClassBonuses &&
        item.heroClassBonuses.forEach((hCbonus) => {
            if (hCbonus.heroClass === unit.heroClass) {
                if (hCbonus.bonus) {
                    removeItemBonus(hCbonus.bonus, unit);
                }
                //TODO: remove battle bonuses
                // if (hCbonus.battleBonus) {
                //     applyItemBattleBonus(hCbonus.bonus, unit);
                // }
            }
        });
};

const removeItemBonus = (bonus: IItemBonus, unit: IUnit) => {
    const { type, attribute, value, valueType } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }
                //TODO: recalculate attribute after remove item

                const newAttrValue = unit[attribute] - calculateIncreaseValue(unit[attribute], value, valueType);
                unit[attribute] = newAttrValue;
            }
            break;
        default:
            console.log("ERROR! No handler bonus apply handler fort item", type);
    }
};

export const getWeaponItemHeroClasses = (itemType: EWeaponItemType): EHeroClass[] => {
    switch (itemType) {
        case EWeaponItemType.AXE:
            return [EHeroClass.WILD, EHeroClass.MASTER];
        case EWeaponItemType.DAGGER:
            return [EHeroClass.BARD];
        case EWeaponItemType.MACE:
            return [EHeroClass.PRIEST, EHeroClass.ORDER];
        case EWeaponItemType.MUSICAL:
            return [EHeroClass.BARD];
        case EWeaponItemType.SCEPTER:
            return [EHeroClass.PRIEST, EHeroClass.SUMMON];
        case EWeaponItemType.SHIELD:
            return [EHeroClass.ORDER, EHeroClass.WARRIOR];
        case EWeaponItemType.STAFF:
            return [EHeroClass.MAGIC, EHeroClass.SUMMON];
        case EWeaponItemType.SWORD:
            return [EHeroClass.WARRIOR, EHeroClass.MASTER];
        case EWeaponItemType.TOTEM:
            return [EHeroClass.WILD, EHeroClass.DARK];
        case EWeaponItemType.WAND:
            return [EHeroClass.MAGIC, EHeroClass.DARK];
        default:
            return [];
    }
};

export const getHeroClassWeaponTypes = (heroClass: EHeroClass): EWeaponItemType[] => {
    switch (heroClass) {
        case EHeroClass.BARD:
            return [EWeaponItemType.DAGGER, EWeaponItemType.MUSICAL];
        //return [EWeaponItemType.DAGGER, EWeaponItemType.TOTEM];
        case EHeroClass.DARK:
            return [EWeaponItemType.WAND, EWeaponItemType.TOTEM];
        //return [EWeaponItemType.WAND, EWeaponItemType.DAGGER];
        case EHeroClass.MAGIC:
            return [EWeaponItemType.WAND, EWeaponItemType.STAFF];
        case EHeroClass.MASTER:
            return [EWeaponItemType.AXE, EWeaponItemType.SWORD];
        case EHeroClass.ORDER:
            return [EWeaponItemType.SHIELD, EWeaponItemType.MACE];
        case EHeroClass.PRIEST:
            return [EWeaponItemType.MACE, EWeaponItemType.SCEPTER];
        case EHeroClass.SUMMON:
            return [EWeaponItemType.STAFF, EWeaponItemType.SCEPTER];
        case EHeroClass.WARRIOR:
            return [EWeaponItemType.SWORD, EWeaponItemType.SHIELD];
        case EHeroClass.WILD:
            return [EWeaponItemType.AXE, EWeaponItemType.TOTEM];
        default: {
            console.log("ERROR! No class weapons for class", heroClass);
            return [];
        }
    }
};

export const getHeroClassesItems = (heroClasses: EHeroClass[], day: number) => {
    const allClassItems: IItem[] = heroClasses.reduce((resultItems, heroClass) => {
        return resultItems.concat(getHeroClassItems(heroClass, day));
    }, [] as IItem[]);
    return allClassItems;
};

/** Return weapon items for specific hero classes */
export const getHeroClassesWeaponItems = (heroClasses: EHeroClass[], day: number) => {
    const allClassItems: IItem[] = heroClasses.reduce((allItems, heroClass) => {
        return allItems.concat(getHeroClassWeaponItems(heroClass, day));
    }, [] as IItem[]);
    return allClassItems;
};

export const getHeroClassItems = (heroClass: EHeroClass, day: number): IItem[] => {
    const weaponItems = getHeroClassWeaponItems(heroClass, day);
    const commonItems = getHeroClassCommonItems(heroClass, day);
    return [...weaponItems, ...commonItems];
};

export const getAllItems = (day: number): IItem[] => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return basicItems;
        case 3:
        case 4:
            return basicItems.concat(itemsLvl2);
        case 5:
        case 6:
        default:
            return basicItems.concat(itemsLvl2).concat(itemsLvl3);
    }
};

export const getCommonItems = (day: number): IItem[] => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return basicCommonItems;
        case 3:
        case 4:
            return [...basicCommonItems, ...commonItemsLvl2];
        case 5:
        case 6:
        default:
            return [...basicCommonItems, ...commonItemsLvl2, ...commonItemsLvl3];
    }
};

export const get3FromAllItems = (day: number): IItem[] => {
    return getRandomArrayItems(getAllItems(day), 3, true);
};

/** Return weapon items for a single hero class */
export const getHeroClassWeaponItems = (heroClass: EHeroClass, day: number): IItem[] => {
    switch (day) {
        case 0:
        case 1:
            return basicWeaponItemsByClass[heroClass] ?? [];
        case 2:
        default: {
            const weapons = getHeroClassWeaponTypes(heroClass).map((weaponType) => getWeaponItem(weaponType, day));
            return weapons;
        }
    }
};

/** Return common items for a single hero class */
export const getHeroClassCommonItems = (heroClass: EHeroClass, day: number): IItem[] => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return [];
        case 3:
        case 4: {
            return getHeroClassCommonItemsLvl2(heroClass);
        }
        default: {
            return getHeroClassCommonItemsLvl2(heroClass);
        }
    }
};

/** Return  lvl 2 common items for a single hero class */
export const getHeroClassCommonItemsLvl2 = (heroClass: EHeroClass): IItem[] => {
    switch (heroClass) {
        case EHeroClass.PRIEST:
            return [gloves_priest2];
        case EHeroClass.MAGIC:
            return [gloves_magic2];
        case EHeroClass.WARRIOR:
            return [gloves_war2];
        default:
            return [];
    }
};

export const getWeaponItems = (day: number): IItem[] => {
    //return weaponsLvl3;
    switch (day) {
        case 0:
        case 1:
        case 2:
            return basicWeapons;
        case 3:
        case 4:
            return basicWeapons.concat(weaponsLvl2);
        case 5:
        case 6:
        default: {
            return basicWeapons.concat(weaponsLvl2).concat(weaponsLvl3);
        }
    }
};

export const getWeaponItem = (weaponType: EWeaponItemType, day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
            return basicWeapons.find((item) => item.weaponType === weaponType) || axe1;
        case 2:
        case 3:
        default: {
            const weapons = weaponsLvl2.concat(basicWeapons);
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
    }
};

export const upgradeItem = (item: IItem): IItem => {
    if (item.level === ITEM_MAX_LEVEL) {
        return item;
    }

    if (!item.nextLevel) {
        console.log("NO NEXT LEVEL ITEM FOR ITEM", item.name);
        return item;
    }

    return item.nextLevel;
};

// export const generateWeaponItem = (itemTemplate: IItem, level: number): IItem => {
//     switch (level) {
//         case 0:
//         case 1:
//             return { ...itemTemplate };
//         case 2: {
//             const item = { ...itemTemplate };
//         }
//     }
// };

export const getUnitWeaponCount = (unit: IUnit) => {
    return unit.items.reduce((count, item) => {
        if (item.type === EItemType.WEAPON) {
            count++;
        }
        return count;
    }, 0);
};

export const getItemPrice = (item: IItem, day: number, hour: number) => {
    if (!item.priceLevel) {
        console.log("ERROR NO price for item", item.id);
        return 0;
    }

    return item.priceLevel * 2 + 1;
};
