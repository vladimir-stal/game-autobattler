import { GameObjects, Input } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EHeroClass, EItemType, IItem } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { getWeaponItemHeroClasses } from "../utils/itemUtils";
import { HeroClassTag } from "./ui/HeroClassTag";
import { colors, i18n } from "../consts";
import { CardSlot } from "./CardSlot";
import { getCardBorderColor } from "../utils/commonUtils";
import { IMAGE_MULTIATALAS_ITEMS } from "../utils/load/imageLoadItems";

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
        this.renderImage();
        this.renderTags();
        this.renderInfo();
    }

    renderInfo() {
        const title = i18n.ui.ITEM;
        this.titleText = this.scene.add.text(0, 15, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" }).setOrigin(0.5);
        this.add(this.titleText);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0.5, 0);
        this.rect.setStrokeStyle(1, getCardBorderColor(this.item.priceLevel));

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showItem(x + 65, y, this.item);
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
    }

    renderImage() {
        const { image } = this.item;
        const imageObject = this.gameScene.add.sprite(0, 100, IMAGE_MULTIATALAS_ITEMS, image).setOrigin(0.5, 0.5); //.setDisplaySize(150, 150)
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
            const x = (index - 1) * 60;
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
