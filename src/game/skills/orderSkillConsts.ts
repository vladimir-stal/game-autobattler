import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../types";
import { i18n } from "../consts";
import { removeDebuff } from "../utils/battleUtils";
import { IMAGE_SKILL_BATTLE, IMAGE_SKILL_KNIGHT, IMAGE_SKILL_SHIELD_BUFF_1, IMAGE_SKILL_SWORD_BUFF, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";
import { shieldAttackSkill } from "./commonSkill3Consts";
import { nextBAArea, removeDebuffSkill, statusesIntoHeal } from "./commonSkillConsts";

// INCREASE ATTR ARMOR SELF SKILL

export const attrArmorSelf_3: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 7,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf_2: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 50,
        },
    ],
    nextLevel: attrArmorSelf_3,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 35,
        },
    ],
    nextLevel: attrArmorSelf_2,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

// INCREASE ATTR ATTACK SELF SKILL

export const attrAttackSelf_3: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_SWORD_BUFF,
};

export const attrAttackSelf_2: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 2,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 50,
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
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 35,
        },
    ],
    nextLevel: attrAttackSelf_2,
    image: IMAGE_SKILL_SWORD_BUFF,
};

// INCREASE ATTR ARMOR ALL SKILL

export const attrArmorAll_3: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all(3)",
    //desc: "Armor all [5 + 65% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
};

export const attrArmorAll_2: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all(2)",
    //desc: "Armor all [5 + 35% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 35,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
    nextLevel: attrArmorAll_3,
};

export const attrArmorAll: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all",
    //desc: "Armor all [5 + 20% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 20,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
    nextLevel: attrArmorAll_2,
};

// // INCREASE ATTR ARMOR SELF (LEVEL 3) SKILL

export const attrArmorBigSelf_3: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 100,
        },
    ],
    //nextLevel: attrArmorBigSelf_2,
    image: IMAGE_SKILL_KNIGHT,
};

export const attrArmorBigSelf_2: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    //name: "Armor more(2)",
    //desc: "Armor self [5]+[PPx70%]",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 70,
        },
    ],
    nextLevel: attrArmorBigSelf_3,
    image: IMAGE_SKILL_KNIGHT,
};

export const attrArmorBigSelf: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    //name: "Armor more",
    //desc: "Armor self [5]+[PPx40%]",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 40,
        },
    ],
    nextLevel: attrArmorBigSelf_2,
    image: IMAGE_SKILL_KNIGHT,
};

export const orderSkills: THeroSkills = [attrArmorSelf, attrAttackSelf];

export const orderSkills_2: THeroSkills = orderSkills.concat([attrArmorAll, removeDebuffSkill, statusesIntoHeal, nextBAArea]);

export const orderSkills_3: THeroSkills = orderSkills_2.concat([attrArmorBigSelf, shieldAttackSkill]);
