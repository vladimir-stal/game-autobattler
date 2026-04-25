import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EEffectAnimationType, IBuff } from "../../types";
import { ANIMATION_COMPLETE, colors } from "../consts";
import { IMAGE_EFFECT_UI_BUFF_0, IMAGE_EFFECT_UI_BUFF_2 } from "../utils/load/imageLoadUIEffects";
import { IMAGE_ICON_ATTACK } from "../utils/imageLoadUtil";

/** Card to show buffs on unit in battle  */
export class BattleBuffCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    buff: IBuff;

    rect: GameObjects.Rectangle;
    borderImageObject: GameObjects.Sprite;
    titleText: GameObjects.Text;
    iconImage: GameObjects.Image;
    uiEffectImageObject: GameObjects.Sprite;

    constructor(scene: GameScene, x: number, y: number, buff: IBuff) {
        super(scene, x, y);
        this.gameScene = scene;
        this.buff = buff;
        console.log(">>> CREATE BUFF PANEL > ", buff);
        this.render();
    }

    render() {
        this.renderUIEffects();
        this.renderBorder();
        this.renderTitle();
        this.renderIcon();
    }

    renderTitle() {
        const { name, totalValue } = this.buff;
        const text = name + " " + (totalValue || "");
        this.titleText = this.scene.add.text(10, -10, text, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
    }

    renderBorder() {
        //this.rect = this.scene.add.rectangle(0, 0, 25, 25, colors.BLACK).setOrigin(0, 0); //0x225522
        //this.rect.setStrokeStyle(1, 0x666666);
        //this.add(this.rect);

        this.borderImageObject = this.scene.add
            .sprite(-17, -30, IMAGE_EFFECT_UI_BUFF_0)
            .setOrigin(0, 0)
            //.setDisplaySize(displaySize, displaySize)
            //.setFlipX(this.isInverted)
            .setDepth(200);
        //.setVisible(false);
        this.add(this.borderImageObject);

        const animation = EEffectAnimationType.EFFECT_UI_BUFF_0;
        //this.uiEffectImageObject.setVisible(true);
        this.borderImageObject.anims.play(animation);
        this.borderImageObject.on(ANIMATION_COMPLETE, () => {
            //this.uiEffectImageObject.setVisible(false);
            this.borderImageObject.removeListener(ANIMATION_COMPLETE);
        });
    }

    renderIcon() {
        this.iconImage = this.scene.add.image(-2, -5, IMAGE_ICON_ATTACK).setOrigin(0, 0);
        this.add(this.iconImage);
    }

    renderUIEffects() {
        this.uiEffectImageObject = this.gameScene.add
            .sprite(-120, -150, IMAGE_EFFECT_UI_BUFF_2) //-50, -80,
            .setOrigin(0, 0)
            //.setDisplaySize(displaySize, displaySize)
            //.setFlipX(this.isInverted)
            .setDepth(200)
            .setVisible(false);
        this.add(this.uiEffectImageObject);
    }

    playAddBuffTarget() {
        //const x = 40 * index;
        //const y = -180;
        //this.uiEffectImageObject.setPosition(x, y);

        const animation = EEffectAnimationType.EFFECT_UI_BUFF_2;
        this.uiEffectImageObject.setVisible(true);
        this.uiEffectImageObject.anims.play(animation);
        this.uiEffectImageObject.on(ANIMATION_COMPLETE, () => {
            this.uiEffectImageObject.setVisible(false);
            this.uiEffectImageObject.removeListener(ANIMATION_COMPLETE);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
