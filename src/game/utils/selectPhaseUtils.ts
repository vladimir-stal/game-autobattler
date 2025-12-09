import {
    ECardType,
    EHeroClass,
    EHeroClassType,
    EItemType,
    ERoomType,
    EUnitType,
    ICard,
    IHeroSkillSet,
    IItem,
    IMobReward,
    IMobRewardType,
    IUnit,
    THeroAttribute,
} from "../../types";
import { bosses } from "../bossConsts";
import { CardSlot } from "../components/CardSlot";
import { roomsWithHeroClasses, tripleSetCardTypes } from "../components/SelectController";
import { BASIC_CLASSES, basicClassHeroes, basicHeroAttributes } from "../heroConsts";
import { basicWeapons } from "../itemConsts";
import { GameScene } from "../scenes/GameScene";
import { unitsLvl1 } from "../unitConsts";
import { getRandomArrayItem, getRandomArrayItems } from "./commonUtils";
import { getMcHeroByClass, getMulticlassSubclasses } from "./heroUtils";
import {
    get3FromAllItems,
    getAllItems,
    getCommonItems,
    getHeroClassesItems,
    getHeroClassesWeaponItems,
    getHeroClassItems,
    getHeroClassWeaponTypes,
    getItemPrice,
    getUnitWeaponCount,
    getWeaponItemHeroClasses,
    getWeaponItems,
} from "./itemUtils";
import { getMobs } from "./mobsUtils";
import { getAllClassesSkills, getHeroClassesSkills, getHeroClassSkills, getMaxUnitSkillCount, getSkillPrice, isSkillSet } from "./skillUtils";
import { createUnits, getMaxUnitItemCount, getMaxUnitWeaponCount, getRandomUnitForSell } from "./unitUtils";

//TODO: add rooms for potions - temporary boost for duel, exp in bottle - can be applied to any hero

//const randomTypeRooms = [ERoomType.ITEM_RANDOM];

const randomTypeRooms = [
    ERoomType.GOLD,
    ERoomType.INCOME,
    ERoomType.ATTRIBUTE_RANDOM,
    ERoomType.EXP_SINGLE,
    ERoomType.UNIT_RANDOM,
    ERoomType.ITEM_RANDOM,
    ERoomType.ITEM_COMMON_RANDOM,
    ERoomType.ITEM_WEAPON_BASIC_RANDOM,
    ERoomType.ITEM_WEAPON_CLASS_RANDOM,
    ERoomType.ITEM_CLASS_RANDOM,
    ERoomType.SKILL_RANDOM,
    ERoomType.SKILL_CLASS_RANDOM,
];

//const randomTypeRooms = [ERoomType.SKILL_CLASS_RANDOM];

const choiseTypeRooms = [ERoomType.ATTRIBUTE_SELECT, ERoomType.EXP_SELECT, ERoomType.ITEM_SELECT, ERoomType.MIXED_CLASS_SELECT];

//TODO: ROOMS TO IMPLEMENT = ERoomType.EXP_ALL

//const sellTypeRooms = [ERoomType.HEROES_SELL, ERoomType.ITEMS_SELL, ERoomType.UNIT_SELL, ERoomType.SKILLS_CLASS_SELL];

const sellTypeRoomsWithoutHeroes = [
    //ERoomType.ITEMS_SELL,
    ERoomType.ITEM_CLASS_SELL,
    ERoomType.ITEM_WEAPON_SELL,
    ERoomType.ITEM_COMMON_SELL,
    ERoomType.ITEM_WEAPON_CLASS_SELL,
    ERoomType.UNIT_SELL,
    ERoomType.SKILLS_SELL,
    ERoomType.SKILLS_CLASS_SELL,
];
const sellHeroRoom = [ERoomType.HEROES_SELL];

//
//
//
////////////////////////////////////////////////////////////////////////////////////////////

export interface IRoomOptions {
    heroClasses?: EHeroClass[];
    boss?: { name: string; units: IUnit[] };
}

