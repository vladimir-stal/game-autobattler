import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { ECardType, ICard, IUnit } from "../../../types";
import { CardSlot } from "../CardSlot";
import { i18n } from "../../consts";

/** UI panel to place heroes an units for battle */
export class UnitPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    slotCount: number;

    slots: { slot: CardSlot; moveText: GameObjects.Text }[];

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.init();
    }

    init() {
        this.slots = [];
        this.slotCount = 4;
        this.renderSlots([]);
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }

    handleCardPlaced(slotIndex: number) {
        this.slots[slotIndex].moveText.setVisible(true);
        //this.slots[slotIndex].upgradeText.setVisible(true);
    }

    handleCardTaken(slotIndex: number) {
        console.log("handleCardTaken", slotIndex, this.slots);
        this.slots[slotIndex].moveText.setVisible(false);
        //this.slots[slotIndex].upgradeText.setVisible(false);
    }

    renderSlots(units: (IUnit | null)[]) {
        this.slots = [];
        this.removeAll(true);
        for (let i = 0; i < this.slotCount; i++) {
            const card: ICard | undefined = units[i] ? { type: ECardType.UNIT, unit: units[i] || undefined, price: 0 } : undefined;
            this.renderSlot(i, card);
        }
    }

    renderSlot(index: number, card: ICard | undefined) {
        const x = (3 - index) * 200;
        const y = 0;
        const cardSlot = new CardSlot(this.gameScene, x, y, card, false, false, false, {
            onCardPlaced: () => this.handleCardPlaced(index),
            onCardTaken: () => this.handleCardTaken(index),
        });
        this.add(cardSlot);

        this.gameScene.addCardSlot(cardSlot);

        const moveCardText = this.renderMoveCardText(x, y, card, cardSlot);

        this.slots.push({ slot: cardSlot, moveText: moveCardText });
    }

    setUnits(units: (IUnit | null)[]) {
        this.slots.forEach((slot, index) => {
            const unit = units[index];
            if (!unit) {
                return;
            }
            slot.slot.setUnit(unit);
        });
    }

    renderMoveCardText(x: number, y: number, card: ICard | undefined, cardSlot: CardSlot) {
        const moveCardText = this.scene.add
            .text(x + 20, y + 150, i18n.ui.MOVE, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            })
            .setVisible(!!card);

        moveCardText
            .setInteractive()
            .on("pointerdown", () => {
                if (cardSlot.card) {
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

        return moveCardText;
    }

    refreshAllCards() {
        this.slots.forEach((slot) => {
            if (!slot.slot.isEmpty) {
                slot.slot.card.refresh();
            }
        });
    }
}
