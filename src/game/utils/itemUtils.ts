import {
    ECardType,
    EHeroClass,
    EHeroClassType,
    EItemBattleBonusType,
    EItemBonusType,
    EItemTargetType,
    EItemType,
    EUnitType,
    EWeaponItemType,
    ICard,
    IItem,
    IItemBattleBonus,
    IItemBonus,
    IUnit,
    THeroAttribute,
} from "../../types";
import { axe1 } from "../basicWeaponItemConsts";
import { gloves_magic2, gloves_priest2, gloves_war2 } from "../commonItemConsts2";
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
    itemsLvl4,
    weaponsLvl2,
    weaponsLvl3,
    weaponsLvl4,
    weaponsLvl5,
} from "../itemConsts";
import { GameScene } from "../scenes/GameScene";
import { calculateIncreaseValue } from "./battleUtils";
import { getRandomArrayItem, getRandomArrayItems } from "./commonUtils";
import { getMulticlassSubclasses } from "./heroUtils";
import { isUnitHasHeroClass } from "./unitUtils";

const calcItemBonuses = (unit: IUnit, newItem: IItem) => {
    unit.items.forEach((item) => {
        item?.bonuses
            ?.filter((b) => !!b.valueFrom && b.type === EItemBonusType.ATTRIBUTE)
            .forEach((b) => {
                const v = Math.floor((unit[b.valueFrom] * b.value) / 100);
                const a = b.valueType === "percent" ? Math.floor((unit[b.attribute] * v) / 100) : v;
                b.calculatedValue = a;
                //console.log("~~~ calc", b.attribute, unit[b.attribute], b.valueFrom, unit[b.valueFrom], v, a);
            });
    });
    newItem?.bonuses
        ?.filter((b) => !!b.valueFrom && b.type === EItemBonusType.ATTRIBUTE)
        .forEach((b) => {
            const v = Math.floor((unit[b.valueFrom] * b.value) / 100);
            const a = b.valueType === "percent" ? Math.floor((unit[b.attribute] * v) / 100) : v;
            b.calculatedValue = a;
            //console.log("~~~ calc", b.attribute, unit[b.attribute], b.valueFrom, unit[b.valueFrom], v, a);
        });
};

/** Apply item bonuses to unit (or all units) on equip */
export const applyItemBonuses = (item: IItem, unit: IUnit, units?: IUnit[]) => {
    unit.items.forEach((ii) =>
        ii.bonuses
            .filter((b) => !!b.calculatedValue && !!b.valueFrom)
            .forEach((b) => {
                removeItemBonus(b, unit, units);
                b.calculatedValue = 0;
            }),
    );
    item.bonuses
        .filter((b) => !!b.calculatedValue && !!b.valueFrom)
        .forEach((b) => {
            removeItemBonus(b, unit, units);
            b.calculatedValue = 0;
        });
    item.bonuses.filter((b) => !b.valueFrom).forEach((bonus) => applyItemBonus(bonus, unit, units));
    //
    item.heroClassBonuses &&
        item.heroClassBonuses.forEach((hCbonus) => {
            if (isUnitHasHeroClass(unit, hCbonus.heroClass) && hCbonus.bonus) {
                applyItemBonus(hCbonus.bonus, unit);
            }
        });
    calcItemBonuses(unit, item);
    unit.items.forEach((ii) =>
        ii.bonuses
            .filter((b) => !!b.valueFrom)
            .forEach((b) => {
                applyItemBonus(b, unit, units);
            }),
    );
    item.bonuses
        .filter((b) => !!b.calculatedValue && !!b.valueFrom)
        .forEach((b) => {
            applyItemBonus(b, unit, units);
        });
};

export const fixAuraBonusesForNewUnit = (unit: IUnit, bonuses:IItemBonus[]) => {
    console.log("~~~ fix aura",unit,bonuses);
    bonuses.forEach(b => applyItemBonus(b,unit,[unit]));
};

