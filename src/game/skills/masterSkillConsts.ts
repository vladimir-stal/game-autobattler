import { NONE } from "phaser";
import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_AXE_BUFF,
    IMAGE_SKILL_MAGIC_FIGHT,
    IMAGE_SKILL_SKULL_KNIFE,
    IMAGE_SKILL_SWORD_BUFF_2,
    IMAGE_SKILL_YELLOW_EXPLOSION,
} from "../utils/load/skillImagesLoad";
import { buffSummonCritSkill } from "./commonSkill3Consts";
import { attackWithBleedSkill, phycisalAttackSkill } from "./commonSkillConsts";

// BUFF NEXT BA X SELF

const buffNextBaXSelf_3: IHeroSkillSet = {
    id: "buffNextBaXSelf",
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
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
    id: "buffNextBaXSelf",
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
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
    id: "buffNextBaXSelf",
    name: i18n.skills.basic.buffNextBaX.name,
    desc: i18n.skills.basic.buffNextBaX.desc1, //"Multiply x[1.4] self next basic attack",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER],
    skills: [
        {
            type: EHeroSkillType.BUFF,
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
    nextLevel: buffNextBaXSelf_2,
    image: IMAGE_SKILL_AXE_BUFF,
};

// Feint
const feintAttackSkillset = (atkPaercent: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
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

const attackIgnoringArmorSkillset = (atk: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Ignore armor",
                type: EBuffType.IGNORE_ARMOR,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 1,
                value: 1,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            value: atk,
            valueType: "percent",
            valueFrom: "attack",
            animation: AnimationType.UNIT_ATTACK,
        },
    ];
};

export const attackIgnoringArmor_3: IHeroSkillSet = {
    id: "attackIgnoringArmor",
    name: "Ignore armor",
    desc: "Make physical attack with\n150% attack strength\nIgnore armor this turn",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: false,
    image: IMAGE_SKILL_SKULL_KNIFE,
    skills: attackIgnoringArmorSkillset(150),
};

export const attackIgnoringArmor_2: IHeroSkillSet = {
    id: "attackIgnoringArmor",
    name: "Ignore armor",
    desc: "Make physical attack with\n125% attack strength\nIgnore armor this turn",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    skills: attackIgnoringArmorSkillset(125),
    isBasicAttack: false,
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: attackIgnoringArmor_3,
};

export const attackIgnoringArmor: IHeroSkillSet = {
    id: "attackIgnoringArmor",
    name: "Ignore armor",
    desc: "Make physical attack with\n100% attack strength\nIgnore armor this turn",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    skills: attackIgnoringArmorSkillset(100),
    isBasicAttack: false,
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: attackIgnoringArmor_2,
};

// BUFF NEXT BA TO BE CRIT SKILL
const buffNextBaBeCritSelfSkillset = (atk: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "critBa",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "critChance",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                value: 100,
                valueType: "number",
            },
            animation: AnimationType.NONE,
        },
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
                ppScale: ppScale,
            },
        },
    ];
};

export const buffNextBaBeCritSelf_3: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: i18n.skills.level2.buffNextBaBeCritSelf.name,
    desc: i18n.skills.level2.buffNextBaBeCritSelf.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaBeCritSelfSkillset(4, 35), // 4+1/3 pp
    image: IMAGE_SKILL_SKULL_KNIFE,
};

export const buffNextBaBeCritSelf_2: IHeroSkillSet = {
    id: "buffNextBaBeCritSelf",
    name: i18n.skills.level2.buffNextBaBeCritSelf.name,
    desc: i18n.skills.level2.buffNextBaBeCritSelf.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    skills: buffNextBaBeCritSelfSkillset(2, 25), // 2+1/4 pp
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
    skills: buffNextBaBeCritSelfSkillset(0, 20), // 0+1/5 pp
    image: IMAGE_SKILL_SKULL_KNIFE,
    nextLevel: buffNextBaBeCritSelf_2,
};

const riposteSkillset = (atk: number, ppScale: number): IHeroSkill[] => {
    return [
        {
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
                                isHidden: true,
                                value: 1,
                            },
                            animation: AnimationType.NONE,
                        },
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
                                ppScale: ppScale,
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
        },
    ];
};
//
export const riposteSkill_3: IHeroSkillSet = {
    id: "riposteSkill",
    //name: "Master Riposte",
    //desc: "Forgo basic attack to\nmake preemptive strike\nagainst opponent with\n[1+65%xPP] increase attack",
    name: i18n.skills.level2.riposteSkill.name,
    desc: i18n.skills.level2.riposteSkill.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: false,
    skills: riposteSkillset(1, 65),
    image: IMAGE_SKILL_MAGIC_FIGHT,
};

export const riposteSkill_2: IHeroSkillSet = {
    id: "riposteSkill",
    //name: "Master Riposte",
    //desc: "Forgo basic attack to\nmake preemptive strike\nagainst opponent with\n[1+35%xPP] increase attack",
    name: i18n.skills.level2.riposteSkill.name,
    desc: i18n.skills.level2.riposteSkill.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: false,
    skills: riposteSkillset(1, 35),
    image: IMAGE_SKILL_MAGIC_FIGHT,
    nextLevel: riposteSkill_3,
};

export const riposteSkill: IHeroSkillSet = {
    id: "riposteSkill",
    //name: "Master Riposte",
    //desc: "Forgo basic attack to\nmake preemptive strike\nagainst opponent with\n[1] increase attack",
    name: i18n.skills.level2.riposteSkill.name,
    desc: i18n.skills.level2.riposteSkill.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: false,
    skills: riposteSkillset(1, 0),
    image: IMAGE_SKILL_MAGIC_FIGHT,
    nextLevel: riposteSkill_2,
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

export const followupComboSkill_3: IHeroSkillSet = {
    id: "followupComboSkill",
    name: "Follow up combo",
    desc: "Quickly use next skill\nafter next basic attack\nIncrease PP by [9] for\nthat skill",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: true, // make basic attack
    skills: followupComboSkillset(9),
    image: IMAGE_SKILL_YELLOW_EXPLOSION,
};

export const followupComboSkill_2: IHeroSkillSet = {
    id: "followupComboSkill",
    name: "Follow up combo",
    desc: "Quickly use next skill\nafter next basic attack\nIncrease PP by [6] for\nthat skill",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.MASTER],
    isBasicAttack: true, // make basic attack
    skills: followupComboSkillset(6),
    image: IMAGE_SKILL_YELLOW_EXPLOSION,
    nextLevel: followupComboSkill_3,
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
    image: IMAGE_SKILL_YELLOW_EXPLOSION,
    nextLevel: followupComboSkill_2,
};

export const masterSkills: THeroSkills = [feintAttack, buffNextBaXSelf];

export const masterSkills_2: THeroSkills = masterSkills.concat([buffNextBaBeCritSelf, riposteSkill, attackWithBleedSkill, phycisalAttackSkill]);

export const masterSkills_3: THeroSkills = masterSkills_2.concat([attackIgnoringArmor, followupComboSkill, buffSummonCritSkill]);
