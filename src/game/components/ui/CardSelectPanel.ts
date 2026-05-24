import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, EItemTargetType, ERoomType, ESelectCardHint, EUnitType, ICard, IItemBonus } from "../../../types";
import { getRandomArrayItem } from "../../utils/commonUtils";
import { Card } from "../Card";
import { colors, i18n } from "../../consts";
import { GameObjects, Input } from "phaser";
import { createUnit, isUnitHasHeroClass } from "../../utils/unitUtils";
import { getRerollPrice } from "../../utils/selectPhaseUtils";
import { MIN_WIDTH } from "./uiPanels";
import { createItem, fixAuraBonusesForNewUnit } from "../../utils/itemUtils";
import { IMAGE_ICON_REROLL } from "../../utils/imageLoadUtil";

const hintTopY = -50;
const hintBottomY = 220;

const borderMaxWidth = 720;
const borderMiddleWidth = 600;

const chooseTypeRooms = [ERoomType.HEROES_SELL, ERoomType.MOBS];

const instantActionCards = [ECardType.MOBS, ECardType.GOLD, ECardType.EXP_PARTY];

/** UI panel to select cards for specific room */
export class CardSelectPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    cardsCount: number;

    roomType: ERoomType;
    heroClasses: EHeroClass[] | undefined;

    selectedCardIndex: number | undefined;

    cards: (ICard | null)[];
    boughtCardIndexes: number[] = [];
    cardObjects: { index: number; buyCardText: GameObjects.Text }[];

    isSingleSelect: boolean; // player can select only one card
    isSelectRequired: boolean; // player must select at least one option

    isRerollAvailable: boolean;
    rerollsCount: number;

    borderRect: GameObjects.Rectangle;
    hintText: GameObjects.Text;
    hintTextType: ESelectCardHint | undefined;

    loadingText: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;

        this.cardsCount = 3;
        this.setVisible(false);
    }

    show(
        cards: (ICard | null)[],
        roomType: ERoomType,
        heroClasses: EHeroClass[] | undefined,
        options: { isSingleSelect?: boolean; isSelectRequired?: boolean; isRerollAvailable?: boolean; hintTextType?: ESelectCardHint },
    ) {
        this.setVisible(true);
        this.roomType = roomType;
        this.heroClasses = heroClasses;
        this.boughtCardIndexes = [];
        this.cards = cards;
        this.cardObjects = [];
        this.isRerollAvailable = !!options.isRerollAvailable;
        this.isSingleSelect = !!options.isSingleSelect;
        this.isSelectRequired = !!options.isSelectRequired;
        this.hintTextType = options.hintTextType;
        this.render();
    }

    hide() {
        this.setVisible(false);
    }

    showLoading() {
        this.removeAll(true);
        this.loadingText = this.scene.add
            .text(350, 100, i18n.ui.LOADING + "...", { fontFamily: "Arial Black", fontSize: 18, color: "#eeeeee" })
            .setOrigin(0.5, 0.5);
        this.add(this.loadingText);
        this.setVisible(true);
    }

    render() {
        this.removeAll(true);
        this.renderBorder();
        this.renderHintPanel();
        this.renderCards();
        this.renderButtons();
    }

    renderBorder() {
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        this.borderRect = this.scene.add.rectangle(0, 0, rectWidth, 200, colors.BLACK).setOrigin(0, 0);
        this.borderRect.setStrokeStyle(1, 0x777777);
        this.add(this.borderRect);
    }

    renderHintPanel() {
        if (this.hintTextType) {
            const text = i18n.ui[this.hintTextType];
            const y = this.hintTextType === ESelectCardHint.SELECT_SINGLE_HERO ? hintBottomY : hintTopY;
            this.hintText = this.scene.add.text(350, y, text, { fontFamily: "Arial Black", fontSize: 18, color: "#eeeeee" }).setOrigin(0.5, 0);
            this.add(this.hintText);
        }
    }

    renderCards() {
        this.cardObjects = [];
        this.cards.forEach((card, i) => {
            if (this.boughtCardIndexes.includes(i)) {
                return;
            }

            if (!card) {
                return;
            }

            this.renderCard(i, card);
        });
    }

    renderCard(index: number, card: ICard) {
        const cardX = this.getCardPositionX(index);
        const cardComponent = new Card(this.gameScene, cardX, 0, card, true);
        this.add(cardComponent);

        const buttonTitle = chooseTypeRooms.includes(this.roomType) ? i18n.ui.SELECT : card.price > 0 ? i18n.ui.BUY + " " + card.price : i18n.ui.TAKE;

        const buyCardText = this.scene.add
            .text(cardX, 150, buttonTitle, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: colors.string.GREEN_LIGHT,
            })
            .setOrigin(0.5);

        buyCardText
            .setInteractive()
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (this.gameScene.bankController.totalGold < card.price) {
                    console.log("NOT ENOUGH GOLD!", card.price);
                    return;
                }

                if (instantActionCards.includes(card.type)) {
                    this.gameScene.selectController.executeCardAction(card);
                    if ([ECardType.GOLD, ECardType.EXP_PARTY].includes(card.type)) {
                        this.boughtCardIndexes.push(index);

                        if (this.checkShowNextRoom()) {
                            this.gameScene.selectController.showNextRoomSelect();
                            return;
                        }

                        this.render();
                    }
                    return;
                }

                this.selectedCardIndex = index;
                this.gameScene.selectCardToBuy(cardComponent);
            })
            .on("pointerover", () => {
                buyCardText.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                buyCardText.setColor("#AAFFAA");
            });

        this.add(buyCardText);
        this.cardObjects.push({ buyCardText, index });
    }

    renderButtons() {
        if (this.isRerollAvailable) {
            this.rerollsCount = 0;
            const rerollPrice = getRerollPrice(this.rerollsCount, this.roomType);
            const rerollPriceText = rerollPrice > 0 ? rerollPrice + " " + i18n.ui.GOLD : "";
            // const rerollButton = this.scene.add.text(0, -100, i18n.ui.REROLL + " " + rerollPriceText, {
            //     //fontFamily: "Arial Black",
            //     fontSize: 18,
            //     color: "#aaffaa",
            // });

            // rerollButton.setInteractive().on("pointerdown", () => {
            //     if (this.gameScene.bankController.totalGold < rerollPrice) {
            //         return;
            //     }

            //     this.gameScene.bankController.buy(rerollPrice);
            //     this.isRerollAvailable = false;
            //     // get new cards
            //     this.gameScene.selectController.showCardSelect(this.roomType, { heroClasses: this.heroClasses, isRerollAvailableForce: false });
            // });

            // this.add(rerollButton);

            //
            const width = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;

            const rerollButton2 = this.scene.add.image(width, 0, IMAGE_ICON_REROLL).setOrigin(0.5, 0.5);
            this.add(rerollButton2);

            rerollButton2.setInteractive().on("pointerdown", () => {
                if (this.gameScene.bankController.totalGold < rerollPrice) {
                    return;
                }

                this.gameScene.bankController.buy(rerollPrice);
                this.isRerollAvailable = false;
                // get new cards
                this.gameScene.selectController.showCardSelect(this.roomType, true, {
                    heroClasses: this.heroClasses,
                    isRerollAvailableForce: false,
                });
            });

            const rerollPriceTextObject = this.scene.add.text(width + 25, -10, rerollPriceText, {
                //fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            });
            this.add(rerollPriceTextObject);
        }
    }

    finishBuy() {
        if (this.selectedCardIndex !== undefined) {
            const card = this.cards[this.selectedCardIndex];

            if (!card) {
                return;
            }

            this.gameScene.bankController.buy(card.price);

            if (card.type === ECardType.UNIT && card.unit) {
                card.unit = createUnit(card.unit);
                // TODO: remove the hack when find why unitPanel set units after new select room is rendered
                if (card.unit.unitType === EUnitType.HERO) this.gameScene.unitPanel.lastBoughtHeroClass = card.unit.heroClass;
                const auraBonuses:IItemBonus[] = [];
                this.gameScene.unitPanel.slots.forEach(slot => {
                    const unit = slot?.slot?.card?.card?.unit;
                    unit?.items?.forEach(
                    item => {
                        item.bonuses.forEach(b => {
                            if (b.targetType === EItemTargetType.ALL_ALLIES) {
                                auraBonuses.push(b);
                            }
                        });
                        item.heroClassBonuses?.forEach(hcb => {
                            if (isUnitHasHeroClass(unit,hcb.heroClass) && hcb.bonus?.targetType === EItemTargetType.ALL_ALLIES) {
                                auraBonuses.push(hcb.bonus);
                            }
                        });
                    }
                )
                })
                fixAuraBonusesForNewUnit(card.unit, auraBonuses);
            } else if (card.type === ECardType.ITEM && card.item) {
                card.item = createItem(card.item);
            }

            this.boughtCardIndexes.push(this.selectedCardIndex);
            if (this.checkShowNextRoom()) {
                this.gameScene.selectController.showNextRoomSelect();
                return;
            }

            this.selectedCardIndex = undefined;
            this.render();
        }
    }

    enableCardsMove() {
        if (!this.visible) {
            return;
        }
        this.cards.forEach((card) => {
            if (!card) {
                return;
            }
            this.cardObjects.forEach((cardObject) => {
                if (!cardObject?.buyCardText) {
                    return;
                }
                const { buyCardText } = cardObject;
                buyCardText.setColor(colors.string.GREEN_LIGHT);
                buyCardText.setInteractive();
            });
        });
    }

    disableCardsMove() {
        if (!this.visible) {
            return;
        }
        //console.log("disable cards move >>", this.cardObjects);
        this.cards.forEach((card) => {
            if (!card) {
                return;
            }
            this.cardObjects.forEach((cardObject, index) => {
                //console.log("cardObject >>", cardObject, index);
                if (!cardObject?.buyCardText) {
                    return;
                }
                const { buyCardText } = cardObject;
                buyCardText.setColor(colors.string.GREY);
                buyCardText.disableInteractive();
            });
        });
    }

    private getCardPositionX(index: number): number {
        const cardDistance = this.cards.length > 3 ? 180 : 240;
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        let x = 0;
        if (this.cards.length === 1) {
            x = this.x;
        } else if (this.cards.length === 3) {
            switch (index) {
                case 0:
                    x = rectWidth / 2 - cardDistance;
                    break;
                case 1:
                    x = rectWidth / 2;
                    break;
                case 2:
                    x = rectWidth / 2 + cardDistance;
                    break;
            }
        } else if (this.cards.length === 4) {
            switch (index) {
                case 0:
                    x = cardDistance / 2;
                    break;
                case 1:
                    x = rectWidth / 2 - cardDistance / 2;
                    break;
                case 2:
                    x = rectWidth / 2 + cardDistance / 2;
                    break;
                case 3:
                    x = rectWidth - cardDistance / 2;
                    break;
            }
        } else {
            x = 75 + 20 + index * cardDistance;
        }
        return x;
    }

    private checkShowNextRoom(): boolean {
        if (this.isSingleSelect) {
            return true;
        }

        const isLastCard = this.cards.filter((card) => card).length === this.boughtCardIndexes.length;

        console.log("cards", this.cards);
        console.log("isLastCard", isLastCard, this.cards.length, this.cards.filter((card) => card).length, this.boughtCardIndexes.length);

        return isLastCard;
    }

    refreshAfterResize() {
        if (!this.visible) {
            return;
        }
        this.render();
        //const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        //const rectHeight = 200;
        //this.borderRect.setSize(rectWidth, rectHeight);
    }
}
