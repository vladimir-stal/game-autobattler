import { GameScene } from "../../scenes/GameScene";
import { EBattleActionType, IBattleAction, IBattleUnit, TBattleRecord, TBattleUnits, TUnits } from "../../../types";
import { colors, i18n } from "../../consts";
import { BattleUnitCard } from "../BattleUnitCard";
import { prepareUnitToBattle } from "../../utils/battleUtils";
import { BattleSummonCard } from "../BattleSummonCard";
import { GameObjects } from "phaser";
import { MAX_WIDTH, MIDDLE_WIDTH, MIN_WIDTH } from "./uiPanels";

const mode: "DEV" | "FAST" = "FAST";

const MIN_DISTANCE_BETWEEN_CARDS = 130;
const MIDDLE_DISTANCE_BETWEEN_CARDS = 160;
const MIDDLE_DISTANCE_BETWEEN_CARDS_2 = 145;
const MAX_DISTANCE_BETWEEN_CARDS = 180;

/** Panel for heroes in duel phase */
export class BattlePanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    playerUnits: TBattleUnits = [];
    enemyUnits: TBattleUnits = [];

    resultRect: GameObjects.Rectangle;
    resultText: GameObjects.Text;
    loadingText: GameObjects.Text;

    cards: Record<string, BattleUnitCard | BattleSummonCard>;

    battleCards: (BattleUnitCard | null)[]; // to handle screen resizing

    currentActionIndex: number;
    currentActiveUnitId: string | undefined;
    record: TBattleRecord;

    isStartBattle: boolean;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.cards = {};
        this.battleCards = [];
        this.setVisible(false);
    }

    show(playerUnits: TUnits, enemyUnits: TUnits) {
        console.log("playerUnits", playerUnits);
        console.log("enemyUnits", enemyUnits);
        this.setVisible(true);

        this.currentActiveUnitId = undefined;
        const player1NumberOfHeroes = playerUnits.filter((u) => !!u).length;
        const player2NumberOfHeroes = enemyUnits.filter((u) => !!u).length;

        this.playerUnits = playerUnits.map((unit, index) => {
            if (!unit) {
                return null;
            }
            const frontRow = (player1NumberOfHeroes <= 2 && index === 0) || (player1NumberOfHeroes > 2 && index <= 1);
            return prepareUnitToBattle(unit, !frontRow);
        });

        if (this.enemyUnits.length < 4) {
            for (let i = 0; i < 4 - this.enemyUnits.length; i++) {
                this.enemyUnits.push(null);
            }
        }

        this.enemyUnits = enemyUnits.map((unit, index) => {
            if (!unit) {
                return null;
            }
            const frontRow = (player2NumberOfHeroes <= 2 && index === 0) || (player2NumberOfHeroes > 2 && index <= 1);
            return prepareUnitToBattle(unit, !frontRow);
        });
        console.log("BattlePanel check", this.playerUnits, this.enemyUnits);
        this.removeAll(true);
        this.renderPlayerUnitsPanel();
        this.renderEnemyUnitsPanel();
        this.renderResultPanel();
    }

    hide() {
        this.setVisible(false);
    }

    showLoading() {
        this.removeAll(true);
        this.loadingText = this.scene.add
            .text(0, 0, i18n.ui.LOADING + "...", {
                fontFamily: "Arial Black",
                fontSize: 40,
                color: "#dddddd",
                fontStyle: "bold",
            })
            .setOrigin(0.5, 0.5)
            .setVisible(true);
        this.add(this.loadingText);
        this.setVisible(true);
    }

    //renderButtons() {
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
    //}

    renderCard(unit: IBattleUnit | null, x: number, y: number, isInverted: boolean, index: number) {
        const card = new BattleUnitCard(this.gameScene, x, y, unit, isInverted);
        this.add(card);
        if (unit) {
            this.cards[unit.id] = card;
        }
        const battleCardIndex = index + (isInverted ? 4 : 0);
        this.battleCards[battleCardIndex] = card;
    }

    renderEmpty(x: number, y: number) {
        const rect = this.scene.add.rectangle(x, y, 100, 200, colors.GREY).setOrigin(0, 0);
        this.add(rect);
    }

    renderPlayerUnitsPanel() {
        const cardDistance = this.getCardDistance();
        this.playerUnits.forEach((unit, index) => {
            const x = -(index + 1) * cardDistance - 50;
            const y = 0;
            this.renderCard(unit, x, y, false, index);
        });
    }

    renderEnemyUnitsPanel() {
        const cardDistance = this.getCardDistance();
        this.enemyUnits.forEach((unit, index) => {
            const x = (index + 1) * cardDistance - 50;
            const y = 0;
            this.renderCard(unit, x, y, true, index);
        });
    }

    renderResultPanel() {
        this.resultRect = this.scene.add.rectangle(0, 0, 400, 100, colors.BLACK).setOrigin(0.5, 0.5).setVisible(false);
        this.resultRect.setStrokeStyle(1, 0x777777);
        this.add(this.resultRect);

        this.resultText = this.scene.add
            .text(0, 0, "", {
                //this.gameScene.camera.width / 2 - 100
                fontFamily: "Arial Black",
                fontSize: 40,
                color: "#dddddd",
                fontStyle: "bold",
            })
            .setOrigin(0.5, 0.5)
            .setVisible(false);
        this.add(this.resultText);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(100, -50, 900, 400, colors.WHITE, 0.2).setOrigin(0, 0);
        this.add(rect);
    }

    stopBattle() {
        this.currentActionIndex = -1;
    }

    async playBattle(record: TBattleRecord) {
        this.isStartBattle = true;
        console.log(">>>>>>>>>> visualizeBattle", record);
        this.record = record;
        this.currentActionIndex = 0;

        // record.forEach((action) => {
        //     console.log("ACTION!");
        // });

        this.resultRect.setVisible(true);
        this.resultText.setVisible(true);
        this.resultText.setText(i18n.ui.PREPARE);

        await new Promise((resolve) => {
            setTimeout(() => {
                this.resultRect.setVisible(false);
                this.resultText.setVisible(false);
                resolve(0);
            }, 800);
        });

        this.playAction(this.record[0]);
    }

    skipBattle() {
        console.log("skip battle");
        this.currentActionIndex = this.record.length - 1;
    }

    playNextAction() {
        if (this.currentActionIndex === -1 || this.currentActionIndex === this.record.length - 1) {
            console.log("Battle is over");

            this.showResults();

            return;
        }
        this.currentActionIndex++;
        this.playAction(this.record[this.currentActionIndex]);
    }

    // resetAllActions() {
    //     Object.values(this.cards).forEach((card) => {
    //         if (!card.isDead) {
    //             card.resetActionPanel();
    //         }
    //     });
    // }

    async playAction(action: IBattleAction) {
        console.log("PLAY ACTION", action);
        if (this.currentActionIndex === -1 || this.currentActionIndex === this.record.length - 1) {
            console.log("Battle is over");
            this.showResults();
            return;
        }
        const {
            type,
            unitId,
            value,
            value2,
            armorValue,
            name,
            targetId,
            status,
            attribute,
            summon,
            totem,
            buff,
            debuff,
            buffTargets,
            isCrit,
            skill,
            targets,
            isStartBattle,
            animation,
        } = action;
        if (!unitId) {
            this.playNextAction();
            return;
        }

        if (this.isStartBattle && !isStartBattle) {
            // start battle is over
            this.isStartBattle = false;

            this.resultRect.setVisible(true);
            this.resultText.setVisible(true);
            this.resultText.setText(i18n.ui.DUEL);

            await new Promise((resolve) => {
                setTimeout(() => {
                    this.resultRect.setVisible(false);
                    this.resultText.setVisible(false);
                    resolve(0);
                }, 1500);
            });
        }

        switch (type) {
            case EBattleActionType.ATTACK:
                {
                    action.targets?.forEach((target) => {
                        const { damageValue, targetId, armorValue, isEvasion } = target;
                        const { unit } = this.cards[unitId];
                        if (damageValue === undefined) {
                            const cardsT = { ...this.cards };
                            console.log("BattlePanel > ATTACK ERROR", this.cards.length, cardsT, unitId, unit, damageValue);
                            return;
                        }

                        this.cards[targetId].playEffect(unit || undefined, skill);
                        setTimeout(() => {
                            this.cards[targetId].playTakeDamage(damageValue, armorValue || 0, { status, isCrit, isEvasion });
                        }, 700);
                    });

                    await this.cards[unitId].playAttack(value, skill);
                    this.playNextAction();
                }
                break;
            case EBattleActionType.ATTRIBUTE_INCREASE:
                {
                    console.log("Attr Increase:", targets);
                    if (targets) {
                        targets.forEach((target) => {
                            const { targetId, value, attribute } = target;
                            if (value === undefined || !attribute) {
                                return;
                            } else {
                                setTimeout(() => {
                                    this.cards[targetId].playAttrIncreaseTarget(value, attribute);
                                }, 1000);
                            }
                        });
                    } else {
                        if (!attribute || value === undefined || !targetId) {
                            console.error("ERROR! no attribute or value", type);
                            return;
                        }
                        setTimeout(() => {
                            this.cards[targetId].playAttrIncreaseTarget(value, attribute);
                        }, 1000);
                    }

                    await this.cards[unitId].playAttrIncrease(skill);

                    this.playNextAction();
                }
                break;
            case EBattleActionType.ATTRIBUTE_DECREASE:
                {
                    if (targets) {
                        targets.forEach((target) => {
                            const { targetId, value, attribute } = target;
                            if (value === undefined || !attribute) {
                                return;
                            }
                            setTimeout(() => {
                                this.cards[targetId].playAttrDecreaseTarget(value, attribute);
                            }, 1500);
                        });
                    } else {
                        if (!attribute || value === undefined || !targetId) {
                            console.error("ERROR! no attribute or value", type);
                            return;
                        }
                        setTimeout(() => {
                            this.cards[targetId].playAttrDecreaseTarget(value, attribute);
                        }, 1500);
                    }

                    this.cards[unitId].playAttrDecrease(skill);

                    setTimeout(() => {
                        this.playNextAction();
                    }, 1000);
                }
                break;
            case EBattleActionType.BUFF:
                {
                    if (!buff || !buffTargets) {
                        console.error("ERROR! no buff or buffTargets", type);
                        return;
                    }

                    buffTargets.forEach((buffTarget) => {
                        setTimeout(() => {
                            this.cards[buffTarget.targetId]?.addBuff(buff, buffTarget);
                        }, 1000);
                    });

                    await this.cards[unitId].playBuff(buff, skill);

                    //if (mode === "FAST") {
                    this.playNextAction();
                    // } else {
                    //     setTimeout(() => {
                    //         this.playNextAction();
                    //     }, 1000);
                    // }
                }
                break;
            case EBattleActionType.BUFF_VALUE_CHANGED:
                {
                    this.cards[targetId]?.renderBuffs();
                    this.playNextAction();
                }
                break;
            case EBattleActionType.BUFF_REMOVED:
                {
                    if (!buff) {
                        console.error("ERROR! no buff", type);
                        return;
                    }

                    this.cards[unitId].removeBuff(buff);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.DEATH:
                {
                    //console.log("PLAY ACTION >>>>> DEATH");
                    this.cards[unitId].playDead();

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.DEBUFF:
                {
                    if (!debuff || !buffTargets) {
                        console.error("ERROR! no debuff", type);
                        return;
                    }
                    this.cards[unitId].setAction("DEBUFF " + debuff.name);

                    buffTargets.forEach((debuffTarget) => {
                        this.cards[debuffTarget.targetId].addDebuff(debuff, debuffTarget);
                    });

                    await this.cards[unitId].playDebuff(skill);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.DEBUFF_REMOVE:
                {
                    if (!debuff || !targetId) {
                        console.error("ERROR! no debuff", type);
                        return;
                    }

                    this.cards[targetId].removeDebuff(debuff);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.HEAL:
                {
                    if (!targetId || value === undefined) {
                        console.error("ERROR! no targetId or value", type);
                        return;
                    }

                    console.log("HEAL", unitId, targetId, this.cards);
                    this.cards[targetId].playHealEffect();
                    await this.cards[unitId].playHeal(value);
                    this.cards[targetId].playHealed(value);
                    //setTimeout(() => {
                    this.playNextAction();
                    //}, 1000);
                }
                break;
            case EBattleActionType.PEFORM_SKILLSET:
                {
                    if (!unitId || !name) {
                        console.error("ERROR! no unitId", type);
                        return;
                    }

                    await this.cards[unitId].playSkillSet(name, animation);

                    this.playNextAction();
                }
                break;
            case EBattleActionType.REGEN_HP:
                {
                    console.log("REGEN_HP action", unitId, this.currentActiveUnitId);
                    if (value === undefined) {
                        console.error("ERROR! no value", type);
                        return;
                    }
                    //this.cards[unitId].setAction("REGEN " + value);
                    this.cards[unitId].playRegenHp(value);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.SKILL_CHAIN:
                {
                    this.cards[unitId].setAction("SKILl CHAIN !");

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.STATUS_APPLY:
                {
                    if (!targetId || value === undefined || !status) {
                        console.error("ERROR! no attribute or value or status", type);
                        return;
                    }

                    this.cards[targetId].applyStatus(status, value);
                    await this.cards[unitId].playApplyStatus(skill);

                    //setTimeout(() => {
                    this.playNextAction();
                    //}, 1000);
                }
                break;
            case EBattleActionType.STATUS_REMOVE:
                {
                    if (!targetId || !status) {
                        console.error("ERROR! no attribute or value or status", type);
                        return;
                    }
                    //this.cards[targetId].setAction(`Remove ${status}`);
                    this.cards[targetId].removeStatus(status);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.SUMMON:
                {
                    //if (!summon || !this.currentActiveUnitId) {
                    if (!summon || !unitId) {
                        console.error("ERROR! no summon", type);
                        return;
                    }
                    const summonCard = await this.cards[unitId].summonUnit(summon, skill);
                    this.cards[summon.id] = summonCard;

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
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

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
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

                    this.cards[unitId].playTakeDamage(value, armorValue || 0, { status, skill });

                    if (mode === "FAST") {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 500);
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.TOTEM_PLACE:
                {
                    //if (!totem || !this.currentActiveUnitId) {
                    if (!totem) {
                        console.error("ERROR! no totem", type);
                        return;
                    }
                    //const totemCard = await this.cards[this.currentActiveUnitId].placeTotem(totem, skill);
                    const totemCard = await this.cards[unitId].placeTotem(totem, skill);
                    console.log("place totem > ", totem.id, totemCard);
                    this.cards[totem.id] = totemCard;
                    //setTimeout(() => {
                    this.playNextAction();
                    //}, 1000);
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

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.TOTEM_INCREASE_VALUE:
                {
                    if (!totem) {
                        return;
                    }

                    this.cards[unitId].setAction("" + name);
                    this.cards[totem.id].refresh();

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            case EBattleActionType.TURN_START:
                {
                    //console.log("ACTION > TURN_START", unitId, this.cards);
                    if (this.currentActiveUnitId) {
                        console.log("ACTION > TURN_START currentActiveUnitId > ", this.currentActiveUnitId);
                        this.cards[this.currentActiveUnitId]?.setIsActive(false);
                    }
                    this.currentActiveUnitId = unitId;
                    this.cards[unitId]?.setIsActive(true);

                    if (mode === "FAST") {
                        this.playNextAction();
                    } else {
                        setTimeout(() => {
                            this.playNextAction();
                        }, 1000);
                    }
                }
                break;
            default: {
                console.log("NO HANDLER FOR ACTION TYPE", type);
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

    showResults() {
        this.resultRect.setVisible(true);
        this.resultText.setVisible(true);
        this.resultText.setText(this.gameScene.battleController.isBattleWin ? i18n.ui.VICTORY : i18n.ui.DEFEAT);

        this.gameScene.topPanel.changeSelectButtonToNext();
    }

    private getCardDistance() {
        const { width } = this.gameScene.camera;
        let cardDistance = MAX_WIDTH;
        if (width >= MAX_WIDTH) {
            cardDistance = MAX_DISTANCE_BETWEEN_CARDS;
        } else if (width >= MIDDLE_WIDTH) {
            cardDistance = MIDDLE_DISTANCE_BETWEEN_CARDS;
        } else if (width >= MIN_WIDTH) {
            cardDistance = MIDDLE_DISTANCE_BETWEEN_CARDS_2;
        } else {
            cardDistance = MIN_DISTANCE_BETWEEN_CARDS;
        }
        return cardDistance;
    }

    refreshAfterResize() {
        const cardDistance = this.getCardDistance();

        this.battleCards.forEach((card, index) => {
            if (!card) {
                return;
            }
            const playerCard = index < 4;
            if (playerCard) {
                const x = -(index + 1) * cardDistance - 50;
                card.setX(x);
            } else {
                const x = (index + 1 - 4) * cardDistance - 50;
                card.setX(x);
            }
        });
    }
}
