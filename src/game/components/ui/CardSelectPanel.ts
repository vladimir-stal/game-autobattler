import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, ERoomType, ICard } from "../../../types";
import { getRandomArrayItem } from "../../utils/commonUtils";
import { Card } from "../Card";
import { colors } from "../../consts";
import { Input } from "phaser";
import { createUnit, generateUnitId } from "../../utils/unitUtils";

/** UI panel to select cards for specific room */
export class CardSelectPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    cardsCount: number;

    roomType: ERoomType;
    heroClasses: EHeroClass[] | undefined;

    selectedCardIndex: number | undefined;

    cards: (ICard | null)[];
    boughtCardIndexes: number[] = [];

    isSingleSelect: boolean; // player can select only one card
    isSelectRequired: boolean; // player must select at least one option

    isRerollAvailable: boolean;

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
        options: { isSingleSelect?: boolean; isSelectRequired?: boolean; isRerollAvailable?: boolean }
    ) {
        //roomType: ERoomType,
        this.setVisible(true);
        this.roomType = roomType;
        this.heroClasses = heroClasses;
        this.boughtCardIndexes = [];
        this.cards = cards;
        this.isRerollAvailable = !!options.isRerollAvailable;
        this.isSingleSelect = !!options.isSingleSelect;
        this.isSelectRequired = !!options.isSelectRequired;
        this.render();
    }

    hide() {
        this.setVisible(false);
    }

    render() {
        this.removeAll(true);
        this.renderBorder();
        this.renderCards();
        this.renderButtons();
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(0, 0, 720, 200, colors.BLACK).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);
    }

    renderCards() {
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
        const cardDistance = 240;
        const cardBomponent = new Card(this.gameScene, 75 + index * cardDistance, 0, card, true);
        this.add(cardBomponent);

        const buttonTitle = card.price > 0 ? "BUY " + card.price : "TAKE";
        const buyCardText = this.scene.add.text(75 + 20 + index * cardDistance, 150, buttonTitle, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#aaffaa",
        });

        buyCardText
            .setInteractive()
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (this.gameScene.bankController.totalGold < card.price) {
                    console.log("NOT ENOUGH GOLD!", card.price);
                    return;
                }

                if ([ECardType.MOBS, ECardType.GOLD].includes(card.type)) {
                    this.gameScene.selectController.executeCardAction(card);
                    if ([ECardType.GOLD].includes(card.type)) {
                        this.boughtCardIndexes.push(index);
                        this.render();
                    }
                    return;
                }

                this.selectedCardIndex = index;
                this.gameScene.selectCardToBuy(cardBomponent);
            })
            .on("pointerover", () => {
                buyCardText.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                buyCardText.setColor("#AAFFAA");
            });

        this.add(buyCardText);
    }

    renderButtons() {
        //if (this.isRerollAvailable) {
        const rerollButton = this.scene.add.text(0, -100, "REROLL", {
            //fontFamily: "Arial Black",
            fontSize: 18,
            color: "#aaffaa",
        });

        rerollButton.setInteractive().on("pointerdown", () => {
            this.isRerollAvailable = false;
            // get new cards
            this.gameScene.selectController.showCardSelect(this.roomType, { heroClasses: this.heroClasses, isRerollAvailableForce: false });
        });

        this.add(rerollButton);
        //}
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
            }

            if (this.isSingleSelect) {
                this.gameScene.selectController.showNextRoomSelect();
                return;
            }

            const isLastCard = this.cards.length === this.boughtCardIndexes.length + 1;
            if (isLastCard) {
                this.gameScene.selectController.showNextRoomSelect();
                return;
            }
            this.boughtCardIndexes.push(this.selectedCardIndex);
            this.selectedCardIndex = undefined;
            this.render();
        }
    }
}
