import { EAppTriggerType, EBuffTimeType, EBuffType, EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

export const knightSkill_3: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 20,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 65,
        },
    ],
};

export const knightSkill_2: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 15,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 50,
        },
    ],
    nextLevel: knightSkill_3,
};

export const knightSkill: IHeroSkillSet = {
    id: "KnightArmor",
    name: i18n.skills.mc.knightSkill.name,
    desc: i18n.skills.mc.knightSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 12,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.SELF,
            ppScale: 35,
        },
    ],
    nextLevel: knightSkill_2,
};

export const knightPassive: IPassiveSkill = {
    desc: i18n.skills.passives.knightPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Hit the wall",
            type: EAppTriggerType.AFTER_FULL_BLOCK,
            skill: [
                {
                    type: EHeroSkillType.ATTACK,
                    attackType: EHeroAttackType.PHYSICAL,
                    targetType: ETargetType.FIRST_ENEMY,
                    value: 2,
                    valueType: "number",
                    ppScale: 50,
                },
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "armor",
                    targetType: ETargetType.SELF,
                    value: 1,
                    valueType: "number",
                    ppScale: 25,
                },
            ],
        },
    },
};

export const knightSkills: THeroSkills = [knightSkill];
