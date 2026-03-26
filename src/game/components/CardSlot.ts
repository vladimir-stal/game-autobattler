import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, ICard, IUnit } from "../../types";
import { Card } from "./Card";

/** Component card can be placed in */
export class CardSlot extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    onBuyPanel: boolean; // card slot is located on select card panel
    rect: GameObjects.Rectangle;
    unitRect: GameObjects.Rectangle;

    isActive: boolean = false;
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

        // this.rect
        //     .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        //         //console.log("CARD SLOT ON GAMEOBJECT_POINTER_OVER");
        //         if (this.card) {
        //             console.log("card is here", this.card.card.type);

        //             const x = this.isInventory ? this.gameScene.camera.width / 2 - 600 : this.gameScene.camera.width / 2 - 360;
        //             const y = this.isInventory ? 400 : 200;

        //             switch (this.card.card.type) {
        //                 case ECardType.ITEM:
        //                     {
        //                         this.gameScene.hintPanel.showItem(x + 20 + this.x, y + this.y, this.card.card.item);
        //                     }
        //                     break;
        //                 case ECardType.SKILL:
        //                     {
        //                         this.gameScene.hintPanel.showSkill(x + 20 + this.x, y + this.y, this.card.card.skill);
        //                     }
        //                     break;

        //                 default: {
        //                     console.log("cant find card hint for type", this.card.type);
        //                 }
        //             }
        //         }
        //     })
        //     .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        //         console.log("CARD SLOT  ON GAMEOBJECT_POINTER_OUT");
        //         this.gameScene.hintPanel.hide();
        //     });

        this.rect.setInteractive().on("pointerdown", () => {
            this.click();
        });
        // new Phaser.Geom.Rectangle(0, 0, 50, 20), Phaser.Geom.Rectangle.Contains
        this.add(this.rect);

        if (card) {
            this.renderCard(card);
        }
    }

    click() {
        //console.log("CardSlot POINTer down");

        if (!this.isActive) {
            console.log("THIS CARD SLOT IS NOT ACTIVE");
            return;
        }

        if (!this.gameScene.isCardMoveMode || !this.gameScene.cardToMove) {
            console.log("game is not in card move mode");
            return;
        }

        const { card, cardSlot } = this.gameScene.cardToMove;

        console.log("select CARD TO MOVE", card.unit?.items.length, card);

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

        // if (card.type === ECardType.UNIT && card.unit) {
        //     card.unit = createUnit(card.unit);
        // }

        this.gameScene.finishCardMove();
        this.placeCard(card, cardSlot);
    }

    placeCard(card: ICard, previousSlot: CardSlot | undefined) {
        //console.log("placeCard >>>>", card, card.unit?.items.length);
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

        this.card = new Card(this.gameScene, 0, 0, card, this.onBuyPanel, this);
        //this.card.cardSlot = this;
        this.add(this.card);
    }

    setIsActive(value: boolean) {
        this.isActive = value;

        //console.log("SET ACTIVE", value);

        if (this.card && this.card.card.type === ECardType.UNIT) {
            const color = value ? colors.GREEN : colors.GREY;
            //console.log("SET ACTIVE UNIT", color);
            this.unitRect.fillColor = color;
            return;
        }

        //this.rect.setVisible(value);
        const color = value ? colors.GREEN : colors.BLACK;
        this.rect.fillColor = color;
        //console.log("setIsActive", value, color);
    }

    setUnit(unit: IUnit) {
        if (!this.card) {
            return;
        }

        this.card.card.unit = unit;
        this.card.refresh();
    }
}
