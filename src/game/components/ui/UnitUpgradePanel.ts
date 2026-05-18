import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { EHeroClass, IUnit } from "../../../types";
import { colors, i18n } from "../../consts";
import { createUnit } from "../../utils/unitUtils";
import { Card } from "../Card";
import { getRandomArrayItem, getRandomArrayItems } from "../../utils/commonUtils";
import { BASIC_CLASSES } from "../../heroConsts";
import { getHeroMulticlass, getMcHeroByClass, getMulticlassSubclasses } from "../../utils/heroUtils";
import { getHeroImage } from "../../utils/imageUtils";
import { HeroClassTag } from "./HeroClassTag";
import { applyItemBonuses } from "../../utils/itemUtils";
import { IMAGE_ICON_REROLL } from "../../utils/imageLoadUtil";

const REROLL_PRICE = 4;

/** UI panel to upgrade basic class hero to multiclass hero */
export class UnitUpgradePanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    unit: IUnit;
    card: Card;
    //upgradeButton: GameObjects.Text;
    isRerollAvailable: boolean;

    hintText: GameObjects.Text;

    basicHeroClasses: EHeroClass[];

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
        this.render(false);
    }

    hide() {
        this.setVisible(false);
    }

    render(isAfterReroll: boolean) {
        this.removeAll(true);
        this.renderBorder();
        this.renderCards(isAfterReroll);
        this.renderButtons();
        this.setVisible(true);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(100, -50, 600, 400, 0x000000, 1).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);

        const title = this.scene.add
            .text(400, -40, i18n.ui.UPGRADE_HERO_TO_MC, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#ffffff",
            })
            .setOrigin(0.5);
        this.add(title);
    }

    async renderCards(isAfterReroll: boolean) {
        let basicClasses = BASIC_CLASSES.filter((heroClass) => heroClass !== this.unit.heroClass);
        // remove one basic, which was in first 3 options, from options after reroll
        // to increase chance of finding specific mc hero
        if (isAfterReroll) {
            const previousBasicHeroClasses = [...this.basicHeroClasses];
            const randomPrevBasicClass = getRandomArrayItem(previousBasicHeroClasses);
            basicClasses = basicClasses.filter((heroClass) => heroClass !== randomPrevBasicClass);
        }

        const randomHeroClasses = getRandomArrayItems(basicClasses, 3, true);
        this.basicHeroClasses = randomHeroClasses;

        const mcClasses = randomHeroClasses.map((randomClass) => getHeroMulticlass(this.unit.heroClass, randomClass));

        const unitsIds = mcClasses.map((mcHeroClass) => getMcHeroByClass(mcHeroClass).id);
        await this.gameScene.imageLoadController.loadIdleUnits(unitsIds);

        mcClasses.forEach((mcHeroClass, i) => {
            this.renderCard(mcHeroClass, i);
        });
    }

    renderCard(mcHeroClass: EHeroClass, index: number) {
        this.renderImage(mcHeroClass, index);

        const mcHero = getMcHeroByClass(mcHeroClass);

        const mcClassTextObject = this.scene.add.text(150 + index * 200, 0, mcHero.name);
        this.add(mcClassTextObject);

        // show/hide skill description
        const rect = this.gameScene.add.rectangle(130 + index * 200, 0, 150, 350, colors.BLACK, 0).setOrigin(0, 0);
        rect.setInteractive()
            .on("pointerover", () => {
                //skillTextObject.setVisible(true);
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showUnit(x + index * 200 + 280, y, mcHero, { isSkills: true, isLongText: this.gameScene.hintPanel.showLongText });
            })
            .on("pointerout", () => {
                //skillTextObject.setVisible(false);
                this.gameScene.hintPanel.hide();
            })
            .on("pointerdown", (pointer) => {
                            if (pointer.rightButtonDown()) {
                                this.gameScene.hintPanel.showLongText = ! this.gameScene.hintPanel.showLongText;
                                if (this.gameScene.hintPanel.visible) {
                                    this.gameScene.hintPanel.hide();
                                    const { x, y } = this.getWorldPoint();
                                    this.gameScene.hintPanel.showUnit(x + index * 200 + 280, y, mcHero, {isSkills: true, isLongText: this.gameScene.hintPanel.showLongText});
                                }
                                //console.log("(right click detected)");
                            };
                        });
        this.add(rect);

        const mcSkill = mcHero.skills[0];
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

        const upgradeButton = this.scene.add.text(150 + index * 200, 300, i18n.ui.UPGRADE, {
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
                this.gameScene.enableCardMoving();
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
        const y = 350;
        const imageObject = this.gameScene.add.sprite(x, y, image, 0).setOrigin(0, 1);
        if (animation) {
            imageObject.anims.play(animation);
        }
        this.add(imageObject);
    }

    renderButtons() {
        if (this.isRerollAvailable) {
            const rerollPriceText = REROLL_PRICE + " " + i18n.ui.GOLD;
            const rerollButtonText = this.scene.add
                .text(725, -50, rerollPriceText, {
                    //fontFamily: "Arial Black",
                    fontSize: 18,
                    color: "#aaffaa",
                })
                .setOrigin(0, 0.5);
            this.add(rerollButtonText);

            const rerollButtonImage = this.scene.add.image(700, -50, IMAGE_ICON_REROLL).setOrigin(0.5, 0.5);
            this.add(rerollButtonImage);

            rerollButtonImage.setInteractive().on("pointerdown", () => {
                if (this.gameScene.bankController.totalGold < REROLL_PRICE) {
                    return;
                }

                this.gameScene.bankController.buy(REROLL_PRICE);
                this.isRerollAvailable = false;
                this.render(true);
            });
        }
    }
}
