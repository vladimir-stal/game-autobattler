import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
} from "../../types";
import { i18n } from "../consts";
import { TOTEM_ID_BARD_DARK_TOXICTUNE } from "../totemConsts";
import {
    IMAGE_SKILL_MAGIC_HAND,
    IMAGE_SKILL_PHYS_ATTACK,
    IMAGE_SKILL_YELLOW_FLAME,
    IMAGE_SKILL_CHAIN,
    IMAGE_SKILL_CLEAR,
    IMAGE_SKILL_YELLOW_CROWN,
    IMAGE_SKILL_SUMMON_WITH_SHIELD,
    IMAGE_SKILL_POISON_FLOWER,
    IMAGE_SKILL_SKULLS,
    IMAGE_SKILL_BURNING_MAN,
    IMAGE_SKILL_MACE_ATTACK,
    IMAGE_SKILL_TEST,
    IMAGE_DRAFT_GRUDGE,
    IMAGE_DRAFT_OPENING,
    IMAGE_DRAFT_FRAGILE,
    IMAGE_DRAFT_CLEAN_CUT,
    IMAGE_DRAFT_OVERWHELM,
    IMAGE_DRAFT_ORCHESTRATE,
    IMAGE_DRAFT_PUPPET,
    IMAGE_DRAFT_STATIC,
    IMAGE_DRAFT_IGNITE,
    IMAGE_DRAFT_STING,
    IMAGE_DRAFT_HOPE,
} from "../utils/load/skillImagesLoad";
import { skillsetSummon } from "../utils/skillUtils2";
import { outHealBuffSkill } from "./commonSkill3Consts";
import { buffSelfMPorPP, buffSummonCritSkill, increaseMaxHpSkill, shieldAttackSkill } from "./commonSkill3Consts";
import { radiantWallNoAttackButArmorSkill } from "./mobSkills";

////////////// COMMON SKILLS FOR MULTPLE BASIC CLASSES //////////////////////////////////////////////////////////////////////

// NO BASIC ATTACK
// always chained. to circle fast through skills

export const chainToNextSkill: IHeroSkillSet = {
    id: "chainToNextSkill",
    name: i18n.skills.level2.noBasicAttackSkill.name,
    desc: i18n.skills.level2.noBasicAttackSkill.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ALL],
    skills: [
        {
            type: EHeroSkillType.NONE,
        },
    ],
    isBasicAttack: false,
    isChained: true,
    image: IMAGE_SKILL_CHAIN,
};

// ONLY BASIC ATTACK
// always chained. to circle fast through skills

export const chainBasicAttackSkill: IHeroSkillSet = {
    id: "chainBasicAttackSkill",
    name: i18n.skills.level3.chainBasicAttackSkill.name,
    desc: i18n.skills.level3.chainBasicAttackSkill.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.ALL],
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            targetType: ETargetType.SELF,
        },
    ],
    isChained: true,
    image: IMAGE_SKILL_CHAIN,
};
// Double class skills
/*
    warrior + master = physical attack [4/5/6]
    master + wild = physical attack w/ bleed [2+1/2+2/2+3]
    order + wild = overcome / statusesIntoHeal
    order + warrior = reduce next ba by [35%/20%/0%] but next ba target first 2 eneimes

    magic + priest = burn + buff mp (based on burn) 2 duration [1+1/2+2/3+3]
    bard + dark = totem +1 poison on enemy [1 front, 1 front 1 random, 2 front 1 random]
    dark + summon = buff 2 duration +poison on ba (self / summon)
    summon + priest = summon [0,5] + buff overheal 2 duration
    bard + magic = magic atk [1/2/3] + debuff blind 2? duration
*/

const overcomeSkillStack = (percent: number, heal: number, armorPercent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.STATUS_MODIFY_AMOUNT,
            targetType: ETargetType.SELF,
            value: -percent,
            valueType: "percent",
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "hp",
            value: heal,
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: 100,
            valueType: "percent",
            valueFrom: "maxHp",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -100,
            valueType: "percent",
            valueFrom: "hp",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: armorPercent,
            valueType: "percent",
            valueFrom: "customNumber",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
    ];
};

export const statusesIntoHeal_3: IHeroSkillSet = {
    id: "statusesIntoHeal",
    name: i18n.skills.basic.statusesIntoHeal.name,
    desc: i18n.skills.basic.statusesIntoHeal.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    skills: overcomeSkillStack(80, 4, 35),
    image: IMAGE_SKILL_CLEAR,
};

export const statusesIntoHeal_2: IHeroSkillSet = {
    id: "statusesIntoHeal",
    name: i18n.skills.basic.statusesIntoHeal.name,
    desc: i18n.skills.basic.statusesIntoHeal.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    skills: overcomeSkillStack(65, 3, 25),
    nextLevel: statusesIntoHeal_3,
    image: IMAGE_SKILL_CLEAR,
};

export const statusesIntoHeal: IHeroSkillSet = {
    id: "statusesIntoHeal",
    name: i18n.skills.basic.statusesIntoHeal.name,
    desc: i18n.skills.basic.statusesIntoHeal.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    skills: overcomeSkillStack(50, 2, 20),
    image: IMAGE_SKILL_CLEAR,
    nextLevel: statusesIntoHeal_2,
};

// PHYSICAL + BLEED
export const attackWithBleedSkill_3: IHeroSkillSet = {
    id: "attackWithBleedSkill",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 3,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 65,
            animation: AnimationType.NONE,
        },
    ],
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};

export const attackWithBleedSkill_2: IHeroSkillSet = {
    id: "attackWithBleedSkill",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 2,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 50,
            animation: AnimationType.NONE,
        },
    ],
    nextLevel: attackWithBleedSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};

