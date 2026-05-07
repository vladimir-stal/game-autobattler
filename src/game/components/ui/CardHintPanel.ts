import { GameObjects } from "phaser";
import { EHeroClass, EHeroClassType, EItemBattleBonusType, EItemBonusType, EItemTargetType, EItemType, IHeroSkillSet, IItem, IUnit } from "../../../types";
import { colors, i18n } from "../../consts";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_ICON_ATTACK,
    IMAGE_ICON_CHAINED,
    IMAGE_ICON_CRIT,
    IMAGE_ICON_EVASION,
    IMAGE_ICON_HEALTH,
    IMAGE_ICON_MP,
    IMAGE_ICON_PP,
    IMAGE_ICON_REGEN,
    IMAGE_ICON_SHIELD,
} from "../../utils/imageLoadUtil";
import { HeroClassTag } from "./HeroClassTag";
import { getItemPrice, getWeaponItemHeroClasses } from "../../utils/itemUtils";
import { IMAGE_ITEM_ARMOR_1, IMAGE_MULTIATALAS_ITEMS } from "../../utils/load/imageLoadItems";
import { substituteSummonDescription } from "../../utils/skillUtils2";
import BBCodeText from "phaser3-rex-plugins/plugins/gameobjects/tagtext/bbcodetext/BBCodeText";
import { insertStats } from "../../utils/uiUtils";
import { IMAGE_MULTIATALAS_SKILLS } from "../../utils/load/skillImagesLoad";

/** Panel to show information on items and skills on hover */
export class CardHintPanel extends Phaser.GameObjects.Container {
    text: string;

    titleText: GameObjects.Text;
    // skill
    descrText: BBCodeText;
    enchancedChainedIcon: GameObjects.Image;
    enchancedOnStartIcon: GameObjects.Image;
    enchancedText: GameObjects.Text;
    noBAText: GameObjects.Text;
    skillImage: GameObjects.Image;
    skillContainer: GameObjects.Container;
    // item
    bonusTextObject: GameObjects.Text;
    attrTextObject: GameObjects.Text;
    heroClassBonusTextObject: GameObjects.Text;
    afterDuelBonusesTextObject: GameObjects.Text;
    itemImage: GameObjects.Image;
    //itemImageBorder: GameObjects.Rectangle;
    itemContainer: GameObjects.Container;
    //cTag1: HeroClassTag;
    //hcTag2: HeroClassTag;
    // unit
    hpIcon: GameObjects.Image;
    hpText: GameObjects.Text;
    hpDescrText: GameObjects.Text;
    //
    armorIcon: GameObjects.Image;
    armorText: GameObjects.Text;
    armorDescrText: GameObjects.Text;
    //
    attackIcon: GameObjects.Image;
    attackText: GameObjects.Text;
    attackDescrText: GameObjects.Text;
    //
    regenIcon: GameObjects.Image;
    regenText: GameObjects.Text;
    regenDescrText: GameObjects.Text;
    //
    mpIcon: GameObjects.Image;
    mpText: GameObjects.Text;
    mpDescrText: GameObjects.Text;
    //
    ppIcon: GameObjects.Image;
    ppText: GameObjects.Text;
    ppDescrText: GameObjects.Text;
    //
    critIcon: GameObjects.Image;
    critText: GameObjects.Text;
    critDescrText: GameObjects.Text;
    //
    evasionIcon: GameObjects.Image;
    evasionText: GameObjects.Text;
    evasionDescrText: GameObjects.Text;
    //
    activeSkillText: BBCodeText;
    passiveSkillText: GameObjects.Text;
    baTypeText: GameObjects.Text;

    constructor(gameScene: GameScene, x: number, y: number) {
        super(gameScene, x, y);
        //this.text = text;
        this.render();
    }