export const getRooms = (
    day: number,
    hour: number,
    prevRooms: ERoomType[],
    ownedHeroesCount: number
    //): ({ roomType: ERoomType; heroClasses?: EHeroClass[] } | null)[] => {
): ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[] => {
    console.log("GETROOMS");
    prevRooms.forEach((prevroom) => console.log(">>  " + prevroom));
    switch (day) {
        case 0:
            {
                if (hour === 0) {
                    return [null, { roomType: ERoomType.HEROES_SELL }, null];
                }
                if (hour === 1) {
                    return [null, { roomType: ERoomType.ITEM_WEAPON_BASIC_RANDOM }, null];
                }
                // if (hour === 2) {
                //     return [{ roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }];
                // }
                if (hour === 3) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        case 1:
            {
                if (hour === 2) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                    //return [null, { roomType: ERoomType.MOBS }, null];
                }
            }
            break;
        case 2: {
            // if (hour === 1) {
            //     return [null, { roomType: ERoomType.MOBS }, null];
            // }
            if (hour === 1) {
                return [{ roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }];
            }
            if (hour === 3) {
                return [null, { roomType: ERoomType.DUEL }, null];
            }
        }
        case 3:
            {
                if (hour === 1) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                }

                if (hour === 3) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        case 4:
        case 5:
            {
                if (hour === 2) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                }

                if (hour === 5) {
                    //return [null, { roomType: ERoomType.DUEL }, null];
                    const boss = getRandomArrayItem(bosses);
                    return [null, { roomType: ERoomType.BOSS, roomOptions: { boss: { name: boss.name, units: [boss] } } }, null];
                }
            }
            break;
        default: {
            if (hour === 3) {
                return [null, { roomType: ERoomType.MOBS }, null];
            }

            if (hour === 7) {
                return [null, { roomType: ERoomType.DUEL }, null];
            }
        }
    }

    let sellRooms = sellTypeRoomsWithoutHeroes;
    switch (day) {
        case 0:
        case 1:
            // first 2 days player cannot buy heroes
            sellRooms = sellTypeRoomsWithoutHeroes;
            break;
        case 2:
            {
                // on day 2 player can buy hero on hour 0 only
                sellRooms = hour === 0 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 3:
            {
                // on day 3 player can buy hero on hour 0 if he has only 1 hero
                sellRooms = hour === 0 && ownedHeroesCount === 1 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 4:
            {
                // on day 4 player can buy hero on hour 0 only
                sellRooms = hour === 0 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 5:
            {
                // on day 5 player can buy hero on hour 0 if he has 2 heroes or less
                sellRooms = hour === 0 && ownedHeroesCount < 3 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 6:
            {
                // on day 6 player can buy hero on hour 0 only
                sellRooms = hour === 0 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
    }

    let choiseRooms = choiseTypeRooms;
    switch (day) {
        case 5:
            {
                // on day 5 player can upgrade one item or skill to the next level
                if (hour === 0) {
                    choiseRooms = [ERoomType.UPGRADE_SKILL_OR_ITEM];
                }
            }
            break;
    }

    const firstRooms = [...sellRooms];
    const secondRooms = [...choiseRooms];
    const thirdRooms = [...randomTypeRooms];

    // remove prev room from list in order not to repeat same rooms in next hour
    if (prevRooms[0]) {
        const prevSellRoomIndex = firstRooms.findIndex((roomType) => roomType === prevRooms[0]);
        if (prevSellRoomIndex !== -1) {
            console.log(firstRooms[prevSellRoomIndex] + " is REMOVED from sell rooms");
            firstRooms.splice(prevSellRoomIndex, 1);
        }
    }
    if (prevRooms[1]) {
        const prevChoiseRoomIndex = secondRooms.findIndex((roomType) => roomType === prevRooms[1]);
        if (prevChoiseRoomIndex !== -1) {
            console.log(secondRooms[prevChoiseRoomIndex] + " is REMOVED from choise rooms");
            const text: string = secondRooms.reduce((text, room) => `${text} ${room}`, "");
            console.log("CHOISE ROOM BEFORE SPLICE: " + text);
            secondRooms.splice(prevChoiseRoomIndex, 1);
        }
    }
    if (prevRooms[2]) {
        const prevRandomRoomIndex = thirdRooms.findIndex((roomType) => roomType === prevRooms[2]);
        if (prevRandomRoomIndex !== -1) {
            console.log(thirdRooms[prevRandomRoomIndex] + " is REMOVED from random rooms");
            thirdRooms.splice(prevRandomRoomIndex, 1);
        }
    }

    const firstRoom = getRandomArrayItem(firstRooms);
    const secondRoom = getRandomArrayItem(secondRooms);
    const thirdRoom = getRandomArrayItem(thirdRooms);

    const firstRoomHeroClasses = firstRoom !== null && roomsWithHeroClasses.includes(firstRoom) ? getRandomArrayItems(BASIC_CLASSES, 2, true) : undefined;
    const secondRoomHeroClasses = secondRoom !== null && roomsWithHeroClasses.includes(secondRoom) ? getRandomArrayItems(BASIC_CLASSES, 2, true) : undefined;
    const thirdRoomHeroClasses = thirdRoom !== null && roomsWithHeroClasses.includes(thirdRoom) ? getRandomArrayItems(BASIC_CLASSES, 2, true) : undefined;

    return [
        { roomType: firstRoom, roomOptions: { heroClasses: firstRoomHeroClasses } },
        { roomType: secondRoom, roomOptions: { heroClasses: secondRoomHeroClasses } },
        { roomType: thirdRoom, roomOptions: { heroClasses: thirdRoomHeroClasses } },
    ];
};

export const getCards = (
    gameScene: GameScene,
    roomType: ERoomType,
    day: number,
    hour: number,
    heroClasses?: EHeroClass[],
    tripleSetTypes?: ECardType[]
): { cards: (ICard | null)[]; isSingleSelect: boolean; isSelectRequired: boolean; isRerollAvailable: boolean } => {
    console.log("GET CARDS", roomType, heroClasses);
    const initialHeroSelect = day === 0 && hour === 0;
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;

    let cards: (ICard | null)[] = [];

    switch (roomType) {
        case ERoomType.ATTRIBUTE_SELECT:
            {
                const randomAttribute1: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                const randomAttribute2: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                const randomAttribute3: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                isSingleSelect = true;
                isSelectRequired = false;
                const attrValue1 = getAttrValue(randomAttribute1, day);
                const attrValue2 = getAttrValue(randomAttribute1, day) * 2;
                const attrValue3 = getAttrValue(randomAttribute1, day) * 3;
                cards = [
                    { type: ECardType.ATTRIBUTE, value: attrValue1, price: 0, attribute: randomAttribute1 },
                    { type: ECardType.ATTRIBUTE, value: attrValue2, price: 4, attribute: randomAttribute2 },
                    { type: ECardType.ATTRIBUTE, value: attrValue3, price: 8, attribute: randomAttribute3 },
                ];
            }
            break;
        case ERoomType.ATTRIBUTE_RANDOM:
            {
                const randomAttribute: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                //const value = ["basicArmor", "basicMaxHp"].includes(randomAttribute) ? 2 : 1;
                const value = getAttrValue(randomAttribute, day);
                const card: ICard = { price: 0, type: ECardType.ATTRIBUTE, value, attribute: randomAttribute };
                isSingleSelect = true;
                isSelectRequired = false;
                cards = [null, card, null];
            }
            break;
        case ERoomType.EXP_SELECT:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                cards = [
                    { type: ECardType.EXP, value: 1, price: 0 },
                    { type: ECardType.EXP, value: 2, price: 2 },
                    { type: ECardType.EXP, value: 4, price: 4 },
                ];
            }
            break;
        case ERoomType.EXP_SINGLE:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                //TODO: set value depending on day
                cards = [null, { type: ECardType.EXP, value: 1, price: 0 }, null];
            }
            break;
        case ERoomType.HEROES_SELL:
            {
                isSingleSelect = true;
                isSelectRequired = initialHeroSelect;
                isRerollAvailable = !initialHeroSelect;

                cards = getRandomArrayItems<IUnit>(basicClassHeroes, 3, true).map((unit) => {
                    //return { unit: createUnit(unit), type: ECardType.UNIT, price: getUnitCardPrice(unit, day, hour) };
                    return { unit, type: ECardType.UNIT, price: getUnitCardPrice(unit, day, hour) };
                });
            }
            break;
        case ERoomType.ITEM_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                const item = getRandomArrayItem(getAllItems(day));
                cards = [null, { item, type: ECardType.ITEM, price: 0 }, null];
            }
            break;
        case ERoomType.ITEM_COMMON_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                const item = getRandomArrayItem(getCommonItems(day));
                cards = [null, { item, type: ECardType.ITEM, price: 0 }, null];
            }
            break;
        case ERoomType.ITEM_WEAPON_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                isRerollAvailable = true;

                cards = getRandomArrayItems(getWeaponItems(day), 3, true).map((item) => {
                    return { item, type: ECardType.ITEM, price: getItemPrice(item, day, hour) };
                });
            }
            break;
        case ERoomType.ITEM_COMMON_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                isRerollAvailable = true;

                cards = getRandomArrayItems(getCommonItems(day), 3, true).map((item) => {
                    return { item, type: ECardType.ITEM, price: getItemPrice(item, day, hour) };
                });
            }
            break;
        case ERoomType.ITEM_WEAPON_CLASS_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    cards = getRandomArrayItems(getHeroClassesWeaponItems(heroClasses, day), 3, true).map((item) => {
                        return { item, type: ECardType.ITEM, price: getItemPrice(item, day, hour) };
                    });
                }
            }
            break;
        case ERoomType.ITEM_WEAPON_CLASS_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    const level = day;
                    const item = getRandomArrayItem(getHeroClassesWeaponItems(heroClasses, level)); //!!
                    cards = [null, { item, type: ECardType.ITEM, price: 0 }, null];
                }
            }
            break;
        case ERoomType.ITEM_CLASS_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    const item = getRandomArrayItem(getHeroClassesItems(heroClasses, day));
                    cards = [null, { item, type: ECardType.ITEM, price: 0 }, null];
                }
            }
            break;
        case ERoomType.ITEM_WEAPON_BASIC_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = true;

                let item;
                if (gameScene.units.length === 0) {
                    console.log("no units. get random item");
                    item = getRandomArrayItem(basicWeapons);
                } else {
                    console.log("units found. get random item for class");
                    const allHeroClasses = gameScene.units.reduce((heroClasses, unit) => {
                        if (unit.unitType === EUnitType.HERO && !heroClasses.includes(unit.heroClass)) {
                            heroClasses.push(unit.heroClass);
                        }
                        return heroClasses;
                    }, [] as EHeroClass[]);
                    console.log("allHeroClasses", allHeroClasses);
                    if (allHeroClasses.length === 0) {
                        item = getRandomArrayItem(basicWeapons);
                    } else {
                        const randomClass = getRandomArrayItem(allHeroClasses);
                        const weaponTypes = getHeroClassWeaponTypes(randomClass);
                        const randomWeaponType = getRandomArrayItem(weaponTypes);
                        item = basicWeapons.find((item) => item.weaponType === randomWeaponType);
                    }

                    cards = [null, { item, type: ECardType.ITEM, price: 0 }, null];
                }
            }
            break;
        case ERoomType.ITEM_SELECT:
            {
                cards = get3FromAllItems(day).map((item) => {
                    return { item, type: ECardType.ITEM, price: getItemPrice(item, day, hour) };
                });
            }
            break;
        // case ERoomType.ITEMS_SELL:
        //     {
        //         // TODO: basic items should be different depending on day
        //         cards = getRandomArrayItems(basicItems, 3, true).map((item) => {
        //             return { item, type: ECardType.ITEM, price: getCardPrice(ECardType.ITEM, day, hour) };
        //         });
        //     }
        //     break;
        case ERoomType.ITEM_CLASS_SELL:
            {
                if (!heroClasses) {
                    cards = [];
                } else {
                    console.log("ERoomType.ITEM_CLASS_SELL");
                    const items = getRandomArrayItems(getHeroClassesItems(heroClasses, day), 3, true);
                    console.log(items);
                    cards = items.map((item) => {
                        if (!item) {
                            return null;
                        }
                        return { item, type: ECardType.ITEM, price: getItemPrice(item, day, hour) };
                    });
                }
            }
            break;
        case ERoomType.MIXED_CLASS_SELECT:
            {
                if (!heroClasses) {
                    cards = [];
                } else {
                    const heroClass = heroClasses[0];
                    const heroClassItems = getRandomArrayItems(getHeroClassItems(heroClass, day), 3, true);
                    const heroClassSkills = getRandomArrayItems(getHeroClassSkills(heroClass, day), 3, true);

                    const mixed: (IItem | IHeroSkillSet)[] = getRandomArrayItems(
                        [...heroClassItems.filter((item) => item), ...heroClassSkills.filter((skill) => skill)],
                        3,
                        true
                    );

                    console.log("MIXED_CLASS_SELECT", mixed);

                    cards = mixed.map((itemOrSkill) => {
                        if (isSkillSet(itemOrSkill)) {
                            return { type: ECardType.SKILL, price: getSkillPrice(itemOrSkill.level), skill: itemOrSkill };
                        } else {
                            return { type: ECardType.ITEM, item: itemOrSkill, price: getItemPrice(itemOrSkill, day, hour) };
                        }
                    });
                }
            }
            break;
        case ERoomType.SKILL_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                const randomSkill = getRandomArrayItem(getAllClassesSkills(day));
                cards = [null, { type: ECardType.SKILL, price: 0, skill: randomSkill }, null];
            }
            break;
        case ERoomType.SKILL_CLASS_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    const skill = getRandomArrayItem(getHeroClassesSkills(heroClasses, day));
                    cards = [null, { type: ECardType.SKILL, price: 0, skill }, null];
                }
            }
            break;
        case ERoomType.SKILLS_SELL:
            {
                const randomSkills = getRandomArrayItems(getAllClassesSkills(day), 3, true);
                cards = randomSkills.map((skill) => {
                    return { skill, type: ECardType.SKILL, price: getSkillPrice(skill.level) };
                });
            }
            break;
        case ERoomType.SKILLS_CLASS_SELL:
            {
                if (!heroClasses) {
                    cards = [];
                } else {
                    const skills = getRandomArrayItems(getHeroClassesSkills(heroClasses, day), 3, true);
                    cards = skills.map((skill) => {
                        if (!skill) {
                            return null;
                        }
                        return { skill, type: ECardType.SKILL, price: getSkillPrice(skill.level) };
                    });
                }
            }
            break;
        case ERoomType.TRIPLE_SET:
            {
                isSingleSelect = false;
                isSelectRequired = false;

                if (!tripleSetTypes) {
                    cards = [];
                } else {
                    cards = [];
                    tripleSetTypes?.forEach((cardType) => {
                        switch (cardType) {
                            case ECardType.EXP:
                                {
                                    cards.push({ type: ECardType.EXP, value: 1, price: 0 });
                                }
                                break;
                            case ECardType.ATTRIBUTE:
                                {
                                    const randomAttribute: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                                    const value = getAttrValue(randomAttribute, day);
                                    cards.push({ price: 0, type: ECardType.ATTRIBUTE, value, attribute: randomAttribute });
                                }
                                break;
                            case ECardType.GOLD:
                                {
                                    cards.push({ price: 0, type: ECardType.GOLD, value: getGold(day) });
                                }
                                break;
                            case ECardType.SKILL:
                                {
                                    const randomCurrentHeroClass = getRandomArrayItem(getCurrentHeroClasses(gameScene));
                                    const randomSkill = getRandomArrayItem(getHeroClassSkills(randomCurrentHeroClass, day));
                                    cards.push({ price: 0, type: ECardType.SKILL, skill: randomSkill });
                                }
                                break;
                            case ECardType.ITEM:
                                {
                                    const randomCurrentHeroClass = getRandomArrayItem(getCurrentHeroClasses(gameScene));
                                    const item = getRandomArrayItem(getHeroClassItems(randomCurrentHeroClass, day));
                                    cards.push({ item, type: ECardType.ITEM, price: 0 });
                                }
                                break;
                        }
                    });
                }
            }
            break;
        case ERoomType.UNIT_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                const randomUnit = getRandomArrayItem(unitsLvl1);
                cards = [null, { unit: randomUnit, type: ECardType.UNIT, price: 0 }, null];
            }
            break;
        case ERoomType.UNIT_SELL:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                const randomUnits = [getRandomUnitForSell(day - 1), getRandomUnitForSell(day), getRandomUnitForSell(day + 1)];
                cards = randomUnits.map((unit) => {
                    return { unit, type: ECardType.UNIT, price: getUnitCardPrice(unit, day, hour) };
                });
            }
            break;
        //
        // SPECIAL ROOMS
        //
        case ERoomType.MOBS:
            {
                const randomMobs = getMobs(gameScene.selectController.day);
                cards = randomMobs.map((mobs) => {
                    const { name, units, rewards } = mobs;
                    const reward = getRandomArrayItem(rewards);
                    return { mobs: { units: createUnits(units), reward }, type: ECardType.MOBS, price: 0, name };
                });
            }
            break;
        case ERoomType.BOSS:
            {
                const randomBoss = getRandomArrayItem(bosses);
                const { name } = randomBoss;
                cards = [
                    null,
                    {
                        mobs: { units: createUnits([randomBoss]), reward: { exp: 0, type: IMobRewardType.GOLD, value: 1 } },
                        type: ECardType.MOBS,
                        price: 0,
                        name,
                    },
                    null,
                ];
            }
            break;
        default:
            cards = [];
    }

    //console.log("SELECT CARDS", cards);

    return { cards, isSingleSelect, isSelectRequired, isRerollAvailable };
};

