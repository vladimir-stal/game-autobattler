import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
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
import { TOTEM_ID_BLADEDANCER } from "../../totemConsts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const bladedancerSkillset = (atk:number, scale:number):IHeroSkill[] => {
    return [
            {
                type: EHeroSkillType.FORCE_TOTEM_ACTION,
                targetType: ETargetType.SELF,
                condition: ESkillCondition.HAS_TOTEM,
            },
            {
                type: EHeroSkillType.TOTEM,
                totem: {
                    id: TOTEM_ID_BLADEDANCER,
                    name: "Flying blade",
                    skills: [
                        {
                            type: EHeroSkillType.ATTACK,
                            value: atk,
                            targetType: ETargetType.RANDOM_ENEMY,
                            attackType: EHeroAttackType.PHYSICAL,
                            mpScale: scale,
                            ppScale: scale,
                        },
                    ],
                },
                condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
            },
        ];
}

export const bladedancerSkill_3: IHeroSkillSet = {
    id: "flyingBladeTotem",
    name: i18n.skills.mc.bladedancerSkill.name,
    desc: i18n.skills.mc.bladedancerSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLADEDANCER],
    isMcSkill: true,
    skills: bladedancerSkillset(1,35),
};

export const bladedancerSkill_2: IHeroSkillSet = {
    id: "flyingBladeTotem",
    name: i18n.skills.mc.bladedancerSkill.name,
    desc: i18n.skills.mc.bladedancerSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLADEDANCER],
    isMcSkill: true,
    skills: bladedancerSkillset(1,25),
    nextLevel: bladedancerSkill_3,
};

export const bladedancerSkill: IHeroSkillSet = {
    id: "flyingBladeTotem",
    name: i18n.skills.mc.bladedancerSkill.name,
    desc: i18n.skills.mc.bladedancerSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLADEDANCER],
    isMcSkill: true,
    skills: bladedancerSkillset(1,20),
    nextLevel: bladedancerSkill_2,
};

export const bladedancerPassive: IPassiveSkill = {
    desc: i18n.skills.passives.bladedancerPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Let the dance speak for me",
            type: EAppTriggerType.PRE_BATTLE,
            skill: [
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Dance",
                        type: EBuffType.BLADEDANCE,
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        value: 1,
                        valueType: "number",
                        cannotBeTargeted: true,
                    },
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Hidden flow of the dance",
                        type: EBuffType.BATTLE_TRIGGER,
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        value: 1,
                        cannotBeTargeted: true,
                        isHidden: true,
                        appTrigger: {
                            limitedRepeats: false,
                            skillId: "Blade dance",
                            type: EAppTriggerType.AFTER_EVADE,
                            targetCheck: ETargetType.SELF,
                            skill: [
                                {
                                    type: EHeroSkillType.DEBUFF,
                                    debuff: {
                                        name: "Dancer mark",
                                        targetType: ETargetType.BY_RELEVANT_ID,
                                        timeType: EBuffTimeType.DURATION,
                                        value: 1,
                                        type: EDebuffType.MARK_BLADEDANCER,
                                        duration: 3,
                                    },
                                    animation: AnimationType.NONE,
                                },
                                {
                                    type: EHeroSkillType.BUFF,
                                    buff: {
                                        name: "Pirouette",
                                        targetType: ETargetType.SELF,
                                        timeType: EBuffTimeType.TILL_NEXT_BA,
                                        type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                                        value: 1,
                                        valueType: "number",
                                        nestedEffects: [
                                            {
                                                debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                                                attribute: "attack",
                                                value: 40,
                                                valueType: "percent",
                                            }
                                        ]
                                    },
                                    animation: AnimationType.NONE,
                                }
                            ]
                        }
                    },
                },
            ],
        },
    },
};

export const bladedancerSkills: THeroSkills = [bladedancerSkill];
