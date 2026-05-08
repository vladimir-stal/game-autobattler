import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { IHeroSkillSet } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { HeroClassTag } from "./ui/HeroClassTag";
import { IMAGE_ICON_ATTACK, IMAGE_ICON_CHAINED } from "../utils/imageLoadUtil";
import { colors, i18n } from "../consts";
import { CardSlot } from "./CardSlot";
import { getCardBorderColor } from "../utils/commonUtils";
import { IMAGE_MULTIATALAS_SKILLS } from "../utils/load/skillImagesLoad";

/** Skill card to buy, move and equip on hero */
export class SkillCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    cardSlot: CardSlot | undefined;
    titleText: GameObjects.Text;
    skill: IHeroSkillSet;
    title: string;
    image: GameObjects.Image;
    rect: GameObjects.Rectangle;

    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;

    constructor(scene: GameScene, x: number, y: number, skill: IHeroSkillSet, cardSlot?: CardSlot) {
        super(scene, x, y);
        this.gameScene = scene;
        this.cardSlot = cardSlot;
        this.skill = skill;
        this.render();
    }

    render() {
        this.renderImage();
        this.renderBorder();
        this.renderInfo();
        this.renderTags();
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK, 0).setOrigin(0.5, 0);
        this.rect.setStrokeStyle(2, getCardBorderColor(this.skill.priceLevel));

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showSkill(x + 115, y, this.skill);
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.gameScene.hintPanel.hide();
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (this.gameScene.isCardMoveMode && this.cardSlot) {
                    this.cardSlot.click();
                }
            });
        this.add(this.rect);
    }

    renderInfo() {
        if (this.skill.isChained) {
            const chainImage = this.scene.add.image(0, 40, IMAGE_ICON_CHAINED).setOrigin(0.5);
            this.add(chainImage);
        }
        if (this.skill.isActivateOnStart) {
            const onStartImage = this.scene.add.image(0, 40, IMAGE_ICON_ATTACK).setOrigin(0.5);
            this.add(onStartImage);
        }

        const title = i18n.ui.SKILL;
        this.titleText = this.scene.add.text(0, 15, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" }).setOrigin(0.5);
        this.add(this.titleText);
    }

    renderImage() {
        const { image } = this.skill;
        if (!image) {
            return;
        }

        //TODO: remove -  HACK TO DIVIDE SINGLE AND ATLAS SKILL IMAGES
        if (image.startsWith("IMAGE_SKILL_MOB") || image.startsWith("IMAGE_SKILL_3")) {
            this.image = this.gameScene.add.image(0, 5, image).setOrigin(0.5, 0);
        } else {
            this.image = this.gameScene.add.sprite(0, 5, IMAGE_MULTIATALAS_SKILLS, image).setOrigin(0.5, 0);
        }
        this.add(this.image);
    }

    renderTags() {
        this.skill.heroClasses.forEach((heroClass, index) => {
            const x = index * 60 - 50;
            const y = 178;
            const hcTag = new HeroClassTag(this.gameScene, x, y, heroClass);
            this.add(hcTag);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
