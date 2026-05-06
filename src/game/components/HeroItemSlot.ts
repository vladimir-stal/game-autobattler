import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, EHeroClassType, EItemType, EUnitType, EWeaponItemType, ICard, ICardToMove, IItem, IUnit } from "../../types";
import { CardSlot } from "./CardSlot";
import { HintPanel } from "./ui/HintPanel";
import { Card } from "./Card";
import { ItemHintPanel } from "./ui/WeaponItemHintPanel";

/** Card to buy from shop  */
export class HeroItemSlot extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    item: IItem | undefined;
    isWeaponSlot: boolean;
    hint: HintPanel;
    onItemRemoved: () => void;
    parentUnitId: string;

    animationRect: GameObjects.Rectangle;

    constructor(scene: GameScene, x: number, y: number, parentUnitId: string, isWeaponSlot: boolean, item: IItem | undefined, onItemRemoved: () => void) {
        console.log("HeroItemSlot > constructor", parentUnitId);
        super(scene, x, y);
        this.gameScene = scene;
        this.item = item;
        this.isWeaponSlot = isWeaponSlot;
        this.onItemRemoved = onItemRemoved;
        this.parentUnitId = parentUnitId;
        this.render();
    }

    render() {
        const color = this.item ? (this.item.weaponType ? colors.BROWN : colors.GREEN) : colors.GREY;
        const rect = this.scene.add.rectangle(0, 0, 30, 30, color).setOrigin(0, 0);
        this.add(rect);
        rect.setInteractive();
        //rect.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 30), Phaser.Geom.Rectangle.Contains);
        rect.on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            if (!this.item) {
                //this.hint.show();
                return;
            }
            const { x, y } = this.getWorldPoint();
            this.gameScene.hintPanel.showItem(x + 40, y - 250, this.item, true);
            //}
        })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                if (!this.item) {
                    //this.hint.hide();
                    return;
                }
                this.gameScene.hintPanel.hide();
                //}
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (!this.item) {
                    return;
                }
                if (this.gameScene.isCardMoveMode) {
                    return;
                }
                const icard: ICard = { price: 0, type: ECardType.ITEM, item: this.item };
                console.log("SLot > create card to move", this.parentUnitId);
                //const card = new Card(this.gameScene, 0, 0, icard, false, undefined, this.onItemRemoved, this.parentUnitId).setVisible(false);
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

        if (this.isWeaponSlot) {
            const color = this.item ? (this.item.weaponType ? colors.BROWN : colors.GREY) : colors.GREY;
            const weaponRect = this.scene.add.rectangle(0, 32, 30, 5, color).setOrigin(0, 0);
            this.add(weaponRect);
        }

        if (this.item) {
            this.hint = new ItemHintPanel(this.gameScene, 0, -100, this.item, true).setVisible(false);
            this.add(this.hint);
        }
        //
        this.animationRect = this.scene.add.rectangle(15, 15, 50, 50, color, 0).setOrigin(0.5, 0.5).setVisible(false).setStrokeStyle(2, colors.WHITE_LIGHT);
        this.add(this.animationRect);
    }

    // ANIMATIONS

    playAddItem() {
        this.animationRect.setVisible(true);

        this.gameScene.tweens.add({
            targets: this.animationRect,
            width: 30,
            height: 30,
            //strokeColor: 0x5b8dc5,
            ease: "Bounce", // '"Linear', 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 500,
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
