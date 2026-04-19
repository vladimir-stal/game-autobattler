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
        if (!this.skillSet) {
            const rect = this.scene.add.rectangle(0, 0, 30, 30, colors.GREY).setOrigin(0, 0);
            this.add(rect);
            return;
        }

        const { isMcSkill } = this.skillSet;
        const simpleColor = 0x5b8dc5;
        const mcColor = 0x9966cc; //0x9933cc;
        const color = isMcSkill ? mcColor : simpleColor;
        const rect = this.scene.add.rectangle(0, 0, 30, 30, color).setOrigin(0, 0);
        this.add(rect);
        rect.setInteractive();
        //rect.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 30), Phaser.Geom.Rectangle.Contains);
        rect.on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            if (!this.skillSet) {
                return;
                //this.hint.show();
            }
            const { x, y } = this.getWorldPoint();
            this.gameScene.hintPanel.showSkill(x + 40, y, this.skillSet, true);
        })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                if (!this.skillSet) {
                    return;
                    //this.hint.hide();
                }
                this.gameScene.hintPanel.hide();
                //}
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (!this.skillSet || this.skillSet.isMcSkill) {
                    return;
                }
                if (this.gameScene.isCardMoveMode) {
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
