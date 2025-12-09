import { EHeroAttackType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// MAGIC ATTACK

export const magicAttack_3: IHeroSkillSet = {
    id: "magicAttack",
    name: "Magic Attack(3)",
    desc: "Deal [9] magic damage to first enemy",
    level: 3,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 9, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
};

export const magicAttack_2: IHeroSkillSet = {
    id: "magicAttack",
    name: "Magic Attack(2)",
    desc: "Deal [7] magic damage to first enemy",
    level: 2,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 7, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttack_3,
};

export const magicAttack: IHeroSkillSet = {
    id: "magicAttack",
    name: "Magic Attack",
    desc: "Deal [5] magic damage to first enemy",
    level: 1,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 5, // TODO: mp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.MAGIC,
        },
    ],
    nextLevel: magicAttack_2,
};

// APPLY BURN

export const applyBurn_3: IHeroSkillSet = {
    id: "applyBurn",
    name: "Burn(3)",
    desc: "Apply [6] burn on the first enemy",
    level: 2,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 6,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
};

export const applyBurn_2: IHeroSkillSet = {
    id: "applyBurn",
    name: "Burn(2)",
    desc: "Apply [4] burn on the first enemy",
    level: 2,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 4,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: applyBurn_3,
};

export const applyBurn: IHeroSkillSet = {
    id: "applyBurn",
    name: "Burn",
    desc: "Apply [3] burn on the first enemy",
    level: 1,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: 3,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: applyBurn_2,
};

// MAGIC ATTACK ALL ENEMIES

export const magicAttackAll_3: IHeroSkillSet = {
    id: "magicAttackAll",
    name: "Magic Attack All(3)",
    desc: "Deal [1]+[MP] magic damage to all enemies",
    level: 5,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 100,
        },
    ],
};

export const magicAttackAll_2: IHeroSkillSet = {
    id: "magicAttackAll",
    name: "Magic Attack All(2)",
    desc: "Deal [1]+[MP*70%] magic damage to all enemies",
    level: 4,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 70,
        },
    ],
    nextLevel: magicAttackAll_3,
};

export const magicAttackAll: IHeroSkillSet = {
    id: "magicAttackAll",
    name: "Magic Attack All",
    desc: "Deal [1]+[MP*50%] magic damage to all enemies",
    level: 3,
    heroClasses: [EHeroClass.MAGIC],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTACK,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.MAGIC,
            mpScale: 50,
        },
    ],
    nextLevel: magicAttackAll_2,
};

//
export const magicSkills: THeroSkills = [applyBurn]; //[magicAttack, applyBurn];

export const magicSkills_2: THeroSkills = [magicAttackAll, magicAttack, applyBurn];