const applyItemBonus = (bonus: IItemBonus, unit: IUnit, units?: IUnit[]) => {
    //console.log("APPLY ITem BONUS", bonus);
    const { type, attribute, value, valueType, targetType, calculatedValue, valueFrom } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }
                const vv = !!valueFrom ? calculatedValue || 0 : value;

                //console.log("add item bonus", bonus);

                if (!targetType || targetType === EItemTargetType.SELF) {
                    const newAttrValue = unit[attribute] + calculateIncreaseValue(unit[attribute], vv, valueType);
                    unit[attribute] = newAttrValue;
                } else if (targetType === EItemTargetType.ALL_ALLIES) {
                    units?.forEach((u) => {
                        const newAttrValue = u[attribute] + calculateIncreaseValue(u[attribute], vv, valueType);
                        u[attribute] = newAttrValue;
                    });
                }
            }
            break;
        default:
            console.log("ERROR! No handler bonus apply handler fort item", type);
    }
};

/** Remove item bonuses from unit on unequip */
export const removeItemBonuses = (item: IItem, unit: IUnit, units?: IUnit[]) => {
    unit.items.forEach((ii) =>
        ii.bonuses
            .filter((b) => !!b.calculatedValue && !!b.valueFrom)
            .forEach((b) => {
                removeItemBonus(b, unit, units);
                b.calculatedValue = 0;
            }),
    );
    item.bonuses.filter((b) => !b.valueFrom).forEach((bonus) => removeItemBonus(bonus, unit, units));
    //
    item.heroClassBonuses &&
        item.heroClassBonuses.forEach((hCbonus) => {
            if (hCbonus.heroClass === unit.heroClass) {
                if (hCbonus.bonus) {
                    removeItemBonus(hCbonus.bonus, unit);
                }
            } else if (unit.mobHeroClasses && unit.mobHeroClasses.includes(hCbonus.heroClass)) {
                if (hCbonus.bonus) {
                    removeItemBonus(hCbonus.bonus, unit);
                }
            }
        });
    calcItemBonuses(unit, item);
    unit.items.forEach((ii) => {
        ii.bonuses
            .filter((b) => !!b.valueFrom)
            .forEach((b) => {
                if (ii === item) {
                    b.calculatedValue = 0;
                } else {
                    applyItemBonus(b, unit, units);
                }
            });
    });
};

const removeItemBonus = (bonus: IItemBonus, unit: IUnit, units?: IUnit[]) => {
    const { type, attribute, value, valueType, targetType, valueFrom, calculatedValue } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }
                const vv = !!valueFrom ? calculatedValue || 0 : value;

                //console.log("remove item bonus", bonus);

                if (!targetType || targetType === EItemTargetType.SELF) {
                    const newAttrValue = unit[attribute] - calculateIncreaseValue(unit[attribute], vv, valueType);
                    unit[attribute] = newAttrValue;
                } else if (targetType === EItemTargetType.ALL_ALLIES) {
                    units?.forEach((u) => {
                        if (!u) {
                            return;
                        }

                        const newAttrValue = u[attribute] - calculateIncreaseValue(u[attribute], vv, valueType);
                        u[attribute] = newAttrValue;

                        //console.log("remove item bonus from unit", u, newAttrValue);
                    });
                }
            }
            break;
        default:
            console.log("ERROR! No handler bonus apply handler fort item", type);
    }
};

export const getWeaponItemHeroClasses = (itemType: EWeaponItemType | undefined): EHeroClass[] => {
    switch (itemType) {
        // common
        case EWeaponItemType.DAGGER:
            return [EHeroClass.ALL];
        case EWeaponItemType.BOOK:
            return [EHeroClass.MAGIC, EHeroClass.SUMMON, EHeroClass.DARK, EHeroClass.PRIEST];
        case EWeaponItemType.SPEAR:
            return [EHeroClass.WARRIOR, EHeroClass.ORDER, EHeroClass.WILD, EHeroClass.MASTER];
        // for 2 classes
        case EWeaponItemType.AXE:
            return [EHeroClass.WILD, EHeroClass.MASTER];
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
            return [EHeroClass.ALL];
    }
};

