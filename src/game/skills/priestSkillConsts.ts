import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// HEAL SELF

export const healSelf_3: IHeroSkillSet = {
    id: "healSelf",
    name: "Heal self(3)",
    desc: "Heal [8] self",
    level: 3,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 8, // TODO MP: add MP modifier to value
            targetType: ETargetType.SELF,
        },
    ],
};

export const healSelf_2: IHeroSkillSet = {
    id: "healSelf",
    name: "Heal self(2)",
    desc: "Heal [6] self",
    level: 2,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 6, // TODO MP: add MP modifier to value
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: healSelf_3,
};

export const healSelf: IHeroSkillSet = {
    id: "healSelf",
    name: "Heal self",
    desc: "Heal [4] self",
    level: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 4, // TODO MP: add MP modifier to value
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: healSelf_2,
};

// HEAL FIRST

export const healFirst_3: IHeroSkillSet = {
    id: "healFirst",
    name: "Heal first(3)",
    desc: "Heal [7] first ally",
    level: 3,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 7, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
};

export const healFirst_2: IHeroSkillSet = {
    id: "healFirst",
    name: "Heal first(2)",
    desc: "Heal [5] first ally",
    level: 2,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
};

export const healFirst: IHeroSkillSet = {
    id: "healFirst",
    name: "Heal first",
    desc: "Heal [3] first ally",
    level: 1,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 3, // TODO: mp power
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    nextLevel: healFirst_2,
};

// HEAL LOWEST HP ALLY

export const healLowHpSkill_3: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp(3)",
    desc: "Heal [4]+[MP] lowest hp ally",
    level: 4,
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
};

export const healLowHpSkill_2: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp(2)",
    desc: "Heal [4]+[MP*70%] lowest hp ally",
    level: 3,
    heroClasses: [EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.HEAL,
            isBasicAttack: true,
            value: 5,
            targetType: ETargetType.LOW_HP_ALLY,
            mpScale: 70,
        },
    ],
    nextLevel: healLowHpSkill_3,
};

export const healLowHpSkill: IHeroSkillSet = {
    id: "healLowHp",
    name: "Heal Low Hp",
    desc: "Heal [5]+[MP*50%] lowest hp ally",
    level: 2,
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
};

//

export const priestSkills: THeroSkills = [healSelf, healFirst];

export const priestSkills_2: THeroSkills = [healLowHpSkill, healSelf, healFirst];
