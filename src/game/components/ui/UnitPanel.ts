import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { ECardType, ICard, IUnit } from "../../../types";
import { CardSlot } from "../CardSlot";
import { colors, i18n } from "../../consts";
import { MAX_WIDTH, MIN_WIDTH } from "./uiPanels";

const slotDistanceMax = 200;
const slotDistanceMiddle = 150;

/** UI panel to place heroes an units for battle */
export class UnitPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    currentWidth: number;
    slotCount: number;

    //borderRect: GameObjects.Rectangle;

    slots: { slot: CardSlot; moveText: GameObjects.Text }[];

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.init();
    }

    init() {
        this.slots = [];
        this.slotCount = 4;
        this.currentWidth = this.gameScene.camera.width >= MIN_WIDTH ? MAX_WIDTH : MIN_WIDTH;

        this.renderSlots();
        //this.renderBorder();
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }

    handleCardPlaced(slotIndex: number) {
        this.slots[slotIndex].moveText.setVisible(true);
    }

    handleCardTaken(slotIndex: number) {
        this.slots[slotIndex].moveText.setVisible(false);
    }

    // renderBorder() {
    //     const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? 800 : 600;
    //     this.borderRect = this.scene.add.rectangle(0, 0, rectWidth, 100, colors.BLUE).setOrigin(0.5, 0);
    //     //this.borderRect.setStrokeStyle(2, 0x999999);
    //     this.add(this.borderRect);
    // }

    //renderSlots(units: (IUnit | null)[]) {
    renderSlots() {
        this.slots = [];
        this.removeAll(true);
        for (let i = 0; i < this.slotCount; i++) {
            //const card: ICard | undefined = units[i] ? { type: ECardType.UNIT, unit: units[i] || undefined, price: 0 } : undefined;
            //this.renderSlot(i, card);
            this.renderSlot(i, undefined);
        }
    }

    renderSlot(index: number, card: ICard | undefined) {
        //const distance = this.gameScene.camera.width >= MIN_WIDTH ? slotDistanceMax : slotDistanceMiddle;
        const x = this.getSlotX(index);
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
            .text(x, y + 150, i18n.ui.MOVE, {
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

    rerender() {
        this.slots.forEach((slot, index) => {
            const x = this.getSlotX(index);
            slot.slot.setX(x);
            slot.moveText.setX(x);
        });
    }

    private getSlotX(index: number) {
        const { width } = this.gameScene.camera;
        const distance = width >= MIN_WIDTH ? slotDistanceMax : slotDistanceMiddle;
        let x;
        if (this.currentWidth === MIN_WIDTH) {
            switch (index) {
                case 0:
                    x = (distance * 3) / 2;
                    break;
                case 1:
                    x = distance / 2;
                    break;
                case 2:
                    x = -distance / 2;
                    break;
                case 3:
                    x = -(distance * 3) / 2;
                    break;
            }
            x = x - 50;
        } else if (this.currentWidth === MAX_WIDTH) {
            x = (3 - index) * distance;
        }
        return x;
    }

    refreshAfterResize() {
        // const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? 800 : 600;
        // const rectHeight = 100;
        // this.borderRect.setSize(rectWidth, rectHeight);
        const resizedWidth = this.gameScene.camera.width >= MIN_WIDTH ? MAX_WIDTH : MIN_WIDTH;
        if (resizedWidth !== this.currentWidth) {
            this.currentWidth = resizedWidth;
            this.rerender();
        }
    }
}
