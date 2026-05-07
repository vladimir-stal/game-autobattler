import {
    EAppTriggerType,
    EBattleActionType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroClassType,
    EItemBattleBonusType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    EUnitType,
    IAppTrigger,
    IBattleAction,
    IBattleTrigger,
    IBattleUnit,
    IBuff,
    IDebuff,
    IHeroSkill,
    IItemBattleBonus,
    ITotem,
    IUnit,
    TBattleRecord,
    TBattleUnits,
    THeroAttribute,
    THeroBattleAttribute,
    TValueType,
} from "../../types";
import { allyTargets, CRIT_MODIFIER } from "../battleConsts";
import { BattleController } from "../components/BattleController";
import { noBasicAttackSkill } from "../skills/commonSkillConsts";
import { getRandomArrayItem, getRandomIntFromInterval } from "./commonUtils";
import { checkUnitBasicClass, getMcHeroByClass, getMulticlassSubclasses } from "./heroUtils";
import { getHeroClassesWeaponItems } from "./itemUtils";
import { emptyUnit, generateId, generateUnitId } from "./unitUtils";

export const emptyBattleUnit: IBattleUnit = {
    ...emptyUnit,
    armor: 0,
    attack: 0,
    buffs: [],
    critChance: 0,
    currentSkillIndex: 0,
    customNumber: 0,
    debuffs: [],
    evasionChance: 0,
    hp: 0,
    hpRegen: 0,
    isSummon: false,
    itemBonuses: [],
    magicPower: 0,
    maxHp: 0,
    physicalPower: 0,
    statuses: [],
    isBackRowPosition: false,
};

export const getFirstTarget = (units: TBattleUnits) => {
    return units.find((unit) => unit && unit.hp > 0) || null;
};

export const getSecondTarget = (units: TBattleUnits) => {
    let isFirstTargetFound = false;
    let isSecondTargetFound = false;
    return units.reduce((result, unit) => {
        if (isSecondTargetFound) {
            return result;
        }
        if (unit && unit.hp > 0) {
            if (!isFirstTargetFound) {
                isFirstTargetFound = true;
            } else {
                isSecondTargetFound = true;
            }
            return unit;
        }
        return result;
    }, null);
};

export const getFirstTwoTargets = (units: TBattleUnits): IBattleUnit[] => {
    const result: IBattleUnit[] = [];
    let unitsFoundCount = 0;
    units.forEach((unit) => {
        if (unit && unit.hp > 0) {
            if (unitsFoundCount < 2) {
                result.push(unit);
                unitsFoundCount++;
            }
        }
    });
    return result;
};

export const getFirstThreeTargets = (units: TBattleUnits): IBattleUnit[] => {
    const result: IBattleUnit[] = [];
    let unitsFoundCount = 0;
    units.forEach((unit) => {
        if (unit && unit.hp > 0) {
            if (unitsFoundCount < 3) {
                result.push(unit);
                unitsFoundCount++;
            }
        }
    });
    return result;
};

export const getAllyTargetInFront = (unitId: string, units: TBattleUnits): IBattleUnit | null => {
    const unitIndex = units.findIndex((unit) => unit && unit.hp > 0 && unit.id === unitId);
    if (unitIndex === -1) {
        return null;
    }
    if (unitIndex === 0) {
        return units[0];
    }

    let unitInFront = units[unitIndex - 1];
    if (unitInFront && unitInFront.hp > 0) {
        return unitInFront;
    }

    if (unitIndex === 1) {
        return units[1];
    }

    unitInFront = units[unitIndex - 2];
    if (unitInFront && unitInFront.hp > 0) {
        return unitInFront;
    }

    if (unitIndex === 2) {
        return units[2];
    }

    unitInFront = units[unitIndex - 3];
    if (unitInFront && unitInFront.hp > 0) {
        return unitInFront;
    }

    return units[3];
};

export const getAllyTargetBehind = (unitId: string, units: TBattleUnits): IBattleUnit | null => {
    const unitIndex = units.findIndex((unit) => unit && unit.hp > 0 && unit.id === unitId);
    console.log("getAllyTargetBehind >", unitId, unitIndex, units);
    if (unitIndex === -1) {
        return null;
    }
    if (unitIndex === 3) {
        return units[3];
    }

    let unitBehind = units[unitIndex + 1];
    if (unitBehind && unitBehind.hp > 0) {
        return unitBehind;
    }

    if (unitIndex === 2) {
        return units[2];
    }

    unitBehind = units[unitIndex + 2];
    if (unitBehind && unitBehind.hp > 0) {
        return unitBehind;
    }

    if (unitIndex === 1) {
        return units[1];
    }

    unitBehind = units[unitIndex + 3];
    if (unitBehind && unitBehind.hp > 0) {
        return unitBehind;
    }

    return units[0];
};

export const getHighestAttributeTarget = (units: TBattleUnits, attr: THeroBattleAttribute): IBattleUnit | null => {
    return units.reduce((result, unit) => {
        if (unit && unit.hp > 0) {
            if (!result) {
                return unit;
            }
            return unit[attr] > result[attr] ? unit : result;
        }
        return result;
    }, null);
};

export const getHighestStatusTarget = (units: TBattleUnits, statusType: EStatusType): IBattleUnit | null => {
    const initial: { unit: IBattleUnit | null; statusValue: number } = { unit: null, statusValue: 0 };
    return units.reduce((result, unit) => {
        if (!unit) {
            return result;
        }

        if (unit && unit.hp > 0) {
            const statusValue = unit.statuses.find((status) => status.type === statusType)?.value || 0;

            if (!result.unit) {
                return { unit, statusValue };
            }

            return statusValue > result.statusValue ? { unit, statusValue } : result;
        }
        return result;
    }, initial).unit;
};

export const getLowHpTarget = (units: TBattleUnits): IBattleUnit | null => {
    return units.reduce((result, unit) => {
        if (unit && unit.hp > 0) {
            if (!result || unit.hp < result.hp) {
                return unit;
            }
        }
        return result;
    }, null);
};

export const getLowHpPercentTarget = (units: TBattleUnits): IBattleUnit | null => {
    return units.reduce((result, unit) => {
        if (unit && unit.hp > 0) {
            if (!result || unit.hp / unit.maxHp < result.hp / result.maxHp) {
                return unit;
            }
        }
        return result;
    }, null);
};
export const getHighHpPercentTarget = (units: TBattleUnits): IBattleUnit | null => {
    return units.reduce((result, unit) => {
        if (unit && unit.hp > 0) {
            if (!result || unit.hp / unit.maxHp > result.hp / result.maxHp) {
                return unit;
            }
        }
        return result;
    }, null);
};

export const getMarkedTarget = (units: TBattleUnits, debuffType: EDebuffType): IBattleUnit | null => {
    return units.find((unit) => unit && unit.hp > 0 && unit?.debuffs.find((db) => db.type === debuffType)) || getFirstTarget(units);
};

