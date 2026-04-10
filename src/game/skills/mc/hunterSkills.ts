import { EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const hunterSkill_2: IHeroSkillSet = {
    id: "HunterMark",
    //name: "Hunter mark(2)",
    //desc: "Mark second enemy and\ndecrease physical resistance -[20]%\nTarget basic attacks to marked enemy",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Hunter mark",
                type: EDebuffType.MARK_HUNTER,
                targetType: ETargetType.SECOND_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: 20,
                valueType: "percent",
            },
        },
    ],
};

export const hunterSkill: IHeroSkillSet = {
    id: "HunterMark",
    //name: "Hunter mark",
    //desc: "Mark second enemy and\ndecrease physical resistance -[10]%\nTarget basic attacks to marked enemy",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.DEBUFF,
            isBasicAttack: true,
            debuff: {
                name: "Hunter mark",
                type: EDebuffType.MARK_HUNTER,
                targetType: ETargetType.SECOND_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: 10,
                valueType: "percent",
            },
        },
    ],
    nextLevel: hunterSkill_2,
};

export const hunterSkills: THeroSkills = [hunterSkill];
