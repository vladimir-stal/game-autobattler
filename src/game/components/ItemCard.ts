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

        const { name, bonuses, type, weaponType, heroClassBonuses } = this.item;

        this.renderImage();
        this.renderTags();

        //const title = name + (type === EItemType.WEAPON ? "(" + weaponType + ")" : "");
        //const title = name;
        const title = i18n.ui.ITEM;
        this.titleText = this.scene.add.text(30, 5, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" });
        this.add(this.titleText);

        // const bonusesText =
        //     this.item.battleBonuses?.reduce((text, bonus) => {
        //         text += bonus.type + " " + bonus.value + "\n";
        //         return text;
        //     }, "") || "";
        // const bonusTextObject = this.scene.add.text(0, 50, bonusesText, { fontSize: 12, color: "#dddddd" });
        // this.add(bonusTextObject);

        // const attrsText =
        //     this.item.bonuses?.reduce((text, bonus) => {
        //         text += bonus.attribute + " " + bonus.value + "\n";
        //         return text;
        //     }, "") || "";

        // const attrTextObject = this.scene.add.text(0, 20, attrsText, { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0);
        // this.add(attrTextObject);

        // HERO CLASS BONUSES

        // if (heroClassBonuses) {
        //     const heroClassBonusesText =
        //         this.item.heroClassBonuses?.reduce((text, bonus) => {
        //             text += bonus.heroClass + ": ";
        //             if (bonus.battleBonus) {
        //                 text += bonus.battleBonus.type + " " + bonus.battleBonus.value;
        //             }
        //             if (bonus.bonus) {
        //                 const bonusType = bonus.bonus.type === EItemBonusType.ATTRIBUTE ? bonus.bonus.attribute : bonus.bonus.type;
        //                 text += bonusType + " " + bonus.bonus.value;
        //             }
        //             text += "\n";
        //             return text;
        //         }, "") || "";

        //     const heroClassBonusTextObject = this.scene.add.text(0, 80, heroClassBonusesText).setOrigin(0, 0);
        //     this.add(heroClassBonusTextObject);
        // }

        // AFTER DUEL BONUSES

        // const afterDuelBonusesText =
        //     this.item.afterDuelBonuses?.reduce((text, bonus) => {
        //         text += bonus.type + " " + bonus.value + ",";
        //         return text;
        //     }, "") || "";

        // const afterDuelBonusesTextObject = this.scene.add.text(0, 70, afterDuelBonusesText, { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0);
        // this.add(afterDuelBonusesTextObject);
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
