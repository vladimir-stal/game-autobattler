import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

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
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "+2 poison on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.POISON,
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "weak point",
                type: EBuffType.CHANGE_TARGET_TYPE,
                //statusType: EStatusType.POISON,
                changeTargetTypeTo: ETargetType.LOW_HP_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA, /// 2 next basic attacks ????
            },
        },
    ],
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
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "+1 poison on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.POISON,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "weak point",
                type: EBuffType.CHANGE_TARGET_TYPE,
                //statusType: EStatusType.POISON,
                changeTargetTypeTo: ETargetType.LOW_HP_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: assassinSkill_2,
};

export const assassinSkills: THeroSkills = [assassinSkill];
