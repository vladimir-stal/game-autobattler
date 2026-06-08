import { IUnit } from "../../types";
import { duelEnemies2 } from "../duelConsts";
import { GameScene } from "../scenes/GameScene";
import { getRandomArrayIndex, getRandomArrayItem, getRandomArrayItems } from "../utils/commonUtils";
import { getDuelEnemy as getDuelEnemy_duelUtils } from "../utils/duelUtils";

const START_HP = 30;
export const INITIAL_PLAYERS_COUNT = 8;

export class LeaderController {
    gameScene: GameScene;

    hp: number;

    leaders: { id: number; hp: number; name: string }[];

    nextOpponentId: number;

    constructor(gameScene: GameScene) {
        this.gameScene = gameScene;

        this.init();
    }

    init() {
        this.hp = START_HP;
        this.leaders = [];
        const potentialPlayers = []
        duelEnemies2.forEach((n, i) => potentialPlayers.push(i)); // array of indexes
        for (let i = 0; i < INITIAL_PLAYERS_COUNT; i++) {
            if (i>0) {
                const index = getRandomArrayIndex(potentialPlayers);
                const pick = potentialPlayers[index];
                potentialPlayers.splice(index,1);
                this.leaders.push({ id: pick, hp: START_HP, name: duelEnemies2[pick].name });
            } else {
                this.leaders.push({ id: 0, hp: START_HP, name: "YOU" });
            }
        }
    }

    getDuelEnemy(day: number): (IUnit | null)[] {
        return getDuelEnemy_duelUtils(this.nextOpponentId)[day];
    }

    //decreaseMainPlayerHp
    decreaseMainPlayerHp(value: number) {
        this.hp -= value;
        this.leaders[0].hp -= value;
        this.gameScene.leaderPanel.setHp(this.hp);
    }

    decreasePlayerHp(playerId: number, value: number) {
        const player = this.leaders.find(ld => ld.id === playerId);
        if (player) {
            player.hp -= value;
        }        
    }

    /** Descrese random players hp to imitate looby */
    decreaseRandomPlayersHp(value: number) {
        getRandomArrayItems(
            this.leaders.filter(({ id }) => id !== 0 && id !== this.nextOpponentId),
            3,
            true,
        ).forEach(({ id }) => {
            const selectedLeader = this.leaders.find((leader) => leader.id === id);
            if (selectedLeader) {
                selectedLeader.hp -= value;
            }
        });
    }

    selectNextOpponent() {
        let filtList = this.leaders.filter(({ id, hp }) => id !== 0 && id !== this.nextOpponentId && hp > 0);
        if (filtList.length == 0) filtList = this.leaders.filter(({ id, hp }) => id !== 0 && hp > 0);
        if (filtList.length == 0) filtList = this.leaders.filter(({ id }) => id !== 0);
        this.nextOpponentId = getRandomArrayItem(filtList).id;
    }
}
