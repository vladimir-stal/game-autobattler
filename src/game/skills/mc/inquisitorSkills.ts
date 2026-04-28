import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

/*export const inquisitorSkill_3: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc2,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Burn mark(3)",
                type: EDebuffType.MARK_BURN,
                value: 15,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
};

export const inquisitorSkill_2: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc3,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Burn mark(2)",
                type: EDebuffType.MARK_BURN,
                value: 10,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: inquisitorSkill_3,
};

export const inquisitorSkill: IHeroSkillSet = {
    id: "InquisitorBurn",
    //name: "Inquisitor Burn",
    //desc: "Debuff highest MP enemy \nwith mark that applies\n [5] burn every turn.",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Burn mark",
                type: EDebuffType.MARK_BURN,
                value: 5,
                valueType: "number",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: inquisitorSkill_2,
};*/

// alternative EDebuffType.MARK_BURN
const inquisitorSkillset = (burns:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                type: EDebuffType.BATTLE_TRIGGER,
                name: "Burn mark",
                targetType: ETargetType.HIGH_MP_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                appTrigger: {
                    limitedRepeats: false,
                    skillId: "Increase burn",
                    type: EAppTriggerType.TURN_START,
                    skill: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            status: EStatusType.BURN,
                            targetType: ETargetType.ANCHOR_TARGET,
                            value: burns,
                            valueType: "number",
                        }
                    ]
                }
            }
        }
    ]
}

export const inquisitorSkill_3: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(15),
};
export const inquisitorSkill_2: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(10),
    nextLevel: inquisitorSkill_3,
};
export const inquisitorSkill: IHeroSkillSet = {
    id: "InquisitorBurn",
    name: i18n.skills.mc.inquisitorSkill.name,
    desc: i18n.skills.mc.inquisitorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.INQUISITOR],
    isMcSkill: true,
    skills: inquisitorSkillset(5),
    nextLevel: inquisitorSkill_2,
};

export const inquisitorPassive: IPassiveSkill = {
    desc: "At the end of every round\ngain armor equal to 30%\nof burn stacks on all\nenemies",
    preBattleBuff: {
        type: EBuffType.BATTLE_TRIGGER,
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        value: 5,
        isHidden: true,
        cannotBeTargeted: true,
        appTrigger: {
            limitedRepeats: false,
            type: EAppTriggerType.ROUND_CYCLE,
            skillId: "Inquisition",
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    status: EStatusType.BURN,
                    targetType: ETargetType.ALL_ENEMIES,
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "armor",
                    targetType: ETargetType.SELF,
                    value: 30,
                    valueType: "percent",
                    valueFrom: "customNumber",
                }
            ]
        }
    }
}

export const inquisitorSkills: THeroSkills = [inquisitorSkill];
