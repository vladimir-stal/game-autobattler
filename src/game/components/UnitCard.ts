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
import { MAX_HEIGHT } from "./ui/uiPanels";

/** Card to buy from shop  */
export class UnitCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    cardSlot: CardSlot | undefined;
    parentCard: Card;
    unit: IUnit;
    title: string;
    upgradeButton: GameObjects.Text;
    rect: GameObjects.Rectangle;

    skillSlots: HeroSkillSlot[] = [];
    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;
    isShowSkills: boolean;

    imageObject: GameObjects.Sprite;
    imgHeight: number;

    titleText: GameObjects.Text;
    healthText: GameObjects.Text;
    healthImage: GameObjects.Image;
    armorText: GameObjects.Text;
    armorImage: GameObjects.Image;
    attackText: GameObjects.Text;
    attackImage: GameObjects.Image;

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
        this.renderImage();
        this.renderInfo();
        this.renderUpgradeButton();
        this.renderTags();
        // ITEMS
        this.showItemSlots();
        // SKILLS
        this.showSkillSlots();
    }

    renderInfo() {
        const { basicAttack, basicMaxHp, name, basicArmor, level, exp } = this.unit;

        const btyp = Math.FloorTo(300 - this.imgHeight) - 100; // base text Y position

        const title = name + " " + level + "(" + exp + "/" + getUnitNextLevelExp(this.unit) + ")";
        this.titleText = this.scene.add.text(0, btyp - 40, title, { fontSize: 12, color: "#dddddd" }).setOrigin(0.5);
        this.add(this.titleText);

        this.attackText = this.scene.add.text(-33, btyp - 18, basicAttack + "", { fontSize: 12, color: "#dddddd" });
        this.add(this.attackText);
        this.attackImage = this.scene.add.image(-40, btyp - 10, IMAGE_ICON_ATTACK).setDisplaySize(20, 20);
        this.add(this.attackImage);

        this.healthText = this.scene.add.text(3, btyp - 18, basicMaxHp + "", { fontSize: 12, color: "#dddddd" });
        this.add(this.healthText);
        this.healthImage = this.scene.add.image(-10, btyp - 10, IMAGE_ICON_HEALTH).setDisplaySize(20, 20);
        this.add(this.healthImage);

        this.armorText = this.scene.add.text(35, btyp - 18, basicArmor + "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.armorText);
        this.armorImage = this.scene.add
            .image(25, btyp - 10, IMAGE_ICON_SHIELD)
            .setDisplaySize(20, 20)
            .setVisible(false);
        this.add(this.armorImage);

        if (basicArmor > 0) {
            this.armorText.setVisible(true);
            this.armorImage.setVisible(true);
        }
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0.5, 0);
        //this.rect.setStrokeStyle(1, 0x777777);

        this.rect.setInteractive();
        this.rect
            .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                const { x, y } = this.getWorldPoint();
                this.gameScene.hintPanel.showUnit(x + 70, y - 30, this.unit);
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
        const { height } = this.gameScene.camera;
        const scale = height < MAX_HEIGHT ? height / MAX_HEIGHT : 1;
        const { image, animation } = this.unit.unitType === EUnitType.HERO ? getHeroImage(this.unit.heroClass) : getUnitImage(this.unit.id);

        this.imageObject = this.gameScene.add.sprite(0, 200, image, 0).setOrigin(0.5, 1).setScale(scale); //setDisplaySize(300, 300)
        this.imgHeight = this.imageObject.displayHeight;

        if (animation) {
            this.imageObject.anims.play(animation);
        }
        this.add(this.imageObject);
    }

    renderUpgradeButton() {
        const { level, unitType, heroClassType } = this.unit;

        const isVisible = unitType === EUnitType.HERO && heroClassType === EHeroClassType.BASIC && level > 3;
        this.upgradeButton = this.scene.add
            .text(0, 120, i18n.ui.UPGRADE, { fontFamily: "Arial Black", fontSize: 18, color: "#f8b705ff" })
            .setOrigin(0.5)
            .setVisible(isVisible);

        this.upgradeButton.setInteractive().on("pointerdown", () => {
            this.gameScene.unitUpgradePanel.show(this.unit, this.parentCard);
            this.upgradeButton.setVisible(false);
        });
        this.add(this.upgradeButton);
    }

    renderTags() {
        const { heroClassType, unitType, heroClass, mobHeroClasses } = this.unit;
        if (unitType === EUnitType.HERO) {
            const heroClasses = heroClassType === EHeroClassType.MULTI ? getMulticlassSubclasses(heroClass) : [heroClass];
            heroClasses.forEach((heroClass, index) => {
                const x = (index - 1) * 60;
                const hcTag = new HeroClassTag(this.gameScene, x, 180, heroClass);
                this.add(hcTag);
            });
        } else if (unitType === EUnitType.UNIT) {
            mobHeroClasses &&
                mobHeroClasses.forEach((heroClass, index) => {
                    const x = (index - 1) * 60;
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
        if (!this.isShowItems) {
            return;
        }

        const itemSlotsCount = this.unit.unitType === EUnitType.HERO ? getMaxUnitItemCount(this.unit.heroClassType!) : 1;
        for (let i = 0; i < itemSlotsCount; i++) {
            const x = (i % 2) * 40 - 50;
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
            const x = 60;
            const y = i * 35;

            const skillSlot = new HeroSkillSlot(this.gameScene, x, y, this.unit.skills[i], () => this.handleSkillRemoved(i));
            this.add(skillSlot);
            this.skillSlots.push(skillSlot);
        }
        this.bringToTop(this.skillSlots[0]);
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }

    refreshAfterResize() {
        const { height } = this.gameScene.camera;
        const scale = height < MAX_HEIGHT ? height / MAX_HEIGHT : 1;
        this.imageObject.setScale(scale);
        this.imgHeight = this.imageObject.displayHeight;

        const btyp = Math.FloorTo(300 - this.imgHeight) - 100; // base text Y position

        this.titleText.setY(btyp - 40);
        this.attackText.setY(btyp - 18);
        this.attackImage.setY(btyp - 10);
        this.healthText.setY(btyp - 18);
        this.healthImage.setY(btyp - 10);
        this.armorText.setY(btyp - 18);
        this.armorImage.setY(btyp - 10);
    }

    setUnit(unit: IUnit) {
        this.unit = unit;
        this.refresh();
    }
}