export const getHeroClassWeaponTypes = (heroClass: EHeroClass): EWeaponItemType[] => {
    switch (heroClass) {
        case EHeroClass.BARD:
            return [EWeaponItemType.MUSICAL];
        //return [EWeaponItemType.DAGGER, EWeaponItemType.MUSICAL];
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

export const getHeroClassesItemsWithTop = (heroClasses: EHeroClass[], day: number, count: number) => {
    const items = getRandomArrayItems(getHeroClassesItems(heroClasses, day), count - 1, true);

    const randomClass = getRandomArrayItem(heroClasses);
    const randomItemType = day > 2 ? getRandomArrayItem(["weapon", "common"]) : "weapon";
    const topLevelItem = randomItemType === "weapon" ? getHeroClassWeaponItemTop(randomClass, day) : getHeroClassCommonItemTop(randomClass, day);
    if (!!topLevelItem) {
        return [...items, topLevelItem];
    } else {
        return [...items, getRandomArrayItem(getHeroClassesItems(heroClasses, day))];
    }
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

/** Return a list of all available items for current day */
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
            return basicItems.concat(itemsLvl2).concat(itemsLvl3);
        default:
            return basicItems.concat(itemsLvl2).concat(itemsLvl3).concat(itemsLvl4);
    }
};

/** Return a random top level item for current day */
export const getAllItemTop = (day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return getRandomArrayItem(basicItems);
        case 3:
        case 4:
            return getRandomArrayItem(itemsLvl2);
        case 5:
        case 6:
            return getRandomArrayItem(itemsLvl3);
        default:
            return getRandomArrayItem(itemsLvl4);
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

/** Return common items with 100% chance of including 1 top level item */
export const getCommonItemsWithTop = (day: number, count: number): IItem[] => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return getRandomArrayItems(basicCommonItems, count, true);
        case 3:
        case 4: {
            const commonItems = getRandomArrayItems(getCommonItems(day), count - 1, true);
            const topLevelItem = getRandomArrayItem(commonItemsLvl2);
            return [...commonItems, topLevelItem];
        }
        case 5:
        case 6: {
            const commonItems = getRandomArrayItems(getCommonItems(day), count - 1, true);
            const topLevelItem = getRandomArrayItem(commonItemsLvl3);
            return [...commonItems, topLevelItem];
        }
        default:
            const commonItems = getRandomArrayItems(basicCommonItems, count - 2, true);
            const topLevelItem2 = getRandomArrayItem(commonItemsLvl2);
            const topLevelItem3 = getRandomArrayItem(commonItemsLvl3);
            return [...commonItems, topLevelItem2, topLevelItem3];
    }
};

export const getXFromAllItems = (day: number, count: number): IItem[] => {
    return getRandomArrayItems(getAllItems(day), count, true);
};

