import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { ANIMATION_COMPLETE, colors } from "../consts";
import { EHeroClass, EStatusType, EUnitType, IBattleUnit, IBuff, IDebuff, IStatus, ITotem, IUnit, THeroBattleAttribute } from "../../types";
import { BattleSummonCard } from "./BattleSummonCard";
import { BattleBuffCard } from "./BattleBuffCard";
import { BattleDebuffCard } from "./BattleDebuffCard";
import { getHeroImage, getUnitImage } from "../utils/imageUtils";
import { BattleStatusCard } from "./BattleStatusCard";

/** Card to show unit in battle  */
export class BattleUnitCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    isInverted: boolean;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    turnRect: GameObjects.Rectangle;
    actionRect: GameObjects.Rectangle;
    actionText: GameObjects.Text;
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
    unitImage: string;
    unitAnimation: string | undefined;
    unitAttackAnimation: string | undefined;
    unitHealAnimation: string | undefined;

    isDead: boolean;

    constructor(scene: GameScene, x: number, y: number, unit: IBattleUnit | null, isInverted: boolean) {
        super(scene, x, y);
        this.isInverted = isInverted;
        this.gameScene = scene;
        this.unit = unit;
        this.render();
    }

    render() {
        this.renderBorder();
        if (this.unit) {
            this.renderUnit();
        }
        this.renderPanels();
    }

    renderImage(heroClass: EHeroClass, unitType: EUnitType, unitId: string) {
        const { image, animation, attackAnimation, healAnimation } = unitType === EUnitType.HERO ? getHeroImage(heroClass) : getUnitImage(unitId);
        this.unitImage = image;
        this.unitAnimation = animation;
        this.unitAttackAnimation = attackAnimation;
        this.unitHealAnimation = healAnimation;
        this.unitImageObject = this.gameScene.add.sprite(-100, -100, image, 0).setOrigin(0, 0).setDisplaySize(300, 300).setFlipX(this.isInverted); //.setScale(-1, 1)
        if (animation) {
            this.unitImageObject.anims.play(animation);
        }
        this.add(this.unitImageObject);
    }

    renderPanels() {
        this.turnRect = this.scene.add.rectangle(0, 205, 100, 20, colors.GREY).setOrigin(0, 0);
        this.add(this.turnRect);

        this.actionRect = this.scene.add.rectangle(0, -160, 100, 20, colors.GREY).setOrigin(0, 0);
        this.add(this.actionRect);

        this.actionText = this.scene.add.text(20, -155, "", { fontSize: 12, color: "#dddddd" });
        this.add(this.actionText);
    }

    renderSummonCard() {
        const x = 0;
        const y = 260;
        this.summonCard = new BattleSummonCard(this.gameScene, x, y, null).setVisible(false);
        this.add(this.summonCard);
    }

    renderBorder() {
        this.rect = this.scene.add.rectangle(0, 0, 100, 200, colors.BLACK).setOrigin(0, 0);
        this.add(this.rect);
    }

    renderUnit() {
        if (!this.unit) {
            return;
        }

        this.renderImage(this.unit.heroClass, this.unit.unitType, this.unit.id);

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

        this.renderSummonCard();

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
            const buffCard = new BattleBuffCard(this.gameScene, 40 * index, -200, buff);
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
            const debuffCard = new BattleDebuffCard(this.gameScene, 40 * index, -230, debuff);
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
            const statusCard = new BattleStatusCard(this.gameScene, 40 * index, -250, status);
            this.add(statusCard);
            this.statusPanels.push(statusCard);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }

    setAction(action: string) {
        this.actionText.setText(action);
    }

    setIsActive(value: boolean) {
        const color = value ? colors.GREEN : colors.GREY;
        this.turnRect.fillColor = color;
    }

    playAttack() {
        //console.log("playAttack", this.unitAttackAnimation);
        if (this.unitAttackAnimation) {
            console.log("animation is not undefined");
            console.log(this.unitAttackAnimation);
            this.unitImageObject.anims.play(this.unitAttackAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });
        }
    }

    playHeal(value: number) {
        this.setAction("HEAL " + value);
        if (this.unitHealAnimation) {
            this.unitImageObject.anims.play(this.unitHealAnimation);
            this.unitImageObject.on(ANIMATION_COMPLETE, () => {
                if (this.unitAnimation) {
                    this.unitImageObject.anims.play(this.unitAnimation);
                }
                this.unitImageObject.removeListener(ANIMATION_COMPLETE);
            });
        }
    }

    playTakeDamage(value: number, armorValue: number, status?: EStatusType, isCrit?: boolean, isEvasion?: boolean) {
        this.changeHp(-value);
        const damageType = status || "DAMAGE";
        this.setAction(`${damageType} ${value} ${isCrit ? " CRIT!" : ""} ${isEvasion ? " EVADE!" : ""}`);
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

    playAttrIncrease(value: number, attribute: THeroBattleAttribute) {
        this.setAction(attribute + " +" + value);
        this.changeAttribute(attribute, value);
    }

    playAttrDecrease(value: number, attribute: THeroBattleAttribute) {
        this.setAction(attribute + " -" + value);
        this.changeAttribute(attribute, -value);
    }

    playDead() {
        this.isDead = true;
        this.setAction("DEAD");
        this.actionRect.fillColor = colors.BLACK;
    }

    summonUnit(unit: IBattleUnit) {
        this.setAction("SUMMON " + unit.name);
        this.summonCard.setUnit(unit);
        this.summonCard.setVisible(true);
        return this.summonCard;
    }

    removeSummon() {
        this.summonCard.setVisible(false);
        this.summonCard.removeUnit();
    }

    placeTotem(totem: ITotem) {
        this.setAction("TOTEM " + totem.name);
        this.summonCard.setTotem(totem);
        this.summonCard.setVisible(true);
        return this.summonCard;
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

    /** Increase or descrease unit hp by value (negative value to decrease)*/
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

    addBuff(buff: IBuff) {
        this.setAction("BUFF " + buff.name);
        this.buffs.push(buff);
        this.renderBuffs();
    }

    removeBuff(buff: IBuff) {
        this.setAction("REMOVE BUFF " + buff.name);
        this.buffs = this.buffs.filter((b) => b.type !== buff.type);
        this.renderBuffs();
    }

    addDebuff(debuff: IDebuff) {
        this.setAction("DEBUFF " + debuff.name);
        this.debuffs.push(debuff);
        this.renderDebuffs();
    }

    removeDebuff(debuff: IDebuff) {
        this.setAction("REMOVE DEBUFF " + debuff.name);
        this.debuffs = this.debuffs.filter((db) => db.type !== debuff.type);
        this.renderDebuffs();
    }

    changeAttribute(attribute: THeroBattleAttribute, value: number) {
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
                    this.unit.armor += value;
                    if (this.unit.armor < 0) {
                        this.unit.armor = 0;
                    }
                    this.armorText.setText(this.unit.armor + "arm");
                }
                break;
        }
    }

    applyStatus(statusType: EStatusType, value: number) {
        this.setAction(`${statusType} +${value}`);

        const existingStatus = this.statuses.find((status) => status.type === statusType);
        if (existingStatus) {
            existingStatus.value += value;
        } else {
            this.statuses.push({ type: statusType, value });
        }

        this.renderStatuses();
    }
}
