import { EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, ESkillCondition, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const witchSkillset = (base:number, mpScale:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: base,
            valueType: "number",
            targetType: ETargetType.ALL_ENEMIES,
            mpScale: mpScale,
        },
    ]
}

export const witchSkill_3: IHeroSkillSet = {
    id: "WitchBleedAll",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: witchSkillset(1,100),
};

export const witchSkill_2: IHeroSkillSet = {
    id: "WitchBleedAll",
    //name: "Witch all bleed",
    //desc: "Apply [1]+[MPx70%] bleed to all enemies",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: witchSkillset(1,70),
    nextLevel: witchSkill_3,
};

export const witchSkill: IHeroSkillSet = {
    id: "WitchBleedAll",
    //name: "Witch all bleed",
    //desc: "Apply [1]+[MPx50%] bleed to all enemies",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: witchSkillset(1,50),
    nextLevel: witchSkill_2,
};

export const witchPassive: IPassiveSkill = {
    desc: "Increase MP by 35% of total bleed on all enemies",
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
            skillId: "Blood check",
            type: EAppTriggerType.TURN_START,
            targetCheck: ETargetType.SELF,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ALL_ENEMIES,
                    status: EStatusType.BLEED,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "MP+",
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DURATION,
                        type: EBuffType.ATTRIBUTE_INCREASE,
                        attribute: "magicPower",
                        value: 35,
                        valueFrom: "customNumber",
                        valueType: "percent",
                        duration: 1,
                    }
                }
            ]
        }
    }
}

export const witchSkills: THeroSkills = [witchSkill];
