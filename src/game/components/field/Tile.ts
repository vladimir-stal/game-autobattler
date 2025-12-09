import { GameObjects, Scene } from "phaser";
import { ETileStatus, IMonster } from "../../../monster_types";
import { GameScene } from "../../scenes/GameScene";

const colors = {
    GREY: 0x666666,
    GREEN: 0x339933,
    WHITE: 0x999999,
    GREY_HOVER: 0x888888,
    GREEN_HOVER: 0x22aa22,
    WHITE_HOVER: 0xbbbbbb,
};

export class Tile extends GameObjects.Container {
    id: string;

    price: number;

    tileX: number;
    tileY: number;

    status: ETileStatus;
    tileName: string;

    monster: IMonster;

    gameScene: GameScene;
    rect: GameObjects.Rectangle;
    nameText: GameObjects.Text;
    priceText: GameObjects.Text;

    tagsText: GameObjects.Text;

    constructor(scene: GameScene, x: number, y: number, id: string, monster: IMonster, status: ETileStatus) {
        super(scene, 100 + x * 100, 100 + y * 100);
        this.gameScene = scene;
        this.id = id;
        this.tileX = x;
        this.tileY = y;
        this.status = status;
        this.monster = monster;
        this.tileName = status === ETileStatus.FREE ? "" : monster.name;
        //this.price = isInstantGold(monster) ? 0 : 50;

        this.rect = scene.add
            .rectangle(0, 0, 90, 90, colors.GREY)
            .setInteractive()
            .on("pointerover", () => {
                switch (this.status) {
                    case ETileStatus.AVAILABLE:
                        {
                            this.rect.fillColor = colors.WHITE_HOVER;
                        }
                        break;
                    case ETileStatus.OWNED:
                        {
                            this.rect.fillColor = colors.GREEN_HOVER;
                        }
                        break;
                    case ETileStatus.FREE:
                        {
                            this.rect.fillColor = colors.GREY_HOVER;
                        }
                        break;
                }
            })
            .on("pointerout", () => {
                switch (this.status) {
                    case ETileStatus.AVAILABLE:
                        {
                            this.rect.fillColor = colors.WHITE;
                        }
                        break;
                    case ETileStatus.OWNED:
                        {
                            this.rect.fillColor = colors.GREEN;
                        }
                        break;
                    case ETileStatus.FREE:
                        {
                            this.rect.fillColor = colors.GREY;
                        }
                        break;
                }
            })
            .on("pointerdown", () => {
                console.log("CLICK on TILE", monster.id);
            });
        this.add(this.rect);

        this.nameText = scene.add.text(-30, -30, this.tileName);
        this.add(this.nameText);

        this.priceText = scene.add.text(-10, 10, "");

        this.priceText.setInteractive().on("pointerdown", () => {
            //this.priceText.setInteractive(new Phaser.Geom.Rectangle(0, 0, 50, 20), Phaser.Geom.Rectangle.Contains).on("pointerdown", () => {
            if (this.status !== ETileStatus.AVAILABLE) {
                return;
            }

            this.buy();
        });
        this.add(this.priceText);

        const tags = this.getTagsText();
        this.tagsText = scene.add.text(-50, 30, tags, { fontSize: 12, color: "#ffaaaa" });
        this.add(this.tagsText);

        this.setTileView();
    }

    setTileView() {
        switch (this.status) {
            case ETileStatus.AVAILABLE:
                {
                    this.rect.fillColor = colors.WHITE;
                    this.priceText.setText(this.price + "");
                    this.tagsText.setText(this.getTagsText());
                }
                break;
            case ETileStatus.OWNED:
                {
                    this.rect.fillColor = colors.GREEN;
                    this.priceText.setText("");
                    this.tagsText.setText(this.getTagsText());
                }
                break;
            case ETileStatus.FREE:
                {
                    this.rect.fillColor = colors.GREY;
                    this.priceText.setText("");
                    this.nameText.setText("");
                    this.tagsText.setText("");
                }
                break;
        }
    }

    setTileName(value: string) {
        this.tileName = value;
        this.nameText.setText(value);
    }

    setStatus(value: ETileStatus) {
        this.status = value;
        this.setTileView();
    }

    buy() {
        this.gameScene.buyController.buyTile(this.tileX, this.tileY, this.price);
    }

    getTagsText() {
        return this.monster.tags.reduce((acc, tag) => acc + " " + tag, "");
    }
}
