import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, ERoomType, ICard } from "../../../types";
import { colors, i18n } from "../../consts";
import { GameObjects } from "phaser";
import { CardSlot } from "../CardSlot";
import { upgradeItem } from "../../utils/itemUtils";
import { upgradeSkillSet } from "../../utils/skillUtils";

/** UI panel to upgrade a card (skill or item) */
export class CardUpgradetPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    cardsCount: number;

    roomType: ERoomType;
    heroClasses: EHeroClass[] | undefined;

    selectedCardIndex: number | undefined;

    cards: (ICard | null)[];

    cardSlot: CardSlot;
    upgradeButton: GameObjects.Text;
    moveButton: GameObjects.Text;
    hintText: GameObjects.Text;

    isCardUpgraded: boolean;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;

        this.cardsCount = 3;
        this.render();
        this.setVisible(false);
    }

    show() {
        this.setVisible(true);
        this.cardSlot.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }

    render() {
        this.removeAll(true);
        this.renderBorder();
        this.renderCardSlot();
        this.renderUpgradeButton();
        this.renderMoveButton();
        this.renderHintPanel();
    }

    renderCardSlot() {
        this.cardSlot = new CardSlot(this.gameScene, -50, 0, undefined, false, false, true, {
            onCardPlaced: this.handlePlaceCard,
            onCardTaken: this.handleRemoveCard,
        });
        this.add(this.cardSlot);
        this.gameScene.allCardSlots.push(this.cardSlot);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(0, 0, 520, 200, colors.BLACK).setOrigin(0.5, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);
    }

    renderMoveButton() {
        this.moveButton = this.scene.add
            .text(0, 120, i18n.ui.MOVE, { fontFamily: "Arial Black", fontSize: 18, color: "#aaffaa" })
            .setOrigin(0.5)
            .setVisible(false);
        this.moveButton
            .setInteractive()
            .on("pointerdown", () => {
                if (this.cardSlot.card) {
                    this.gameScene.isCardMoveAfterUpgrade = this.isCardUpgraded;
                    this.gameScene.selectCardToMove(this.cardSlot.card);
                }
            })
            .on("pointerover", () => {
                this.moveButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                this.moveButton.setColor("#AAFFAA");
            });
        this.add(this.moveButton);
    }

    renderUpgradeButton() {
        this.upgradeButton = this.scene.add
            .text(0, 150, i18n.ui.UPGRADE, { fontFamily: "Arial Black", fontSize: 18, color: "#f8b705ff" })
            .setOrigin(0.5)
            .setVisible(false);

        this.upgradeButton.setInteractive().on("pointerdown", () => {
            if (!this.cardSlot.card?.card) {
                return;
            }

            this.upgradeButton.setVisible(false);

            const { card } = this.cardSlot.card;
            if (card.type === ECardType.ITEM) {
                const { item } = card;
                if (!item) {
                    return;
                }
                if (item.nextLevel) {
                    const newItem = upgradeItem(item);                    
                    this.cardSlot.placeCard({ type: ECardType.ITEM, price: 0, item: newItem }, undefined);
                    //this.moveButton.setVisible(true);
                    this.upgradeButton.setVisible(false);
                    this.isCardUpgraded = true;
                }
            } else if (card.type === ECardType.SKILL) {
                const { skill } = card;
                if (!skill) {
                    return;
                }
                if (skill.nextLevel) {
                    const newSkill = upgradeSkillSet(skill,skill);
                    //newSkill.isActivateOnStart = skill.isActivateOnStart;
                    //newSkill.isChained = skill.isChained;
                    this.cardSlot.placeCard({ type: ECardType.SKILL, price: 0, skill: newSkill }, undefined);
                    this.upgradeButton.setVisible(false);
                    this.isCardUpgraded = true;
                }
            }
        });

        this.add(this.upgradeButton);
    }

    handlePlaceCard = () => {
        this.upgradeButton.setVisible(true);
        this.moveButton.setVisible(true);
        //console.log("card placed", this.cardSlot?.card?.card.type, this.cardSlot?.card?.card.item?.name);
    };

    handleRemoveCard = () => {
        this.upgradeButton.setVisible(false);
        this.moveButton.setVisible(false);
    };

    renderHintPanel() {
        const text = i18n.ui.UPGRADE_SKILL_OR_ITEM;
        const y = 220;
        this.hintText = this.scene.add.text(0, y, text, { fontFamily: "Arial Black", fontSize: 18, color: "#eeeeee" }).setOrigin(0.5, 0);
        this.add(this.hintText);
    }
}
