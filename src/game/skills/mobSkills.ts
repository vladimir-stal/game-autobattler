import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ESkillSetType, EStatusType, ETargetType, IHeroSkillSet } from "../../types";
import { i18n } from "../consts";
import { IMAGE_FIREFLY_SELF_POISON, IMAGE_SKILL_BARD_BUFF_1, IMAGE_SKILL_REGEN, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";

// GOBLIN SHAMAN /////////////////////////////////////////////// GOBLIN SHAMAN

export const goblinShamanHpRegIncr_2: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name,
    desc: i18n.skills.mobs.goblinShamanHpRegIncr.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    isActivateOnStart: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 2,
            valueType: "number",
            attribute: "hpRegen",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    image: IMAGE_SKILL_REGEN,
};

export const goblinShamanHpRegIncr: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name,
    desc: i18n.skills.mobs.goblinShamanHpRegIncr.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    //isActivateOnStart: true,
    skills: [
        // {
        //     type: EHeroSkillType.STATUS_APPLY,
        //     isBasicAttack: false,
        //     value: 2,
        //     valueType: "number",
        //     targetType: ETargetType.FIRST_ENEMY,
        //     status: EStatusType.POISON,
        // },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 2,
            valueType: "number",
            attribute: "hpRegen",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    nextLevel: goblinShamanHpRegIncr_2,
    image: IMAGE_SKILL_REGEN,
};

// GOBLIN APPLY SHOCK /////////////////////////////////////////////// GOBLIN APPLY SHOCK

export const goblinApplyShock_3: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc1,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 3,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const goblinApplyShock_2: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc1,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 2,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_TEST,
    nextLevel: goblinApplyShock_3,
};

export const goblinApplyShock: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: 1,
            targetType: ETargetType.FIRST_ENEMY,
        },
    ],
    image: IMAGE_SKILL_TEST,
    nextLevel: goblinApplyShock_2,
};

export const skeletonArmorSelfAndLow: IHeroSkillSet = {
    id: "attrIncArmorSelfAndLow",
    name: "+armor all",
    desc: "Armor Self and low Hp ally [4]",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: 4,
            valueType: "number",
            targetType: ETargetType.LOW_HP_ALLY,
            ppScale: 20,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 4,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 20,
        },
    ],
    image: IMAGE_SKILL_TEST,
};

export const fireflySelfPoison: IHeroSkillSet = {
    id: "fireflySelfPoison",
    name: "poison self",
    desc: "Apply poison [1] self",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 1,
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Invulnerable",
                type: EBuffType.COSMIC_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 3,
            },
        },
    ],
    isActivateOnStart: true,
    image: IMAGE_FIREFLY_SELF_POISON,
};

export const mobNoSkill: IHeroSkillSet = {
    id: "mobNoSkill",
    name: "no skill",
    desc: "skip casting",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    isBasicAttack: true,
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.NONE,
        },
    ],
};

export const goldGoblinBuff: IHeroSkillSet = {
    id: "goldGoblinBuff",
    name: i18n.skills.basic.buffBaNextBaAll.name,
    desc: i18n.skills.basic.buffBaNextBaAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+1 next ba",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: 1,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 1,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const mobCheerSkill_2: IHeroSkillSet = {
    id: "mobCheerSkill",
    name: "Cheer ally 2",
    desc: "Make first ally cast\nskill out of turn\nSkip own basic attack",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    isActivateOnStart: true,
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_CAST_SKILL,
            value: 1, // not used
            valueType: "number", // not used
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    //nextLevel: mobCheerSkill_2,
    image: IMAGE_SKILL_BARD_BUFF_1,
}

export const mobCheerSkill: IHeroSkillSet = {
    id: "mobCheerSkill",
    name: "Cheer ally",
    desc: "Make first ally cast\nskill out of turn\nSkip own basic attack",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_CAST_SKILL,
            value: 1, // not used
            valueType: "number", // not used
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    nextLevel: mobCheerSkill_2,
    image: IMAGE_SKILL_BARD_BUFF_1,
}
export const mobAmbushSkill_2: IHeroSkillSet = {
    id: "mobAmbushSkill",
    name: "Ambush attack 2", // Need better name
    desc: "First ally makes a\nbasic attack out of turn\nSkip own basic attack",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            value: 1, // not used
            valueType: "number", // not used
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_1,
}

export const mobAmbushSkill: IHeroSkillSet = {
    id: "mobAmbushSkill",
    name: "Ambush attack", // Need better name
    desc: "First ally makes a\nbasic attack out of turn\nSkip own basic attack",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            value: 1, // not used
            valueType: "number", // not used
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    nextLevel: mobAmbushSkill_2,
    image: IMAGE_SKILL_BARD_BUFF_1,
}