export const attackWithBleedSkill: IHeroSkillSet = {
    id: "attackWithBleedSkill",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 1,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 35,
            animation: AnimationType.NONE,
        },
    ],
    nextLevel: attackWithBleedSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};

// PHYSICAL ATTACK

export const phycisalAttackSkill_3: IHeroSkillSet = {
    id: "phycisalAttackSkill",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 6,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill_2: IHeroSkillSet = {
    id: "phycisalAttackSkill",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 5,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 50,
        },
    ],
    nextLevel: phycisalAttackSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill: IHeroSkillSet = {
    id: "phycisalAttackSkill",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 35,
        },
    ],
    //isChained: true,
    nextLevel: phycisalAttackSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

// FRONTAL CLEAVE
export const nextBAArea_3: IHeroSkillSet = {
    id: "nextBAArea",
    name: i18n.skills.basic.nextBAArea.name,
    desc: i18n.skills.basic.nextBAArea.desc3,
    // reduce next ba by [35%/20%/0%] but next ba target first 2 eneimes
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "cleave",
                targetType: ETargetType.SELF,
                value: 1,
                valueType: "number",
                type: EBuffType.CHANGE_TARGET_TYPE,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                changeTargetTypeTo: ETargetType.FIRST_TWO_ENEMIES,
            },
        },
    ],
    image: IMAGE_SKILL_MACE_ATTACK,
};

export const nextBAArea_2: IHeroSkillSet = {
    id: "nextBAArea",
    name: i18n.skills.basic.nextBAArea.name,
    desc: i18n.skills.basic.nextBAArea.desc2,
    // reduce next ba by [35%/20%/0%] but next ba target first 2 eneimes
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "cleave",
                targetType: ETargetType.SELF,
                value: 1,
                valueType: "number",
                type: EBuffType.CHANGE_TARGET_TYPE,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                changeTargetTypeTo: ETargetType.FIRST_TWO_ENEMIES,
                nestedEffects: [
                    {
                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                        attribute: "attack",
                        value: 20,
                        valueType: "percent",
                    },
                ],
            },
        },
    ],
    nextLevel: nextBAArea_3,
    image: IMAGE_SKILL_MACE_ATTACK,
};

export const nextBAArea: IHeroSkillSet = {
    id: "nextBAArea",
    name: i18n.skills.basic.nextBAArea.name,
    desc: i18n.skills.basic.nextBAArea.desc1,
    // reduce next ba by [35%/20%/0%] but next ba target first 2 eneimes
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "cleave",
                targetType: ETargetType.SELF,
                value: 1,
                valueType: "number",
                type: EBuffType.CHANGE_TARGET_TYPE,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                changeTargetTypeTo: ETargetType.FIRST_TWO_ENEMIES,
                nestedEffects: [
                    {
                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                        attribute: "attack",
                        value: 35,
                        valueType: "percent",
                    },
                ],
            },
        },
    ],
    nextLevel: nextBAArea_2,
    image: IMAGE_SKILL_MACE_ATTACK,
};

// REMOVE DEBUFF
const removeDebuffSkillset = (repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: repeats, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            childSkill: {
                type: EHeroSkillType.DEBUFF_REMOVE,
                targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
                attackType: EHeroAttackType.PHYSICAL,
            },
        },
    ];
};

export const removeDebuffSkill_3: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.level2.removeDebuff.name,
    desc: i18n.skills.level2.removeDebuff.desc1,
    level: 3,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: removeDebuffSkillset(3),
    image: IMAGE_SKILL_YELLOW_FLAME,
};

export const removeDebuffSkill_2: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.level2.removeDebuff.name,
    desc: i18n.skills.level2.removeDebuff.desc1,
    level: 2,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: removeDebuffSkillset(2),
    nextLevel: removeDebuffSkill_3,
    image: IMAGE_SKILL_YELLOW_FLAME,
};

export const removeDebuffSkill: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.level2.removeDebuff.name,
    desc: i18n.skills.level2.removeDebuff.desc1,
    level: 1,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: removeDebuffSkillset(1),
    nextLevel: removeDebuffSkill_2,
    image: IMAGE_SKILL_YELLOW_FLAME,
};

// REMOVE BUFF
const removeBuffSkillset = (repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: repeats, // how many repeats, can be calculated
            targetType: ETargetType.SELF, // not used
            childSkill: {
                type: EHeroSkillType.BUFF_REMOVE,
                targetType: ETargetType.BUFFED_ENEMY_RANDOM,
                attackType: EHeroAttackType.PHYSICAL,
            },
        },
    ];
};

export const removeBuffSkill_3: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.level2.removeBuff.name,
    desc: i18n.skills.level2.removeBuff.desc1,
    level: 3,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: removeBuffSkillset(3),
    image: IMAGE_SKILL_MAGIC_HAND,
};

export const removeBuffSkill_2: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.level2.removeBuff.name,
    desc: i18n.skills.level2.removeBuff.desc1,
    level: 2,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: removeBuffSkillset(2),
    nextLevel: removeBuffSkill_3,
    image: IMAGE_SKILL_MAGIC_HAND,
};

export const removeBuffSkill: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.level2.removeBuff.name,
    desc: i18n.skills.level2.removeBuff.desc1,
    level: 1,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: removeBuffSkillset(1),
    nextLevel: removeBuffSkill_2,
    image: IMAGE_SKILL_MAGIC_HAND,
};

//
// HEAT UP : magic + priest = burn + buff mp (based on burn) 2 duration [1+1/2+2/3+3]
//
const heatUpSkillSet = (burn: number, duration: number, mpConversionPercent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.STATUS_APPLY,
            value: burn, // next 2,3
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            status: EStatusType.BURN,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            status: EStatusType.BURN,
            value: 1,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Heat up",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "magicPower",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: duration, // next 3,4
                value: mpConversionPercent,
                valueType: "percent",
                valueFrom: "customNumber",
            },
        },
    ];
};

