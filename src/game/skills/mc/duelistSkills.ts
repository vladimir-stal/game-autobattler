import {
    AnimationType,
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

const duelistSkillset1: IHeroSkill = {
    type: EHeroSkillType.BUFF_COPY,
    value: 1,
    valueType: "number",
    targetFromType: ETargetType.BUFFED_ALLY_RANDOM,
    targetType: ETargetType.SELF,
    condition: ESkillCondition.NOT_BEFORE_COMBAT,
};
const duelistSkillset2: IHeroSkill = {
    type: EHeroSkillType.BUFF,
    buff: {
        name: "Buff",
        type: EBuffType.BATTLE_TRIGGER,
        targetType: ETargetType.SELF,
        value: 1,
        timeType: EBuffTimeType.DUEL,
        cannotBeTargeted: true,
        appTrigger: {
            limitedRepeats: true,
            skillId: "Duelist copy buff",
            targetCheck: ETargetType.ALL_ALLIES,
            type: EAppTriggerType.RECIEVE_BUFF,
            skill: [
                {
                    type: EHeroSkillType.BUFF_COPY,
                    value: 1,
                    valueType: "number",
                    targetFromType: ETargetType.BY_RELEVANT_ID,
                    targetType: ETargetType.SELF,
                },
            ],
        },
    },
    animation: AnimationType.NONE,
};

export const duelistSkill_3: IHeroSkillSet = {
    id: "DuelistCopyBuff",
    name: i18n.skills.mc.duelistSkill.name,
    desc: i18n.skills.mc.duelistSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.DUELIST],
    isMcSkill: true,
    isActivateOnStart: true,
    skills: [duelistSkillset1,duelistSkillset2],
};

export const duelistSkill_2: IHeroSkillSet = {
    id: "DuelistCopyBuff",
    name: i18n.skills.mc.duelistSkill.name,
    desc: i18n.skills.mc.duelistSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DUELIST],
    isMcSkill: true,
    skills: [duelistSkillset1,duelistSkillset2],
    nextLevel: duelistSkill_3,
};

export const duelistSkill: IHeroSkillSet = {
    id: "DuelistCopyBuff",
    name: i18n.skills.mc.duelistSkill.name,
    desc: i18n.skills.mc.duelistSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DUELIST],
    isMcSkill: true,
    skills: [duelistSkillset1],
    nextLevel: duelistSkill_2,
};

export const duelistPassive: IPassiveSkill = {
    desc: "Add crit.chance to evasion and evasion to crit.chance",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: true,
            type: EAppTriggerType.PRE_BATTLE,
            skillId: "Duelist stance",
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.SELF,
                    attribute: "critChance",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.SELF,
                    attribute: "critChance",
                    value: 100,
                    valueType: "percent",
                    valueFrom: "evasionChance",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.SELF,
                    attribute: "evasionChance",
                    value: 100,
                    valueType: "percent",
                    valueFrom: "customNumber",
                    animation: AnimationType.NONE,
                }
            ]
        }
    }
}

export const duelistSkills: THeroSkills = [duelistSkill];
