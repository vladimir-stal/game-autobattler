import {
    EBattleActionType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EItemBattleBonusType,
    EStatusType,
    ETargetType,
    IBattleUnit,
    IBuff,
    IDebuff,
    IItemBattleBonus,
    ITotem,
    IUnit,
    TBattleRecord,
    TBattleUnits,
    THeroAttribute,
    THeroBattleAttribute,
    TValueType,
} from "../../types";
import { getRandomArrayItem } from "./commonUtils";
import { generateId, generateUnitId } from "./unitUtils";

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

export const getLowHpTarget = (units: TBattleUnits): IBattleUnit | null => {
    return units.reduce((result, unit) => {
        if (unit && unit.hp > 0) {
            if (!result) {
                return unit;
            }
            return unit.hp < result.hp ? unit : result;
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

export const getTarget = (units: TBattleUnits, targetType: ETargetType) => {
    switch (targetType) {
        case ETargetType.FIRST_ENEMY:
            return getFirstTarget(units);
        case ETargetType.RANDOM_ENEMY:
            return getRandomTarget(units);
        default:
            return null;
    }
};

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
    return units.filter((unit) => unit !== null).filter((unit) => unit.buffs.length);
};

const isAliveUnit = (unit: IBattleUnit | null): unit is IBattleUnit => !!unit && unit.hp > 0;

export const getAllyTargets = (unit: IBattleUnit, units: TBattleUnits, targetType: ETargetType): IBattleUnit[] | null => {
    switch (targetType) {
        case ETargetType.ALL_ALLIES:
            return units.filter((unit) => isAliveUnit(unit));
        case ETargetType.ALL_ALLY_SUMMONS:
            return getAllAllySummons(units);
        case ETargetType.BUFFED_ALLY_RANDOM: {
            return [getRandomArrayItem(getBuffedAllies(units))];
        }
        case ETargetType.FIRST_ALLY: {
            const firstTarget = getFirstTarget(units);
            return firstTarget ? [firstTarget] : null;
        }
        case ETargetType.LOW_HP_ALLY: {
            const lowestHpAlly = units.reduce((result, unit) => {
                if (unit && unit.hp > 0) {
                    //console.log("check unit", unit);
                    if (!result || unit.hp < result.hp) {
                        //console.log("set unit as result", unit);
                        return unit;
                    }
                }
                //console.log("save previous result");
                return result;
            }, null);
            //console.log("LOWEST hp ALLy", lowestHpAlly, units);
            return lowestHpAlly ? [lowestHpAlly] : null;
        }
        case ETargetType.RANDOM_ALLY: {
            return [getRandomArrayItem(units.filter((unit) => unit !== null))];
        }
        case ETargetType.SELF:
            return [unit];
        case ETargetType.SUMMON_CURRENT:
            return unit.summon ? [unit.summon] : null;
        default:
            return null;
    }
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

export const getOpponentTargets = (units: TBattleUnits, targetType: ETargetType, debuffType?: EDebuffType): IBattleUnit[] | null => {
    //console.log("getOpponentTargets", targetType);
    switch (targetType) {
        case ETargetType.ALL_ENEMIES:
            return units.filter((unit) => isAliveUnit(unit));
        case ETargetType.FIRST_ENEMY: {
            const firstTarget = getFirstTarget(units);
            return firstTarget ? [firstTarget] : null;
        }
        case ETargetType.FIRST_TWO_ENEMIES: {
            return getFirstTwoTargets(units);
        }
        case ETargetType.HIGH_ATTACK_ENEMY: {
            const target = getHighestAttributeTarget(units, "attack");
            return target ? [target] : null;
        }
        case ETargetType.HIGH_MP_ENEMY: {
            const target = getHighestAttributeTarget(units, "magicPower");
            return target ? [target] : null;
        }
        case ETargetType.LOW_HP_ENEMY: {
            const target = getLowHpTarget(units);
            return target ? [target] : null;
        }
        case ETargetType.MARKED_ENEMY: {
            console.log("ETargetType.MARKED_ENEMY");
            if (!debuffType) {
                console.log("no debuff type, first enemy selected");
                const firstTarget = getFirstTarget(units);
                return firstTarget ? [firstTarget] : null;
            }
            const markedTarget = getMarkedTarget(units, debuffType);
            console.log("markedTarget", markedTarget);
            return markedTarget ? [markedTarget] : null;
        }
        case ETargetType.RANDOM_ENEMY: {
            const randomTarget = getRandomTarget(units);
            return randomTarget ? [randomTarget] : null;
        }
        case ETargetType.SECOND_ENEMY: {
            const secondTarget = getSecondTarget(units);
            return secondTarget ? [secondTarget] : null;
        }

        default:
            return null;
    }
};

export const calculateBuffValue = (initialValue: number, buff: IBuff, unit: IBattleUnit) => {
    if (buff.valueType === "number") {
        return buff.value;
    } else if (buff.valueType === "percent") {
        const initValue = buff.valueFrom ? unit[buff.valueFrom] : initialValue;
        let buffValue = Math.floor((initValue * buff.value) / 100);
        return buffValue;
    }
    return 0;
};

export const calculateDebuffValue = (unit: IBattleUnit, initialValue: number, debuff: IDebuff): number => {
    //console.log("calculateDebuffValue", initialValue, debuff);
    // add MP or PP scaling
    const { value, valueType, mpScale, ppScale } = debuff;
    const mpScaleValue = mpScale ? Math.floor((mpScale * unit.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * unit.physicalPower) / 100) : 0;
    if (valueType === "number") {
        return value + mpScaleValue + ppScaleValue;
    } else if (valueType === "percent") {
        const debuffValue = Math.floor((initialValue * value) / 100);
        return debuffValue + mpScaleValue + ppScaleValue;
    }
    return 0;
};

export const calculateIncreaseValue = (initialValue: number, increaseValue: number, increaseType: TValueType, percentOfValue?: number) => {
    if (increaseType === "number") {
        return increaseValue;
    } else if (increaseType === "percent") {
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
    switch (type) {
        case EBuffType.ATTRIBUTE_INCREASE:
            {
                // decrease attribute back
                if (!attribute || totalValue === undefined) {
                    return;
                }
                unit[attribute] -= totalValue;
                battleRecord.push({ unitId: unit.id, targetId: unit.id, type: EBattleActionType.ATTRIBUTE_DECREASE, attribute, value: totalValue });
            }
            break;
    }
    battleRecord.push({ unitId: unit.id, type: EBattleActionType.BUFF_REMOVED, buff });
};

export const prepareUnitToBattle = (unit: IUnit): IBattleUnit => {
    const { basicArmor, basicMaxHp, basicAttack, basicHpRegen, basicEvasionChance, basicCritChance, basicMagicPower, basicPhysicalPower, items } = unit;
    const itemBonuses: IItemBattleBonus[] = items.reduce((bonuses, item) => {
        if (item.battleBonuses && item.battleBonuses?.length > 0) {
            item.battleBonuses.forEach((bonus) => bonuses.push(bonus));
        }
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

export const prepareSummonToBattle = (unit: IUnit): IBattleUnit => {
    const summon = prepareUnitToBattle(unit);
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

        return {
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
    });
};

/** Calculate final damage according to target unit defense, buffs and debuffs */
export const dealDamage = (target: IBattleUnit, damageValue: number, damageType: EHeroAttackType, battleRecord: TBattleRecord) => {
    let finalDamageValue = damageValue;
    // check if divine shield is active
    const divineShield = target.buffs.find((buff) => buff.type === EBuffType.DIVINE_SHIELD);
    if (divineShield) {
        battleRecord.push({ unitId: target.id, type: EBattleActionType.TAKE_DAMAGE, value: 0, value2: target.hp });
        removeBuff(target, divineShield, battleRecord);
        return;
    }

    if (damageType === EHeroAttackType.MAGIC) {
        // calculate defense debuffs
        target.debuffs.forEach((debuff) => {
            if (debuff.type === EDebuffType.MAGIC_RESIST_DECREASE) {
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

export const applyStatus = (unit: IBattleUnit, target: IBattleUnit, statusType: EStatusType, value: number, battleRecord: TBattleRecord) => {
    const existingStatus = target.statuses.find((st) => st.type === statusType);
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.STATUS_APPLY, status: statusType, value });
    if (existingStatus) {
        existingStatus.value += value;
        return;
    }
    target.statuses.push({ type: statusType, value });
};

export const removeStatus = (unit: IBattleUnit, target: IBattleUnit, statusType: EStatusType, battleRecord: TBattleRecord) => {
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.STATUS_REMOVE, status: statusType });
    target.statuses = target.statuses.filter((status) => status.type !== statusType);
};

export const removeDebuff = (unit: IBattleUnit, target: IBattleUnit, debuffIndex: number, battleRecord: TBattleRecord) => {
    const debuff = target.debuffs[debuffIndex];
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.DEBUFF_REMOVE, value: debuffIndex, debuff });

    const { type, attribute, totalValue } = debuff;
    switch (type) {
        case EDebuffType.ATTRIBUTE_DECREASE:
            {
                // increase attribute back
                if (!attribute || totalValue === undefined) {
                    return;
                }
                target[attribute] += totalValue;
                battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.ATTRIBUTE_INCREASE, attribute, value: totalValue });
            }
            break;
    }

    target.debuffs = target.debuffs.filter((_, index) => index !== debuffIndex);
};

export const swapHp = (unit: IBattleUnit, target: IBattleUnit, battleRecord: TBattleRecord) => {
    const unitHp = unit.hp;
    const targetHp = target.hp;
    unit.hp = targetHp;
    if (unit.hp > unit.maxHp) {
        unit.hp = unit.maxHp;
    }
    target.hp = unitHp;
    if (target.hp > target.maxHp) {
        target.hp = target.maxHp;
    }
    battleRecord.push({ unitId: unit.id, targetId: target.id, type: EBattleActionType.SWAP_HP, value: unit.hp, value2: target.hp });
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
