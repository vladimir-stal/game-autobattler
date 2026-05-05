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
    IMAGE_SKILL_PHYS_ATTACK,
    IMAGE_SKILL_REGEN,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";

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
    name: "Pocket sand",
    desc: "Blind first enemy for\n[60+1.8xPP] (1 turn) and\nincrease own next base\nattack by [2+PP]",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(60, 180, 2, 100),
    isBasicAttack: false,
    image: IMAGE_SKILL_TEST,
};

export const goblinPocketSand_2: IHeroSkillSet = {
    id: "goblinPocketSand",
    name: "Pocket sand",
    desc: "Blind first enemy for\n[50+1.4xPP] (1 turn) and\nincrease own next base\nattack by [2+75%xPP]",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(50, 140, 2, 75),
    isBasicAttack: false,
    nextLevel: goblinPocketSand_3,
    image: IMAGE_SKILL_TEST,
};

export const goblinPocketSand: IHeroSkillSet = {
    id: "goblinPocketSand",
    name: "Pocket sand",
    desc: "Blind first enemy for\n[40+PP] (1 turn) and\nincrease own next base\nattack by [2+50%xPP]",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.BARD],
    skills: goblinPocketSandSkillset(40, 100, 2, 50),
    isBasicAttack: false,
    nextLevel: goblinPocketSand_2,
    image: IMAGE_SKILL_TEST,
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
    image: IMAGE_SKILL_REGEN,
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
    image: IMAGE_SKILL_REGEN,
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
    image: IMAGE_SKILL_REGEN,
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
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.SHOCK,
            value: stacks,
            targetType: ETargetType.HIGH_SHOCK_ENEMY,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
        },
    ];
};

export const goblinApplyShock_3: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(3),
    image: IMAGE_SKILL_TEST,
};

export const goblinApplyShock_2: IHeroSkillSet = {
    id: "applyShock",
    name: i18n.skills.level2.applyShock.name,
    desc: i18n.skills.level2.applyShock.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(2),
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
    isBasicAttack: false,
    skills: goblinApplyShockSkillset(1),
    image: IMAGE_SKILL_TEST,
    nextLevel: goblinApplyShock_2,
};

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
    name: "Unholy leap",
    desc: "Attacks enemy with lowest\nhealth percent physically\nfor [5+PP] and apply\n[3+60%xPP] poison",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(5, 100, 3, 60),
    image: IMAGE_SKILL_TEST,
    //nextLevel: skeletonUnholyLeap_2
};

export const skeletonUnholyLeap_2: IHeroSkillSet = {
    id: "skeletonUnholyLeap",
    name: "Unholy leap",
    desc: "Attacks enemy with lowest\nhealth percent physically\nfor [4+65%xPP] and apply\n[2+40%xPP] poison",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(4, 65, 2, 40),
    image: IMAGE_SKILL_TEST,
    nextLevel: skeletonUnholyLeap_3,
};

export const skeletonUnholyLeap: IHeroSkillSet = {
    id: "skeletonUnholyLeap",
    name: "Unholy leap",
    desc: "Attacks enemy with lowest\nhealth percent physically\nfor [3+35%xPP] and apply\n[1+20%xPP] poison",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.WARRIOR],
    isBasicAttack: false,
    type: ESkillSetType.PHYSICAL_ATTACK,
    skills: skeletonUnholyLeapSkillset(3, 35, 1, 20),
    image: IMAGE_SKILL_TEST,
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
    id: "attrIncArmorSelfAndLow",
    name: "+armor all",
    desc: "Armor Self and low Hp ally\nfor [8+PP]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(8, 100),
    image: IMAGE_SKILL_TEST,
};

export const skeletonArmorSelfAndLow_2: IHeroSkillSet = {
    id: "attrIncArmorSelfAndLow",
    name: "+armor all",
    desc: "Armor Self and low Hp ally\nfor [6+50%xPP]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(6, 50),
    image: IMAGE_SKILL_TEST,
    nextLevel: skeletonArmorSelfAndLow_3,
};

export const skeletonArmorSelfAndLow: IHeroSkillSet = {
    id: "attrIncArmorSelfAndLow",
    name: "+armor all",
    desc: "Armor Self and low Hp ally\nfor [4+20%xPP]",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    skills: skeletonArmorSelfAndLowSkillset(4, 20),
    image: IMAGE_SKILL_TEST,
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
    name: "Poisoned flames",
    desc: "Attack random enemy with\nmagic [10+MP] and apply\n[4] poison and burn",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(10, 100, 4),
    image: IMAGE_SKILL_TEST,
};

