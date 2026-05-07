import { AnimationType, EHeroAttackType, EHeroClass, EHeroSkillType, ESkillSetType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet } from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_SKILL_MOB_POISON_BLADE, IMAGE_SKILL_MOB_POISON_FLAME, IMAGE_SKILL_MOB_SKELETON_SHIELD } from "../../utils/load/skillImagesLoad";

// Weak skeleton skill
const skeletonUnholyLeapSkillset = (atk: number, atkScale: number, poison: number, poisonScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            value: atk,
            valueType: "number",
            ppScale: atkScale,
            targetType: ETargetType.LOW_PERCENT_ENEMY,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.POISON,
            targetType: ETargetType.SAME_LAST_TARGET,
            value: poison,
            valueType: "number",
            ppScale: poisonScale,
            animation: AnimationType.NONE,
        },
    ];
};

export const skeletonUnholyLeap_3: IHeroSkillSet = {
    id: "skeletonUnholyLeap",
    //name: "Unholy leap",
    //desc: "Attacks enemy with lowest\nhealth percent physically\nfor [5+PP] and apply\n[3+60%xPP] poison",
    name: i18n.skills.mobs.skeletonUnholyLeap.name,
    desc: i18n.skills.mobs.skeletonUnholyLeap.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(5, 100, 3, 60),
    image: IMAGE_SKILL_MOB_POISON_BLADE,
    //nextLevel: skeletonUnholyLeap_2
};

export const skeletonUnholyLeap_2: IHeroSkillSet = {
    id: "skeletonUnholyLeap",
    //name: "Unholy leap",
    //desc: "Attacks enemy with lowest\nhealth percent physically\nfor [4+65%xPP] and apply\n[2+40%xPP] poison",
    name: i18n.skills.mobs.skeletonUnholyLeap.name,
    desc: i18n.skills.mobs.skeletonUnholyLeap.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(4, 65, 2, 40),
    image: IMAGE_SKILL_MOB_POISON_BLADE,
    nextLevel: skeletonUnholyLeap_3,
};

export const skeletonUnholyLeap: IHeroSkillSet = {
    id: "skeletonUnholyLeap",
    //name: "Unholy leap",
    //desc: "Attacks enemy with lowest\nhealth percent physically\nfor [3+35%xPP] and apply\n[1+20%xPP] poison",
    name: i18n.skills.mobs.skeletonUnholyLeap.name,
    desc: i18n.skills.mobs.skeletonUnholyLeap.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(3, 35, 1, 20),
    image: IMAGE_SKILL_MOB_POISON_BLADE,
    nextLevel: skeletonUnholyLeap_2,
};

// Skeleton warrior skill
const skeletonArmorSelfAndLowSkillset = (base: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "armor",
            value: base,
            valueType: "number",
            targetType: ETargetType.LOW_PERCENT_ALLY,
            ppScale: ppScale,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: base,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: ppScale,
        },
    ];
};

export const skeletonArmorSelfAndLow_3: IHeroSkillSet = {
    id: "skeletonArmorSelfAndLow",
    //name: "+armor all",
    //desc: "Armor Self and low Hp ally\nfor [8+PP]",
    name: i18n.skills.mobs.skeletonArmorSelfAndLow.name,
    desc: i18n.skills.mobs.skeletonArmorSelfAndLow.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(8, 100),
    image: IMAGE_SKILL_MOB_SKELETON_SHIELD,
};

export const skeletonArmorSelfAndLow_2: IHeroSkillSet = {
    id: "skeletonArmorSelfAndLow",
    //name: "+armor all",
    //desc: "Armor Self and low Hp ally\nfor [6+50%xPP]",
    name: i18n.skills.mobs.skeletonArmorSelfAndLow.name,
    desc: i18n.skills.mobs.skeletonArmorSelfAndLow.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(6, 50),
    image: IMAGE_SKILL_MOB_SKELETON_SHIELD,
    nextLevel: skeletonArmorSelfAndLow_3,
};

export const skeletonArmorSelfAndLow: IHeroSkillSet = {
    id: "skeletonArmorSelfAndLow",
    //name: "+armor all",
    //desc: "Armor Self and low Hp ally\nfor [4+20%xPP]",
    name: i18n.skills.mobs.skeletonArmorSelfAndLow.name,
    desc: i18n.skills.mobs.skeletonArmorSelfAndLow.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(4, 20),
    image: IMAGE_SKILL_MOB_SKELETON_SHIELD,
    nextLevel: skeletonArmorSelfAndLow_2,
};

// skeleton mage
const skeletonPoisonedFlamesSkillset = (atk: number, mpScale: number, stacks: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.MAGIC,
            value: atk,
            valueType: "number",
            targetType: ETargetType.RANDOM_ENEMY,
            mpScale: mpScale,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.POISON,
            value: stacks,
            valueType: "number",
            targetType: ETargetType.SAME_LAST_TARGET,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: stacks,
            valueType: "number",
            targetType: ETargetType.SAME_LAST_TARGET,
            animation: AnimationType.NONE,
        },
    ];
};

export const skeletonPoisonedFlames_3: IHeroSkillSet = {
    id: "poisonedFlames",
    //name: "Poisoned flames",
    //desc: "Attack random enemy with\nmagic [10+MP] and apply\n[4] poison and burn",
    name: i18n.skills.mobs.poisonedFlames.name,
    desc: i18n.skills.mobs.poisonedFlames.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(10, 100, 4),
    image: IMAGE_SKILL_MOB_POISON_FLAME,
};

export const skeletonPoisonedFlames_2: IHeroSkillSet = {
    id: "poisonedFlames",
    //name: "Poisoned flames",
    //desc: "Attack random enemy with\nmagic [8+65%xMP] and apply\n[3] poison and burn",
    name: i18n.skills.mobs.poisonedFlames.name,
    desc: i18n.skills.mobs.poisonedFlames.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(8, 65, 3),
    image: IMAGE_SKILL_MOB_POISON_FLAME,
    nextLevel: skeletonPoisonedFlames_3,
};

export const skeletonPoisonedFlames: IHeroSkillSet = {
    id: "poisonedFlames",
    //name: "Poisoned flames",
    //desc: "Attack random enemy with\nmagic [6+35%xMP] and apply\n[2] poison and burn",
    name: i18n.skills.mobs.poisonedFlames.name,
    desc: i18n.skills.mobs.poisonedFlames.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(6, 35, 2),
    image: IMAGE_SKILL_MOB_POISON_FLAME,
    nextLevel: skeletonPoisonedFlames_2,
};
