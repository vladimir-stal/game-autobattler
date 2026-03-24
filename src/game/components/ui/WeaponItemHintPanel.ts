import { IItem } from "../../../types";
import { colors } from "../../consts";
import { GameScene } from "../../scenes/GameScene";
import { HintPanel } from "./HintPanel";

export class ItemHintPanel extends HintPanel {
    item: IItem;
    isFromHero: boolean;

    constructor(gameScene: GameScene, x: number, y: number, item: IItem, isFromHero?: boolean) {
        super(gameScene, x, y, "");
        this.item = item;
        this.isFromHero = !!isFromHero;
        this.renderItem();
    }

    renderItem() {
        const { name, weaponType, battleBonuses, bonuses, heroClassBonuses } = this.item;
        const text = name + "ABABABA" + (weaponType ? "(" + weaponType + ")" : "");
        const bonusesText =
            battleBonuses?.reduce((text, bonus) => {
                text += bonus.type + "\n";
                return text;
            }, "") || "";

        const textObject = this.scene.add.text(0, 0, text).setOrigin(0, 0);
        this.add(textObject);

        const bonusesTextObject = this.scene.add.text(0, 20, bonusesText).setOrigin(0, 0);
        this.add(bonusesTextObject);

        const attrsText =
            bonuses?.reduce((text, bonus) => {
                text += bonus.attribute + " " + bonus.value + ",";
                return text;
            }, "") || "";

        const attrTextObject = this.scene.add.text(0, 40, attrsText).setOrigin(0, 0);
        this.add(attrTextObject);

        if (heroClassBonuses) {
            const hCbonus = heroClassBonuses?.[0];
            if (!hCbonus) {
                return;
            }

            const heroClassBonusText = hCbonus.heroClass + ": " + (hCbonus.bonus ? hCbonus.bonus.type + " [" + hCbonus.bonus.value + "]" : "");
            const heroClassBonusTextObject = this.scene.add.text(0, 60, heroClassBonusText).setOrigin(0, 0);
            this.add(heroClassBonusTextObject);
        }

        if (this.isFromHero) {
            this.renderImage();
        }
    }

    renderImage() {
        const rect = this.scene.add.rectangle(0, 0, 250, 0, colors.GREY).setOrigin(0, 0);
        this.add(rect);

        const { image } = this.item;
        const imageObject = this.scene.add.sprite(-25, 50, image, 0).setDisplaySize(150, 150).setOrigin(0, 0);
        this.add(imageObject);
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }
}
