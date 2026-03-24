import { EHeroClass, EHeroSkillType, ESkillSetType, EStatusType, ETargetType, IHeroSkillSet } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_REGEN, IMAGE_SKILL_TEST } from "../utils/imageLoadUtil";

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
