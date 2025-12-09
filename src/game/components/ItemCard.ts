import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EHeroClass, EItemBonusType, EItemType, IItem } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { getWeaponItemHeroClasses } from "../utils/itemUtils";
import { HeroClassTag } from "./ui/HeroClassTag";

/** Card to buy from shop  */
export class ItemCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    titleText: GameObjects.Text;
    item: IItem;
    title: string;

    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;

    constructor(scene: GameScene, x: number, y: number, item: IItem) {
        super(scene, x, y);
        this.gameScene = scene;
        this.item = item;
        this.render();
    }

    render() {
        const { name, bonuses, type, weaponType, heroClassBonuses } = this.item;

        this.renderImage();
        this.renderTags();

        //const title = name + (type === EItemType.WEAPON ? "(" + weaponType + ")" : "");
        const title = name;
        this.titleText = this.scene.add.text(10, 5, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" });
        this.add(this.titleText);

        const bonusesText =
            this.item.battleBonuses?.reduce((text, bonus) => {
                text += bonus.type + " " + bonus.value + "\n";
                return text;
            }, "") || "";
        const bonusTextObject = this.scene.add.text(0, 50, bonusesText, { fontSize: 12, color: "#dddddd" });
        this.add(bonusTextObject);

        const attrsText =
            this.item.bonuses?.reduce((text, bonus) => {
                text += bonus.attribute + " " + bonus.value + "\n";
                return text;
            }, "") || "";

        const attrTextObject = this.scene.add.text(0, 20, attrsText, { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0);
        this.add(attrTextObject);

        // HERO CLASS BONUSES

        if (heroClassBonuses) {
            const heroClassBonusesText =
                this.item.heroClassBonuses?.reduce((text, bonus) => {
                    text += bonus.heroClass + ": ";
                    if (bonus.battleBonus) {
                        text += bonus.battleBonus.type + " " + bonus.battleBonus.value;
                    }
                    if (bonus.bonus) {
                        const bonusType = bonus.bonus.type === EItemBonusType.ATTRIBUTE ? bonus.bonus.attribute : bonus.bonus.type;
                        text += bonusType + " " + bonus.bonus.value;
                    }
                    text += "\n";
                    return text;
                }, "") || "";

            const heroClassBonusTextObject = this.scene.add.text(0, 80, heroClassBonusesText).setOrigin(0, 0);
            this.add(heroClassBonusTextObject);
        }

        // AFTER DUEL BONUSES

        const afterDuelBonusesText =
            this.item.afterDuelBonuses?.reduce((text, bonus) => {
                text += bonus.type + " " + bonus.value + ",";
                return text;
            }, "") || "";

        const afterDuelBonusesTextObject = this.scene.add.text(0, 70, afterDuelBonusesText, { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0);
        this.add(afterDuelBonusesTextObject);
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

        console.log("heroClasses", heroClasses);

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
