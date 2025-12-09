import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { ECardType, EHeroClassType, EItemType, EUnitType, ICard, IItem, IUnit } from "../../types";
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

    constructor(scene: GameScene, x: number, y: number, isWeaponSlot: boolean, item: IItem | undefined, onItemRemoved: () => void) {
        super(scene, x, y);
        this.gameScene = scene;
        this.item = item;
        this.isWeaponSlot = isWeaponSlot;
        this.onItemRemoved = onItemRemoved;
        this.render();
    }

    render() {
        const color = this.item ? colors.GREEN : colors.GREY;
        const rect = this.scene.add.rectangle(0, 0, 30, 30, color).setOrigin(0, 0);
        this.add(rect);
        rect.setInteractive();
        //rect.setInteractive(new Phaser.Geom.Rectangle(0, 0, 30, 30), Phaser.Geom.Rectangle.Contains);
        rect.on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            //if (this.item) {
            this.hint.show();
            //}
        })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                //if (this.item) {
                this.hint.hide();
                //}
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (!this.item) {
                    return;
                }
                const icard: ICard = { price: 0, type: ECardType.ITEM, item: this.item };
                const card = new Card(this.gameScene, 0, 0, icard, false).setVisible(false);
                this.gameScene.selectCardToMove(card);
                this.onItemRemoved();
            });

        if (this.isWeaponSlot) {
            const weaponRect = this.scene.add.rectangle(0, 32, 30, 5, colors.GREY).setOrigin(0, 0);
            this.add(weaponRect);
        }

        if (this.item) {
            this.hint = new ItemHintPanel(this.gameScene, 0, 35, this.item).setVisible(false);
            this.add(this.hint);
        } else {
            this.hint = new HintPanel(this.gameScene, 0, 35, "no item").setVisible(false);
            this.add(this.hint);
        }

        // if (this.item?.type === EItemType.COMMON) {
        //     const hintText = this.item ? this.item.name : "no item";
        //     this.hint = new HintPanel(this.gameScene, 0, 35, hintText).setVisible(false);
        //     this.add(this.hint);
        // } else if (this.item?.type === EItemType.WEAPON) {
        //     this.hint = new ItemHintPanel(this.gameScene, 0, 35, this.item).setVisible(false);
        //     this.add(this.hint);
        // }
    }
}
