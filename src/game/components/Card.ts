import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, ICard, IHeroSkillSet, IItem, IUnit } from "../../types";
import { CardSlot } from "./CardSlot";
import { UnitCard } from "./UnitCard";
import { ItemCard } from "./ItemCard";
import { HeroClassTag } from "./ui/HeroClassTag";
import { SkillCard } from "./SkillCard";

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

    constructor(scene: GameScene, x: number, y: number, card: ICard, onBuyPanel: boolean) {
        super(scene, x, y);
        this.gameScene = scene;
        this.card = card;
        this.onBuyPanel = onBuyPanel;
        this.render();
    }

    render() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0, 0);
        this.rect.setStrokeStyle(1, 0x777777);
        this.add(this.rect);

        this.titleText = this.scene.add.text(-10, 10, this.title, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);

        const { type } = this.card;
        switch (type) {
            case ECardType.ATTRIBUTE:
                this.renderAttributeCard();
                break;
            case ECardType.EXP:
                this.renderExpCard();
                break;
            case ECardType.GOLD:
                this.renderGoldCard();
                break;
            case ECardType.ITEM:
                {
                    this.renderItemCard();
                }
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

        console.log("renderHeroCard");

        const heroCard = new UnitCard(this.gameScene, 0, 0, this, this.card.unit, !this.onBuyPanel, !this.onBuyPanel);
        this.add(heroCard);
    }

    renderItemCard() {
        const { item } = this.card;
        if (!item) {
            return;
        }

        this.titleText.setVisible(false);

        const itemCard = new ItemCard(this.gameScene, 0, 0, item);
        this.add(itemCard);
    }

    renderExpCard() {
        const { value } = this.card;
        if (!value) {
            return;
        }
        this.titleText.setText("EXP " + value);
    }

    renderSkillCard() {
        const { skill } = this.card;
        if (!skill) {
            return;
        }

        this.titleText.setVisible(false);

        const skillCard = new SkillCard(this.gameScene, 0, 0, skill);
        this.add(skillCard);
        // const { skill } = this.card;
        // if (!skill) {
        //     return;
        // }

        // const chainedText = skill.isChained ? " (CHAIN)" : "";

        // this.titleText.setText(skill.name + chainedText + "\n\n" + skill.desc);
        // this.titleText.setX(10);

        // skill.heroClasses.forEach((heroClass, index) => {
        //     const x = index * 60;
        //     const y = 178;
        //     const hcTag = new HeroClassTag(this.gameScene, x, y, heroClass);
        //     this.add(hcTag);
        // });
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

        const title = "GOLD " + value;
        this.titleText.setText(title);
    }

    renderAttributeCard() {
        const { attribute, value } = this.card;
        if (!attribute || value === undefined) {
            return;
        }

        const title = "+ " + value + " " + attribute;
        this.titleText.setText(title);
    }

    refresh() {
        console.log("CARD refersh");
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
