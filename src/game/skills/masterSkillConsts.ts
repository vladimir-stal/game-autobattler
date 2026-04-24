import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroClass,
    EHeroSkillType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_AXE_BUFF, IMAGE_SKILL_SKULL_KNIFE, IMAGE_SKILL_SWORD_BUFF_2 } from "../utils/load/skillImagesLoad";
import { buffSummonCritSkill } from "./commonSkill3Consts";

// BUFF NEXT BA X SELF

const buffNextBaXSelf_3: IHeroSkillSet = {
    id: "buffNextBaX",
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "x1.8 next",
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
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "x1.6 next",
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
                name: "x1.4 next",
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

// Feint
const feintAttackSkillset = (atkPaercent: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            value: atkPaercent,
            valueFrom: "attack",
            valueType: "percent",
            attribute: "armor",
            animation: AnimationType.NONE,
            targetType: ETargetType.SELF,
            ppScale: ppScale,
        },
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "-atk",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: atkPaercent,
                valueType: "percent",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ];
};

export const feintAttack_3: IHeroSkillSet = {
    id: "feintAttack",
    name: i18n.skills.basic.feintAttack.name,
    desc: i18n.skills.basic.feintAttack.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: feintAttackSkillset(35, 35),
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

export const feintAttack_2: IHeroSkillSet = {
    id: "feintAttack",
    name: i18n.skills.basic.feintAttack.name,
    desc: i18n.skills.basic.feintAttack.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: feintAttackSkillset(35, 20),
    nextLevel: feintAttack_3,
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

export const feintAttack: IHeroSkillSet = {
    id: "feintAttack",
    name: i18n.skills.basic.feintAttack.name,
    desc: i18n.skills.basic.feintAttack.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: feintAttackSkillset(35, 0),
    nextLevel: feintAttack_2,
    image: IMAGE_SKILL_SWORD_BUFF_2,
};

// BUFF NEXT BA IGNORE ARMOR

const buffNextBaIgnoreArmorSelfSkillset = (atk: number): IHeroSkill[] => {
    const ignArmor: IHeroSkill = {
        type: EHeroSkillType.BUFF,
        buff: {
            name: "Ignore armor",
            type: EBuffType.IGNORE_ARMOR,
            targetType: ETargetType.SELF,
            timeType: EBuffTimeType.TILL_NEXT_BA,
            value: 1,
        },
    };
    if (atk) {
        return [
            ignArmor,
            {
                type: EHeroSkillType.BUFF,
                buff: {
                    name: "nextBa+",
                    type: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "attack",
                    valueType: "number",
                    value: atk,
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                },
            },
        ];
    } else {
        return [ignArmor];
    }
};

export const buffNextBaIgnoreArmorSelf_3: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor(3)",
    desc: "Ignore enemy armor next basic attack. Buff next basic attack [5]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaIgnoreArmorSelfSkillset(5),
};

export const buffNextBaIgnoreArmorSelf_2: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor(2)",
    desc: "Ignore enemy armor next basic attack. Buff next basic attack [2]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaIgnoreArmorSelfSkillset(2),
    nextLevel: buffNextBaIgnoreArmorSelf_3,
};

export const buffNextBaIgnoreArmorSelf: IHeroSkillSet = {
    id: "buffIgnoreArmorNextBa",
    name: "Ignore armor",
    desc: "Ignore enemy armor next basic attack",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaIgnoreArmorSelfSkillset(0),
    nextLevel: buffNextBaIgnoreArmorSelf_2,
};

// BUFF NEXT BA TO BE CRIT SKILL
const buffNextBaBeCritSelfSkillset = (atk: number): IHeroSkill[] => {
    const beCrit: IHeroSkill = {
        type: EHeroSkillType.BUFF,
        buff: {
            name: "critBa",
            //type: EBuffType.BASIC_ATTACK_IS_CRIT,
            type: EBuffType.ATTRIBUTE_INCREASE,
            attribute: "critChance",
            targetType: ETargetType.SELF,
            timeType: EBuffTimeType.TILL_NEXT_BA,
            value: 100,
            valueType: "number",
        },
    };
    if (atk) {
        return [
            beCrit,
            {
                type: EHeroSkillType.BUFF,
                buff: {
                    name: "nextBa+",
                    type: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "attack",
                    valueType: "number",
                    value: atk,
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                },
            },
        ];
    } else {
        return [beCrit];
    }
};

