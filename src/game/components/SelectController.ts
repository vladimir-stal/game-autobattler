import { ECardType, EHeroClass, ERoomType, EUnitType, ICard, IMobReward, IUnit } from "../../types";
import { bosses } from "../bossConsts";
import { GameScene } from "../scenes/GameScene";
import { getRandomArrayItem, getRandomArrayItems } from "../utils/commonUtils";
import { applyItemBonuses, upgradeItem } from "../utils/itemUtils";
import { getCards, getDuelRewardCards, getGold, getIncome, getMobRewardCard, getRooms } from "../utils/selectPhaseUtils";
import { upgradeSkillSet } from "../utils/skillUtils";
import { addAttributeToUnit, addExpToUnit } from "../utils/unitUtils";
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

export const tripleSetCardTypes = [ECardType.ATTRIBUTE, ECardType.EXP, ECardType.GOLD, ECardType.ITEM, ECardType.SKILL];

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

    constructor(gameScene: GameScene) {
        this.day = 0;
        this.hour = 0;
        this.maxHours = 6;
        this.gameScene = gameScene;
        this.prevRooms = [];
    }

    showNextRoomSelect() {
        this.gameScene.cardSelectPanel.hide();
        this.setHour(this.hour + 1);
        this.showRoomSelect();
    }

    showMobRewards() {
        this.gameScene.roomSelectPanel.hide();
        const rewardCard = getMobRewardCard(this.mobsReward);
        const expCard = { price: 0, type: ECardType.EXP, value: this.mobsReward.exp };
        const cards = [expCard, rewardCard, null];
        this.gameScene.cardSelectPanel.show(cards, ERoomType.MOBS_REWARDS, undefined, { isSingleSelect: false, isSelectRequired: false });
    }

    showDuelRewards() {
        this.gameScene.roomSelectPanel.hide();
        const rewardCards = getDuelRewardCards(this.day);
        this.gameScene.cardSelectPanel.show(rewardCards, ERoomType.MOBS_REWARDS, undefined, { isSingleSelect: false, isSelectRequired: true });
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

    showCardSelect(
        type: ERoomType,
        { heroClasses, isRerollAvailableForce, tripleSetTypes }: { heroClasses?: EHeroClass[]; isRerollAvailableForce?: boolean; tripleSetTypes?: ECardType[] }
    ) {
        //console.log("SHOW CARD SELECT", type);
        if (type === ERoomType.UPGRADE_SKILL_OR_ITEM) {
            this.gameScene.cardUpgradePanel.show();
            this.gameScene.topPanel.nextRoomButton.setVisible(true);
            return;
        }

        // if (type === ERoomType.TRIPLE_SET) {
        //     tripleSetTypes = [];
        //     getRandomArrayItems(tripleSetCardTypes, 3, true).forEach((cardType) => tripleSetTypes.push(cardType));
        // }

        const { cards, isSingleSelect, isSelectRequired, isRerollAvailable } = getCards(this.gameScene, type, this.day, this.hour, heroClasses, tripleSetTypes);
        const isReroll = isRerollAvailableForce !== undefined ? isRerollAvailableForce : isRerollAvailable;
        this.gameScene.cardSelectPanel.show(cards, type, heroClasses, { isSingleSelect, isSelectRequired, isRerollAvailable: isReroll });

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
        { heroClasses, tripleSetTypes, units }: { heroClasses?: EHeroClass[]; tripleSetTypes?: ECardType[]; units?: IUnit[] }
    ) {
        if (instantRooms.includes(type)) {
            this.executeRoomAction(type, day, units);
            if (!duelRooms.includes(type)) {
                this.showNextRoomSelect();
            }
            return;
        }

        this.gameScene.roomSelectPanel.hide();
        this.showCardSelect(type, { heroClasses, tripleSetTypes });
    }

    /** Execute instant room action when room is selected on roomSelectPanel */
    executeRoomAction(type: ERoomType, day: number, units?: IUnit[]) {
        switch (type) {
            case ERoomType.DUEL:
                {
                    this.gameScene.changeToDuelPhase();
                }
                break;
            case ERoomType.BOSS:
                {
                    if (!units) {
                        console.log("ERROR! No units for boss");
                        return;
                    }
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
        console.log("executeCardAction", type);
        switch (type) {
            case ECardType.GOLD:
                {
                    if (value === undefined) {
                        return;
                    }
                    this.gameScene.bankController.addToBank(value);
                    //this.showNextRoomSelect();
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
            default:
                console.log("ERROR! No action for card type found", type);
        }
    }

    /** Perform card action when it is used on another card (e.x. item is used on unit) */
    performCardAction(card: ICard, targetCard: Card) {
        console.log("to performCardAction");

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

                    applyItemBonuses(card.item, unit);

                    items.push(card.item);

                    targetCard.refresh();
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
                        const upgradedSkill = upgradeSkillSet(targetCard.card.skill);
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
