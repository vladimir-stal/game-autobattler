import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { colors } from "../../consts";
import { CardSlot } from "../CardSlot";
import { ECardType } from "../../../types";

/** UI panel to store cards */
export class SellCardPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

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
        const rect = this.scene.add.rectangle(0, 0, 150, 150, colors.BLACK).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        rect.setInteractive().on("pointerdown", () => {
            if (!this.gameScene.isCardMoveMode || !this.gameScene.cardToMove || this.gameScene.isCardBuyMode) {
                console.log("sell card: game is not in card move mode");
                return;
            }

            const { card, cardSlot: previousSlot } = this.gameScene.cardToMove;

            this.gameScene.finishCardMove();
            if (previousSlot) {
                previousSlot.removeCard();
            }
            if (card.type === ECardType.ITEM) {
                this.gameScene.bankController.addToBank(1);
            }
        });
        this.add(rect);
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

        const textObject = this.scene.add.text(50, 60, "SELL", {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#888888",
        });

        this.add(textObject);
    }
}
