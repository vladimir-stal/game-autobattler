import {
    EHeroClass,
    EHeroSkillType,
    ETargetType,
    IHeroSkillSet,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_SKILL_BARD_BUFF_1,
    IMAGE_SKILL_CHAIN,
} from "../utils/load/skillImagesLoad";

export const mobNoSkill: IHeroSkillSet = {
    id: "mobNoSkill",
    name: i18n.skills.mobs.mobNoSkill.name,
    desc: i18n.skills.mobs.mobNoSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: true,
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.NONE,
        },
    ],
    image: IMAGE_SKILL_CHAIN,
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
