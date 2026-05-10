import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { colors, i18n } from "../../consts";
import { CardSlot } from "../CardSlot";
import { ECardType, EUnitType, ICard, IHeroSkill, IHeroSkillSet, IItem, IUnit } from "../../../types";
import { MIN_WIDTH } from "./uiPanels";
import { getItemPrice } from "../../utils/itemUtils";
import { getSkillPrice } from "../../utils/skillUtils";
import { getUnitCardPrice } from "../../utils/unitUtils";

const borderMaxWidth = 150;
const borderMiddleWidth = 100;

/** UI panel to store cards */
export class SellCardPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    borderRect: GameObjects.Rectangle;
    sellTtextObject: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.renderBorder();
        this.renderSellSlot();
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }

    renderBorder() {
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        this.borderRect = this.scene.add.rectangle(0, 0, rectWidth, 150, colors.BLACK).setOrigin(0, 0);
        this.borderRect.setStrokeStyle(1, 0x777777);
        this.borderRect.setInteractive().on("pointerdown", () => {
            if (!this.gameScene.isCardMoveMode || !this.gameScene.cardToMove || this.gameScene.isCardBuyMode) {
                console.log("sell card: game is not in card move mode");
                return;
            }

            const { card, cardSlot: previousSlot, onCardMoved } = this.gameScene.cardToMove;

            if (onCardMoved) {
                onCardMoved();
            }
            this.gameScene.finishCardMove();
            if (previousSlot) {
                previousSlot.removeCard();
            }

            const price = this.getCardPrice(card);
            this.gameScene.bankController.addToBank(price);
        });
        this.add(this.borderRect);
    }

    handleCardPlaced() {
        //this.slots[slotIndex].moveText.setVisible(true);
    }

    renderSellSlot() {
        // const cardSlot = new CardSlot(this.gameScene, 0, 0, undefined, true, false, {
        //     onCardPlaced: () => this.handleCardPlaced(),
        // });
        // this.add(cardSlot);

        //this.gameScene.addCardSlot(cardSlot);

        const x = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth / 2 : borderMiddleWidth / 2;
        this.sellTtextObject = this.scene.add
            .text(x, 75, i18n.ui.SELL, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#888888",
            })
            .setOrigin(0.5);

        this.add(this.sellTtextObject);
    }

    highlight(value: boolean) {
        const color = value ? colors.GREEN_DARK : colors.BLACK;
        this.borderRect.setFillStyle(color);
        const textColor = value ? "#FFFFFF" : "#888888";
        this.sellTtextObject.setColor(textColor);
        if (value) {
            const { card } = this.gameScene.cardToMove || {};
            if (!card) {
                return;
            }
            const price = this.getCardPrice(card);
            this.sellTtextObject.setText(i18n.ui.SELL + "\n" + price + " " + i18n.ui.GOLD);
        } else {
            this.sellTtextObject.setText(i18n.ui.SELL);
        }
    }

    refreshAfterResize() {
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        const rectHeight = 150;
        this.borderRect.setSize(rectWidth, rectHeight);
        //
        const x = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth / 2 : borderMiddleWidth / 2;
        this.sellTtextObject.setX(x);
    }

    private getCardPrice(card: ICard): number {
        switch (card.type) {
            case ECardType.ITEM:
                return card.item ? this.getItemPrice(card.item) : 0;
            case ECardType.SKILL:
                return card.skill ? this.getSkillPrice(card.skill) : 0;
            case ECardType.UNIT:
                return card.unit ? this.getUnitPrice(card.unit) : 0;
        }
        return 0;
    }

    private getItemPrice(item: IItem): number {
        return item.sellPrice !== undefined ? item.sellPrice : Math.floor((getItemPrice(item) + 1) / 2);
    }

    private getSkillPrice(skill: IHeroSkillSet): number {
        return Math.floor((getSkillPrice(skill.priceLevel) + 1) / 2);
    }

    private getUnitPrice(unit: IUnit): number {
        return Math.floor((getUnitCardPrice(unit, 24, 7) + 1) / 2);
    }
}
