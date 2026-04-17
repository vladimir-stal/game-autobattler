import { ECardType, EHeroClass, EHeroClassType, IBattleUnit, IHeroSkill, IHeroSkillSet, IUnit, THeroSkills } from "../../types";

import { GameScene } from "../scenes/GameScene";
import {
    allBasicClassesSkills,
    allClassesSkills_2,
    allClassesSkills_3,
    BASIC_CLASS_MAX_SKILL_COUNT,
    MC_CLASS_MAX_SKILL_COUNT,
    SKILL_MAX_LEVEL,
    skillPrices,
} from "../skillConsts";
import { bardSkills, bardSkills_2, bardSkills_3 } from "../skills/bardSkillConsts";
import { mixedClassSkills1, mixedClassSkills2, mixedClassSkills3 } from "../skills/commonSkillConsts";
import { darkSkills, darkSkills_2, darkSkills_3 } from "../skills/darkSkillConsts";
import { magicSkills, magicSkills_2, magicSkills_3 } from "../skills/magicSkillConsts";
import { masterSkills, masterSkills_2, masterSkills_3 } from "../skills/masterSkillConsts";
import { orderSkills, orderSkills_2, orderSkills_3 } from "../skills/orderSkillConsts";
import { priestSkills, priestSkills_2, priestSkills_3 } from "../skills/priestSkillConsts";
import { summonSkills, summonSkills_2, summonSkills_3 } from "../skills/summonSkillConsts2";
import { warriorSkills, warriorSkills_2, warriorSkills_3 } from "../skills/warriorSkillConsts";
import { wildSkills, wildSkills_2, wildSkills_3 } from "../skills/wildSkillConsts";
import { calculateIncreaseValue } from "./battleUtils";
import { getRandomArrayItem } from "./commonUtils";

export const getMaxUnitSkillCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_SKILL_COUNT : MC_CLASS_MAX_SKILL_COUNT;
};

export const removeSkillFromUnit = (unit: IUnit, skillIndex: number) => {
    unit.skills.splice(skillIndex, 1);
};

/** @returns all skills for specific basic hero class */
export const getHeroClassSkills = (heroClass: EHeroClass, day: number): THeroSkills => {
    if (day < 3) {
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
            case EHeroClass.SUMMON:
                return summonSkills;
            case EHeroClass.PRIEST:
                return priestSkills;
            case EHeroClass.WARRIOR:
                return warriorSkills;
            case EHeroClass.WILD:
                return wildSkills;
            default:
                return [];
        }
    } else if (day < 5) {
        switch (heroClass) {
            case EHeroClass.BARD:
                return bardSkills_2;
            case EHeroClass.DARK:
                return darkSkills_2;
            case EHeroClass.MAGIC:
                return magicSkills_2;
            case EHeroClass.MASTER:
                return masterSkills_2;
            case EHeroClass.ORDER:
                return orderSkills_2;
            case EHeroClass.SUMMON:
                return summonSkills_2;
            case EHeroClass.PRIEST:
                return priestSkills_2;
            case EHeroClass.WARRIOR:
                return warriorSkills_2;
            case EHeroClass.WILD:
                return wildSkills_2;
            default:
                return [];
        }
    } else if (day < 7) {
        switch (heroClass) {
            case EHeroClass.BARD:
                return bardSkills_3;
            case EHeroClass.DARK:
                return darkSkills_3;
            case EHeroClass.MAGIC:
                return magicSkills_3;
            case EHeroClass.MASTER:
                return masterSkills_3;
            case EHeroClass.ORDER:
                return orderSkills_3;
            case EHeroClass.SUMMON:
                return summonSkills_3;
            case EHeroClass.PRIEST:
                return priestSkills_3;
            case EHeroClass.WARRIOR:
                return warriorSkills_3;
            case EHeroClass.WILD:
                return wildSkills_3;
            default:
                return [];
        }
    } else if (day < 9) {
        // TODO: lvl 4 skills here
        switch (heroClass) {
            case EHeroClass.BARD:
                return bardSkills_3;
            case EHeroClass.DARK:
                return darkSkills_3;
            case EHeroClass.MAGIC:
                return magicSkills_3;
            case EHeroClass.MASTER:
                return masterSkills_3;
            case EHeroClass.ORDER:
                return orderSkills_3;
            case EHeroClass.SUMMON:
                return summonSkills_3;
            case EHeroClass.PRIEST:
                return priestSkills_3;
            case EHeroClass.WARRIOR:
                return warriorSkills_3;
            case EHeroClass.WILD:
                return wildSkills_3;
            default:
                return [];
        }
    } else {
        // TODO: lvl 5 skills here
        switch (heroClass) {
            case EHeroClass.BARD:
                return bardSkills_3;
            case EHeroClass.DARK:
                return darkSkills_3;
            case EHeroClass.MAGIC:
                return magicSkills_3;
            case EHeroClass.MASTER:
                return masterSkills_3;
            case EHeroClass.ORDER:
                return orderSkills_3;
            case EHeroClass.SUMMON:
                return summonSkills_3;
            case EHeroClass.PRIEST:
                return priestSkills_3;
            case EHeroClass.WARRIOR:
                return warriorSkills_3;
            case EHeroClass.WILD:
                return wildSkills_3;
            default:
                return [];
        }
    }
};

