import { GameObjects, Input, Math } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EHeroClassType, EItemBonusType, EItemTargetType, EUnitType, IUnit } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { getMaxUnitItemCount, getUnitNextLevelExp, removeItemFromUnit } from "../utils/unitUtils";
import { getMaxUnitSkillCount, removeSkillFromUnit } from "../utils/skillUtils";
import { HeroSkillSlot } from "./HeroSkillSlot";
import { Card } from "./Card";
import { getMulticlassSubclasses } from "../utils/heroUtils";
import { getHeroImage, getUnitImage } from "../utils/imageUtils";
import { HeroClassTag } from "./ui/HeroClassTag";
import { IMAGE_ICON_ATTACK, IMAGE_ICON_HEALTH, IMAGE_ICON_SHIELD } from "../utils/imageLoadUtil";
import { colors, i18n } from "../consts";
import { CardSlot } from "./CardSlot";

/** Card to buy from shop  */
export class UnitCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    cardSlot: CardSlot | undefined;
    parentCard: Card;
    titleText: GameObjects.Text;
    unit: IUnit;
    title: string;
    upgradeButton: GameObjects.Text;
    rect: GameObjects.Rectangle;

    skillSlots: HeroSkillSlot[] = [];
    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;
    isShowSkills: boolean;

    imgHeight: number;

    constructor(scene: GameScene, x: number, y: number, card: Card, unit: IUnit, isShowItems: boolean, isShowSkills: boolean, cardSlot?: CardSlot) {
        super(scene, x, y);
        this.parentCard = card;
        this.gameScene = scene;
        this.cardSlot = cardSlot;

        this.unit = unit;
        this.isShowItems = isShowItems;
        this.isShowSkills = isShowSkills;
        //console.log("UnitCard BEFORE RENDER", this.unit.items.length);
        this.render();
    }

    render() {
        this.renderBorder();

        const { basicAttack, basicMaxHp, heroClass, name, basicArmor, items, level, unitType, heroClassType, exp, basicMagicPower, basicPhysicalPower } =
            this.unit;

        // render image
        this.renderImage();
        const btyp = Math.FloorTo(300-this.imgHeight)-100; // base text Y position

        const title = name + " " + level + "(" + exp + "/" + getUnitNextLevelExp(this.unit) + ")";
        this.titleText = this.scene.add.text(10, btyp-40, title, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);

        const armorTextContent = basicArmor > 0 ? basicArmor + "arm" : "";
        //const hpText = this.scene.add.text(10, -120, basicMaxHp + "hp " + basicAttack + "A " + armorTextContent, { fontSize: 12, color: "#dddddd" });
        //this.add(hpText);

        const attackText = this.scene.add.text(17, btyp-18, basicAttack + "", { fontSize: 12, color: "#dddddd" });
        this.add(attackText);
        const attackImage = this.scene.add.image(10, btyp-10, IMAGE_ICON_ATTACK).setDisplaySize(20, 20);
        this.add(attackImage);

        const healthText = this.scene.add.text(47, btyp-18, basicMaxHp + "", { fontSize: 12, color: "#dddddd" });
        this.add(healthText);
        const healthImage = this.scene.add.image(40, btyp-10, IMAGE_ICON_HEALTH).setDisplaySize(20, 20);
        this.add(healthImage);

        if (basicArmor > 0) {
            const armorText = this.scene.add.text(85, btyp-18, basicArmor + "", { fontSize: 12, color: "#dddddd" });
            this.add(armorText);
            const armorImage = this.scene.add.image(75, btyp-10, IMAGE_ICON_SHIELD).setDisplaySize(20, 20);
            this.add(armorImage);
        }

        //const attackText = this.scene.add.text(10, -120, basicAttack + "att", { fontSize: 12, color: "#dddddd" });
        //this.add(attackText);

        // const armorText = this.scene.add.text(10, -120, basicArmor + " arm", { fontSize: 12, color: "#dddddd" });
        // armorText.setVisible(basicArmor > 0);
        // this.add(armorText);

        //const powerText = this.scene.add.text(10, 90, basicPhysicalPower + "PP" + " " + basicMagicPower + "MP", { fontSize: 12, color: "#dddddd" });
        //this.add(powerText);

        this.renderUpgradeButton();

        this.renderTags();

        // const itemsTextContent = items.length > 0 ? "Items: " + items.map((item) => item.name).join(", ") : "";
        // const itemsText = this.scene.add.text(10, 90, itemsTextContent, { fontSize: 12, color: "#dddddd" });
        // itemsText.setVisible(items.length > 0);
        // this.add(itemsText);

        // ITEMS
        this.showItemSlots();
        // SKILLS
        this.showSkillSlots();
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK, 0).setOrigin(0, 0);
        //this.rect.setStrokeStyle(1, 0x777777);

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                //console.log(">>>>>>>>>> ON GAMEOBJECT_POINTER_OVER");
                //console.log(this.x, this.y);
                //console.log(this.getWorldPoint());
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showUnit(x + 150, y - 30, this.unit);
            })
            .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                //console.log(">>>>>> ON GAMEOBJECT_POINTER_OUT");
                this.gameScene.hintPanel.hide();
            })
            .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                //console.log("CLICK ON RECT", this.gameScene.isCardMoveMode, this.cardSlot);

                if (this.gameScene.isCardMoveMode && this.cardSlot) {
                    //console.log("CLICK CARD SLOT");
                    this.cardSlot.click();
                }
            });
        this.add(this.rect);
    }

    renderImage() {
        const scale = this.gameScene.camera.height / 1080;
        const { image, animation } = this.unit.unitType === EUnitType.HERO ? getHeroImage(this.unit.heroClass) : getUnitImage(this.unit.id);
        const imageObject = this.gameScene.add.sprite(-100, 200, image, 0).setOrigin(0, 1).setScale(scale); //setDisplaySize(300, 300)
        this.imgHeight = imageObject.displayHeight;
        //console.log("DEBUG: dh=" + this.imgHeight + " scale=" + scale + " original_h=" + (this.imgHeight/scale));
        if (animation) {
            //if (this.unit.heroClassType === EHeroClassType.MULTI) {
            imageObject.anims.play(animation);
            //}
        }
        this.add(imageObject);
    }

    renderUpgradeButton() {
        const { level, unitType, heroClassType } = this.unit;

        const isVisible = unitType === EUnitType.HERO && heroClassType === EHeroClassType.BASIC && level > 3;
        this.upgradeButton = this.scene.add
            .text(0, 120, i18n.ui.UPGRADE, { fontFamily: "Arial Black", fontSize: 18, color: "#f8b705ff" })
            .setVisible(isVisible);

        this.upgradeButton.setInteractive().on("pointerdown", () => {
            //this.gameScene.setIsUnitUpgradeMode(true, this.cardSlot);
            this.gameScene.unitUpgradePanel.show(this.unit, this.parentCard);
        });
        this.add(this.upgradeButton);
    }

    renderTags() {
        const { heroClassType, unitType, heroClass } = this.unit;
        if (unitType === EUnitType.HERO) {
            const heroClasses = heroClassType === EHeroClassType.MULTI ? getMulticlassSubclasses(heroClass) : [heroClass];
            heroClasses.forEach((heroClass, index2) => {
                const x = index2 * 60;
                const hcTag = new HeroClassTag(this.gameScene, x, 180, heroClass);
                this.add(hcTag);
            });
        }
    }

    handleItemRemoved(index: number) {
        const item = this.unit.items[index];
        const isAllUnitsBonus = item.bonuses.find((bonus) => bonus.targetType === EItemTargetType.ALL_ALLIES);

        const { units } = this.gameScene;
        removeItemFromUnit(this.unit, index, units);

        if (isAllUnitsBonus) {
            this.gameScene.unitPanel.refreshAllCards();
        } else {
            this.refresh();
        }
    }

    handleSkillRemoved(index: number) {
        removeSkillFromUnit(this.unit, index);
        this.refresh();
    }

    showItemSlots() {
        //|| this.unit.unitType === EUnitType.UNIT || !this.unit.heroClassType
        if (!this.isShowItems) {
            return;
        }

        const itemSlotsCount = this.unit.unitType === EUnitType.HERO ? getMaxUnitItemCount(this.unit.heroClassType) : 1;
        for (let i = 0; i < itemSlotsCount; i++) {
            const x = 10 + (i % 2) * 40;
            const y = i < 2 ? 230 : 270;
            //
            let isWeaponSlot = false;
            if (this.unit.unitType === EUnitType.UNIT || this.unit.heroClassType === EHeroClassType.BASIC) {
                isWeaponSlot = i === 0;
            } else {
                let weaponSlotCount = 2;
                // check for +1 weapon slot item
                const isAddWeaponSlot = this.unit.items.find((item) => item.bonuses.find((bonus) => bonus.type === EItemBonusType.ITEM_WEAPON_SLOT));
                if (isAddWeaponSlot) {
                    weaponSlotCount += 1;
                }
                isWeaponSlot = i < weaponSlotCount;
            }

            //const isWeaponSlot = this.unit.unitType === EUnitType.UNIT || this.unit.heroClassType === EHeroClassType.BASIC ? i === 0 : i < 2;
            //
            const itemSlot = new HeroItemSlot(this.gameScene, x, y, isWeaponSlot, this.unit.items[i], () => this.handleItemRemoved(i));
            this.add(itemSlot);
            this.itemSlots.push(itemSlot);
        }
        // this.itemSlots.forEach((itemSlot, index) => {
        //     this.moveTo(itemSlot, index);
        // });
        this.bringToTop(this.itemSlots[0]);
    }

    showSkillSlots() {
        if (!this.isShowSkills || !this.unit.heroClassType) {
            return;
        }

        const skillSlotsCount = getMaxUnitSkillCount(this.unit.heroClassType);

        for (let i = 0; i < skillSlotsCount; i++) {
            const x = 110;
            const y = i * 35;

            const skillSlot = new HeroSkillSlot(this.gameScene, x, y, this.unit.skills[i], () => this.handleSkillRemoved(i));
            this.add(skillSlot);
            this.skillSlots.push(skillSlot);
        }
        this.bringToTop(this.skillSlots[0]);
    }

    refresh() {
        //console.log("UNIT CARD refersh");
        this.removeAll(true);
        this.render();
    }

    setUnit(unit: IUnit) {
        this.unit = unit;
        this.refresh();
    }
}
