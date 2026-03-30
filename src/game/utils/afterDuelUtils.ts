import {
    EItemAfterDuelBonusCondition,
    EItemAfterDuelBonusType,
    EItemBonusType,
    EItemTargetType,
    EUnitType,
    IAfterDuelBonus,
    IItem,
    IItemBonus,
    IUnit,
    THeroAttribute,
    TUnits,
} from "../../types";
import { GameScene } from "../scenes/GameScene";
import { addExpToUnit } from "./unitUtils";

export const applyAfterDuelBonuses = (gameScene: GameScene, units: TUnits, isBattleWin: boolean) => {
    units.forEach((unit) => {
        if (!unit) {
            return;
        }
        // check units
        if (unit.afterDuelBonuses) {
            unit.afterDuelBonuses.forEach((bonus) => applyAfterDuelBonus(gameScene, bonus, unit, isBattleWin));
        }
        // check items
        unit.items.forEach((item) => {
            if (item.afterDuelBonuses) {
                item.afterDuelBonuses.forEach((bonus) => {
                    if (item.evolving) applyAfterDuelBonusEvolve(gameScene, bonus, item, isBattleWin, unit.unitType === EUnitType.HERO);
                    else applyAfterDuelBonus(gameScene, bonus, unit, isBattleWin);
                });
            }
        });
    });
};

/**
 *
 * @param gameScene
 * @param bonus afterDuel bonus
 * @param unit Unit who ownes the item with afterDuel bonus
 */
const applyAfterDuelBonus = (gameScene: GameScene, bonus: IAfterDuelBonus, unit: IUnit, isBattleWin: boolean) => {
    const { type, value } = bonus;

    if (bonus.condition === EItemAfterDuelBonusCondition.WON && !isBattleWin) {
        return;
    }
    if (bonus.condition === EItemAfterDuelBonusCondition.LOST && isBattleWin) {
        return;
    }
    if (bonus.condition === EItemAfterDuelBonusCondition.IS_HERO && !(unit.unitType === EUnitType.HERO)) {
        return;
    }
    if (bonus.condition === EItemAfterDuelBonusCondition.IS_MOB && unit.unitType === EUnitType.HERO) {
        return;
    }

    switch (type) {
        case EItemAfterDuelBonusType.EXP:
            {
                addExpToUnit(unit, value);
            }
            break;
        case EItemAfterDuelBonusType.GOLD:
            {
                gameScene.bankController.addToBank(value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_ARMOR:
            {
                unit.basicArmor += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_MAX_HP:
            {
                unit.basicMaxHp += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_HP_REGEN:
            {
                unit.basicHpRegen += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_CRIT_CHANCE:
            {
                unit.basicCritChance += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_EVAS_CHANCE:
            {
                unit.basicEvasionChance += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_MP:
            {
                unit.basicMagicPower += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_PP:
            {
                unit.basicPhysicalPower += value;
            }
            break;
        default:
            console.log("ERROR! No handler for after duel bonus", bonus.type);
    }
};

const evolveBonus = (bonuses: IItemBonus[], attribute: THeroAttribute, value: number) => {
    let found = false;
    bonuses.forEach((b) => {
        if (b.attribute === attribute && !(b.valueType === "percent") && !(b.targetType === EItemTargetType.ALL_ALLIES)) {
            b.value += value;
            found = true;
        }
    });
    if (!found) {
        bonuses.push({
            type: EItemBonusType.ATTRIBUTE,
            value: value,
            attribute: attribute,
            valueType: "number",
        });
    }
};

const applyAfterDuelBonusEvolve = (gameScene: GameScene, bonus: IAfterDuelBonus, item: IItem, isBattleWin: boolean, isUnitHero: boolean) => {
    const { type, value, condition } = bonus;

    if (condition === EItemAfterDuelBonusCondition.WON && !isBattleWin) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.LOST && isBattleWin) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.IS_HERO && !isUnitHero) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.IS_MOB && isUnitHero) {
        return;
    }

    switch (type) {
        case EItemAfterDuelBonusType.STAT_BASIC_ATTACK:
            {
                evolveBonus(item.bonuses, "basicAttack", value);
            }
            break;
        case EItemAfterDuelBonusType.GOLD:
            {
                gameScene.bankController.addToBank(value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_ARMOR:
            {
                evolveBonus(item.bonuses, "basicArmor", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_MAX_HP:
            {
                evolveBonus(item.bonuses, "basicMaxHp", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_HP_REGEN:
            {
                evolveBonus(item.bonuses, "basicHpRegen", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_CRIT_CHANCE:
            {
                evolveBonus(item.bonuses, "basicCritChance", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_EVAS_CHANCE:
            {
                evolveBonus(item.bonuses, "basicEvasionChance", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_MP:
            {
                evolveBonus(item.bonuses, "basicMagicPower", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_PP:
            {
                evolveBonus(item.bonuses, "basicPhysicalPower", value);
            }
            break;
        default:
            console.log("ERROR! No handler for after duel bonus", bonus.type);
    }
};
