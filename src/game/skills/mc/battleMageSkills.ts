import {
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
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";

const battleMageNoAttack = (atk: number, scale: number): IHeroSkill => {
    return {
        type: EHeroSkillType.BUFF,
        buff: {
            name: "Power+",
            timeType: EBuffTimeType.DURATION,
            duration: 2,
            type: EBuffType.BATTLE_TRIGGER,
            targetType: ETargetType.SELF,
            value: 1,
            appTrigger: {
                limitedRepeats: false,
                skillId: "Skills go brrr",
                type: EAppTriggerType.TURN_END,
                skill: [
                    {
                        type: EHeroSkillType.ATTACK,
                        attackType: EHeroAttackType.MAGIC,
                        targetType: ETargetType.FIRST_ENEMY,
                        value: atk,
                        ppScale: scale,
                        mpScale: scale,
                    },
                ],
            },
            nestedEffects: [
                {
                    debuffType: EDebuffType.SKILL_SKIP_BASIC_ATTACK,
                    value: 1,
                    valueType: "number",
                },
                {
                    buffType: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "magicPower",
                    value: 35,
                    valueType: "percent",
                    valueFrom: "attack",
                },
                {
                    buffType: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "physicalPower",
                    value: 35,
                    valueType: "percent",
                    valueFrom: "attack",
                },
                {
                    debuffType: EDebuffType.ATTRIBUTE_DECREASE,
                    attribute: "attack",
                    value: 65,
                    valueType: "percent",
                },
            ],
        },
    };
};

const battleMageSkillset = (atk: number, scale: number): IHeroSkill[] => {
    return [
        battleMageNoAttack(atk,scale),
        {
            type: EHeroSkillType.ATTACK,
            value: atk,
            targetType: ETargetType.RANDOM_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
            mpScale: scale,
            ppScale: scale,
        },
    ];
};

export const battleMageSkill_3: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(1, 65),
    isBasicAttack: false,
};

export const battleMageSkill_2: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(1, 50),
    isBasicAttack: false,
    nextLevel: battleMageSkill_3,
};

export const battleMageSkill: IHeroSkillSet = {
    id: "BattlemageAttack",
    //name: "Multi attack",
    //desc: "Attack random enemy with physical damage.\nAttack random enemy with magical damage.",
    name: i18n.skills.mc.battleMageSkill.name,
    desc: i18n.skills.mc.battleMageSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BATTLE_MAGE],
    isMcSkill: true,
    skills: battleMageSkillset(1, 35),
    isBasicAttack: false,
    nextLevel: battleMageSkill_2,
};

export const battleMagePassive: IPassiveSkill = {
    desc: "Skills with MP scaling get equal PP scaling and vice versa (skill with both scaling are not affected)",
    preBattleBuff: undefined,
};

export const battleMageSkills: THeroSkills = [battleMageSkill];