export const getRandomTarget = (units: TBattleUnits) => {
    return getRandomArrayItem(units.filter((unit) => unit && unit.hp > 0));
};

// export const getTarget = (units: TBattleUnits, targetType: ETargetType) => {
//     switch (targetType) {
//         case ETargetType.FIRST_ENEMY:
//             return getFirstTarget(units);
//         case ETargetType.RANDOM_ENEMY:
//             return getRandomTarget(units);
//         default:
//             return null;
//     }
// };

const getAllAllySummons = (units: TBattleUnits) => {
    return units.reduce((summons, unit) => {
        if (!unit) {
            return summons;
        }
        if (unit.summon) {
            summons.push(unit.summon);
        }
        return summons;
    }, [] as IBattleUnit[]);
};

const getBuffedAllies = (units: TBattleUnits): IBattleUnit[] => {
    return units
        .filter((unit) => unit !== null)
        .filter((unit) => unit.buffs.length)
        .filter((unit) => unit.buffs.some((buff) => !buff.cannotBeTargeted));
};

const getDebuffedAllies = (units: TBattleUnits): IBattleUnit[] => {
    return units
        .filter((unit) => unit !== null)
        .filter((unit) => unit.debuffs.length)
        .filter((unit) => unit.debuffs.some((debuff) => !debuff.cannotBeTargeted));
};

const isAliveUnit = (unit: IBattleUnit | null): unit is IBattleUnit => !!unit && unit.hp > 0;

export const getAllyTargets = (unit: IBattleUnit, units: TBattleUnits, targetType: ETargetType, targetUnitId?: string): IBattleUnit[] | null => {
    //console.log("getAllyTargets", units, targetType, targetUnitId);
    switch (targetType) {
        case ETargetType.BY_UNIT_ID: {
            const targetUnit = units.find((allyUnit) => allyUnit && allyUnit.id === targetUnitId);
            return targetUnit ? [targetUnit] : null;
        }
        case ETargetType.ALL_ALLIES:
            return units.filter((unit) => isAliveUnit(unit));
        case ETargetType.ALL_ALLY_SUMMONS:
            return getAllAllySummons(units);
        case ETargetType.ALLY_IN_FRONT: {
            const unitId = unit.isSummon ? units.find((allyUnit) => allyUnit && allyUnit.summon === unit)?.id : unit.id;
            const allyInFront = getAllyTargetInFront(unitId ? unitId : unit.id, units);
            return allyInFront ? [allyInFront] : null;
        }
        case ETargetType.ALLY_BEHIND: {
            const unitId = unit.isSummon ? units.find((allyUnit) => allyUnit && allyUnit.summon === unit)?.id : unit.id;
            const allyBehind = getAllyTargetBehind(unitId ? unitId : unit.id, units);
            return allyBehind ? [allyBehind] : null;
        }
        case ETargetType.BUFFED_ALLY_RANDOM: {
            const buffedAllies = getBuffedAllies(units);
            return buffedAllies?.length ? [getRandomArrayItem(buffedAllies)] : null;
        }
        case ETargetType.DEBUFFED_ALLY_RANDOM: {
            const debuffedAllies = getDebuffedAllies(units);
            return debuffedAllies?.length ? [getRandomArrayItem(debuffedAllies)] : null;
        }
        case ETargetType.FIRST_ALLY: {
            const firstTarget = getFirstTarget(units);
            return firstTarget ? [firstTarget] : null;
        }
        case ETargetType.HIGH_MP_ALLY: {
            const target = getHighestAttributeTarget(units, "magicPower");
            return target ? [target] : null;
        }
        case ETargetType.HIGH_PP_ALLY: {
            const target = getHighestAttributeTarget(units, "physicalPower");
            return target ? [target] : null;
        }
        case ETargetType.LOW_HP_ALLY: {
            // changed logic from MIN(unit.hp) to MAX(unit.maxHp - unit.hp)
            // (from lowest hp to highest recieved damage, so it won't target full hp feeble units)
            const lowestHpAlly = getLowHpTarget(units);
            //console.log("LOWEST hp ALLy", lowestHpAlly, units);
            return lowestHpAlly ? [lowestHpAlly] : null;
        }
        case ETargetType.LOW_PERCENT_ALLY: {
            // changed logic from MIN(unit.hp) to MAX(unit.maxHp - unit.hp)
            // (from lowest hp to highest recieved damage, so it won't target full hp feeble units)
            const lowestHpAlly = getLowHpPercentTarget(units);
            //console.log("LOWEST hp ALLy", lowestHpAlly, units);
            return lowestHpAlly ? [lowestHpAlly] : null;
        }
        case ETargetType.RANDOM_ALLY: {
            return [getRandomArrayItem(units.filter((unit) => unit !== null))];
        }
        case ETargetType.RANDOM_ALLY_EXCEPT_ID: {
            const target = getRandomArrayItem(units.filter((unit) => unit !== null && unit.id !== targetUnitId));
            return target ? [] : null;
        }
        case ETargetType.SELF:
            return [unit];
        case ETargetType.SUMMON_CURRENT:
            return unit.summon ? [unit.summon] : null;
        default:
            return null;
    }
};

