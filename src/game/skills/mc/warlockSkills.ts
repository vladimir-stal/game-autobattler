import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const warlockSkill_2: IHeroSkillSet = {
    id: "WarlockCurse",
    //name: "Warlock curse(2)",
    //desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MP] poison.",
    name: i18n.skills.mc.warlockSkill.name,
    desc: i18n.skills.mc.warlockSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-20% ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 20,
                valueType: "percent",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 1,
            targetType: ETargetType.HIGH_ATTACK_ENEMY,
            mpScale: 100,
        },
    ],
};

export const warlockSkill: IHeroSkillSet = {
    id: "WarlockCurse",
    //name: "Warlock curse",
    //desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MPx50%] poison.",
    name: i18n.skills.mc.warlockSkill.name,
    desc: i18n.skills.mc.warlockSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-20% ba", // +MP ????
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 20,
                valueType: "percent",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 1,
            targetType: ETargetType.HIGH_ATTACK_ENEMY,
            mpScale: 50,
        },
    ],
    nextLevel: warlockSkill_2,
};

export const warlockSkills: THeroSkills = [warlockSkill];