export const skeletonPoisonedFlames_2: IHeroSkillSet = {
    id: "poisonedFlames",
    name: "Poisoned flames",
    desc: "Attack random enemy with\nmagic [8+65%xMP] and apply\n[3] poison and burn",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(8, 65, 3),
    image: IMAGE_SKILL_TEST,
    nextLevel: skeletonPoisonedFlames_3,
};

export const skeletonPoisonedFlames: IHeroSkillSet = {
    id: "poisonedFlames",
    name: "Poisoned flames",
    desc: "Attack random enemy with\nmagic [6+35%xMP] and apply\n[2] poison and burn",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.DARK, EHeroClass.MAGIC],
    type: ESkillSetType.MAGIC_ATTACK,
    isBasicAttack: false,
    skills: skeletonPoisonedFlamesSkillset(6, 35, 2),
    image: IMAGE_SKILL_TEST,
    nextLevel: skeletonPoisonedFlames_2,
};

export const infernoFlyPassive: IPassiveSkill = {
    desc: "Start with 1 poison & 3 cosmic shield",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        valueType: "number",
        cannotBeTargeted: true,
        isHidden: true,
        appTrigger: {
            limitedRepeats: true,
            skillId: "Unstable firefly",
            type: EAppTriggerType.PRE_BATTLE,
            skill: [
                {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.POISON,
                    value: 1,
                    targetType: ETargetType.SELF,
                },
                {
                    type: EHeroSkillType.BUFF,
                    buff: {
                        name: "Invulnerable",
                        type: EBuffType.COSMIC_SHIELD,
                        targetType: ETargetType.SELF,
                        timeType: EBuffTimeType.DUEL,
                        value: 3,
                        cannotBeTargeted: true,
                    },
                },
            ],
        },
    },
};

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
    name: "High morale",
    desc: "Increase next basic attack\nof all allies and armor\nby [3]",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(3, 3),
    image: IMAGE_SKILL_BARD_BUFF_1,
};

export const goldGoblinBuff_2: IHeroSkillSet = {
    id: "goldGoblinBuff",
    name: "High morale",
    desc: "Increase next basic attack\nof all allies and armor\nby [2]",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(2, 2),
    image: IMAGE_SKILL_BARD_BUFF_1,
    nextLevel: goldGoblinBuff_3,
};

export const goldGoblinBuff: IHeroSkillSet = {
    id: "goldGoblinBuff",
    name: "High morale",
    desc: "Increase next basic attack\nof all allies and armor\nby [1]",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.BARD, EHeroClass.ORDER],
    isBasicAttack: true,
    isActivateOnStart: true,
    skills: goldGoblinBuffSkillset(1, 1),
    image: IMAGE_SKILL_BARD_BUFF_1,
    nextLevel: goldGoblinBuff_2,
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

// peasants
const peasantSkillset = (hpBoost: number, ppScale: number, atkAndRegen: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.IN_FRONT_ROW,
            }, // Calculate alive targets in front row
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.IN_BACK_ROW,
            childSkill: {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                targetType: ETargetType.SELF,
                attribute: "maxHp",
                value: hpBoost,
                valueType: "number",
                condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
                ppScale: ppScale,
                animation: AnimationType.NONE,
            }, // if in backrow position, but all frot row allies are dead - gain buff
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            value: 50,
            valueType: "percent",
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
            // divide number of frontrow allies by 2
            // if result is 0 then only one front row ally present (or zero)
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "attack",
            value: atkAndRegen,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "hpRegen",
            value: atkAndRegen,
            valueType: "number",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
        },
    ];
};
export const peasantSkill_3: IHeroSkillSet = {
    id: "peasantSkill",
    name: "Last stand",
    desc: "If frontrow allies are\ndead, increase Hp by [10+75%xPP]\nIf there's one or less\nalive frontrow allies\nget +[3] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(10, 75, 3),
    //nextLevel: peasantSkill_2,
    image: IMAGE_SKILL_TEST,
};

export const peasantSkill_2: IHeroSkillSet = {
    id: "peasantSkill",
    name: "Last stand",
    desc: "If frontrow allies are\ndead, increase Hp by [7+60%xPP]\nIf there's one or less\nalive frontrow allies\nget +[2] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(7, 60, 2),
    nextLevel: peasantSkill_3,
    image: IMAGE_SKILL_TEST,
};

