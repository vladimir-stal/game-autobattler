import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    IUnit,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_FIREFLY_SELF_POISON,
    IMAGE_SKILL_BARD_BUFF_1,
    IMAGE_SKILL_DOUBLE_SWORD,
    IMAGE_SKILL_KNIGHT_SHIELD,
    IMAGE_SKILL_MOB_FIREFLY_MIST,
    IMAGE_SKILL_MOB_GOBLIN_REGEN,
    IMAGE_SKILL_MOB_GOBLIN_SAND,
    IMAGE_SKILL_MOB_GOBLIN_SHOCK,
    IMAGE_SKILL_MOB_GOBLIN_SONG,
    IMAGE_SKILL_MOB_LAST_STAND,
    IMAGE_SKILL_MOB_PIRATE_BLACK_MARK,
    IMAGE_SKILL_MOB_POISON_BLADE,
    IMAGE_SKILL_MOB_POISON_FLAME,
    IMAGE_SKILL_MOB_SKELETON_SHIELD,
    IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE,
    IMAGE_SKILL_MOB_SPIRIT_SPEARS,
    IMAGE_SKILL_MOB_STRONG_TOGEATHER,
    IMAGE_SKILL_PHYS_ATTACK,
    IMAGE_SKILL_REGEN,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";

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

export const radiantWallNoAttackButArmorSkill: IHeroSkillSet = {
    id: "radiantWallNoAttackButArmor",
    name: "Butt armor",
    desc: "Convert 50% base attack into armor",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            targetType: ETargetType.SELF,
            value: 50,
            valueType: "percent",
            valueFrom: "attack",
        },
    ],
};

// boss cheerleader goblins
export const mobCheerSkill_2: IHeroSkillSet = {
    id: "mobCheerSkill",
    name: "Cheer ally 2",
    desc: "Make first ally cast\nskill out of turn\nSkip own basic attack",
    level: 2, // really should not go beyond level 1
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
};

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
};
export const mobAmbushSkill_2: IHeroSkillSet = {
    id: "mobAmbushSkill",
    name: "Ambush attack 2", // Need better name
    desc: "First ally makes a\nbasic attack out of turn\nSkip own basic attack",
    level: 2, // really should not go beyond level 1
    priceLevel: 2,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: true,
    skills: [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            value: 1, // not used
            valueType: "number", // not used
            targetType: ETargetType.FIRST_ALLY,
        },
    ],
    image: IMAGE_SKILL_BARD_BUFF_1,
};

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
};
