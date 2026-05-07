import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
} from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_FIREFLY_SELF_POISON, IMAGE_SKILL_MOB_FIREFLY_SHOCK } from "../../utils/load/skillImagesLoad";

// regular Firefly
//   ~ summon
// debuff blind (20) until get hit
const fireflyConfusingMistSkillset = (blind: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Mist",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.TILL_GOT_HIT,
                type: EDebuffType.BLIND,
                value: blind, // ~ 20, 30, 40 (it stacks)
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            animation: AnimationType.NONE,
            value: 0,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.BUFF,
                animation: AnimationType.NONE,
                buff: {
                    name: "Shock BA",
                    targetType: ETargetType.RANDOM_ALLY,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                    type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                    statusType: EStatusType.SHOCK,
                    value: 1,
                    valueType: "number",
                },
            },
            mpScale: mpScale,
        },
    ];
};

export const fireflyConfusingMistSkill_3: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    //name: "Confusing mist",
    //desc: "Blind [35] all enemies\nuntil they take attack\nRandom [35%xMP] allies have\ntheir attacks apply 1 shock",
    name: i18n.skills.mobs.fireflyConfusingMist.name,
    desc: i18n.skills.mobs.fireflyConfusingMist.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(35, 35),
    //nextLevel: fireflyConfusingMistSkill_2,
    image: IMAGE_SKILL_MOB_FIREFLY_SHOCK,
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyConfusingMistSkill_2: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    //name: "Confusing mist",
    //desc: "Blind [25] all enemies\nuntil they take attack\nRandom [25%xMP] allies have\ntheir attacks apply 1 shock",
    name: i18n.skills.mobs.fireflyConfusingMist.name,
    desc: i18n.skills.mobs.fireflyConfusingMist.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(25, 25),
    nextLevel: fireflyConfusingMistSkill_3,
    image: IMAGE_SKILL_MOB_FIREFLY_SHOCK,
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyConfusingMistSkill: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    //name: "Confusing mist",
    //desc: "Blind [20] all enemies\nuntil they take attack\nRandom [20%xMP] allies have\ntheir attacks apply 1 shock",
    name: i18n.skills.mobs.fireflyConfusingMist.name,
    desc: i18n.skills.mobs.fireflyConfusingMist.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(20, 20),
    nextLevel: fireflyConfusingMistSkill_2,
    image: IMAGE_SKILL_MOB_FIREFLY_SHOCK,
    animationType: AnimationType.UNIT_ATTACK,
};

// InfernoFly
//   ~ summon, magic
//
const fireflyUnfairExchangeSkillset = (hpPercent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -100,
            valueFrom: "hp",
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.HIGH_PERCENT_ENEMY,
            valueType: "percent",
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            attribute: "hp",
            animation: AnimationType.NONE,
        }, // customNumber is (NewHp - OldHp)
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: 0,
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_IS_NEGATIVE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            targetType: ETargetType.SELF,
            attribute: "hp",
            value: 50,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Next Ba+",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: hpPercent,
                valueType: "percent",
                valueFrom: "customNumber",
                mpScale: hpPercent,
            },
        },
    ];
};

export const fireflyUnfairExchange_3: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [60%xMP] +[60%] of\nrestored Hp as buff to\nnext basic attack",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(60),
    //nextLevel: fireflyUnfairExchange_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyUnfairExchange_2: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [45%xMP] +[45%] of\nrestored Hp as buff to\nnext basic attack",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(45),
    nextLevel: fireflyUnfairExchange_3,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyUnfairExchange: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [30%xMP] +[30%] of\nrestored Hp as buff to\nnext basic attack",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(30),
    nextLevel: fireflyUnfairExchange_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const infernoFlyPassive: IPassiveSkill = {
    desc: "Start with 1 poison & 3 cosmic shield",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        valueType: "number",
        cannotBeTargeted: true,
        isHidden: true,
        appTrigger: {
            limitedRepeats: true,
            skillId: "Unstable firefly",
            type: EAppTriggerType.PRE_BATTLE,
            skill: [
                {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.POISON,
                    value: 1,
                    targetType: ETargetType.SELF,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Invulnerable",
                        type: EBuffType.COSMIC_SHIELD,
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        value: 3,
                        cannotBeTargeted: true,
                    },
                },
            ],
        },
    },
};
