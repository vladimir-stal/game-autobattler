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

const MARK_BURN_DEBUFF_NAME = "Burn mark";

// alternative EDebuffType.MARK_BURN
const inquisitorSkillset = (burns: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetBuffId: MARK_BURN_DEBUFF_NAME,
            targetType: ETargetType.HIGH_MP_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                type: EDebuffType.BATTLE_TRIGGER,
                name: MARK_BURN_DEBUFF_NAME,
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                appTrigger: {
                    limitedRepeats: false,
                    skillId: "Increase burn",
                    type: EAppTriggerType.TURN_START,
                    skill: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            status: EStatusType.BURN,
                            targetType: ETargetType.ANCHOR_TARGET,
                            value: burns,
                            valueType: "number",
                        },
                    ],
                },
            },
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            targetType: ETargetType.HIGH_MP_ENEMY,
            value: burns,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
        },
    ];
};

export const inquisitorSkill_3: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(15),
};
export const inquisitorSkill_2: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(10),
    nextLevel: inquisitorSkill_3,
};
export const inquisitorSkill: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(5),
    nextLevel: inquisitorSkill_2,
};

export const inquisitorPassive: IPassiveSkill = {
    desc: i18n.skills.passives.inquisitorPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            type: EAppTriggerType.TURN_END,
            skillId: "Inquisition",
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    status: EStatusType.BURN,
                    targetType: ETargetType.ALL_ENEMIES,
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "armor",
                    targetType: ETargetType.SELF,
                    value: 30,
                    valueType: "percent",
                    valueFrom: "customNumber",
                },
            ],
        },
    },
};

export const inquisitorSkills: THeroSkills = [inquisitorSkill];
