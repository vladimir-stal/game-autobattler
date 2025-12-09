import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { IMAGE_LEADER_1, IMAGE_LEADER_1_IDLE } from "../../utils/imageLoadUtil";
import { AnimationType } from "../../../types";

/** UI panel for Leader */
export class LeaderPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    hpText: GameObjects.Text;

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
        const imageObject = this.gameScene.add.sprite(0, 0, IMAGE_LEADER_1_IDLE, 0).setDisplaySize(400, 400).setOrigin(0, 0);
        imageObject.anims.play(AnimationType.LEADER_1_IDLE);

        this.add(imageObject);
    }

    renderHp() {
        const hp = this.gameScene.leaderController.hp;
        this.hpText = this.scene.add.text(300, 50, "HP: " + hp, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ccffcc",
        });
        this.add(this.hpText);
    }

    setHp(value: number) {
        this.hpText.setText("HP: " + value);
    }
}
