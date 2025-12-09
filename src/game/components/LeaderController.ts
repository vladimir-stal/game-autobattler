import { GameScene } from "../scenes/GameScene";
import { getRandomArrayIndex, getRandomArrayItem, getRandomArrayItems } from "../utils/commonUtils";

const START_HP = 30;
export const INITIAL_PLAYERS_COUNT = 8;

export class LeaderController {
    gameScene: GameScene;

    hp: number;

    leaders: { id: number; hp: number; name: string }[];

    nextOpponentId: number;

    constructor(gameScene: GameScene) {
        this.gameScene = gameScene;
        this.hp = START_HP;

        this.leaders = [];
        for (let i = 0; i < INITIAL_PLAYERS_COUNT; i++) {
            const playerName = i === 0 ? "YOU" : "PLAYER " + (i + 1);
            this.leaders.push({ id: i, hp: START_HP, name: playerName });
        }
    }

    //decreaseMainPlayerHp
    decreaseMainPlayerHp(value: number) {
        this.hp -= value;
        this.leaders[0].hp -= value;
        this.gameScene.leaderPanel.setHp(this.hp);
    }

    decreasePlayerHp(playerId: number, value: number) {
        this.leaders[playerId].hp -= value;
    }

    /** Descrese random players hp to imitate looby */
    decreaseRandomPlayersHp(value: number) {
        getRandomArrayItems(
            this.leaders.filter(({ id }) => id !== 0 && id !== this.nextOpponentId),
            3,
            true
        ).forEach(({ id }) => {
            const selectedLeader = this.leaders.find((leader) => leader.id === id);
            if (selectedLeader) {
                selectedLeader.hp -= value;
            }
        });
    }

    selectNextOpponent() {
        this.nextOpponentId = getRandomArrayItem(this.leaders.filter(({ id, hp }) => id !== 0 && id !== this.nextOpponentId && hp > 0)).id;
    }
}