//TODO: implement card prise depending on day, itemLevel
const getCardPrice = (type: ECardType, day: number, hour: number) => {
    switch (type) {
        default: {
            console.log("No card price for card", type);
            return 0;
        }
    }
};

const getUnitCardPrice = (unit: IUnit, day: number, hour: number) => {
    const initialHeroSelect = day === 0 && hour === 0;
    if (initialHeroSelect) {
        return 0;
    }

    if (unit.unitType === EUnitType.UNIT) {
        return unit.level * 3 + 1;
    }

    if (unit.unitType === EUnitType.HERO) {
        return 3 + unit.level;
    }

    return 0;
};

/** Highlight slots or cards to be a target for another selected card (move, add item, add attribute, heal, ...) */
export const activateSlots = (slots: CardSlot[], value: boolean, card: ICard, gameScene: GameScene) => {
    slots.forEach((slot) => {
        if (!value) {
            slot.setIsActive(false);
            return;
        }

        const { type, item, skill } = card;
        switch (type) {
            case ECardType.ATTRIBUTE:
            case ECardType.EXP:
                {
                    if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT && slot.card?.card.unit?.unitType === EUnitType.HERO) {
                        slot.setIsActive(true);
                    }
                }
                break;
            case ECardType.UNIT:
                {
                    if (slot.isEmpty) {
                        slot.setIsActive(true);
                    }
                }
                break;
            case ECardType.ITEM:
                {
                    if (!item) {
                        return;
                    }

                    // PLACE ITEM ON UPGRADE PANEL

                    if (slot.isUpgradePanel && slot.isEmpty) {
                        slot.setIsActive(true);
                        return;
                    }

                    // PLACE ITEM IN INVENTORY

                    if (slot.isInventory && slot.isEmpty) {
                        slot.setIsActive(true);
                        return;
                    }

                    // place on the same item in inventory to upgrade
                    if (slot.isInventory && !slot.isEmpty) {
                        const { type, item: slotItem } = slot.card?.card || {};
                        if (type === ECardType.ITEM && slotItem && slotItem.id === item.id && slotItem.level === item.level) {
                            slot.setIsActive(true);
                            return;
                        }
                    }

                    // PLACE ITEM ON UNIT

                    const { unit } = slot.card?.card || {};
                    if (!unit) {
                        return;
                    }

                    const { unitType, heroClass, heroClassType, items } = unit;

                    // case move target is unit
                    if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT && unitType === EUnitType.HERO) {
                        if (!unitType || !heroClassType) {
                            return;
                        }

                        // check count of items on the hero
                        //if (unit) {
                        const maxItemCount = getMaxUnitItemCount(heroClassType);
                        const maxWeaponCount = getMaxUnitWeaponCount(heroClassType);

                        if (items?.length === maxItemCount) {
                            return;
                        } else if (item.type === EItemType.WEAPON && getUnitWeaponCount(unit) === maxWeaponCount) {
                            return;
                        }
                        //}

                        if (item.type === EItemType.COMMON) {
                            slot.setIsActive(true);
                            return;
                        }

                        if (!heroClass || !item.weaponType) {
                            return;
                        }

                        const weaponHeroClasses = getWeaponItemHeroClasses(item.weaponType);
                        if (heroClassType === EHeroClassType.BASIC) {
                            if (weaponHeroClasses.includes(heroClass)) {
                                slot.setIsActive(true);
                            }
                        } else {
                            const heroSubclasses = getMulticlassSubclasses(heroClass);
                            if (weaponHeroClasses.includes(heroSubclasses[0]) || weaponHeroClasses.includes(heroSubclasses[1])) {
                                slot.setIsActive(true);
                            }
                        }
                    }
                }
                break;
            case ECardType.SKILL:
                {
                    if (!skill) {
                        return;
                    }

                    // PLACE SKILL ON UPGRADE PANEL

                    if (slot.isUpgradePanel && slot.isEmpty) {
                        slot.setIsActive(true);
                        return;
                    }

                    // PLACE SKILL IN INVENTORY

                    if (slot.isInventory && slot.isEmpty) {
                        slot.setIsActive(true);
                        return;
                    }

                    // place on the same skill in inventory to upgrade
                    if (slot.isInventory && !slot.isEmpty) {
                        const { type, skill: slotSkill } = slot.card?.card || {};
                        if (type === ECardType.SKILL && slotSkill && slotSkill.id === skill.id && slotSkill.level === skill.level) {
                            slot.setIsActive(true);
                            return;
                        }
                    }

                    // PLACE SKILL ON UNIT

                    const { unit } = slot.card?.card || {};
                    if (!unit) {
                        return;
                    }

                    const { unitType, heroClass, heroClassType, skills } = unit;

                    // case move target is unit
                    if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT && unitType === EUnitType.HERO) {
                        if (!unitType || !heroClassType || !heroClass) {
                            return;
                        }

                        // check count of skill on the hero
                        const maxSkillCount = getMaxUnitSkillCount(heroClassType);
                        if (skills?.length === maxSkillCount) {
                            return;
                        }

                        if (heroClassType === EHeroClassType.BASIC) {
                            if (skill.heroClasses.includes(heroClass)) {
                                slot.setIsActive(true);
                            }
                        } else {
                            if (skill.heroClasses.includes(heroClass)) {
                                slot.setIsActive(true);
                            } else {
                                const heroSubclasses = getMulticlassSubclasses(heroClass);
                                if (skill.heroClasses.includes(heroSubclasses[0]) || skill.heroClasses.includes(heroSubclasses[1])) {
                                    slot.setIsActive(true);
                                }
                            }
                        }
                    }
                }
                break;
            default: {
                slot.setIsActive(false);
                console.log("ERROR! No slot set active for card", type);
            }
        }
    });
};

