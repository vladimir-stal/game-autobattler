import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const warlockSkillset = (percentDecrease:number, mpScale:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "-20% ba",
                type: EDebuffType.ATTRIBUTE_DECREASE,
                attribute: "attack",
                value: percentDecrease,
                valueType: "percent",
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.POISON,
            value: 1,
            targetType: ETargetType.HIGH_ATTACK_ENEMY,
            mpScale: mpScale,
        },
    ]
}

export const warlockSkill_3: IHeroSkillSet = {
    id: "WarlockCurse",
    name: i18n.skills.mc.warlockSkill.name,
    desc: i18n.skills.mc.warlockSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: warlockSkillset(20,150),
};

export const warlockSkill_2: IHeroSkillSet = {
    id: "WarlockCurse",
    //name: "Warlock curse(2)",
    //desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MP] poison.",
    name: i18n.skills.mc.warlockSkill.name,
    desc: i18n.skills.mc.warlockSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: warlockSkillset(20,100),
    nextLevel: warlockSkill_3,
};

export const warlockSkill: IHeroSkillSet = {
    id: "WarlockCurse",
    //name: "Warlock curse",
    //desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4]+[MPx50%] poison.",
    name: i18n.skills.mc.warlockSkill.name,
    desc: i18n.skills.mc.warlockSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.WARLOCK],
    isMcSkill: true,
    skills: warlockSkillset(20,50),
    nextLevel: warlockSkill_2,
};

export const warlockPassive: IPassiveSkill = {
    desc: "Every enemy that dies with poison stacks spread 65% poison to every other enemy",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Toxic death",
            type: EAppTriggerType.DEATH,
            targetCheck: ETargetType.ALL_ENEMIES,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.BY_RELEVANT_ID,
                    status: EStatusType.POISON,
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.POISON,
                    targetType: ETargetType.ALL_ENEMIES,
                    value: 65,
                    valueType: "percent",
                    valueFrom: "customNumber",
                }
            ],
        }
    }
}

export const warlockSkills: THeroSkills = [warlockSkill];
