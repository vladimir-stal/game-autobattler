import { GameObjects } from "phaser";
import { EIncomeBuffType, ETileStatus, IBuff, IMonster } from "../../../types";
import { GameScene } from "../../scenes/GameScene";
import { Tile } from "./Tile";

export class IncomeTile extends Tile {
    cd: number;
    income: number;
    buffs: IBuff[];
    incomeWithBuffs: number;

    incomeCdText: GameObjects.Text;
    incomeCdTime: number;

    constructor(scene: GameScene, x: number, y: number, id: string, monster: IMonster, status: ETileStatus) {
        super(scene, x, y, id, monster, status);
        this.cd = monster.incomeCd || 0;
        this.income = monster.incomeValue || 0;
        this.incomeWithBuffs = this.income;
        this.incomeCdTime = this.cd;
        this.buffs = [];

        this.incomeCdText = scene.add.text(20, 10, "");
        this.add(this.incomeCdText);

        if (this.status === ETileStatus.OWNED) {
            this.setIncomeTimer();
        }
    }

    setIncomeTimer() {
        if (this.cd === 0) {
            return;
        }

        console.log("setIncomeTimer", this.cd, this.income);

        this.incomeCdTime = this.cd;
        this.incomeCdText.setText(this.incomeCdTime + "");
        const intervalId = setInterval(() => {
            this.incomeCdTime--;
            this.incomeCdText.setText(this.incomeCdTime + "");
        }, 1000);

        setTimeout(() => {
            console.log("timeout");
            clearInterval(intervalId);
            this.gameScene.addToBank(this.incomeWithBuffs);
            this.setIncomeTimer();
        }, this.cd * 1000);
    }

    setStatus(value: ETileStatus) {
        super.setStatus(value);
        if (value === ETileStatus.OWNED) {
            this.setIncomeTimer();
        }
    }

    addBuff(buff: IBuff) {
        this.buffs.push(buff);
        this.calculateIncome();
    }

    calculateIncome() {
        this.buffs.forEach((buff) => {
            this.incomeWithBuffs = this.applyBuffToIncome(buff, this.incomeWithBuffs);
        });
    }

    applyBuffToIncome(buff: IBuff, income: number) {
        switch (buff.type) {
            case EIncomeBuffType.INCREASE_VALUE:
                return income + buff.value;
            default:
                return income;
        }
    }
}