export const buffNextBaBeCritSelf_3: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: i18n.skills.level2.buffNextBaBeCritSelf.name,
    desc: i18n.skills.level2.buffNextBaBeCritSelf.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaBeCritSelfSkillset(5),
    image: IMAGE_SKILL_SKULL_KNIFE,
};

export const buffNextBaBeCritSelf_2: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: i18n.skills.level2.buffNextBaBeCritSelf.name,
    desc: i18n.skills.level2.buffNextBaBeCritSelf.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaBeCritSelfSkillset(2),
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: buffNextBaBeCritSelf_3,
};

export const buffNextBaBeCritSelf: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: i18n.skills.level2.buffNextBaBeCritSelf.name,
    desc: i18n.skills.level2.buffNextBaBeCritSelf.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaBeCritSelfSkillset(0),
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: buffNextBaBeCritSelf_2,
};

const riposteSkillset = (atk: number): IHeroSkill[] => {
    const riposte: IHeroSkill = {
        type: EHeroSkillType.BUFF,
        buff: {
            name: "Riposte",
            targetType: ETargetType.SELF,
            type: EBuffType.BATTLE_TRIGGER,
            timeType: EBuffTimeType.TILL_NEXT_BA,
            value: 1,
            appTrigger: {
                limitedRepeats: true,
                skillId: "Riposte",
                type: EAppTriggerType.TAKE_ATTACK,
                skill: [
                    {
                        type: EHeroSkillType.BUFF,
                        buff: {
                            name: "Aim",
                            targetType: ETargetType.SELF,
                            timeType: EBuffTimeType.TILL_NEXT_BA,
                            type: EBuffType.CHANGE_TARGET_TYPE,
                            changeTargetTypeTo: ETargetType.BY_UNIT_ID,
                            value: 1,
                        },
                        animation: AnimationType.NONE,
                    },
                    {
                        type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                        targetType: ETargetType.SELF,
                        animation: AnimationType.NONE,
                    },
                ],
            },
        },
    };
    if (atk) {
        return [
            riposte,
            {
                type: EHeroSkillType.BUFF,
                buff: {
                    name: "nextBa+",
                    type: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "attack",
                    valueType: "number",
                    value: atk,
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                },
                animation: AnimationType.NONE,
            },
        ];
    } else {
        return [riposte];
    }
};
//
export const riposteSkill: IHeroSkillSet = {
    id: "riposteSkill",
    name: "Master Riposte",
    desc: "Forgo basic attack to\nmake preemptive strike\nagainst opponent",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: false,
    skills: riposteSkillset(0),
    image: IMAGE_SKILL_SKULL_KNIFE,
};

const followupComboSkillset = (ppIncrease: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Combo",
                targetType: ETargetType.SELF,
                type: EBuffType.BATTLE_TRIGGER,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Combo",
                    type: EAppTriggerType.BASIC_ATTACK,
                    skill: [
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "PP+",
                                type: EBuffType.ATTRIBUTE_INCREASE,
                                attribute: "physicalPower",
                                valueType: "number",
                                value: ppIncrease,
                                targetType: ETargetType.SELF,
                                timeType: EBuffTimeType.DURATION,
                                duration: 1,
                            },
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.FORCE_UNIT_CAST_SKILL,
                            targetType: ETargetType.SELF,
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const followupComboSkill: IHeroSkillSet = {
    id: "followupComboSkill",
    name: "Follow up combo",
    desc: "Quickly use next skill\nafter next basic attack\nIncrease PP by [3] for\nthat skill",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: true, // make basic attack
    skills: followupComboSkillset(3),
    image: IMAGE_SKILL_SKULL_KNIFE,
};

//TODO: add buffNextBaIgnoreArmorSelf to lvl2 skills
export const masterSkills: THeroSkills = [feintAttack, buffNextBaXSelf];

export const masterSkills_2: THeroSkills = masterSkills.concat([buffNextBaBeCritSelf, riposteSkill]);

export const masterSkills_3: THeroSkills = masterSkills_2.concat([buffSummonCritSkill, followupComboSkill]);