export const heatUpSkill_3: IHeroSkillSet = {
    id: "heatUpSkill",
    name: i18n.skills.basic.heatUpSkill.name,
    desc: i18n.skills.basic.heatUpSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.PRIEST],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: heatUpSkillSet(3, 4, 100),
    image: IMAGE_SKILL_BURNING_MAN,
};

export const heatUpSkill_2: IHeroSkillSet = {
    id: "heatUpSkill",
    name: i18n.skills.basic.heatUpSkill.name,
    desc: i18n.skills.basic.heatUpSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.PRIEST],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: heatUpSkillSet(2, 3, 100),
    nextLevel: heatUpSkill_3,
    image: IMAGE_SKILL_BURNING_MAN,
};

export const heatUpSkill: IHeroSkillSet = {
    id: "heatUpSkill",
    name: i18n.skills.basic.heatUpSkill.name,
    desc: i18n.skills.basic.heatUpSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.PRIEST],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: heatUpSkillSet(1, 2, 100),
    nextLevel: heatUpSkill_2,
    image: IMAGE_SKILL_BURNING_MAN,
};

//
// TOXIC TUNE : bard + dark = totem +1 poison on enemy [1 front, 1 front 1 random, 2 front 1 random]
//
const toxicTuneSkillset = (first: number, rand?: number): IHeroSkill[] => {
    if (rand) {
        return [
            {
                type: EHeroSkillType.FORCE_TOTEM_ACTION,
                targetType: ETargetType.SELF,
                condition: ESkillCondition.HAS_TOTEM,
            },
            {
                type: EHeroSkillType.TOTEM,
                totem: {
                    id: TOTEM_ID_BARD_DARK_TOXICTUNE,
                    name: i18n.totems.toxicTuneTotem,
                    skills: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            value: first,
                            valueType: "number",
                            targetType: ETargetType.FIRST_ENEMY,
                            status: EStatusType.POISON,
                        },
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            value: rand,
                            valueType: "number",
                            targetType: ETargetType.RANDOM_ENEMY,
                            status: EStatusType.POISON,
                        },
                    ],
                },
                condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
            },
        ];
    } else {
        return [
            {
                type: EHeroSkillType.FORCE_TOTEM_ACTION,
                targetType: ETargetType.SELF,
                condition: ESkillCondition.HAS_TOTEM,
            },
            {
                type: EHeroSkillType.TOTEM,
                totem: {
                    id: TOTEM_ID_BARD_DARK_TOXICTUNE,
                    name: i18n.totems.toxicTuneTotem,
                    skills: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            value: first,
                            valueType: "number",
                            targetType: ETargetType.FIRST_ENEMY,
                            status: EStatusType.POISON,
                        },
                    ],
                },
                condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
            },
        ];
    }
};

export const toxicTuneSkill_3: IHeroSkillSet = {
    id: "toxicTuneSkill",
    name: i18n.skills.basic.toxicTuneSkill.name,
    desc: i18n.skills.basic.toxicTuneSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.DARK],
    skills: toxicTuneSkillset(2, 1),
    image: IMAGE_SKILL_SKULLS,
};

export const toxicTuneSkill_2: IHeroSkillSet = {
    id: "toxicTuneSkill",
    name: i18n.skills.basic.toxicTuneSkill.name,
    desc: i18n.skills.basic.toxicTuneSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.DARK],
    skills: toxicTuneSkillset(1, 1),
    image: IMAGE_SKILL_SKULLS,
    nextLevel: toxicTuneSkill_3,
};

export const toxicTuneSkill: IHeroSkillSet = {
    id: "toxicTuneSkill",
    name: i18n.skills.basic.toxicTuneSkill.name,
    desc: i18n.skills.basic.toxicTuneSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.DARK],
    isBasicAttack: false,
    skills: toxicTuneSkillset(1),
    image: IMAGE_SKILL_SKULLS,
    nextLevel: toxicTuneSkill_2,
};

//
// VENOM HEART : dark + summon = buff 2 duration +poison on ba (self / summon)
//

const venomHeartSkillSet = (duration: number, stacks: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Venom",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.POISON,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: duration, // next 2,4
                value: stacks, // next 2,2
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Venom",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.POISON,
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DURATION,
                duration: duration, // next 2,4
                value: stacks, // next 2,2
                valueType: "number",
            },
            condition: ESkillCondition.HAS_SUMMON,
        },
    ];
};

export const venomHeartSkill_3: IHeroSkillSet = {
    id: "venomHeartSkill",
    name: i18n.skills.basic.venomHeartSkill.name,
    desc: i18n.skills.basic.venomHeartSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK, EHeroClass.SUMMON],
    skills: venomHeartSkillSet(4, 2),
    image: IMAGE_SKILL_POISON_FLOWER,
};

export const venomHeartSkill_2: IHeroSkillSet = {
    id: "venomHeartSkill",
    name: i18n.skills.basic.venomHeartSkill.name,
    desc: i18n.skills.basic.venomHeartSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK, EHeroClass.SUMMON],
    skills: venomHeartSkillSet(2, 2),
    nextLevel: venomHeartSkill_3,
    image: IMAGE_SKILL_POISON_FLOWER,
};

export const venomHeartSkill: IHeroSkillSet = {
    id: "venomHeartSkill",
    name: i18n.skills.basic.venomHeartSkill.name,
    desc: i18n.skills.basic.venomHeartSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK, EHeroClass.SUMMON],
    skills: venomHeartSkillSet(2, 1),
    nextLevel: venomHeartSkill_2,
    image: IMAGE_SKILL_POISON_FLOWER,
};

