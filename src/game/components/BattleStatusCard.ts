import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { EStatusType, IBuff, IStatus } from "../../types";
import { IMAGE_STATUS_BLEED } from "../utils/imageLoadUtil";

/** Card to show statuses on unit in battle  */
export class BattleStatusCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    status: IStatus;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number, status: IStatus) {
        super(scene, x, y);
        this.gameScene = scene;
        this.status = status;
        this.render();
    }

    render() {
        this.renderBorder();
        this.renderStatus();
    }

    renderStatus() {
        this.titleText = this.scene.add.text(10, -10, this.status.type + " " + this.status.value, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 20, 20, 0x444444).setOrigin(0, 0);
        this.add(this.rect);
        //const image = this.scene.add.image(0, 0, IMAGE_STATUS_BLEED);
        //this.add(image);
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
