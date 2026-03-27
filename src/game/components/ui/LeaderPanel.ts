import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { IMAGE_LEADER_1, IMAGE_LEADER_1_IDLE } from "../../utils/imageLoadUtil";
import { AnimationType } from "../../../types";

/** UI panel for Leader */
export class LeaderPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    hpText: GameObjects.Text;
    imgWidth: number;
    imgHeight: number;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.renderImage();
        this.renderHp();
        //this.renderBorder();
        //this.renderSellSlot();
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }

    renderImage() {
        const {width} = this.gameScene.camera;
        const scale = width < 1600 ? width / 1600 : 1;
        const imageObject = this.gameScene.add.sprite(0, 0, IMAGE_LEADER_1_IDLE, 0).setDisplaySize(400*scale, 400*scale).setOrigin(0, 0);
        this.imgWidth = imageObject.displayWidth;
        this.imgHeight = imageObject.displayHeight;
        imageObject.anims.play(AnimationType.LEADER_1_IDLE);

        this.add(imageObject);
    }

    renderHp() {
        const hp = this.gameScene.leaderController.hp;
        this.hpText = this.scene.add.text(300, 30, "HP: " + hp, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ccffcc",
        });
        this.hpText.setX(this.imgWidth - this.hpText.width - 30);
        this.add(this.hpText);
    }

    setHp(value: number) {
        this.hpText.setText("HP: " + value);
    }
}
