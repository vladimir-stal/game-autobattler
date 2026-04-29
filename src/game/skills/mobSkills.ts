import {
    AnimationType,
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
    IUnit,
} from "../../types";
import { i18n } from "../consts";
import { wolfUnitSmol } from "../units/wolfsMobUnits";
import { IMAGE_FIREFLY_SELF_POISON, IMAGE_SKILL_BARD_BUFF_1, IMAGE_SKILL_PHYS_ATTACK, IMAGE_SKILL_REGEN, IMAGE_SKILL_TEST } from "../utils/load/skillImagesLoad";

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

export const fireflySelfPoison: IHeroSkillSet = {
    id: "fireflySelfPoison",
    name: "poison self",
    desc: "Apply poison [1] self",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON, EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.STATUS_APPLY,
            isBasicAttack: true,
            status: EStatusType.POISON,
            value: 1,
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Invulnerable",
                type: EBuffType.COSMIC_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 3,
            },
        },
    ],
    isActivateOnStart: true,
    image: IMAGE_FIREFLY_SELF_POISON,
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
    level: 2,
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
    level: 2,
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
    desc: "If frontrow allies are\ndead, increase Hp by [15+75%xPP]\nIf there's one or less\nalive frontrow allies\nget +[3] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 3,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(15, 75, 3),
    //nextLevel: peasantSkill_2,
    image: IMAGE_SKILL_TEST,
};

export const peasantSkill_2: IHeroSkillSet = {
    id: "peasantSkill",
    name: "Last stand",
    desc: "If frontrow allies are\ndead, increase Hp by [12+60%xPP]\nIf there's one or less\nalive frontrow allies\nget +[2] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 2,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(12, 60, 2),
    nextLevel: peasantSkill_3,
    image: IMAGE_SKILL_TEST,
};

export const peasantSkill: IHeroSkillSet = {
    id: "peasantSkill",
    name: "Last stand",
    desc: "If frontrow allies are\ndead, increase Hp by [10+50%xPP]\nIf there's one or less\nalive frontrow allies\nget +[1] attack and regen",
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.WILD],
    level: 1,
    priceLevel: 2,
    type: ESkillSetType.BUFF,
    skills: peasantSkillset(10, 50, 1),
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

// wolf skill
const regularWolfSkillset = (atk: number, bleed: number, ppScale: number):IHeroSkill[] => {
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
    ]
}

export const regularWolfSkill_3: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [2+40%xPP] physical\ndamage and [2] bleed each",
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(2,2,40),
    //nextLevel: regularWolfSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
}

export const regularWolfSkill_2: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [2+30%xPP] physical\ndamage and [1] bleed each",
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(2,1,30),
    nextLevel: regularWolfSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
}

export const regularWolfSkill: IHeroSkillSet = {
    id: "regularWolfSkill",
    name: "Claws and fangs",
    desc: "Attack two random enemies\ndealing [1+20%xPP] physical\ndamage and [1] bleed each",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD, EHeroClass.MASTER],
    type: ESkillSetType.PHYSICAL_ATTACK,
    isBasicAttack: false,
    skills: regularWolfSkillset(1,1,20),
    nextLevel: regularWolfSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
    animationType: AnimationType.UNIT_PHYSICAL_ATTACK_SKILL,
}

// big wolf skill
const bigWolfSummonSkillset = (bonusAtk: number, bonusHp: number, bonusPP: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_SUMMON,
            value: 1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.SUMMON,
            summon: {
                ...wolfUnitSmol, 
                basicMaxHp: wolfUnitSmol.basicMaxHp + bonusHp,
                basicAttack: wolfUnitSmol.basicAttack + bonusAtk,
                basicPhysicalPower: wolfUnitSmol.basicPhysicalPower + bonusPP,
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const bigWolfSummonSkill_3:IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [3,8] wolf that\nuses physical attack skill\nwith bleed status",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(1,4,10),
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
}

export const bigWolfSummonSkill_2:IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [3,6] wolf that\nuses physical attack skill\nwith bleed status",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(1,2,5),
    nextLevel: bigWolfSummonSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
}

export const bigWolfSummonSkill:IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [2,4] wolf that\nuses physical attack skill\nwith bleed status",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(0,0,0),
    nextLevel: bigWolfSummonSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
}