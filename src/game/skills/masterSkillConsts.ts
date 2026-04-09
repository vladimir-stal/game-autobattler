import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_AXE_BUFF, IMAGE_SKILL_SKULL_KNIFE, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";
import { buffSummonCritSkill } from "./commonSkill3Consts";
import { phycisalAttackSkill } from "./commonSkillConsts";

// BUFF NEXT BA X SELF

const buffNextBaXSelf_3: IHeroSkillSet = {
    id: "buffNextBaX",
    name: i18n.skills.basic.buffNextBaX.name + "(3)",
    desc: i18n.skills.basic.buffNextBaX.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "x1.8 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 80,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_AXE_BUFF,
};

const buffNextBaXSelf_2: IHeroSkillSet = {
    id: "buffNextBaX",
    name: i18n.skills.basic.buffNextBaX.name + "(2)",
    desc: i18n.skills.basic.buffNextBaX.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "x1.6 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 60,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaXSelf_3,
    image: IMAGE_SKILL_AXE_BUFF,
};

export const buffNextBaXSelf: IHeroSkillSet = {
    id: "buffNextBaX",
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc1, //"Multiply x[1.4] self next basic attack",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "x1.4 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 40,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    //isChained: true,
    //isActivateOnStart: true,
    nextLevel: buffNextBaXSelf_2,
    image: IMAGE_SKILL_AXE_BUFF,
};

// BUFF NEXT BA IGNORE ARMOR

export const buffNextBaIgnoreArmorSelf_3: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor(3)",
    desc: "Ignore enemy armor next basic attack. Buff next basic attack [5]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Ignore armor",
                type: EBuffType.IGNORE_ARMOR,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 1,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Increase next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                valueType: "number",
                value: 5,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
};

export const buffNextBaIgnoreArmorSelf_2: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor(2)",
    desc: "Ignore enemy armor next basic attack. Buff next basic attack [2]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Ignore armor",
                type: EBuffType.IGNORE_ARMOR,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 1,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Increase next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                valueType: "number",
                value: 2,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaIgnoreArmorSelf_3,
};

export const buffNextBaIgnoreArmorSelf: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor",
    desc: "Ignore enemy armor next basic attack",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Ignore armor",
                type: EBuffType.IGNORE_ARMOR,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 1,
            },
        },
    ],
    nextLevel: buffNextBaIgnoreArmorSelf_2,
};

// BUFF NEXT BA TO BE CRIT SKILL

export const buffNextBaBeCritSelf_3: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: "Next ba crit(3)",
    desc: "Next basic attack is a crit\n and increse damage [5]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "BA is crit",
                //type: EBuffType.BASIC_ATTACK_IS_CRIT,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 100,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "increase BA",
                type: EBuffType.ATTRIBUTE_INCREASE,
                targetType: ETargetType.SELF,
                attribute: "attack",
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 5,
            },
        },
    ],
    image: IMAGE_SKILL_SKULL_KNIFE,
};

export const buffNextBaBeCritSelf_2: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: "Next ba crit(2)",
    desc: "Next basic attack is a crit\n and increse damage [2]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "BA is crit",
                //type: EBuffType.BASIC_ATTACK_IS_CRIT,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 100,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "increase BA",
                type: EBuffType.ATTRIBUTE_INCREASE,
                targetType: ETargetType.SELF,
                attribute: "attack",
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 2,
                valueType: "number",
            },
        },
    ],
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: buffNextBaBeCritSelf_3,
};

export const buffNextBaBeCritSelf: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: "Next ba crit",
    desc: "Next basic attack is a crit",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "BA is crit",
                //type: EBuffType.BASIC_ATTACK_IS_CRIT,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 100,
                valueType: "number",
            },
        },
    ],
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: buffNextBaBeCritSelf_2,
};

//

//TODO: add buffNextBaIgnoreArmorSelf to lvl2 skills
export const masterSkills: THeroSkills = [phycisalAttackSkill, buffNextBaXSelf];

export const masterSkills_2: THeroSkills = masterSkills.concat([buffNextBaBeCritSelf]);

export const masterSkills_3: THeroSkills = masterSkills_2.concat([buffSummonCritSkill]);
