import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { IBuff } from "../../types";

/** Card to show buffs on unit in battle  */
export class BattleBuffCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    buff: IBuff;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number, buff: IBuff) {
        super(scene, x, y);
        this.gameScene = scene;
        this.buff = buff;
        this.render();
    }

    render() {
        this.renderBorder();
        this.renderBuff();
    }

    renderBuff() {
        this.titleText = this.scene.add.text(10, -10, this.buff.name, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 20, 20, 0x225522).setOrigin(0, 0);
        this.add(this.rect);
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