export const getAllHoldingItems = (gameScene: GameScene): IItem[] => {
    let list: IItem[] = [];
    // items in inventory
    // TODO: remove 5 lvl items from list
    // TODO: ?? if item is 3rd level dont need to copy it!
    gameScene.inventoryPanel.slots.forEach((slot) => {
        if (slot?.slot?.card?.card?.type === ECardType.ITEM) {
            const item = slot.slot.card.card.item;
            if (item && item.priceLevel < 5) {
                item.previousLevel ? list.push(item.previousLevel) : list.push(item);
            }
        }
    });
    gameScene.unitPanel.slots.forEach((slot) => {
        if (slot?.slot?.card?.card?.type === ECardType.UNIT) {
            slot?.slot?.card?.card?.unit?.items.forEach((item) => {
                if (item && item.priceLevel < 5) {
                    item.previousLevel ? list.push(item.previousLevel) : list.push(item);
                }
            });
        }
    });
    return list;
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

/** Return top level weapon item for a single hero class */
export const getHeroClassWeaponItemTop = (heroClass: EHeroClass, day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
            return getRandomArrayItem(basicWeaponItemsByClass[heroClass]!);
        case 2:
        default: {
            const weaponType = getRandomArrayItem(getHeroClassWeaponTypes(heroClass));
            const weapon = getWeaponItemTop(weaponType, day);
            return weapon;
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

/** Return top level common item for a single hero class for current day */
export const getHeroClassCommonItemTop = (heroClass: EHeroClass, day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: {
            return getRandomArrayItem(getHeroClassCommonItemsLvl2(heroClass));
        }
        case 5:
        case 6:
        default: {
            //TODO: change to LEVEL 3 class common items
            return getRandomArrayItem(getHeroClassCommonItemsLvl2(heroClass));
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
            return basicWeapons.concat(weaponsLvl2).concat(weaponsLvl3);
        case 7:
        case 8:
            return basicWeapons.concat(weaponsLvl2).concat(weaponsLvl3).concat(weaponsLvl4);
        case 9:
        default: {
            return basicWeapons.concat(weaponsLvl2).concat(weaponsLvl3).concat(weaponsLvl4).concat(weaponsLvl5);
        }
    }
};

/** Return weapon item of specific type for current day */
export const getWeaponItem = (weaponType: EWeaponItemType, day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
            return basicWeapons.find((item) => item.weaponType === weaponType) || axe1;
        case 2:
        case 3: {
            const weapons = weaponsLvl2.concat(basicWeapons);
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
        case 4:
        case 5:
        case 6:
        default: {
            const weapons = weaponsLvl3.concat(weaponsLvl2).concat(basicWeapons);
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
    }
};

/** Return top level weapon item of specific type for current day */
export const getWeaponItemTop = (weaponType: EWeaponItemType, day: number): IItem => {
    switch (day) {
        case 0:
        case 1:
            return basicWeapons.find((item) => item.weaponType === weaponType) || axe1;
        case 2:
        case 3: {
            const weapons = weaponsLvl2;
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
        case 4:
        case 5:
        case 6: {
            const weapons = weaponsLvl3;
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
        case 7:
        case 8: {
            const weapons = weaponsLvl4;
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
        case 9:
        default: {
            const weapons = weaponsLvl5;
            const heroClassWeapons = weapons.filter((item) => item.weaponType === weaponType);
            const item = getRandomArrayItem(heroClassWeapons);
            return item;
        }
    }
};

/**
 *
 * @param item first item to upgrade
 * @param item2 second items if upgrade is coming from merging two items
 * @returns item upgraded to the next level
 */
export const upgradeItem = (item: IItem, item2?: IItem): IItem => {
    if (item.level === ITEM_MAX_LEVEL) {
        return item;
    }

    if (!item.nextLevel) {
        console.log("NO NEXT LEVEL ITEM FOR ITEM", item.name);
        return item;
    }
    const nextCopy = createItem(item.nextLevel);
    nextCopy.previousLevel = item;
    //if (item.evolving) {
    nextCopy.bonuses.push(...item.bonuses.filter((b) => b.isEvolved)); //b.valueType === "evolvedNumber"
    if (item2) {
        nextCopy.bonuses.push(...item2.bonuses.filter((b) => b.isEvolved));
    }
    //}
    return nextCopy;
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

export const getItemPrice = (item: IItem, additionalLevel: number = 0) => {
    if (!item) {
        console.log("ERROR! NO item");
        return 0;
    }

    if (!item.priceLevel) {
        console.log("ERROR! NO price for item", item.id);
        return 0;
    }

    return (item.priceLevel + additionalLevel + item.level) * 2 - 1;
};

export const createItem = (item: IItem): IItem => {
    return { ...item, bonuses: [...item.bonuses] };
};

export const createItemForShop = (item: IItem): IItem => {
    return { ...item, bonuses: [...item.bonuses.filter((b) => !b.isEvolved)] };
};

export const genShopItemCards = (items: IItem[], firstItemDiscount: boolean = true, lastItemPriceUp: boolean = false): (ICard | null)[] => {
    return items.map((item, index) => {
        if (!item) {
            return null;
        } else {
            const salePrice = item.sellPrice !== undefined ? item.sellPrice : Math.floor((getItemPrice(item) + 1) / 2);
            // first item on sale
            const isLastItem = index === items.length - 1;
            const isDiscount = index === 0 && firstItemDiscount;
            const price = isDiscount ? salePrice : getItemPrice(item, lastItemPriceUp && isLastItem ? 1 : 0);
            //const shopItem = item.evolving ? createItemWoEvolve(item) : createItem(item);
            const shopItem = createItemForShop(item);
            return { item: shopItem, type: ECardType.ITEM, price };
        }
    });
};

export const genShopItemSingleCard = (item: IItem | undefined, freePrice: boolean = false): ICard | null => {
    if (!item) {
        return null;
    }
    const shopItem = createItem(item);
    return { item: shopItem, type: ECardType.ITEM, price: freePrice ? 0 : getItemPrice(shopItem) };
};
