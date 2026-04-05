import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";

/** Card to show mobs stats to choose opponent in mob battle  */
export class MobCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    titleText: GameObjects.Text;
    descriptionText: GameObjects.Text;

    options: { name: string; description?: string };

    constructor(scene: GameScene, x: number, y: number, options: { name: string; description?: string }) {
        super(scene, x, y);
        this.options = options;
        this.render();
    }

    render() {
        this.renderInfo();
    }

    renderInfo() {
        const { name, description } = this.options;
        this.titleText = this.scene.add.text(0, 20, name, { fontSize: 12, color: "#dddddd" }).setOrigin(0.5);
        this.add(this.titleText);

        this.descriptionText = this.scene.add.text(0, 50, description || "", { fontSize: 12, color: "#dddddd" }).setOrigin(0.5);
        this.add(this.descriptionText);
    }
}
