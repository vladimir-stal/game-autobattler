import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

// TODO: increase targets to 3 and 4 with level, decrease scaling from MP ???
export const sorcererSkill_3: IHeroSkillSet = {
    id: "SorcererAttack",
    //name: "Sorcerer attack(3)",
    //desc: "Deal [5]+[MP*40%] magic damage\n to all enemies.\nNo basic attack follows.",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            isBasicAttack: false,
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
    //name: "Sorcerer attack(2)",
    //desc: "Deal [5]+[MP*30%] magic damage\n to first three enemies.\nNo basic attack follows.",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            isBasicAttack: false,
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
    //name: "Sorcerer attack",
    //desc: "Deal [5]+[MP*20%] magic damage\n to first two enemies.\nNo basic attack follows.",
    name: i18n.skills.mc.sorcererSkill.name,
    desc: i18n.skills.mc.sorcererSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SORCERER],
    isMcSkill: true,
    isBasicAttack: false,
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.FIRST_TWO_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 30,
        },
    ],
    nextLevel: sorcererSkill_2,
};

export const sorcererSkills: THeroSkills = [sorcererSkill];
