import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_BARD_BUFF_1,
    IMAGE_SKILL_BARD_BUFF_2,
    IMAGE_SKILL_KNIGHT_MAGIC,
    IMAGE_SKILL_PRIEST_SCROLL,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";

// BUFF NEXT BA ALL

export const buffNextBaAll_3: IHeroSkillSet = {
    id: "buffBaNextBaAll",
    name: i18n.skills.basic.buffBaNextBaAll.name + "(3)",
    desc: i18n.skills.basic.buffBaNextBaAll.desc3, //"Buff next basic attack for [2] damage for all allies",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
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
    name: i18n.skills.basic.buffBaNextBaAll.name + "(2)",
    desc: i18n.skills.basic.buffBaNextBaAll.desc2, //"Buff next basic attack for [2] damage for all allies",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
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
            isBasicAttack: true,
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
    name: i18n.skills.basic.buffBaSelf.name + "(3)",
    desc: i18n.skills.basic.buffBaSelf.desc3, //"Buff self basic attack [1]",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 3,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_2,
};

export const buffBaSelf_2: IHeroSkillSet = {
    id: "buffBaSelf",
    name: i18n.skills.basic.buffBaSelf.name + "(2)",
    desc: i18n.skills.basic.buffBaSelf.desc2, //"Buff self basic attack [1]",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 2,
                valueType: "number",
                targetType: ETargetType.SELF,
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
            isBasicAttack: true,
            buff: {
                name: "buff self ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ],
    nextLevel: buffBaSelf_2,
    image: IMAGE_SKILL_BARD_BUFF_2,
};

// BUFF PP ALL SKILL

export const buffPPAll_3: IHeroSkillSet = {
    id: "buffPpAll",
    name: i18n.skills.basic.buffPpAll.name + "(3)",
    desc: i18n.skills.basic.buffPpAll.desc3, //"Buff Physical power \n[1]+[MP*50%] all allies",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
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
    name: i18n.skills.basic.buffPpAll.name + "(2)",
    desc: i18n.skills.basic.buffPpAll.desc2, //"Buff Physical power \n[1]+[MP*50%] all allies",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
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
    name: i18n.skills.basic.buffPpAll.name,
    desc: i18n.skills.basic.buffPpAll.desc1, //"Buff Physical power \n[1]+[MP*50%] all allies",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
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

export const buffTotalDmgSkill_2: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Total damage(2)",
    desc: "Buff total damage\n([10]+[60%xMP])% ally in front",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Total dmg",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.TOTAL_DAMAGE_INCREASE,
                value: 10,
                valueType: "percent",
                mpScale: 60,
            },
        },
    ],
    //nextLevel: buffTotalDmgSkill_2,
    image: IMAGE_SKILL_TEST,
};

export const buffTotalDmgSkill: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Total damage",
    desc: "Buff total damage\n([10]+[40%xMP])% ally in front",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Total dmg",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.TOTAL_DAMAGE_INCREASE,
                value: 10,
                valueType: "percent",
                mpScale: 40,
            },
        },
    ],
    nextLevel: buffTotalDmgSkill_2,
    image: IMAGE_SKILL_TEST,
};

//

// OUTGOING HEAL BUFF (LEVEL 3) /////////////////////////////////////////////////////////////////////////

export const outHealBuffSkill_2: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Out heal(2)",
    desc: "Buff outgoing heal\n([10]+[60%xMP])% ally in front",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.PRIEST],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Heal",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.OUTGOING_HEAL,
                value: 10,
                valueType: "percent",
                mpScale: 60,
            },
        },
    ],
    // nextLevel: outHealBuffSkill_2,
    image: IMAGE_SKILL_PRIEST_SCROLL,
};

export const outHealBuffSkill: IHeroSkillSet = {
    id: "buffTotalDmgSkill",
    //name: i18n.skills.basic.shieldAttackSkill.name,
    //desc: i18n.skills.basic.shieldAttackSkill.desc1,
    name: "Out heal",
    desc: "Buff outgoing heal\n([10]+[40%xMP])% ally in front",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.PRIEST],
    skills: [
        {
            isBasicAttack: false,
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Heal",
                targetType: ETargetType.ALLY_IN_FRONT,
                timeType: EBuffTimeType.DUEL,
                type: EBuffType.OUTGOING_HEAL,
                value: 10,
                valueType: "percent",
                mpScale: 40,
            },
        },
    ],
    nextLevel: outHealBuffSkill_2,
    image: IMAGE_SKILL_PRIEST_SCROLL,
};

//

export const bardSkills: THeroSkills = [buffNextBaAll, buffBaSelf];

export const bardSkills_2: THeroSkills = bardSkills.concat([buffPPAll]);

export const bardSkills_3: THeroSkills = bardSkills_2.concat([outHealBuffSkill, buffTotalDmgSkill]);
