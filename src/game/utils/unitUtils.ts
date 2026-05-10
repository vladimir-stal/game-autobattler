import {
    EHeroAttackType,
    EHeroClass,
    EHeroClassType,
    EItemBattleBonusType,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
    THeroAttribute,
    TUnits,
} from "../../types";
import { scrollOfSkill } from "../commonItemConsts3";
import { basicClassHeroesByLevel } from "../heroConsts";
import { basicCommonItems, basicWeapons } from "../itemConsts";
import { bardSkills } from "../skills/bardSkillConsts";
import { darkSkills } from "../skills/darkSkillConsts";
import { magicSkills } from "../skills/magicSkillConsts";
import { masterSkills } from "../skills/masterSkillConsts";
import { orderSkills } from "../skills/orderSkillConsts";
import { priestSkills } from "../skills/priestSkillConsts";
import { summonSkills } from "../skills/summonSkillConsts2";
import { warriorSkills } from "../skills/warriorSkillConsts";
import { wildSkills } from "../skills/wildSkillConsts";
import {
    BASIC_CLASS_MAX_ITEM_COUNT,
    BASIC_CLASS_MAX_WEAPON_COUNT,
    MC_CLASS_MAX_ITEM_COUNT,
    MC_CLASS_MAX_WEAPON_COUNT,
    unitsLvl1,
    unitsLvl2,
    unitsLvl3,
    unitsLvl4,
    unitsLvl5,
} from "../unitConsts";
import { checkProbability, getRandomArrayItem, getRandomIntFromInterval } from "./commonUtils";
import { applyItemBonuses, getHeroClassWeaponTypes, removeItemBonuses } from "./itemUtils";

const MAX_LEVEL = 5;

const EXP_FOR_LEVEL_BASIC: Record<number, number> = {
    2: 5,
    3: 10,
    4: 15,
    5: 20,
    // (L-1)*5
};

const EXP_FOR_LEVEL_MC: Record<number, number> = {
    2: 10,
    3: 25,
    4: 40,
    5: 60,
    // (L)*15-20  ~10, 25, 40, 55
};

export const emptyUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.ALL,
    mobHeroClasses: [],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.SELF,
    basicAttack: 0,
    basicAttackTimes: 0,
    basicMaxHp: 0,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Mr.Nobody",
    id: "emptyUnit",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [],
};

export const addExp = (units: (IUnit | null)[], expAdd: number) => {
    units.forEach((unit) => {
        if (!unit) {
            return;
        }
        addExpToUnit(unit, expAdd);
    });
};

export const levelUpUnit = (unit: IUnit) => {
    unit.level += 1;
    addAttributesOnLevelUp(unit);
    // mc skill up
    if (unit.unitType === EUnitType.HERO && unit.heroClassType === EHeroClassType.MULTI) {
        unit.skills.forEach((sk, idx) => {
            if (sk.isMcSkill && sk.nextLevel) {
                unit.skills[idx] = sk.nextLevel;
            }
        });
    }
};

export const levelUpUnitRandom = (unit: IUnit, levelUpToLevel?: number) => {
    if (levelUpToLevel) {
        for (let j = 0; j < levelUpToLevel - unit.level; j++) {
            unit.level += 1;
            addAttributesOnLevelUpRandom(unit);
        }
    } else {
        unit.level += 1;
        addAttributesOnLevelUpRandom(unit);
    }
};

export const addExpToUnit = (unit: IUnit, expAdd: number) => {
    console.log("addExpToUnit", unit.name, expAdd);
    const { level: currentLevel, exp: currentExp, heroClassType } = unit;

    //if (currentLevel === MAX_LEVEL) {
    //    return;
    //}
    if (unit.unitType === EUnitType.HERO) unit.exp = currentExp + expAdd;
    else unit.exp = currentExp + 2 * expAdd; // EXPERIMENTAL
    //console.log("Unit " + unit.name + " now has " + unit.exp + " exp");
    const nextLevelExp = getUnitNextLevelExp(unit);
    if (unit.exp >= nextLevelExp) {
        levelUpUnit(unit);
    }
};