export const getMobRewardCard = (reward: IMobReward): ICard => {
    const { type, value, item, unit } = reward;
    switch (type) {
        case IMobRewardType.GOLD: {
            return { price: 0, type: ECardType.GOLD, value };
        }
        case IMobRewardType.ITEM: {
            return { price: 0, type: ECardType.ITEM, item };
        }
        case IMobRewardType.UNIT: {
            return { price: 0, type: ECardType.UNIT, unit };
        }
        default: {
            console.log("ERRO! No card for reward found", type);
            return { price: 0, type: ECardType.GOLD, value: 1 };
        }
    }
};

export const getDuelRewardCards = (day: number): ICard[] => {
    const isAttr = day > 1;
    const reward: ICard[] = [{ price: 0, type: ECardType.EXP, value: getExpAfterDuelValue(day) }];

    if (isAttr) {
        const randomAttr = getRandomArrayItem(basicHeroAttributes);
        const attrValue = getAttrValue(randomAttr, day);
        reward.push({ price: 0, type: ECardType.ATTRIBUTE, attribute: randomAttr, value: attrValue });
    }
    return reward;
};

export const getAttrValue = (attr: THeroAttribute, day: number) => {
    console.log(">>> getAttrValue", attr, day);
    let basicValue = 1;
    if (day >= 0) {
        basicValue = 1;
    } else if (day > 3) {
        basicValue = 2;
    } else if (day > 6) {
        basicValue = 3;
    } else {
        basicValue = 4;
    }

    console.log("basic value", basicValue);

    switch (attr) {
        case "basicArmor":
        case "basicMaxHp":
            return basicValue * 3;
        case "basicCritChance":
        case "basicEvasionChance":
            return basicValue * 2;
        default:
            return basicValue;
    }
};