const blindingBeamSkillSet = (magDmg: number, blind: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.MAGIC,
            value: magDmg, // next 2,3
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Blind",
                type: EDebuffType.BLIND,
                targetType: ETargetType.FIRST_ENEMY,
                timeType: EBuffTimeType.DURATION,
                duration: 2,
                value: blind, // next 45,55
                valueType: "number",
                mpScale: mpScale, // next 135,150
            },
        },
    ];
};

//
// BLINDING Beam : bard + magic = magic atk [1/2/3] + debuff blind 2? duration
//
export const blindingBeamSkill_3: IHeroSkillSet = {
    id: "blindingBeamSkill",
    name: i18n.skills.basic.blindingBeamSkill.name,
    desc: i18n.skills.basic.blindingBeamSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: blindingBeamSkillSet(3, 55, 150),
    image: IMAGE_SKILL_YELLOW_CROWN,
};

export const blindingBeamSkill_2: IHeroSkillSet = {
    id: "blindingBeamSkill",
    name: i18n.skills.basic.blindingBeamSkill.name,
    desc: i18n.skills.basic.blindingBeamSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: blindingBeamSkillSet(2, 45, 135),
    nextLevel: blindingBeamSkill_3,
    image: IMAGE_SKILL_YELLOW_CROWN,
};

export const blindingBeamSkill: IHeroSkillSet = {
    id: "blindingBeamSkill",
    name: i18n.skills.basic.blindingBeamSkill.name,
    desc: i18n.skills.basic.blindingBeamSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: blindingBeamSkillSet(1, 35, 100),
    nextLevel: blindingBeamSkill_2,
    image: IMAGE_SKILL_YELLOW_CROWN,
};

//
// RADIANT WALL : summon + priest = summon [0,5] + buff overheal 2 duration
//
const radiantWallSummon = (hp: number, level: number): IUnit => {
    return {
        unitType: EUnitType.UNIT,
        heroClass: EHeroClass.ORDER,
        attackType: EHeroAttackType.PHYSICAL,
        attackTargetType: ETargetType.FIRST_ENEMY,
        basicAttack: 0,
        basicAttackTimes: 1,
        basicMaxHp: hp,
        basicHpRegen: 0,
        basicArmor: 0,
        basicCritChance: 0,
        basicEvasionChance: 0,
        basicMagicPower: 0,
        basicPhysicalPower: 0,
        //name: "Radiant wall",
        name: i18n.units.SHIELDWARRIORSUMMON,
        id: "SHIELDWARRIORSUMMON",
        skills: [radiantWallNoAttackButArmorSkill, radiantWallNoAttackButArmorSkill, radiantWallNoAttackButArmorSkill, radiantWallNoAttackButArmorSkill],
        items: [],
        level: level,
        exp: 0,
    };
};

export const selfBuffOverheal = (duration: number, status?: EStatusType): IHeroSkill => {
    return {
        type: EHeroSkillType.BUFF,
        buff: {
            name: "overheal",
            targetType: ETargetType.SELF,
            timeType: EBuffTimeType.DURATION,
            duration: duration,
            type: EBuffType.OVERHEAL_TO_DAMAGE,
            value: 1,
            changeTargetTypeTo: ETargetType.FIRST_ENEMY,
            statusType: status,
        },
        animation: AnimationType.NONE,
    };
};

export const radiantWallSkill_3: IHeroSkillSet = {
    id: "radiantWallSkill",
    name: i18n.skills.basic.radiantWallSkill.name,
    desc: i18n.skills.basic.radiantWallSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.PRIEST],
    type: ESkillSetType.SUMMON,
    skills: [selfBuffOverheal(2), ...skillsetSummon(radiantWallSummon(10, 3), 0, 35, 60, 3, 3)], // summon 0/10
    image: IMAGE_SKILL_SUMMON_WITH_SHIELD,
};

export const radiantWallSkill_2: IHeroSkillSet = {
    id: "radiantWallSkill",
    name: i18n.skills.basic.radiantWallSkill.name,
    desc: i18n.skills.basic.radiantWallSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.PRIEST],
    type: ESkillSetType.SUMMON,
    skills: [selfBuffOverheal(2), ...skillsetSummon(radiantWallSummon(7, 2), 0, 35, 40, 2, 3)], // summon 0/7
    nextLevel: radiantWallSkill_3,
    image: IMAGE_SKILL_SUMMON_WITH_SHIELD,
};

export const radiantWallSkill: IHeroSkillSet = {
    id: "radiantWallSkill",
    name: i18n.skills.basic.radiantWallSkill.name,
    desc: i18n.skills.basic.radiantWallSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.PRIEST],
    type: ESkillSetType.SUMMON,
    skills: [selfBuffOverheal(2), ...skillsetSummon(radiantWallSummon(5, 1), 0, 35, 20, 2, 2)], // summon 0/5
    nextLevel: radiantWallSkill_2,
    image: IMAGE_SKILL_SUMMON_WITH_SHIELD,
    animationType: AnimationType.SUMMON_SPELL,
};

const grudgeHealSkillset = (dmg:number, percent:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTACK,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            value: dmg,
            valueType: "number",
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ENEMIES_UNFILTERED,
            value: 100,
            valueFrom: "latestDamageRecieved",
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.HEAL,
            targetType: ETargetType.LOW_PERCENT_ALLY,
            value: percent,
            valueFrom: "customNumber",
            valueType: "percent",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
            animation: AnimationType.NONE,
        }
    ];
}

export const grudgeHealSkill_3: IHeroSkillSet = {
    id: "grudgeHealSkill",
    name: "Grudge heal",
    desc: "Deal [10] phys.dmg and\nheal most injured ally for\n[85%] of this attack\neffective damage",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.PRIEST],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: grudgeHealSkillset(10,85),
    image: IMAGE_DRAFT_GRUDGE, // IMAGE_SKILL_TEST,
};