export const peasantSkill: IHeroSkillSet = {
    id: "peasantSkill",
    name: "Last stand",
    desc: "If frontrow allies are\ndead, increase Hp by [5+50%xPP]\nIf there's one or less\nalive frontrow allies\nget +[1] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(5, 50, 1),
    nextLevel: peasantSkill_2,
    image: IMAGE_SKILL_TEST,
};

// stronk peasant
const peasantStronkSkillset = (critAndHpBoost: number, atk: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.IN_BACK_ROW,
            }, // Calculate alive targets in front row
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.IN_FRONT_ROW,
            childSkill: {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                targetType: ETargetType.ALLY_BEHIND,
                attribute: "critChance",
                value: critAndHpBoost,
                valueType: "number",
                condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
                animation: AnimationType.NONE,
            }, // if in frontrow position, and have backrow allies - gain buff
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.IN_FRONT_ROW,
            childSkill: {
                type: EHeroSkillType.ATTACK,
                targetType: ETargetType.FIRST_ENEMY,
                value: atk,
                valueType: "number",
                ppScale: ppScale,
                condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
                animation: AnimationType.UNIT_ATTACK,
            }, // if in frontrow position, and have no backrow allies - do attack
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            value: 50,
            valueType: "percent",
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_NOT_ZERO,
            // divide number of backrow allies by 2
            // if result is 0 then only one backrow ally present (or zero)
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            animation: AnimationType.NONE,
            condition: ESkillCondition.IN_BACK_ROW,
            childSkill: {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                targetType: ETargetType.ALLY_IN_FRONT,
                attribute: "maxHp",
                value: critAndHpBoost,
                valueType: "number",
                condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO,
            }, // if in backrow position, and is only backrow unit
        },
    ];
};

export const peasantsStronkSkill_3: IHeroSkillSet = {
    id: "peasantsStronk",
    name: "Strong together",
    desc:
        "While in frontrow and\nbackrow allies are alive\n" +
        "ally behind crit +[5]\nOtherwise strike [7+80%xPP]\n" +
        "physical attack. While only\none in backrow, ally in front\n" +
        "get +[5] Max Hp",
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 3,
    priceLevel: 3,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(5, 7, 80),
    image: IMAGE_SKILL_TEST,
};

export const peasantsStronkSkill_2: IHeroSkillSet = {
    id: "peasantsStronk",
    name: "Strong together",
    desc:
        "While in frontrow and\nbackrow allies are alive\n" +
        "ally behind crit +[4]\nOtherwise strike [6+65%xPP]\n" +
        "physical attack. While only\none in backrow, ally in front\n" +
        "get +[4] Max Hp",
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 2,
    priceLevel: 3,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(4, 6, 65),
    nextLevel: peasantsStronkSkill_3,
    image: IMAGE_SKILL_TEST,
};

export const peasantsStronkSkill: IHeroSkillSet = {
    id: "peasantsStronk",
    name: "Strong together",
    desc:
        "While in frontrow and\nbackrow allies are alive\n" +
        "ally behind crit +[3]\nOtherwise strike [5+50%xPP]\n" +
        "physical attack. While only\none in backrow, ally in front\n" +
        "get +[3] Max Hp",
    heroClasses: [EHeroClass.ORDER, EHeroClass.WILD],
    level: 1,
    priceLevel: 3,
    type: ESkillSetType.BUFF,
    skills: peasantStronkSkillset(3, 5, 50),
    nextLevel: peasantsStronkSkill_2,
    image: IMAGE_SKILL_TEST,
};

// regular Firefly
//   ~ summon
// debuff blind (20) until get hit
const fireflyConfusingMistSkillset = (blind: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Mist",
                targetType: ETargetType.ALL_ENEMIES,
                timeType: EBuffTimeType.TILL_GOT_HIT,
                type: EDebuffType.BLIND,
                value: blind, // ~ 20, 30, 40 (it stacks)
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.REPEATING_SKILL,
            animation: AnimationType.NONE,
            value: 0,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.BUFF,
                animation: AnimationType.NONE,
                buff: {
                    name: "Shock BA",
                    targetType: ETargetType.RANDOM_ALLY,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                    type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                    statusType: EStatusType.SHOCK,
                    value: 1,
                    valueType: "number",
                },
            },
            mpScale: mpScale,
        },
    ];
};

