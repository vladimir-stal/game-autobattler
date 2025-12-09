import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";

export const shamanSkill_3: IHeroSkillSet = {
    id: "incrAllTotemValue",
    name: "Empower all totems(3)",
    desc: "Increase all totems values by [1]+[MP*70%]",
    level: 3,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 70,
        },
    ],
};

export const shamanSkill_2: IHeroSkillSet = {
    id: "incrAllTotemValue",
    name: "Empower all totems(2)",
    desc: "Increase all totems values by [1]+[MP*50%]",
    level: 2,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
            mpScale: 50,
        },
    ],
    nextLevel: shamanSkill_3,
};

export const shamanSkill: IHeroSkillSet = {
    id: "incrAllTotemValue",
    name: "Empower all totems",
    desc: "Increase all totems values by [1]",
    level: 1,
    heroClasses: [EHeroClass.SHAMAN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM_INCREASE_VALUE,
            isBasicAttack: true,
            value: 1,
            valueType: "number",
            targetType: ETargetType.TOTEM_ALLY_ALL,
        },
    ],
    nextLevel: shamanSkill_2,
};

export const shamanSkills: THeroSkills = [shamanSkill];
