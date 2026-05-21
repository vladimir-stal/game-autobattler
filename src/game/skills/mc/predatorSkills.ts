import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, ESkillCondition, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

// [
//     {
//         type: EHeroSkillType.STATUS_APPLY,
//         isBasicAttack: true,
//         status: EStatusType.BLEED,
//         value: 4, //TODO PP: % unit PP to bleed
//         targetType: ETargetType.MARKED_ENEMY,
//         markType: EDebuffType.MARK_PREDATOR,
//     },
// ],

const MARK_PREDATOR_DEBUFF_NAME = "Predator mark";

const predatorSkillset = (markStrength: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: MARK_PREDATOR_DEBUFF_NAME,
                type: EDebuffType.MARK_PREDATOR,
                targetType: ETargetType.HIGH_BLEED_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: markStrength,
                valueType: "percent",
            },
        },
    ];
};

export const predatorSkill_3: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[40]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(35),
};

export const predatorSkill_2: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[40]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(25),
};

export const predatorSkill: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[20]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(15),
    nextLevel: predatorSkill_2,
};

export const predatorPassive: IPassiveSkill = {
    desc: i18n.skills.passives.predatorPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Hunt complete",
            type: EAppTriggerType.DEATH,
            targetCheck: ETargetType.ALL_ENEMIES,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.BY_RELEVANT_ID,
                    targetBuffId: MARK_PREDATOR_DEBUFF_NAME,
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.HEAL,
                    targetType: ETargetType.SELF,
                    value: 25,
                    valueType: "percent",
                    valueFrom: "maxHp",
                    animation: AnimationType.NONE,
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.SELF,
                    attribute: "physicalPower",
                    value: 5,
                    valueType: "number",
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                }
            ],
        }
    }
}

export const predatorSkills: THeroSkills = [predatorSkill];
