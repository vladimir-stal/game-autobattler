import { EHeroClass } from "../../../types";
import { i18n } from "../../consts";
import { GameScene } from "../../scenes/GameScene";

/** Colored basic hero class Tag */
export class HeroClassTag extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    constructor(gameScene: GameScene, x: number, y: number, heroClass: EHeroClass) {
        super(gameScene, x, y);
        this.gameScene = gameScene;
        this.render(heroClass);
    }

    render(heroClass: EHeroClass) {
        //let bgColor;
        let rectColor;
        let width;
        switch (heroClass) {
            case EHeroClass.BARD:
                {
                    rectColor = 0x551111; // bgColor = "#551111";
                    width = 38;
                }
                break;
            case EHeroClass.DARK:
                {
                    rectColor = 0x550099; // bgColor = "#550099";
                    width = 58;
                }
                break;
            case EHeroClass.MAGIC:
                {
                    rectColor = 0x9e5a01; // bgColor = "#9e5a01ff";
                    width = 46;
                }
                break;
            case EHeroClass.MASTER:
                {
                    rectColor = 0x910202; // bgColor = "#910202ff";
                    width = 52;
                }
                break;
            case EHeroClass.ORDER:
                {
                    rectColor = 0x5a5a5a; // bgColor = "#5a5a5aff";
                    width = 46;
                }
                break;
            case EHeroClass.PRIEST:
                {
                    rectColor = 0x806d02; // bgColor = "#806d02ff";
                    width = 52;
                }
                break;
            case EHeroClass.SUMMON:
                {
                    rectColor = 0x02428b; // bgColor = "#02428bff";
                    width = 54;
                }
                break;
            case EHeroClass.WARRIOR:
                {
                    rectColor = 0x0c0c0c; // bgColor = "#0c0c0cff";
                    width = 40;
                }
                break;
            case EHeroClass.WILD:
                {
                    rectColor = 0x0b7001; // bgColor = "#0b7001ff";
                    width = 48;
                }
                break;
            case EHeroClass.ALL:
            default: {
                width = 40;
                rectColor = 0x5a5a5a; // bgColor = "#0cd1dfff";
            }
        }

        const borderRect = this.scene.add.rectangle(-1, -1, width + 2, 19, 0xffffff).setOrigin(0, 0);
        this.add(borderRect);

        const rect = this.scene.add.rectangle(0, 0, width, 17, rectColor).setOrigin(0, 0);
        this.add(rect);

        const text = this.scene.add.text(0, 0, i18n.tags[heroClass], {
            fontFamily: "Arial Black",
            fontSize: 10,
            color: "#FFFFFF",
            padding: { left: 2, top: 2 },
            //backgroundColor: bgColor,
            //stroke: "#FFFFFF",
            //strokeThickness: 1,
            //shadow: {color: "#FFFFFF", }
        });
        this.add(text);
    }
}