export const addAttributeToUnit = (unit: IUnit, attribute: THeroAttribute, value: number) => {
    unit[attribute] += value;

    if (!unit.addedAttributes) {
        unit.addedAttributes = [];
    }

    const existingAddedAttr = unit.addedAttributes.find((addAttr) => addAttr.attr === attribute);
    if (existingAddedAttr) {
        existingAddedAttr.value += value;
    } else {
        unit.addedAttributes.push({ attr: attribute, value });
    }
};

const addAttributesOnLevelUp = (unit: IUnit) => {
    // TODO: calculate attributes increase considering unit class and level
    //TODO: use addAttributeToUnit func?
    //TODO different attr incr for basic and mc heroes
    if (unit.unitType == EUnitType.HERO) {
        if (unit.heroClassType === EHeroClassType.BASIC) {
            unit.basicMaxHp += 2;
            unit.basicAttack += 1;
            //
            increaseStatsByHeroClass(unit);
        }
        if (unit.heroClassType === EHeroClassType.MULTI) {
            unit.basicMaxHp += 5;
            unit.basicAttack += 1;
        }
    } else if (unit.unitType == EUnitType.UNIT) {
        const attr = getRandomIntFromInterval(0, 3);
        unit.basicArmor += 2;
        unit.basicMaxHp += 1;
        if (attr == 0) unit.basicCritChance += 3;
        if (attr == 1) unit.basicEvasionChance += 3;
        if (attr == 2) {
            unit.basicPhysicalPower++;
            unit.basicMagicPower++;
        }
        if (attr == 3) unit.basicAttack += 1;
    }
};

const increaseStatsByHeroClass = (unit: IUnit) => {
    switch (unit.heroClass) {
        case EHeroClass.BARD:
            {
                unit.basicMagicPower += 1;
            }
            break;
        case EHeroClass.DARK:
            {
                unit.basicMagicPower += 1;
            }
            break;
        case EHeroClass.MAGIC:
            {
                unit.basicMagicPower += 1;
            }
            break;
        case EHeroClass.MASTER:
            {
                unit.basicCritChance += 1;
            }
            break;
        case EHeroClass.ORDER:
            {
                unit.basicPhysicalPower += 1;
            }
            break;
        case EHeroClass.PRIEST:
            {
                unit.basicMagicPower += 1;
            }
            break;
        case EHeroClass.SUMMON:
            {
                unit.basicMagicPower += 1;
            }
            break;
        case EHeroClass.WARRIOR:
            {
                unit.basicPhysicalPower += 1;
            }
            break;
        case EHeroClass.WILD:
            {
                unit.basicPhysicalPower += 1;
            }
            break;
    }
};

const addAttributesOnLevelUpRandom = (unit: IUnit) => {
    unit.basicMaxHp += 2;
    unit.basicArmor += 1;
    let attr = getRandomIntFromInterval(0, 3);
    if (attr == 0) unit.basicCritChance += 2;
    if (attr == 1) unit.basicEvasionChance += 2;
    if (attr == 2) unit.basicMaxHp += 2;
    if (attr == 3) unit.basicAttack += 1;
    attr = getRandomIntFromInterval(0, 3);
    if (attr == 0) unit.basicMagicPower += 2;
    if (attr == 1) unit.basicPhysicalPower += 2;
    if (attr == 2) unit.basicHpRegen += 1;
    if (attr == 3) unit.basicAttack += 1;
};

export const generateUnitId = (unit: IUnit) => {
    unit.id = unit.id + "_" + generateId();
};

