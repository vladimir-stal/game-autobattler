import { AnimationType, EHeroAttackType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, EUnitType, IHeroSkill, IHeroSkillSet, IUnit, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { skeletonUnit, skeletonWarriorUnit } from "../../units/skeletonsMobUnits";
import { skillsetSummon } from "../../utils/skillUtils2";

const buffSummonRegen = (regen: number): IHeroSkill => {
    return {
        type: EHeroSkillType.ATTRIBUTE_INCREASE,
        attribute: "hpRegen",
        value: regen,
        valueType: "number",
        targetType: ETargetType.SUMMON_CURRENT,
        condition: ESkillCondition.HAS_SUMMON,
        animation: AnimationType.NONE,
    };
};
const skillSetSummonPositional = (summon_front: IUnit, summon_back: IUnit, atkPure: number, atkPercent: number, atkMpScale: number, hpPure: number, armorPure: number): IHeroSkill[] => {
    const skset = skillsetSummon(summon_front,atkPure,atkPercent,atkMpScale,hpPure,armorPure);
    const infront:IHeroSkill = {
                type: EHeroSkillType.REPEATING_SKILL,
                value: 1,
                valueType: "number",
                condition: ESkillCondition.IN_FRONT_ROW,
                childSkill: skset.pop(),
                targetType: ETargetType.SELF, // not used
                animation: AnimationType.NONE,
            };
    const inback:IHeroSkill = {
                type: EHeroSkillType.REPEATING_SKILL,
                value: 1,
                valueType: "number",
                condition: ESkillCondition.IN_BACK_ROW,
                childSkill: {
                    type: EHeroSkillType.SUMMON,
                    summon: summon_back,
                    condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
                },
                targetType: ETargetType.SELF, // not used
                animation: AnimationType.NONE,
            };
    return skset.concat(infront,inback);
}

export const skeletonFrontSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.DARK,
    mobHeroClasses: [],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.SKELETON,
    id: "SkeletonFrontSummon",
    skills: [],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [],
};
export const skeletonBackSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.DARK,
    mobHeroClasses: [],
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    basicAttack: 7,
    basicAttackTimes: 1,
    basicMaxHp: 6,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.SKELETONMAGE,
    id: "SkeletonBackSummon",
    skills: [],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [],
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
    skills: [buffSummonRegen(3), ...skillSetSummonPositional(skeletonFrontSummon,skeletonBackSummon, 3, 50, 50, 8, 7)],
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
    skills: [buffSummonRegen(2), ...skillSetSummonPositional(skeletonFrontSummon,skeletonBackSummon, 2, 35, 50, 5, 5)],
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
    skills: [buffSummonRegen(1), ...skillSetSummonPositional(skeletonFrontSummon,skeletonBackSummon, 1, 20, 50, 3, 3)],
    isActivateOnStart: true,
    nextLevel: necromancerSkill_2,
};

export const necromancerSkills: THeroSkills = [necromancerSkill];
