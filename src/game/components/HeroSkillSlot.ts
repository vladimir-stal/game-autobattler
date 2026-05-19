import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, ICard, ICardToMove, IHeroSkill, IHeroSkillSet } from "../../types";
import { HintPanel } from "./ui/HintPanel";
import { Card } from "./Card";

/** Card to buy from shop  */
export class HeroSkillSlot extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    skillSet: IHeroSkillSet | undefined;
    hint: HintPanel;
    onItemRemoved: () => void;
    parentUnitId: string;
    canRemoveSkill: boolean;

    animationRect: GameObjects.Rectangle;

    constructor(scene: GameScene, x: number, y: number, parentUnitId: string, skillSet: IHeroSkillSet | undefined, onItemRemoved: () => void) {
        super(scene, x, y);
        this.gameScene = scene;
        this.skillSet = skillSet;
        this.onItemRemoved = onItemRemoved;
        this.parentUnitId = parentUnitId;
        this.canRemoveSkill = true;
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
        const mobColor = 0xc5c55b;
        const color = isMcSkill ? mcColor : (this.canRemoveSkill ? simpleColor : mobColor);
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
                if (!this.skillSet || this.gameScene.isCardMoveMode || !this.canRemoveSkill) {
                    return;
                }
                const icard: ICard = { price: 0, type: ECardType.SKILL, skill: this.skillSet };
                //const card = new Card(this.gameScene, 0, 0, icard, false).setVisible(false);
                const card: ICardToMove = {
                    card: icard,
                    onCardMoved: this.onItemRemoved,
                    parentUnitId: this.parentUnitId,
                    cardSlot: undefined,
                    isCardObject: false,
                };
                this.gameScene.selectCardToMove(card);
                //this.onItemRemoved();
            });

        const hintText = this.skillSet ? this.skillSet.name + "\n" + this.skillSet.desc : "no skill";
        this.hint = new HintPanel(this.gameScene, 35, 0, hintText).setVisible(false);
        this.add(this.hint);
        //
        this.animationRect = this.scene.add.rectangle(15, 15, 50, 50, color, 0).setOrigin(0.5, 0.5).setVisible(false).setStrokeStyle(2, colors.WHITE_LIGHT);
        this.add(this.animationRect);
    }

    // ANIMATIONS
    playAddSkill() {
        this.animationRect.setVisible(true);

        this.gameScene.tweens.add({
            targets: this.animationRect,
            width: 30,
            height: 30,
            //strokeColor: 0x5b8dc5,
            ease: "Bounce", // '"Linear', 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 200,
            repeat: 0, // -1: infinity
            yoyo: false,
            onUpdate: () => {
                // Required for some shape objects to redraw correctly during the tween
                this.animationRect.setSize(this.animationRect.width, this.animationRect.height);
            },
            onComplete: () => {
                this.animationRect.setVisible(false);
            },
        });
    }
}