export const fireflyConfusingMistSkill_3: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    name: "Confusing mist",
    desc: "Blind [35] all enemies\nuntil they take attack\nRandom [35%xMP] allies have\ntheir attacks apply 1 shock",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(35, 35),
    //nextLevel: fireflyConfusingMistSkill_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyConfusingMistSkill_2: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    name: "Confusing mist",
    desc: "Blind [25] all enemies\nuntil they take attack\nRandom [25%xMP] allies have\ntheir attacks apply 1 shock",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(25, 25),
    nextLevel: fireflyConfusingMistSkill_3,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyConfusingMistSkill: IHeroSkillSet = {
    id: "fireflyConfusingMist",
    name: "Confusing mist",
    desc: "Blind [20] all enemies\nuntil they take attack\nRandom [20%xMP] allies have\ntheir attacks apply 1 shock",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.BARD],
    skills: fireflyConfusingMistSkillset(20, 20),
    nextLevel: fireflyConfusingMistSkill_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

// InfernoFly
//   ~ summon, magic
//
const fireflyUnfairExchangeSkillset = (hpPercent: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -100,
            valueFrom: "hp",
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.SWAP_HP,
            targetType: ETargetType.HIGH_PERCENT_ENEMY,
            valueType: "percent",
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            attribute: "hp",
            animation: AnimationType.NONE,
        }, // customNumber is (NewHp - OldHp)
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: 0,
            animation: AnimationType.NONE,
            condition: ESkillCondition.CUSTOM_NUMBER_IS_NEGATIVE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            targetType: ETargetType.SELF,
            attribute: "hp",
            value: 50,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Next Ba+",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.TILL_NEXT_BA,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "attack",
                value: hpPercent,
                valueType: "percent",
                valueFrom: "customNumber",
                mpScale: hpPercent,
            },
        },
    ];
};

export const fireflyUnfairExchange_3: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [60%xMP] +[60%] of\nrestored Hp as buff to\nnext basic attack",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(60),
    //nextLevel: fireflyUnfairExchange_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyUnfairExchange_2: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [45%xMP] +[45%] of\nrestored Hp as buff to\nnext basic attack",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(45),
    nextLevel: fireflyUnfairExchange_3,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const fireflyUnfairExchange: IHeroSkillSet = {
    id: "fireflyUnfairExchange",
    name: "Unfair exchange",
    desc: "Swap Hp in percentage\nwith highest Hp% enemy,\nbut get only half Hp restored\nand [30%xMP] +[30%] of\nrestored Hp as buff to\nnext basic attack",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.DARK],
    isBasicAttack: false,
    skills: fireflyUnfairExchangeSkillset(30),
    nextLevel: fireflyUnfairExchange_2,
    image: IMAGE_FIREFLY_SELF_POISON, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

// Spirit warrior (levels 1, 3, 5)
//  ~ summon, warrior
//
const spiritTeamFlurrySkillset = (ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -1,
            valueType: "number",
            animation: AnimationType.NONE,
        }, // start with customNumber = -1
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.NOT_BEFORE_COMBAT,
            },
            animation: AnimationType.NONE,
        }, // calc number of alive allies
        // customNumber = numberOfAllies - 1;
        // condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE ~ 2+ allies alive
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: 100,
            valueFrom: "customNumber",
            valueType: "percent",
            ppScale: ppScale,
            childSkill: {
                type: EHeroSkillType.ATTACK,
                attackType: EHeroAttackType.PHYSICAL,
                targetType: ETargetType.FIRST_ENEMY,
                value: 1,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            targetType: ETargetType.FIRST_TWO_ENEMIES,
            value: 100,
            valueFrom: "attack",
            valueType: "percent",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO, // no other allies alive
        },
    ];
};

export const spiritTeamFlurry_3: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    name: "Pointy sticks",
    desc: "Unleash [65%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(65),
    //nextLevel: spiritTeamFlurry_2,
    image: IMAGE_SKILL_DOUBLE_SWORD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamFlurry_2: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    name: "Pointy sticks",
    desc: "Unleash [50%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(50),
    nextLevel: spiritTeamFlurry_3,
    image: IMAGE_SKILL_DOUBLE_SWORD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamFlurry: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    name: "Pointy sticks",
    desc: "Unleash [35%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(35),
    nextLevel: spiritTeamFlurry_2,
    image: IMAGE_SKILL_DOUBLE_SWORD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