export const getOpponentTargets = (units: TBattleUnits, targetType: ETargetType, debuffType?: EDebuffType, targetUnitId?: string): IBattleUnit[] | null => {
    //console.log("getOpponentTargets", targetType);
    switch (targetType) {
        case ETargetType.BY_UNIT_ID: {
            const targetUnit = units.find((enemyUnit) => enemyUnit && enemyUnit.id === targetUnitId);
            //console.log("getOpponentTargets >>>> BY_UNIT_ID >>>> targetUnit = ", targetUnit);
            return targetUnit ? [targetUnit] : null;
        }
        case ETargetType.ALL_ENEMIES:
            return units.filter((unit) => isAliveUnit(unit));
        case ETargetType.FIRST_ENEMY: {
            const firstTarget = getFirstTarget(units);
            return firstTarget ? [firstTarget] : null;
        }
        case ETargetType.FIRST_TWO_ENEMIES: {
            return getFirstTwoTargets(units);
        }
        case ETargetType.FIRST_THREE_ENEMIES: {
            return getFirstThreeTargets(units);
        }
        case ETargetType.HIGH_ATTACK_ENEMY: {
            const target = getHighestAttributeTarget(units, "attack");
            return target ? [target] : null;
        }
        case ETargetType.HIGH_BLEED_ENEMY: {
            const target = getHighestStatusTarget(units, EStatusType.BLEED);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_POISON_ENEMY: {
            const target = getHighestStatusTarget(units, EStatusType.POISON);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_BURN_ENEMY: {
            const target = getHighestStatusTarget(units, EStatusType.BURN);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_SHOCK_ENEMY: {
            const target = getHighestStatusTarget(units, EStatusType.SHOCK);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_RADIATE_ENEMY: {
            const target = getHighestStatusTarget(units, EStatusType.RADIATE);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_MP_ENEMY: {
            const target = getHighestAttributeTarget(units, "magicPower");
            return target ? [target] : null;
        }
        case ETargetType.HIGH_PP_ENEMY: {
            const target = getHighestAttributeTarget(units, "physicalPower");
            return target ? [target] : null;
        }
        case ETargetType.LOW_HP_ENEMY: {
            const target = getLowHpTarget(units);
            return target ? [target] : null;
        }
        case ETargetType.LOW_PERCENT_ENEMY: {
            const target = getLowHpPercentTarget(units);
            return target ? [target] : null;
        }
        case ETargetType.HIGH_PERCENT_ENEMY: {
            const target = getHighHpPercentTarget(units);
            return target ? [target] : null;
        }
        case ETargetType.MARKED_ENEMY: {
            //console.log("ETargetType.MARKED_ENEMY");
            if (!debuffType) {
                console.log("no debuff type, first enemy selected");
                const firstTarget = getFirstTarget(units);
                return firstTarget ? [firstTarget] : null;
            }
            const markedTarget = getMarkedTarget(units, debuffType);
            //console.log("markedTarget", markedTarget);
            return markedTarget ? [markedTarget] : null;
        }
        case ETargetType.ALL_MARKED_ENEMIES: {
            if (!debuffType) {
                return [];
            }

            const result = units.filter((unit) => isAliveUnit(unit) && unit.debuffs.some((d) => d.type === debuffType)).filter((unit) => !!unit);
            return result;
        }
        case ETargetType.RANDOM_ENEMY: {
            const randomTarget = getRandomTarget(units);
            return randomTarget ? [randomTarget] : null;
        }
        case ETargetType.SECOND_ENEMY: {
            const secondTarget = getSecondTarget(units);
            return secondTarget ? [secondTarget] : null;
        }
        case ETargetType.BUFFED_ENEMY_RANDOM: {
            return [getRandomArrayItem(getBuffedAllies(units))];
        }
        case ETargetType.DEBUFFED_ENEMY_RANDOM: {
            return [getRandomArrayItem(getDebuffedAllies(units))];
        }
        default:
            return null;
    }
};

export const getTargets = (
    unit: IBattleUnit,
    allyUnits: TBattleUnits,
    enemyUnits: TBattleUnits,
    targetType: ETargetType,
    targetUnitId?: string,
    debuffType?: EDebuffType,
): IBattleUnit[] | null => {
    if (targetType === ETargetType.BY_UNIT_ID) {
        if (!targetUnitId) {
            console.log("ERROR! getTargets >>> targetType BY_UNIT_ID and targetUnitId is not provided");
            return [];
        }
        //console.log("getTargets >>> BY_UNIT_ID >>> ", targetUnitId);
        //console.log("allUnits >>> ", allyUnits.concat(enemyUnits));
        const unitById = allyUnits.concat(enemyUnits).find((unit) => unit && (unit.id === targetUnitId || unit.summon?.id === targetUnitId));
        return unitById ? [unitById] : null;
    }

    return allyTargets.includes(targetType) ? getAllyTargets(unit, allyUnits, targetType) : getOpponentTargets(enemyUnits, targetType, debuffType);
};

export const getAllyTotems = (unit: IBattleUnit, units: TBattleUnits, targetType: ETargetType): ITotem[] => {
    switch (targetType) {
        case ETargetType.TOTEM_ALLY_ALL:
            return units
                .filter((unit) => isAliveUnit(unit) && unit.totem)
                .map((unitWithTotem) => unitWithTotem!.totem)
                .filter((totem) => !!totem);
        case ETargetType.TOTEM_ALLY_CURRENT:
            return unit.totem ? [unit.totem] : [];
        default:
            return [];
    }
};

export const calculateBuffValue = (unit: IBattleUnit, initialValue: number, buff: IBuff) => {
    const { value, valueType, mpScale, ppScale } = buff;
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    console.log("calc buff value", value, mpScaleValue, ppScaleValue, valueType, initialValue);
    if (!valueType || valueType === "number" || valueType === "evolvedNumber") {
        return value + mpScaleValue + ppScaleValue;
    } else if (valueType === "percent" || valueType === "evolvedPercent") {
        //const initValue = buff.valueFrom ? target[buff.valueFrom] : initialValue;
        let buffValue = Math.floor((initialValue * value) / 100);
        return (buffValue || 1) + mpScaleValue + ppScaleValue;
    }
    return 0;
};

export const calculateDebuffValue = (unit: IBattleUnit, initialValue: number, debuff: IDebuff): number => {
    //console.log("calculateDebuffValue", initialValue, debuff);
    // add MP or PP scaling
    const { value, valueType, mpScale, ppScale } = debuff;
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    if (!valueType || valueType === "number" || valueType === "evolvedNumber") {
        return value + mpScaleValue + ppScaleValue;
    } else if (valueType === "percent" || valueType === "evolvedPercent") {
        const debuffValue = Math.floor((initialValue * value) / 100);
        return (debuffValue || 1) + mpScaleValue + ppScaleValue;
    }
    return 0;
};

export const calculateIncreaseValue = (initialValue: number, increaseValue: number, increaseType: TValueType, percentOfValue?: number) => {
    if (increaseType === "number" || increaseType === "evolvedNumber") {
        return increaseValue;
    } else if (increaseType === "percent" || increaseType === "evolvedPercent") {
        const initValue = percentOfValue !== undefined ? percentOfValue : initialValue;
        let incValue = Math.floor((initValue * increaseValue) / 100);
        return incValue;
    }
    return 0;
};

export const getBattleAttribute = (attribute: THeroAttribute): THeroBattleAttribute | null => {
    switch (attribute) {
        case "basicAttack":
            return "attack";
        case "basicArmor":
            return "armor";
        case "basicHpRegen":
            return "hpRegen";
        default:
            return null;
    }
};

export const removeBuff = (unit: IBattleUnit, buff: IBuff, battleRecord: TBattleRecord) => {
    const index = unit.buffs.findIndex((b) => b === buff);
    if (index !== -1) {
        unit.buffs.splice(index, 1);
    }

    const { type, attribute, totalValue } = buff;
    if (type === EBuffType.ATTRIBUTE_INCREASE) {
        // decrease attribute back
        if (!attribute || totalValue === undefined) {
            return;
        }
        unit[attribute] -= totalValue;
        battleRecord.push({ unitId: unit.id, targetId: unit.id, type: EBattleActionType.ATTRIBUTE_DECREASE, attribute, value: totalValue });
    }
    battleRecord.push({ unitId: unit.id, type: EBattleActionType.BUFF_REMOVED, buff });
};

export const removeDebuffSimple = (unit: IBattleUnit, debuff: IDebuff, battleRecord: TBattleRecord) => {
    const index = unit.debuffs.findIndex((b) => b === debuff);
    if (index !== -1) {
        unit.buffs.splice(index, 1);
    }

    const { type, attribute, totalValue } = debuff;
    switch (type) {
        case EDebuffType.ATTRIBUTE_DECREASE:
            {
                // decrease attribute back
                if (!attribute || totalValue === undefined) {
                    return;
                }
                unit[attribute] += totalValue;
                battleRecord.push({ unitId: unit.id, targetId: unit.id, type: EBattleActionType.ATTRIBUTE_INCREASE, attribute, value: totalValue });
            }
            break;
    }
    battleRecord.push({ unitId: unit.id, targetId: unit.id, type: EBattleActionType.DEBUFF_REMOVE, debuff });
};

export const changeBuffCurrent = (currentBuff: IBuff, value: number): number => {
    currentBuff.totalValue = (currentBuff.totalValue || 0) + value;
    return currentBuff.totalValue;
};

export const changeBuffValue = (unit: IBattleUnit, buff: IBuff, value: number, battleRecord: TBattleRecord) => {
    const newValue = changeBuffCurrent(buff, value);
    if (newValue <= 0) removeBuff(unit, buff, battleRecord);
    else
        battleRecord.push({
            unitId: unit.id,
            type: EBattleActionType.BUFF,
            buff: buff,
            buffTargets: [{ targetId: unit.id, isExisting: true, value: newValue }],
        });
};

export const prepareUnitToBattle = (unit: IUnit, backrow: boolean = false): IBattleUnit => {
    const { basicArmor, basicMaxHp, basicAttack, basicHpRegen, basicEvasionChance, basicCritChance, basicMagicPower, basicPhysicalPower, items } = unit;
    const itemBonuses: IItemBattleBonus[] = items.reduce((bonuses, item) => {
        if (item.battleBonuses && item.battleBonuses?.length > 0) {
            item.battleBonuses.forEach((bonus) => bonuses.push(bonus));
        }
        item.heroClassBonuses &&
            item.heroClassBonuses.forEach((hCbonus) => {
                if (unit.unitType === EUnitType.HERO) {
                    if (checkUnitBasicClass(unit, hCbonus.heroClass)) {
                        if (hCbonus.battleBonus) {
                            bonuses.push(hCbonus.battleBonus);
                        }
                    }
                } else if (unit.mobHeroClasses && unit.mobHeroClasses.includes(hCbonus.heroClass)) {
                    if (hCbonus.battleBonus) {
                        bonuses.push(hCbonus.battleBonus);
                    }
                }
            });
        return bonuses;
    }, [] as IItemBattleBonus[]);

    return {
        ...unit,
        maxHp: basicMaxHp,
        hp: basicMaxHp,
        attack: basicAttack,
        hpRegen: basicHpRegen,
        armor: basicArmor,
        critChance: basicCritChance,
        evasionChance: basicEvasionChance,
        magicPower: basicMagicPower,
        physicalPower: basicPhysicalPower,
        customNumber: 0,
        isBackRowPosition: backrow,
        //
        buffs: [],
        debuffs: [],
        summon: undefined,
        totem: undefined,
        statuses: [],
        itemBonuses,
        isSummon: false,
        //
        currentSkillIndex: 0,
    };
};

export const prepareSummonToBattle = (unit: IUnit, backrow: boolean = true): IBattleUnit => {
    const summon = prepareUnitToBattle(unit, backrow);
    summon.isSummon = true;
    generateUnitId(summon);
    return summon;
};

export const prepareTotemToBattle = (totem: ITotem): ITotem => {
    // TODO: move unit parameters to totem
    const skills = [...totem.skills];
    return { skills, name: totem.name, id: totem.id + "_" + generateId() };
};

export const removeSummon = (target: IBattleUnit) => {
    target.summon = undefined;
};

export const calculateUnitsAfterBattle = (battleUnits: (IBattleUnit | null)[]): (IUnit | null)[] => {
    return battleUnits.map((battleUnit) => {
        if (!battleUnit) {
            return null;
        }

        const unitAfterBattle = {
            ...battleUnit,
            hp: undefined,
            maxHp: undefined,
            magicPower: undefined,
            physicalPower: undefined,
            evasionChance: undefined,
            critChance: undefined,
            armor: undefined,
            attack: undefined,
            buffs: undefined,
            debuffs: undefined,
            hpRegen: undefined,
            statuses: undefined,
            summon: undefined,
            totem: undefined,
        };

        return unitAfterBattle;
    });
};

/** Calculate final damage according to target unit defense, buffs and debuffs
 *    used only for Totems
 *    see also BattleController.dealDamage() for regular damage dealing
 */
export const dealDamage = (target: IBattleUnit, damageValue: number, damageType: EHeroAttackType, battleRecord: TBattleRecord) => {
    let finalDamageValue = damageValue;
    // check if divine shield is active
    const divineShield = target.buffs.find((buff) => buff.type === EBuffType.DIVINE_SHIELD);
    if (divineShield) {
        const stacks = divineShield.totalValue;
        if (stacks) {
            if (finalDamageValue <= stacks) {
                battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: 0, value2: target.hp });
                return;
            }
            changeBuffValue(target, divineShield, finalDamageValue - stacks, battleRecord);
        }
    }
    const cosmicShield = target.buffs.find((buff) => buff.type === EBuffType.COSMIC_SHIELD);
    if (cosmicShield) {
        battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: 0, value2: target.hp });
        changeBuffValue(target, cosmicShield, -1, battleRecord);
        return;
    }

    if (damageType === EHeroAttackType.MAGIC) {
        // calculate defense debuffs
        target.debuffs.forEach((debuff) => {
            if (debuff.type === EDebuffType.RESIST_DECREASE) {
                if (debuff.valueType === "number") {
                    finalDamageValue += debuff.value;
                } else if (debuff.valueType === "percent") {
                    let addDamage = Math.floor((finalDamageValue * debuff.value) / 100);
                    finalDamageValue += addDamage;
                }
            }
        });
    } else if (damageType === EHeroAttackType.PHYSICAL) {
        //TODO:calculate total armor
        let armor = target.armor;

        let armorLeft = armor - finalDamageValue;
        if (armorLeft < 0) {
            armorLeft = 0;
        }
        finalDamageValue -= armor;
        if (finalDamageValue < 0) {
            finalDamageValue = 0;
        }
        // decrease armor
        target.armor = armorLeft;
    }

    takeDamage(target, finalDamageValue, battleRecord);
};

export const takeDamage = (target: IBattleUnit, damageValue: number, battleRecord: TBattleRecord) => {
    target.hp -= damageValue;

    battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp });

    if (target.hp <= 0) {
        target.hp = 0;
        battleRecord.push({ unitId: target.id, type: EBattleActionType.DEATH });
    }
};

