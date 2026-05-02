import {
    AnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
} from "../../../types";
import { IMAGE_SKILL_PHYS_ATTACK } from "../../utils/load/skillImagesLoad";

// wolf skill
const regularWolfSkillset = (atk: number, bleed: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: bleed,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: atk,
            targetType: ETargetType.SAME_LAST_TARGET,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: ppScale,
            animation: AnimationType.UNIT_ATTACK,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: bleed,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            value: atk,
            targetType: ETargetType.SAME_LAST_TARGET,
            attackType: EHeroAttackType.PHYSICAL,
            ppScale: ppScale,
            animation: AnimationType.UNIT_ATTACK,
        },
    ];
};

export const regularWolfSkill_3: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [2+40%xPP] physical\ndamage and [2] bleed each",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(2, 2, 40),
    //nextLevel: regularWolfSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};

export const regularWolfSkill_2: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [2+30%xPP] physical\ndamage and [1] bleed each",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(2, 1, 30),
    nextLevel: regularWolfSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};

export const regularWolfSkill: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [1+20%xPP] physical\ndamage and [1] bleed each",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(1, 1, 20),
    nextLevel: regularWolfSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
};
