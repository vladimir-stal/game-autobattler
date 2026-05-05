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
import { addAttributeToUnit, addExpToUnit } from "./unitUtils";

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
                    if (item.evolving) applyAfterDuelBonusEvolve(gameScene, bonus, item, isBattleWin, unit);
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
                //unit.basicArmor += value;
                addAttributeToUnit(unit, "basicArmor", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_MAX_HP:
            {
                //unit.basicMaxHp += value;
                addAttributeToUnit(unit, "basicMaxHp", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_HP_REGEN:
            {
                //unit.basicHpRegen += value;
                addAttributeToUnit(unit, "basicHpRegen", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_CRIT_CHANCE:
            {
                //unit.basicCritChance += value;
                addAttributeToUnit(unit, "basicCritChance", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_EVAS_CHANCE:
            {
                //unit.basicEvasionChance += value;
                addAttributeToUnit(unit, "basicEvasionChance", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_MP:
            {
                //unit.basicMagicPower += value;
                addAttributeToUnit(unit, "basicMagicPower", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_PP:
            {
                //unit.basicPhysicalPower += value;
                addAttributeToUnit(unit, "basicPhysicalPower", value);
            }
            break;
        case EItemAfterDuelBonusType.STAT_BASIC_ATTACK:
            {
                //unit.basicAttack += value;
                addAttributeToUnit(unit, "basicAttack", value);
            }
            break;
        default:
            console.log("ERROR! No handler for after duel bonus", bonus.type);
    }
};

const evolveBonus = (bonuses: IItemBonus[], attribute: THeroAttribute, value: number) => {
    let found = false;
    bonuses
        .filter((b) => b.attribute === attribute && b.valueType === "evolvedNumber")
        .forEach((b) => {
            b.value += value;
            found = true;
        });
    if (!found) {
        bonuses.push({
            type: EItemBonusType.ATTRIBUTE,
            value: value,
            attribute: attribute,
            valueType: "evolvedNumber",
        });
    }
};

const applyAfterDuelBonusEvolve = (gameScene: GameScene, bonus: IAfterDuelBonus, item: IItem, isBattleWin: boolean, unit: IUnit) => {
    const { type, value, condition } = bonus;

    if (condition === EItemAfterDuelBonusCondition.WON && !isBattleWin) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.LOST && isBattleWin) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.IS_HERO && !(unit.unitType === EUnitType.HERO)) {
        return;
    }
    if (condition === EItemAfterDuelBonusCondition.IS_MOB && unit.unitType === EUnitType.HERO) {
        return;
    }

    switch (type) {
        case EItemAfterDuelBonusType.STAT_BASIC_ATTACK:
            {
                evolveBonus(item.bonuses, "basicAttack", value);
                unit.basicAttack += value;
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
                unit.basicArmor += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_MAX_HP:
            {
                evolveBonus(item.bonuses, "basicMaxHp", value);
                unit.basicMaxHp += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_HP_REGEN:
            {
                evolveBonus(item.bonuses, "basicHpRegen", value);
                unit.basicHpRegen += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_CRIT_CHANCE:
            {
                evolveBonus(item.bonuses, "basicCritChance", value);
                unit.basicCritChance += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_EVAS_CHANCE:
            {
                evolveBonus(item.bonuses, "basicEvasionChance", value);
                unit.basicEvasionChance += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_MP:
            {
                evolveBonus(item.bonuses, "basicMagicPower", value);
                unit.basicMagicPower += value;
            }
            break;
        case EItemAfterDuelBonusType.STAT_PP:
            {
                evolveBonus(item.bonuses, "basicPhysicalPower", value);
                unit.basicPhysicalPower += value;
            }
            break;
        default:
            console.log("ERROR! No handler for after duel bonus", bonus.type);
    }
};
