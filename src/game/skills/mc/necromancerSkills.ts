import { AnimationType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { skeletonUnit, skeletonWarriorUnit } from "../../units/skeletonsMobUnits";
import { skillsetSummon } from "../../utils/skillUtils2";

const buffSummonRegen = (regen: number): IHeroSkill => {
    return {
        type: EHeroSkillType.ATTRIBUTE_INCREASE,
        isBasicAttack: false,
        attribute: "hpRegen",
        value: regen,
        valueType: "number",
        targetType: ETargetType.SUMMON_CURRENT,
        condition: ESkillCondition.HAS_SUMMON,
        animation: AnimationType.NONE,
    };
};

export const necromancerSkill_3: IHeroSkillSet = {
    id: "NecromancerSkeleton",
    //name: "Necromancer skeleton",
    //desc: "Summon a skeleton champion [stats]",
    name: i18n.skills.mc.necromancerSkill.name,
    desc: i18n.skills.mc.necromancerSkill.desc3,
    // skeleton [stats] = [4,10] ~> 7+3,18+7
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.NECROMANCER],
    isMcSkill: true,
    skills: [buffSummonRegen(3), ...skillsetSummon(skeletonUnit, 3, 50, 50, 8, 7)],
    isActivateOnStart: true,
};

export const necromancerSkill_2: IHeroSkillSet = {
    id: "NecromancerSkeleton",
    //name: "Necromancer skeleton",
    //desc: "Summon a skeleton warrior [stats]",
    name: i18n.skills.mc.necromancerSkill.name,
    desc: i18n.skills.mc.necromancerSkill.desc2,
    // was skeleton warrior [stats] = [7,16]
    // now skeleton [stats] = [4,10] ~> 6+2,15+5
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.NECROMANCER],
    isMcSkill: true,
    skills: [buffSummonRegen(2), ...skillsetSummon(skeletonUnit, 2, 35, 50, 5, 5)],
    isActivateOnStart: true,
    nextLevel: necromancerSkill_3,
};

export const necromancerSkill: IHeroSkillSet = {
    id: "NecromancerSkeleton",
    //name: "Necromancer skeleton",
    //desc: "Summon a skeleton [stats]",
    name: i18n.skills.mc.necromancerSkill.name,
    desc: i18n.skills.mc.necromancerSkill.desc1,
    // skeleton [stats] = [4,10] ~> 5+1,13+3
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.NECROMANCER],
    isMcSkill: true,
    skills: [buffSummonRegen(1), ...skillsetSummon(skeletonUnit, 1, 20, 50, 3, 3)],
    isActivateOnStart: true,
    nextLevel: necromancerSkill_2,
};

export const necromancerSkills: THeroSkills = [necromancerSkill];
