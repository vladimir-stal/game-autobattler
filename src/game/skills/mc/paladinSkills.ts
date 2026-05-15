import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

//TODO: DivineShield should also ignore dmg below X instead of removing self. X is increased with lvl and scales from PP or hp%
export const paladinSkill_3: IHeroSkillSet = {
    id: "DivineShield",
    name: i18n.skills.mc.DivineShield.name,
    desc: i18n.skills.mc.DivineShield.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.PALADIN],
    isMcSkill: true,
    isBasicAttack: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Divine shield",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 4, // effectively always active, but value dont stack
                value: 10,
                ppScale: 60,
            },
            animation: AnimationType.PALADIN_MAGIC_SHIELD,
        },
    ],
};

export const paladinSkill_2: IHeroSkillSet = {
    id: "DivineShield",
    name: i18n.skills.mc.DivineShield.name,
    desc: i18n.skills.mc.DivineShield.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.PALADIN],
    isMcSkill: true,
    isBasicAttack: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Divine shield",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 4, // effectively always active, but value dont stack
                value: 7,
                ppScale: 40,
            },
            animation: AnimationType.PALADIN_MAGIC_SHIELD,
        },
    ],
    nextLevel: paladinSkill_3,
};

export const paladinSkill: IHeroSkillSet = {
    id: "DivineShield",
    name: i18n.skills.mc.DivineShield.name,
    desc: i18n.skills.mc.DivineShield.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.PALADIN],
    isMcSkill: true,
    isBasicAttack: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Divine shield",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 4, // effectively always active, but value dont stack
                value: 5,
                ppScale: 20,
            },
            animation: AnimationType.PALADIN_MAGIC_SHIELD,
        },
    ],
    nextLevel: paladinSkill_2,
};

export const paladinPassive: IPassiveSkill = {
    desc: "Heal low hp unit when block or negate dmg for [2+35%x(PP+MP)]",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Holy light",
            type: EAppTriggerType.AFTER_FULL_BLOCK,
            skill: [
                {
                    type: EHeroSkillType.HEAL,
                    targetType: ETargetType.LOW_PERCENT_ALLY,
                    value: 2,
                    ppScale: 35,
                    mpScale: 35,
                }
            ],
        }
    }
}

export const paladinSkills: THeroSkills = [paladinSkill];
