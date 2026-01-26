import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { IHeroSkillSet } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { HeroClassTag } from "./ui/HeroClassTag";
import { IMAGE_ICON_ATTACK, IMAGE_ICON_CHAINED } from "../utils/imageLoadUtil";
import { colors, i18n } from "../consts";
import { CardSlot } from "./CardSlot";

/** Card to buy from shop  */
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
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0, 0);
        this.rect.setStrokeStyle(1, 0x777777);

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                //console.log(">>>>>>>>>> ON GAMEOBJECT_POINTER_OVER");
                //console.log(this.x, this.y);
                //console.log(this.getWorldPoint());
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showSkill(x + 115, y, this.skill);
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                //console.log(">>>>>> ON GAMEOBJECT_POINTER_OUT");
                this.gameScene.hintPanel.hide();
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                //console.log("CLICK ON RECT", this.gameScene.isCardMoveMode, this.cardSlot);

                if (this.gameScene.isCardMoveMode && this.cardSlot) {
                    //console.log("CLICK CARD SLOT");
                    this.cardSlot.click();
                }
            });
        this.add(this.rect);

        this.renderImage();

        if (this.skill.isChained) {
            const chainImage = this.scene.add.image(90, 20, IMAGE_ICON_CHAINED);
            this.add(chainImage);
        }
        if (this.skill.isActivateOnStart) {
            const onStartImage = this.scene.add.image(90, 20, IMAGE_ICON_ATTACK);
            this.add(onStartImage);
        }

        //const chainedText = this.skill.isChained ? " (CHAIN)" : "";
        const title = i18n.ui.SKILL; //this.skill.name; // + "\n\n" + this.skill.desc;
        this.titleText = this.scene.add.text(30, 5, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" });
        this.add(this.titleText);
        // this.titleText.setText(this.skill.name + chainedText + "\n\n" + this.skill.desc);
        //this.titleText.setX(10);

        this.renderTags();
    }

    renderImage() {
        const { image } = this.skill;
        if (!image) {
            return;
        }

        this.image = this.gameScene.add.sprite(0, 25, image).setOrigin(0, 0);

        // this.image
        //     .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        //         console.log("IMAGE ON GAMEOBJECT_POINTER_OVER");
        //         this.gameScene.hintPanel.showSkill(this.x, this.y, this.skill);
        //     })
        //     .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        //         console.log("IMAGE ON GAMEOBJECT_POINTER_OUT");
        //         this.gameScene.hintPanel.hide();
        //     })
        //     .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        //         console.log("IMAGE ON CLICK");
        //     });

        this.add(this.image);
    }

    renderTags() {
        this.skill.heroClasses.forEach((heroClass, index) => {
            const x = index * 60;
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
