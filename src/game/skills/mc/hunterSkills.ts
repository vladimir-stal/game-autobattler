import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const HUNTER_MARK_DEBUFF_NAME = "Hunter mark";

const hunterSkillset = (markPercent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: HUNTER_MARK_DEBUFF_NAME,
                type: EDebuffType.MARK_HUNTER,
                targetType: ETargetType.SECOND_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: markPercent,
                valueType: "percent",
            },
        },
    ];
};

export const hunterSkill_3: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(35),
};

export const hunterSkill_2: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(25),
    nextLevel: hunterSkill_3,
};

export const hunterSkill: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(15),
    nextLevel: hunterSkill_2,
};

export const hunterPassive: IPassiveSkill = {
    desc: "Increase active\nHunter's mark strength\nby 10 after landing a\ncritical hit",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            type: EAppTriggerType.AFTER_CRIT,
            skillId: "Mark intensify",
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ALL_ENEMIES,
                    targetBuffId: HUNTER_MARK_DEBUFF_NAME,
                    animation: AnimationType.NONE,
                }, // calc total values of Hunter marks on all enemies
                {
                    type: EHeroSkillType.DEBUFF,
                    debuff: {
                        name: HUNTER_MARK_DEBUFF_NAME,
                        type: EDebuffType.MARK_HUNTER,
                        targetType: ETargetType.SAME_LAST_TARGET,
                        timeType: EBuffTimeType.DUEL,
                        value: 10,
                        valueType: "percent",
                    },
                    animation: AnimationType.NONE,
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                }, // if there was Mark - increase value by 10
                /*{
                    type: EHeroSkillType.DEBUFF,
                    debuff: {
                        name: HUNTER_MARK_DEBUFF_NAME,
                        type: EDebuffType.MARK_HUNTER,
                        targetType: ETargetType.SAME_LAST_TARGET,
                        timeType: EBuffTimeType.DUEL,
                        value: 10,
                        valueType: "percent",
                    },
                    animation: AnimationType.NONE,
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
                },*/ // if there was no Mark - mark enemy that was hit by crit
            ],
        },
    },
};

export const hunterSkills: THeroSkills = [hunterSkill];
