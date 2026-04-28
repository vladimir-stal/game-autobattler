import { AnimationType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const oracleSkillset = (numEvades:number, numClear:number):IHeroSkill[] => {
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
            animation: AnimationType.NONE
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
    ]
}

export const oracleSkill_3: IHeroSkillSet = {
    id: "warningWhisper",
    name: i18n.skills.mc.oracleSkill.name,
    desc: i18n.skills.mc.oracleSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ORACLE],
    isMcSkill: true,
    skills: oracleSkillset(2,2),
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
    skills: oracleSkillset(2,1),
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
    skills: oracleSkillset(1,1),
    nextLevel: oracleSkill_2,
};

export const oraclePassive: IPassiveSkill = {
    desc: "",
    // to do
}

export const oracleSkills: THeroSkills = [oracleSkill];
