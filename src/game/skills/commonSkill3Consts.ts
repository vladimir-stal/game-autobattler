import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_KNIGHT_SHIELD,
    IMAGE_SKILL_MAGIC_FIGHT,
    IMAGE_SKILL_NATURE_SHIELD,
    IMAGE_SKILL_POISON_FLOWER,
    IMAGE_SKILL_PRIEST_SCROLL,
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
    name: i18n.skills.level3.buffSelfMPorPP.name,
    desc: i18n.skills.level3.buffSelfMPorPP.desc2,
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
    name: i18n.skills.level3.buffSelfMPorPP.name,
    desc: i18n.skills.level3.buffSelfMPorPP.desc1,
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
    name: i18n.skills.level3.increaseMaxHpSkill.name,
    desc: i18n.skills.level3.increaseMaxHpSkill.desc2,
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
    image: IMAGE_SKILL_NATURE_SHIELD,
};

export const increaseMaxHpSkill: IHeroSkillSet = {
    id: "increaseMaxHpSkill",
    name: i18n.skills.level3.increaseMaxHpSkill.name,
    desc: i18n.skills.level3.increaseMaxHpSkill.desc1,
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
    image: IMAGE_SKILL_NATURE_SHIELD,
};

//
// BUFF SUMMON CRIT CHANCE
//
const buffSummonCritSkillset = (crit: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "critChance",
            value: crit,
            valueType: "number",
            mpScale: mpScale,
            ppScale: mpScale,
            targetType: ETargetType.ALL_ALLY_SUMMONS,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                targetType: ETargetType.ALL_ALLY_SUMMONS,
                name: "Sharpen",
                value: 1,
                valueType: "number",
                timeType: EBuffTimeType.DUEL,
                statusType: EStatusType.BLEED,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+SmnCrit",
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                targetType: ETargetType.SELF,
                valueType: "number",
                timeType: EBuffTimeType.DUEL,
                appTrigger: {
                    limitedRepeats: true,
                    type: EAppTriggerType.SUMMON,
                    targetCheck: ETargetType.ALL_ALLIES,
                    skillId: "incrSummonBa",
                    skill: [
                        {
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            attribute: "critChance",
                            value: crit,
                            valueType: "number",
                            mpScale: mpScale,
                            ppScale: mpScale,
                            targetType: ETargetType.BY_RELEVANT_ID, // target new summon
                        },
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                                targetType: ETargetType.BY_RELEVANT_ID,
                                name: "Sharpen",
                                value: 1,
                                valueType: "number",
                                timeType: EBuffTimeType.DUEL,
                                statusType: EStatusType.BLEED,
                            },
                        },
                    ],
                },
            },
        },
    ];
};

export const buffSummonCritSkill_3: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    name: i18n.skills.level3.buffSummonCritSkill.name,
    desc: i18n.skills.level3.buffSummonCritSkill.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: buffSummonCritSkillset(10,40),
    //nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_RAGE,
};

export const buffSummonCritSkill_2: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    name: i18n.skills.level3.buffSummonCritSkill.name,
    desc: i18n.skills.level3.buffSummonCritSkill.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: buffSummonCritSkillset(7,30),
    nextLevel: buffSummonCritSkill_3,
    image: IMAGE_SKILL_RAGE,
};

export const buffSummonCritSkill: IHeroSkillSet = {
    id: "buffSummonCritSkill",
    name: i18n.skills.level3.buffSummonCritSkill.name,
    desc: i18n.skills.level3.buffSummonCritSkill.desc1,
    //name: "Crit summon",
    //desc: "Buff summon crit\nchance [5]+[20%xMP]",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MASTER],
    skills: buffSummonCritSkillset(5,20),
    nextLevel: buffSummonCritSkill_2,
    image: IMAGE_SKILL_RAGE,
};//

// OUTGOING HEAL BUFF (LEVEL 3) /////////////////////////////////////////////////////////////////////////

export const outHealBuffSkill_2: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    //name: "Out heal(2)",
    //desc: "Buff outgoing heal\n([10]+[60%xMP])% ally in front",
    name: i18n.skills.level3.outHealBuffSkill.name,
    desc: i18n.skills.level3.outHealBuffSkill.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Heal",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.OUTGOING_HEAL,
                value: 10,
                valueType: "percent",
                mpScale: 60,
            },
        },
    ],
    // nextLevel: outHealBuffSkill_2,
    image: IMAGE_SKILL_PRIEST_SCROLL,
};

export const outHealBuffSkill: IHeroSkillSet = {
    id: "outHealBuffSkill",
    //name: "Out heal",
    //desc: "Buff outgoing heal\n([10]+[40%xMP])% ally in front",
    name: i18n.skills.level3.outHealBuffSkill.name,
    desc: i18n.skills.level3.outHealBuffSkill.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Heal",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.OUTGOING_HEAL,
                value: 10,
                valueType: "percent",
                mpScale: 40,
            },
        },
    ],
    nextLevel: outHealBuffSkill_2,
    image: IMAGE_SKILL_PRIEST_SCROLL,
};

