import { GameScene } from "../../scenes/GameScene";
import { EBattleActionType, IBattleAction, IBattleUnit, TBattleRecord, TBattleUnits, TUnits } from "../../../types";
import { colors } from "../../consts";
import { BattleUnitCard } from "../BattleUnitCard";
import { prepareUnitToBattle } from "../../utils/battleUtils";
import { BattleSummonCard } from "../BattleSummonCard";

/** Panel for heroes in duel phase */
export class BattlePanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    playerUnits: TBattleUnits = [];
    enemyUnits: TBattleUnits = [];

    cards: Record<string, BattleUnitCard | BattleSummonCard>;

    currentActionIndex: number;
    currentActiveUnitId: string | undefined;
    record: TBattleRecord;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.cards = {};
        this.setVisible(false);
    }

    show(playerUnits: TUnits, enemyUnits: TUnits) {
        //console.log("enemyUnits", enemyUnits);
        this.setVisible(true);

        this.currentActiveUnitId = undefined;

        this.playerUnits = playerUnits.map((unit) => {
            if (!unit) {
                return null;
            }
            return prepareUnitToBattle(unit);
        });
        this.enemyUnits = enemyUnits.map((unit) => {
            if (!unit) {
                return null;
            }
            return prepareUnitToBattle(unit);
        });
        this.removeAll(true);
        this.renderPlayerUnitsPanel();
        this.renderEnemyUnitsPanel();
        this.renderButtons();
    }

    hide() {
        this.setVisible(false);
    }

    renderButtons() {
        // const skipButton = this.scene.add
        //     .text(0, -100, "SKIP")
        //     .setInteractive()
        //     .on(Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        //         skipButton.setColor("#FF7777");
        //     })
        //     .on(Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        //         skipButton.setColor("#FFFFFF");
        //     })
        //     .on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        //         console.log("skip click");
        //         this.skipBattle();
        //     });
        // this.add(skipButton);
    }

    renderCard(unit: IBattleUnit | null, x: number, y: number, isInverted: boolean) {
        const card = new BattleUnitCard(this.gameScene, x, y, unit, isInverted);
        this.add(card);
        if (unit) {
            this.cards[unit.id] = card;
        }
    }

    renderEmpty(x: number, y: number) {
        const rect = this.scene.add.rectangle(x, y, 100, 200, colors.GREY).setOrigin(0, 0);
        this.add(rect);
    }

    renderPlayerUnitsPanel() {
        this.playerUnits.forEach((unit, index) => {
            const x = (3 - index) * 200;
            const y = 0;
            this.renderCard(unit, x, y, false);
        });
    }

    renderEnemyUnitsPanel() {
        this.enemyUnits.forEach((unit, index) => {
            const x = 900 + index * 200;
            const y = 0;
            this.renderCard(unit, x, y, true);
        });
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(100, -50, 900, 400, colors.WHITE, 0.2).setOrigin(0, 0);
        this.add(rect);
    }

    playBattle(record: TBattleRecord) {
        console.log("visualizeBattle", record);
        this.record = record;
        this.currentActionIndex = 0;

        // record.forEach((action) => {
        //     console.log("ACTION!");
        // });
        this.playAction(this.record[0]);
    }

    skipBattle() {
        console.log("skip battle");
        this.currentActionIndex = this.record.length - 1;
    }

    playNextAction() {
        if (this.currentActionIndex === this.record.length - 1) {
            console.log("Battle is over");
            return;
        }
        this.currentActionIndex++;
        this.playAction(this.record[this.currentActionIndex]);
    }

    resetAllActions() {
        Object.values(this.cards).forEach((card) => {
            if (!card.isDead) {
                card.resetActionPanel();
            }
        });
    }

    playAction(action: IBattleAction) {
        if (this.currentActionIndex === this.record.length - 1) {
            console.log("Battle is over");
            return;
        }
        const { type, unitId, value, value2, name, targetId, status, attribute, summon, totem, buff, debuff, buffTargets, isCrit } = action;
        if (!unitId) {
            this.playNextAction();
            return;
        }

        if (type !== EBattleActionType.TAKE_DAMAGE) {
            this.resetAllActions();
        }

        switch (type) {
            case EBattleActionType.ATTACK:
                {
                    this.cards[unitId].setAction("ATTACK " + value);
                    this.cards[unitId].playAttack();
                    action.targets?.forEach((target) => {
                        const { damageValue, targetId, armorValue, isEvasion } = target;
                        console.log("targetId", targetId, this.cards);

                        this.cards[targetId].playTakeDamage(damageValue, armorValue || 0, status, isCrit, isEvasion);
                    });
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.ATTRIBUTE_INCREASE:
                {
                    if (!attribute || value === undefined || !targetId) {
                        console.error("ERROR! no attribute or value", type);
                        return;
                    }
                    this.cards[unitId].setAction("ATTR INC");
                    this.cards[targetId].playAttrIncrease(value, attribute);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.ATTRIBUTE_DECREASE:
                {
                    if (!attribute || value === undefined || !targetId) {
                        console.error("ERROR! no attribute or value", type);
                        return;
                    }
                    this.cards[unitId].setAction("ATTR DESC");
                    this.cards[targetId].playAttrDecrease(value, attribute);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.BUFF:
                {
                    if (!buff || !buffTargets) {
                        console.error("ERROR! no buff", type);
                        return;
                    }

                    buffTargets.forEach((buffTarget) => {
                        this.cards[buffTarget.targetId].addBuff(buff);
                    });

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.BUFF_REMOVED:
                {
                    if (!buff) {
                        console.error("ERROR! no buff", type);
                        return;
                    }

                    this.cards[unitId].removeBuff(buff);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.DEATH:
                {
                    this.cards[unitId].playDead();

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.DEBUFF:
                {
                    if (!debuff || !buffTargets) {
                        console.error("ERROR! no debuff", type);
                        return;
                    }
                    this.cards[unitId].setAction("DEBUFF " + debuff.name);

                    buffTargets.forEach((buffTarget) => {
                        this.cards[buffTarget.targetId].addDebuff(debuff);
                    });

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.DEBUFF_REMOVE:
                {
                    if (!debuff || !targetId) {
                        console.error("ERROR! no debuff", type);
                        return;
                    }

                    this.cards[targetId].removeDebuff(debuff);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.HEAL:
                {
                    if (!targetId || value === undefined) {
                        console.error("ERROR! no targetId or value", type);
                        return;
                    }
                    console.log("HEAL", unitId, targetId, this.cards);
                    this.cards[unitId].playHeal(value);
                    this.cards[targetId].playHealed(value);
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.REGEN_HP:
                {
                    if (value === undefined || !this.currentActiveUnitId) {
                        console.error("ERROR! no value", type);
                        return;
                    }
                    this.cards[this.currentActiveUnitId].setAction("REGEN " + value);
                    this.cards[this.currentActiveUnitId].playRegenHp(value);
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.SKILL_CHAIN:
                {
                    this.cards[unitId].setAction("SKILl CHAIN !");
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.STATUS_APPLY:
                {
                    if (!targetId || value === undefined || !status) {
                        console.error("ERROR! no attribute or value or status", type);
                        return;
                    }

                    this.cards[targetId].applyStatus(status, value);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.STATUS_REMOVE:
                {
                    if (!targetId || !status) {
                        console.error("ERROR! no attribute or value or status", type);
                        return;
                    }
                    this.cards[targetId].setAction(`Remove ${status}`);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.SUMMON:
                {
                    if (!summon || !this.currentActiveUnitId) {
                        console.error("ERROR! no summon", type);
                        return;
                    }
                    const summonCard = this.cards[this.currentActiveUnitId].summonUnit(summon);
                    this.cards[summon.id] = summonCard;
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.SUMMON_REMOVE:
                {
                    if (!targetId) {
                        console.error("ERROR! no targetId", type);
                        return;
                    }

                    const targetCard = this.cards[targetId];
                    const unitCard = this.cards[unitId];
                    unitCard.setAction("Remove summon");

                    const summonId = (targetCard as BattleUnitCard).summonCard.unit?.id;
                    if (summonId) {
                        delete this.cards[summonId];
                    }
                    targetCard.removeSummon();

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.SWAP_HP:
                {
                    if (!targetId || value === undefined || value2 === undefined) {
                        console.error("ERROR! no targetId", type);
                        return;
                    }
                    this.cards[unitId].setAction("SWAP HP");
                    this.cards[unitId].setHp(value);
                    this.cards[targetId].setHp(value2);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TAKE_DAMAGE:
                {
                    if (value === undefined) {
                        console.error("ERROR! no value", type);
                        return;
                    }

                    this.cards[unitId].playTakeDamage(value, 0, status);
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TAKE_ARMOR_DAMAGE:
                {
                    if (value === undefined) {
                        console.error("ERROR! no value", type);
                        return;
                    }

                    this.cards[unitId].playTakeArmorDamage(value, status);
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TOTEM_PLACE:
                {
                    if (!totem || !this.currentActiveUnitId) {
                        console.error("ERROR! no totem", type);
                        return;
                    }
                    const totemCard = this.cards[this.currentActiveUnitId].placeTotem(totem);
                    this.cards[totem.id] = totemCard;
                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TOTEM_REMOVE:
                {
                    if (!targetId) {
                        console.error("ERROR! no targetId", type);
                        return;
                    }

                    const targetCard = this.cards[targetId];
                    const unitCard = this.cards[unitId];
                    unitCard.setAction("Remove totem");

                    const totemId = (targetCard as BattleUnitCard).summonCard.totem?.id;
                    if (totemId) {
                        delete this.cards[totemId];
                    }
                    ///this.cards[(totemCard as BattleUnitCard).summonCard.totem?.id].removeTotem();
                    targetCard.removeTotem();

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TOTEM_INCREASE_VALUE:
                {
                    if (!totem) {
                        return;
                    }

                    this.cards[unitId].setAction("" + name);
                    this.cards[totem.id].refresh();

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.TURN_START:
                {
                    console.log("ACTION > TURN_START", unitId, this.cards);
                    if (this.currentActiveUnitId) {
                        this.cards[this.currentActiveUnitId].setIsActive(false);
                    }
                    this.currentActiveUnitId = unitId;
                    this.cards[unitId].setIsActive(true);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            default: {
                this.playNextAction();
            }
        }
    }

    clear() {
        this.cards = {};
        this.playerUnits = [];
        this.enemyUnits = [];
        this.currentActionIndex = 0;
    }
}
