import {
    AnimationType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_MAGIC_HAND,
    IMAGE_SKILL_PHYS_ATTACK,
    IMAGE_SKILL_YELLOW_FLAME,
    IMAGE_SKILL_CLEAVE,
    IMAGE_SKILL_POISON,
    IMAGE_SKILL_CHAIN,
    IMAGE_SKILL_CLEAR,
} from "../utils/load/skillImagesLoad";
import { skillsetSummon } from "../utils/skillUtils2";

////////////// COMMON SKILLS FOR MULTPLE BASIC CLASSES //////////////////////////////////////////////////////////////////////

// NO BASIC ATTACK
// always chained. to circle fast through skills

export const noBasicAttackSkill: IHeroSkillSet = {
    id: "noBasicAttack",
    //name: "No basic attack",
    //desc: "Perform no basic attack",
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

// export const onlyBasicAttackSkill: IHeroSkillSet = {
//     id: "onlyBasicAttack",
//     name: "Only basic attack",
//     desc: "Perform a basic attack",
//     level: 1,
//     priceLevel: 2,
//     heroClasses: [EHeroClass.ALL],
//     skills: [
//         {
//             type: EHeroSkillType.NONE,
//             isBasicAttack: true,
//         },
//     ],
//     isChained: true,
//     image: IMAGE_SKILL_TEST,
// };
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



const overcomeSkillStack = (status: EStatusType, percent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            value: 0, // sets battleUnit.customNumber = 0
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            status: status, // summs number of status stacks into battleUnit.customNumber
            value: 1, // not used
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: status,
            value: -percent, // multiply battleUnit.customNumber by negative %percent
            valueFrom: "customNumber",
            valueType: "percent",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
        },
        {
            type: EHeroSkillType.HEAL,
            value: percent, // multiply battleUnit.customNumber by positive %percent
            valueFrom: "customNumber",
            valueType: "percent",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
        },
    ];
};

export const statusesIntoHeal_2: IHeroSkillSet = {
    id: "statusesIntoHeal",
    //name: "Overcome",
    //desc: "Remove [65%] stacks of\nevery status, heal same\namount",
    name: i18n.skills.basic.statusesIntoHeal.name,
    desc: i18n.skills.basic.statusesIntoHeal.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    skills: [
        ...overcomeSkillStack(EStatusType.BLEED, 65),
        ...overcomeSkillStack(EStatusType.BURN, 65),
        ...overcomeSkillStack(EStatusType.POISON, 65),
        ...overcomeSkillStack(EStatusType.SHOCK, 65),
    ],
    image: IMAGE_SKILL_CLEAR,
};

export const statusesIntoHeal: IHeroSkillSet = {
    id: "statusesIntoHeal",
    //name: "Overcome",
    //desc: "Remove [50%] stacks of\nevery status, heal same\namount",
    name: i18n.skills.basic.statusesIntoHeal.name,
    desc: i18n.skills.basic.statusesIntoHeal.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    skills: [
        ...overcomeSkillStack(EStatusType.BLEED, 50),
        ...overcomeSkillStack(EStatusType.BURN, 50),
        ...overcomeSkillStack(EStatusType.POISON, 50),
        ...overcomeSkillStack(EStatusType.SHOCK, 50),
    ],
    image: IMAGE_SKILL_CLEAR,
    nextLevel: statusesIntoHeal_2,
};

// PHYSICAL + BLEED
export const attackWithBleedSkill_3: IHeroSkillSet = {
    id: "phycNBleed",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 3,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const attackWithBleedSkill_2: IHeroSkillSet = {
    id: "phycNBleed",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 2,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 50,
        },
    ],
    nextLevel: attackWithBleedSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const attackWithBleedSkill: IHeroSkillSet = {
    id: "phycNBleed",
    name: i18n.skills.basic.phycNBleed.name,
    desc: i18n.skills.basic.phycNBleed.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: 1,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: 35,
        },
    ],
    nextLevel: attackWithBleedSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

// PHYSICAL ATTACK

export const phycisalAttackSkill_3: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
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
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
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
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
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
            },
        },
    ],
    image: IMAGE_SKILL_CLEAVE,
};

export const nextBAArea_2: IHeroSkillSet = {
    id: "nextBAArea",
    name: i18n.skills.basic.nextBAArea.name,
    desc: i18n.skills.basic.nextBAArea.desc2,
    // reduce next ba by [35%/20%/0%] but next ba target first 2 eneimes
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "-atk",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 20,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
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
    nextLevel: nextBAArea_3,
    image: IMAGE_SKILL_CLEAVE,
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
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "-atk",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: 35,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
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
    nextLevel: nextBAArea_2,
    image: IMAGE_SKILL_CLEAVE,
};

// REMOVE DEBUFF

export const removeDebuffSkill_3: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 3,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    image: IMAGE_SKILL_YELLOW_FLAME,
};

