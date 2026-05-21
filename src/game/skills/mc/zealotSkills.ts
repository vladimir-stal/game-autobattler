import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EItemBattleBonusType, ESkillCondition, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

// TODO: add scaling from mp? add value if heal < value => debuff is not removed

const zealotSkillset = (value:number, targets:ETargetType):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                type: EDebuffType.ANTIHEAL,
                name: "Antiheal",
                timeType: EBuffTimeType.DUEL,
                value: value,
                valueType: "number",
                targetType: targets,
            },
        },
    ]; 
}

export const zealotSkill_3: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_THREE_ENEMIES),
};

export const zealotSkill_2: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_TWO_ENEMIES),
    nextLevel: zealotSkill_3,
};

export const zealotSkill: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_ENEMY),
    nextLevel: zealotSkill_2,
};

export const zealotPassive: IPassiveSkill = {
    desc: i18n.skills.passives.zealotPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Miasma",
            type: EAppTriggerType.TURN_START,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ALL_ENEMIES,
                    animation: AnimationType.NONE,
                    childSkill: {
                        type: EHeroSkillType.NONE,
                        attribute: "hpRegen",
                        value: 1,
                    } // will select random enemy with (hpRegen >= 1)
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_DECREASE,
                    targetType: ETargetType.SAME_LAST_TARGET,
                    attribute: "hpRegen",
                    value: 3,
                    valueType: "number",
                    animation: AnimationType.NONE,
                    condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE
                },
            ],
        }
    }
}

export const zealotSkills: THeroSkills = [zealotSkill];
