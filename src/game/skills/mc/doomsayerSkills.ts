import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const doomsayerSkill_2: IHeroSkillSet = {
    id: "DoomsayerCurse",
    //name: "Doomsayer curse(2)",
    //desc: "Disable next skill of\n2 enemy heroes,\nexcept MC skills",
    name: i18n.skills.mc.doomsayerSkill.name,
    desc: i18n.skills.mc.doomsayerSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DOOMSAYER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Doom",
                type: EDebuffType.DISABLE_SKILL,
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Doom",
                type: EDebuffType.DISABLE_SKILL,
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
};

export const doomsayerSkill: IHeroSkillSet = {
    id: "DoomsayerCurse",
    //name: "Doomsayer curse",
    //desc: "Disable next enemy\nhero skill,\nexcept MC skills",
    name: i18n.skills.mc.doomsayerSkill.name,
    desc: i18n.skills.mc.doomsayerSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DOOMSAYER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Doom",
                type: EDebuffType.DISABLE_SKILL,
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ENEMY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: doomsayerSkill_2,
};

export const doomsayerSkills: THeroSkills = [doomsayerSkill];