export const applyStatus = (
    unit: IBattleUnit,
    target: IBattleUnit,
    statusType: EStatusType,
    value: number,
    battleRecord: TBattleRecord,
    isStartBattle?: boolean,
) => {
    const existingStatus = target.statuses.find((st) => st.type === statusType);
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.STATUS_APPLY, status: statusType, value, isStartBattle: isStartBattle });
    //console.log("-= Apply ",statusType,"+",value,"was",existingStatus,"target",target);

    if (existingStatus) {
        const existingStatusValue = existingStatus.value;
        existingStatus.value += value;
        console.log("new", existingStatus.value, "old", existingStatusValue);
        // deal damage in case of SHOCK status
        if (statusType === EStatusType.SHOCK) takeStatusDamage(target, existingStatusValue, EStatusType.SHOCK, battleRecord);
    } else target.statuses.push({ type: statusType, value });
};

export const takeStatusDamage = (target: IBattleUnit, damageValue: number, statusType: EStatusType, battleRecord: TBattleRecord) => {
    target.hp -= damageValue;

    const { armor } = target;

    const ignoreArmor = [EStatusType.BLEED, EStatusType.POISON].includes(statusType);

    if (!ignoreArmor && target.armor > 0) {
        // calclate damage to armor
        let finalDamageValue = damageValue;
        let armorLeft = armor - finalDamageValue;
        if (armorLeft < 0) {
            armorLeft = 0;
        }

        const armorDamaged = armorLeft > 0 ? finalDamageValue : armor;

        finalDamageValue -= armor;
        if (finalDamageValue < 0) {
            finalDamageValue = 0;
        }
        // decrease armor
        target.armor = armorLeft;
        battleRecord.push({
            unitId: target.id,
            type: EBattleActionType.TAKE_DAMAGE,
            value: finalDamageValue,
            value2: target.hp,
            status: statusType,
            armorValue: armorDamaged,
        });
    } else {
        battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: damageValue, value2: target.hp, status: statusType });
    }

    // remove(edited) *reduce BURN after damage
    if (statusType === EStatusType.BURN) {
        // change from removeStatus() to reduceStacks
        //removeStatus(target, target, statusType, battleRecord);
        reduceStatus(target, target, statusType, Math.floor(damageValue / 2) + 1, battleRecord);
    }
    // remove RADIATE after damage
    // radiate status is from Overheal trigger
    //   see BattleController.performHeal()
    if (statusType === EStatusType.RADIATE) {
        removeStatus(target, target, statusType, battleRecord);
    }

    if (target.hp <= 0) {
        target.hp = 0;
        battleRecord.push({ unitId: target.id, type: EBattleActionType.DEATH });
    }
};