    render() {
        const rect = this.scene.add.rectangle(0, 0, 200, 300, colors.BLACK).setOrigin(0, 0);
        rect.setStrokeStyle(1, 0x777777);
        this.add(rect);

        this.titleText = this.scene.add.text(40, 10, "", {
            fontFamily: "Arial Black",
            fontSize: 14,
            color: "#ffffff",
            fontStyle: "bold",
        });
        this.add(this.titleText);

        //
        //
        // SKILL //////////////////////////////////////////////////////////////// SKILL
        //
        //

        // skill image

        this.skillImage = this.scene.add.image(25, 100, IMAGE_ITEM_ARMOR_1, 0).setOrigin(0, 0).setVisible(false); //setDisplaySize(150, 150)
        this.add(this.skillImage);

        //

        this.descrText = this.scene.add.rexBBCodeText(20, 40, "", {
            //this.scene.add.text(20, 40, "", {
            //fontFamily: "Arial Black",
            fontSize: 12,
            color: "#ffffff",
            //fontStyle: "bold"
        });
        this.add(this.descrText);

        this.enchancedText = this.scene.add
            .text(35, 170, "", {
                //fontFamily: "Arial Black",
                fontSize: 12,
                color: "#ffffff",
                //fontStyle: "bold"
            })
            .setVisible(false);
        this.add(this.enchancedText);

        this.noBAText = this.scene.add
            .text(35, 190, i18n.ui.NO_BA_SKILL, {
                fontSize: 12,
                color: "#ffffff",
            })
            .setVisible(false);
        this.add(this.noBAText);

        this.enchancedChainedIcon = this.scene.add.image(5, 170, IMAGE_ICON_CHAINED).setOrigin(0, 0).setVisible(false);
        this.add(this.enchancedChainedIcon);

        this.enchancedOnStartIcon = this.scene.add.image(5, 160, IMAGE_ICON_ATTACK).setOrigin(0, 0).setVisible(false);
        this.add(this.enchancedOnStartIcon);

        // skill tags

        this.skillContainer = this.scene.add.container(0, 0).setVisible(false);
        this.add(this.skillContainer);

        //
        //
        // ITEM //////////////////////////////////////////////////////////////// ITEM
        //
        //

        this.bonusTextObject = this.scene.add.text(10, 80, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.bonusTextObject);

        this.attrTextObject = this.scene.add.text(10, 50, "", { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0).setVisible(false);
        this.add(this.attrTextObject);

        this.heroClassBonusTextObject = this.scene.add.text(10, 110, "", { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0).setVisible(false);
        this.add(this.heroClassBonusTextObject);

        this.afterDuelBonusesTextObject = this.scene.add.text(10, 100, "", { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0).setVisible(false);
        this.add(this.afterDuelBonusesTextObject);

        // item image
        this.itemImage = this.scene.add.image(25, 150, IMAGE_ITEM_ARMOR_1).setOrigin(0, 0).setVisible(false); //setDisplaySize(150, 150)
        this.add(this.itemImage);

        // item tags

        this.itemContainer = this.scene.add.container(0, 0).setVisible(false);
        this.add(this.itemContainer);

        //
        //
        // UNIT //////////////////////////////////////////////////////////////// UNIT
        //
        //

        this.hpText = this.scene.add.text(42, 32, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.hpText);
        this.hpIcon = this.scene.add.image(35, 40, IMAGE_ICON_HEALTH).setDisplaySize(20, 20).setVisible(false);
        this.add(this.hpIcon);
        this.hpDescrText = this.scene.add.text(70, 32, i18n.attributes.attribute.basicMaxHp, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.hpDescrText);

        this.armorText = this.scene.add.text(45, 52, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.armorText);
        this.armorIcon = this.scene.add.image(35, 60, IMAGE_ICON_SHIELD).setDisplaySize(20, 20).setVisible(false);
        this.add(this.armorIcon);
        this.armorDescrText = this.scene.add.text(70, 52, i18n.attributes.attribute.basicArmor, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.armorDescrText);

        this.attackText = this.scene.add.text(42, 72, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.attackText);
        this.attackIcon = this.scene.add.image(35, 80, IMAGE_ICON_ATTACK).setDisplaySize(20, 20).setVisible(false);
        this.add(this.attackIcon);
        this.attackDescrText = this.scene.add.text(90, 72, i18n.attributes.attribute.basicAttack, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.attackDescrText);

        //

        this.regenText = this.scene.add.text(45, 172, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.regenText);
        this.regenIcon = this.scene.add.image(35, 180, IMAGE_ICON_REGEN).setDisplaySize(20, 20).setVisible(false);
        this.add(this.regenIcon);
        this.regenDescrText = this.scene.add.text(70, 172, i18n.attributes.attribute.basicHpRegen, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.regenDescrText);

        //

        this.mpText = this.scene.add.text(45, 112, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.mpText);
        this.mpIcon = this.scene.add.image(35, 120, IMAGE_ICON_MP).setDisplaySize(20, 20).setVisible(false);
        this.add(this.mpIcon);
        this.mpDescrText = this.scene.add.text(70, 112, i18n.attributes.attribute.basicMagicPower, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.mpDescrText);

        //

        this.ppText = this.scene.add.text(45, 132, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.ppText);
        this.ppIcon = this.scene.add.image(35, 140, IMAGE_ICON_PP).setDisplaySize(20, 20).setVisible(false);
        this.add(this.ppIcon);
        this.ppDescrText = this.scene.add.text(70, 132, i18n.attributes.attribute.basicPhysicalPower, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.ppDescrText);

        //

        this.critText = this.scene.add.text(45, 92, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.critText);
        this.critIcon = this.scene.add.image(35, 100, IMAGE_ICON_CRIT).setDisplaySize(20, 20).setVisible(false);
        this.add(this.critIcon);
        this.critDescrText = this.scene.add.text(75, 92, i18n.attributes.attribute.basicCritChance, { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.critDescrText);

        //

        this.evasionText = this.scene.add.text(45, 152, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.evasionText);
        this.evasionIcon = this.scene.add.image(35, 160, IMAGE_ICON_EVASION).setDisplaySize(20, 20).setVisible(false);
        this.add(this.evasionIcon);
        this.evasionDescrText = this.scene.add
            .text(70, 152, i18n.attributes.attribute.basicEvasionChance, { fontSize: 12, color: "#dddddd" })
            .setVisible(false);
        this.add(this.evasionDescrText);

        // unit skills

        this.activeSkillText = this.scene.add.rexBBCodeText(10, 200, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        //this.activeSkillText = this.scene.add.text(10, 200, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.activeSkillText);
        this.passiveSkillText = this.scene.add.text(10, 270, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.passiveSkillText);
        this.baTypeText = this.scene.add.text(10, 260, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.baTypeText);
    }

    showSkill(x: number, y: number, skillSet: IHeroSkillSet, isFromHero?: boolean) {
        //console.log("SHOW SKILL HINT");
        //console.log("skillset", skillSet);

        this.hideItemFields();
        this.hideUnitFields();

        this.show(x, y);

        const { name, level, isChained, isActivateOnStart, isBasicAttack } = skillSet;

        this.descrText.setVisible(true);
        this.titleText.setText(name + (level > 1 ? " (" + level + ")" : ""));
        this.descrText.setText(substituteSummonDescription(skillSet));

        this.enchancedOnStartIcon.setVisible(false);
        this.enchancedChainedIcon.setVisible(false);
        this.enchancedText.setVisible(false);

        if (isActivateOnStart) {
            this.enchancedOnStartIcon.setVisible(true);
            this.enchancedText.setText(i18n.ui.ON_START_SKILL);
            this.enchancedText.setVisible(true);
        }

        if (isChained) {
            this.enchancedChainedIcon.setVisible(true);
            this.enchancedText.setText(i18n.ui.CHAINED_SKILL);
            this.enchancedText.setVisible(true);
        }

        //

        this.noBAText.setVisible(isBasicAttack === false);

        //

        if (isFromHero) {
            const { image, isMcSkill } = skillSet;
            if (image) {
                if (image.startsWith("IMAGE_SKILL_MOB")) {
                    this.skillImage.setTexture(image);
                } else {
                    this.skillImage.setTexture(IMAGE_MULTIATALAS_SKILLS, image);
                }
                this.skillImage.setVisible(true);
            } else {
                this.skillImage.setVisible(false);
            }

            // tags

            if (isMcSkill) {
                // do not show tags on mc skill
                return;
            }

            this.skillContainer.removeAll(true);
            this.skillContainer.setVisible(true);

            skillSet.heroClasses.forEach((heroClass, index) => {
                const x = 10 + index * 60;
                const y = 270;
                const hcTag = new HeroClassTag(this.scene as GameScene, x, y, heroClass);
                this.skillContainer.add(hcTag);
            });
        } else {
            this.skillImage.setVisible(false);
            this.skillContainer.setVisible(false);
            this.skillContainer.removeAll(true);
        }
    }

    showItem(x: number, y: number, item: IItem, isFromHero?: boolean) {
        this.show(x, y);

        this.hideSkillFields();
        this.hideUnitFields();

        const { name, level, battleBonuses, bonuses, heroClassBonuses, afterDuelBonuses, desc } = item;

        const itemLevel = level > 1 ? ` (${level})` : "";
        const itemType = item.weaponType ? "\n(" + i18n.ui.WEAPON + ")" : "";
        this.titleText.setText(name + itemLevel + itemType);

        //

        // TODO: move description out of bonusesText

        const bonusesText =
            (desc ? desc + "\n" : "") +
            (battleBonuses?.reduce((text, bonus) => {
                if (bonus.type === EItemBattleBonusType.CAST_SKILL_X_ROUND) {
                    text += i18n.attributes.bonusType[bonus.type] + " " + (bonus.value + 1) + " (" + bonus.relatedSkill?.name || "" + ")\n";
                } else {
                    //text += i18n.attributes.bonusType[bonus.type] + (bonus.status ? " " + i18n.statuses[bonus.status] : "") + " [" + bonus.value + "]\n";
                    const stats = [];
                    bonus.value && stats.push(bonus.value + "");
                    bonus.status && stats.push(i18n.statuses[bonus.status]);
                    text += insertStats(i18n.attributes.bonusType[bonus.type], stats) + "\n";
                }
                return text;
            }, "") || "");
        if (bonusesText) {
            this.bonusTextObject.setText(bonusesText);
            this.bonusTextObject.setVisible(true);
            //} else if (item.id === "coin") {
            //    this.bonusTextObject.setText(i18n.ui.COIN_SELL + " " + getItemPrice(item));
            //    this.bonusTextObject.setVisible(true);
        } else {
            this.bonusTextObject.setVisible(false);
        }

        const attrsText =
            bonuses?.reduce((text, bonus) => {
                const { attribute, value, targetType } = bonus;
                if (attribute) {
                    const targetText = targetType === EItemTargetType.ALL_ALLIES ? " " + i18n.ui[EItemTargetType.ALL_ALLIES] : "";
                    text += i18n.attributes.attribute[attribute] + " " + value + targetText + "\n";
                }
                return text;
            }, "") || "";

        if (attrsText) {
            this.attrTextObject.setText(attrsText);
            this.attrTextObject.setVisible(true);
        } else {
            this.attrTextObject.setVisible(false);
        }

        //

        // HERO CLASS BONUSES

        if (heroClassBonuses) {
            const heroClassBonusesText =
                heroClassBonuses?.reduce((text, bonus) => {
                    text += i18n.tags[bonus.heroClass] + ": ";
                    if (bonus.battleBonus) {
                        //text += i18n.attributes.bonusType[bonus.battleBonus.type] + " " + bonus.battleBonus.value;
                        const stats = [];
                        bonus.battleBonus.value && stats.push(bonus.battleBonus.value + "");
                        bonus.battleBonus.status && stats.push(i18n.statuses[bonus.battleBonus.status]);
                        text += insertStats(i18n.attributes.bonusType[bonus.battleBonus.type], stats) + "\n";
                    }
                    if (bonus.bonus) {
                        const bonusType =
                            bonus.bonus.type === EItemBonusType.ATTRIBUTE && bonus.bonus.attribute
                                ? i18n.attributes.attribute[bonus.bonus.attribute]
                                : i18n.attributes.itemBonusType[bonus.bonus.type];
                        text += bonusType + " " + bonus.bonus.value;
                    }
                    text += "\n";
                    return text;
                }, "") || "";

            this.heroClassBonusTextObject.setText(heroClassBonusesText);
            this.heroClassBonusTextObject.setVisible(true);
        } else {
            this.heroClassBonusTextObject.setVisible(false);
        }

        // AFTER DUEL BONUSES

        const afterDuelBonusesText =
            afterDuelBonuses?.reduce((text, bonus) => {
                const conditionText = bonus.condition ? i18n.ui[bonus.condition] + ": " : "";
                text += conditionText + i18n.attributes.afterDuelBonus[bonus.type] + " +" + bonus.value + "\n";
                return text;
            }, "") || "";
        if (afterDuelBonusesText) {
            this.afterDuelBonusesTextObject.setText(i18n.attributes.afterDuelBonusesText + "\n" + afterDuelBonusesText);
            this.afterDuelBonusesTextObject.setVisible(true);
        } else {
            this.afterDuelBonusesTextObject.setVisible(false);
        }

        if (isFromHero) {
            const { image } = item;

            this.itemImage.setTexture(IMAGE_MULTIATALAS_ITEMS, image);
            this.itemImage.setVisible(true);

            // tags

            this.itemContainer.removeAll(true);
            this.itemContainer.setVisible(true);

            let heroClasses: EHeroClass[] = [];
            if (item.type === EItemType.WEAPON && item.weaponType) {
                heroClasses = getWeaponItemHeroClasses(item.weaponType);
            } else if (item.type === EItemType.COMMON) {
                heroClasses = item.heroClasses;
            }

            heroClasses.forEach((heroClass, index) => {
                const x = 10 + index * 60;
                const y = 270;
                const hcTag = new HeroClassTag(this.scene as GameScene, x, y, heroClass);
                this.itemContainer.add(hcTag);
            });
        } else {
            this.itemImage.setVisible(false);
            this.itemContainer.setVisible(false);
            this.skillContainer.removeAll(true);
        }
    }

    showUnit(x: number, y: number, unit: IUnit, options?: { isSkills: boolean }) {
        this.show(x, y);

        this.hideItemFields();
        this.hideSkillFields();

        this.hpIcon.setVisible(true);
        this.hpText.setVisible(true);
        this.hpDescrText.setVisible(true);

        this.attackIcon.setVisible(true);
        this.attackText.setVisible(true);
        this.attackDescrText.setVisible(true);

        this.mpText.setVisible(true);
        this.mpIcon.setVisible(true);
        this.mpDescrText.setVisible(true);

        this.ppText.setVisible(true);
        this.ppIcon.setVisible(true);
        this.ppDescrText.setVisible(true);

        this.evasionIcon.setVisible(true);
        this.evasionText.setVisible(true);
        this.evasionDescrText.setVisible(true);

        this.critIcon.setVisible(true);
        this.critText.setVisible(true);
        this.critDescrText.setVisible(true);

        const { basicAttack, basicMaxHp, name, basicArmor, basicHpRegen, basicMagicPower, basicPhysicalPower, basicCritChance, basicEvasionChance } = unit;

        this.titleText.setText(name);
        this.hpText.setText(basicMaxHp + "");
        this.attackText.setText(basicAttack + "(" + i18n.ui[unit.attackType] + ")");

        //if (basicArmor > 0) {
        this.armorText.setVisible(true);
        this.armorIcon.setVisible(true);
        this.armorDescrText.setVisible(true);
        this.armorText.setText(basicArmor + "");
        // } else {
        //     this.armorText.setVisible(false);
        //     this.armorIcon.setVisible(false);
        //     this.armorDescrText.setVisible(false);
        // }

        //if (basicHpRegen > 0) {
        this.regenText.setVisible(true);
        this.regenIcon.setVisible(true);
        this.regenDescrText.setVisible(true);
        this.regenText.setText(basicHpRegen + "");
        // } else {
        //     this.regenText.setVisible(false);
        //     this.regenIcon.setVisible(false);
        // }

        this.mpText.setText(basicMagicPower + "");
        this.ppText.setText(basicPhysicalPower + "");

        this.critText.setText(basicCritChance + "%");
        this.evasionText.setText(basicEvasionChance + "%");

        // SHOW UNIQUE SKILLS DESCIPTION

        if (options?.isSkills && unit.heroClassType === EHeroClassType.MULTI) {
            this.activeSkillText.setVisible(true);
            this.activeSkillText.setText("Skill: " + unit.skills[0].name + "\n" + unit.skills[0].desc);

            if (unit.passiveSkill) {
                this.passiveSkillText.setVisible(true);
                this.passiveSkillText.setText("Passive: " + unit.passiveSkill.desc);
            } else {
                this.passiveSkillText.setVisible(false);
            }
            //this.baTypeText.setVisible(true);
            //this.baTypeText.setText("Basic attack: " + unit.attackType);
        } else {
            this.activeSkillText.setVisible(false);
            this.passiveSkillText.setVisible(false);
            this.baTypeText.setVisible(false);
        }
    }

    show(x: number, y: number) {
        this.setVisible(true);
        this.setX(x);
        this.setY(y);
    }

    hide() {
        this.setVisible(false);
    }

    hideSkillFields() {
        this.descrText.setVisible(false);
        this.enchancedChainedIcon.setVisible(false);
        this.enchancedOnStartIcon.setVisible(false);
        this.enchancedText.setVisible(false);
        this.skillContainer.setVisible(false);
        this.skillImage.setVisible(false);
        this.noBAText.setVisible(false);
    }

    hideItemFields() {
        this.bonusTextObject.setVisible(false);
        this.attrTextObject.setVisible(false);
        this.heroClassBonusTextObject.setVisible(false);
        this.afterDuelBonusesTextObject.setVisible(false);
        this.itemContainer.setVisible(false);
        this.itemImage.setVisible(false);
    }

    hideUnitFields() {
        this.hpText.setVisible(false);
        this.hpIcon.setVisible(false);
        this.hpDescrText.setVisible(false);

        this.armorText.setVisible(false);
        this.armorIcon.setVisible(false);
        this.armorDescrText.setVisible(false);

        this.attackText.setVisible(false);
        this.attackIcon.setVisible(false);
        this.attackDescrText.setVisible(false);

        this.regenText.setVisible(false);
        this.regenIcon.setVisible(false);
        this.regenDescrText.setVisible(false);

        this.mpText.setVisible(false);
        this.mpIcon.setVisible(false);
        this.mpDescrText.setVisible(false);

        this.ppText.setVisible(false);
        this.ppIcon.setVisible(false);
        this.ppDescrText.setVisible(false);

        this.critText.setVisible(false);
        this.critIcon.setVisible(false);
        this.critDescrText.setVisible(false);

        this.evasionText.setVisible(false);
        this.evasionIcon.setVisible(false);
        this.evasionDescrText.setVisible(false);

        this.passiveSkillText.setVisible(false);
        this.activeSkillText.setVisible(false);
        this.baTypeText.setVisible(false);
    }
}
