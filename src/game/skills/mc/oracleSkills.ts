import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroClass,
    EHeroSkillType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";

const oracleSkillset = (numEvades: number, numClear: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Evade",
                type: EBuffType.EVADE,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: numEvades,
                valueType: "number",
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Ignore debuff",
                type: EBuffType.IGNORE_NEXT_DEBUFF,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: numClear,
                valueType: "number",
            },
        },
    ];
};

export const oracleSkill_3: IHeroSkillSet = {
    id: "warningWhisper",
    name: i18n.skills.mc.oracleSkill.name,
    desc: i18n.skills.mc.oracleSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: oracleSkillset(2, 2),
    //nextLevel: oracleSkill_3,
};

export const oracleSkill_2: IHeroSkillSet = {
    id: "warningWhisper",
    //name: "Warning whisper(2)",
    //desc: "Evade next 2 basic attacks.\nRemove next debuff.",
    name: i18n.skills.mc.oracleSkill.name,
    desc: i18n.skills.mc.oracleSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: oracleSkillset(2, 1),
    nextLevel: oracleSkill_3,
};

export const oracleSkill: IHeroSkillSet = {
    id: "DestinyWhisper",
    //name: "Destiny whisper",
    //desc: "Evade next basic attack.\nRemove next debuff.",
    name: i18n.skills.mc.oracleSkill.name,
    desc: i18n.skills.mc.oracleSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: oracleSkillset(1, 1),
    nextLevel: oracleSkill_2,
};

export const oraclePassive: IPassiveSkill = {
    desc: "Gain Armor after each\nevade (1+40%x(MP+PP))",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        isHidden: true,
        cannotBeTargeted: true,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Cannot hit me twice",
            type: EAppTriggerType.AFTER_EVADE,
            skill: [
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "armor",
                    targetType: ETargetType.SELF,
                    value: 1,
                    valueType: "number",
                    mpScale: 40,
                    ppScale: 40,
                },
            ],
        },
    },
};

export const oracleSkills: THeroSkills = [oracleSkill];
