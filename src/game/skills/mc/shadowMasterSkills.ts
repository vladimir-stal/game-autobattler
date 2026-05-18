import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

// TODO: when buff repeats what happens? add MP scale?

const buffName = "Dark heal";

const shadowMasterSkillset = (percentIncrease: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            targetBuffId: buffName,
            // calcualte totalValue of buffs/debuffs with name buffName
            // custom number is 0 - then no buffs with the same name
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: buffName,
                type: EBuffType.DARK_HEAL,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 100 + percentIncrease,
                valueType: "percent",
            },
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: buffName,
                type: EBuffType.DARK_HEAL,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: percentIncrease,
                valueType: "percent",
            },
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
        },
    ];
};

export const shadowMasterSkill_3: IHeroSkillSet = {
    id: "ShadowMasterBuff",
    name: i18n.skills.mc.shadowMasterSkill.name,
    desc: i18n.skills.mc.shadowMasterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHADOW_MASTER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: shadowMasterSkillset(45),
};

export const shadowMasterSkill_2: IHeroSkillSet = {
    id: "ShadowMasterBuff",
    name: i18n.skills.mc.shadowMasterSkill.name,
    desc: i18n.skills.mc.shadowMasterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHADOW_MASTER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: shadowMasterSkillset(30),
    nextLevel: shadowMasterSkill_3,
};

export const shadowMasterSkill: IHeroSkillSet = {
    id: "ShadowMasterBuff",
    name: i18n.skills.mc.shadowMasterSkill.name,
    desc: i18n.skills.mc.shadowMasterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHADOW_MASTER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: shadowMasterSkillset(15),
    nextLevel: shadowMasterSkill_2,
};

export const shadowMasterPassive: IPassiveSkill = {
    desc: "Gain 1 hp regen when any unit dies",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            skillId: "Feed on fear",
            type: EAppTriggerType.DEATH,
            targetCheck: ETargetType.EVERY_UNIT,
            skill: [
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "hpRegen",
                    value: 1,
                    valueType: "number",
                    targetType: ETargetType.SELF,
                },
            ],
            limitedRepeats: false,
        },
    },
};

export const shadowMasterSkills: THeroSkills = [shadowMasterSkill];
