import {
    EBuffTimeType,
    EBuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_3_TOTAL_BUFF,
    IMAGE_SKILL_BARD_BUFF_1,
    IMAGE_SKILL_BARD_BUFF_2,
    IMAGE_SKILL_BURNING_MAN,
    IMAGE_SKILL_KNIGHT_MAGIC,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";
import { outHealBuffSkill } from "./commonSkill3Consts";
import { blindingBeamSkill, toxicTuneSkill } from "./commonSkillConsts";

// BUFF NEXT BA ALL

export const buffNextBaAll_3: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name,
    desc: i18n.skills.basic.buffBaNextBaAll.desc3, //"Buff next basic attack for [2] damage for all allies",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+4 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 4,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffNextBaAll_2: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name,
    desc: i18n.skills.basic.buffBaNextBaAll.desc2, //"Buff next basic attack for [2] damage for all allies",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+3 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 3,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaAll_3,
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const buffNextBaAll: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name,
    desc: i18n.skills.basic.buffBaNextBaAll.desc1, //"Buff next basic attack for [2] damage for all allies",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+2 next ba all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
    ],
    nextLevel: buffNextBaAll_2,
    image: IMAGE_SKILL_BARD_BUFF_1,
};

// BUFF BA SELF

export const buffBaSelf_3: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name,
    desc: i18n.skills.basic.buffBaSelf.desc3, //"Buff self basic attack [1]",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 3,
                valueType: "number",
                targetType: ETargetType.RANDOM_ALLY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_2,
};

export const buffBaSelf_2: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name,
    desc: i18n.skills.basic.buffBaSelf.desc2, //"Buff self basic attack [1]",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.RANDOM_ALLY,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: buffBaSelf_3,
    image: IMAGE_SKILL_BARD_BUFF_2,
};

export const buffBaSelf: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name,
    desc: i18n.skills.basic.buffBaSelf.desc1, //"Buff self basic attack [1]",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ALLY,
                timeType: EBuffTimeType.DUEL,
                // similar to Order attrAttackSelf, but potential synergy with copy buff effects
            },
        },
    ],
    nextLevel: buffBaSelf_2,
    image: IMAGE_SKILL_BARD_BUFF_2,
};

// BUFF PP ALL SKILL

export const buffPPAll_3: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.level2.buffPpAll.name,
    desc: i18n.skills.level2.buffPpAll.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 100,
            },
        },
    ],
    image: IMAGE_SKILL_KNIGHT_MAGIC,
};

export const buffPPAll_2: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.level2.buffPpAll.name,
    desc: i18n.skills.level2.buffPpAll.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 70,
            },
        },
    ],
    nextLevel: buffPPAll_3,
    image: IMAGE_SKILL_KNIGHT_MAGIC,
};

export const buffPPAll: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.level2.buffPpAll.name,
    desc: i18n.skills.level2.buffPpAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "buff pp all",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "physicalPower",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.DUEL,
                mpScale: 50,
            },
        },
    ],
    nextLevel: buffPPAll_2,
    image: IMAGE_SKILL_KNIGHT_MAGIC,
};

// TOTAL DAMAGE BUFF (LEVEL 3) /////////////////////////////////////////////////////////////////////////

const buffTotalDmgSkillset = (base: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Total dmg%",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.TOTAL_DAMAGE_INCREASE,
                value: base,
                valueType: "percent",
                mpScale: mpScale,
            },
            condition: ESkillCondition.IN_BACK_ROW,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Total dmg%",
                targetType: ETargetType.ALLY_BEHIND,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.TOTAL_DAMAGE_INCREASE,
                value: base,
                valueType: "percent",
                mpScale: mpScale,
            },
            condition: ESkillCondition.IN_FRONT_ROW,
        },
    ];
};

export const buffTotalDmgSkill_3: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    name: i18n.skills.level3.buffTotalDmgSkill.name,
    desc: i18n.skills.level3.buffTotalDmgSkill.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: buffTotalDmgSkillset(10, 100),
    image: IMAGE_SKILL_3_TOTAL_BUFF,
};

export const buffTotalDmgSkill_2: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    name: i18n.skills.level3.buffTotalDmgSkill.name,
    desc: i18n.skills.level3.buffTotalDmgSkill.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: buffTotalDmgSkillset(10, 75),
    nextLevel: buffTotalDmgSkill_3,
    image: IMAGE_SKILL_3_TOTAL_BUFF,
};

export const buffTotalDmgSkill: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    name: i18n.skills.level3.buffTotalDmgSkill.name,
    desc: i18n.skills.level3.buffTotalDmgSkill.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: buffTotalDmgSkillset(10, 50),
    nextLevel: buffTotalDmgSkill_2,
    image: IMAGE_SKILL_3_TOTAL_BUFF,
};

//
const totemGiveArmorSkillset = (amount: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.FORCE_TOTEM_ACTION,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_TOTEM,
        },
        {
            type: EHeroSkillType.TOTEM,
            totem: {
                id: "HeroicTune",
                name: "Героический мотив",
                skills: [
                    {
                        type: EHeroSkillType.ATTRIBUTE_INCREASE,
                        attribute: "armor",
                        value: amount,
                        valueType: "number",
                        targetType: ETargetType.LOW_PERCENT_ALLY,
                    },
                ],
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const totemGiveArmorSkill_3: IHeroSkillSet = {
    id: "totemGiveArmorSkill",
    name: "HeroicTune",
    desc: "Призывает тотем который\nувеличивает броню героя\nс наименьшим процентом\nздоровья на [8]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: totemGiveArmorSkillset(8),
    image: IMAGE_SKILL_BURNING_MAN, // IMAGE_SKILL_TEST
    //nextLevel: totemGiveArmorSkill_2,
};

export const totemGiveArmorSkill_2: IHeroSkillSet = {
    id: "totemGiveArmorSkill",
    name: "HeroicTune",
    desc: "Призывает тотем который\nувеличивает броню героя\nс наименьшим процентом\nздоровья на [5]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: totemGiveArmorSkillset(5),
    image: IMAGE_SKILL_BURNING_MAN, // IMAGE_SKILL_TEST
    nextLevel: totemGiveArmorSkill_3,
};

export const totemGiveArmorSkill: IHeroSkillSet = {
    id: "totemGiveArmorSkill",
    name: "HeroicTune",
    desc: "Призывает тотем который\nувеличивает броню героя\nс наименьшим процентом\nздоровья на [3]",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: totemGiveArmorSkillset(3),
    image: IMAGE_SKILL_BURNING_MAN, // IMAGE_SKILL_TEST
    nextLevel: totemGiveArmorSkill_2,
};

export const bardSkills: THeroSkills = [buffNextBaAll, buffBaSelf];

export const bardSkills_2: THeroSkills = bardSkills.concat([buffPPAll, totemGiveArmorSkill, toxicTuneSkill, blindingBeamSkill]);

export const bardSkills_3: THeroSkills = bardSkills_2.concat([outHealBuffSkill, buffTotalDmgSkill]);

// + mob drop skill: goldGoblinBuff
