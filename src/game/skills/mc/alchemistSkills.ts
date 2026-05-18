import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

export const alchemistSkill_3: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap(2)",
    //desc: "Swap hp with first ally and heal self [5]+[MPx40%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc2,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 40,
        },
    ],
};

export const alchemistSkill_2: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap(2)",
    //desc: "Swap hp with first ally and heal self [5]+[MPx30%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 30,
        },
    ],
    nextLevel: alchemistSkill_3,
};

export const alchemistSkill: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap",
    //desc: "Swap hp with first ally and heal self [5]+[MPx20%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 20,
        },
    ],
    nextLevel: alchemistSkill_2,
};

const passive_percent_value = 40;
// maxhp ~ 22
// 11+5+x/2 = 22; x = 12

export const alchemistPassive: IPassiveSkill = {
    desc: "At the start of\nturn gain +MP equal to\n40% of lost hp for 1 round",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            type: EAppTriggerType.TURN_START,
            skillId: "Blood catalyst",
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.SELF,
                    value: passive_percent_value,
                    valueType: "percent",
                    valueFrom: "maxHp",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.SELF,
                    value: -passive_percent_value,
                    valueType: "percent",
                    valueFrom: "hp",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Catalyst",
                        timeType: EBuffTimeType.DURATION,
                        duration: 1,
                        targetType: ETargetType.SELF,
                        type: EBuffType.ATTRIBUTE_INCREASE,
                        value: 100,
                        valueType: "percent",
                        valueFrom: "magicPower",
                    },
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                    animation: AnimationType.NONE,
                }
            ]
        }
    }
}

export const alchemistSkills: THeroSkills = [alchemistSkill];