export const removeStatus = (unit: IBattleUnit, target: IBattleUnit, statusType: EStatusType, battleRecord: TBattleRecord, isStartBattle?: boolean) => {
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.STATUS_REMOVE, status: statusType, isStartBattle });
    target.statuses = target.statuses.filter((status) => status.type !== statusType);
};

export const reduceStatus = (
    unit: IBattleUnit,
    target: IBattleUnit,
    statusType: EStatusType,
    value: number,
    battleRecord: TBattleRecord,
    isStartBattle?: boolean,
) => {
    const existingStatus = target.statuses.find((st) => st.type === statusType);
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.STATUS_REMOVE, status: statusType, value, isStartBattle: isStartBattle });

    if (existingStatus) {
        const existingStatusValue = existingStatus.value;
        existingStatus.value -= value;
        /* deal damage in case of SHOCK status
        if (statusType === EStatusType.SHOCK) {
            takeStatusDamage(target, existingStatusValue, EStatusType.SHOCK, battleRecord);
        }*/
        if (existingStatus.value <= 0) removeStatus(unit, target, statusType, battleRecord, isStartBattle);
        return;
    }
    target.statuses.push({ type: statusType, value });
};

export const applyDebuff = (
    target: IBattleUnit,
    debuff: IDebuff,
    debuffAction: IBattleAction,
    battleCtrl: BattleController,
    caster?: IBattleUnit,
    isPlayer1?: boolean,
) => {
    //
    const { attribute, duration, timeType, type, appTrigger } = debuff;
    // if same debuff already on target, dont apply new one, but empower existing one instead
    const existingDebuff = target.debuffs.find(
        (dbf) =>
            dbf.type === type &&
            dbf.attribute === attribute &&
            dbf.timeType === timeType &&
            dbf.appTrigger?.type === appTrigger?.type &&
            dbf.appTrigger?.targetCheck === appTrigger?.targetCheck &&
            dbf.appTrigger?.skillId === appTrigger?.skillId,
    );

    if (existingDebuff) {
        //console.log("existing debuff found", target.id, debuff.type, debuff.attribute, debuff.timeType);

        if (existingDebuff.totalValue === undefined) {
            console.log("ERROR applyDebuff existingDebuff.totalValue is undefined");
            return;
        }

        switch (debuff.type) {
            case EDebuffType.MARK_BLADEDANCER:
                {
                    existingDebuff.value += 1;
                    if (existingDebuff.totalValue) {
                        existingDebuff.totalValue += 1;
                    }
                    debuffAction.buffTargets?.push({ targetId: target.id, isExisting: true, value: existingDebuff.totalValue });
                }
                break;
            case EDebuffType.ATTRIBUTE_DECREASE:
                // caster & battleCtrl should be defined
                if (!attribute) {
                    console.log("ERROR applyDebuff attribute is undefined");
                    return;
                }
                //const initValue = debuff.valueFrom ? target[debuff.valueFrom] : target[debuff.attribute];
                const newValue = calculateDebuffValue(caster || target, attribute ? target[attribute] : 0, debuff);
                const oldValue = existingDebuff.totalValue;
                if (debuff.timeType === EBuffTimeType.DURATION && existingDebuff.duration && duration) {
                    //existingDebuff.totalValue = Math.max(newValue, oldValue);
                    existingDebuff.duration += duration;
                    const diff = newValue - oldValue;
                    const ta = Math.min(diff, target[attribute]);
                    if (diff > 0) {
                        target[attribute] -= ta;
                        existingDebuff.totalValue += ta;
                        battleCtrl &&
                            battleCtrl.battleRecord.push({
                                unitId: caster?.id || target.id,
                                targetId: target.id,
                                type: EBattleActionType.ATTRIBUTE_DECREASE,
                                attribute: debuff.attribute,
                                value: ta,
                            });
                    }
                } else {
                    const ta = Math.min(newValue, target[attribute]);
                    existingDebuff.totalValue += ta;
                    target[attribute] -= ta;
                    battleCtrl &&
                        battleCtrl.battleRecord.push({
                            unitId: caster?.id || target.id,
                            targetId: target.id,
                            type: EBattleActionType.ATTRIBUTE_DECREASE,
                            attribute: debuff.attribute,
                            value: ta,
                        });
                }
                debuffAction.buffTargets?.push({ targetId: target.id, isExisting: true });
                break;
            case EDebuffType.BATTLE_TRIGGER:
                const newValue2 = calculateDebuffValue(caster || target, attribute ? target[attribute] : 0, debuff);
                const oldValue2 = existingDebuff.totalValue;
                existingDebuff.totalValue = Math.max(newValue2, oldValue2);
                break;
            default: {
                const initValue = debuff.attribute ? target[debuff.attribute] : 100;
                const newValue = calculateDebuffValue(caster || target, initValue, debuff);
                const oldValue = existingDebuff.totalValue;
                if (debuff.timeType === EBuffTimeType.DURATION && existingDebuff.duration && duration) {
                    existingDebuff.totalValue = Math.max(newValue, oldValue);
                    existingDebuff.duration += duration;
                } else {
                    existingDebuff.totalValue += newValue;
                }
                debuffAction.buffTargets?.push({ targetId: target.id, isExisting: true, value: existingDebuff.totalValue });
            }
        }
    } else {
        const initValue = debuff.attribute ? target[debuff.attribute] : 100;
        const debuffValue = calculateDebuffValue(caster || target, initValue, debuff);
        if (debuff.type === EDebuffType.ATTRIBUTE_DECREASE) {
            if (!attribute) {
                console.log("ERROR applyDebuff attribute is undefined");
                return;
            }
            const ta = Math.min(debuffValue, target[attribute]);
            // do not decrease attribute below 0
            // so when debuff is removed, attribute won't become
            // more than it was initially
            target[attribute] -= ta;
            battleCtrl.battleRecord.push({
                unitId: caster?.id || target.id,
                targetId: target.id,
                type: EBattleActionType.ATTRIBUTE_DECREASE,
                attribute: debuff.attribute,
                value: ta,
            });
            target.debuffs.push({ ...debuff, totalValue: ta });
        } else {
            target.debuffs.push({ ...debuff, totalValue: debuffValue });
        }
        if (debuff.type === EDebuffType.BATTLE_TRIGGER && appTrigger) {
            battleCtrl.addTrigger({
                anchorTarget: target,
                originBattleUnit: caster || target,
                isBuff: false,
                isPlayer1: !!isPlayer1,
                targetCheck: appTrigger.targetCheck || ETargetType.ANCHOR_TARGET,
                type: appTrigger.type,
            });
        }
        debuffAction.buffTargets?.push({ targetId: target.id, value: debuffValue });
    }
};

