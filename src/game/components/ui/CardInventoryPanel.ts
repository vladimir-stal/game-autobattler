import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { colors } from "../../consts";
import { CardSlot } from "../CardSlot";

/** UI panel to store cards */
export class CardInventoryPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    slotCount: number;

    //selectedCardIndex: number | undefined;

    slots: { moveText: GameObjects.Text; slot: CardSlot }[] = [];

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;

        this.slotCount = 4;
        this.show();
    }

    show() {
        this.setVisible(true);
        this.renderBorder();
        this.renderSlots();
    }

    hide() {
        this.setVisible(false);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(0, 0, 300, 400, colors.BLACK).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);
    }

    renderSlots() {
        this.removeAll(true);
        for (let i = 0; i < this.slotCount; i++) {
            this.renderSlot(i);
        }
    }

    handleCardPlaced(slotIndex: number) {
        console.log("INV CARD PLACE SLOT ", slotIndex);
        this.slots[slotIndex].moveText.setVisible(true);
    }

    handleCardTaken(slotIndex: number) {
        console.log("INV CARD TAKEN SLOT ", slotIndex);
        this.slots[slotIndex].moveText.setVisible(false);
    }

    renderSlot(index: number) {
        const x = 20 + (index % 2) * 120;
        const y = index < 2 ? 0 : 220;
        const cardSlot = new CardSlot(this.gameScene, x, y, undefined, true, false, false, {
            onCardPlaced: () => this.handleCardPlaced(index),
            onCardTaken: () => this.handleCardTaken(index),
        });
        this.add(cardSlot);

        console.log("ADD INVENTORY CARD SLOT");
        this.gameScene.addCardSlot(cardSlot);

        const moveCardText = this.scene.add
            .text(x + 20, y + 150, "MOVE", {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            })
            .setVisible(false);

        moveCardText
            .setInteractive()
            // .setInteractive(new Phaser.Geom.Rectangle(0, 0, 90, 30), Phaser.Geom.Rectangle.Contains)
            .on("pointerdown", () => {
                if (cardSlot.card) {
                    //this.selectedCardIndex = index;
                    this.gameScene.selectCardToMove(cardSlot.card);
                }
            })
            .on("pointerover", () => {
                moveCardText.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                moveCardText.setColor("#AAFFAA");
            });

        this.add(moveCardText);

        this.slots.push({ moveText: moveCardText, slot: cardSlot });
    }
}