export const generateId = () => {
    const length = 10;
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const createUnits = (unitTemplates: TUnits, autolevel: number = -1): TUnits => {
    return unitTemplates.map((unit) => {
        if (!unit) {
            return null;
        }
        return createUnit(unit, undefined, autolevel);
    });
};

export const createUnit = (unitTemplate: IUnit, addedAttributes?: { attr: THeroAttribute; value: number }[], autolevel: number = -1): IUnit => {
    const id = unitTemplate.id + "_" + generateId();
    const { heroClassType, skills, unitType, items } = unitTemplate;
    const newSkills = unitType === EUnitType.UNIT || heroClassType === EHeroClassType.MULTI ? [...skills] : [];
    const newItems = unitType === EUnitType.HERO ? [] : [...items];
    //console.log(">>> create unit",unitTemplate.id,unitTemplate)
    const unit: IUnit = { ...unitTemplate, id, skills: newSkills, items: newItems, addedAttributes: [] };
    // add random hero class skill to basic hero
    if (unit.unitType === EUnitType.HERO && unit.heroClassType === EHeroClassType.BASIC) {
        unit.skills = [getRandomArrayItem(getClassSkills(unit.heroClass))];
    }
    // added Attributes
    if (addedAttributes && addedAttributes.length > 0) {
        addedAttributes.forEach(({ attr, value }) => {
            unit[attr] += value;
            unit.addedAttributes?.push({ attr, value });
        });
    }
    // autolevel
    if (autolevel > unit.level)
        for (let i = 0; i < autolevel - unit.level; i++) {
            levelUpUnit(unit);
        }
    // add stats from items
    unit.items.forEach((item) => {
        applyItemBonuses(item, unit);
    });
    return unit;
};

export const getRandomBasicHero = (level: number, withBasicCommonItem: boolean = false): IUnit => {
    //withBasicWeapon: boolean = false,
    const randomHero = getRandomArrayItem(basicClassHeroesByLevel[level]);
    const skills = [getRandomArrayItem(getClassSkills(randomHero.heroClass))];

    const resultHero = { ...randomHero, skills };

    //if (withBasicWeapon) {
    const weaponType = getRandomArrayItem(getHeroClassWeaponTypes(randomHero.heroClass));
    const weaponItem = basicWeapons.find((item) => item.weaponType === weaponType);
    if (weaponItem) {
        resultHero.items.push(weaponItem);
        applyItemBonuses(weaponItem, resultHero);
    }
    //}

    if (withBasicCommonItem) {
        const commonItem = getRandomArrayItem(basicCommonItems);
        resultHero.items.push(commonItem);
        applyItemBonuses(commonItem, resultHero);
    }

    return resultHero;
};

export const getRandomMcHero = (level: number): IUnit => {
    //withBasicWeapon: boolean = false,
    const randomHero = getRandomArrayItem(basicClassHeroesByLevel[level]);
    const skills = [getRandomArrayItem(getClassSkills(randomHero.heroClass))];

    const resultHero = { ...randomHero, skills };

    //if (withBasicWeapon) {
    const weaponType = getRandomArrayItem(getHeroClassWeaponTypes(randomHero.heroClass));
    const weaponItem = basicWeapons.find((item) => item.weaponType === weaponType);
    if (weaponItem) {
        resultHero.items.push(weaponItem);
        applyItemBonuses(weaponItem, resultHero);
    }
    //}

    // if (withBasicCommonItem) {
    //     const commonItem = getRandomArrayItem(basicCommonItems);
    //     resultHero.items.push(commonItem);
    //     applyItemBonuses(commonItem, resultHero);
    // }

    return resultHero;
};

/* Get unit of specific level to select on card selection */
export const getRandomUnitForSell = (level: number): IUnit => {
    if (level < 0) {
        level = 0;
    }
    switch (level) {
        case 0:
        case 1:
            return getRandomArrayItem(unitsLvl1);
        case 2:
            return getRandomArrayItem(unitsLvl2);
        case 3:
            return getRandomArrayItem(unitsLvl3);
        case 4:
            return getRandomArrayItem(unitsLvl4);
        case 5:
        default:
            return getRandomArrayItem(unitsLvl5);
    }
};

/* Get unit of specific level to get as a random card */
export const getRandomUnitForRandom = (day: number) => {
    switch (day) {
        case 0:
        case 1:
            return getRandomArrayItem(unitsLvl1);
        case 2:
            return getRandomArrayItem(unitsLvl1.concat(unitsLvl2).concat(unitsLvl3));
        case 3:
            return getRandomArrayItem(unitsLvl1.concat(unitsLvl2).concat(unitsLvl3));
        case 4:
            return getRandomArrayItem(unitsLvl2.concat(unitsLvl3));
        case 5:
        case 6:
            return getRandomArrayItem(unitsLvl2.concat(unitsLvl3).concat(unitsLvl4));
        case 7:
            return getRandomArrayItem(unitsLvl3.concat(unitsLvl4));
        case 8:
            return getRandomArrayItem(unitsLvl3.concat(unitsLvl4).concat(unitsLvl5));
        case 9:
            return getRandomArrayItem(unitsLvl4.concat(unitsLvl5));
        default:
            return getRandomArrayItem(unitsLvl4.concat(unitsLvl5));
    }
};

export const getUnitCardPrice = (unit: IUnit, day: number, hour: number) => {
    const initialHeroSelect = day === 0 && hour === 0;
    if (initialHeroSelect) {
        return 0;
    }

    if (unit.unitType === EUnitType.UNIT) {
        return unit.level * 3 + 1;
    }

    if (unit.unitType === EUnitType.HERO) {
        return 3 + unit.level;
    }

    return 0;
};

export const getClassSkills = (heroClass: EHeroClass): IHeroSkillSet[] => {
    switch (heroClass) {
        case EHeroClass.BARD:
            return bardSkills;
        case EHeroClass.DARK:
            return darkSkills;
        case EHeroClass.MAGIC:
            return magicSkills;
        case EHeroClass.MASTER:
            return masterSkills;
        case EHeroClass.ORDER:
            return orderSkills;
        case EHeroClass.PRIEST:
            return priestSkills;
        case EHeroClass.SUMMON:
            return summonSkills;
        case EHeroClass.WARRIOR:
            return warriorSkills;
        case EHeroClass.WILD:
            return wildSkills;
        default:
            return [];
    }
};

export const removeItemFromUnit = (unit: IUnit, itemIndex: number, units?: IUnit[]) => {
    const item = unit.items[itemIndex];
    removeItemBonuses(item, unit, units);
    unit.items.splice(itemIndex, 1);
};

export const getMaxUnitItemCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_ITEM_COUNT : MC_CLASS_MAX_ITEM_COUNT;
};

