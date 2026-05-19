import { AnimationType, EHeroClass, EHeroSkillType, ESkillCondition, ESkillSetType, ETargetType, IHeroSkill, IHeroSkillSet } from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_SKILL_MOB_LAST_STAND, IMAGE_SKILL_MOB_STRONG_TOGEATHER } from "../../utils/load/skillImagesLoad";

// peasants
const peasantLastStandSkillset = (hpBoost: number, ppScale: number, atkAndRegen: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.NOT_BEFORE_COMBAT,
            }, // Calculate alive allies -1
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "maxHp",
            value: hpBoost,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            ppScale: ppScale,
            animation: AnimationType.NONE,
            // if all allies are dead - gain buff
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "hp",
            value: hpBoost,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            ppScale: ppScale,
            animation: AnimationType.NONE,
            // if all allies are dead - gain buff
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "attack",
            value: atkAndRegen,
            valueType: "number",
            condition: ESkillCondition.ONE_OR_LESS_ALLY_IN_FRONT,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "hpRegen",
            value: atkAndRegen,
            valueType: "number",
            condition: ESkillCondition.ONE_OR_LESS_ALLY_IN_FRONT,
        },
    ];
};

export const peasantLastStandSkill_3: IHeroSkillSet = {
    id: "peasantLastStand",
    name: i18n.skills.mobs.lastStandSkill.name,
    desc: i18n.skills.mobs.lastStandSkill.desc3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantLastStandSkillset(10, 75, 3),
    image: IMAGE_SKILL_MOB_LAST_STAND,
};

export const peasantLastStandSkill_2: IHeroSkillSet = {
    id: "peasantLastStand",
    name: i18n.skills.mobs.lastStandSkill.name,
    desc: i18n.skills.mobs.lastStandSkill.desc2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantLastStandSkillset(7, 60, 2),
    nextLevel: peasantLastStandSkill_3,
    image: IMAGE_SKILL_MOB_LAST_STAND,
};

export const peasantLastStandSkill: IHeroSkillSet = {
    id: "peasantLastStand",
    name: i18n.skills.mobs.lastStandSkill.name,
    desc: i18n.skills.mobs.lastStandSkill.desc1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantLastStandSkillset(5, 50, 1),
    nextLevel: peasantLastStandSkill_2,
    image: IMAGE_SKILL_MOB_LAST_STAND,
};

// stronk peasant
const peasantStronkSkillset = (critAndHpBoost: number, atk: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.NOT_BEFORE_COMBAT,
            }, // Calculate alive allies -1
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.ALLY_BEHIND,
            attribute: "critChance",
            value: critAndHpBoost,
            valueType: "number",
            condition: ESkillCondition.HAS_ALLY_BEHIND,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTACK,
            targetType: ETargetType.FIRST_ENEMY,
            value: atk,
            valueType: "number",
            ppScale: ppScale,
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            animation: AnimationType.UNIT_ATTACK,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.ALLY_IN_FRONT,
            attribute: "maxHp",
            value: critAndHpBoost,
            valueType: "number",
            condition: ESkillCondition.HAS_ALLY_IN_FRONT,
        },
    ];
};

export const peasantsStronkSkill_3: IHeroSkillSet = {
    id: "peasantsStrong",
    //name: "Strong together",
    //desc: "Ally behind get +[5] crit\nAlly in front get +[5] maxHp\n" + "Otherwise strike [7+80%xPP]\nphysical attack.",
    name: i18n.skills.mobs.peasantsStrongTogetherSkill.name,
    desc: i18n.skills.mobs.peasantsStrongTogetherSkill.desc3,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(5, 7, 80),
    image: IMAGE_SKILL_MOB_STRONG_TOGEATHER,
};

export const peasantsStronkSkill_2: IHeroSkillSet = {
    id: "peasantsStrong",
    //name: "Strong together",
    //desc: "Ally behind get +[4] crit\nAlly in front get +[4] maxHp\n" + "Otherwise strike [6+65%xPP]\nphysical attack.",
    name: i18n.skills.mobs.peasantsStrongTogetherSkill.name,
    desc: i18n.skills.mobs.peasantsStrongTogetherSkill.desc2,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(4, 6, 65),
    nextLevel: peasantsStronkSkill_3,
    image: IMAGE_SKILL_MOB_STRONG_TOGEATHER,
};

export const peasantsStronkSkill: IHeroSkillSet = {
    id: "peasantsStrong",
    //name: "Strong together",
    //desc: "Ally behind get +[3] crit\nAlly in front get +[3] maxHp\n" + "Otherwise strike [5+50%xPP]\nphysical attack.",
    name: i18n.skills.mobs.peasantsStrongTogetherSkill.name,
    desc: i18n.skills.mobs.peasantsStrongTogetherSkill.desc1,
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(3, 5, 50),
    nextLevel: peasantsStronkSkill_2,
    image: IMAGE_SKILL_MOB_STRONG_TOGEATHER,
};