const spiritTeamRevengeSkillset = (ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Revenge",
                timeType: EBuffTimeType.TILL_NEXT_BA,
                targetType: ETargetType.SELF,
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Revenge poke",
                    type: EAppTriggerType.BASIC_ATTACK,
                    targetCheck: ETargetType.ALL_ENEMIES,
                    skill: [
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "Aim",
                                targetType: ETargetType.SELF,
                                timeType: EBuffTimeType.TILL_NEXT_BA,
                                type: EBuffType.CHANGE_TARGET_TYPE,
                                changeTargetTypeTo: ETargetType.BY_UNIT_ID, // current acting unit id
                                isHidden: true,
                                value: 1,
                            },
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            targetType: ETargetType.BY_UNIT_ID,
                            targetUnitId: "[ActingUnit]",
                            status: EStatusType.BLEED,
                            value: 1,
                            valueType: "number",
                            ppScale: ppScale,
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                            targetType: ETargetType.SELF,
                            value: 1, // not used
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const spiritTeamRevenge_3: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    name: "Revenge poke",
    desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+PP] bleed",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(100),
    //nextLevel: spiritTeamRevenge_2,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamRevenge_2: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    name: "Revenge poke",
    desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+65%xPP] bleed",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(65),
    nextLevel: spiritTeamRevenge_3,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamRevenge: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    name: "Revenge poke",
    desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+35%xPP] bleed",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(35),
    nextLevel: spiritTeamRevenge_2,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

// Shield warrior
const spiritShieldRadiateSkillset = (armor: number, ppScale: number, radiateStacks: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "armor",
            ppScale: ppScale,
            value: armor,
            valueType: "number",
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                targetType: ETargetType.SELF,
                type: EBuffType.BATTLE_TRIGGER,
                name: "Radiate",
                timeType: EBuffTimeType.TILL_GOT_HIT,
                value: 1,
                appTrigger: {
                    type: EAppTriggerType.TAKE_ATTACK,
                    limitedRepeats: true,
                    skillId: "Radiate retaliate",
                    skill: [
                        {
                            type: EHeroSkillType.DEBUFF,
                            debuff: {
                                name: "Guilty",
                                targetType: ETargetType.BY_RELEVANT_ID, // attacker
                                timeType: EBuffTimeType.DURATION,
                                type: EDebuffType.BATTLE_TRIGGER,
                                value: 3,
                                appTrigger: {
                                    limitedRepeats: true,
                                    skillId: "Guilty amp",
                                    type: EAppTriggerType.TURN_START,
                                    targetCheck: ETargetType.ALL_ALLIES,
                                    skill: [
                                        {
                                            type: EHeroSkillType.STATUS_APPLY,
                                            targetType: ETargetType.ANCHOR_TARGET,
                                            status: EStatusType.RADIATE,
                                            value: radiateStacks,
                                            valueType: "number",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "Shiny",
                                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                                targetType: ETargetType.ALL_ALLIES,
                                timeType: EBuffTimeType.DURATION,
                                duration: 2,
                                value: 1,
                                valueType: "number",
                                statusType: EStatusType.RADIATE,
                            },
                        },
                    ],
                },
            },
        },
    ];
};

export const spiritShieldRadiate_3: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [5+65%xPP] armor\nAnd next time get hit by\nbasic attack, buff allies'\nattacks to apply 1 Radiate\nAnd attacker gets [3]\nRadiate stacks each turn",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(5, 65, 3),
    //nextLevel: spiritShieldRadiate_2,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritShieldRadiate_2: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [4+50%xPP] armor\nAnd next time get hit by\nbasic attack, buff allies'\nattacks to apply 1 Radiate\nAnd attacker gets [2]\nRadiate stacks each turn",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(4, 50, 2),
    nextLevel: spiritShieldRadiate_3,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritShieldRadiate: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [3+35%xPP] armor\nAnd next time get hit by\nbasic attack, buff allies'\nattacks to apply 1 Radiate\nAnd attacker gets [1]\nRadiate stacks each turn",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(3, 35, 1),
    nextLevel: spiritShieldRadiate_2,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritWarriorPassive: IPassiveSkill = {
    desc: "Gain 3 armor per turn, if have less armor than 35% attack +PP",
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        isHidden: true,
        cannotBeTargeted: true,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Spirit armor",
            type: EAppTriggerType.TURN_START,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    attribute: "physicalPower",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    value: 35,
                    valueType: "percent",
                    valueFrom: "attack",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    value: -100,
                    valueType: "percent",
                    valueFrom: "armor",
                    animation: AnimationType.NONE,
                }, // calc (Attack - Armor)
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.ANCHOR_TARGET,
                    attribute: "armor",
                    value: 3,
                    valueType: "number",
                    animation: AnimationType.NONE,
                },
            ],
        },
    },
};