export const getMaxUnitWeaponCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_WEAPON_COUNT : MC_CLASS_MAX_WEAPON_COUNT;
};

export const getUnitNextLevelExp = (unit: IUnit) => {
    const { heroClassType, level } = unit;
    //const nextLevelExp = heroClassType === EHeroClassType.BASIC ? EXP_FOR_LEVEL_BASIC[level + 1] : EXP_FOR_LEVEL_MC[level + 1];
    const nextLevelExp =
        heroClassType === EHeroClassType.BASIC
            ? level * 5 //   EXP_FOR_LEVEL_BASIC[currentLevel + 1]
            : (level + 1) * 15 - 20; //    : EXP_FOR_LEVEL_MC[currentLevel + 1];
    return level < MAX_LEVEL ? nextLevelExp : nextLevelExp * 2;
};

/** With some probability add mob item to unit when buying or receiving its card */
export const addMobItem = (unit: IUnit) => {
    if (!unit.mobItems) {
        //console.log(">>>>> no mob items");
        return;
    }

    for (let i = 0; i < unit.mobItems.length; i++) {
        const { item, skill, probability } = unit.mobItems[i];
        const isItemAdded = checkProbability(probability);
        if (isItemAdded && item) {
            unit.items.push({ ...item, bonuses: [...item.bonuses] });
            break;
        } else if (isItemAdded && skill) {
            unit.items.push(scrollOfSkill(skill));
            break;
        }
    }
};

export const copyUnit = (unit: IUnit, copyItems: boolean = false): IUnit => {
    const copy: IUnit = { ...unit };
    if (copyItems) {
        copy.items = { ...unit.items };
    } else {
        copy.items = [];
    }
    copy.addedAttributes = [];
    copy.afterDuelBonuses = [];
    return copy;
};

/** @returns id of initial unit if units have same animations */
export const getMainUnitId = (unitId: string): string => {
    switch (unitId) {
        case "SPIRITWARRIOR":
            return "WARRIORSUMMON";
        case "SPIRITSHIELDWARRIOR":
            return "SHIELDWARRIORSUMMON";
        case "FIREFLY":
            return "FIREFLYSUMMON";
        case "SKELETONWARRIOR":
            return "SKELETON";
        case "GOLDGOBLIN1":
            return "WEAKGOBLIN";
    }
    return unitId;
};
