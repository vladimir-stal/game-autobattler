import {
    ECardType,
    EHeroClass,
    EItemTargetType,
    ERoomType,
    ESelectCardHint,
    EUnitType,
    ICard,
    IItemBonus,
    IMobReward,
    IPreDuelHistoryExport,
    IUnit,
    IUnitExport,
} from "../../types";
import { bosses } from "../bossConsts";
import { GameScene } from "../scenes/GameScene";
import { getRandomArrayItem, getRandomArrayItems } from "../utils/commonUtils";
import { applyItemBonuses, getItemPrice, upgradeItem } from "../utils/itemUtils";
import { getCards, getDuelRewardCards, getGold, getIncome, getMobRewardCard, getRooms } from "../utils/selectPhaseUtils";
import { getSkillPrice, upgradeSkillSet } from "../utils/skillUtils";
import { addAttributeToUnit, addExp, addExpToUnit, getUnitCardPrice } from "../utils/unitUtils";
import { Card } from "./Card";

/** Room which activate instant action on select and dont have cards to select */
export const instantRooms = [ERoomType.GOLD, ERoomType.INCOME, ERoomType.EXP_ALL, ERoomType.DUEL, ERoomType.BOSS];

/** Room which moves player to the duel phase */
export const duelRooms = [ERoomType.DUEL, ERoomType.MOBS, ERoomType.BOSS];

/** Room which provide cards for specific hero classes */
export const roomsWithHeroClasses = [
    ERoomType.ITEM_CLASS_RANDOM,
    ERoomType.ITEM_WEAPON_CLASS_RANDOM,
    ERoomType.ITEM_CLASS_SELL,
    ERoomType.ITEM_WEAPON_CLASS_SELL,
    ERoomType.SKILLS_CLASS_SELL,
    ERoomType.SKILL_CLASS_RANDOM,
    ERoomType.MIXED_CLASS_SELECT,
];

export const roomsWithSingleHeroClass = [ERoomType.MIXED_CLASS_SELECT];

export const tripleSetCardTypes = [
    ECardType.ATTRIBUTE,
    ECardType.EXP,
    ECardType.GOLD,
    ECardType.ITEM,
    ECardType.SKILL,
    //ECardType.UNITS,
    //ECardType.EXP_PARTY,
];

/** Main select game phase controller  */
export class SelectController {
    gameScene: GameScene;

    day: number;
    hour: number;

    maxHours: number;

    /** Reward player will get after mobs defeat */
    mobsReward: IMobReward;

    /** Previous hour rooms (ignore duel and mobs rooms) */
    prevRooms: ERoomType[];

    /** Dev/Debug pre duel party history */
    partyPerDuelSnapshot: IPreDuelHistoryExport;

    constructor(gameScene: GameScene) {
        this.gameScene = gameScene;
        this.init();
    }

    init() {
        this.day = 1;
        this.hour = 0;
        this.maxHours = 6;
        this.prevRooms = [];
        this.partyPerDuelSnapshot = {};
    }

    sellCardPrice(card: ICard): number {
        switch (card.type) {
            case ECardType.ITEM:
                return !card.item ? 0 : card.item.sellPrice !== undefined ? card.item.sellPrice : Math.floor((getItemPrice(card.item) + 1) / 2);
            case ECardType.SKILL:
                return !card.skill ? 0 : Math.floor((getSkillPrice(card.skill.priceLevel) + 1) / 2);
            case ECardType.UNIT:
                return !card.unit ? 0 : Math.floor((getUnitCardPrice(card.unit, 24, 7) + 1) / 2);
        }
        return 0;
    }

    showNextRoomSelect() {
        this.gameScene.cardSelectPanel.hide();
        const single = this.gameScene.cardSelectPanel.isSingleSelect && this.gameScene.cardSelectPanel.boughtCardIndexes.length > 0;
        if (!single)
            this.gameScene.cardSelectPanel.cards
                .filter((card, index) => !!card && card.price === 0 && !this.gameScene.cardSelectPanel.boughtCardIndexes.includes(index))
                .forEach((card) => {
                    if (!card) {
                        return;
                    }
                    const price = this.sellCardPrice(card);
                    console.log("Unpicked item, price ", price);
                    this.gameScene.bankController.addToBank(price);
                });
        this.setHour(this.hour + 1);
        this.showRoomSelect();
    }

