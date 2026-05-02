import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { ANIMATION_COMPLETE, colors, i18n } from "../consts";
import {
    AnimationType,
    EHeroAttackType,
    EHeroClass,
    EStatusType,
    EUnitType,
    IActionBuffTarget,
    IBattleUnit,
    IBuff,
    IDebuff,
    IHeroSkill,
    IStatus,
    ITotem,
    IUnit,
    THeroBattleAttribute,
} from "../../types";
import { IMAGE_TOTEM_ATTACK } from "../utils/imageLoadUtil";
import { getHeroImage, getTotemImage, getUnitImage } from "../utils/imageUtils";
import { BattleBuffCard } from "./BattleBuffCard";
import { BattleDebuffCard } from "./BattleDebuffCard";
import { BattleStatusCard } from "./BattleStatusCard";

/** Card to show summoned unit or totem in battle  */
export class BattleSummonCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    isInverted: boolean;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    turnRect: GameObjects.Rectangle;
    actionRect: GameObjects.Rectangle;
    actionText: GameObjects.Text;
    actionFlyRect: GameObjects.Rectangle;
    actionFlyText: GameObjects.Text;

    buffs: IBuff[] = [];
    buffPanels: BattleBuffCard[] = [];
    statuses: IStatus[] = [];

    debuffs: IDebuff[] = [];
    debuffPanels: BattleDebuffCard[] = [];
    statusPanels: BattleStatusCard[] = [];

    //
    hpText: GameObjects.Text;
    armorText: GameObjects.Text;
    attackText: GameObjects.Text;

    unit: IBattleUnit | null;
    totem: ITotem | null;
    title: string;

    unitImageObject: GameObjects.Sprite;
    unitImageDeathAnimationObject: GameObjects.Sprite; // image to play summon death animation independent
    unitImage: string;
    unitAnimation: string | undefined;
    unitAttackAnimation: string | undefined;
    unitHealAnimation: string | undefined;
    unitHurtAnimation: string | undefined;
    unitBuffAnimation: string | undefined;
    unitDefeatedAnimation: string | undefined;
    magicAttackSkillAnimation: string | undefined;
    summonTotemAnimation: string | undefined;
    appearAnimation: string | undefined;
    size: number | undefined;
    distance: number | undefined;

    isDead: boolean;

    constructor(scene: GameScene, x: number, y: number, unit: IBattleUnit | null, isInverted: boolean) {
        super(scene, x, y);
        this.gameScene = scene;
        this.isInverted = isInverted;
        this.unit = unit;
        this.render();
    }

    render() {
        this.renderBorder();

        if (this.unit) {
            this.renderUnit();
        }
        if (this.totem) {
            this.renderTotem();
        }

        this.renderPanels();
    }

    renderPanels() {
        const turnRectX = this.isInverted ? 15 : 50;
        this.turnRect = this.scene.add.rectangle(turnRectX, 45, 40, 20, colors.GREY_BLUE).setOrigin(0, 0);
        this.add(this.turnRect);
        this.actionRect = this.scene.add.rectangle(50, -350, 40, 20, colors.RED).setOrigin(0, 0).setVisible(false);
        this.add(this.actionRect);
        this.actionText = this.scene.add.text(20, -345, "TEXT Text", { fontSize: 12, color: "#dddddd" }).setOrigin(0, 0).setVisible(false);
        this.add(this.actionText);

        this.actionFlyRect = this.scene.add.rectangle(0, -360, 100, 20, colors.GREY).setOrigin(0, 0); //.setVisible(false);
        this.add(this.actionFlyRect);

        this.actionFlyText = this.scene.add.text(0, -355, "", { fontSize: 12, color: "#dddddd" }); //.setVisible(false);
        this.add(this.actionFlyText);
    }

    renderBorder() {
        //this.rect = this.scene.add.rectangle(0, 0, 100, 100, colors.GREY).setOrigin(0, 0);
        //this.add(this.rect);
    }

    renderUnit() {
        if (!this.unit) {
            return;
        }

        const { basicAttack, hp, maxHp, heroClass, name, armor, items, level } = this.unit;

        // first time => create all objects
        if (!this.titleText) {
            this.title = name + "(" + level + ")";

            this.titleText = this.scene.add.text(10, -330, this.title, { fontSize: 12, color: "#dddddd" });
            this.add(this.titleText);

            this.hpText = this.scene.add.text(45, -310, hp + "/" + maxHp + "", { fontSize: 12, color: "#ddffdd" });
            this.add(this.hpText);

            this.attackText = this.scene.add.text(15, -310, "A" + basicAttack, { fontSize: 12, color: "#ffdddd" });
            this.add(this.attackText);

            this.armorText = this.scene.add.text(80, -310, armor + "arm", { fontSize: 12, color: "#ddddff" });
            this.armorText.setVisible(armor > 0);
            this.add(this.armorText);

            this.armorText = this.scene.add.text(90, -310, armor + " arm", { fontSize: 12, color: "#dddddd" });
            this.armorText.setVisible(armor > 0);
            this.add(this.armorText);

            this.renderUnitImage();
        } else {
            // objects created => set visible and set proper content
            this.titleText.setVisible(true);
            this.hpText.setVisible(true);
            this.attackText.setVisible(true);
            this.armorText.setVisible(armor > 0);
            this.renderUnitImage();
        }
    }

    renderTotem() {
        if (!this.totem) {
            return;
        }

        const { name } = this.totem;

        const totemTextX = this.isInverted ? 20 : 80;
        this.titleText = this.scene.add.text(totemTextX, -330, name, { fontSize: 12, color: "#dddddd" }).setOrigin(0.5, 0);
        this.add(this.titleText);

        this.renderTotemImage();
    }

    renderUnitImage() {
        const { heroClass, unitType, id: unitId } = this.unit || {};

        const {
            image,
            imageBattle,
            animation,
            attackAnimation,
            healAnimation,
            idleBattleAnimation,
            hurtAnimation,
            buffAnimation,
            defeatedAnimation,
            magicAttackSkillAnimation,
            summonTotemAnimation,
            appearAnimation,
            distance,
            distanceEnemy,
            size,
        } = unitType === EUnitType.HERO ? getHeroImage(heroClass!) : getUnitImage(unitId!);

        this.unitImage = imageBattle || image;
        this.unitAnimation = idleBattleAnimation || animation;
        this.unitAttackAnimation = attackAnimation;
        this.unitHealAnimation = healAnimation;
        this.unitHurtAnimation = hurtAnimation;
        this.unitBuffAnimation = buffAnimation;
        this.unitDefeatedAnimation = defeatedAnimation;
        this.magicAttackSkillAnimation = magicAttackSkillAnimation;
        this.summonTotemAnimation = summonTotemAnimation;
        this.appearAnimation = appearAnimation;
        this.distance = distance;
        this.size = size;
        const displaySize = this.size || 300;

        const x = -100 + (this.distance || 0) + (distanceEnemy && this.isInverted ? distanceEnemy : 0);

        // first time => create image object
        if (!this.unitImageObject) {
            this.unitImageObject = this.gameScene.add
                .sprite(x, 0, this.unitImage, 0)
                .setOrigin(0, 1)
                .setDisplaySize(displaySize, displaySize)
                .setFlipX(this.isInverted)
                .setDepth(100);

            this.add(this.unitImageObject);
        } else {
            // object created => set visible and change content
            this.unitImageObject.setTexture(this.unitImage).setDisplaySize(displaySize, displaySize).setVisible(true);
        }

        if (this.appearAnimation) {
            this.unitImageObject.anims.play(this.appearAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });
        } else if (this.unitAnimation) {
            this.unitImageObject.anims.play(this.unitAnimation);
        }
    }

    renderUnitDeathImage() {
        if (!this.unitDefeatedAnimation) {
            return;
        }

        const { x } = this.unitImageObject;
        const displaySize = this.size || 300;

        if (!this.unitImageDeathAnimationObject) {
            this.unitImageDeathAnimationObject = this.gameScene.add
                .sprite(x, 0, this.unitImage, 0)
                .setOrigin(0, 1)
                .setDisplaySize(displaySize, displaySize)
                .setFlipX(this.isInverted)
                .setDepth(100)
                .setVisible(false);

            this.add(this.unitImageDeathAnimationObject);
        } else {
            // object created => set visible and change content
            this.unitImageDeathAnimationObject.setTexture(this.unitImage).setDisplaySize(displaySize, displaySize).setVisible(false);
        }
    }

    renderTotemImage() {
        if (!this.totem) {
            return;
        }

        const totemImage = this.scene.add.sprite(0, -200, IMAGE_TOTEM_ATTACK).setOrigin(0, 1).setDepth(-1); //.setDisplaySize(150, 269);

        const { idleBattleAnimation } = getTotemImage(this.totem.id);

        if (idleBattleAnimation) {
            totemImage.anims.play(idleBattleAnimation);
        }

        this.add(totemImage);
    }

    renderBuffs() {
        this.buffPanels.forEach((buffCard) => {
            buffCard.destroy();
        });
        this.buffPanels = [];

        this.buffs.forEach((buff, index) => {
            const buffCard = new BattleBuffCard(this.gameScene, 40 * index, -380, buff);
            this.add(buffCard);
            this.buffPanels.push(buffCard);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }

    setAction(action: string, color?: number) {
        this.actionText.setText(action);
        this.flyAction(color);
    }

    flyAction(color?: number) {
        this.flyActionPanel(this.actionFlyRect, this.actionFlyText, color);
    }

    flyActionPanel(colorPanel: GameObjects.Rectangle, textPanel: GameObjects.Text, color?: number) {
        colorPanel.setY(-360);
        if (color) colorPanel.fillColor = color;
        colorPanel.setAlpha(1);

        //colorPanel.setFillStyle(this.actionRect.fillColor, 1);
        colorPanel.setVisible(true);

        //const textColor = color ? "#FFFFFF" : color === colors.GREEN ? "#00FF00" : "#FF0000";

        //textPanel.setColor(textColor);
        textPanel.setY(-355);
        textPanel.setAlpha(1);
        textPanel.setText(this.actionText.text);
        textPanel.setVisible(true);

        this.gameScene.tweens.add({
            targets: colorPanel,
            y: { from: -360, to: -600 },
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 4000,
            repeat: 0, // -1: infinity
            yoyo: false,
            onCompleteHandler: () => {
                //colorPanel.setVisible(false);
                colorPanel.setY(-360);
            },
        });

        this.gameScene.tweens.add({
            targets: textPanel,
            y: { from: -355, to: -600 },
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 4000,
            repeat: 0, // -1: infinity
            yoyo: false,
            onCompleteHandler: () => {
                //textPanel.setVisible(false);
                textPanel.setY(-355);
            },
        });
    }

    setIsActive(value: boolean) {
        const color = value ? colors.GREEN : colors.GREY;
        this.turnRect.fillColor = color;
    }

    playSkillSet(name: string, animation?: string) {}

    async playAttack(value?: number, skill?: IHeroSkill) {
        this.setAction("ATTACK " + (value || ""));
        //
        let skillAnimation: string | undefined = undefined;
        if (skill) {
            if (skill.animation) {
                skillAnimation = skill.animation;
            } else {
                if (skill.attackType === EHeroAttackType.MAGIC) {
                    skillAnimation = this.magicAttackSkillAnimation;
                }
            }
        }
        //
        const attackAnimation = skillAnimation || this.unitAttackAnimation;
        if (attackAnimation) {
            if (attackAnimation === AnimationType.NONE) {
                return;
            }

            this.unitImageObject.anims.play(attackAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(0);
                }, this.unitImageObject.anims.currentAnim?.duration || 0);
            });
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(0);
                }, 1000);
            });
        }
    }

    playHeal() {}

    playBuff(buff: IBuff) {}

    playDebuff() {}

    playTakeDamage(value: number, armorValue: number, options: { status?: EStatusType; isCrit?: boolean; isEvasion?: boolean; skill?: IHeroSkill }) {
        const { status, isCrit, isEvasion, skill } = options;
        console.log("playTakeDamage", value, armorValue, options);
        this.changeHp(-value);
        const damageType = status || "DAMAGE";
        this.setAction(`${damageType} ${value} ${isCrit ? " CRIT!" : ""} ${isEvasion ? " EVADE!" : ""} ${status || ""}`, colors.RED);
        this.actionRect.fillColor = colors.RED;
        if (armorValue > 0) {
            this.changeArmor(-armorValue);
        }
    }

    playTakeArmorDamage(value: number, status?: EStatusType) {
        this.changeArmor(-value);
        const damageType = status || "DAMAGE";
        this.setAction(`${damageType} ${value}`);
        this.actionRect.fillColor = colors.RED;
    }

    playHealed(value: number) {
        this.changeHp(value);
        this.setAction("HEALED " + value);
        this.actionRect.fillColor = colors.GREEN;
    }

    playRegenHp(value: number) {
        this.changeHp(value);
        this.setAction("REGEN " + value);
        this.actionRect.fillColor = colors.GREEN;
    }

    playAttrIncreaseTarget(value: number, attribute: THeroBattleAttribute) {
        this.setAction(attribute + " +" + value);
        this.changeAttribute(attribute, value);
    }

    playAttrDecreaseTarget(value: number, attribute: THeroBattleAttribute) {
        this.setAction(attribute + " -" + value);
        this.changeAttribute(attribute, -value);
    }

    async playAttrIncrease(skill?: IHeroSkill) {
        if (!skill) {
            return;
        }

        const animation = skill?.animation || this.unitBuffAnimation;
        if (animation) {
            this.unitImageObject.anims.play(animation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE attrinc Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            const animDuration = this.unitImageObject.anims.duration;
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(0);
                }, animDuration);
            });
        }
    }

    async playAttrDecrease(skill?: IHeroSkill) {
        if (!skill) {
            return;
        }

        const animation = skill?.animation || this.unitBuffAnimation;
        if (animation) {
            this.unitImageObject.anims.play(animation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE attrinc Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            const animDuration = this.unitImageObject.anims.duration;
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(0);
                }, animDuration);
            });
        }
    }

    playEffect() {}

    playHealEffect() {}

    playDead() {
        this.isDead = true;
        this.setAction(i18n.ui.DEAD, colors.RED);

        this.titleText.setVisible(false);
        this.hpText.setVisible(false);
        this.attackText.setVisible(false);
        this.armorText.setVisible(false);
        this.unitImageObject.setVisible(false);

        this.unit = null;

        this.renderUnitDeathImage();

        const animation = this.unitDefeatedAnimation;
        if (animation) {
            this.unitImageDeathAnimationObject.setVisible(true);
            this.unitImageDeathAnimationObject.anims.play(animation);
        }

        setTimeout(
            () => {
                this.unitImageDeathAnimationObject.setVisible(false);
                // new summon was not created while animation not finished
                if (this.isDead) {
                    this.setVisible(false);
                }
            },
            animation ? this.unitImageDeathAnimationObject.anims.duration : 500,
        );
    }

    resetActionPanel() {
        this.actionText.setText("");
        this.actionRect.fillColor = colors.GREY;
    }

    changeHp(value: number) {
        if (!this.unit) {
            return;
        }
        this.unit.hp += value;
        if (this.unit.hp < 0) {
            this.unit.hp = 0;
        }
        if (this.unit.hp > this.unit.maxHp) {
            this.unit.hp = this.unit.maxHp;
        }
        this.hpText.setText(this.unit.hp + "/" + this.unit.maxHp);
    }

    setHp(value: number) {
        if (!this.unit) {
            return;
        }
        this.unit.hp = value;
        if (this.unit.hp < 0) {
            this.unit.hp = 0;
        }
        if (this.unit.hp > this.unit.maxHp) {
            this.unit.hp = this.unit.maxHp;
        }
        this.hpText.setText(this.unit.hp + "/" + this.unit.maxHp);
    }

    changeArmor(value: number) {
        if (!this.unit) {
            return;
        }
        this.unit.armor += value;
        if (this.unit.armor < 0) {
            this.unit.armor = 0;
        }
        this.armorText.setText(this.unit.armor + "arm");
    }

    summonUnit(unit: IUnit) {
        return this;
    }

    placeTotem(totem: ITotem) {
        return this;
    }

    setUnit(unit: IBattleUnit) {
        this.unit = unit;
        this.isDead = false;
        this.renderUnit();
    }

    removeUnit() {
        this.clearUnit();
    }

    setTotem(totem: ITotem) {
        this.totem = totem;
        this.renderTotem();
    }

    removeTotem() {
        this.totem = null;
        this.titleText.setText("");
    }

    clearUnit() {
        this.unit = null;
        this.setVisible(false);
        //this.titleText.destroy();
        //this.hpText.destroy();
        //this.armorText.destroy();
        //this.attackText.destroy();
        //
        //this.unitImageObject.destroy();
    }

    addBuff(buff: IBuff, buffTatget: IActionBuffTarget) {
        const { isExisting, value } = buffTatget;
        if (value === undefined) {
            return;
        }
        //
        if (isExisting) {
            const currentBuff = this.buffs.find((b) => b.type === buff.type);
            if (currentBuff && value !== undefined) {
                currentBuff.totalValue = value;
                currentBuff.value = value;
                this.renderBuffs();
            }
            return;
        }

        this.buffs.push({ ...buff, value, totalValue: value });
        this.renderBuffs();
    }

    addDebuff(debuff: IDebuff) {}

    removeSummon() {}

    removeBuff(buff: IBuff) {
        this.setAction("REMOVE BUFF " + buff.name);
    }

    removeDebuff(debuff: IDebuff) {
        this.setAction("REMOVE DEBUFF " + debuff.name);
    }

    changeAttribute(attribute: THeroBattleAttribute, value: number) {
        if (!this.unit) {
            return;
        }
        switch (attribute) {
            case "attack":
                {
                    this.unit.attack += value;
                    this.attackText.setText("A" + this.unit.attack);
                }
                break;
            case "armor":
                {
                    this.changeArmor(value);
                }
                break;
            case "hp": {
                this.changeHp(value);
            }
            case "maxHp": {
                this.unit.maxHp += value;
                this.changeHp(value);
            }
        }
    }

    playApplyStatus(skill?: IHeroSkill) {}

    applyStatus(statusType: EStatusType, value: number) {}

    removeStatus(statusType: EStatusType) {}
}
