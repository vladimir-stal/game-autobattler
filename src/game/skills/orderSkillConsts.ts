import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { IMAGE_SKILL_SHIELD_BUFF_1, IMAGE_SKILL_SWORD_BUFF } from "../utils/imageLoadUtil";

// INCREASE ATTR ARMOR SELF SKILL

export const attrArmorSelf_3: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name + "(3)",
    desc: i18n.skills.basic.attrIncArmorSelf.desc3, //"Deal [4] physical damage to first enemy",
    level: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 8,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf_2: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name + "(2)",
    desc: i18n.skills.basic.attrIncArmorSelf.desc2, //"Deal [4] physical damage to first enemy",
    level: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrArmorSelf_3,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc1, //""Armor self [3]",
    level: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrArmorSelf_2,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

// INCREASE ATTR ATTACK SELF SKILL

export const attrAttackSelf_3: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name + "(3)",
    desc: i18n.skills.basic.attrAttackSelf.desc3, //"Increase self attack [1]",
    level: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    image: IMAGE_SKILL_SWORD_BUFF,
};

export const attrAttackSelf_2: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name + "(2)",
    desc: i18n.skills.basic.attrAttackSelf.desc2, //"Increase self attack [1]",
    level: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 2,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrAttackSelf_3,
    image: IMAGE_SKILL_SWORD_BUFF,
};

export const attrAttackSelf: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc1, //"Increase self attack [1]",
    level: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "attack",
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: attrAttackSelf_2,
    image: IMAGE_SKILL_SWORD_BUFF,
};

// INCREASE ATTR ARMOR ALL SKILL

export const attrArmorAll_3: IHeroSkillSet = {
    id: "attrIncArmorAll",
    name: "+armor all(3)",
    desc: "Armor all [1]+[PP]",
    level: 4,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: 1,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 100,
        },
    ],
};

export const attrArmorAll_2: IHeroSkillSet = {
    id: "attrIncArmorAll",
    name: "+armor all(2)",
    desc: "Armor all [1]+[PP*70%]",
    level: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: 1,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 70,
        },
    ],
    nextLevel: attrArmorAll_3,
};

export const attrArmorAll: IHeroSkillSet = {
    id: "attrIncArmorAll",
    name: "+armor all",
    desc: "Armor all [1]+[PP*50%]",
    level: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: 1,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 50,
        },
    ],
    nextLevel: attrArmorAll_2,
};

//

export const orderSkills: THeroSkills = [attrArmorSelf, attrAttackSelf];

export const orderSkills_2: THeroSkills = [attrArmorAll, attrArmorSelf, attrAttackSelf];
