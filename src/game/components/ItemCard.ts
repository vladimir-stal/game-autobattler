import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EHeroClass, EItemType, IItem } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { getWeaponItemHeroClasses } from "../utils/itemUtils";
import { HeroClassTag } from "./ui/HeroClassTag";
import { colors, i18n } from "../consts";
import { CardSlot } from "./CardSlot";
import { getCardBorderColor } from "../utils/commonUtils";

/** Card to buy from shop  */
export class ItemCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    cardSlot: CardSlot | undefined;
    titleText: GameObjects.Text;
    item: IItem;
    title: string;
    rect: GameObjects.Rectangle;

    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;

    constructor(scene: GameScene, x: number, y: number, item: IItem, cardSlot?: CardSlot) {
        super(scene, x, y);
        this.gameScene = scene;
        this.cardSlot = cardSlot;
        this.item = item;
        this.render();
    }

    render() {
        this.renderBorder();

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showItem(x + 115, y, this.item);
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.gameScene.hintPanel.hide();
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                if (this.gameScene.isCardMoveMode && this.cardSlot) {
                    this.cardSlot.click();
                }
            });
        this.add(this.rect);

        this.renderImage();
        this.renderTags();

        const title = i18n.ui.ITEM;
        this.titleText = this.scene.add.text(30, 5, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" });
        this.add(this.titleText);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0, 0);
        this.rect.setStrokeStyle(1, getCardBorderColor(this.item.priceLevel));
    }

    renderImage() {
        const { image } = this.item;
        const imageObject = this.gameScene.add.sprite(-25, 50, image, 0).setDisplaySize(150, 150).setOrigin(0, 0);
        this.add(imageObject);
    }

    renderTags() {
        let heroClasses: EHeroClass[] = [];
        if (this.item.type === EItemType.WEAPON && this.item.weaponType) {
            heroClasses = getWeaponItemHeroClasses(this.item.weaponType);
        } else if (this.item.type === EItemType.COMMON) {
            heroClasses = this.item.heroClasses;
        }

        //console.log("heroClasses", heroClasses);

        heroClasses.forEach((heroClass, index) => {
            const x = index * 60;
            const y = 178;
            const hcTag = new HeroClassTag(this.gameScene, x, y, heroClass);
            this.add(hcTag);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
