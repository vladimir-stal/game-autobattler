import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";

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
        this.hpText = this.scene.add.text(50, 150, "HP: " + hp, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ccffcc",
        });
        this.add(this.hpText);
    }

    renderGold() {
        const { totalGold, income } = this.gameScene.bankController;

        this.goldText = this.scene.add.text(20, 20, "GOLD: " + totalGold, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.goldText);

        this.incomeText = this.scene.add.text(120, 20, "INCOME: " + income, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.incomeText);
    }

    renderDay() {
        const { day, hour } = this.gameScene.selectController;

        this.dayText = this.scene.add.text(20, 50, "DAY: " + day, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.dayText);

        this.hourText = this.scene.add.text(120, 50, "HOUR: " + hour, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });
        this.add(this.hourText);
    }

    renderButtons() {
        // START DUEL BUTTON

        // this.startDuelButton = this.scene.add.text(700, 20, "DUEL!", {
        //     fontFamily: "Arial Black",
        //     fontSize: 18,
        //     color: "#ffffff",
        // });

        // this.startDuelButton
        //     .setInteractive(new Phaser.Geom.Rectangle(0, 0, 90, 30), Phaser.Geom.Rectangle.Contains)
        //     .on("pointerdown", () => {
        //         this.gameScene.changeToDuelPhase();
        //     })
        //     .on("pointerover", () => {
        //         this.startDuelButton.setColor("#FFFFFF");
        //     })
        //     .on("pointerout", () => {
        //         this.startDuelButton.setColor("#AAFFAA");
        //     });

        // this.add(this.startDuelButton);

        // START SELECTION BUTTON

        this.startSelectButton = this.scene.add
            .text(700, 20, "SELECT!", {
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#ffffff",
            })
            .setVisible(false);

        this.startSelectButton
            .setInteractive()
            //.setInteractive(new Phaser.Geom.Rectangle(0, 0, 90, 30), Phaser.Geom.Rectangle.Contains)
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

        this.nextRoomButton = this.scene.add.text(600, 20, "NEXT ROOM", {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#ffffff",
        });

        this.nextRoomButton
            .setInteractive()
            .on("pointerdown", () => {
                this.gameScene.selectController.showNextRoomSelect();
                this.gameScene.cardUpgradePanel.hide();
                //this.gameScene.roomSelectPanel.show();
                //this.gameScene.cardSelectPanel.hide();
            })
            .on("pointerover", () => {
                this.nextRoomButton.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                this.nextRoomButton.setColor("#AAFFAA");
            });

        this.add(this.nextRoomButton);

        // CALCULATE BATTLE BUTTON

        // this.calculateBattleButton = this.scene.add
        //     .text(400, 20, "CALCULATE", {
        //         fontFamily: "Arial Black",
        //         fontSize: 18,
        //         color: "#ffffff",
        //     })
        //     .setVisible(false);

        // this.calculateBattleButton
        //     .setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 30), Phaser.Geom.Rectangle.Contains)
        //     .on("pointerdown", () => {
        //         this.gameScene.battleController.start(this.gameScene.battlePanel.playerUnits, this.gameScene.battlePanel.enemyUnits, false, 1);
        //     })
        //     .on("pointerover", () => {
        //         this.calculateBattleButton.setColor("#FFFFFF");
        //     })
        //     .on("pointerout", () => {
        //         this.calculateBattleButton.setColor("#AAFFAA");
        //     });

        // this.add(this.calculateBattleButton);
    }

    setBank(value: number) {
        this.goldText.setText("GOLD: " + value);
    }

    setIncome(value: number) {
        this.incomeText.setText("INCOME: " + value);
    }

    setDay(day: number) {
        this.dayText.setText("DAY: " + day);
    }

    setHour(hour: number) {
        this.hourText.setText("HOUR: " + hour);
    }

    setHp(value: number) {
        this.hpText.setText("HP: " + value);
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
}