export const removeDebuff = (unit: IBattleUnit, target: IBattleUnit, debuffIndex: number, battleRecord: TBattleRecord, isStartBattle?: boolean) => {
    const debuff = target.debuffs[debuffIndex];
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.DEBUFF_REMOVE, value: debuffIndex, debuff });

    const { type, attribute, totalValue } = debuff; // undefined?
    switch (type) {
        case EDebuffType.ATTRIBUTE_DECREASE:
            {
                // increase attribute back
                if (!attribute || totalValue === undefined) {
                    return;
                }
                target[attribute] += totalValue;
                battleRecord.push({
                    unitId: unit.id,
                    targetId: target.id,
                    type: EBattleActionType.ATTRIBUTE_INCREASE,
                    attribute,
                    value: totalValue,
                    isStartBattle,
                });
            }
            break;
    }

    target.debuffs = target.debuffs.filter((_, index) => index !== debuffIndex);
};

export const applyBuff = (
    target: IBattleUnit,
    buff: IBuff,
    buffAction: IBattleAction,
    battleCtrl: BattleController,
    caster?: IBattleUnit,
    isPlayer1?: boolean,
) => {
    //if (buff.valueFrom === "customNumber")
    const { attribute, duration, timeType, type, appTrigger, statusType } = buff;
    //    console.log("-= Debug buff from calculated number =-",target,caster);
    const existingBuff = target?.buffs?.find(
        (bf) =>
            bf.type === type &&
            bf.attribute === attribute &&
            bf.timeType === timeType &&
            bf.appTrigger?.type === appTrigger?.type &&
            bf.appTrigger?.targetCheck === appTrigger?.targetCheck &&
            bf.appTrigger?.skillId === appTrigger?.skillId &&
            bf.statusType === statusType,
    );
    if (existingBuff) {
        if (existingBuff.totalValue === undefined) {
            console.log("ERROR applyDebuff existingDebuff.totalValue is undefined");
            return;
        }
        //console.log("existing buff found", target.id, buff.type, buff.attribute, buff.timeType);
        if (buff.type === EBuffType.ATTRIBUTE_INCREASE) {
            if (!attribute) {
                console.log("ERROR applyBuff attribute is undefined");
                return;
            }
            // caster & battleCtrl should be defined
            const initValue = buff.valueFrom ? target[buff.valueFrom] : target[attribute];
            const newValue = calculateBuffValue(caster || target, initValue, buff);
            const oldValue = existingBuff.totalValue;
            //if (buff.valueFrom === "customNumber") console.log("init", initValue, "new", newValue, "old", oldValue);
            if (buff.timeType === EBuffTimeType.DURATION && existingBuff.duration && duration) {
                existingBuff.totalValue = Math.max(newValue, oldValue);
                existingBuff.duration += duration;
                const diff = newValue - oldValue;
                if (diff > 0) {
                    target[attribute] += diff;
                    battleCtrl &&
                        battleCtrl.battleRecord.push({
                            unitId: caster?.id || target.id,
                            targetId: target.id,
                            type: EBattleActionType.ATTRIBUTE_INCREASE,
                            attribute: buff.attribute,
                            value: diff,
                        });
                }
            } else {
                existingBuff.totalValue += newValue;
                target[attribute] += newValue;
                battleCtrl &&
                    battleCtrl.battleRecord.push({
                        unitId: caster?.id || target.id,
                        targetId: target.id,
                        type: EBattleActionType.ATTRIBUTE_INCREASE,
                        attribute: buff.attribute,
                        value: newValue,
                    });
            }
            buffAction.buffTargets?.push({ targetId: target.id, isExisting: true, value: existingBuff.totalValue });
        } else if (buff.type === EBuffType.BATTLE_TRIGGER) {
            const initValue = buff.valueFrom ? target[buff.valueFrom] : buff.attribute ? target[buff.attribute] : 100;
            const newValue = calculateBuffValue(caster || target, initValue, buff);
            const oldValue = existingBuff.totalValue;
            existingBuff.totalValue = Math.max(newValue, oldValue);
        } else {
            const initValue = buff.valueFrom ? target[buff.valueFrom] : buff.attribute ? target[buff.attribute] : 100;
            const newValue = calculateBuffValue(caster || target, initValue, buff);
            const oldValue = existingBuff.totalValue;
            if (buff.timeType === EBuffTimeType.DURATION && existingBuff.duration && duration) {
                existingBuff.totalValue = Math.max(newValue, oldValue);
                existingBuff.duration += duration;
            } else {
                existingBuff.totalValue += newValue;
            }
            buffAction.buffTargets?.push({ targetId: target.id, isExisting: true, value: existingBuff.totalValue });
        }
    } else {
        const initValue = buff.valueFrom ? target[buff.valueFrom] : buff.attribute ? target[buff.attribute] : 100;
        const buffValue = calculateBuffValue(caster || target, initValue, buff);
        if (buff.type === EBuffType.ATTRIBUTE_INCREASE) {
            if (!attribute) {
                console.log("ERROR applyBuff attribute is undefined");
                return;
            }
            target[attribute] += buffValue;
            battleCtrl.battleRecord.push({
                unitId: caster?.id || target.id,
                targetId: target.id,
                type: EBattleActionType.ATTRIBUTE_INCREASE,
                attribute: buff.attribute,
                value: buffValue,
            });
        } else if (buff.type === EBuffType.BATTLE_TRIGGER && appTrigger) {
            battleCtrl.listOfTriggers.push({
                anchorTarget: target,
                originBattleUnit: caster || target,
                isBuff: true,
                isPlayer1: !!isPlayer1,
                targetCheck: appTrigger.targetCheck || ETargetType.ANCHOR_TARGET,
                type: appTrigger.type,
            });
            console.log("-= Battle trigger Buff =-", buffValue, buff);
        }
        target.buffs.push({ ...buff, totalValue: buffValue });
        buffAction.buffTargets?.push({ targetId: target.id, value: buffValue });
    }
};

