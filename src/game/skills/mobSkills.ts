import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ESkillSetType, EStatusType, ETargetType, IHeroSkillSet } from "../../types";
import { i18n } from "../consts";
import { IMAGE_FIREFLY_SELF_POISON, IMAGE_SKILL_REGEN, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";

// GOBLIN SHAMAN /////////////////////////////////////////////// GOBLIN SHAMAN

export const goblinShamanHpRegIncr_2: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name + "(2)",
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
    name: i18n.skills.level2.applyShock.name + "(3)",
    desc: i18n.skills.level2.applyShock.desc1,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: false,
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
    name: i18n.skills.level2.applyShock.name + "(2)",
    desc: i18n.skills.level2.applyShock.desc1,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    skills: [
        {
            isBasicAttack: false,
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
    skills: [
        {
            isBasicAttack: false,
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
                name: "Invulnerable 1",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Invulnerable 2",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Invulnerable 3",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
        },
    ],
    isActivateOnStart: true,
    image: IMAGE_FIREFLY_SELF_POISON,
};

export const fireflyNoSkill: IHeroSkillSet = {
    id: "fireflyNoSkill",
    name: "no skill",
    desc: "skip casting",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ALL],
    skills: [
        {
            type: EHeroSkillType.NONE,
            isBasicAttack: true,
        },
    ],
};
