import { ECardType, EHeroClass, EItemBattleBonusType, EItemBonusType, EItemTargetType, EItemType, EWeaponItemType, IItem, IItemBattleBonus, IItemBonus, IUnit } from "../../types";
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

/** Apply item bonuses to unit (or all units) on equip */
export const applyItemBonuses = (item: IItem, unit: IUnit, units?: IUnit[]) => {
    item.bonuses.forEach((bonus) => applyItemBonus(bonus, unit, units));
    //
    item.heroClassBonuses &&
        item.heroClassBonuses.forEach((hCbonus) => {
            if (hCbonus.heroClass === unit.heroClass) {
                if (hCbonus.bonus) {
                    applyItemBonus(hCbonus.bonus, unit);
                }
            } else if (unit.mobHeroClasses && unit.mobHeroClasses.includes(hCbonus.heroClass)) {
                if (hCbonus.bonus) {
                    applyItemBonus(hCbonus.bonus, unit);
                }
            }
        });
};

const applyItemBonus = (bonus: IItemBonus, unit: IUnit, units?: IUnit[]) => {
    //console.log("APPLY ITem BONUS", bonus);
    const { type, attribute, value, valueType, targetType } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }

                if (!targetType || targetType === EItemTargetType.SELF) {
                    const newAttrValue = unit[attribute] + calculateIncreaseValue(unit[attribute], value, valueType);
                    unit[attribute] = newAttrValue;
                } else if (targetType === EItemTargetType.ALL_ALLIES) {
                    units.forEach((u) => {
                        const newAttrValue = u[attribute] + calculateIncreaseValue(u[attribute], value, valueType);
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
    item.bonuses.forEach((bonus) => removeItemBonus(bonus, unit, units));
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
};

const removeItemBonus = (bonus: IItemBonus, unit: IUnit, units?: IUnit[]) => {
    const { type, attribute, value, valueType, targetType } = bonus;
    switch (type) {
        case EItemBonusType.ATTRIBUTE:
            {
                if (!attribute || value === undefined || !valueType) {
                    return;
                }

                console.log("remove item bonus", bonus);

                if (!targetType || targetType === EItemTargetType.SELF) {
                    const newAttrValue = unit[attribute] - calculateIncreaseValue(unit[attribute], value, valueType);
                    unit[attribute] = newAttrValue;
                } else if (targetType === EItemTargetType.ALL_ALLIES) {
                    units.forEach((u) => {
                        if (!u) {
                            return;
                        }

                        const newAttrValue = u[attribute] - calculateIncreaseValue(u[attribute], value, valueType);
                        u[attribute] = newAttrValue;

                        console.log("remove item bonus from unit", u, newAttrValue);
                    });
                }
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
        case EWeaponItemType.BOOK:
            return [EHeroClass.ALL];
        case EWeaponItemType.DAGGER:
            //return [EHeroClass.BARD];
            return [EHeroClass.ALL];
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

    return [...items, topLevelItem];
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
    // skills in inventory
    gameScene.inventoryPanel.slots.forEach(slot => {
        if (slot && slot.slot && slot.slot.card && slot.slot.card.card && slot.slot.card.card.type === ECardType.ITEM) {
            list.push(slot.slot.card.card.item);
        }
    })
    gameScene.unitPanel.slots.forEach(slot => {
        if (
            slot && slot.slot && slot.slot.card && slot.slot.card.card
            && slot.slot.card.card.type === ECardType.UNIT
        ) {
            slot.slot.card.card.unit.items.forEach(item => {
                if (item)
                    list.push(item);
            })
        }
    })
    return list;
}

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
            return getRandomArrayItem(basicWeaponItemsByClass[heroClass]);
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

export const getItemPrice = (item: IItem) => {
    if (!item) {
        console.log("ERROR! NO item");
        return 0;
    }

    if (!item.priceLevel) {
        console.log("ERROR! NO price for item", item.id);
        return 0;
    }

    return item.priceLevel * 2 + 1;
};