    async showMobRewards() {
        this.gameScene.roomSelectPanel.hide();
        const rewardCard = getMobRewardCard(this.mobsReward);
        const expCard = { price: 0, type: ECardType.EXP_PARTY, value: this.mobsReward.exp };
        const cards = [expCard, rewardCard, null];
        console.log("SHOW REWARDS", rewardCard);

        // load image
        if (rewardCard.type === ECardType.UNIT && rewardCard.unit) {
            console.log(">>> REWaRds unit to load", rewardCard.unit.id);
            await this.gameScene.imageLoadController.loadIdleUnits([rewardCard.unit.id]);
        }
        //

        this.gameScene.cardSelectPanel.show(cards, ERoomType.MOBS_REWARDS, undefined, {
            isSingleSelect: false,
            isSelectRequired: false,
            hintTextType: ESelectCardHint.TAKE_ALL_REWARDS,
        });
    }

    showDuelRewards() {
        this.gameScene.roomSelectPanel.hide();
        const rewardCards = getDuelRewardCards(this.day);
        this.gameScene.cardSelectPanel.show(rewardCards, ERoomType.MOBS_REWARDS, undefined, {
            isSingleSelect: false,
            isSelectRequired: true,
            hintTextType: ESelectCardHint.TAKE_ALL_REWARDS,
        });
        this.gameScene.topPanel.nextRoomButton.setVisible(false);
    }

    showRoomSelect() {
        const ownedHeroesCount = this.gameScene.units.reduce((count, unit) => {
            if (unit.unitType === EUnitType.HERO) {
                count++;
            }
            return count;
        }, 0);
        const rooms = getRooms(this.day, this.hour, this.prevRooms, ownedHeroesCount);
        rooms.forEach((room, index) => {
            if (room && !duelRooms.includes(room.roomType)) {
                this.prevRooms[index] = room.roomType;
            }
        });
        //console.log("showRoomSelect", rooms);

        this.gameScene.topPanel.hideNextRoomButton();

        this.gameScene.roomSelectPanel.show(rooms);
        this.gameScene.cardSelectPanel.hide();
    }

    async showCardSelect(
        type: ERoomType,
        isAfterReroll: boolean,
        { heroClasses, isRerollAvailableForce, tripleSetTypes }: { heroClasses?: EHeroClass[]; isRerollAvailableForce?: boolean; tripleSetTypes?: ECardType[] },
    ) {
        //console.log("SHOW CARD SELECT", type);
        if (type === ERoomType.UPGRADE_SKILL_OR_ITEM) {
            this.gameScene.cardUpgradePanel.show();
            this.gameScene.topPanel.nextRoomButton.setVisible(true);
            return;
        } else if (type === ERoomType.ENCHANCE_SKILL_CHAINED) {
            this.gameScene.skillCardEnchantPanel.show();
            this.gameScene.topPanel.nextRoomButton.setVisible(true);
            return;
        }

        const { cards, isSingleSelect, isSelectRequired, isRerollAvailable, hintTextType } = getCards(
            this.gameScene,
            type,
            this.day,
            this.hour,
            isAfterReroll,
            heroClasses,
            tripleSetTypes,
        );

        // load images
        this.gameScene.cardSelectPanel.showLoading();
        const unitsToLoad = cards.filter((card) => !!card && card.type === ECardType.UNIT && card.unit).map((card) => card!.unit!.id);
        await this.gameScene.imageLoadController.loadIdleUnits(unitsToLoad);
        //

        const isReroll = isRerollAvailableForce !== undefined ? isRerollAvailableForce : isRerollAvailable;
        this.gameScene.cardSelectPanel.show(cards, type, heroClasses, { isSingleSelect, isSelectRequired, isRerollAvailable: isReroll, hintTextType });

        this.gameScene.topPanel.nextRoomButton.setVisible(!isSelectRequired);
    }

