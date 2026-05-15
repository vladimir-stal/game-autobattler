import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const alchemistSkill_3: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap(2)",
    //desc: "Swap hp with first ally and heal self [5]+[MPx40%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc2,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 40,
        },
    ],
};

export const alchemistSkill_2: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap(2)",
    //desc: "Swap hp with first ally and heal self [5]+[MPx30%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 30,
        },
    ],
    nextLevel: alchemistSkill_3,
};

export const alchemistSkill: IHeroSkillSet = {
    id: "AlchemistHpSwap",
    //name: "Alchemist hp swap",
    //desc: "Swap hp with first ally and heal self [5]+[MPx20%]",
    name: i18n.skills.mc.alchemistSkill.name,
    desc: i18n.skills.mc.alchemistSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ALCHEMIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.LOW_PERCENT_ALLY,
        },
        {
            type: EHeroSkillType.HEAL,
            value: 5,
            targetType: ETargetType.SELF,
            mpScale: 20,
        },
    ],
    nextLevel: alchemistSkill_2,
};

export const alchemistPassive: IPassiveSkill = {
    desc: "",
    // todo
}

export const alchemistSkills: THeroSkills = [alchemistSkill];
