import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors, i18n } from "../consts";
import { ECardType, ICard, IHeroSkillSet, IItem, IUnit } from "../../types";
import { CardSlot } from "./CardSlot";
import { UnitCard } from "./UnitCard";
import { ItemCard } from "./ItemCard";
import { SkillCard } from "./SkillCard";
import { IMAGE_ITEM_COIN } from "../utils/load/imageLoadItems";

/** Card to buy from shop  */
export class Card extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    cardSlot: CardSlot | undefined;
    card: ICard;
    title: string;
    //upgradeButton: GameObjects.Text;
    onBuyPanel: boolean;

    constructor(scene: GameScene, x: number, y: number, card: ICard, onBuyPanel: boolean, cardSlot?: CardSlot) {
        super(scene, x, y);
        this.gameScene = scene;
        this.card = card;
        this.cardSlot = cardSlot;
        this.onBuyPanel = onBuyPanel;
        // if (card.type === ECardType.UNIT) {
        //     console.log("CARD BEFORE RENDER", this.card.unit.items.length);
        // }
        this.render();
    }

    render() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK, 0).setOrigin(0.5, 0);
        this.rect.setStrokeStyle(1, 0x777777);

        // this.rect.on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        //     console.log("CARD ON OVER");
        // });

        this.add(this.rect);

        this.titleText = this.scene.add.text(0, 10, this.title, { fontSize: 12, color: "#dddddd" }).setOrigin(0.5);
        this.add(this.titleText);

        const { type } = this.card;
        switch (type) {
            case ECardType.ATTRIBUTE:
                this.renderAttributeCard();
                break;
            case ECardType.EXP:
                this.renderExpCard();
                break;
            case ECardType.EXP_PARTY:
                this.renderExpPartyCard();
                break;
            case ECardType.GOLD:
                this.renderGoldCard();
                break;
            case ECardType.ITEM:
                this.renderItemCard();
                break;
            case ECardType.MOBS:
                this.renderMobsCard();
                break;
            case ECardType.SKILL:
                this.renderSkillCard();
                break;
            case ECardType.UNIT:
                this.renderHeroCard();
                break;
            default: {
                console.log("ERROR! No render for card found", type);
            }
        }
    }

    renderHeroCard() {
        if (!this.card.unit) {
            return;
        }
        this.titleText.setVisible(false);
        this.rect.setVisible(false);

        console.log("--> renderHeroCard", this.card.unit.name, this.card.unit.basicMaxHp);

        const heroCard = new UnitCard(this.gameScene, 0, 0, this, this.card.unit, !this.onBuyPanel, !this.onBuyPanel, this.cardSlot);
        this.add(heroCard);
    }

    renderItemCard() {
        const { item } = this.card;
        if (!item) {
            return;
        }

        this.titleText.setVisible(false);
        this.rect.setVisible(false);

        const itemCard = new ItemCard(this.gameScene, 0, 0, item, this.cardSlot);
        this.add(itemCard);
    }

    renderExpCard() {
        const { value } = this.card;
        if (!value) {
            return;
        }
        this.titleText.setText(i18n.ui.EXP + " " + value);
    }

    renderExpPartyCard() {
        const { value } = this.card;
        if (!value) {
            return;
        }
        this.titleText.setText(i18n.ui.EXP_PARTY + " " + value);
    }

    renderSkillCard() {
        const { skill } = this.card;
        if (!skill) {
            return;
        }

        this.titleText.setVisible(false);
        this.rect.setVisible(false);

        const skillCard = new SkillCard(this.gameScene, 0, 0, skill, this.cardSlot);
        this.add(skillCard);
    }

    renderMobsCard() {
        const { mobs, name } = this.card;
        if (!mobs || !name) {
            return;
        }
        this.titleText.setText(name);
    }

    renderGoldCard() {
        const { value } = this.card;
        if (value === undefined) {
            return;
        }

        const title = i18n.ui.GOLD + " " + value;
        this.titleText.setText(title);

        const imageObject = this.gameScene.add.sprite(0, 180, IMAGE_ITEM_COIN, 0).setOrigin(0.5, 1);
        this.add(imageObject);
    }

    renderAttributeCard() {
        const { attribute, value } = this.card;
        if (!attribute || value === undefined) {
            return;
        }

        const title = value + " " + i18n.attributes.attribute[attribute];
        this.titleText.setText(title);
    }

    refresh() {
        //console.log("REFRESH CARD", this.card.unit);
        //console.log("CARD refersh");
        //TODO: not the best way to update hero card
        this.removeAll(true);
        this.render();
    }

    setUnit(unit: IUnit) {
        this.card.unit = unit;
        this.refresh();
    }

    setItem(item: IItem) {
        this.card.item = item;
        this.refresh();
    }

    setSkill(skill: IHeroSkillSet) {
        this.card.skill = skill;
        this.refresh();
    }
}
