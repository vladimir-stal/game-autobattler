import { EEffectAnimationType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_HEAL_1 } from "../utils/load/skillImagesLoad";
import { outHealBuffSkill } from "./bardSkillConsts";
import { increaseMaxHpSkill } from "./commonSkill3Consts";

// HEAL SELF

export const healSelf_3: IHeroSkillSet = {
    id: "healSelf",
    //name: "Heal self(3)",
    //desc: "Heal [8] self",
    name: i18n.skills.basic.healSelf.name + "(3)",
    desc: i18n.skills.basic.healSelf.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 8, // TODO MP: add MP modifier to value
            targetType: ETargetType.SELF,
            mpScale: 65,
        },
    ],
    image: IMAGE_SKILL_HEAL_1,
};

export const healSelf_2: IHeroSkillSet = {
    id: "healSelf",
    //name: "Heal self(2)",
    //desc: "Heal [6] self",
    name: i18n.skills.basic.healSelf.name + "(2)",
    desc: i18n.skills.basic.healSelf.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 6,
            targetType: ETargetType.SELF,
            mpScale: 50,
        },
    ],
    nextLevel: healSelf_3,
    image: IMAGE_SKILL_HEAL_1,
};

export const healSelf: IHeroSkillSet = {
    id: "healSelf",
    //name: "Heal self",
    //desc: "Heal [4] self",
    name: i18n.skills.basic.healSelf.name,
    desc: i18n.skills.basic.healSelf.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 4,
            targetType: ETargetType.SELF,
            //
            effectAnimationType: EEffectAnimationType.EFFECT_PRIEST_HEAL,
            effectAnimationDelay: 800,
            mpScale: 35,
        },
    ],
    nextLevel: healSelf_2,
    image: IMAGE_SKILL_HEAL_1,
};

// HEAL FIRST

export const healFirst_3: IHeroSkillSet = {
    id: "healFirst",
    //name: "Heal first(3)",
    //desc: "Heal [7] first ally",
    name: i18n.skills.basic.healFirst.name + "(3)",
    desc: i18n.skills.basic.healFirst.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 7, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
            mpScale: 65,
        },
    ],
    image: IMAGE_SKILL_HEAL_1,
};

export const healFirst_2: IHeroSkillSet = {
    id: "healFirst",
    //name: "Heal first(2)",
    //desc: "Heal [5] first ally",
    name: i18n.skills.basic.healFirst.name + "(2)",
    desc: i18n.skills.basic.healFirst.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
            mpScale: 50,
        },
    ],
    image: IMAGE_SKILL_HEAL_1,
};

export const healFirst: IHeroSkillSet = {
    id: "healFirst",
    //name: "Heal first",
    //desc: "Heal [3] first ally",
    name: i18n.skills.basic.healFirst.name,
    desc: i18n.skills.basic.healFirst.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 3, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
            //
            effectAnimationType: EEffectAnimationType.EFFECT_PRIEST_HEAL,
            effectAnimationDelay: 800,
            mpScale: 35,
        },
    ],
    nextLevel: healFirst_2,
    image: IMAGE_SKILL_HEAL_1,
};

// HEAL LOWEST HP ALLY

export const healLowHpSkill_3: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp(3)",
    desc: "Heal [4]+[MP] lowest hp ally",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 100,
        },
    ],
    image: IMAGE_SKILL_HEAL_1,
};

export const healLowHpSkill_2: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp(2)",
    desc: "Heal [4]+[MP*75%] lowest hp ally",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 75,
        },
    ],
    nextLevel: healLowHpSkill_3,
    image: IMAGE_SKILL_HEAL_1,
};

export const healLowHpSkill: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp",
    desc: "Heal [5]+[MP*50%] lowest hp ally",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 50,
        },
    ],
    nextLevel: healLowHpSkill_2,
    image: IMAGE_SKILL_HEAL_1,
};

//

export const priestSkills: THeroSkills = [healSelf, healFirst];

export const priestSkills_2: THeroSkills = priestSkills.concat([healLowHpSkill]);

export const priestSkills_3: THeroSkills = priestSkills_2.concat([outHealBuffSkill, increaseMaxHpSkill]);
