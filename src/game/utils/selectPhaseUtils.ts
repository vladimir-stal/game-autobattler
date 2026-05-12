import {
    ECardType,
    EHeroClass,
    EHeroClassType,
    EItemType,
    ERoomType,
    ESelectCardHint,
    EUnitType,
    EWeaponItemType,
    IBossFight,
    ICard,
    ICardToMove,
    IHeroSkillSet,
    IItem,
    IMobReward,
    IMobRewardType,
    IUnit,
    THeroAttribute,
} from "../../types";
import { dagger1 } from "../basicWeaponItemConsts";

import { bosses } from "../bossConsts";
import { CardSlot } from "../components/CardSlot";
import { roomsWithHeroClasses } from "../components/SelectController";
import { i18n } from "../consts";
import { BASIC_CLASSES, basicClassHeroes, basicHeroAttributes, mcClassHeroes } from "../heroConsts";
import { basicWeapons, itemsLvl5 } from "../itemConsts";
import { GameScene } from "../scenes/GameScene";
import { mobNoSkill } from "../skills/mobSkills";

import { MOB_MAX_ITEM_COUNT } from "../unitConsts";
import { cheeringGoblinUnit_attacks, cheeringGoblinUnit_skills } from "../units/goblinMobUnits";

import { getRandomArrayItem, getRandomArrayItems } from "./commonUtils";
import { customHeroSelectRoom, customStartingItemsRoom, debugHeroSelectRoom, debugStartingItemsRoom } from "./debugUtils";
import { getAnyClassSubclasses, getMulticlassSubclasses } from "./heroUtils";
import {
    getXFromAllItems,
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
    getCommonItemsWithTop,
    getHeroClassesItemsWithTop,
    getAllItemTop,
    getAllHoldingItems,
    createItem,
    genShopItemCards,
    genShopItemSingleCard,
} from "./itemUtils";
import { getMobs } from "./mobsUtils";
import {
    genShopSkillCards,
    getAllClassesSkills,
    getAllHoldingSkills,
    getHeroClassesSkills,
    getHeroClassSkills,
    getMaxUnitSkillCount,
    getMixedClassesSkills,
    getSkillPrice,
    getTopAllClassesSkill,
    getTopHeroClassSkill,
    isSkillSet,
} from "./skillUtils";
import {
    addMobItem,
    copyUnit,
    createUnits,
    getMaxUnitItemCount,
    getMaxUnitWeaponCount,
    getRandomUnitForRandom,
    getRandomUnitForSell,
    getUnitCardPrice,
} from "./unitUtils";

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

const choiseTypeRooms = [
    ERoomType.ATTRIBUTE_SELECT,
    ERoomType.EXP_SELECT,
    ERoomType.ITEM_SELECT,
    ERoomType.MIXED_CLASS_SELECT,
    ERoomType.SKILLS_SELL_MIXED_CLASSES,
];

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

const wordWrapSymbolLimitForCardText = 20;
//
//
//
////////////////////////////////////////////////////////////////////////////////////////////

export interface IRoomOptions {
    heroClasses?: EHeroClass[];
    boss?: IBossFight;
    autolevel?: number;
}

