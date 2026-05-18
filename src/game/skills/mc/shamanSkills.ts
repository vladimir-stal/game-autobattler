import { EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { TOTEM_ID_SHAMAN } from "../../totemConsts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

export const shamanSkill_3: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            value: 0,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 100,
        },
    ],
};

export const shamanSkill_2: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            value: 0,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 70,
        },
    ],
    nextLevel: shamanSkill_3,
};

export const shamanSkill: IHeroSkillSet = {
    id: "shamanTotemEmpower",
    name: i18n.skills.mc.shamanTotemEmpower.name,
    desc: i18n.skills.mc.shamanTotemEmpower.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            value: 0,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 50,
        },
    ],
    nextLevel: shamanSkill_2,
};

export const shamanPassive: IPassiveSkill = {
    desc: "Summons totem\nbefore battle; it uses\nabilities of any other\ntotem skills of Shaman",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: true,
            type: EAppTriggerType.PRE_BATTLE,
            skillId: "Shaman totem",
            skill: [
                {
                    type: EHeroSkillType.TOTEM,
                    totem: {
                        id: TOTEM_ID_SHAMAN,
                        name: "Тотем шамана",
                        skills: [],
                    },
                },
                // ? TODO: if too strong - make a totem temporary
            ],
        },
    },
};

export const shamanSkills: THeroSkills = [shamanSkill];
