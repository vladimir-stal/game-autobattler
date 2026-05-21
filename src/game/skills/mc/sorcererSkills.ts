import { EHeroAttackType, EHeroClass, EHeroSkillType, EItemBattleBonusType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

// TODO: increase targets to 3 and 4 with level, decrease scaling from MP ???
export const sorcererSkill_3: IHeroSkillSet = {
    id: "SorcererAttack",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 30,
        },
    ],
};

export const sorcererSkill_2: IHeroSkillSet = {
    id: "SorcererAttack",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.FIRST_THREE_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 30,
        },
    ],
    nextLevel: sorcererSkill_3,
};

export const sorcererSkill: IHeroSkillSet = {
    id: "SorcererAttack",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.FIRST_TWO_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 30,
        },
    ],
    nextLevel: sorcererSkill_2,
};

export const sorcererPassive: IPassiveSkill = {
    desc: i18n.skills.passives.sorcererPassive,
    // battleUtils - prepareUnitToBattle()
    itemPassive: {
        type: EItemBattleBonusType.CRIT_WITH_MAGIC,
        value: 1,
        valueType: "number",
    },
};

export const sorcererSkills: THeroSkills = [sorcererSkill];