export const getTopHeroClassSkill = (heroClass: EHeroClass, day: number): IHeroSkillSet => {
    let topPriceLevel;

    if (day < 3) {
        topPriceLevel = 1;
    } else if (day < 6) {
        topPriceLevel = 2;
    } else if (day < 8) {
        topPriceLevel = 3;
    } else {
        topPriceLevel = 3;
    }

    return getRandomArrayItem(getHeroClassSkills(heroClass, day).filter((skill) => skill.priceLevel === topPriceLevel));
};

/** @returns all skills for 2 basic hero classes */
export const getHeroClassesSkills = (heroClasses: EHeroClass[], day: number): IHeroSkillSet[] => {
    return getHeroClassSkills(heroClasses[0], day).concat(getHeroClassSkills(heroClasses[1], day));
};

export const getSkillPrice = (skillLeveL: number, additionalLevel: number = 0) => {
    return skillPrices[skillLeveL + additionalLevel];
};

export const getAllHoldingSkills = (gameScene: GameScene): IHeroSkillSet[] => {
    let list: IHeroSkillSet[] = [];
    // excluding MC skills
    // skills in inventory
    gameScene.inventoryPanel.slots.forEach((slot) => {
        if (slot.slot?.card?.card.type === ECardType.SKILL) {
            const sk = slot.slot.card.card.skill;
            if (sk && !sk.isMcSkill) sk.previousLevel ? list.push(sk.previousLevel) : list.push(sk);
        }
    });
    // skills equipped
    gameScene.unitPanel.slots.forEach((slot) => {
        if (slot.slot?.card?.card.type === ECardType.UNIT) {
            slot.slot?.card?.card?.unit?.skills.forEach((skill) => {
                if (skill && !skill.isMcSkill) skill.previousLevel ? list.push(skill.previousLevel) : list.push(skill);
            });
        }
    });
    return list;
};

export const upgradeSkillSet = (skillSet: IHeroSkillSet, skillSet2: IHeroSkillSet): IHeroSkillSet => {
    if (skillSet.level === SKILL_MAX_LEVEL) {
        return skillSet;
    }

    if (!skillSet.nextLevel) {
        console.log("NO NEXT LEVEL ITEM FOR SKILL", skillSet.name);
        return skillSet;
    }

    const upgradedSkill = { ...skillSet.nextLevel };
    upgradedSkill.previousLevel = skillSet;

    upgradedSkill.isActivateOnStart = skillSet.isActivateOnStart || skillSet2.isActivateOnStart;
    upgradedSkill.isChained = skillSet.isChained || skillSet2.isChained;

    return upgradedSkill;
};

export const isSkillSet = (entity: unknown): entity is IHeroSkillSet => {
    return (entity as IHeroSkillSet).skills !== undefined;
};

/**
 *
 * @param day
 * @returns List of all skills for current day
 */
export const getAllClassesSkills = (day: number) => {
    if (day < 3) {
        return allBasicClassesSkills;
    } else if (day < 6) {
        return allClassesSkills_2;
    } else if (day < 8) {
        return allClassesSkills_3;
    } else {
        return allClassesSkills_3;
    }
};

/**
 *
 * @param day
 * @returns List of skills for two basic hero classes for current day
 */
export const getMixedClassesSkills = (day: number) => {
    if (day < 3) {
        return mixedClassSkills1;
    } else if (day < 6) {
        return mixedClassSkills1.concat(mixedClassSkills2);
    } else if (day < 8) {
        return mixedClassSkills1.concat(mixedClassSkills2).concat(mixedClassSkills3);
    } else {
        return mixedClassSkills1.concat(mixedClassSkills2).concat(mixedClassSkills3);
    }
};

/**
 *
 * @param day
 * @returns Random top level skill for current day
 */
export const getTopAllClassesSkill = (day: number) => {
    let topPriceLevel;
    let allSkills: IHeroSkillSet[];

    if (day < 3) {
        topPriceLevel = 1;
        allSkills = allBasicClassesSkills;
    } else if (day < 6) {
        topPriceLevel = 2;
        allSkills = allClassesSkills_2;
    } else if (day < 8) {
        topPriceLevel = 3;
        allSkills = allClassesSkills_3;
    } else {
        topPriceLevel = 3;
        allSkills = allClassesSkills_3;
    }

    return getRandomArrayItem(allSkills.filter((skill) => skill.priceLevel === topPriceLevel));
};

export const calculateSkillValue = (skill: IHeroSkill, caster: IBattleUnit): number => {
    const { value, valueType, valueFrom, mpScale, ppScale } = skill;
    const mpScaleValue = mpScale ? Math.floor((mpScale * caster.magicPower) / 100) : 0;
    const ppScaleValue = ppScale ? Math.floor((ppScale * caster.physicalPower) / 100) : 0;
    const percentFrom = valueFrom ? caster[valueFrom] : undefined;
    return calculateIncreaseValue(0, value || 0, valueType || "number", percentFrom) + mpScaleValue + ppScaleValue;
};
