import { Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, ICard, IHeroSkill, IHeroSkillSet } from "../../types";
import { HintPanel } from "./ui/HintPanel";
import { Card } from "./Card";

/** Card to buy from shop  */
export class HeroSkillSlot extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    skillSet: IHeroSkillSet | undefined;
    hint: HintPanel;

    onItemRemoved: () => void;

    constructor(scene: GameScene, x: number, y: number, skillSet: IHeroSkillSet | undefined, onItemRemoved: () => void) {
        super(scene, x, y);
        this.gameScene = scene;
        this.skillSet = skillSet;
        this.onItemRemoved = onItemRemoved;
        this.render();
    }

    render() {
        const a = "#5b8dc5ff";
        const color = this.skillSet ? 0x5b8dc5 : colors.GREY; // 0x0074c2
        const rect = this.scene.add.rectangle(0, 0, 30, 30, color).setOrigin(0, 0);
        this.add(rect);
        rect.setInteractive();
        //rect.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 30), Phaser.Geom.Rectangle.Contains);
        rect.on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.hint.show();
        })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                //if (this.skillSet) {
                this.hint.hide();
                //}
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (!this.skillSet || this.skillSet.isMcSkill) {
                    return;
                }
                const icard: ICard = { price: 0, type: ECardType.SKILL, skill: this.skillSet };
                const card = new Card(this.gameScene, 0, 0, icard, false).setVisible(false);
                this.gameScene.selectCardToMove(card);
                this.onItemRemoved();
            });

        const hintText = this.skillSet ? this.skillSet.name + "\n" + this.skillSet.desc : "no skill";
        this.hint = new HintPanel(this.gameScene, 35, 0, hintText).setVisible(false);
        this.add(this.hint);
    }
}
