import {
    AnimationType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
} from "../../../types";
import { i18n } from "../../consts";
import {
    IMAGE_SKILL_MOB_GOBLIN_REGEN,
    IMAGE_SKILL_MOB_GOBLIN_SAND,
    IMAGE_SKILL_MOB_GOBLIN_SHOCK,
    IMAGE_SKILL_MOB_GOBLIN_SONG,
} from "../../utils/load/skillImagesLoad";

// weak goblin
const goblinPocketSandSkillset = (blind: number, blindScale: number, atkboost: number, atkScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Sand",
                targetType: ETargetType.FIRST_ENEMY,
                timeType: EBuffTimeType.DURATION,
                duration: 1,
                type: EDebuffType.BLIND,
                value: blind,
                valueType: "number",
                ppScale: blindScale,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Regroup",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: atkboost,
                valueType: "number",
                ppScale: atkScale,
            },
        },
    ];
};
export const goblinPocketSand_3: IHeroSkillSet = {
    id: "goblinPocketSand",
    //name: "Pocket sand",
    //desc: "Blind first enemy for\n[60+1.8xPP] (1 turn) and\nincrease own next basic\nattack by [2+PP]",
    name: i18n.skills.mobs.goblinPocketSand.name,
    desc: i18n.skills.mobs.goblinPocketSand.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(60, 180, 2, 100),
    isBasicAttack: false,
    image: IMAGE_SKILL_MOB_GOBLIN_SAND,
};

export const goblinPocketSand_2: IHeroSkillSet = {
    id: "goblinPocketSand",
    //name: "Pocket sand",
    //desc: "Blind first enemy for\n[50+1.4xPP] (1 turn) and\nincrease own next basic\nattack by [2+75%xPP]",
    name: i18n.skills.mobs.goblinPocketSand.name,
    desc: i18n.skills.mobs.goblinPocketSand.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(50, 140, 2, 75),
    isBasicAttack: false,
    nextLevel: goblinPocketSand_3,
    image: IMAGE_SKILL_MOB_GOBLIN_SAND,
};

export const goblinPocketSand: IHeroSkillSet = {
    id: "goblinPocketSand",
    //name: "Pocket sand",
    //desc: "Blind first enemy for\n[40+PP] (1 turn) and\nincrease own next basic\nattack by [2+50%xPP]",
    name: i18n.skills.mobs.goblinPocketSand.name,
    desc: i18n.skills.mobs.goblinPocketSand.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(40, 100, 2, 50),
    isBasicAttack: false,
    nextLevel: goblinPocketSand_2,
    image: IMAGE_SKILL_MOB_GOBLIN_SAND,
};

// GOBLIN SHAMAN /////////////////////////////////////////////// GOBLIN SHAMAN

export const goblinShamanHpRegIncr_3: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name,
    desc: i18n.skills.mobs.goblinShamanHpRegIncr.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    isActivateOnStart: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 3,
            valueType: "number",
            attribute: "hpRegen",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    image: IMAGE_SKILL_MOB_GOBLIN_REGEN,
};

export const goblinShamanHpRegIncr_2: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name,
    desc: i18n.skills.mobs.goblinShamanHpRegIncr.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    isActivateOnStart: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 2,
            valueType: "number",
            attribute: "hpRegen",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    image: IMAGE_SKILL_MOB_GOBLIN_REGEN,
    nextLevel: goblinShamanHpRegIncr_3,
};

export const goblinShamanHpRegIncr: IHeroSkillSet = {
    id: "goblinShamanHpRegIncr",
    name: i18n.skills.mobs.goblinShamanHpRegIncr.name,
    desc: i18n.skills.mobs.goblinShamanHpRegIncr.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: 2,
            valueType: "number",
            attribute: "hpRegen",
            targetType: ETargetType.ALL_ALLIES,
        },
    ],
    nextLevel: goblinShamanHpRegIncr_2,
    image: IMAGE_SKILL_MOB_GOBLIN_REGEN,
};

// GOBLIN APPLY SHOCK /////////////////////////////////////////////// GOBLIN APPLY SHOCK

const goblinApplyShockSkillset = (stacks: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            status: EStatusType.SHOCK,
            targetType: ETargetType.ALL_ENEMIES,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: stacks,
            targetType: ETargetType.RANDOM_ENEMY,
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: stacks,
            targetType: ETargetType.HIGH_SHOCK_ENEMY,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
            animation: AnimationType.NONE,
        },
    ];
};

export const goblinApplyShock_3: IHeroSkillSet = {
    id: "goblinApplyShock",
    name: i18n.skills.mobs.goblinApplyShock.name,
    desc: i18n.skills.mobs.goblinApplyShock.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(3),
    image: IMAGE_SKILL_MOB_GOBLIN_SHOCK,
    //
    animationType: AnimationType.MAGIC_ATTACK,
};

export const goblinApplyShock_2: IHeroSkillSet = {
    id: "goblinApplyShock",
    name: i18n.skills.mobs.goblinApplyShock.name,
    desc: i18n.skills.mobs.goblinApplyShock.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(2),
    image: IMAGE_SKILL_MOB_GOBLIN_SHOCK,
    nextLevel: goblinApplyShock_3,
    //
    animationType: AnimationType.MAGIC_ATTACK,
};

export const goblinApplyShock: IHeroSkillSet = {
    id: "goblinApplyShock",
    name: i18n.skills.mobs.goblinApplyShock.name,
    desc: i18n.skills.mobs.goblinApplyShock.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(1),
    image: IMAGE_SKILL_MOB_GOBLIN_SHOCK,
    nextLevel: goblinApplyShock_2,
    //
    animationType: AnimationType.MAGIC_ATTACK,
};

const goldGoblinBuffSkillset = (atkBuff: number, armorBuff: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "next ba+",
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: atkBuff,
                valueType: "number",
                targetType: ETargetType.ALL_ALLIES,
                timeType: EBuffTimeType.TILL_NEXT_BA,
            },
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: armorBuff,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            animation: AnimationType.NONE,
        },
    ];
};

export const goldGoblinBuff_3: IHeroSkillSet = {
    id: "goldGoblinBuff",
    //name: "High morale",
    //desc: "Increase next basic attack\nof all allies and armor\nby [3]",
    name: i18n.skills.mobs.goldGoblinBuff.name,
    desc: i18n.skills.mobs.goldGoblinBuff.desc2,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(3, 3),
    image: IMAGE_SKILL_MOB_GOBLIN_SONG,
};

export const goldGoblinBuff_2: IHeroSkillSet = {
    id: "goldGoblinBuff",
    //name: "High morale",
    //desc: "Increase next basic attack\nof all allies and armor\nby [2]",
    name: i18n.skills.mobs.goldGoblinBuff.name,
    desc: i18n.skills.mobs.goldGoblinBuff.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(2, 2),
    image: IMAGE_SKILL_MOB_GOBLIN_SONG,
    nextLevel: goldGoblinBuff_3,
};

export const goldGoblinBuff: IHeroSkillSet = {
    id: "goldGoblinBuff",
    //name: "High morale",
    //desc: "Increase next basic attack\nof all allies and armor\nby [1]",
    name: i18n.skills.mobs.goldGoblinBuff.name,
    desc: i18n.skills.mobs.goldGoblinBuff.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(1, 1),
    image: IMAGE_SKILL_MOB_GOBLIN_SONG,
    nextLevel: goldGoblinBuff_2,
};