export const getRooms = (
    day: number,
    hour: number,
    prevRooms: ERoomType[],
    ownedHeroesCount: number,
): ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[] => {
    //console.log("GETROOMS");
    //prevRooms.forEach((prevroom) => console.log(">>  " + prevroom));
    //console.log("-= debug =- getRooms ",day,hour,prevRooms,ownedHeroesCount);
    switch (day) {
        case 0:
            {
                // GAME START FROM DAY 1 NOW
            }
            break;
        case 1:
            {
                if (hour === 0) {
                    return debugHeroSelectRoom ? [null, { roomType: ERoomType.GIVE_TEST_ITEM_2 }, null] : [null, { roomType: ERoomType.HEROES_SELL }, null];
                    // Go change in debugUtils.ts for custom room
                } else if (hour === 1) {
                    //return [null, { roomType: ERoomType.DUEL }, null];
                    return debugStartingItemsRoom
                        ? [null, { roomType: ERoomType.GIVE_TEST_ITEM }, null]
                        : [null, { roomType: ERoomType.ITEM_WEAPON_BASIC_RANDOM }, null];
                    // Go change in debugUtils.ts for custom room
                } else if (hour === 2) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                } else if (hour === 5) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        case 2: {
            if (hour === 1) {
                return [{ roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }];
            } else if (hour === 2) {
                return [null, { roomType: ERoomType.MOBS }, null];
            } else if (hour === 5) {
                return [null, { roomType: ERoomType.DUEL }, null];
            }
            break;
        }
        case 3:
            {
                if (hour === 0) {
                    return [null, { roomType: ERoomType.SKILLS_SELL_ENHANCED }, null];
                } else if (hour === 2) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                } else if (hour === 5) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        case 4:
            {
                if (hour === 2) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                } else if (hour === 3) {
                    return [{ roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }, { roomType: ERoomType.TRIPLE_SET }];
                } else if (hour === 5) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        case 5:
            {
                if (hour === 5) {
                    const boss = getRandomArrayItem(bosses);
                    return [null, { roomType: ERoomType.BOSS, roomOptions: { boss: boss } }, null];
                }
            }
            break;
        case 7:
            {
                // if (hour === 0) {
                //     return [null, { roomType: ERoomType.ENCHANCE_SKILL_CHAINED }, null];
                // } else if (hour % 5 === 0) {
                //     return [null, { roomType: ERoomType.MOBS, roomOptions: { autolevel: Math.floor(hour / 5) } }, null];
                // }
                if (hour === 3) {
                    return [null, { roomType: ERoomType.MOBS }, null];
                } else if (hour === 7) {
                    return [null, { roomType: ERoomType.DUEL }, null];
                }
            }
            break;
        default: {
            if (hour === 3) {
                return [null, { roomType: ERoomType.MOBS }, null];
            } else if (hour === 7) {
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
                sellRooms = hour === 1 && ownedHeroesCount < 3 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
                // ALTERNATIVE: change this to room that sell legendary-rarity items
                sellRooms = hour === 0 ? [ERoomType.ITEM_LEGEND_SELL] : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 6:
            {
                // on day 6 player can buy hero on hour 0 only
                sellRooms = hour === 0 ? sellHeroRoom : sellTypeRoomsWithoutHeroes;
            }
            break;
        case 8:
            {
                if (hour === 0) {
                    sellRooms = [ERoomType.ITEM_LEGEND_SELL];
                }
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
        case 6:
            {
                if (hour === 0) {
                    choiseRooms = [ERoomType.SKILLS_SELL_ENHANCED];
                }
            }
            break;
        case 9:
            {
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
            //console.log(firstRooms[prevSellRoomIndex] + " is REMOVED from sell rooms");
            firstRooms.splice(prevSellRoomIndex, 1);
        }
    }
    if (prevRooms[1]) {
        const prevChoiseRoomIndex = secondRooms.findIndex((roomType) => roomType === prevRooms[1]);
        if (prevChoiseRoomIndex !== -1) {
            //console.log(secondRooms[prevChoiseRoomIndex] + " is REMOVED from choise rooms");
            const text: string = secondRooms.reduce((text, room) => `${text} ${room}`, "");
            //console.log("CHOISE ROOM BEFORE SPLICE: " + text);
            secondRooms.splice(prevChoiseRoomIndex, 1);
        }
    }
    if (prevRooms[2]) {
        const prevRandomRoomIndex = thirdRooms.findIndex((roomType) => roomType === prevRooms[2]);
        if (prevRandomRoomIndex !== -1) {
            //console.log(thirdRooms[prevRandomRoomIndex] + " is REMOVED from random rooms");
            thirdRooms.splice(prevRandomRoomIndex, 1);
        }
    }

    const firstRoom = getRandomArrayItem(firstRooms);
    const secondRoom = getRandomArrayItem(secondRooms);
    const thirdRoom = day === 5 && hour === 0 ? ERoomType.TRIPLE_SET : getRandomArrayItem(thirdRooms);

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
    isAfterReroll: boolean,
    heroClasses?: EHeroClass[],
    tripleSetTypes?: ECardType[],
): { cards: (ICard | null)[]; isSingleSelect: boolean; isSelectRequired: boolean; isRerollAvailable: boolean; hintTextType?: ESelectCardHint } => {
    console.log("GET CARDS", roomType, heroClasses);
    const initialHeroSelect = day === 1 && hour === 0;
    let isSingleSelect = false;
    let isSelectRequired = false;
    let isRerollAvailable = false;
    let hintTextType: ESelectCardHint | undefined = undefined;

    let cards: (ICard | null)[] = [];

    switch (roomType) {
        case ERoomType.ATTRIBUTE_SELECT:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.SELECT_SINGLE;

                const randomAttribute1: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                const randomAttribute2: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                const randomAttribute3: THeroAttribute = getRandomArrayItem(basicHeroAttributes);

                const attrValue1 = getAttrValue(randomAttribute1, day);
                const attrValue2 = getAttrValue(randomAttribute2, day) * 2;
                const attrValue3 = getAttrValue(randomAttribute3, day) * 3;
                cards = [
                    { type: ECardType.ATTRIBUTE, value: attrValue1, price: 0, attribute: randomAttribute1 },
                    { type: ECardType.ATTRIBUTE, value: attrValue2, price: 4, attribute: randomAttribute2 },
                    { type: ECardType.ATTRIBUTE, value: attrValue3, price: 8, attribute: randomAttribute3 },
                ];
            }
            break;
        case ERoomType.ATTRIBUTE_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_REWARD;

                const randomAttribute: THeroAttribute = getRandomArrayItem(basicHeroAttributes);
                const value = getAttrValue(randomAttribute, day);
                const card: ICard = { price: 0, type: ECardType.ATTRIBUTE, value, attribute: randomAttribute };
                cards = [null, card, null];
            }
            break;
        case ERoomType.EXP_SELECT:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.SELECT_SINGLE;

                const basicExpValue = getExpValue(day);
                cards = [
                    { type: ECardType.EXP, value: basicExpValue, price: 0 },
                    { type: ECardType.EXP, value: basicExpValue * 2, price: 2 },
                    { type: ECardType.EXP, value: basicExpValue * 4, price: 6 },
                ];
            }
            break;
        case ERoomType.EXP_SINGLE:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_REWARD;

                const basicExpValue = getExpValue(day);
                cards = [null, { type: ECardType.EXP, value: basicExpValue, price: 0 }, null];
            }
            break;
        case ERoomType.HEROES_SELL:
            {
                isSingleSelect = true;
                isSelectRequired = initialHeroSelect;
                isRerollAvailable = !initialHeroSelect;
                hintTextType = ESelectCardHint.SELECT_SINGLE_HERO;

                //isSingleSelect = false;
                // isSelectRequired = false;
                //isRerollAvailable = true;

                cards = getRandomArrayItems<IUnit>(basicClassHeroes, 3, true).map((unit) => {
                    //return { unit: createUnit(unit), type: ECardType.UNIT, price: getUnitCardPrice(unit, day, hour) };
                    return { unit, type: ECardType.UNIT, price: 0 };
                });
            }
            break;
        case ERoomType.ITEM_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_ITEM;

                const item = getRandomArrayItem(getAllItems(day));
                cards = [null, genShopItemSingleCard(item, true), null];
            }
            break;
        case ERoomType.ITEM_COMMON_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_ITEM;

                const item = getRandomArrayItem(getCommonItems(day));
                cards = [null, genShopItemSingleCard(item, true), null];
            }
            break;
        case ERoomType.ITEM_WEAPON_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                isRerollAvailable = true;

                const items = getRandomArrayItems(getWeaponItems(day), 4, true);
                cards = genShopItemCards(items);
            }
            break;
        case ERoomType.ITEM_COMMON_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                isRerollAvailable = true;

                const items = getCommonItemsWithTop(day, 4);
                cards = genShopItemCards(items);
            }
            break;
        case ERoomType.ITEM_WEAPON_CLASS_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    const items = getRandomArrayItems(getHeroClassesWeaponItems(heroClasses, day), 3, true);
                    cards = genShopItemCards(items);
                }
            }
            break;
        case ERoomType.ITEM_WEAPON_CLASS_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_ITEM;

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
                hintTextType = ESelectCardHint.TAKE_ITEM;

                if (!heroClasses) {
                    cards = [];
                } else {
                    const item = getRandomArrayItem(getHeroClassesItems(heroClasses, day));
                    cards = [null, genShopItemSingleCard(item, true), null];
                }
            }
            break;
        case ERoomType.ITEM_WEAPON_BASIC_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = true;
                hintTextType = ESelectCardHint.TAKE_ITEM;

                let item;
                if (gameScene.units.length === 0) {
                    item = getRandomArrayItem(basicWeapons);
                } else {
                    // get hero classes of heroes player currently has
                    const allHeroClasses = gameScene.units.reduce((heroClasses, unit) => {
                        if (unit.unitType === EUnitType.HERO) {
                            const whatClass = getAnyClassSubclasses(unit.heroClass);
                            whatClass.forEach((c) => {
                                if (!heroClasses.includes(c)) heroClasses.push(c);
                            });
                            //heroClasses.push(unit.heroClass);
                        }
                        return heroClasses;
                    }, [] as EHeroClass[]);
                    //
                    if (allHeroClasses.length === 0) {
                        item = getRandomArrayItem(basicWeapons);
                    } else {
                        const randomClass = getRandomArrayItem(allHeroClasses);
                        const weaponTypes = getHeroClassWeaponTypes(randomClass);
                        const randomWeaponType = getRandomArrayItem(weaponTypes);
                        item = basicWeapons.find((item) => item.weaponType === randomWeaponType);
                    }
                    cards = [null, genShopItemSingleCard(item || dagger1, true), null];
                }
            }
            break;
        case ERoomType.ITEM_SELECT:
            {
                isRerollAvailable = true;
                //
                const topItem = getAllItemTop(day);
                const holdingItem = isAfterReroll ? null : getRandomArrayItem(getAllHoldingItems(gameScene));
                const num = holdingItem ? 2 : 3;
                const items = [...getXFromAllItems(day, num), topItem];
                if (holdingItem) {
                    items.push(holdingItem);
                }

                cards = genShopItemCards(items, true, !!holdingItem);
            }
            break;
        case ERoomType.ITEM_LEGEND_SELL:
            {
                isSingleSelect = true;
                isRerollAvailable = true;
                const items = getRandomArrayItems(itemsLvl5, 3, true);
                cards = genShopItemCards(items, false);
            }
            break;
        case ERoomType.ITEM_CLASS_SELL:
            {
                if (!heroClasses) {
                    cards = [];
                } else {
                    //console.log("ERoomType.ITEM_CLASS_SELL");
                    //const items = getRandomArrayItems(getHeroClassesItems(heroClasses, day), 4, true);
                    const items = getHeroClassesItemsWithTop(heroClasses, day, 4);
                    //console.log(items);
                    cards = genShopItemCards(items);
                }
            }
            break;
        case ERoomType.MIXED_CLASS_SELECT:
            {
                isRerollAvailable = false;

                if (!heroClasses) {
                    cards = [];
                } else {
                    isRerollAvailable = true;

                    const heroClass = heroClasses[0];
                    const heroClassItems = getRandomArrayItems(getHeroClassItems(heroClass, day), 3, true);
                    const heroClassSkills = getRandomArrayItems(getHeroClassSkills(heroClass, day), 3, true);

                    const mixed: (IItem | IHeroSkillSet)[] = getRandomArrayItems(
                        [...heroClassItems.filter((item) => item), ...heroClassSkills.filter((skill) => skill)],
                        4,
                        true,
                    );

                    cards = mixed.map((itemOrSkill) => {
                        if (!itemOrSkill) {
                            return null;
                        } else if (isSkillSet(itemOrSkill)) {
                            return { type: ECardType.SKILL, price: getSkillPrice(itemOrSkill.priceLevel), skill: itemOrSkill };
                        } else {
                            return genShopItemSingleCard(itemOrSkill);
                        }
                    });
                }
            }
            break;
        case ERoomType.SKILL_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_SKILL;

                const randomSkill = getRandomArrayItem(getAllClassesSkills(day));
                cards = [null, { type: ECardType.SKILL, price: 0, skill: randomSkill }, null];
            }
            break;
        case ERoomType.SKILL_CLASS_RANDOM:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_SKILL;

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
                isRerollAvailable = true;

                const topLevelSkill = getTopAllClassesSkill(day);
                const holdingSkill = getRandomArrayItem(getAllHoldingSkills(gameScene));
                const num = holdingSkill ? 2 : 3;
                const randomSkills = getRandomArrayItems(getAllClassesSkills(day), num, true);
                const skills = [...randomSkills, topLevelSkill, holdingSkill];

                console.log("SKILLS_SELL skills", skills);

                cards = genShopSkillCards(skills, !!holdingSkill);
            }
            break;
        case ERoomType.SKILLS_SELL_MIXED_CLASSES:
            {
                isRerollAvailable = true;

                const randomSkills = getRandomArrayItems(getMixedClassesSkills(day), 4, true);

                cards = genShopSkillCards(randomSkills, false);
            }
            break;
        case ERoomType.SKILLS_CLASS_SELL:
            {
                isRerollAvailable = true;

                if (!heroClasses) {
                    cards = [];
                } else {
                    isRerollAvailable = true;

                    const randomHeroClass = getRandomArrayItem(heroClasses);
                    const topLevelSkill = getTopHeroClassSkill(randomHeroClass, day);
                    const holdingSkill = getRandomArrayItem(getAllHoldingSkills(gameScene).filter((skill) => skill.heroClasses.includes(randomHeroClass)));
                    const num = holdingSkill ? 2 : 3;
                    // if no randomHeroClass skills in current party, then holdingSkill is null
                    // and then 3 random skills instead of 2
                    const skills = getRandomArrayItems(getHeroClassesSkills(heroClasses, day), num, true);

                    const allSkills = [...skills, topLevelSkill, { ...holdingSkill, isChained: false }];
                    cards = genShopSkillCards(allSkills, !!holdingSkill);
                }
            }
            break;
        case ERoomType.SKILLS_SELL_ENHANCED:
            {
                isSingleSelect = true;
                isSelectRequired = false;
                isRerollAvailable = true;
                hintTextType = ESelectCardHint.SELECT_SINGLE;

                // add skill to fit the player current hero
                // get hero classes of heroes player currently has
                const allHeroClasses = gameScene.units.reduce((heroClasses, unit) => {
                    if (unit.unitType === EUnitType.HERO) {
                        const whatClass = getAnyClassSubclasses(unit.heroClass);
                        whatClass.forEach((c) => {
                            if (!heroClasses.includes(c)) heroClasses.push(c);
                        });
                        //heroClasses.push(unit.heroClass);
                    }
                    return heroClasses;
                }, [] as EHeroClass[]);
                /*const existingHeroClasses = gameScene.units.reduce((heroClasses, unit) => {
                    if (unit.unitType === EUnitType.HERO && !heroClasses.includes(unit.heroClass)) {
                        heroClasses.push(unit.heroClass);
                    }
                    return heroClasses;
                }, [] as EHeroClass[]);*/
                //
                //if (existingHeroClasses.length !== 0) {
                const existingHeroSkill = getRandomArrayItem(getHeroClassesSkills(allHeroClasses, day));

                //}

                const skills = getAllClassesSkills(day)
                    .filter((skill) => !skill.isChained)
                    .filter((skill) => skill.id !== existingHeroSkill?.id);
                const randomSkills = getRandomArrayItems(skills, 3, true).map((skill) => {
                    // const enchancedOption = getRandomArrayItem(["isActivateOnStart", "isChained"]);
                    // const enchancedSkill = { ...skill };
                    // enchancedSkill[enchancedOption] = true;
                    const enchancedSkill = { ...skill, isChained: true };
                    return enchancedSkill;
                });

                //if (existingHeroClasses.length !== 0) {
                randomSkills.push({ ...existingHeroSkill, isChained: true });
                //}

                cards = randomSkills.map((skill) => {
                    return { skill, type: ECardType.SKILL, price: 0 };
                });
            }
            break;
        case ERoomType.TRIPLE_SET:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                hintTextType = ESelectCardHint.TAKE_ALL_REWARDS;

                if (!tripleSetTypes) {
                    cards = [];
                } else {
                    cards = [];
                    tripleSetTypes?.forEach((cardType) => {
                        switch (cardType) {
                            case ECardType.EXP:
                                {
                                    // getExpValue(day) ~ 1 1 1 1 2 2 2 2 3 .. 3 ~ 1+ day/5
                                    //                    0 0 1 1 1 2 2 2 3 ..   ~ day/3
                                    //                  = 1 1 2 2 3 4 4 4 6
                                    cards.push({ type: ECardType.EXP, value: Math.floor(day / 3) + getExpValue(day), price: 0 });
                                }
                                break;
                            case ECardType.EXP_PARTY: // disabled
                                {
                                    cards.push({ type: ECardType.EXP_PARTY, value: getExpValue(day), price: 0 });
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
                                    const randomCurrentHeroClass = heroClasses ? heroClasses.pop() : getRandomArrayItem(getCurrentHeroClasses(gameScene));
                                    if (randomCurrentHeroClass) {
                                        const randomSkill = getRandomArrayItem(getHeroClassSkills(randomCurrentHeroClass, day));
                                        cards.push({ price: 0, type: ECardType.SKILL, skill: randomSkill });
                                    }
                                }
                                break;
                            case ECardType.ITEM:
                                {
                                    const randomCurrentHeroClass = heroClasses ? heroClasses.pop() : getRandomArrayItem(getCurrentHeroClasses(gameScene));
                                    if (randomCurrentHeroClass) {
                                        const item = getRandomArrayItem(getHeroClassItems(randomCurrentHeroClass, day));
                                        cards.push(genShopItemSingleCard(item, true));
                                    }
                                }
                                break;
                            case ECardType.UNIT:
                                {
                                    const randomUnit = { ...getRandomUnitForRandom(day) };
                                    addMobItem(randomUnit);
                                    cards.push({ unit: randomUnit, type: ECardType.UNIT, price: 0 });
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
                hintTextType = ESelectCardHint.TAKE_REWARD;

                const randomUnit = copyUnit({ ...getRandomUnitForRandom(day) });
                addMobItem(randomUnit);

                cards = [null, { unit: randomUnit, type: ECardType.UNIT, price: 0 }, null];
            }
            break;
        case ERoomType.UNIT_SELL:
            {
                isSingleSelect = false;
                isSelectRequired = false;

                const unit1 = copyUnit({ ...getRandomUnitForSell(day - 1) });
                addMobItem(unit1);

                const unit2 = copyUnit({ ...getRandomUnitForSell(day) });
                addMobItem(unit2);

                const unit3 = copyUnit({ ...getRandomUnitForSell(day + 1) });
                addMobItem(unit3);

                const randomUnits = [unit1, unit2, unit3];
                cards = randomUnits.map((unit, index) => {
                    const price = index === 0 ? Math.floor((getUnitCardPrice(unit, 24, 7) + 1) / 2) : getUnitCardPrice(unit, day, hour);
                    return { unit, type: ECardType.UNIT, price };
                });
            }
            break;
        //
        // SPECIAL ROOMS
        //
        case ERoomType.MOBS:
            {
                isSingleSelect = true;
                isSelectRequired = true;
                hintTextType = ESelectCardHint.SELECT_SINGLE_DUNGEON;

                const randomMobs = getMobs(gameScene.selectController.day);
                const autolevel = Math.max(1, gameScene.selectController.day - 1);
                console.log("ERoomType.MOBS", randomMobs);

                cards = randomMobs.map((mobs, idx) => {
                    const { name, units, rewards, description, level } = mobs;
                    const reward = getRandomArrayItem(rewards);

                    const lines = description.split(" ");
                    let wordwrap = "";
                    let tw = 0;
                    lines.forEach((word) => {
                        if (tw == 0) {
                            wordwrap += "\n" + word;
                            tw = word.length;
                        } else if (tw + word.length + 1 > wordWrapSymbolLimitForCardText) {
                            wordwrap += "\n" + word;
                            tw = word.length;
                        } else {
                            tw = tw + word.length + 1;
                            wordwrap += " " + word;
                        }
                    });
                    return {
                        mobs: {
                            units: createUnits(units, autolevel > 5 ? autolevel : -1), // autolevel + idx
                            reward,
                        },
                        type: ECardType.MOBS,
                        price: 0,
                        //name: name + "\n" + wordwrap,
                        name: name + "\n" + i18n.ui.LEVEL + " " + level,
                        description: wordwrap, //wordwrap + "\nDifficulty ~" + (autolevel + idx),
                    };
                });
            }
            break;
        case ERoomType.BOSS:
            {
                const randomBoss = getRandomArrayItem(bosses);
                const { name, units } = randomBoss;
                cards = [
                    null,
                    {
                        mobs: { units: createUnits(units), reward: { exp: 0, type: IMobRewardType.GOLD, value: 1 } },
                        type: ECardType.MOBS,
                        price: 0,
                        name,
                    },
                    null,
                ];
            }
            break;
        // FOR TESTING
        case ERoomType.GIVE_TEST_ITEM:
            {
                isSingleSelect = false;
                isSelectRequired = false;
                cards = customStartingItemsRoom();
                // Go change in debugUtils.ts
            }
            break;
        case ERoomType.GIVE_TEST_ITEM_2:
            {
                cards = customHeroSelectRoom();
                // Go change in debugUtils.ts
            }
            break;
        default:
            cards = [];
    }

    //console.log("SELECT CARDS", cards);

    console.log("GET CARDS > result", cards, isSingleSelect, isSelectRequired, isRerollAvailable);

    return { cards, isSingleSelect, isSelectRequired, isRerollAvailable, hintTextType };
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

/** Highlight slots or cards to be a target for another selected card (move, add item, add attribute, heal, ...) */
/**
 * @param parentUnitId id of unit on units panel - used to check if item is moved from unit to same unit
 */
//export const activateSlots = (slots: CardSlot[], value: boolean, gameScene: GameScene, card?: ICard, parentUnitId?: string) => {
export const activateSlots = (slots: CardSlot[], value: boolean, gameScene: GameScene, cardToMove?: ICardToMove) => {
    slots.forEach((slot) => {
        if (!value || !cardToMove) {
            slot.setIsActive(false);
            return;
        }

        if (gameScene.cardToMove?.cardSlot === slot) {
            return;
        }

        const { card, parentUnitId } = cardToMove;
        const { type, item, skill } = card;
        switch (type) {
            case ECardType.ATTRIBUTE:
            case ECardType.EXP:
                {
                    if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT && slot.card?.card.unit?.unitType === EUnitType.HERO) {
                        slot.setIsActive(true, "apply");
                    }
                }
                break;
            case ECardType.UNIT:
                {
                    if (slot.isInventory) {
                        return;
                    }

                    if (slot.isEmpty || slot.card?.card.type === ECardType.UNIT) {
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
                        console.log(">>>> UPGRADE PANEL activate");
                        slot.setIsActive(true);
                        return;
                    }

                    // PLACE ITEM IN INVENTORY

                    if (slot.isInventory && slot.isEmpty) {
                        slot.setIsActive(true);
                        return;
                    }

                    // PLACE ON THE COPY OF ITEM IN INVENTORY TO UPGRADE
                    if (slot.isInventory && !slot.isEmpty) {
                        const { type, item: slotItem } = slot.card?.card || {};
                        if (type === ECardType.ITEM && slotItem && slotItem.id === item.id && slotItem.level === item.level && item.nextLevel) {
                            slot.setIsActive(true, "merge");
                            return;
                        }
                    }

                    // PLACE ITEM ON UNIT

                    const { unit } = slot.card?.card || {};
                    if (!unit) {
                        return;
                    }

                    const { unitType, heroClass, heroClassType, items, mobHeroClasses } = unit;

                    // case move target is unit
                    if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT) {
                        // case moving items from unit to same unit
                        if (parentUnitId && slot.card?.card.unit?.id === parentUnitId) {
                            slot.setIsActive(true, "equip");
                            return;
                        }
                        //
                        // CASE TARGET IS MOB
                        if (unitType === EUnitType.UNIT) {
                            if (items?.length === MOB_MAX_ITEM_COUNT) {
                                return;
                            }

                            if (item.type === EItemType.COMMON) {
                                slot.setIsActive(true, "equip");
                            } else {
                                if (item.heroClasses.includes(EHeroClass.ALL) || item.weaponType === EWeaponItemType.DAGGER) {
                                    slot.setIsActive(true, "equip");
                                    return;
                                }
                                const weaponHeroClasses = getWeaponItemHeroClasses(item.weaponType);
                                if (!mobHeroClasses) {
                                    return;
                                }
                                const mobHeroClassFits = mobHeroClasses.find((mobHeroClass) => {
                                    return weaponHeroClasses.includes(mobHeroClass);
                                });
                                if (mobHeroClassFits) {
                                    slot.setIsActive(true, "equip");
                                }
                            }

                            return;
                        }

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
                            if (!item.heroClasses.includes(EHeroClass.MOB)) slot.setIsActive(true, "equip");

                            return;
                        }

                        if (!heroClass || !item.weaponType) {
                            return;
                        }

                        if (item.heroClasses.includes(EHeroClass.ALL) || item.weaponType === EWeaponItemType.DAGGER) {
                            if (!item.heroClasses.includes(EHeroClass.MOB)) {
                                slot.setIsActive(true, "equip");
                            }
                            return;
                        }

                        const weaponHeroClasses = item.heroClasses.length > 0 ? item.heroClasses : getWeaponItemHeroClasses(item.weaponType);
                        if (heroClassType === EHeroClassType.BASIC) {
                            if (weaponHeroClasses.includes(heroClass)) {
                                slot.setIsActive(true, "equip");
                            }
                        } else {
                            const heroSubclasses = getMulticlassSubclasses(heroClass);
                            if (weaponHeroClasses.includes(heroSubclasses[0]) || weaponHeroClasses.includes(heroSubclasses[1])) {
                                slot.setIsActive(true, "equip");
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

                    // MC SKILL CAN ONLY BE PLACED ON SAME HERO
                    if (skill.isMcSkill) {
                        if (!slot.isEmpty && slot.card?.card.type === ECardType.UNIT && parentUnitId && slot.card?.card.unit?.id === parentUnitId) {
                            slot.setIsActive(true, "equip");
                        }
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

                    // place on the copy of skill in inventory to upgrade
                    if (slot.isInventory && !slot.isEmpty) {
                        const { type, skill: slotSkill } = slot.card?.card || {};
                        if (type === ECardType.SKILL && slotSkill && slotSkill.id === skill.id && slotSkill.level === skill.level) {
                            slot.setIsActive(true, "merge");
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
                        // case moving skill from unit to same unit
                        if (parentUnitId && slot.card?.card.unit?.id === parentUnitId) {
                            slot.setIsActive(true, "equip");
                            return;
                        }

                        if (!unitType || !heroClassType || !heroClass) {
                            return;
                        }

                        // check count of skill on the hero
                        const maxSkillCount = getMaxUnitSkillCount(heroClassType);
                        if (skills?.length === maxSkillCount) {
                            return;
                        }

                        if (skill.heroClasses.includes(EHeroClass.ALL)) {
                            slot.setIsActive(true, "equip");
                        } else if (heroClassType === EHeroClassType.BASIC) {
                            if (skill.heroClasses.includes(heroClass)) {
                                slot.setIsActive(true, "equip");
                            }
                        } else {
                            if (skill.heroClasses.includes(heroClass)) {
                                slot.setIsActive(true, "equip");
                            } else {
                                const heroSubclasses = getMulticlassSubclasses(heroClass);
                                if (skill.heroClasses.includes(heroSubclasses[0]) || skill.heroClasses.includes(heroSubclasses[1])) {
                                    slot.setIsActive(true, "equip");
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
    console.log("getMobRewardCard >>> ", reward);
    const { type, value, item, skill, unit } = reward;
    switch (type) {
        case IMobRewardType.GOLD: {
            return { price: 0, type: ECardType.GOLD, value };
        }
        case IMobRewardType.ITEM: {
            return { price: 0, type: ECardType.ITEM, item };
        }
        case IMobRewardType.SKILL: {
            return { price: 0, type: ECardType.SKILL, skill };
        }
        case IMobRewardType.UNIT: {
            const rewardUnit = copyUnit(unit!);
            addMobItem(rewardUnit);
            return { price: 0, type: ECardType.UNIT, unit: rewardUnit };
        }
        default: {
            console.log("ERROR! No card for reward found", type);
            return { price: 0, type: ECardType.GOLD, value: 1 };
        }
    }
};

export const getDuelRewardCards = (day: number): ICard[] => {
    const isAttr = day > 1;
    const reward: ICard[] = [];

    if (day > 2) {
        const expValue = getExpAfterDuelValue(day);
        const firstExpPart = Math.floor(expValue / 3);
        const secondExpPart = expValue - firstExpPart;
        reward.push({ price: 0, type: ECardType.EXP_PARTY, value: firstExpPart });
        reward.push({ price: 0, type: ECardType.EXP, value: secondExpPart });
    } else {
        reward.push({ price: 0, type: ECardType.EXP, value: getExpAfterDuelValue(day) });
    }

    if (isAttr) {
        const randomAttr = getRandomArrayItem(basicHeroAttributes);
        const attrValue = getAttrValue(randomAttr, day);
        reward.push({ price: 0, type: ECardType.ATTRIBUTE, attribute: randomAttr, value: attrValue });
    }
    return reward;
};

export const getAttrValue = (attr: THeroAttribute, day: number) => {
    //console.log(">>> getAttrValue", attr, day);
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

    //console.log("basic value", basicValue);

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

export const getExpValue = (day: number) => {
    if (day < 5) {
        return 1;
    } else if (day < 9) {
        return 2;
    } else {
        return 3;
    }
};

export const getExpAfterDuelValue = (day: number) => {
    return day;
};

export const getSelectRoomDisplayName = (roomType: ERoomType) => {
    return i18n.rooms[roomType];
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
    //gameScene.units
    console.log("-= Units =-", gameScene.unitPanel.getUnits());
    const allHeroClasses = gameScene.unitPanel.getUnits().reduce((heroClasses, unit) => {
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

    //console.log(">>> getCurrentHeroClasses", allHeroClasses);

    return allHeroClasses;
};

/**
 *
 * @param rerollCount count of already done rerolls
 */
export const getRerollPrice = (rerollCount: number, roomType: ERoomType) => {
    if (roomType === ERoomType.HEROES_SELL) {
        return (rerollCount + 1) * 2;
    }

    return rerollCount + 1;
};
