import { EBuffTimeType, EBuffType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const hunterSkillset = (markPercent:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Hunter mark",
                type: EDebuffType.MARK_HUNTER,
                targetType: ETargetType.SECOND_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: markPercent,
                valueType: "percent",
            },
        }
    ]
}

export const hunterSkill_3: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(25),
};

export const hunterSkill_2: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(25),
    nextLevel: hunterSkill_3,
};

export const hunterSkill: IHeroSkillSet = {
    id: "HunterMark",
    name: i18n.skills.mc.hunterSkill.name,
    desc: i18n.skills.mc.hunterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HUNTER],
    isMcSkill: true,
    skills: hunterSkillset(15),
    nextLevel: hunterSkill_2,
};

export const hunterSkills: THeroSkills = [hunterSkill];
