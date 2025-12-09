import { GameScene } from "../scenes/GameScene";

const INITIAL_GOLD = 4;
const INTIAL_INCOME = 5;

export class BankController {
    gameScene: GameScene;

    totalGold: number;
    income: number;

    constructor(scene: GameScene) {
        this.gameScene = scene;
        this.totalGold = INITIAL_GOLD;
        this.income = INTIAL_INCOME;
    }

    init() {
        //this.gameScene.topPanel.setTaxAmount(this.taxAmount);
        //this.setTaxTimer();
    }

    addToBank(value: number) {
        this.changeBank(this.totalGold + value);
    }

    buy(price: number) {
        this.changeBank(this.totalGold - price);
    }

    changeBank(value: number) {
        //console.log("change bank", value);
        this.totalGold = value;
        this.gameScene.topPanel.setBank(this.totalGold);
    }

    getIncome() {
        this.changeBank(this.totalGold + this.income);
    }

    increaseIncome(value: number) {
        //console.log("increase Income", value);
        this.income += value;
        this.gameScene.topPanel.setIncome(this.income);
    }
}
