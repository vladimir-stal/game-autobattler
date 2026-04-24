import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ETargetType,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";

export const barbarianSkill_3: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 150,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 4,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
};

export const barbarianSkill_2: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 125,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 3,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    nextLevel: barbarianSkill_3,
};

export const barbarianSkill: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 100,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 2,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    nextLevel: barbarianSkill_2,
};

export const barbarianPassive: IPassiveSkill = {
    desc: "Every 2nd incoming basic\nattack increase regen by 2",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 10,
        valueType: "number",
        cannotBeTargeted: true,
        isHidden: true,
        appTrigger: {
            limitedRepeats: true,
            skillId: "Undying rage",
            type: EAppTriggerType.TAKE_ATTACK,
            targetNumber: 2,
            targetCheck: ETargetType.SELF,
            skill: [
                {
                    type: EHeroSkillType.BUFF_INCREASE_VALUE,
                    targetType: ETargetType.SELF,
                    targetBuffId: "Undying",
                    value: 2,
                    valueType: "number"
                },
                {
                    type: EHeroSkillType.BUFF,
                    targetType: ETargetType.SELF,
                    buff: {
                        name: "Undying",
                        targetType: ETargetType.SELF,
                        type: EBuffType.ATTRIBUTE_INCREASE,
                        timeType: EBuffTimeType.DURATION,
                        duration: 3,
                        value: 2,
                        valueType: "number",
                        attribute: "hpRegen",
                    }
                },
            ],
        },
    },
};

export const barbarianSkills: THeroSkills = [barbarianSkill];
