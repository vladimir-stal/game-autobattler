import { AnimationType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const monkSkill_3: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear(2)",
    //desc: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
};

export const monkSkill_2: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear(2)",
    //desc: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: monkSkill_3,
};

export const monkSkill: IHeroSkillSet = {
    id: "MonkSelfClear",
    //name: "Monk self clear",
    //desc: "Remove negative status\nfrom self.\nRemove debuff from self",
    name: i18n.skills.mc.monkSkill.name,
    desc: i18n.skills.mc.monkSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.MONK],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_REMOVE,
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF_REMOVE,
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: monkSkill_2,
};

export const monkSkills: THeroSkills = [monkSkill];
