import { colors } from "../../consts";
import { GameScene } from "../../scenes/GameScene";

export class HintPanel extends Phaser.GameObjects.Container {
    text: string;

    constructor(gameScene: GameScene, x: number, y: number, text: string) {
        super(gameScene, x, y);
        this.text = text;
        this.render();
    }

    render() {
        const rect = this.scene.add.rectangle(0, 0, 150, 80, colors.GREY).setOrigin(0, 0);
        this.add(rect);

        const textObject = this.scene.add.text(0, 0, this.text).setOrigin(0, 0);
        this.add(textObject);
    }

    show() {
        this.setVisible(true);
    }

    hide() {
        this.setVisible(false);
    }
}
