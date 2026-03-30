import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { i18n } from "../../consts";

/** UI panel at the top of the window */
export class TopPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    goldText: GameObjects.Text;
    incomeText: GameObjects.Text;

    dayText: GameObjects.Text;
    hourText: GameObjects.Text;

    hpText: GameObjects.Text;

    //startDuelButton: GameObjects.Text;
    startSelectButton: GameObjects.Text;
    nextRoomButton: GameObjects.Text;
    //calculateBattleButton: GameObjects.Text;
    restartButton: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);

        this.gameScene = scene;
        //this.renderHp();
        this.renderGold();
        this.renderDay();
        this.renderButtons();
    }

    renderHp() {
        const hp = this.gameScene.leaderController.hp;
        const text = i18n.ui.HP + ": ";
        this.hpText = this.scene.add.text(50, 150, text + hp, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ccffcc",
        });
        this.add(this.hpText);
    }

    renderGold() {
        const { totalGold, income } = this.gameScene.bankController;

        const goldText = i18n.ui.GOLD + ": " + totalGold;
        this.goldText = this.scene.add.text(20, 20, goldText, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.goldText);

        const incomeText = i18n.ui.INCOME + ": " + income;
        this.incomeText = this.scene.add.text(150, 20, incomeText, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.incomeText);
    }

    renderDay() {
        const { day, hour } = this.gameScene.selectController;

        const dayText = i18n.ui.DAY + ": " + day;
        this.dayText = this.scene.add.text(20, 50, dayText, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.dayText);

        const hourText = i18n.ui.HOUR + ": " + hour;
        this.hourText = this.scene.add.text(150, 50, hourText, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.hourText);
    }

    renderButtons() {
        const centerX = this.gameScene.camera.width / 2;
        //
        // START SELECTION BUTTON

        this.startSelectButton = this.scene.add
            .text(centerX, 20, i18n.ui.SKIP, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#ffffff",
            })
            .setOrigin(0.5)
            .setVisible(false);

        this.startSelectButton
            .setInteractive()
            .on("pointerdown", () => {
                this.gameScene.battlePanel.skipBattle();
                this.gameScene.changeToSelectPhase();
                this.gameScene.battlePanel.clear();
            })
            .on("pointerover", () => {
                this.startSelectButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                this.startSelectButton.setColor("#AAFFAA");
            });

        this.add(this.startSelectButton);

        // NEXT ROOM BUTTON

        this.nextRoomButton = this.scene.add
            .text(centerX, 20, i18n.ui.NEXT_ROOM, {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#ffffff",
            })
            .setOrigin(0.5);

        this.nextRoomButton
            .setInteractive()
            .on("pointerdown", () => {
                this.gameScene.selectController.showNextRoomSelect();
                this.gameScene.cardUpgradePanel.hide();
                this.gameScene.skillCardEnchantPanel.hide();
            })
            .on("pointerover", () => {
                this.nextRoomButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                this.nextRoomButton.setColor("#AAFFAA");
            });

        this.add(this.nextRoomButton);

        // RESTART BUTTON

        this.restartButton = this.scene.add
            .text(this.gameScene.camera.width - 120, 20, i18n.ui.RESTART_GAME, {
                // was text(1500,20, ...)
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#ffffff",
            })
            .setOrigin(0.5);

        this.restartButton
            .setInteractive()
            .on("pointerdown", () => {
                this.gameScene.restartGame();
            })
            .on("pointerover", () => {
                this.nextRoomButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                this.nextRoomButton.setColor("#AAFFAA");
            });

        this.add(this.restartButton);
    }

    setBank(value: number) {
        this.goldText.setText(i18n.ui.GOLD + ": " + value);
    }

    setIncome(value: number) {
        this.incomeText.setText(i18n.ui.INCOME + ": " + value);
    }

    setDay(day: number) {
        this.dayText.setText(i18n.ui.DAY + ": " + day);
    }

    setHour(hour: number) {
        this.hourText.setText(i18n.ui.HOUR + ": " + hour);
    }

    setHp(value: number) {
        this.hpText.setText(i18n.ui.HP + ": " + value);
    }

    changeToDuelPhase() {
        //this.startDuelButton.setVisible(false);
        this.startSelectButton.setVisible(true);
        //this.calculateBattleButton.setVisible(true);
        this.nextRoomButton.setVisible(false);
    }

    changeToSelectPhase() {
        //this.startDuelButton.setVisible(true);
        this.startSelectButton.setVisible(false);
        //this.calculateBattleButton.setVisible(false);
        this.nextRoomButton.setVisible(true);
    }

    showNextRoomButton() {
        this.nextRoomButton.setVisible(true);
    }

    hideNextRoomButton() {
        this.nextRoomButton.setVisible(false);
    }

    changeSelectButtonToNext() {
        this.startSelectButton.setText(i18n.ui.NEXT);
    }

    refreshAfterResize() {
        const { width } = this.gameScene.camera;
        this.restartButton.setX(width - 120);
        this.startSelectButton.setX(width / 2);
        this.nextRoomButton.setX(width / 2);
    }
}
