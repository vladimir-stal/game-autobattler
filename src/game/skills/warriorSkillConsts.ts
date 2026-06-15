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
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { IMAGE_DRAFT_FRACTURE, IMAGE_SKILL_AXE_BUFF, IMAGE_SKILL_DOUBLE_SWORD, IMAGE_SKILL_DUEL, IMAGE_SKILL_RAGE, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";
import { buffSelfMPorPP, shieldAttackSkill } from "./commonSkill3Consts";
import { nextBAArea, phycisalAttackSkill } from "./commonSkillConsts";

// BUFF NEXT BA

export const buffNextBa_3: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff(3)",
    //desc: "Buff [8] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name,
    desc: i18n.skills.basic.buffNextBa.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Ba+",
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
    image: IMAGE_SKILL_RAGE,
};

export const buffNextBa_2: IHeroSkillSet = {
    id: "buffNextBa",
    //name: "Next BA+ buff(2)",
    //desc: "Buff [6] self next basic attack",
    name: i18n.skills.basic.buffNextBa.name,
    desc: i18n.skills.basic.buffNextBa.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Ba+",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 5,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                ppScale: 40,
            },
        },
    ],
    nextLevel: buffNextBa_3,
    image: IMAGE_SKILL_RAGE,
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
            buff: {
                name: "Ba+",
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
    image: IMAGE_SKILL_RAGE,
};

// BUFF NEXT BA +1 TIME

export const buffNextBaTimes_3: IHeroSkillSet = {
    id: "buffNextBaTimes",
    //name: "Next BA +2 time buff(3)",
    //desc: "Next basic attack has +[2] time",
    name: i18n.skills.level2.buffNextBaTimes.name,
    desc: i18n.skills.level2.buffNextBaTimes.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Flurry",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 2,
                valueType: "number",
                duration: 1,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    image: IMAGE_SKILL_DOUBLE_SWORD,
};

export const buffNextBaTimes_2: IHeroSkillSet = {
    id: "buffNextBaTimes",
    //name: "Next BA +1 time buff(2)",
    //desc: "Next basic attack has +[1] time",
    name: i18n.skills.level2.buffNextBaTimes.name,
    desc: i18n.skills.level2.buffNextBaTimes.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Flurry",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 1,
                valueType: "number",
                duration: 2,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    image: IMAGE_SKILL_DOUBLE_SWORD,
    nextLevel: buffNextBaTimes_3,
};

export const buffNextBaTimes: IHeroSkillSet = {
    id: "buffNextBaTimes",
    //name: "Next BA +1 time buff",
    //desc: "Next basic attack has +[1] time",
    name: i18n.skills.level2.buffNextBaTimes.name,
    desc: i18n.skills.level2.buffNextBaTimes.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Flurry",
                type: EBuffType.BASIC_ATTACK_ADD_TIMES,
                value: 1,
                valueType: "number",
                duration: 1,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    image: IMAGE_SKILL_DOUBLE_SWORD,
    nextLevel: buffNextBaTimes_2,
};

const wortyFoeSkillset = (atkMinus: number, ppScale: number, vulStacks: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Foe",
                type: EDebuffType.MARK_WORTHY_FOE,
                value: 1,
                valueType: "number",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                nestedEffects: [
                    {
                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                        attribute: "attack",
                        value: atkMinus,
                        valueType: "number",
                        ppScale: ppScale,
                    },
                    {
                        debuffType: EDebuffType.RESIST_DECREASE,
                        value: vulStacks,
                        valueType: "number",
                    }
                ],
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Duel",
                type: EBuffType.CHANGE_TARGET_TYPE,
                changeTargetTypeTo: ETargetType.MARKED_ENEMY,
                changeTargetMarkType: EDebuffType.MARK_WORTHY_FOE,
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                isHidden: true,
                cannotBeTargeted: true, // no reason to be targeted by copy buff
            },
        },
    ];
};

export const debuffWorthyFoe_3: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    //name: "Worthy foe",
    //desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*65%]\nmake it vulnerable [3]",
    name: i18n.skills.basic.debuffWorthyFoe.name,
    desc: i18n.skills.basic.debuffWorthyFoe.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: wortyFoeSkillset(2, 65, 3),
    image: IMAGE_SKILL_DUEL,
};

export const debuffWorthyFoe_2: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    //name: "Worthy foe",
    //desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*50%]\nmake it vulnerable [2]",
    name: i18n.skills.basic.debuffWorthyFoe.name,
    desc: i18n.skills.basic.debuffWorthyFoe.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: wortyFoeSkillset(2, 50, 2),
    image: IMAGE_SKILL_DUEL,
    nextLevel: debuffWorthyFoe_3,
};

export const debuffWorthyFoe: IHeroSkillSet = {
    id: "debuffWorthyFoe",
    //name: "Worthy foe",
    //desc: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PP*35%]\nmake it vulnerable [1]",
    name: i18n.skills.basic.debuffWorthyFoe.name,
    desc: i18n.skills.basic.debuffWorthyFoe.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR],
    skills: wortyFoeSkillset(2, 0, 1),
    image: IMAGE_SKILL_DUEL,
    nextLevel: debuffWorthyFoe_2,
};

