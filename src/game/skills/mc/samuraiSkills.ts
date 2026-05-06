import { EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const samuraiSkill_2: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc2,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+3 bleed on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BLEED,
                value: 3,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    isChained: true,
    //nextLevel: samuraiSkill_3,
};

export const samuraiSkill: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "+2 bleed on ba",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BLEED,
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    isChained: true,
    nextLevel: samuraiSkill_2,
};

export const samuraiPassive: IPassiveSkill = {
    desc: "Upon death apply [ba+PP]x50%\nbleed to all enemies",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        cannotBeTargeted: true,
        isHidden: true,
        appTrigger: {
            limitedRepeats: false,
            allowCastFromDead: true,
            skillId: "SUDOKU",
            type: EAppTriggerType.DEATH,
            //targetCheck: ETargetType.SELF,
            skill: [
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "physicalPower",
                    value: 100,
                    valueFrom: "attack",
                    valueType: "percent",
                    targetType: ETargetType.SELF,
                },
                {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.BLEED,
                    value: 100,
                    valueType: "percent",
                    valueFrom: "physicalPower",
                    targetType: ETargetType.ALL_ENEMIES,
                }
            ]
        }
    }
};

export const samuraiSkills: THeroSkills = [samuraiSkill];
