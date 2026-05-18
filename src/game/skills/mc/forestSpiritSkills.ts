import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const forestSpititSkillset = (conversionRate:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "hpRegen",
            value: conversionRate,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            attribute: "armor",
            value: 100,
            valueType: "percent",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
    ];
}

export const forestSpititSkill_3: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    name: i18n.skills.mc.forestSpititSkill.name,
    desc: i18n.skills.mc.forestSpititSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: forestSpititSkillset(40),
};

export const forestSpititSkill_2: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    //name: "Spirit Sacrifice(2)",
    //desc: "Sacrifice self armor to gain\n[40%xARMOR] hp regen",
    name: i18n.skills.mc.forestSpititSkill.name,
    desc: i18n.skills.mc.forestSpititSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: forestSpititSkillset(30),
    nextLevel: forestSpititSkill_3,
};

export const forestSpititSkill: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    //name: "Spirit Sacrifice",
    //desc: "Sacrifice self armor to gain\n[20%xARMOR] hp regen",
    name: i18n.skills.mc.forestSpititSkill.name,
    desc: i18n.skills.mc.forestSpititSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: forestSpititSkillset(20),
    nextLevel: forestSpititSkill_2,
};

export const forestSpiritPassive: IPassiveSkill = {
    desc: "Cannot be healed,\ntrigger 50% hpRegen when\nattacked",
    // HEALING_DECREASE
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: true,
            type: EAppTriggerType.PRE_BATTLE,
            skillId: "Initate self buff and debuff",
            skill: [
                {
                    type: EHeroSkillType.DEBUFF,
                    debuff: {
                        name: "Reject healing",
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        type: EDebuffType.HEALING_DECREASE,
                        value: 100,
                        valueType: "percent",
                        isHidden: true,
                        cannotBeTargeted: true,
                    },
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Embrace hpRegen",
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        type: EBuffType.BATTLE_TRIGGER,
                        value: 1,
                        isHidden: true,
                        cannotBeTargeted: true,
                        appTrigger: {
                            limitedRepeats: false,
                            skillId: "I can take the beating",
                            type: EAppTriggerType.TAKE_ATTACK,
                            skill: [
                                {
                                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                                    animation: AnimationType.NONE,
                                    attribute: "hp",
                                    targetType: ETargetType.SELF,
                                    value: 50,
                                    valueFrom: "hpRegen",
                                    valueType: "percent",
                                }
                            ],
                        }
                    },
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Embrace hpRegen 2: return of hpRegen",
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        type: EBuffType.BATTLE_TRIGGER,
                        value: 1,
                        isHidden: true,
                        cannotBeTargeted: true,
                        appTrigger: {
                            limitedRepeats: false,
                            skillId: "I can take the beating",
                            type: EAppTriggerType.TAKE_SKILL_ATTACK,
                            skill: [
                                {
                                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                                    animation: AnimationType.NONE,
                                    attribute: "hp",
                                    targetType: ETargetType.SELF,
                                    value: 50,
                                    valueFrom: "hpRegen",
                                    valueType: "percent",
                                }
                            ],
                        }
                    },
                    animation: AnimationType.NONE,
                },
            ],
        }
    }
}

export const forestSpititSkills: THeroSkills = [forestSpititSkill];
