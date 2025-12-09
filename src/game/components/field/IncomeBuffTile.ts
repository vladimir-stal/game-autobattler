import { GameObjects } from "phaser";
import { ETileStatus, IMonster } from "../../../types";
import { GameScene } from "../../scenes/GameScene";
import { Tile } from "./Tile";

export class IncomeTile extends Tile {
    constructor(scene: GameScene, x: number, y: number, id: string, mosnter: IMonster, status: ETileStatus) {
        super(scene, x, y, id, mosnter, status);
    }
}