export const grudgeHealSkill_2: IHeroSkillSet = {
    id: "grudgeHealSkill",
    name: "Grudge heal",
    desc: "Deal [7] phys.dmg and heal\nmost injured ally for\n[75%] of this attack\neffective damage",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.PRIEST],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: grudgeHealSkillset(7,75),
    nextLevel: grudgeHealSkill_3,
    image: IMAGE_DRAFT_GRUDGE, // IMAGE_SKILL_TEST,
};

export const grudgeHealSkill: IHeroSkillSet = {
    id: "grudgeHealSkill",
    name: "Grudge heal",
    desc: "Deal [5] phys.dmg and heal\nmost injured ally for\n[65%] of this attack\neffective damage",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.PRIEST],
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: grudgeHealSkillset(5,65),
    nextLevel: grudgeHealSkill_2,
    image: IMAGE_DRAFT_GRUDGE, // IMAGE_SKILL_TEST,
};

const openingSkillset = (dmgBoost:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Opening",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: dmgBoost,
                valueType: "percent",
                isHidden: true,
                cannotBeTargeted: true,
            },
            condition: ESkillCondition.HAS_ALLY_IN_FRONT,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            targetType: ETargetType.ALLY_IN_FRONT,
            //condition: ESkillCondition.HAS_ALLY_IN_FRONT,
            // w/o condition will target self if no ally in front
        },
    ];
}

export const openingSkill_3: IHeroSkillSet = {
    id: "openingSkill",
    name: "Opening",
    desc: "Ally in front makes basic\nattack with x1.5 strength",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.BARD],
    type: ESkillSetType.BUFF, // ?
    skills: openingSkillset(50),
    image: IMAGE_DRAFT_OPENING, // IMAGE_SKILL_TEST,
};

export const openingSkill_2: IHeroSkillSet = {
    id: "openingSkill",
    name: "Opening",
    desc: "Ally in front makes basic\nattack with x1.3 strength",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.BARD],
    type: ESkillSetType.BUFF, // ?
    skills: openingSkillset(30),
    nextLevel: openingSkill_3,
    image: IMAGE_DRAFT_OPENING, // IMAGE_SKILL_TEST,
};

export const openingSkill: IHeroSkillSet = {
    id: "openingSkill",
    name: "Opening",
    desc: "Ally in front makes basic\nattack with x1.2 strength",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.BARD],
    type: ESkillSetType.BUFF, // ?
    skills: openingSkillset(20),
    nextLevel: openingSkill_2,
    isBasicAttack: false,
    image: IMAGE_DRAFT_OPENING, // IMAGE_SKILL_TEST,
};

const fragileSkillset = (value:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Fragile",
                targetType: ETargetType.RANDOM_ENEMY,
                timeType: EBuffTimeType.DUEL,
                type: EDebuffType.STATUS_VULNERABILITY,
                value,
                valueType: "number",
            }
        }
    ];
}

export const fragileSkill_3: IHeroSkillSet = {
    id: "fragileSkill",
    name: "Fragile",
    desc: "Random enemy is cursed\nto take [3] more damage\nfrom statuses",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.WILD],
    type: ESkillSetType.DEBUFF,
    skills: fragileSkillset(3),
    image: IMAGE_DRAFT_FRAGILE, // IMAGE_SKILL_TEST,
};

export const fragileSkill_2: IHeroSkillSet = {
    id: "fragileSkill",
    name: "Fragile",
    desc: "Random enemy is cursed\nto take [2] more damage\nfrom statuses",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.WILD],
    type: ESkillSetType.DEBUFF,
    skills: fragileSkillset(2),
    nextLevel: fragileSkill_3,
    image: IMAGE_DRAFT_FRAGILE, // IMAGE_SKILL_TEST,
};

export const fragileSkill: IHeroSkillSet = {
    id: "fragileSkill",
    name: "Fragile",
    desc: "Random enemy is cursed\nto take [1] more damage\nfrom statuses",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.WILD],
    type: ESkillSetType.DEBUFF,
    skills: fragileSkillset(1),
    nextLevel: fragileSkill_2,
    image: IMAGE_DRAFT_FRAGILE, // IMAGE_SKILL_TEST,
};

const cleanCutSkillset = (value:number, ppScale:number):IHeroSkill[] => {
    // apply bleed to first enemy, apply buff: if next basic attack is crit, apply bleed same amount to second enemy
    return [
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.FIRST_ENEMY,
            status: EStatusType.BLEED,
            value,
            valueType: "number",
            ppScale,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Clean cut",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    type: EAppTriggerType.AFTER_CRIT,
                    skillId: "Clean cut splash",
                    skill: [
                        {
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.BY_RELEVANT_ID,
                            status: EStatusType.BLEED,
                            animation: AnimationType.NONE,
                        },
                        { // fallback target
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.FIRST_ENEMY,
                            status: EStatusType.BLEED,
                            animation: AnimationType.NONE,
                            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
                        },
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            targetType: ETargetType.SECOND_ENEMY,
                            status: EStatusType.BLEED,
                            value: 100,
                            valueFrom: "customNumber",
                            valueType: "percent",
                        },
                    ],
                }
            },
            animation: AnimationType.NONE,
        }
    ];
}

export const cleanCutSkill_3: IHeroSkillSet = {
    id: "cleanCutSkill",
    name: "Clean cut",
    desc: "Apply [7+50%xPP] bleed to\nfirst enemy, and if next\nbasic attack is crit,\nsecond enemy gets bleed\nas crit target",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: cleanCutSkillset(7,50),
    image: IMAGE_DRAFT_CLEAN_CUT, // IMAGE_SKILL_TEST,
};

