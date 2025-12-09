import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// BUFF NEXT BA ALL

export const buffNextBaAll_3: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: "Buff BA all(3)",
    desc: "Buff next basic attack for [4] damage for all allies",
    level: 3,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+4 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 4,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
};

export const buffNextBaAll_2: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: "Buff BA all(2)",
    desc: "Buff next basic attack for [3] damage for all allies",
    level: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+3 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 3,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaAll_3,
};

export const buffNextBaAll: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: "Buff BA all",
    desc: "Buff next basic attack for [2] damage for all allies",
    level: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+2 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaAll_2,
};

// BUFF BA SELF

export const buffBaSelf_3: IHeroSkillSet = {
    id: "buffBaSelf",
    name: "Buff self BA(3)",
    desc: "Buff self basic attack [3]",
    level: 3,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 3,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
};

export const buffBaSelf_2: IHeroSkillSet = {
    id: "buffBaSelf",
    name: "Buff self BA(2)",
    desc: "Buff self basic attack [2]",
    level: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: buffBaSelf_3,
};

export const buffBaSelf: IHeroSkillSet = {
    id: "buffBaSelf",
    name: "Buff self BA",
    desc: "Buff self basic attack [1]",
    level: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: buffBaSelf_2,
};

// BUFF PP ALL SKILL

export const buffPPAll_3: IHeroSkillSet = {
    id: "buffPpAll",
    name: "Buff PP all(3)",
    desc: "Buff Physical power  \n[1]+[MP] all allies",
    level: 5,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 100,
            },
        },
    ],
};

export const buffPPAll_2: IHeroSkillSet = {
    id: "buffPpAll",
    name: "Buff PP all(2)",
    desc: "Buff Physical power  \n[1]+[MP*70%] all allies",
    level: 4,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 70,
            },
        },
    ],
    nextLevel: buffPPAll_3,
};

export const buffPPAll: IHeroSkillSet = {
    id: "buffPpAll",
    name: "Buff PP all",
    desc: "Buff Physical power \n[1]+[MP*50%] all allies",
    level: 3,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 50,
            },
        },
    ],
    nextLevel: buffPPAll_2,
};

//

export const bardSkills: THeroSkills = [buffNextBaAll, buffBaSelf];

export const bardSkills_2: THeroSkills = [buffPPAll, buffNextBaAll, buffBaSelf];
