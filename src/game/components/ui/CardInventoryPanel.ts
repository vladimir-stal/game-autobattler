import { GameObjects, Input } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { colors, i18n } from "../../consts";
import { CardSlot } from "../CardSlot";
import { ECardType, EItemBattleBonusType } from "../../../types";
import { getSkillPrice } from "../../utils/skillUtils";

/** UI panel to store cards */
export class CardInventoryPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    slotCount: number;

    //selectedCardIndex: number | undefined;

    slots: { moveText: GameObjects.Text; slot: CardSlot }[];

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.init();
    }

    init() {
        this.slots = [];
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
        //console.log("INV CARD PLACE SLOT ", slotIndex);
        const card = this.slots[slotIndex].slot?.card?.card;
        if (card && card.item && card.item.id === "scroll_of_skill") {
            const skill = card.item.battleBonuses?.find((bb) => bb.type === EItemBattleBonusType.UNPACK_SKILL_IN_STASH && bb.relatedSkill)?.relatedSkill;
            if (skill) {
                card.skill = { ...skill };
                card.price = getSkillPrice(skill.priceLevel);
                card.item = undefined;
                card.type = ECardType.SKILL;
            }
        }
        this.slots[slotIndex].moveText.setVisible(true);
    }

    handleCardTaken(slotIndex: number) {
        //console.log("INV CARD TAKEN SLOT ", slotIndex);
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

        this.gameScene.addCardSlot(cardSlot);

        const moveCardText = this.scene.add
            .text(x, y + 150, i18n.ui.MOVE, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            })
            .setVisible(false);

        moveCardText
            .setInteractive()
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (cardSlot.card) {
                    if (!this.gameScene.cardToMove) {
                        this.gameScene.selectCardToMove(cardSlot.card);
                    }
                }
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                moveCardText.setColor("#FFFFFF");
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                moveCardText.setColor("#AAFFAA");
            });

        this.add(moveCardText);

        this.slots.push({ moveText: moveCardText, slot: cardSlot });
    }

    enableCardsMove() {
        this.slots.forEach(({ moveText }) => {
            if (!moveText.visible) {
                return;
            }
            moveText.setColor(colors.string.GREEN_LIGHT);
            moveText.setInteractive();
        });
    }

    disableCardsMove() {
        this.slots.forEach(({ moveText }) => {
            if (!moveText.visible) {
                return;
            }
            moveText.setColor(colors.string.GREY);
            moveText.disableInteractive();
        });
    }
}
