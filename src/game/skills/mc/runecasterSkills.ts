import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const runecasterSkill_2: IHeroSkillSet = {
    id: "runecasterFireShield",
    //name: "Fire shield(2)",
    //desc: "Shield self with magic\nfirewhich burns every\nattacker [1]+[70%xMP]",
    name: i18n.skills.mc.runecasterSkill.name,
    desc: i18n.skills.mc.runecasterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.RUNECASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Fire shield",
                type: EBuffType.FIRE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                mpScale: 70,
            },
        },
    ],
};

export const runecasterSkill: IHeroSkillSet = {
    id: "runecasterFireShield",
    //name: "Fire shield",
    //desc: "Shield self with magic\nfirewhich burns every\nattacker [1]+[50%xMP]",
    name: i18n.skills.mc.runecasterSkill.name,
    desc: i18n.skills.mc.runecasterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.RUNECASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Fire shield",
                type: EBuffType.FIRE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
                mpScale: 50,
            },
        },
    ],
    nextLevel: runecasterSkill_2,
};

export const runecasterSkills: THeroSkills = [runecasterSkill];
