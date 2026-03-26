import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

// TODO: how to improve skill on lvl up?

export const duelistSkill: IHeroSkillSet = {
    id: "DuelistCopyBuff",
    name: "Copy buff",
    desc: "Copy random buff\nfrom ally to self",
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DUELIST],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF_COPY,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetFromType: ETargetType.BUFFED_ALLY_RANDOM,
            targetType: ETargetType.SELF,
        },
    ],
};

export const duelistSkills: THeroSkills = [duelistSkill];
