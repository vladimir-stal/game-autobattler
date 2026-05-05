// FIREFLY SUMMON UNIT

import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    IUnit,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_SKILL_SUMMON_FIREFLY } from "../../utils/load/skillImagesLoad";

export const illusionSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MAGIC,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Illusion", //i18n.units.WARRIORSUMMON,
    id: "ILLUSIONSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

const illusionistSkillset = (mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.SUMMON,
            summon: illusionSummon,
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "magicPower",
            value: 0,
            valueType: "number",
            mpScale: mpScale,
            condition: ESkillCondition.HAS_SUMMON,
        },
    ];
};

export const illusionistSkill_3: IHeroSkillSet = {
    id: "illusionSummonSkill",
    name: i18n.skills.mc.illusionistSkill.name,
    desc: i18n.skills.mc.illusionistSkill.desc3,
    isMcSkill: true,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ILLUSIONIST],
    skills: illusionistSkillset(50),
    image: IMAGE_SKILL_SUMMON_FIREFLY,
};

export const illusionistSkill_2: IHeroSkillSet = {
    id: "illusionSummonSkill",
    name: i18n.skills.mc.illusionistSkill.name,
    desc: i18n.skills.mc.illusionistSkill.desc2,
    isMcSkill: true,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ILLUSIONIST],
    skills: illusionistSkillset(35),
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    nextLevel: illusionistSkill_3,
};

export const illusionistSkill: IHeroSkillSet = {
    id: "illusionSummonSkill",
    name: i18n.skills.mc.illusionistSkill.name,
    desc: i18n.skills.mc.illusionistSkill.desc1,
    isMcSkill: true,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ILLUSIONIST],
    skills: illusionistSkillset(25),
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    nextLevel: illusionistSkill_2,
};

export const illusionistPassive: IPassiveSkill = {
    desc: "Once per each ally, when\nthey die, a random team\nsummon dies instead",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.ALL_ALLIES,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        valueType: "number",
        isHidden: true,
        cannotBeTargeted: true,
        appTrigger: {
            allowCastFromDead: true,
            limitedRepeats: true,
            skillId: "Illusion",
            type: EAppTriggerType.DEATH,
            targetCheck: ETargetType.ANCHOR_TARGET,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ALL_ALLIES,
                    value: 1, // not used, but mandatory
                    childSkill: {
                        type: EHeroSkillType.NONE,
                        condition: ESkillCondition.HAS_SUMMON,
                    },
                },
                {
                    type: EHeroSkillType.HEAL,
                    targetType: ETargetType.BY_UNIT_ID,
                    value: 1,
                    valueType: "number",
                    condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
                },
                {
                    type: EHeroSkillType.SUMMON_REMOVE,
                    targetType: ETargetType.ALL_ALLIES,
                    value: 1,
                    condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
                },
            ],
        },
    },
};

export const illusionistSkills: THeroSkills = [illusionistSkill];
