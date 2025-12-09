import { GameObjects } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { Tile } from "./Tile";
import { IncomeTile } from "./IncomeTile";
import { EMonsterType, ETileStatus, IBuff, IMonster } from "../../../monster_types";

export class TilesContainer extends GameObjects.Container {
    tiles: Record<string, Tile>;
    gameScene: GameScene;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);

        this.gameScene = scene;
        this.tiles = {};

        // scene.allTiles.forEach(({ x, y, status, monster }) => {
        //     const tile = this.createTile(x, y, status, monster);
        //     this.add(tile);

        //     if (status === ETileStatus.OWNED) {
        //         //tile.setStatus(ETileStatus.OWNED);
        //         tile.setTileName("BASE");
        //     }

        //     this.tiles[tile.tileX + "-" + tile.tileY] = tile;
        // });
    }

    createTile(x: number, y: number, status: ETileStatus, monster: IMonster) {
        const tileId = x + "-" + y;
        if (monster.types.includes(EMonsterType.INCOME)) {
            return new IncomeTile(this.gameScene, x, y, tileId, monster, status);
        }

        return new Tile(this.gameScene, x, y, tileId, monster, status);
    }

    changeTileStatus(x: number, y: number, status: ETileStatus) {
        this.tiles[x + "-" + y].setStatus(status);
    }

    changeTile(x: number, y: number, status: ETileStatus, monster: IMonster) {
        if (status === ETileStatus.AVAILABLE) {
            const tile = this.createTile(x, y, status, monster);
            this.add(tile);
            tile.setStatus(status);

            this.tiles[x + "-" + y].destroy();
            this.tiles[x + "-" + y] = tile;
            return;
        }

        if (status === ETileStatus.FREE) {
            this.tiles[x + "-" + y].setStatus(status);
            return;
        }
    }

    getTile(x: number, y: number) {
        return this.tiles[x + "-" + y];
    }
}
