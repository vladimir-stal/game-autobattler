import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { colors } from "../consts";
import { EStatusType, IBattleUnit, IBuff, IDebuff, ITotem, IUnit, THeroBattleAttribute } from "../../types";
import { IMAGE_TOTEM_ATTACK } from "../utils/imageLoadUtil";

/** Card to show summoned unit or totem in battle  */
export class BattleSummonCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    rect: GameObjects.Rectangle;
    titleText: GameObjects.Text;
    turnRect: GameObjects.Rectangle;
    actionRect: GameObjects.Rectangle;
    actionText: GameObjects.Text;

    //
    hpText: GameObjects.Text;
    armorText: GameObjects.Text;
    attackText: GameObjects.Text;

    unit: IBattleUnit | null;
    totem: ITotem | null;
    title: string;

    isDead: boolean;

    constructor(scene: GameScene, x: number, y: number, unit: IBattleUnit | null) {
        super(scene, x, y);
        this.gameScene = scene;
        this.unit = unit;
        this.render();
    }

    render() {
        this.renderBorder();
        this.renderPanels();

        if (this.unit) {
            this.renderUnit();
        }
        if (this.totem) {
            this.renderTotem();
        }
    }

    renderPanels() {
        this.turnRect = this.scene.add.rectangle(0, 105, 100, 20, colors.GREY).setOrigin(0, 0);
        this.add(this.turnRect);
        this.actionRect = this.scene.add.rectangle(0, -25, 100, 20, colors.GREY).setOrigin(0, 0);
        this.add(this.actionRect);
        this.actionText = this.scene.add.text(20, -20, "", { fontSize: 12, color: "#dddddd" });
        this.add(this.actionText);
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
        this.title = name + "(" + level + ")";

        this.titleText = this.scene.add.text(10, 10, this.title, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);

        this.hpText = this.scene.add.text(10, 50, hp + "/" + maxHp + " hp", { fontSize: 12, color: "#dddddd" });
        this.add(this.hpText);

        this.attackText = this.scene.add.text(10, 30, basicAttack + " attack", { fontSize: 12, color: "#dddddd" });
        this.add(this.attackText);

        this.armorText = this.scene.add.text(10, 70, armor + " armor", { fontSize: 12, color: "#dddddd" });
        this.armorText.setVisible(armor > 0);
        this.add(this.armorText);
    }

    renderTotem() {
        if (!this.totem) {
            return;
        }

        console.log("renderTotem", this.totem);

        const { name } = this.totem;

        this.titleText = this.scene.add.text(10, 10, name, { fontSize: 12, color: "#dddddd" });
        this.add(this.titleText);

        const totemImage = this.scene.add.sprite(50, 70, IMAGE_TOTEM_ATTACK).setDisplaySize(85, 150);
        this.add(totemImage);
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

    playAttack() {}

    playHeal() {}

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

        setTimeout(() => {
            this.setVisible(false);
            this.clearUnit();
        }, 1000);
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
        this.armorText.setText(this.unit.armor + " armor");
    }

    summonUnit(unit: IUnit) {
        return this;
    }

    placeTotem(totem: ITotem) {
        return this;
    }

    setUnit(unit: IBattleUnit) {
        this.unit = unit;
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
        this.titleText.destroy();
        this.hpText.destroy();
        this.armorText.destroy();
    }

    addBuff(buff: IBuff) {}

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
                    this.attackText.setText(this.unit.attack + " attack");
                }
                break;
            case "armor":
                {
                    this.unit.armor += value;
                    this.armorText.setText(this.unit.armor + " armor");
                }
                break;
        }
    }

    applyStatus(statusType: EStatusType, value: number) {}
}
