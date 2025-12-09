import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";

// INCREASE ATTR ARMOR SELF SKILL

export const attrArmorSelf_3: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: "+armor self(3)",
    desc: "Armor self [7]",
    level: 3,
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
};

export const attrArmorSelf_2: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: "+armor self(2)",
    desc: "Armor self [5]",
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
};

export const attrArmorSelf: IHeroSkillSet = {
    id: "attrIncArmorSelf",
    name: "+armor self",
    desc: "Armor self [3]",
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
};

// INCREASE ATTR ATTACK SELF SKILL

export const attrAttackSelf_3: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: "+attack self(3)",
    desc: "Increase self attack [3]",
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
};

export const attrAttackSelf_2: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: "+attack self(2)",
    desc: "Increase self attack [2]",
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
};

export const attrAttackSelf: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: "+attack self",
    desc: "Increase self attack [1]",
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
