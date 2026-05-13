import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const monkSkill_3: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear(2)",
    //desc: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
};

export const monkSkill_2: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear(2)",
    //desc: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: monkSkill_3,
};

export const monkSkill: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear",
    //desc: "Remove negative status\nfrom self.\nRemove debuff from self",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: monkSkill_2,
};

export const monkPassive: IPassiveSkill = {
    desc: "Healing skills additionally restore 2 health to self and activate a totem",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        cannotBeTargeted: true,
        isHidden: true,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Totem healing push",
            type: EAppTriggerType.AFTER_HEAL,
            skill: [
                {
                    type: EHeroSkillType.FORCE_TOTEM_ACTION,
                    targetType: ETargetType.SELF,
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.SELF,
                    attribute: "hp",
                    value: 2,
                    valueType: "number",
                },
            ],
        }
    }
}

export const monkSkills: THeroSkills = [monkSkill];
