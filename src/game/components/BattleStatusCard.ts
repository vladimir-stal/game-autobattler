import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { ANIMATION_COMPLETE, colors } from "../consts";
import { EEffectAnimationType, EStatusType, IBuff, IStatus } from "../../types";
import { IMAGE_STATUS_BLEED, IMAGE_STATUS_BURN, IMAGE_STATUS_POISON, IMAGE_STATUS_SHOCK } from "../utils/imageLoadUtil";
import { IMAGE_EFFECT_UI_STATUS_SHOCK_0 } from "../utils/load/imageLoadUIEffects";

/** Card to show statuses on unit in battle  */
export class BattleStatusCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    status: IStatus;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    iconImage: GameObjects.Image;
    uiEffectImageObject: GameObjects.Sprite;

    constructor(scene: GameScene, x: number, y: number, status: IStatus) {
        super(scene, x, y);
        this.gameScene = scene;
        this.status = status;
        this.render();
    }

    render() {
        this.renderUIEffects();
        this.renderBorder();
        this.renderTitle();
        this.renderIcon();
    }

    renderTitle() {
        this.titleText = this.scene.add.text(10, -10, "" + this.status.value, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
    }

    renderBorder() {
        let borderColor = colors.WHITE;
        switch (this.status.type) {
            case EStatusType.BLEED:
                borderColor = colors.RED;
                break;
            case EStatusType.BURN:
                borderColor = colors.ORANGE;
                break;
            case EStatusType.POISON:
                borderColor = colors.GREEN;
                break;
            case EStatusType.SHOCK:
                borderColor = colors.BLUE_LIGHT;
                break;
        }
        this.rect = this.scene.add.rectangle(0, 0, 30, 30, colors.BLACK, 0).setOrigin(0, 0);
        this.rect.setStrokeStyle(1, borderColor);
        this.add(this.rect);
    }

    renderIcon() {
        let iconTexture = IMAGE_STATUS_POISON;
        switch (this.status.type) {
            case EStatusType.BLEED:
                iconTexture = IMAGE_STATUS_BLEED;
                break;
            case EStatusType.BURN:
                iconTexture = IMAGE_STATUS_BURN;
                break;
            case EStatusType.POISON:
                iconTexture = IMAGE_STATUS_POISON;
                break;
            case EStatusType.SHOCK:
                iconTexture = IMAGE_STATUS_SHOCK;
                break;
        }
        this.iconImage = this.scene.add.image(0, 0, iconTexture).setOrigin(0, 0);
        this.add(this.iconImage);
    }

    renderUIEffects() {
        this.uiEffectImageObject = this.gameScene.add
            .sprite(-35, -30, IMAGE_EFFECT_UI_STATUS_SHOCK_0)
            .setOrigin(0, 0)
            .setDisplaySize(116, 172)
            .setDepth(200)
            .setVisible(false);
        this.add(this.uiEffectImageObject);
    }

    playAddStatusTarget() {
        const animation = EEffectAnimationType.EFFECT_UI_STATUS_SHOCK_0;
        this.titleText.setVisible(false);
        this.iconImage.setVisible(false);
        this.rect.setVisible(false);
        this.uiEffectImageObject.setVisible(true);
        this.uiEffectImageObject.anims.play(animation);
        this.uiEffectImageObject.on(ANIMATION_COMPLETE, () => {
            this.uiEffectImageObject.setVisible(false);
            this.titleText.setVisible(true);
            this.iconImage.setVisible(true);
            this.rect.setVisible(true);
            this.uiEffectImageObject.removeListener(ANIMATION_COMPLETE);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
