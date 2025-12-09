import { EItemAfterDuelBonusType, IAfterDuelBonus, IUnit, TUnits } from "../../types";
import { GameScene } from "../scenes/GameScene";
import { addExpToUnit } from "./unitUtils";

export const applyAfterDuelBonuses = (gameScene: GameScene, units: TUnits) => {
    units.forEach((unit) => {
        if (!unit) {
            return;
        }
        // check units
        if (unit.afterDuelBonuses) {
            unit.afterDuelBonuses.forEach((bonus) => applyAfterDuelBonus(gameScene, bonus, unit));
        }
        // check items
        unit.items.forEach((item) => {
            if (item.afterDuelBonuses) {
                item.afterDuelBonuses.forEach((bonus) => {
                    applyAfterDuelBonus(gameScene, bonus, unit);
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
const applyAfterDuelBonus = (gameScene: GameScene, bonus: IAfterDuelBonus, unit: IUnit) => {
    const { type, value } = bonus;
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