    startNewDay() {
        this.setDay(this.day + 1);
        this.setHour(-1);
        //TODO: calculate max hours for day here
        this.maxHours = 3;
        this.showDuelRewards();
        //this.showRoomSelect();
    }

    showDuelRoom() {
        this.gameScene.roomSelectPanel.hide();
        this.gameScene.cardSelectPanel.hide();
    }

    selectRoom(
        type: ERoomType,
        day: number,
        { heroClasses, tripleSetTypes, units }: { heroClasses?: EHeroClass[]; tripleSetTypes?: ECardType[]; units?: IUnit[] },
    ) {
        if (instantRooms.includes(type)) {
            this.executeRoomAction(type, day, units);
            if (!duelRooms.includes(type)) {
                this.showNextRoomSelect();
            }
            return;
        }

        this.gameScene.roomSelectPanel.hide();
        this.showCardSelect(type, false, { heroClasses, tripleSetTypes });
    }

    makePreDuelSnapshot(day: number) {
        this.partyPerDuelSnapshot[day] = this.gameScene.unitPanel.slots
            .filter((us) => !!us?.slot?.card?.card?.unit)
            .map((us) => {
                //if (!!us?.slot?.card?.card?.unit) {
                const uscc = us.slot.card!.card.unit!;
                const unitEntry: IUnitExport = {
                    id: uscc.id,
                    level: uscc.level,
                    addedAttributes: uscc.addedAttributes ? [...uscc.addedAttributes] : [],
                    items: uscc.items.map((item) => {
                        //if (item) {
                        return {
                            id: item.id,
                            level: item.level,
                            // addedBonuses: item.bonuses.map((b) => {
                            //     if (!!b && (b.valueType === "evolvedNumber" || b.valueType === "evolvedPercent")) {
                            //         return b;
                            //     }
                            // }),
                            addedBonuses: item.bonuses
                                .filter((b) => !!b && b.isEvolved) //(b.valueType === "evolvedNumber" || b.valueType === "evolvedPercent"))
                                .map((ib) => {
                                    return { ...ib };
                                }),
                        };
                        //}
                    }),
                    skills: uscc.skills.map((skill) => {
                        //if (skill) {
                        return {
                            id: skill.id,
                            level: skill.level,
                            isChained: skill.isChained,
                        };
                        //}
                    }),
                };
                return unitEntry;
                //}
            });
        console.log("--= Export build day " + day + " =--", this.partyPerDuelSnapshot);
    }

    /** Execute instant room action when room is selected on roomSelectPanel */
    executeRoomAction(type: ERoomType, day: number, units?: IUnit[]) {
        switch (type) {
            case ERoomType.DUEL:
                {
                    this.makePreDuelSnapshot(day);
                    this.gameScene.changeToDuelPhase();
                }
                break;
            case ERoomType.BOSS:
                {
                    if (!units) {
                        console.log("ERROR! No units for boss");
                        return;
                    }
                    this.makePreDuelSnapshot(day);
                    this.gameScene.changeToBossDuelPhase(units);
                }
                break;
            case ERoomType.GOLD:
                {
                    this.gameScene.bankController.addToBank(getGold(day));
                }
                break;
            case ERoomType.INCOME:
                {
                    this.gameScene.bankController.increaseIncome(getIncome(day));
                }
                break;
            default:
                console.log("ERROR! No action for room type found", type);
        }
    }

    /** Execute instant card action when card is selected on cardSelectPanel */
    executeCardAction(card: ICard) {
        const { type, mobs, value } = card;
        console.log("executeCardAction", type, mobs);
        switch (type) {
            case ECardType.GOLD:
                {
                    if (value === undefined) {
                        return;
                    }
                    this.gameScene.bankController.addToBank(value);
                }
                break;
            case ECardType.MOBS:
                {
                    if (!mobs) {
                        return;
                    }
                    this.gameScene.selectController.setMobsReward(mobs.reward);
                    this.gameScene.changeToMobsDuelPhase(mobs.units);
                }
                break;
            case ECardType.EXP_PARTY:
                {
                    if (value === undefined) {
                        return;
                    }
                    this.gameScene.unitPanel.slots.forEach((sv) => {
                        sv.slot.card?.card.unit && addExpToUnit(sv.slot.card.card.unit, value);
                    });
                    this.gameScene.unitPanel.refreshAllCards();
                }
                break;
            default:
                console.log("ERROR! No action for card type found", type);
        }
    }

