import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { colors } from "../../consts";

/** UI panel to show all players and their remaining hp */
export class LeadersPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    leaderPanels: { hpText: GameObjects.Text }[];

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.leaderPanels = [];
        this.renderPlayers();
    }

    renderPlayers() {
        this.leaderPanels.forEach((panel) => {
            panel.hpText.destroy();
        });
        this.leaderPanels = [];

        this.gameScene.leaderController.leaders.forEach((leader, index) => {
            const rect = this.scene.add.rectangle(-40, index * 50, 40, 40, colors.BLACK);
            const strokeColor = leader.id === this.gameScene.leaderController.nextOpponentId ? colors.RED : 0x777777;
            rect.setStrokeStyle(1, strokeColor);
            this.add(rect);

            const text = this.scene.add.text(-10, index * 50 - 8, leader.name, { color: leader.hp > 0 ? "#ffffff" : "#aaaaaa" });
            this.add(text);

            const hpText = this.scene.add.text(-50, index * 50 - 8, "" + leader.hp);
            this.add(hpText);

            this.leaderPanels.push({ hpText });
        });
    }

    refresh() {
        this.renderPlayers();
        // this.gameScene.leaderController.leaders.forEach((leader, index) => {
        //     this.leaderPanels[index].hpText.setText("" + leader.hp);
        // });
    }
}
