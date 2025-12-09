import { EHeroClass } from "../../../types";
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
        let bgColor;
        let rectColor;
        switch (heroClass) {
            case EHeroClass.BARD:
                rectColor = 0x551111; // bgColor = "#551111";
                break;
            case EHeroClass.DARK:
                rectColor = 0x550099; // bgColor = "#550099";
                break;
            case EHeroClass.MAGIC:
                rectColor = 0x9e5a01; // bgColor = "#9e5a01ff";
                break;
            case EHeroClass.MASTER:
                rectColor = 0x910202; // bgColor = "#910202ff";
                break;
            case EHeroClass.ORDER:
                rectColor = 0x5a5a5a; // bgColor = "#5a5a5aff";
                break;
            case EHeroClass.PRIEST:
                rectColor = 0x806d02; // bgColor = "#806d02ff";
                break;
            case EHeroClass.SUMMON:
                rectColor = 0x02428b; // bgColor = "#02428bff";
                break;
            case EHeroClass.WARRIOR:
                rectColor = 0x0c0c0c; // bgColor = "#0c0c0cff";
                break;
            case EHeroClass.WILD:
                rectColor = 0x0b7001; // bgColor = "#0b7001ff";
                break;
            default:
                rectColor = 0x0cd1df; // bgColor = "#0cd1dfff";
        }

        const borderRect = this.scene.add.rectangle(-1, -1, 52, 19, 0xffffff).setOrigin(0, 0);
        this.add(borderRect);

        const rect = this.scene.add.rectangle(0, 0, 50, 17, rectColor).setOrigin(0, 0);
        this.add(rect);

        const text = this.scene.add.text(0, 0, heroClass, {
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
