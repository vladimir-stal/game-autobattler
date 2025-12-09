import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, ICard, IUnit } from "../../../types";
import { CardSlot } from "../CardSlot";
import { colors } from "../../consts";
import { createUnit } from "../../utils/unitUtils";
import { Card } from "../Card";
import { getRandomArrayItems } from "../../utils/commonUtils";
import { BASIC_CLASSES, basicClassHeroes } from "../../heroConsts";
import { UnitCard } from "../UnitCard";
import { getHeroMulticlass, getMcHeroByClass, getMulticlassSubclasses } from "../../utils/heroUtils";
import { getHeroImage } from "../../utils/imageUtils";
import { HeroClassTag } from "./HeroClassTag";
import { applyItemBonuses } from "../../utils/itemUtils";

/** UI panel to upgrade basic class hero to multiclass hero */
export class UnitUpgradePanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    unit: IUnit;
    card: Card;
    //upgradeButton: GameObjects.Text;
    isRerollAvailable: boolean;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.renderBorder();
        //this.renderSlots();
        this.hide();
    }

    show(unitToUpgrade: IUnit, card: Card) {
        this.unit = unitToUpgrade;
        this.card = card;
        this.isRerollAvailable = true;
        this.render();
    }

    hide() {
        this.setVisible(false);
    }

    render() {
        this.removeAll(true);
        this.renderBorder();
        this.renderCards();
        this.renderButtons();
        this.setVisible(true);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(100, -50, 600, 400, 0x000000, 1).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);

        const title = this.scene.add.text(320, -40, "SELECT UPGRADE", {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(title);
    }

    renderCards() {
        const randomHeroClasses = getRandomArrayItems(
            BASIC_CLASSES.filter((heroClass) => heroClass !== this.unit.heroClass),
            3,
            true
        );

        const mcClasses = randomHeroClasses.map((randomClass) => getHeroMulticlass(this.unit.heroClass, randomClass));

        mcClasses.forEach((mcHeroClass, i) => {
            this.renderCard(mcHeroClass, i);
        });
    }

    renderCard(mcHeroClass: EHeroClass, index: number) {
        this.renderImage(mcHeroClass, index);

        const mcClassTextObject = this.scene.add.text(150 + index * 200, 0, mcHeroClass);
        this.add(mcClassTextObject);

        // show/hide skill description
        const rect = this.gameScene.add.rectangle(130 + index * 200, 0, 150, 350, colors.BLACK, 0).setOrigin(0, 0);
        rect.setInteractive()
            .on("pointerover", () => {
                skillTextObject.setVisible(true);
            })
            .on("pointerout", () => {
                skillTextObject.setVisible(false);
            });
        this.add(rect);

        const mcSkill = getMcHeroByClass(mcHeroClass).skills[0];
        const skillTextObject = this.scene.add.text(150 + index * 200, 220, mcSkill.name + "\n" + mcSkill.desc, {
            fontSize: 12,
            color: "#dddddd",
        });
        skillTextObject.width = 20;
        skillTextObject.setVisible(false);
        this.add(skillTextObject);

        getMulticlassSubclasses(mcHeroClass).forEach((heroClass, index2) => {
            const x = 150 + index * 200 + index2 * 60;
            const hcTag = new HeroClassTag(this.gameScene, x, 20, heroClass);
            this.add(hcTag);
        });

        const upgradeButton = this.scene.add.text(150 + index * 200, 300, "UPGRADE", {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#aaffaa",
        });

        upgradeButton
            .setInteractive()
            .on("pointerdown", () => {
                const mcUnit = createUnit(getMcHeroByClass(mcHeroClass), this.unit.addedAttributes);
                mcUnit.items = this.unit.items;
                mcUnit.items.forEach((item) => {
                    applyItemBonuses(item, mcUnit);
                });

                this.unit.skills.forEach((skill) => {
                    mcUnit.skills.push(skill);
                });
                this.card.setUnit(mcUnit);

                this.hide();
            })
            .on("pointerover", () => {
                upgradeButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                upgradeButton.setColor("#AAFFAA");
            });
        this.add(upgradeButton);
    }

    renderImage(heroClass: EHeroClass, index: number) {
        const x = 50 + index * 200;
        const { image, animation } = getHeroImage(heroClass);
        const imageObject = this.gameScene.add.sprite(x, 40, image, 0).setOrigin(0, 0);
        if (animation) {
            imageObject.anims.play(animation);
        }
        this.add(imageObject);
    }

    renderButtons() {
        //if (this.isRerollAvailable) {
        const rerollButton = this.scene.add.text(120, -30, "REROLL", {
            //fontFamily: "Arial Black",
            fontSize: 18,
            color: "#aaffaa",
        });

        rerollButton.setInteractive().on("pointerdown", () => {
            this.isRerollAvailable = false;
            this.render();
        });

        this.add(rerollButton);
        //}
    }
}
