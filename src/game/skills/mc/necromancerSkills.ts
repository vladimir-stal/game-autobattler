import { EHeroClass, EHeroSkillType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { skeletonUnit, skeletonWarriorUnit } from "../../units/skeletonsMobUnits";

export const necromancerSkill_2: IHeroSkillSet = {
    id: "NecromancerSkeleton",
    name: "Necromancer skeleton",
    desc: "Summon a skeleton warrior [7,16]",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.NECROMANCER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: skeletonWarriorUnit,
        },
    ],
};

export const necromancerSkill: IHeroSkillSet = {
    id: "NecromancerSkeleton",
    name: "Necromancer skeleton",
    desc: "Summon a skeleton [4,10]",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.NECROMANCER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: skeletonUnit,
        },
    ],
    isActivateOnStart: true,
    nextLevel: necromancerSkill_2,
};

export const necromancerSkills: THeroSkills = [necromancerSkill];
