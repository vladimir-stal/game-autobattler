import { EBuffTimeType, EBuffType, EHeroAttackType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkillSet } from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_KNIGHT_SHIELD,
    IMAGE_SKILL_MAGIC_FIGHT,
    IMAGE_SKILL_POISON_FLOWER,
    IMAGE_SKILL_RAGE,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";

////////////// COMMON LEVEL 3 SKILLS FOR MULTPLE BASIC CLASSES //////////////////////////////////////////////////////////////////////

// SHIELD ATTACK

export const shieldAttackSkill_3: IHeroSkillSet = {
    id: "shieldAttackSkill",
    name: i18n.skills.level3.shieldAttackSkill.name,
    desc: i18n.skills.level3.shieldAttackSkill.desc3,
    //name: "Shield bash(3)",
    //desc: "Deal [50%xArmor] to first enemy",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 50,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const shieldAttackSkill_2: IHeroSkillSet = {
    id: "shieldAttackSkill",
    name: i18n.skills.level3.shieldAttackSkill.name,
    desc: i18n.skills.level3.shieldAttackSkill.desc2,
    //name: "Shield bash(2)",
    //desc: "Deal [30%xArmor] to first enemy",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 30,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 50,
        },
    ],
    nextLevel: shieldAttackSkill_3,
    image: IMAGE_SKILL_KNIGHT_SHIELD,
};

export const shieldAttackSkill: IHeroSkillSet = {
    id: "shieldAttackSkill",
    name: i18n.skills.level3.shieldAttackSkill.name,
    desc: i18n.skills.level3.shieldAttackSkill.desc1,
    //name: "Shield bash",
    //desc: "Deal [20%xArmor] to first enemy",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 20,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 35,
        },
    ],
    nextLevel: shieldAttackSkill_2,
    image: IMAGE_SKILL_KNIGHT_SHIELD,
};

// BUFF MP or PP depending on which attr is highest

export const buffSelfMPorPP_2: IHeroSkillSet = {
    id: "buffSelfMPorPP",
    name: i18n.skills.basic.buffSelfMPorPP.name,
    desc: i18n.skills.basic.buffSelfMPorPP.desc2,
    //name: "Buff power(2)",
    //desc: "Buff self MP or PP [12]\ndepending on which\nattribute is highest",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.WARRIOR],
    skills: [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "MP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "magicPower",
                value: 12,
            },
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "PP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 12,
            },
        },
        {
            condition: ESkillCondition.MP_IS_EQUALS_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "MP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "magicPower",
                value: 6,
            },
        },
        {
            condition: ESkillCondition.MP_IS_EQUALS_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "PP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 6,
            },
        },
    ],
    //nextLevel: buffSelfMPorPP_2,
    image: IMAGE_SKILL_MAGIC_FIGHT,
};

export const buffSelfMPorPP: IHeroSkillSet = {
    id: "buffSelfMPorPP",
    name: i18n.skills.basic.buffSelfMPorPP.name,
    desc: i18n.skills.basic.buffSelfMPorPP.desc1,
    //name: "Buff power",
    //desc: "Buff self MP or PP [6]\ndepending on which\nattribute is highest",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.WARRIOR],
    skills: [
        {
            condition: ESkillCondition.MP_IS_HIGHER_THAN_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "MP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "magicPower",
                value: 6,
            },
        },
        {
            condition: ESkillCondition.PP_IS_HIGHER_THAN_MP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "PP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 6,
            },
        },
        {
            condition: ESkillCondition.MP_IS_EQUALS_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "MP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "magicPower",
                value: 3,
            },
        },
        {
            // TODO: fix this, because after buffing MP at previous stem this step condition will be skipped
            condition: ESkillCondition.MP_IS_EQUALS_PP,
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "PP",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 3,
            },
        },
    ],
    nextLevel: buffSelfMPorPP_2,
    image: IMAGE_SKILL_MAGIC_FIGHT,
};

//
// INCREASE HP and HEAL self for same amount
//

export const increaseMaxHpSkill_2: IHeroSkillSet = {
    id: "increaseMaxHpSkill",
    name: i18n.skills.basic.increaseMaxHpSkill.name,
    desc: i18n.skills.basic.increaseMaxHpSkill.desc2,
    //name: "Nature grow(2)",
    //desc: "Increase [5]+[30%xMP]+[30%xPP]\nself max hp and\nheal same amount",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.PRIEST],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "maxHp",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            mpScale: 30,
            ppScale: 30,
        },
        {
            isBasicAttack: true,
            type: EHeroSkillType.HEAL,
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            mpScale: 30,
            ppScale: 30,
        },
    ],
    //nextLevel: increaseMaxHpSkill_2,
    image: IMAGE_SKILL_POISON_FLOWER,
};

export const increaseMaxHpSkill: IHeroSkillSet = {
    id: "increaseMaxHpSkill",
    name: i18n.skills.basic.increaseMaxHpSkill.name,
    desc: i18n.skills.basic.increaseMaxHpSkill.desc1,
    //name: "Nature grow",
    //desc: "Increase [5]+[20%xMP]+[20%xPP]\nself max hp and\nheal same amount",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.PRIEST],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "maxHp",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            mpScale: 20,
            ppScale: 20,
        },
        {
            isBasicAttack: true,
            type: EHeroSkillType.HEAL,
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            mpScale: 20,
            ppScale: 20,
        },
    ],
    nextLevel: increaseMaxHpSkill_2,
    image: IMAGE_SKILL_POISON_FLOWER,
};

//
// BUFF SUMMON CRIT CHANCE
//

export const buffSummonCritSkill_2: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    name: i18n.skills.basic.buffSummonCritSkill.name,
    desc: i18n.skills.basic.buffSummonCritSkill.desc2,
    //name: "Crit summon(2)",
    //desc: "Buff summon crit\nchance [5]+[30%xMP]",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Crit",
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                value: 5,
                valueType: "number",
                mpScale: 30,
            },
        },
    ],
    //nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_RAGE,
};

export const buffSummonCritSkill: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    name: i18n.skills.basic.buffSummonCritSkill.name,
    desc: i18n.skills.basic.buffSummonCritSkill.desc1,
    //name: "Crit summon",
    //desc: "Buff summon crit\nchance [5]+[20%xMP]",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Crit",
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                value: 5,
                valueType: "number",
                mpScale: 20,
            },
        },
    ],
    nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_RAGE,
};
