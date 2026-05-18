import { EAppTriggerType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const minstrelSkillset = (percent:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF_INCREASE_VALUE,
            value: percent,
            valueType: "percent",
            targetFromType: ETargetType.BUFFED_ALLY_RANDOM,
            targetType: ETargetType.BUFFED_ALLY_RANDOM,
        },
    ]
}

export const minstrelSkill_3: IHeroSkillSet = {
    id: "minstrelBuff",
    //name: "Double buff(2)",
    //desc: "Tripls value of a random buff on ally",
    name: i18n.skills.mc.minstrelSkill.name,
    desc: i18n.skills.mc.minstrelSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.MINSTREL],
    isMcSkill: true,
    skills: minstrelSkillset(220),
};

export const minstrelSkill_2: IHeroSkillSet = {
    id: "minstrelBuff",
    //name: "Double buff(2)",
    //desc: "Tripls value of a random buff on ally",
    name: i18n.skills.mc.minstrelSkill.name,
    desc: i18n.skills.mc.minstrelSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.MINSTREL],
    isMcSkill: true,
    skills: minstrelSkillset(150),
    nextLevel: minstrelSkill_3,
};

export const minstrelSkill: IHeroSkillSet = {
    id: "minstrelBuff",
    //name: "Double buff",
    //desc: "Doubles value of a random buff on ally",
    name: i18n.skills.mc.minstrelSkill.name,
    desc: i18n.skills.mc.minstrelSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MINSTREL],
    isMcSkill: true,
    skills: minstrelSkillset(80),
    nextLevel: minstrelSkill_2,
};

export const ministrelPassive: IPassiveSkill = {
    desc: "Heal allies that\nrecieve buff for [1]",
    // todo
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            type: EAppTriggerType.RECIEVE_BUFF,
            limitedRepeats: false,
            targetCheck: ETargetType.ALL_ALLIES,
            skillId: "Uplifting",
            skill: [
                {
                    type: EHeroSkillType.HEAL,
                    targetType: ETargetType.BY_RELEVANT_ID,
                    value: 1,
                    valueType: "number",
                }
            ]
        }
    }
}

export const minstrelSkills: THeroSkills = [minstrelSkill];
