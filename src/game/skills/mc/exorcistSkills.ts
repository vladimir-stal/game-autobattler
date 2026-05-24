import { AnimationType, EAppTriggerType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const exorcistSkillset = (heal:number, mpScale:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ENEMIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.HAS_SUMMON,
            }
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ENEMIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.HAS_TOTEM,
            }
        },
        {
            type: EHeroSkillType.TOTEM_REMOVE,
            targetType: ETargetType.ALL_ENEMIES,
            value: 1,
        },
        {
            type: EHeroSkillType.SUMMON_REMOVE,
            targetType: ETargetType.ALL_ENEMIES,
            value: 1,
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            childSkill: {
                type: EHeroSkillType.HEAL,
                targetType: ETargetType.ALL_ALLIES,
                value: heal,
                valueType: "number",
                mpScale: mpScale,
            },
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE
        },
    ];
}

export const exorcistSkill_3: IHeroSkillSet = {
    id: "ExorcistClear",
    name: i18n.skills.mc.exorcistSkill.name,
    desc: i18n.skills.mc.exorcistSkill.desc3,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.EXORCIST],
    isMcSkill: true,
    skills: exorcistSkillset(2,50),
    //nextLevel: exorcistSkill_2
};

export const exorcistSkill_2: IHeroSkillSet = {
    id: "ExorcistClear",
    name: i18n.skills.mc.exorcistSkill.name,
    desc: i18n.skills.mc.exorcistSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.EXORCIST],
    isMcSkill: true,
    skills: exorcistSkillset(1,35),
    nextLevel: exorcistSkill_3
};

export const exorcistSkill: IHeroSkillSet = {
    id: "ExorcistClear",
    name: i18n.skills.mc.exorcistSkill.name,
    desc: i18n.skills.mc.exorcistSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.EXORCIST],
    isMcSkill: true,
    skills: exorcistSkillset(0,25),
    nextLevel: exorcistSkill_2,
};

export const exorcistPassive: IPassiveSkill = {
    desc: "After any healing skill reduce statuses by 2 on last healed target",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Little cure",
            type: EAppTriggerType.AFTER_HEAL,
            skill: [
                {
                    type: EHeroSkillType.STATUS_MODIFY_AMOUNT,
                    targetType: ETargetType.BY_RELEVANT_ID, // last healed target
                    value: -2,
                    valueType: "number",
                    animation: AnimationType.NONE,
                }
            ],
        }
    }
}

export const exorcistSkills: THeroSkills = [exorcistSkill];