export const swapHp = (unit: IBattleUnit, target: IBattleUnit, battleRecord: TBattleRecord, isStartBattle?: boolean, isPercentage?: boolean) => {
    const unitHp = unit.hp;
    const targetHp = target.hp;
    if (isPercentage) {
        const unitPercent = unitHp / unit.maxHp;
        const targetPercent = targetHp / target.maxHp;
        unit.hp = Math.floor(0.5 + unit.maxHp * targetPercent);
        target.hp = Math.floor(0.5 + target.maxHp * unitPercent);
    } else {
        unit.hp = targetHp;
        if (unit.hp > unit.maxHp) {
            unit.hp = unit.maxHp;
        }
        target.hp = unitHp;
        if (target.hp > target.maxHp) {
            target.hp = target.maxHp;
        }
    }
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.SWAP_HP, value: unit.hp, value2: target.hp, isStartBattle });
};

export const getTargetWithTotem = (units: TBattleUnits): IBattleUnit | null => {
    const unitsWithTotem = units.filter((unit) => unit && unit.hp > 0 && unit.totem);

    if (unitsWithTotem.length === 0) {
        return null;
    } else if (unitsWithTotem.length === 1) {
        return unitsWithTotem[0];
    } else {
        return getRandomArrayItem(unitsWithTotem);
    }
};

export const getTargetWithSummon = (units: TBattleUnits): IBattleUnit | null => {
    const unitsWithSummon = units.filter((unit) => unit && unit.hp > 0 && unit.summon);

    if (unitsWithSummon.length === 0) {
        return null;
    } else if (unitsWithSummon.length === 1) {
        return unitsWithSummon[0];
    } else {
        return getRandomArrayItem(unitsWithSummon);
    }
};

export const removeTotem = (target: IBattleUnit) => {
    target.totem = undefined;
};

export const executeDebuff = (unit: IBattleUnit, debuff: IDebuff, battleRecord: TBattleRecord) => {
    switch (debuff.type) {
        case EDebuffType.MARK_BURN:
            {
                // TODO: do we need % target type handling here?
                applyStatus(unit, unit, EStatusType.BURN, debuff.value, battleRecord);
            }
            break;
        default: {
            console.log("ERROR. executeDebuff no handler for debuff type", debuff.type);
        }
    }
};

export const getStatusItemBonusType = (status: EStatusType) => {
    switch (status) {
        case EStatusType.BLEED:
            return EItemBattleBonusType.STATUS_BLEED_APPLY_INCREASE;
        case EStatusType.BURN:
            return EItemBattleBonusType.STATUS_BURN_APPLY_INCREASE;
        case EStatusType.POISON:
            return EItemBattleBonusType.STATUS_POISON_APPLY_INCREASE;
        default: {
            console.log("ERROR No item status bonus for status type", status);
        }
    }
};

export const getExistingBuff = (unit: IBattleUnit, buff: IBuff) => {
    const { type, attribute, timeType } = buff;

    return unit.buffs.find((existingBuff) => {
        if (
            type === EBuffType.ATTRIBUTE_INCREASE &&
            existingBuff.type === EBuffType.ATTRIBUTE_INCREASE &&
            attribute === existingBuff.attribute &&
            timeType === existingBuff.timeType
        ) {
            return true;
        }

        return type === existingBuff.type;
    });
};

export const prepareUniqueSummonToBattle = (unit: IBattleUnit): void => {
    if (!unit.summon) {
        return;
    }
    // check unique summon types
    if (unit.summon.id.startsWith("ILLUSIONSUMMON")) {
        unit.skills.forEach((skill) => {
            if (skill.isMcSkill) {
                unit.summon?.skills.push(noBasicAttackSkill);
                return;
            }
            if (skill.type === ESkillSetType.MAGIC_ATTACK) {
                unit.summon?.skills.push({ ...skill, isBasicAttack: false, isChained: false });
                return;
            }
            unit.summon?.skills.push(noBasicAttackSkill);
        });
    }
};

export const checkSkillCondition = (unit: IBattleUnit, condition: ESkillCondition, battleController: BattleController) => {
    switch (condition) {
        case ESkillCondition.MP_IS_EQUALS_PP:
            return unit.magicPower === unit.physicalPower;
        case ESkillCondition.MP_IS_HIGHER_THAN_PP:
            return unit.magicPower > unit.physicalPower;
        case ESkillCondition.PP_IS_HIGHER_THAN_MP:
            return unit.physicalPower > unit.magicPower;
        case ESkillCondition.HAS_SUMMON:
            return !!unit.summon;
        case ESkillCondition.HAS_NO_SUMMON_OR_TOTEM:
            return !(!!unit.summon || !!unit.totem);
        case ESkillCondition.HAS_TOTEM:
            return !!unit.totem;
        case ESkillCondition.CUSTOM_NUMBER_NOT_ZERO:
            return !!unit.customNumber;
        case ESkillCondition.CUSTOM_NUMBER_IS_ZERO:
            return !unit.customNumber;
        case ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE:
            return unit.customNumber && unit.customNumber > 0;
        case ESkillCondition.CUSTOM_NUMBER_IS_NEGATIVE:
            return unit.customNumber && unit.customNumber < 0;
        case ESkillCondition.IN_BACK_ROW:
            return unit.isBackRowPosition;
        case ESkillCondition.IN_FRONT_ROW:
            return !unit.isBackRowPosition;
        case ESkillCondition.HAS_ALLY_BEHIND:
            return battleController.getUnitsInFrontOrBehind(unit, true).length > 0;
        case ESkillCondition.HAS_ALLY_IN_FRONT:
            return battleController.getUnitsInFrontOrBehind(unit, false).length > 0;
        case ESkillCondition.ONE_OR_LESS_ALLY_IN_FRONT:
            return battleController.getUnitsInFrontOrBehind(unit, false).length < 2;
        case ESkillCondition.ONE_OR_LESS_ALLY_BEHIND:
            return battleController.getUnitsInFrontOrBehind(unit, true).length < 2;
    }
};

