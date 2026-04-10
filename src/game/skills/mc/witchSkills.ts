import { EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const witchSkill_3: IHeroSkillSet = {
    id: "WitchBleedAll",
    //name: "Witch all bleed",
    //desc: "Apply [1]+[MP] bleed to all enemies",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.BLEED,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            mpScale: 100,
        },
    ],
};

export const witchSkill_2: IHeroSkillSet = {
    id: "WitchBleedAll",
    //name: "Witch all bleed",
    //desc: "Apply [1]+[MPx70%] bleed to all enemies",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.BLEED,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            mpScale: 70,
        },
    ],
    nextLevel: witchSkill_3,
};

export const witchSkill: IHeroSkillSet = {
    id: "WitchBleedAll",
    //name: "Witch all bleed",
    //desc: "Apply [1]+[MPx50%] bleed to all enemies",
    name: i18n.skills.mc.witchSkill.name,
    desc: i18n.skills.mc.witchSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.WITCH],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.BLEED,
            value: 1,
            targetType: ETargetType.ALL_ENEMIES,
            mpScale: 50,
        },
    ],
    nextLevel: witchSkill_2,
};

export const witchSkills: THeroSkills = [witchSkill];
