import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_SWORD_BUFF_2 } from "../utils/imageLoadUtil";
import { phycisalAttackSkill } from "./commonSkillConsts";

// BUFF NEXT BA

export const buffNextBa_3: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff(3)",
    //desc: "Buff [8] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name + "(3)",
    desc: i18n.skills.basic.buffNextBa.desc3,
    level: 3,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+8 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 8,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

export const buffNextBa_2: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff(2)",
    //desc: "Buff [6] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name + "(2)",
    desc: i18n.skills.basic.buffNextBa.desc2,
    level: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+6 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 6,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBa_3,
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

export const buffNextBa: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff",
    //desc: "Buff [4] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name,
    desc: i18n.skills.basic.buffNextBa.desc1,
    level: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+4 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 4,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBa_2,
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

// BUFF NEXT BA +1 TIME

export const buffNextBaTimes_3: IHeroSkillSet = {
    id: "buffNextBaTimes",
    name: "Next BA +2 time buff(3)",
    desc: "Next basic attack has +[2] time",
    level: 4,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+2 time ba",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
};

export const buffNextBaTimes_2: IHeroSkillSet = {
    id: "buffNextBaTimes",
    name: "Next BA +1 time buff(2)",
    desc: "Next basic attack has +[1] time",
    level: 3,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+1 time ba",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaTimes_3,
};

export const buffNextBaTimes: IHeroSkillSet = {
    id: "buffNextBaTimes",
    name: "Next BA +1 time buff",
    desc: "Next basic attack has +[1] time",
    level: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+1 time ba",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaTimes_2,
};

//

export const warriorSkills: THeroSkills = [phycisalAttackSkill, buffNextBa];

export const warriorSkills_2: THeroSkills = [buffNextBaTimes, phycisalAttackSkill, buffNextBa];