export const removeDebuffSkill_2: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 2,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeDebuffSkill_3,
    image: IMAGE_SKILL_YELLOW_FLAME,
};

export const removeDebuffSkill: IHeroSkillSet = {
    id: "removeDebuff",
    name: i18n.skills.common.removeDebuff.name,
    desc: i18n.skills.common.removeDebuff.desc1,
    level: 1,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.DEBUFFED_ALLY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeDebuffSkill_2,
    image: IMAGE_SKILL_YELLOW_FLAME,
};

// REMOVE BUFF

export const removeBuffSkill_3: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 3,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    image: IMAGE_SKILL_MAGIC_HAND,
};

export const removeBuffSkill_2: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 2,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeBuffSkill_3,
    image: IMAGE_SKILL_MAGIC_HAND,
};

export const removeBuffSkill: IHeroSkillSet = {
    id: "removeBuff",
    name: i18n.skills.common.removeBuff.name,
    desc: i18n.skills.common.removeBuff.desc1,
    level: 1,
    priceLevel: 2,
    //rarity: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.BUFF_REMOVE,
            targetType: ETargetType.BUFFED_ENEMY_RANDOM,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: removeBuffSkill_2,
    image: IMAGE_SKILL_MAGIC_HAND,
};

// HEAT UP : magic + priest = burn + buff mp (based on burn) 2 duration [1+1/2+2/3+3]
export const heatUpSkill: IHeroSkillSet = {
    id: "heatUpSkill",
    name: "Разогрев",
    desc: "Apply [1] burn, increase own MP by target's burn for 2 turns",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MAGIC, EHeroClass.PRIEST],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            value: 1, // next 2,3
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
                duration: 2, // next 3,4
                value: 100,
                valueType: "percent",
                valueFrom: "customNumber",
            },
        },
    ],
    //nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_POISON,
};

// TOXIC TUNE : bard + dark = totem +1 poison on enemy [1 front, 1 front 1 random, 2 front 1 random]
const toxicTuneSkill: IHeroSkillSet = {
    id: "toxicTuneSkill",
    name: "Токсичный мотив",
    desc: "Each turn front enemy\nrecieve [1] poison",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.DARK],
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: false,
            totem: {
                id: "ToxicTune",
                name: "Токсичный мотив",
                skills: [
                    {
                        type: EHeroSkillType.STATUS_APPLY,
                        value: 1,
                        valueType: "number",
                        targetType: ETargetType.FIRST_ENEMY,
                        status: EStatusType.POISON,
                    },
                    // level 2: + status apply 1 random enemy
                    // level 3: first enemy 2 poison
                ],
            },
        },
    ],
    //nextLevel: gladiatorSkill_2,
};

// VENOM HEART : dark + summon = buff 2 duration +poison on ba (self / summon)
export const venomHeartSkill: IHeroSkillSet = {
    id: "venomHeartSkill",
    name: "Venom heart",
    desc: "Buff summon's and\nown attacks to apply\n[1] poison for [2] turns",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.DARK, EHeroClass.SUMMON],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Venom",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 2, // next 2,4
                value: 1, // next 2,2
                valueType: "number",
            }
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Venom",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                targetType: ETargetType.SUMMON_CURRENT,
                timeType: EBuffTimeType.DURATION,
                duration: 2, // next 2,4
                value: 1, // next 2,2
                valueType: "number",
            },
            condition: ESkillCondition.HAS_SUMMON
        },
    ],
    //nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_POISON,
};

// BLINDING Beam : bard + magic = magic atk [1/2/3] + debuff blind 2? duration
export const blindingBeamSkill: IHeroSkillSet = {
    id: "blindingBeamSkill",
    name: "Blinding beam",
    desc: "Deal [1] magic damage\nand apply [35+MP] blind\nto enemy for 2 turns",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD, EHeroClass.MAGIC],
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.MAGIC,
            value: 1, // next 2,3
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
                value: 35, // next 45,55
                valueType: "number",
                mpScale: 100, // next 135,150
            }
        },
    ],
    //nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_MAGIC_HAND,
};

// RADIANT WALL : summon + priest = summon [0,5] + buff overheal 2 duration
export const radiantWallSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.ORDER,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 0,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Radiant wall",
    id: "RADIANTSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

const selfBuffOverheal = (duration: number):IHeroSkill => {
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
        },
    };
}

export const radiantWallSkill: IHeroSkillSet = {
    id: "radiantWallSkill",
    name: "Radiant wall",
    desc: "Summons defender [0,5]\nand for 2 turns\noverheals increase damage\nto front enemy",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.PRIEST],
    skills: [selfBuffOverheal(2), ...skillsetSummon(radiantWallSummon, 0, 35, 20, 2, 2)], // summon 0/5
    //nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_MAGIC_HAND,
};

export const multiclassSkills1 = [phycisalAttackSkill, statusesIntoHeal, attackWithBleedSkill, nextBAArea];