export const calculateDamageBonuses = (
    unit: IBattleUnit,
    attackType: EHeroAttackType,
    initialDamage: number,
    isCritAllowed: boolean,
    mpScale?: number,
    ppScale?: number,
) => {
    //
    let attackDamage = initialDamage;
    //
    // calculate scale from MP or PP
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    attackDamage += mpScaleValue + ppScaleValue;
    //
    // calculate attack damage according to items bonuses
    const bonusType = attackType === EHeroAttackType.MAGIC ? EItemBattleBonusType.INCREASE_MAGIC_DAMAGE : EItemBattleBonusType.INCREASE_PHYSICAL_DAMAGE;
    unit.itemBonuses.forEach((bonus) => {
        if (bonus.type === bonusType) {
            attackDamage += calculateIncreaseValue(attackDamage, bonus.value, bonus.valueType);
        }
    });
    unit.itemBonuses.forEach((bonus) => {
        if (bonus.type === EItemBattleBonusType.INCREASE_TOTAL_DAMAGE_FROM_HP) {
            attackDamage += Math.floor((attackDamage * (unit.hp * bonus.value)) / 100 / 100);
            //attackDamage *= calculateIncreaseValue(attackDamage, bonus.value, bonus.valueType, unit.hp);
        }
    });

    // calculate attack damage according to buffs and debuffs
    unit.buffs.forEach((buff) => {
        if (buff.type === EBuffType.TOTAL_DAMAGE_INCREASE) {
            const { value, valueType, valueFrom } = buff;
            if (!valueType || value === undefined) {
                return;
            }
            const percentFrom = valueFrom ? unit[valueFrom] : undefined;
            attackDamage += calculateIncreaseValue(attackDamage!, value, valueType, percentFrom);
        }
    });

    // calculate critical strike value
    let isCrit = false;
    if (isCritAllowed) {
        if (unit.critChance > 0) {
            if (getRandomIntFromInterval(0, 100) <= unit.critChance) {
                isCrit = true;
                attackDamage += Math.floor(attackDamage * CRIT_MODIFIER);
            }
        }
    }

    // check bonuses/debuffs for crit and non-crit damage
    const critNonCritBonus = unit.itemBonuses.find((bonus) => bonus.type === EItemBattleBonusType.CRIT_INCR_NONCRIT_DECR);
    if (critNonCritBonus) {
        // increase damage if critical hit, descrese damage on non critical hit
        if (isCrit) {
            attackDamage += calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
        } else {
            attackDamage -= calculateIncreaseValue(attackDamage, critNonCritBonus.value, critNonCritBonus.valueType);
        }
    }

    return { attackDamage, isCrit };
};

/**
 * @function checks if trigger collected enough stack to activate
 * */
export const isTriggerReady = (appTrigger: IAppTrigger): boolean => {
    if (appTrigger.targetNumber) {
        appTrigger.currentNumber = (appTrigger.currentNumber || 0) + 1;
        if (appTrigger.currentNumber === appTrigger.targetNumber) {
            appTrigger.currentNumber = 0;
            return true;
        }
    } else {
        // no targetNumber - apply effect each time it triggers
        return true;
    }
    return false;
};

export const triggerBattleTrigger = (type: EAppTriggerType, battleController: BattleController, unit?: IBattleUnit, relevantUnitId?: string) => {
    battleController.listOfTriggers.forEach((bt) => {
        if (bt.type === type) {
            if (!!unit && bt.targetCheck === ETargetType.ANCHOR_TARGET && bt.anchorTarget === unit) {
                console.log("Battle trigger Anchor target", type, bt, relevantUnitId);
                battleController.relevantTriggerUnitId = relevantUnitId;
                checkBattleTriggerBuffDebuff(bt, battleController);
                battleController.relevantTriggerUnitId = undefined;
            } else if (!!unit && unit.isSummon && type === EAppTriggerType.DEATH) {
                if (bt.targetCheck === ETargetType.ALL_ALLY_SUMMONS && battleController.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1)) {
                    battleController.relevantTriggerUnitId = relevantUnitId;
                    checkBattleTriggerBuffDebuff(bt, battleController);
                    battleController.relevantTriggerUnitId = undefined;
                } else {
                    return; // Summons do not usually trigger DEATH
                }
            } else if (!unit || battleController.isTarget(unit, bt.originBattleUnit, bt.targetCheck, bt.isPlayer1)) {
                battleController.relevantTriggerUnitId = relevantUnitId;
                checkBattleTriggerBuffDebuff(bt, battleController);
                battleController.relevantTriggerUnitId = undefined;
            }
        }
    });
};

export const checkBattleTriggerBuffDebuff = (bt: IBattleTrigger, battleController: BattleController) => {
    let found = false;
    bt.isBuff
        ? bt.anchorTarget.buffs.forEach((buff) => {
              if (buff.type === EBuffType.BATTLE_TRIGGER && buff.appTrigger?.type === bt.type) {
                  battleController.performTriggerAction(bt, buff.appTrigger, { buff: buff });
                  found = true;
              }
          })
        : bt.anchorTarget.debuffs.forEach((debuff) => {
              if (debuff.type === EDebuffType.BATTLE_TRIGGER && debuff.appTrigger?.type === bt.type) {
                  battleController.performTriggerAction(bt, debuff.appTrigger, { debuff: debuff });
                  found = true;
              }
          });
    if (!found) bt.type = EAppTriggerType.NONE; // mark for removal
};

export const dealOverhealDamage = (
    overhealTotal: number,
    unit: IBattleUnit,
    unitId4record: string,
    skill: IHeroSkill,
    opponentUnits: (IBattleUnit | null)[],
    battleController: BattleController,
) => {
    // overheal managing
    console.log("Total overheal", overhealTotal);
    if (overhealTotal > 0) {
        const overhealBuffs = unit.buffs.filter((buff) => buff.type === EBuffType.OVERHEAL_TO_DAMAGE);
        if (overhealBuffs.length > 0) {
            overhealBuffs.forEach((buff) => {
                if (buff.statusType) {
                    const targets = getOpponentTargets(opponentUnits, buff.changeTargetTypeTo || ETargetType.FIRST_ENEMY);
                    targets?.forEach((target) => {
                        applyStatus(unit, target, buff.statusType!, overhealTotal, battleController.battleRecord, false);
                    });
                } else {
                    const attackRecord2 = {
                        unitId: unitId4record,
                        type: EBattleActionType.ATTACK,
                        value: overhealTotal,
                        isCrit: false,
                        targets: [],
                        skill,
                        isStartBattle: false,
                    };
                    battleController.battleRecord.push(attackRecord2);
                    const targets = getOpponentTargets(opponentUnits, buff.changeTargetTypeTo || ETargetType.FIRST_ENEMY);
                    targets?.forEach((target) => {
                        //  Radiate removed for now
                        //applyStatus(unit, target, EStatusType.RADIATE, overhealTotal, this.battleRecord, isStartBattle);
                        battleController.dealDamage(unit, target, overhealTotal, EHeroAttackType.MAGIC, undefined, attackRecord2);
                    });
                }
            });
        }
    }
};