export const cleanCutSkill_2: IHeroSkillSet = {
    id: "cleanCutSkill",
    name: "Clean cut",
    desc: "Apply [6+35%xPP] bleed to\nfirst enemy, and if next\nbasic attack is crit,\nsecond enemy gets bleed\nas crit target",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: cleanCutSkillset(6,35),
    nextLevel: cleanCutSkill_3,
    image: IMAGE_DRAFT_CLEAN_CUT, // IMAGE_SKILL_TEST,
};

export const cleanCutSkill: IHeroSkillSet = {
    id: "cleanCutSkill",
    name: "Clean cut",
    desc: "Apply [5] bleed to\nfirst enemy, and if next\nbasic attack is crit,\nsecond enemy gets bleed\nas crit target",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: cleanCutSkillset(5,0),
    nextLevel: cleanCutSkill_2,
    image: IMAGE_DRAFT_CLEAN_CUT, // IMAGE_SKILL_TEST,
};

const overwhelmSkillset = (value:number):IHeroSkill[] => {
    // debuff all enemies to make em vulnerable and take increased dmg from statuses
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Overwhelmed",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.DUEL,
                type: EDebuffType.RESIST_DECREASE,
                value,
                valueType: "number",
                nestedEffects: [
                    {
                        debuffType: EDebuffType.STATUS_VULNERABILITY,
                        value,
                        valueType: "number",
                    }
                ],
            }
        }
    ];
}

export const overwhelmSkill_3: IHeroSkillSet = {
    id: "overwhelmSkill",
    name: "Overwhelm",
    desc: "Curse all enemies to be vulnerable [3] and take [3] more damage from statuses",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.DARK],
    skills: overwhelmSkillset(3),
    image: IMAGE_DRAFT_OVERWHELM, // IMAGE_SKILL_TEST,
};

export const overwhelmSkill_2: IHeroSkillSet = {
    id: "overwhelmSkill",
    name: "Overwhelm",
    desc: "Curse all enemies to be vulnerable [2] and take [2] more damage from statuses",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.DARK],
    skills: overwhelmSkillset(1),
    nextLevel: overwhelmSkill_3,
    image: IMAGE_DRAFT_OVERWHELM, // IMAGE_SKILL_TEST,
};

export const overwhelmSkill: IHeroSkillSet = {
    id: "overwhelmSkill",
    name: "Overwhelm",
    desc: "Curse all enemies to be vulnerable [1] and take [1] more damage from statuses",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.DARK],
    skills: overwhelmSkillset(1),
    nextLevel: overwhelmSkill_2,
    image: IMAGE_DRAFT_OVERWHELM, // IMAGE_SKILL_TEST,
};

const orchestrateSkillset = (value:number):IHeroSkill[] => {
    // all totems value incr by 1
    return [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            targetType: ETargetType.ALL_ALLIES,
            value,
            valueType: "number",
        }
    ];
}

export const orchestrateSkill_3: IHeroSkillSet = {
    id: "orchestrateSkill",
    name: "Orchestrate",
    desc: "Increase values of all ally totems by [2]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.WILD],
    skills: orchestrateSkillset(2),
    image: IMAGE_DRAFT_ORCHESTRATE, // IMAGE_SKILL_TEST,
};

export const orchestrateSkill_2: IHeroSkillSet = {
    id: "orchestrateSkill",
    name: "Orchestrate",
    desc: "Increase values of all ally totems by [1]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.WILD],
    skills: orchestrateSkillset(1),
    nextLevel: orchestrateSkill_3,
    image: IMAGE_DRAFT_ORCHESTRATE, // IMAGE_SKILL_TEST,
};

export const orchestrateSkill: IHeroSkillSet = {
    id: "orchestrateSkill",
    name: "Orchestrate",
    desc: "Increase values of all ally totems by [1]",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.WILD],
    isBasicAttack: false,
    skills: orchestrateSkillset(1),
    nextLevel: overwhelmSkill_2,
    image: IMAGE_DRAFT_ORCHESTRATE, // IMAGE_SKILL_TEST,
};

const puppetSkillset = (percent:number, ppScale:number):IHeroSkill[] => {
    // Lose 50% current hp to increase summons max hp and heal it for same amount.
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: percent,
            valueType: "percent",
            valueFrom: "hp",
            animation: AnimationType.NONE,
            ppScale,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "maxHp",
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.HAS_SUMMON
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.RANDOM_SUMMON_ALLIED,
            attribute: "maxHp",
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
        {
            type: EHeroSkillType.HEAL,
            targetType: ETargetType.SAME_LAST_TARGET,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
            animation: AnimationType.NONE,
        }
    ]
}

export const puppetSkill_3: IHeroSkillSet = {
    id: "puppetSkill",
    name: "Puppet",
    desc: "Lose 50% current hp to\nincrease summons max hp\nand heal it for same\namount plus [75%xPP].\nIf has no summon, then\ntarget random ally summon.",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR],
    skills: puppetSkillset(50,75),
    image: IMAGE_DRAFT_PUPPET, // IMAGE_SKILL_TEST,
};

export const puppetSkill_2: IHeroSkillSet = {
    id: "puppetSkill",
    name: "Puppet",
    desc: "Lose 50% current hp to\nincrease summons max hp\nand heal it for same\namount plus [50%xPP].\nIf has no summon, then\ntarget random ally summon.",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR],
    skills: puppetSkillset(50,50),
    nextLevel: puppetSkill_3,
    image: IMAGE_DRAFT_PUPPET, // IMAGE_SKILL_TEST,
};

