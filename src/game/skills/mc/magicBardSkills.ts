import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const jesterSkillset = (base:number, mpScale:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Fire fists",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BURN,
                value: base,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                mpScale: mpScale,
            },
        },
    ]
}

export const jesterSkill_3: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: i18n.skills.mc.jesterSkill.name,
    desc: i18n.skills.mc.jesterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.JESTER],
    isMcSkill: true,
    skills: jesterSkillset(1,100),
};

export const jesterSkill_2: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: i18n.skills.mc.jesterSkill.name,
    desc: i18n.skills.mc.jesterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.JESTER],
    isMcSkill: true,
    skills: jesterSkillset(1,70),
    nextLevel: jesterSkill_3,
};

export const jesterSkill: IHeroSkillSet = {
    id: "MagicBardBuff",
    name: i18n.skills.mc.jesterSkill.name,
    desc: i18n.skills.mc.jesterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.JESTER],
    isMcSkill: true,
    skills: jesterSkillset(1,50),
    nextLevel: jesterSkill_2,
};

export const jesterPassive: IPassiveSkill = {
    desc: "",
    // todo
}

export const jesterSkills: THeroSkills = [jesterSkill];
