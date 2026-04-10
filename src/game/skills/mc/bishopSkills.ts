import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const bishopSkill_3: IHeroSkillSet = {
    id: "bishopHeal",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 40,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 40,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 40,
        },
    ],
};

export const bishopSkill_2: IHeroSkillSet = {
    id: "bishopHeal",
    //name: "Chain heal(2)",
    //desc: "Heals low hp ally\n[2]+[70%xMP] 3 times",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 30,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 30,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 30,
        },
    ],
    nextLevel: bishopSkill_3,
};

export const bishopSkill: IHeroSkillSet = {
    id: "bishopHeal",
    //name: "Chain heal",
    //desc: "Heals low hp ally\n[2]+[50%xMP] 3 times",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 20,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: false,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 20,
        },
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 2,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 20,
        },
    ],
    nextLevel: bishopSkill_2,
};

export const bishopSkills: THeroSkills = [bishopSkill];