export const puppetSkill: IHeroSkillSet = {
    id: "puppetSkill",
    name: "Puppet",
    desc: "Lose 50% current hp to\nincrease summons max hp\nand heal it for same\namount plus [35%xPP].\nIf has no summon, then\ntarget random ally summon.",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.WARRIOR],
    skills: puppetSkillset(50,35),
    nextLevel: puppetSkill_2,
    image: IMAGE_DRAFT_PUPPET, // IMAGE_SKILL_TEST,
};

const staticSkillset = (percent:number, defNum:number):IHeroSkill[] => {
    // Random enemy gets 50% shock stacks of enemy with highest shock. Otherwise apply 1 shock
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.HIGH_SHOCK_ENEMY,
            status: EStatusType.SHOCK,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.HIGH_SHOCK_ENEMY,
            value: percent,
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.RANDOM_ENEMY,
            status: EStatusType.SHOCK,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.RANDOM_ENEMY,
            status: EStatusType.SHOCK,
            value: defNum,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
        },
    ];
}

export const staticSkill_3: IHeroSkillSet = {
    id: "staticSkill",
    name: "Static",
    desc: "Random enemy gets 75% shock\nstacks of enemy with\nhighest shock. Otherwise\napply 2 shock",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MAGIC],
    skills: staticSkillset(75,2),
    image: IMAGE_DRAFT_STATIC, // IMAGE_SKILL_TEST,
};

export const staticSkill_2: IHeroSkillSet = {
    id: "staticSkill",
    name: "Static",
    desc: "Random enemy gets 65% shock\nstacks of enemy with\nhighest shock. Otherwise\napply 1 shock",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MAGIC],
    skills: staticSkillset(65,1),
    nextLevel: staticSkill_3,
    image: IMAGE_DRAFT_STATIC, // IMAGE_SKILL_TEST,
};

export const staticSkill: IHeroSkillSet = {
    id: "staticSkill",
    name: "Static",
    desc: "Random enemy gets 50% shock\nstacks of enemy with\nhighest shock. Otherwise\napply 1 shock",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.MAGIC],
    skills: staticSkillset(50,1),
    nextLevel: staticSkill_2,
    image: IMAGE_DRAFT_STATIC, // IMAGE_SKILL_TEST,
};

const igniteSkillset = (mpScale:number, ppScale:number): IHeroSkill[] => {
    // trigger highest burn enemy burn
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.HIGH_BURN_ENEMY,
            status: EStatusType.BURN,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.HIGH_BURN_ENEMY,
            value: 100,
            valueType: "percent",
            mpScale,
        },
        {
            type: EHeroSkillType.STATUS_ATTACK,
            targetType: ETargetType.HIGH_BURN_ENEMY,
            status: EStatusType.BURN,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Ignite",
                type: EDebuffType.BATTLE_TRIGGER,
                targetType: ETargetType.RANDOM_ENEMY,
                value: 1,
                valueType: "number",
                timeType: EBuffTimeType.DUEL,
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Ignite tick tock",
                    skill: [],
                    type: EAppTriggerType.TURN_END,
                },
                nestedEffects: [
                    {
                        debuffType: EDebuffType.MARK_STATUS_GROW,
                        status: EStatusType.BURN,
                        value: 1,
                        valueType: "number",
                        ppScale,
                    }
                ],
            },
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO
        },
    ];
}

export const igniteSkill_3: IHeroSkillSet = {
    id: "igniteSkill",
    name: "Ignite",
    desc: "Trigger burn on enemy with\nhighest burn, with\n+[10xMP]% damage increase.\nIf no burn, a random enemy\ngets [1+50%xPP] burn at\nthe end of his turn",
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.MAGIC_ATTACK,
    heroClasses: [EHeroClass.MASTER, EHeroClass.MAGIC],
    skills: igniteSkillset(1000,50),
    image: IMAGE_DRAFT_IGNITE, // IMAGE_SKILL_TEST,
};

export const igniteSkill_2: IHeroSkillSet = {
    id: "igniteSkill",
    name: "Ignite",
    desc: "Trigger burn on enemy with\nhighest burn, with\n+[7xMP]% damage increase.\nIf no burn, a random enemy\ngets [1+35%xPP] burn at\nthe end of his turn",
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.MAGIC_ATTACK,
    heroClasses: [EHeroClass.MASTER, EHeroClass.MAGIC],
    skills: igniteSkillset(700,35),
    nextLevel: igniteSkill_3,
    image: IMAGE_DRAFT_IGNITE, // IMAGE_SKILL_TEST,
};

export const igniteSkill: IHeroSkillSet = {
    id: "igniteSkill",
    name: "Ignite",
    desc: "Trigger burn on enemy with\nhighest burn, with\n+[5xMP]% damage increase.\nIf no burn, a random enemy\ngets [1+25%xPP] burn at\nthe end of his turn",
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.MAGIC_ATTACK,
    heroClasses: [EHeroClass.MASTER, EHeroClass.MAGIC],
    skills: igniteSkillset(500,25),
    nextLevel: igniteSkill_2,
    image: IMAGE_DRAFT_IGNITE, // IMAGE_SKILL_TEST,
};

const stingSkillset = (base:number, ppScale:number, poison:number): IHeroSkill[] => {
    // deal phys dmg (pp) and apply poison if dmg dealt to hp
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            targetType: ETargetType.FIRST_ENEMY,
            value: base,
            valueType: "number",
            ppScale,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.FIRST_ENEMY,
            value: 100,
            valueType: "percent",
            valueFrom: "latestDamageRecieved",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            targetType: ETargetType.FIRST_ENEMY,
            status: EStatusType.POISON,
            value: poison,
            valueType: "number",
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE
        }
    ];
}

export const stingSkill_3: IHeroSkillSet = {
    id: "stingSkill",
    name: "Sting",
    desc: "Deal [1+150%xPP] physical\ndamage and if dealt damage\nto health apply 14 poison",
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.PHYSICAL_ATTACK,
    heroClasses: [EHeroClass.WILD, EHeroClass.WARRIOR],
    skills: stingSkillset(1,150,14),
    image: IMAGE_DRAFT_STING, // IMAGE_SKILL_TEST,
};

