import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { ANIMATION_COMPLETE, colors, GAME_MODE, i18n } from "../consts";
import {
    AnimationType,
    EEffectAnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroClassType,
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
import { BattleSummonCard } from "./BattleSummonCard";
import { BattleBuffCard } from "./BattleBuffCard";
import { BattleDebuffCard } from "./BattleDebuffCard";
import { getHeroImage, getUnitImage } from "../utils/imageUtils";
import { BattleStatusCard } from "./BattleStatusCard";
import { IMAGE_EFFECT_LIGHTNING_1 } from "../utils/load/imageLoadEffects";

/** Card to show unit in battle  */
export class BattleUnitCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    isInverted: boolean;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    turnRect: GameObjects.Rectangle;
    actionRect: GameObjects.Rectangle;
    actionText: GameObjects.Text;
    actionFlyRect: GameObjects.Rectangle;
    actionFlyText: GameObjects.Text;
    actionFlyRect2: GameObjects.Rectangle;
    actionFlyText2: GameObjects.Text;
    actionFlyRect3: GameObjects.Rectangle;
    actionFlyText3: GameObjects.Text;
    actionFlyRect4: GameObjects.Rectangle;
    actionFlyText4: GameObjects.Text;
    summonCard: BattleSummonCard;

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
    title: string;

    unitImageObject: GameObjects.Sprite;
    effectImageObject: GameObjects.Sprite;
    unitImage: string;
    unitAnimation: string | undefined;
    unitAttackAnimation: string | undefined;
    unitHealAnimation: string | undefined;
    unitHurtAnimation: string | undefined;
    unitBuffAnimation: string | undefined;
    unitDefeatedAnimation: string | undefined;
    magicAttackSkillAnimation: string | undefined;
    summonTotemAnimation: string | undefined;
    size: number | undefined;
    distance: number | undefined;
    attackAnimDisance: number | undefined;

    isDead: boolean;

    constructor(scene: GameScene, x: number, y: number, unit: IBattleUnit | null, isInverted: boolean) {
        super(scene, x, y);
        this.isInverted = isInverted;
        this.gameScene = scene;
        this.unit = unit;
        this.render();
    }

    render() {
        //this.renderBorder();
        if (this.unit) {
            this.renderUnit();
            this.renderEffectImage();
        }
        this.renderPanels();
    }

    //проверить как работают эффекты master, samurai, magic
    //добавить эффекты для order dark summon

    renderEffectImage() {
        //
        const x = -280;
        this.effectImageObject = this.gameScene.add
            .sprite(x, 200, IMAGE_EFFECT_LIGHTNING_1, 0)
            .setOrigin(0, 1)
            //.setDisplaySize(300, 300)
            .setFlipX(!this.isInverted)
            .setDepth(200)
            .setVisible(false);

        //this.effectImageObject.anims.play(EffectAnimationType.EFFECT_LIGHTNING_1);
        // this.unitImageObject.on(ANIMATION_COMPLETE, () => {
        //     if (this.unitAnimation) {
        //         this.unitImageObject.anims.play(this.unitAnimation);
        //     }
        //     this.unitImageObject.removeListener(ANIMATION_COMPLETE);
        // });

        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(0);
        //     }, this.unitImageObject.anims.currentAnim.duration);
        // });

        this.add(this.effectImageObject);
    }

    renderImage(heroClass: EHeroClass, unit: IBattleUnit) {
        const { unitType, id, heroClassType } = unit;
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
            distance,
            distanceEnemy,
            size,
            attackAnimDisance,
        } = unitType === EUnitType.HERO ? getHeroImage(heroClass) : getUnitImage(id);
        this.unitImage = imageBattle || image;
        if (GAME_MODE === "FULL" || (unitType === EUnitType.HERO && heroClassType === EHeroClassType.BASIC)) {
            this.unitAnimation = idleBattleAnimation || animation;
            this.unitAttackAnimation = attackAnimation;
            this.unitHealAnimation = healAnimation;
            this.unitHurtAnimation = hurtAnimation;
            this.unitBuffAnimation = buffAnimation;
            this.unitDefeatedAnimation = defeatedAnimation;
            this.magicAttackSkillAnimation = magicAttackSkillAnimation;
            this.summonTotemAnimation = summonTotemAnimation;
            this.attackAnimDisance = attackAnimDisance;
        }
        this.distance = distance;
        this.size = size;
        //const displaySize = this.size || 400;

        const x = -100 + (this.distance || 0) + (distanceEnemy && this.isInverted ? distanceEnemy : 0);

        this.unitImageObject = this.gameScene.add
            .sprite(x, 200, this.unitImage, 0)
            .setOrigin(0, 1)
            //.setDisplaySize(displaySize, displaySize)
            .setFlipX(this.isInverted)
            .setDepth(100);

        if (this.size) {
            this.unitImageObject.setDisplaySize(this.size, this.size);
        }

        if (this.unitAnimation) {
            this.unitImageObject.anims.play(this.unitAnimation);
        }
        this.add(this.unitImageObject);

        //const rect400 = this.scene.add.rectangle(x + 200, 200, 50, 400, colors.RED).setOrigin(0, 1);
        //this.add(rect400);
    }

    renderPanels() {
        this.turnRect = this.scene.add.rectangle(0, 205, 100, 20, colors.GREY).setOrigin(0, 0);
        this.add(this.turnRect);

        this.actionRect = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.actionRect);

        this.actionText = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.actionText);

        // 1

        this.actionFlyRect = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.actionFlyRect);

        this.actionFlyText = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.actionFlyText);

        // 2

        this.actionFlyRect2 = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.actionFlyRect2);

        this.actionFlyText2 = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.actionFlyText2);

        // 3

        this.actionFlyRect3 = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.actionFlyRect3);

        this.actionFlyText3 = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.actionFlyText3);

        // 4

        this.actionFlyRect4 = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0).setVisible(false);
        this.add(this.actionFlyRect4);

        this.actionFlyText4 = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" }).setVisible(false);
        this.add(this.actionFlyText4);
    }

    renderSummonCard() {
        //const x = !this.isInverted ? 110 : -115;
        const x = !this.isInverted ? 60 : -65;
        const y = 200;
        this.summonCard = new BattleSummonCard(this.gameScene, x, y, null, this.isInverted).setVisible(false);
        this.add(this.summonCard);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 105, 200, colors.BLACK).setOrigin(0, 0);
        this.add(this.rect);
    }

    renderUnit() {
        if (!this.unit) {
            return;
        }

        this.renderSummonCard();

        this.renderImage(this.unit.heroClass, this.unit);

        const { basicAttack, hp, maxHp, heroClass, name, armor, items, level } = this.unit;
        this.title = name + "(" + level + ")";

        this.titleText = this.scene.add.text(10, -130, this.title, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);
        this.titleText.setText(this.title);

        this.hpText = this.scene.add.text(80, -110, hp + "/" + maxHp + "", { fontSize: 12, color: "#dddddd" });
        this.add(this.hpText);

        this.attackText = this.scene.add.text(-21, -110, basicAttack + " A", { fontSize: 12, color: "#dddddd" });
        this.add(this.attackText);

        this.armorText = this.scene.add.text(120, -110, armor + "arm", { fontSize: 12, color: "#dddddd" });
        this.armorText.setVisible(armor > 0);
        this.add(this.armorText);

        // const itemsTextContent = items.length > 0 ? "Items: " + items.map((item) => item.name).join(", ") : "";
        // const itemsText = this.scene.add.text(10, 90, itemsTextContent, { fontSize: 12, color: "#dddddd" });
        // itemsText.setVisible(items.length > 0);
        // this.add(itemsText);

        this.renderStatuses();
    }

    renderBuffs() {
        this.buffPanels.forEach((buffCard) => {
            buffCard.destroy();
        });
        this.buffPanels = [];

        this.buffs.forEach((buff, index) => {
            // if (this.buffPanels[index]) {
            //     return;
            // }
            const buffCard = new BattleBuffCard(this.gameScene, 40 * index, -180, buff);
            this.add(buffCard);
            this.buffPanels.push(buffCard);
        });
    }

    renderDebuffs() {
        this.debuffPanels.forEach((debuffCard) => {
            debuffCard.destroy();
        });
        this.debuffPanels = [];

        this.debuffs.forEach((debuff, index) => {
            const debuffCard = new BattleDebuffCard(this.gameScene, 40 * index, -210, debuff);
            this.add(debuffCard);
            this.debuffPanels.push(debuffCard);
        });
    }

    renderStatuses() {
        this.statusPanels.forEach((statusCard) => {
            statusCard.destroy();
        });
        this.statusPanels = [];

        this.statuses.forEach((status, index) => {
            const statusCard = new BattleStatusCard(this.gameScene, 40 * index, -220, status);
            this.add(statusCard);
            this.statusPanels.push(statusCard);
        });
    }

    flyAction(color?: number) {
        //console.log("flyAction", color);
        if (!this.actionFlyRect.visible) {
            //console.log("flyAction 1");
            this.flyActionPanel(this.actionFlyRect, this.actionFlyText, color);
        } else if (!this.actionFlyRect2.visible) {
            //console.log("flyAction 2");
            this.flyActionPanel(this.actionFlyRect2, this.actionFlyText2, color);
        } else if (!this.actionFlyRect3.visible) {
            //console.log("flyAction 3");
            this.flyActionPanel(this.actionFlyRect3, this.actionFlyText3, color);
        } else if (!this.actionFlyRect4.visible) {
            //console.log("flyAction 4");
            this.flyActionPanel(this.actionFlyRect4, this.actionFlyText4, color);
        } else {
            //console.log("flyAction 1 LAST");
            this.flyActionPanel(this.actionFlyRect, this.actionFlyText, color);
        }
    }

    flyActionPanel(colorPanel: GameObjects.Rectangle, textPanel: GameObjects.Text, color?: number) {
        //console.log("flyActionPanel", color);
        colorPanel.setY(-160);
        colorPanel.fillColor = color;
        colorPanel.setAlpha(1);

        //colorPanel.setFillStyle(this.actionRect.fillColor, 1);
        colorPanel.setVisible(true);

        //const textColor = color ? "#FFFFFF" : color === colors.GREEN ? "#00FF00" : "#FF0000";

        //textPanel.setColor(textColor);
        textPanel.setY(-155);
        textPanel.setAlpha(1);
        textPanel.setText(this.actionText.text);
        textPanel.setVisible(true);

        this.gameScene.tweens.add({
            targets: colorPanel,
            y: { from: -160, to: -400 },
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 4000,
            repeat: 0, // -1: infinity
            yoyo: false,
            onCompleteHandler: () => {
                //colorPanel.setVisible(false);
                colorPanel.setY(-160);
            },
        });

        this.gameScene.tweens.add({
            targets: textPanel,
            y: { from: -155, to: -395 },
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 4000,
            repeat: 0, // -1: infinity
            yoyo: false,
            onCompleteHandler: () => {
                //textPanel.setVisible(false);
                textPanel.setY(-155);
            },
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }

    setAction(action: string, color?: number) {
        //console.log("setAction", action, color);
        this.actionText.setText(action);
        // if (color) {
        //     this.actionRect.fillColor = color;
        // } else {
        //     this.actionRect.fillColor = colors.GREY;
        // }
        this.flyAction(color);
    }

    setIsActive(value: boolean) {
        const color = value ? colors.GREEN : colors.GREY;
        this.turnRect.fillColor = color;
    }

    playSkillSet(name: string, animation?: string) {
        this.setAction(name);

        if (animation) {
            // TODO: add other types of animation
            let animationType: string = undefined;
            if (animation === AnimationType.UNIT_ATTACK) {
                animationType = this.magicAttackSkillAnimation;
            }

            if (!animationType) {
                return;
            }

            this.unitImageObject.anims.play(animationType);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE attach Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(0);
                }, this.unitImageObject.anims.currentAnim.duration);
            });
        }
    }

    async playAttack(value: number, skill?: IHeroSkill) {
        this.setAction("ATTACK " + value);
        //
        let skillAnimation: string = undefined;
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
        //console.log("attackAnimation", attackAnimation);
        if (attackAnimation) {
            if (attackAnimation === AnimationType.NONE) {
                return;
            }

            const imageX = this.unitImageObject.x;
            const attackSkillDistance = this.attackAnimDisance || 0;
            if (attackSkillDistance) {
                const newImageX = this.isInverted ? imageX - attackSkillDistance : imageX + attackSkillDistance;
                this.unitImageObject.setX(newImageX);
            }

            this.unitImageObject.anims.play(attackAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                this.unitImageObject.setX(imageX);
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(0);
                }, this.unitImageObject.anims.currentAnim.duration);
            });
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(0);
                }, 1000);
            });
        }
    }

    async playHeal(value: number): Promise<number> {
        this.setAction("HEAL " + value, colors.GREEN);
        if (this.unitHealAnimation) {
            this.unitImageObject.anims.play(this.unitHealAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                console.log(">> ANIMATION_COMPLETE heal Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(0);
                }, this.unitImageObject.anims.currentAnim.duration);
            });
        } else {
            return 0;
        }
    }

    playTakeDamage(value: number, armorValue: number, options: { status?: EStatusType; isCrit?: boolean; isEvasion?: boolean; skill?: IHeroSkill }) {
        const { status, isCrit, isEvasion, skill } = options;
        this.changeHp(-value);
        const damageType = status || "DAMAGE";
        this.setAction(`${damageType} ${value} ${isCrit ? " CRIT!" : ""} ${isEvasion ? " EVADE!" : ""} ${status || ""}`, colors.RED);

        if (armorValue > 0) {
            this.changeArmor(-armorValue);
        }

        // dont show hurt animation when taking damage from status (poison, burn, etc.)
        if (status) {
            return;
        }

        const hurtAnimation = this.unitHurtAnimation;

        if (hurtAnimation) {
            this.unitImageObject.anims.play(hurtAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                console.log(">> ANIMATION_COMPLETE hurtAnimation");
                if (!this.isDead && this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });
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
        this.setAction("HEALED " + value, colors.GREEN);
        //this.actionRect.fillColor = colors.GREEN;
    }

    playRegenHp(value: number) {
        this.changeHp(value);
        this.setAction("REGEN " + value, colors.GREEN);
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

    async playBuff(buff: IBuff, skill?: IHeroSkill) {
        //this.setAction("BUFF " + buff.name);

        if (GAME_MODE !== "FULL") {
            return;
        }

        const animation = skill?.animation || this.unitBuffAnimation;
        if (animation) {
            this.unitImageObject.anims.play(animation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE buff Animation");
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

    async playDebuff(debuff: IDebuff, skill?: IHeroSkill) {
        //this.setAction("BUFF " + buff.name);

        const animation = skill?.animation || this.unitBuffAnimation;
        if (animation) {
            this.unitImageObject.anims.play(animation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE buff Animation");
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

    async playAttrIncrease(value: number, attribute: THeroBattleAttribute, skill?: IHeroSkill) {
        //this.setAction("ATTR INC");

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

    async playAttrDecrease(value: number, attribute: THeroBattleAttribute, skill?: IHeroSkill) {
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

    playEffect(unit: IBattleUnit, skill?: IHeroSkill) {
        if (GAME_MODE !== "FULL") {
            return;
        }

        const { unitType, heroClass, id } = unit;
        let animation: EEffectAnimationType;
        let animationDelay = 0;
        let attackEnemyAnimDistanceX = 0;
        let attackEnemyAnimDistanceY = 0;
        if (skill) {
            animation = skill.effectAnimationType;
            animationDelay = skill.effectAnimationDelay || 0;
            if (this.isInverted) {
                attackEnemyAnimDistanceX = skill.effectAnimDistance?.x || 0;
                attackEnemyAnimDistanceY = skill.effectAnimDistance?.y || 0;
            } else {
                attackEnemyAnimDistanceX = skill.effectAnimDistanceInverted?.x || 0;
                attackEnemyAnimDistanceY = skill.effectAnimDistanceInverted?.y || 0;
            }
        } else {
            const animations = unitType === EUnitType.HERO ? getHeroImage(heroClass) : getUnitImage(id);
            animation = animations.attackEnemyAnimation;
            animationDelay = animations.attackEnemyAnimDelay || 0;
            if (this.isInverted) {
                attackEnemyAnimDistanceX = animations.attackEnemyAnimDistance?.x || 0;
                attackEnemyAnimDistanceY = animations.attackEnemyAnimDistance?.y || 0;
            } else {
                attackEnemyAnimDistanceX = animations.attackEnemyAnimDistanceInverted?.x || 0;
                attackEnemyAnimDistanceY = animations.attackEnemyAnimDistanceInverted?.y || 0;
            }
        }

        if (!animation) {
            return;
        }

        setTimeout(() => {
            const initialX = this.effectImageObject.x;
            const initialY = this.effectImageObject.y;
            console.log("initial X", initialX);
            if (attackEnemyAnimDistanceX !== 0) {
                this.effectImageObject.setX(initialX + attackEnemyAnimDistanceX);
                //console.log("changed X", this.effectImageObject.x);
            }
            if (attackEnemyAnimDistanceY !== 0) {
                this.effectImageObject.setY(initialY + attackEnemyAnimDistanceY);
            }
            this.effectImageObject.setVisible(true);
            this.effectImageObject.anims.play(animation);
            this.effectImageObject.on(ANIMATION_COMPLETE, () => {
                this.effectImageObject.setVisible(false);
                if (attackEnemyAnimDistanceX !== 0) {
                    this.effectImageObject.setX(initialX);
                    //console.log("restored X", this.effectImageObject.x);
                }
                if (attackEnemyAnimDistanceY !== 0) {
                    this.effectImageObject.setY(initialY);
                    //console.log("restored X", this.effectImageObject.x);
                }
            });
        }, animationDelay);
    }

    playHealEffect() {
        if (GAME_MODE !== "FULL") {
            return;
        }

        const animation = EEffectAnimationType.EFFECT_PRIEST_HEAL;
        const animationDelay = 800;
        let attackEnemyAnimDistanceX = 100;
        const attackEnemyAnimDistanceY = 0;

        if (!animation) {
            return;
        }

        setTimeout(() => {
            const initialX = this.effectImageObject.x;
            const initialY = this.effectImageObject.y;
            //console.log("initial X", initialX);
            if (attackEnemyAnimDistanceX !== 0) {
                this.effectImageObject.setX(initialX + attackEnemyAnimDistanceX);
                //console.log("changed X", this.effectImageObject.x);
            }
            if (attackEnemyAnimDistanceY !== 0) {
                this.effectImageObject.setY(initialY + attackEnemyAnimDistanceY);
            }
            this.effectImageObject.setVisible(true);
            this.effectImageObject.anims.play(animation);
            this.effectImageObject.on(ANIMATION_COMPLETE, () => {
                this.effectImageObject.setVisible(false);
                if (attackEnemyAnimDistanceX !== 0) {
                    this.effectImageObject.setX(initialX);
                    //console.log("restored X", this.effectImageObject.x);
                }
                if (attackEnemyAnimDistanceY !== 0) {
                    this.effectImageObject.setY(initialY);
                    //console.log("restored X", this.effectImageObject.x);
                }
            });
        }, animationDelay);
    }

    playDead() {
        this.isDead = true;
        this.setAction(i18n.ui.DEAD, colors.RED);
        this.actionText.setVisible(true);
        this.actionRect.fillColor = colors.BLACK;

        const animation = this.unitDefeatedAnimation;
        if (animation) {
            this.unitImageObject.anims.play(animation);
        }
    }

    async summonUnit(unit: IBattleUnit, skill?: IHeroSkill): Promise<BattleSummonCard> {
        this.setAction("SUMMON " + unit.name);

        if (!this.summonCard.unit) {
            setTimeout(() => {
                this.summonCard.setUnit(unit);
                this.summonCard.setVisible(true);
            }, 800);
        }

        const summonAnimation = skill?.animation || this.summonTotemAnimation;
        if (summonAnimation) {
            this.unitImageObject.anims.play(summonAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE summon Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise<BattleSummonCard>((resolve, reject) => {
                setTimeout(() => {
                    //this.summonCard.setVisible(true);
                    resolve(this.summonCard);
                }, this.unitImageObject.anims.currentAnim.duration);
            });
        } else {
            return new Promise<BattleSummonCard>((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.summonCard);
                }, 900);
            });

            //this.summonCard.setVisible(true);
            //return this.summonCard;
        }
    }

    removeSummon() {
        this.summonCard.setVisible(false);
        this.summonCard.removeUnit();
    }

    async placeTotem(totem: ITotem, skill?: IHeroSkill): Promise<BattleSummonCard> {
        //console.log("PLACE TOTEM");
        //console.log("skill", skill);

        this.setAction("TOTEM " + totem.name);
        this.summonCard.setTotem(totem);
        //return this.summonCard;

        const totemAnimation = skill?.animation || this.summonTotemAnimation;
        if (totemAnimation) {
            this.unitImageObject.anims.play(totemAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE totem Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            return new Promise<BattleSummonCard>((resolve, reject) => {
                setTimeout(() => {
                    this.summonCard.setVisible(true);
                    resolve(this.summonCard);
                }, this.unitImageObject.anims.currentAnim.duration);
            });
        } else {
            this.summonCard.setVisible(true);
            return this.summonCard;
        }
    }

    removeTotem() {
        this.summonCard.setVisible(false);
        this.summonCard.removeTotem();
    }

    resetActionPanel() {
        this.actionText.setText("");
        this.actionRect.fillColor = colors.GREY;
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

    /** Increase or descrease unit hp by value (negative value to decrease) */
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

    /** Increase or descrease unit max hp by value (negative value to decrease) */
    changeMaxHp(value: number) {
        if (!this.unit) {
            return;
        }
        this.unit.maxHp += value;
        if (this.unit.maxHp < 0) {
            this.unit.maxHp = 0;
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

    addBuff(buff: IBuff, buffTatget: IActionBuffTarget) {
        this.setAction("BUFF " + buff.name);
        const { isExisting, value } = buffTatget;
        //
        if (isExisting) {
            const currentBuff = this.buffs.find((b) => b.type === buff.type);
            if (currentBuff) {
                currentBuff.totalValue = value;
                currentBuff.value = value;
                this.renderBuffs();
            }
            return;
        }

        this.buffs.push({ ...buff, value, totalValue: value });
        this.renderBuffs();
    }

    changeBuffValue(buff: IBuff, buffTatget: IActionBuffTarget) {
        const { isExisting, value } = buffTatget;
        if (isExisting) {
            const currentBuff = this.buffs.find((b) => b.type === buff.type);
            if (currentBuff) {
                currentBuff.totalValue = value;
                currentBuff.value = value;
                this.renderBuffs();
            }
        }
    }

    removeBuff(buff: IBuff) {
        //this.setAction("REMOVE BUFF " + buff.name);
        this.buffs = this.buffs.filter((b) => b.type !== buff.type);
        this.renderBuffs();
    }

    addDebuff(debuff: IDebuff, debuffTarget: IActionBuffTarget) {
        this.setAction("DEBUFF " + debuff.name);
        const { isExisting, value } = debuffTarget;
        // TODO: add handling of already existing debuffs
        if (isExisting) {
            const currentDebuff = this.debuffs.find((db) => db.type === debuff.type);
            if (currentDebuff) {
                currentDebuff.totalValue = value;
                this.renderDebuffs();
            }
            return;
        }

        this.debuffs.push(debuff);
        this.renderDebuffs();
    }

    removeDebuff(debuff: IDebuff) {
        this.setAction("REMOVE DEBUFF " + debuff.name);
        this.debuffs = this.debuffs.filter((db) => db.type !== debuff.type);
        this.renderDebuffs();
    }

    changeAttribute(attribute: THeroBattleAttribute, value: number) {
        console.log("CHANGE ATTRIBUTe", attribute, value);
        if (!this.unit) {
            return;
        }
        switch (attribute) {
            case "attack":
                {
                    this.unit.attack += value;
                    if (this.unit.attack < 0) {
                        this.unit.attack = 0;
                    }
                    this.attackText.setText(this.unit.attack + " attack");
                }
                break;
            case "armor":
                {
                    console.log("CHANGE ARMOR, prev, next", this.unit.armor, this.unit.armor + value);
                    this.unit.armor += value;
                    if (this.unit.armor < 0) {
                        this.unit.armor = 0;
                    }
                    this.armorText.setText(this.unit.armor + "arm");
                }
                break;
            case "maxHp":
                {
                    this.changeMaxHp(value);
                }
                break;
        }
    }

    async playApplyStatus(skill?: IHeroSkill) {
        // ANIMATION

        const animation = skill?.animation || this.magicAttackSkillAnimation;
        if (animation) {
            //console.log("start play APPLY STATUS ANMATION");
            this.unitImageObject.anims.play(animation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                //console.log(">> ANIMATION_COMPLETE status Animation");
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });

            const animDuration = this.unitImageObject.anims.duration;
            await new Promise((resolve) => {
                setTimeout(() => {
                    //console.log("finish APPLY STATUS ANMATION");
                    resolve(0);
                }, animDuration);
            });
        }
    }

    applyStatus(statusType: EStatusType, value: number, skill?: IHeroSkill) {
        this.setAction(`${statusType} +${value}`);

        const existingStatus = this.statuses.find((status) => status.type === statusType);
        if (existingStatus) {
            existingStatus.value += value;
        } else {
            this.statuses.push({ type: statusType, value });
        }

        this.renderStatuses();
    }

    removeStatus(statusType: EStatusType) {
        //const existingStatus = this.statuses.find((status) => status.type === statusType);
        console.log("statuses before REMOVE STATUS", [...this.statuses]);
        this.statuses = this.statuses.filter((status) => status.type !== statusType);
        console.log("statuses after REMOVE STATUS", [...this.statuses]);
        //if (existingStatus) {
        //existingStatus.value -= value;
        this.renderStatuses();
        //}
    }
}
