import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EItemBattleBonusType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const assassinSkillset = (poison:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Poison+",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.POISON,
                value: poison,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Aim",
                type: EBuffType.CHANGE_TARGET_TYPE,
                changeTargetTypeTo: ETargetType.LOW_HP_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ]
}

export const assassinSkill_3: IHeroSkillSet = {
    id: "AssassinPoisonBlade",
    //name: "Poison blade(2)",
    //desc: "Apply poison [2] on basic attack.\nTarget lowest hp enemy on next basic attack.",
    name: i18n.skills.mc.assassinSkill.name,
    desc: i18n.skills.mc.assassinSkill.desc3,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ASSASSIN],
    isMcSkill: true,
    skills: assassinSkillset(3),
};

export const assassinSkill_2: IHeroSkillSet = {
    id: "AssassinPoisonBlade",
    //name: "Poison blade(2)",
    //desc: "Apply poison [2] on basic attack.\nTarget lowest hp enemy on next basic attack.",
    name: i18n.skills.mc.assassinSkill.name,
    desc: i18n.skills.mc.assassinSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ASSASSIN],
    isMcSkill: true,
    skills: assassinSkillset(2),
    nextLevel: assassinSkill_3,
};

export const assassinSkill: IHeroSkillSet = {
    id: "AssassinPoisonBlade",
    //name: "Poison blade",
    //desc: "Apply poison [1] on basic attack.\nTarget lowest hp enemy on next basic attack.",
    name: i18n.skills.mc.assassinSkill.name,
    desc: i18n.skills.mc.assassinSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ASSASSIN],
    isMcSkill: true,
    skills: assassinSkillset(1),
    nextLevel: assassinSkill_2,
};

export const assassinPassive: IPassiveSkill = {
    desc: "Deal +20% dmg\nto poisoned targets",
    itemPassive: {
        type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS,
        value: 20,
        valueType: "percent",
        status: EStatusType.POISON,
    }
}

export const assassinSkills: THeroSkills = [assassinSkill];