// mortal strike (tier 3)
//   ~ next ba
//   + bleed
//   + debuff (physical vulnerability + reduce pp + reduce mp)

const mortalStrikeSkillset = (bleedAndVulnerability: number, statReduction: number, debuffDuration: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Mortal strike",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    type: EAppTriggerType.BASIC_ATTACK,
                    skillId: "Mortal strike",
                    skill: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            status: EStatusType.BLEED,
                            targetType: ETargetType.BY_RELEVANT_ID, // last target basic attack
                            value: bleedAndVulnerability,
                            valueType: "number",
                        },
                        {
                            type: EHeroSkillType.DEBUFF,
                            debuff: {
                                type: EDebuffType.RESIST_DECREASE,
                                name: "mortal",
                                value: bleedAndVulnerability,
                                valueType: "number",
                                targetType: ETargetType.BY_RELEVANT_ID,
                                timeType: EBuffTimeType.DURATION,
                                duration: debuffDuration,
                                nestedEffects: [
                                    {
                                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                                        attribute: "magicPower",
                                        value: statReduction,
                                        valueType: "number"
                                    },
                                    {
                                        debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                                        attribute: "physicalPower",
                                        value: statReduction,
                                        valueType: "number"
                                    },
                                ],
                            },
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const mortalStrikeSkill_3: IHeroSkillSet = {
    id: "mortalStrike",
    name: i18n.skills.level3.mortalStrikeSkill.name,
    desc: i18n.skills.level3.mortalStrikeSkill.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: mortalStrikeSkillset(8, 11, 3),
    image: IMAGE_SKILL_AXE_BUFF,
    //nextLevel: mortalStrikeSkill_2, // next level > (5,7,3) > (8,11,3)
};

export const mortalStrikeSkill_2: IHeroSkillSet = {
    id: "mortalStrike",
    name: i18n.skills.level3.mortalStrikeSkill.name,
    desc: i18n.skills.level3.mortalStrikeSkill.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: mortalStrikeSkillset(5, 7, 3),
    image: IMAGE_SKILL_AXE_BUFF,
    //nextLevel: mortalStrikeSkill_3, // next level > (5,7,3) > (8,11,3)
};

export const mortalStrikeSkill: IHeroSkillSet = {
    id: "mortalStrike",
    name: i18n.skills.level3.mortalStrikeSkill.name,
    desc: i18n.skills.level3.mortalStrikeSkill.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: mortalStrikeSkillset(3, 4, 3),
    image: IMAGE_SKILL_AXE_BUFF,
    //nextLevel: mortalStrikeSkill_2, // next level > (5,7,3) > (8,11,3)
};

const fractureSkillset = (dmg:number, bleedPercent:number, staticReduce:number):IHeroSkill[] => {
    // Deal Y phys dmg, remove X+2 regen; X = Bleed * 50% 
    // (next levels: +phys dmg, +static regen remove)
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            value: dmg,
            valueType: "number",
            targetType: ETargetType.FIRST_ENEMY,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SAME_LAST_TARGET,
            status: EStatusType.BLEED,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SAME_LAST_TARGET,
            value: bleedPercent,
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SAME_LAST_TARGET,
            value: staticReduce,
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            targetType: ETargetType.SAME_LAST_TARGET,
            attribute: "hpRegen",
            value: 100,
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
        }
    ];
}

export const fractureSkill_3: IHeroSkillSet = {
    id: "fractureSkill",
    name: "Fracture",
    desc: "Attack for [13] physical\ndamage and reduce target's\nregen by 50% bleed stacks\nplus 5",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: fractureSkillset(13, 50, 5),
    image: IMAGE_DRAFT_FRACTURE, //IMAGE_SKILL_TEST,
    //nextLevel: fractureSkill_2,
};

export const fractureSkill_2: IHeroSkillSet = {
    id: "fractureSkill",
    name: "Fracture",
    desc: "Attack for [8] physical\ndamage and reduce target's\nregen by 50% bleed stacks\nplus 3",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: fractureSkillset(8, 50, 3),
    image: IMAGE_DRAFT_FRACTURE, //IMAGE_SKILL_TEST,
    nextLevel: fractureSkill_3,
};

export const fractureSkill: IHeroSkillSet = {
    id: "fractureSkill",
    name: "Fracture",
    desc: "Attack for [5] physical\ndamage and reduce target's\nregen by 50% bleed stacks\nplus 2",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: true, // make basic attack
    skills: fractureSkillset(5, 50, 2),
    image: IMAGE_DRAFT_FRACTURE, //IMAGE_SKILL_TEST,
    nextLevel: fractureSkill_2,
};

export const warriorSkills: THeroSkills = [debuffWorthyFoe, buffNextBa];

export const warriorSkills_2: THeroSkills = warriorSkills.concat([buffNextBaTimes, nextBAArea, phycisalAttackSkill, fractureSkill]);

export const warriorSkills_3: THeroSkills = warriorSkills_2.concat([mortalStrikeSkill, buffSelfMPorPP, shieldAttackSkill]);