export const getExpAfterDuelValue = (day: number) => {
    return day;
};

export const getSelectRoomDisplayName = (roomType: ERoomType) => {
    switch (roomType) {
        //
        // SELL ROOMS
        //
        case ERoomType.HEROES_SELL:
            return "TAVERN";
        case ERoomType.ITEM_CLASS_SELL:
            return "SPECIAL SHOP";
        case ERoomType.ITEM_WEAPON_CLASS_SELL:
            return "WEAPON STORE";
        case ERoomType.ITEM_WEAPON_SELL:
            return "ARSENAL";
        case ERoomType.ITEM_COMMON_SELL:
            return "BLACKSMITH";
        case ERoomType.SKILLS_CLASS_SELL:
            return "MAGIC STORE";
        case ERoomType.SKILLS_SELL:
            return "MAGIC SHOP";
        case ERoomType.UNIT_SELL:
            return "MERCENARIES";
        //
        // CHOISE ROOMS
        //
        case ERoomType.ATTRIBUTE_SELECT:
            return "EXERCISES";
        case ERoomType.EXP_ALL:
            return "";
        case ERoomType.EXP_SELECT:
            return "TRAINING CAMP";
        case ERoomType.ITEM_SELECT:
            return "BLACK MARKET";
        case ERoomType.MIXED_CLASS_SELECT:
            return "SPECIALIST";
        case ERoomType.UPGRADE_SKILL_OR_ITEM:
            return "UPGRADE";
        //
        // RANDOM ROOMS
        //
        case ERoomType.ATTRIBUTE_RANDOM:
            return "EXERCISE";
        case ERoomType.EXP_SINGLE:
            return "TRAINING";
        case ERoomType.GOLD:
            return "FIND COINS";
        case ERoomType.INCOME:
            return "INCOME";
        case ERoomType.ITEM_CLASS_RANDOM:
            return "STEAL ITEM";
        case ERoomType.ITEM_RANDOM:
            return "FIND ITEM";
        case ERoomType.ITEM_COMMON_RANDOM:
            return "GET ARMOR";
        case ERoomType.ITEM_WEAPON_BASIC_RANDOM:
            return "LEGACY";
        case ERoomType.ITEM_WEAPON_CLASS_RANDOM:
            return "STEAL WEAPON";
        case ERoomType.SKILL_CLASS_RANDOM:
            return "MAGIC SCHOOL";
        case ERoomType.SKILL_RANDOM:
            return "MAGIC TRICK";
        case ERoomType.UNIT_RANDOM:
            return "FOLLOWER";
        //
        // SPECIAL ROOMS
        //
        case ERoomType.DUEL:
            return "DUEL";
        case ERoomType.MOBS:
            return "MOBS";
        case ERoomType.BOSS:
            return "DUNGEON BOSS";
        case ERoomType.TRIPLE_SET:
            return "DUNGEON";
        //
        default:
            return "NOTHING HERE...";
    }
};

