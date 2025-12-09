import { EHeroClass, EHeroClassType, IHeroSkill, IHeroSkillSet, IItem, IUnit, THeroSkills } from "../../types";
import { allBasicClassesSkills, allClassesSkills_2, BASIC_CLASS_MAX_SKILL_COUNT, MC_CLASS_MAX_SKILL_COUNT, SKILL_MAX_LEVEL, skillPrices } from "../skillConsts";
import { bardSkills, bardSkills_2 } from "../skills/bardSkillConsts";
import { darkSkills, darkSkills_2 } from "../skills/darkSkillConsts";
import { magicSkills, magicSkills_2 } from "../skills/magicSkillConsts";
import { masterSkills, masterSkills_2 } from "../skills/masterSkillConsts";
import { orderSkills, orderSkills_2 } from "../skills/orderSkillConsts";
import { priestSkills, priestSkills_2 } from "../skills/priestSkillConsts";
import { summonSkills, summonSkills_2 } from "../skills/summonSkillConsts";
import { warriorSkills, warriorSkills_2 } from "../skills/warriorSkillConsts";
import { wildSkills, wildSkills_2 } from "../skills/wildSkillConsts";

export const getMaxUnitSkillCount = (heroClassType: EHeroClassType) => {
    return heroClassType === EHeroClassType.BASIC ? BASIC_CLASS_MAX_SKILL_COUNT : MC_CLASS_MAX_SKILL_COUNT;
};

export const removeSkillFromUnit = (unit: IUnit, skillIndex: number) => {
    unit.skills.splice(skillIndex, 1);
};

export const getHeroClassSkills = (heroClass: EHeroClass, day: number): THeroSkills => {
    if (day < 4) {
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
    } else if (day < 8) {
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
    } else {
        //TODO: implement
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
    }
};

export const getHeroClassesSkills = (heroClasses: EHeroClass[], day: number): IHeroSkillSet[] => {
    return getHeroClassSkills(heroClasses[0], day).concat(getHeroClassSkills(heroClasses[1], day));
};

export const getSkillPrice = (skillLeveL: number) => {
    return skillPrices[skillLeveL];
};

export const upgradeSkillSet = (skillSet: IHeroSkillSet): IHeroSkillSet => {
    if (skillSet.level === SKILL_MAX_LEVEL) {
        return skillSet;
    }

    if (!skillSet.nextLevel) {
        console.log("NO NEXT LEVEL ITEM FOR SKILL", skillSet.name);
        return skillSet;
    }

    return skillSet.nextLevel;
};

export const isSkillSet = (entity: unknown): entity is IHeroSkillSet => {
    return (entity as IHeroSkillSet).skills !== undefined;
};

export const getAllClassesSkills = (day: number) => {
    if (day < 4) {
        return allBasicClassesSkills;
    } else if (day < 8) {
        return allClassesSkills_2;
    } else {
        return allClassesSkills_2;
    }
};