export const stingSkill_2: IHeroSkillSet = {
    id: "stingSkill",
    name: "Sting",
    desc: "Deal [1+100%xPP] physical\ndamage and if dealt damage\nto health apply 9 poison",
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.PHYSICAL_ATTACK,
    heroClasses: [EHeroClass.WILD, EHeroClass.WARRIOR],
    skills: stingSkillset(1,100,9),
    nextLevel: stingSkill_3,
    image: IMAGE_DRAFT_STING, // IMAGE_SKILL_TEST,
};

export const stingSkill: IHeroSkillSet = {
    id: "stingSkill",
    name: "Sting",
    desc: "Deal [1+50%xPP] physical\ndamage and if dealt damage\nto health apply 6 poison",
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.PHYSICAL_ATTACK,
    heroClasses: [EHeroClass.WILD, EHeroClass.WARRIOR],
    skills: stingSkillset(1,50,6),
    nextLevel: stingSkill_2,
    image: IMAGE_DRAFT_STING, // IMAGE_SKILL_TEST,
};


const HOPE_BUFF_NAME = "Hope"
const hopeSkillset = (hp:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: hp,
            valueType: "number",
            animation: AnimationType.NONE,
        },        
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.LOW_PERCENT_ALLY,
            value: 10,
            valueFrom: "maxHp",
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "maxHp",
            targetType: ETargetType.LOW_PERCENT_ALLY,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
        },
        {
            type: EHeroSkillType.HEAL,
            targetType: ETargetType.SAME_LAST_TARGET,
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: HOPE_BUFF_NAME,
                targetType: ETargetType.SAME_LAST_TARGET,
                type: EDebuffType.BATTLE_TRIGGER,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    allowCastFromDead: true,
                    skillId: "Hope expired",
                    type: EAppTriggerType.TURN_START,
                    targetNumber: 2,
                    skill: [
                        {
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.ANCHOR_TARGET,
                            buff: {
                                name: HOPE_BUFF_NAME,
                                type: EBuffType.SAVED_VALUE,
                                value: 0, // not used
                                targetType: ETargetType.SELF, // not used
                                timeType: EBuffTimeType.DUEL, // not used
                            },
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.ATTRIBUTE_DECREASE,
                            targetType: ETargetType.ANCHOR_TARGET,
                            attribute: "maxHp",
                            value: 100,
                            valueType: "percent",
                            valueFrom: "customNumber",
                        }
                    ],
                },
                nestedEffects: [
                    {
                        buffType: EBuffType.SAVED_VALUE,
                        value: 100,
                        valueType: "percent",
                        valueFrom: "customNumber",
                    }
                ]
            },
            animation: AnimationType.NONE,
        }
    ];
}

export const hopeSkill_3: IHeroSkillSet = {
    id: "hopeSkill",
    name: "Hope",
    desc: "Most injured ally has his\nmax hp increased by 10%\nplus 13, and healed for same\namount, then recieves a\ndebuff that will reduce\ngained max hp in 2 turns",
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.HEAL,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: hopeSkillset(13),
    image: IMAGE_DRAFT_HOPE, // IMAGE_SKILL_TEST,
};

export const hopeSkill_2: IHeroSkillSet = {
    id: "hopeSkill",
    name: "Hope",
    desc: "Most injured ally has his\nmax hp increased by 10%\nplus 7, and healed for same\namount, then recieves a\ndebuff that will reduce\ngained max hp in 2 turns",
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.HEAL,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: hopeSkillset(7),
    nextLevel: hopeSkill_3,
    image: IMAGE_DRAFT_HOPE, // IMAGE_SKILL_TEST,
};

export const hopeSkill: IHeroSkillSet = {
    id: "hopeSkill",
    name: "Hope",
    desc: "Most injured ally has his\nmax hp increased by 10%\nplus 4, and healed for same\namount, then recieves a\ndebuff that will reduce\ngained max hp in 2 turns",
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.HEAL,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: hopeSkillset(4),
    nextLevel: hopeSkill_2,
    image: IMAGE_DRAFT_HOPE, // IMAGE_SKILL_TEST,
};

export const mixedClassSkills1 = [
    // physical classes
    phycisalAttackSkill,    // warrior + master
    statusesIntoHeal,       // order + wild
    attackWithBleedSkill,   // master + wild
    nextBAArea,             // order + warrior
    // magical classes
    radiantWallSkill,   // summon + priest
    blindingBeamSkill,  // magic + bard
    venomHeartSkill,    // dark + summon
    toxicTuneSkill,     // dark + bard
    heatUpSkill,        // magic + priest
    // mixed
    grudgeHealSkill,    // warrior + priest
    openingSkill,       // master + bard
    fragileSkill,       // magic + wild
];

export const mixedClassSkills2 = [
    removeBuffSkill,    // dark + wild
    removeDebuffSkill,  // priest + order
    chainToNextSkill,
    // new
    cleanCutSkill,      // warrior + master
    overwhelmSkill,     // warrior + dark
    orchestrateSkill,   // bard + wild
    puppetSkill,        // warrior + summon
    hopeSkill,          // order + priest
    igniteSkill,        // magic + master
    stingSkill,         // warrior + wild
    staticSkill,        // magic + summon
];

export const mixedClassSkills3 = [
    outHealBuffSkill,    // priest + bard
    shieldAttackSkill,   // warrior + order
    buffSelfMPorPP,      // warrior + magic
    increaseMaxHpSkill,  // wild + priest
    buffSummonCritSkill, // master + summon
    chainBasicAttackSkill
];