export const getGold = (day: number) => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return 3;
        case 3:
        case 4:
        case 5:
            return 4;
        case 6:
        case 7:
            return 5;
        default:
            return 6;
    }
};

export const getIncome = (day: number) => {
    switch (day) {
        case 0:
        case 1:
        case 2:
            return 1;
        case 3:
        case 4:
        case 5:
        case 6:
            return 2;
        default:
            return 3;
    }
};

/**
 * @returns list of basic classes for player's current heroes (two basic classes for multiclass hero)
 */
export const getCurrentHeroClasses = (gameScene: GameScene) => {
    const allHeroClasses = gameScene.units.reduce((heroClasses, unit) => {
        if (unit.unitType === EUnitType.HERO && !heroClasses.includes(unit.heroClass)) {
            if (unit.heroClassType === EHeroClassType.BASIC) {
                heroClasses.push(unit.heroClass);
            } else if (unit.heroClassType === EHeroClassType.MULTI) {
                getMulticlassSubclasses(unit.heroClass).forEach((basicClass) => {
                    if (heroClasses.includes(basicClass)) {
                        return;
                    }
                    heroClasses.push(basicClass);
                });
            }
        }
        return heroClasses;
    }, [] as EHeroClass[]);

    console.log(">>> getCurrentHeroClasses", allHeroClasses);

    return allHeroClasses;
};
