import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { IDebuff } from "../../types";

/** Card to show debuffs on unit in battle  */
export class BattleDebuffCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    debuff: IDebuff;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number, debuff: IDebuff) {
        super(scene, x, y);
        this.gameScene = scene;
        this.debuff = debuff;
        this.render();
    }

    render() {
        this.renderBorder();
        this.renderBuff();
    }

    renderBuff() {
        const { name, totalValue } = this.debuff;
        const text = name + " " + (totalValue || "");
        this.titleText = this.scene.add.text(10, -10, text, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 20, 20, 0x552255).setOrigin(0, 0);
        this.add(this.rect);
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
