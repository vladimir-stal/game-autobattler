import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors, i18n } from "../consts";
import { ECardType, ICard, IUnit } from "../../types";
import { Card } from "./Card";

export type TSlotActiveType = "default" | "merge" | "equip" | "apply";

/** Component card can be placed in */
export class CardSlot extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    onBuyPanel: boolean; // card slot is located on select card panel
    rect: GameObjects.Rectangle;
    unitRect: GameObjects.Rectangle;
    equipTextObject: GameObjects.Text;

    isActive: boolean = false;
    activeType: TSlotActiveType = "default";
    isEmpty: boolean = true;
    isInventory: boolean; // card slot is located on inventory panel
    isUpgradePanel: boolean; // card slot is located on upgrade panel
    card: Card | undefined;

    onCardPlaced: (() => void) | undefined;
    onCardTaken: (() => void) | undefined;

    constructor(
        scene: GameScene,
        x: number,
        y: number,
        card: ICard | undefined,
        isInventory: boolean,
        onBuyPanel: boolean,
        isUpgradePanel: boolean,
        options: { onCardPlaced?: () => void; onCardTaken?: () => void },
    ) {
        super(scene, x, y);
        this.gameScene = scene;
        this.isInventory = isInventory;
        this.onBuyPanel = onBuyPanel;
        this.isUpgradePanel = isUpgradePanel;
        this.onCardPlaced = options.onCardPlaced;
        this.onCardTaken = options.onCardTaken;
        this.render(card);
    }

    render(card: ICard | undefined) {
        const color = this.isActive ? colors.GREEN : colors.BLACK;

        this.rect = this.scene.add.rectangle(-5, -5, 110, 210, color).setOrigin(0, 0);
        this.rect.setStrokeStyle(1, 0x777777);

        this.unitRect = this.scene.add.rectangle(-5, 210, 110, 10, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.unitRect);

        if (card && card.type === ECardType.UNIT) {
            this.unitRect.setVisible(true);
            this.rect.setFillStyle(colors.BLACK, 0);
            this.rect.setStrokeStyle(0, 0x777777);
        }

        this.rect.setInteractive().on("pointerdown", () => {
            this.click();
        });
        this.add(this.rect);

        if (card) {
            this.renderCard(card);
        }

        this.equipTextObject = this.scene.add
            .text(50, 60, i18n.ui.EQUIP, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            })
            .setOrigin(0.5, 0.5)
            .setVisible(false);
        this.add(this.equipTextObject);
    }

    click() {
        if (!this.isActive) {
            console.log("THIS CARD SLOT IS NOT ACTIVE");
            return;
        }

        if (!this.gameScene.isCardMoveMode || !this.gameScene.cardToMove) {
            console.log("game is not in card move mode");
            return;
        }

        const { card, cardSlot } = this.gameScene.cardToMove;

        const isItemToUnit = card.type === ECardType.ITEM && this.card?.card.type === ECardType.UNIT;
        const isExpToUnit = card.type === ECardType.EXP;
        const isSkillToUnit = card.type === ECardType.SKILL && this.card?.card.type === ECardType.UNIT;
        const isUnitToUnit = card.type === ECardType.UNIT && this.card?.card.type === ECardType.UNIT;
        const isAttributeToUnit = card.type === ECardType.ATTRIBUTE;
        const isItemUpgrade =
            card.type === ECardType.ITEM &&
            this.card?.card.type === ECardType.ITEM &&
            this.card?.card.item?.id === card.item?.id &&
            this.card?.card.item?.level === card.item?.level;
        const isSkillUpgrade =
            card.type === ECardType.SKILL &&
            this.card?.card.type === ECardType.SKILL &&
            this.card?.card.skill?.id === card.skill?.id &&
            this.card?.card.skill?.level === card.skill?.level;

        // change unit places
        if (isUnitToUnit) {
            if (!this.card) {
                return;
            }

            const currentSlot = this.gameScene.cardToMove.cardSlot;
            const cardToPeplace = this.card.card;
            if (!currentSlot) {
                console.log("NO SLOT FOR CARD", this.gameScene.cardToMove);
            } else {
                this.placeCard(card, cardSlot);
                currentSlot.placeCard(cardToPeplace, undefined);
            }
            this.gameScene.finishCardMove();

            return;
        }

        if (isItemToUnit || isExpToUnit || isAttributeToUnit || isSkillToUnit || isItemUpgrade || isSkillUpgrade) {
            this.card && this.gameScene.selectController.performCardAction(card, this.card);
            this.gameScene.finishCardMove();
            if (cardSlot) {
                cardSlot.removeCard();
            }
            return;
        }

        this.gameScene.finishCardMove();
        this.placeCard(card, cardSlot);
    }

    placeCard(card: ICard, previousSlot: CardSlot | undefined) {
        //
        if (this.card) {
            this.card.destroy();
        }
        this.isEmpty = false;
        this.renderCard(card);
        this.onCardPlaced?.();
        if (previousSlot) {
            previousSlot.removeCard();
        } else {
            //console.log("NO PREVIOUS SLOT");
        }

        if (card.type === ECardType.UNIT) {
            this.unitRect.setVisible(true);
            //this.rect.setVisible(false);
            this.rect.setFillStyle(colors.BLACK, 0);
            this.rect.setStrokeStyle(0, 0x777777);
        }
    }

    removeCard() {
        //console.log("remove Card");
        this.isEmpty = true;
        this.renderCard();
        this.unitRect.setVisible(false);
        //this.rect.setVisible(true);
        this.rect.setFillStyle(colors.BLACK, 1);
        this.rect.setStrokeStyle(1, 0x777777);
        this.onCardTaken?.();
    }

    renderCard(card?: ICard) {
        if (this.card) {
            this.remove(this.card);
        }

        if (!card) {
            this.card = undefined;
            return;
        }

        this.card = new Card(this.gameScene, 50, 0, card, this.onBuyPanel, this);
        //this.card.cardSlot = this;
        this.add(this.card);

        this.bringToTop(this.equipTextObject);
    }

    setIsActive(value: boolean, activeType?: TSlotActiveType) {
        //console.log("SLOT SET ACTIVVE", value, activeType);
        this.isActive = value;

        let activeColor = colors.GREEN_2;
        if (activeType) {
            switch (activeType) {
                case "merge":
                    activeColor = colors.PURPLE;
                    break;
                case "equip":
                case "default":
                default:
                    activeColor = colors.GREEN_2;
                    break;
            }
        }

        //this.equipTextObject.setVisible(value && activeType === "equip" || activeType === "apply");
        if ((value && activeType === "equip") || activeType === "apply") {
            this.equipTextObject.setText(activeType === "equip" ? i18n.ui.EQUIP : i18n.ui.APPLY);
            this.equipTextObject.setVisible(true);
        } else {
            this.equipTextObject.setVisible(false);
        }

        if (this.card && this.card.card.type === ECardType.UNIT) {
            const color = value ? activeColor : colors.GREY;
            this.unitRect.fillColor = color;
            return;
        }

        const color = value ? activeColor : colors.BLACK;
        this.rect.fillColor = color;
    }

    setUnit(unit: IUnit) {
        if (!this.card) {
            return;
        }

        this.card.card.unit = unit;
        this.card.refresh();
    }
}
