import { add } from "@tweenjs/tween.js";
import { EHeroClass, EHeroClassType, EUnitType, IHeroSkill, IHeroSkillSet, IUnit, THeroAttribute, TUnits } from "../../types";
import { basicClassHeroesByLevel } from "../heroConsts";
import { basicCommonItems, basicWeapons } from "../itemConsts";
import { bardSkills } from "../skills/bardSkillConsts";
import { darkSkills } from "../skills/darkSkillConsts";
import { magicSkills } from "../skills/magicSkillConsts";
import { masterSkills } from "../skills/masterSkillConsts";
import { orderSkills } from "../skills/orderSkillConsts";
import { priestSkills } from "../skills/priestSkillConsts";
import { summonSkills } from "../skills/summonSkillConsts";
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
import { getRandomArrayItem } from "./commonUtils";
import { applyItemBonuses, getHeroClassWeaponTypes, removeItemBonuses } from "./itemUtils";

const MAX_LEVEL = 5;

const EXP_FOR_LEVEL_BASIC: Record<number, number> = {
    2: 5,
    3: 10,
    4: 15,
    5: 20,
};

const EXP_FOR_LEVEL_MC: Record<number, number> = {
    2: 10,
    3: 25,
    4: 40,
    5: 60,
};

export const addExp = (units: (IUnit | null)[], expAdd: number) => {
    units.forEach((unit) => {
        if (!unit || unit.unitType === EUnitType.UNIT) {
            return;
        }
        addExpToUnit(unit, expAdd);
    });
};

export const levelUpUnit = (unit: IUnit) => {
    unit.level += 1;
    addAttributesOnLevelUp(unit);
};

export const addExpToUnit = (unit: IUnit, expAdd: number) => {
    console.log("addExpToUnit", unit.name, expAdd);
    const { level: currentLevel, exp: currentExp, heroClassType } = unit;

    if (currentLevel === MAX_LEVEL) {
        return;
    }

    unit.exp = currentExp + expAdd;
    console.log("Unit " + unit.name + " now has " + unit.exp + " exp");
    const nextLevelExp = heroClassType === EHeroClassType.BASIC ? EXP_FOR_LEVEL_BASIC[currentLevel + 1] : EXP_FOR_LEVEL_MC[currentLevel + 1];
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

    // if (attribute === "basicMaxHp") {
    //     unit.basicMaxHp += value;
    // }
};

const addAttributesOnLevelUp = (unit: IUnit) => {
    // TODO: calculate attributes increase considering unit class and level
    //TODO: use addAttributeToUnit func?
    //TODO different attr incr for basic and mc heroes
    if (unit.heroClassType === EHeroClassType.BASIC) {
        unit.basicMaxHp += 2;
        unit.basicAttack += 1;
    }
    if (unit.heroClassType === EHeroClassType.MULTI) {
        unit.basicMaxHp += 5;
        unit.basicAttack += 1;
    }
};

export const generateUnitId = (unit: IUnit) => {
    unit.id = unit.id + "_" + generateId();
};

export const generateId = () => {
    const length = 10;
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const createUnits = (unitTemplates: TUnits): TUnits => {
    return unitTemplates.map((unit) => {
        if (!unit) {
            return null;
        }
        return createUnit(unit);
    });
};

export const createUnit = (unitTemplate: IUnit, addedAttributes?: { attr: THeroAttribute; value: number }[]): IUnit => {
    const id = unitTemplate.id + "_" + generateId();
    const skills = unitTemplate.heroClassType === EHeroClassType.MULTI ? [...unitTemplate.skills] : [];
    const unit: IUnit = { ...unitTemplate, id, skills, items: [], addedAttributes: [] };
    // add random hero class skill to basic hero
    if (unit.heroClassType === EHeroClassType.BASIC) {
        unit.skills = [getRandomArrayItem(getClassSkills(unit.heroClass))];
    }
    // added Attributes
    if (addedAttributes && addedAttributes.length > 0) {
        addedAttributes.forEach(({ attr, value }) => {
            unit[attr] += value;
        });
    }
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
            return getRandomArrayItem(unitsLvl1);
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

/* Get unit for creating duel enemy party */
export const getRandomUnit = (day: number) => {
    switch (day) {
        case 0:
            return getRandomArrayItem(unitsLvl1);
        case 1:
            return getRandomArrayItem(unitsLvl1.concat(unitsLvl2).concat(unitsLvl3));
        case 2:
            return getRandomArrayItem(unitsLvl2.concat(unitsLvl3));
        default:
            return getRandomArrayItem(unitsLvl3);
    }
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

export const removeItemFromUnit = (unit: IUnit, itemIndex: number) => {
    const item = unit.items[itemIndex];
    removeItemBonuses(item, unit);
    unit.items.splice(itemIndex, 1);
};

export const getMaxUnitItemCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_ITEM_COUNT : MC_CLASS_MAX_ITEM_COUNT;
};

export const getMaxUnitWeaponCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_WEAPON_COUNT : MC_CLASS_MAX_WEAPON_COUNT;
};
