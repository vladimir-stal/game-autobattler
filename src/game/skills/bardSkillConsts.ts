import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_BARD_BUFF_1, IMAGE_SKILL_BARD_BUFF_2 } from "../utils/imageLoadUtil";

// BUFF NEXT BA ALL

export const buffNextBaAll_3: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name + "(3)",
    desc: i18n.skills.basic.buffBaNextBaAll.desc3, //"Buff next basic attack for [2] damage for all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffNextBaAll_2: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name + "(2)",
    desc: i18n.skills.basic.buffBaNextBaAll.desc2, //"Buff next basic attack for [2] damage for all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffNextBaAll: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name,
    desc: i18n.skills.basic.buffBaNextBaAll.desc1, //"Buff next basic attack for [2] damage for all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

// BUFF BA SELF

export const buffBaSelf_3: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name + "(3)",
    desc: i18n.skills.basic.buffBaSelf.desc3, //"Buff self basic attack [1]",
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
    image: IMAGE_SKILL_BARD_BUFF_2,
};

export const buffBaSelf_2: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name + "(2)",
    desc: i18n.skills.basic.buffBaSelf.desc2, //"Buff self basic attack [1]",
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
    image: IMAGE_SKILL_BARD_BUFF_2,
};

export const buffBaSelf: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name,
    desc: i18n.skills.basic.buffBaSelf.desc1, //"Buff self basic attack [1]",
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
    image: IMAGE_SKILL_BARD_BUFF_2,
};

// BUFF PP ALL SKILL

export const buffPPAll_3: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.basic.buffPpAll.name + "(3)",
    desc: i18n.skills.basic.buffPpAll.desc3, //"Buff Physical power \n[1]+[MP*50%] all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffPPAll_2: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.basic.buffPpAll.name + "(2)",
    desc: i18n.skills.basic.buffPpAll.desc2, //"Buff Physical power \n[1]+[MP*50%] all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffPPAll: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.basic.buffPpAll.name,
    desc: i18n.skills.basic.buffPpAll.desc1, //"Buff Physical power \n[1]+[MP*50%] all allies",
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
    image: IMAGE_SKILL_BARD_BUFF_1,
};

//

export const bardSkills: THeroSkills = [buffNextBaAll, buffBaSelf];

export const bardSkills_2: THeroSkills = [buffPPAll, buffNextBaAll, buffBaSelf];
