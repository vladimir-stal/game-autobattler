import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

// TODO: when buff repeats what happens? add MP scale?

export const shadowMasterSkill: IHeroSkillSet = {
    id: "ShadowMasterBuff",
    name: "Dark heal",
    desc: "Apply bufff that allows\nto use heal skills as\ndamage skills",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SHADOW_MASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: false,
            buff: {
                name: "Dark heal",
                type: EBuffType.DARK_HEAL,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
        },
    ],
};

export const shadowMasterSkills: THeroSkills = [shadowMasterSkill];
