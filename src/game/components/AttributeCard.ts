import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { THeroAttribute } from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_ATTRIBUTE_ARMOR,
    IMAGE_ATTRIBUTE_CRIT_CHANCE,
    IMAGE_ATTRIBUTE_EVASION,
    IMAGE_ATTRIBUTE_HEALTH,
    IMAGE_ATTRIBUTE_MAGIC_POWER,
    IMAGE_ATTRIBUTE_PHYSICAL_POWER,
    IMAGE_ATTRIBUTE_REGENERATION,
} from "../utils/imageLoadUtil";

/** Card to show mobs stats to choose opponent in mob battle  */
export class AttributeCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    titleText: GameObjects.Text;
    descriptionText: GameObjects.Text;

    attribute: THeroAttribute;
    value: number;

    constructor(scene: GameScene, x: number, y: number, options: { attribute: THeroAttribute; value: number }) {
        super(scene, x, y);
        this.attribute = options.attribute;
        this.value = options.value;
        this.render();
    }

    render() {
        this.renderImage();
        this.renderInfo();
    }

    renderInfo() {
        const title = this.value + " " + i18n.attributes.attribute[this.attribute];
        this.titleText = this.scene.add.text(0, 20, title, { fontSize: 12, color: "#dddddd" }).setOrigin(0.5);
        this.add(this.titleText);
    }

    renderImage() {
        let imageTexture;
        switch (this.attribute) {
            case "basicArmor":
                imageTexture = IMAGE_ATTRIBUTE_ARMOR;
                break;
            case "basicCritChance":
                imageTexture = IMAGE_ATTRIBUTE_CRIT_CHANCE;
                break;
            case "basicEvasionChance":
                imageTexture = IMAGE_ATTRIBUTE_EVASION;
                break;
            case "basicHpRegen":
                imageTexture = IMAGE_ATTRIBUTE_REGENERATION;
                break;
            case "basicMagicPower":
                imageTexture = IMAGE_ATTRIBUTE_MAGIC_POWER;
                break;
            case "basicPhysicalPower":
                imageTexture = IMAGE_ATTRIBUTE_PHYSICAL_POWER;
                break;
            case "basicMaxHp":
                imageTexture = IMAGE_ATTRIBUTE_HEALTH;
                break;
            default:
                imageTexture = IMAGE_ATTRIBUTE_EVASION;
        }

        const image = this.scene.add.image(0, 90, imageTexture).setOrigin(0.5);
        this.add(image);
    }
}
