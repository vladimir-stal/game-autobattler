import { EBuffTimeType, EBuffType, EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const barbarianSkill_3: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 150,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 4,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
};

export const barbarianSkill_2: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 125,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 3,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    nextLevel: barbarianSkill_3,
};

export const barbarianSkill: IHeroSkillSet = {
    id: "BarbarianShout",
    //name: "Barbarian shout",
    //desc: "Add hp regen value to self next basic attack",
    name: i18n.skills.mc.barbarianSkill.name,
    desc: i18n.skills.mc.barbarianSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BARBARIAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "hpReg2atk",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 100,
                valueType: "percent",
                valueFrom: "hpRegen",
                targetType: ETargetType.SELF,
                duration: 2,
                timeType: EBuffTimeType.DURATION,
            },
        },
    ],
    nextLevel: barbarianSkill_2,
};

export const barbarianSkills: THeroSkills = [barbarianSkill];
