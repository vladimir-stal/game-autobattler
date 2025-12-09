import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// ATTR INCR HP REGEN

export const attrIncrHpReg_3: IHeroSkillSet = {
    id: "attrIncrHpReg",
    name: "+hp regen(3)",
    desc: "Increase self hp regen [3]",
    level: 3,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 3,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
        },
    ],
};

export const attrIncrHpReg_2: IHeroSkillSet = {
    id: "attrIncrHpReg",
    name: "+hp regen(2)",
    desc: "Increase self hp regen [2]",
    level: 2,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 2,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrIncrHpReg_3,
};

export const attrIncrHpReg: IHeroSkillSet = {
    id: "attrIncrHpReg",
    name: "+hp regen",
    desc: "Increase self hp regen [1]",
    level: 1,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrIncrHpReg_2,
};

// SUMMON ATTACK TOTEM SKILL

export const totemAttackSkill_3: IHeroSkillSet = {
    id: "totemAttack",
    name: "attack totem(3)",
    desc: "Summon totem that deals [3] damage to random enemy",
    level: 3,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "basicTotem",
                name: "Totem",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 3,
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.MAGIC,
                    },
                ],
            },
        },
    ],
};

export const totemAttackSkill_2: IHeroSkillSet = {
    id: "totemAttack",
    name: "attack totem(2)",
    desc: "Summon totem that deals [2] damage to random enemy",
    level: 2,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "basicTotem",
                name: "Totem",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 2,
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.MAGIC,
                    },
                ],
            },
        },
    ],
    nextLevel: totemAttackSkill_3,
};

export const totemAttackSkill: IHeroSkillSet = {
    id: "totemAttack",
    name: "attack totem",
    desc: "Summon totem that deals [1] damage to random enemy",
    level: 1,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "basicTotem",
                name: "Totem",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 1,
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.MAGIC,
                    },
                ],
            },
        },
    ],
    nextLevel: totemAttackSkill_2,
};

// ATTR DECR ARMOR

export const attrDescArmor_3: IHeroSkillSet = {
    id: "attrDescArmor",
    name: "-armor(3)",
    desc: "Break [13] armor to first enemy",
    level: 4,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            value: 13, //TODO MP: add MP to armor decrease
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
};

export const attrDescArmor_2: IHeroSkillSet = {
    id: "attrDescArmor",
    name: "-armor(2)",
    desc: "Break [10] armor to first enemy",
    level: 3,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            value: 10, //TODO MP: add MP to armor decrease
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: attrDescArmor_3,
};

export const attrDescArmor: IHeroSkillSet = {
    id: "attrDescArmor",
    name: "-armor",
    desc: "Break [8] armor to first enemy",
    level: 2,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            value: 8, //TODO MP: add MP to armor decrease
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    nextLevel: attrDescArmor_2,
};

//

export const wildSkills: THeroSkills = [totemAttackSkill]; //[totemAttackSkill, attrIncrHpReg];

export const wildSkills_2: THeroSkills = [attrDescArmor, totemAttackSkill, attrIncrHpReg];
