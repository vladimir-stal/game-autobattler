import { AnimationType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_DOUBLE_SWORD, IMAGE_SKILL_SWORD_BUFF_2, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";
import { buffSelfMPorPP, shieldAttackSkill } from "./commonSkill3Consts";
import { phycisalAttackSkill } from "./commonSkillConsts";

// BUFF NEXT BA

export const buffNextBa_3: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff(3)",
    //desc: "Buff [8] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name + "(3)",
    desc: i18n.skills.basic.buffNextBa.desc3,
    level: 3,
    priceLevel: 1,
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
                ppScale: 65,
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
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+5 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 5,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                ppScale: 50,
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
    priceLevel: 1,
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
                ppScale: 35,
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
    level: 3,
    priceLevel: 2,
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
    image: IMAGE_SKILL_DOUBLE_SWORD,
};

export const buffNextBaTimes_2: IHeroSkillSet = {
    id: "buffNextBaTimes",
    name: "Next BA +1 time buff(2)",
    desc: "Next basic attack has +[1] time",
    level: 3,
    priceLevel: 2,
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
    image: IMAGE_SKILL_DOUBLE_SWORD,
    nextLevel: buffNextBaTimes_3,
};

export const buffNextBaTimes: IHeroSkillSet = {
    id: "buffNextBaTimes",
    name: "Next BA +1 time buff",
    desc: "Next basic attack has +[1] time",
    level: 1,
    priceLevel: 2,
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
    image: IMAGE_SKILL_DOUBLE_SWORD,
    nextLevel: buffNextBaTimes_2,
};

export const debuffWorthyFoe_3: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    name: "Worthy foe",
    desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*65%]\nmake it vulnerable [3]",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-2 next ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                ppScale: 65,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "vulnerable",
                type: EDebuffType.PHYSICAL_RESIST_DECREASE,
                value: 3,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "duel",
                type: EBuffType.CHANGE_TARGET_TYPE,
                changeTargetTypeTo: ETargetType.HIGH_ATTACK_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const debuffWorthyFoe_2: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    name: "Worthy foe",
    desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*50%]\nmake it vulnerable [2]",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-2 next ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                ppScale: 50,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "vulnerable",
                type: EDebuffType.PHYSICAL_RESIST_DECREASE,
                value: 2,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "duel",
                type: EBuffType.CHANGE_TARGET_TYPE,
                changeTargetTypeTo: ETargetType.HIGH_ATTACK_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_TEST,
    nextLevel: debuffWorthyFoe_3,
};

export const debuffWorthyFoe: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    name: "Worthy foe",
    desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*35%]\nmake it vulnerable [1]",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-2 next ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                ppScale: 35,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "vulnerable",
                type: EDebuffType.PHYSICAL_RESIST_DECREASE,
                value: 1,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "duel",
                type: EBuffType.CHANGE_TARGET_TYPE,
                changeTargetTypeTo: ETargetType.HIGH_ATTACK_ENEMY,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_TEST,
    nextLevel: debuffWorthyFoe_2,
};

//

export const warriorSkills: THeroSkills = [debuffWorthyFoe, buffNextBa];

export const warriorSkills_2: THeroSkills = warriorSkills.concat([buffNextBaTimes]);

export const warriorSkills_3: THeroSkills = warriorSkills_2.concat([buffSelfMPorPP, shieldAttackSkill]);
