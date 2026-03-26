import { AnimationType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const oracleSkill_2: IHeroSkillSet = {
    id: "warningWhisper",
    //name: i18n.skills.mc.DivineShield.name,
    //desc: i18n.skills.mc.DivineShield.desc1,
    name: "Warning whisper(2)",
    desc: "Evade next 2 basic attacks.\nRemove next debuff.",
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Evade",
                type: EBuffType.EVADE,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 2,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Ignore debuff",
                type: EBuffType.IGNORE_NEXT_DEBUFF,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
            },
        },
    ],
};

export const oracleSkill: IHeroSkillSet = {
    id: "DestinyWhisper",
    //name: i18n.skills.mc.DivineShield.name,
    //desc: i18n.skills.mc.DivineShield.desc1,
    name: "Destiny whisper",
    desc: "Evade next basic attack.\nRemove next debuff.",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Evade",
                type: EBuffType.EVADE,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Ignore debuff",
                type: EBuffType.IGNORE_NEXT_DEBUFF,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
            },
        },
    ],
    nextLevel: oracleSkill_2,
};

export const oracleSkills: THeroSkills = [oracleSkill];