    /** Perform card action when it is used on another card (e.x. item is used on unit) */
    performCardAction(card: ICard, targetCard: Card) {
        //console.log("to performCardAction");

        switch (card.type) {
            case ECardType.ATTRIBUTE:
                {
                    if (!targetCard.card.unit) {
                        return;
                    }

                    const { value, attribute } = card;
                    if (!attribute || value === undefined) {
                        return;
                    }

                    addAttributeToUnit(targetCard.card.unit, attribute, value);
                    targetCard.refresh();
                }
                break;
            case ECardType.EXP:
                {
                    if (!targetCard.card.unit) {
                        return;
                    }

                    const { value } = card;
                    if (value === undefined) {
                        return;
                    }

                    addExpToUnit(targetCard.card.unit, value);
                    targetCard.refresh();
                }
                break;
            case ECardType.ITEM:
                {
                    if (!card.item) {
                        return;
                    }

                    // item to item (upgrade item)
                    if (
                        targetCard.card.type === ECardType.ITEM &&
                        targetCard.card.item &&
                        targetCard.card.item.id === card.item.id &&
                        targetCard.card.item.level === card.item.level
                    ) {
                        // upgrade item
                        console.log("UPGRADE ITEM");
                        const upgradedItem = upgradeItem(targetCard.card.item);
                        console.log("new item:", upgradedItem.name);
                        targetCard.setItem(upgradedItem);
                        return;
                    }

                    // item to unit
                    if (!targetCard.card.unit) {
                        return;
                    }

                    const { unit } = targetCard.card;
                    const { items } = unit;

                    const units = this.gameScene.unitPanel.getUnits();

                    applyItemBonuses(card.item, unit, units);

                    items.push(card.item);
                    // weapons go first, common items second
                    items.sort((aItem, bItem) => (bItem.weaponType ? 1 : 0) - (aItem.weaponType ? 1 : 0));

                    if (card.item.bonuses.find((bonus) => bonus.targetType === EItemTargetType.ALL_ALLIES)) {
                        this.gameScene.unitPanel.refreshAllCards();
                    } else {
                        targetCard.refresh();
                    }
                    // animation
                    targetCard.heroCard?.playAddItem(items.findIndex((item) => item.id === card.item?.id));
                }
                break;
            case ECardType.SKILL:
                {
                    if (!card.skill) {
                        return;
                    }

                    // skill to skill (upgrade skill)
                    if (targetCard.card.skill && targetCard.card.skill.id === card.skill.id && targetCard.card.skill.level === card.skill.level) {
                        // upgrade skill
                        const upgradedSkill = upgradeSkillSet(targetCard.card.skill, card.skill);
                        targetCard.setSkill(upgradedSkill);
                        return;
                    }

                    // skill to unit
                    if (!targetCard.card.unit) {
                        return;
                    }

                    const { unit } = targetCard.card;
                    if (!card.skill) {
                        return;
                    }
                    const { skills } = unit;

                    skills.push(card.skill);

                    targetCard.refresh();
                    // animation
                    targetCard.heroCard?.playAddSkill();
                }
                break;
            default: {
                console.log("ERROR! NO action found for card", card.type);
            }
        }
    }

    setMobsReward(mobsReward: IMobReward) {
        this.mobsReward = mobsReward;
    }

    setDay(day: number) {
        this.day = day;
        this.gameScene.topPanel.setDay(this.day);
    }

    setHour(hour: number) {
        this.hour = hour;
        this.gameScene.topPanel.setHour(this.hour);
    }
}
