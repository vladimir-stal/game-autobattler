import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EEffectAnimationType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ESkillSetType,
    EStatusType,
    ETargetType,
    EUnitType,
    IHeroSkill,
    IHeroSkillSet,
    IUnit,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import {
    IMAGE_DRAFT_ASONE,
    IMAGE_SKILL_SUMMON_FIREFLY,
    IMAGE_SKILL_SUMMON_SHIELD,
    IMAGE_SKILL_SUMMON_SPIRIT,
    IMAGE_SKILL_SUMMON_SWORD,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";
import { skillsetSummon } from "../utils/skillUtils2";
import { buffSummonCritSkill } from "./commonSkill3Consts";
import { radiantWallSkill, venomHeartSkill } from "./commonSkillConsts";

// SUMMON UNITS

// FIREFLY SUMMON UNIT

export const fireflySummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLYSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const fireflySummon_2: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLYSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const fireflySummon_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 8,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.FIREFLY,
    id: "FIREFLYSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

// WARRIOR SUMMON UNIT

export const warriorSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 3,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const warriorSummon_2: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 2,
    exp: 0,
};

export const warriorSummon_3: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 6,
    basicAttackTimes: 1,
    basicMaxHp: 10,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WARRIORSUMMON,
    id: "WARRIORSUMMON",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
};

// FAMILIAR SUMMON UNIT
export const familiarSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Familiar",
    id: "FIREFLYSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

// FIREFLY SUMMON SKILL

export const fireflySummonSkill_3: IHeroSkillSet = {
    id: "fireflySummonSkill",
    //name: "Firefly Summon(3)",
    //desc: "Summon magic creature [6,6]",
    name: i18n.skills.basic.fireflySummon.name,
    desc: i18n.skills.basic.fireflySummon.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(fireflySummon_3, 4, 35, 35, 0, 1), // summon 8/1,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    //animationType: AnimationType.SUMMON_SPELL,
};

export const fireflySummonSkill_2: IHeroSkillSet = {
    id: "fireflySummonSkill",
    //name: "Firefly Summon(2)",
    //desc: "Summon magic creature [3,4]",
    name: i18n.skills.basic.fireflySummon.name,
    desc: i18n.skills.basic.fireflySummon.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(fireflySummon_2, 2, 35, 35, 0, 1), // summon 5/1,
    nextLevel: fireflySummonSkill_3,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    //animationType: AnimationType.SUMMON_SPELL,
};

export const fireflySummonSkill: IHeroSkillSet = {
    id: "fireflySummonSkill",
    //name: "Firefly Summon",
    // desc: "Summon magic creature [2,3]",
    name: i18n.skills.basic.fireflySummon.name,
    desc: i18n.skills.basic.fireflySummon.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(fireflySummon, 1, 35, 35, 0, 1), // summon 3/1,
    nextLevel: fireflySummonSkill_2,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    //animationType: AnimationType.SUMMON_SPELL,
};

// WAAAaahRIOR SUMMON SKILL

export const warriorSummonSkill_3: IHeroSkillSet = {
    id: "warriorSummonSkill",
    //name: "Spark Summon(3)",
    //desc: "Summon magic spark [7,1]",
    name: i18n.skills.basic.prititWarriorSummon.name,
    desc: i18n.skills.basic.prititWarriorSummon.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(warriorSummon_3, 2, 35, 20, 3, 3), // summon 6/10
    image: IMAGE_SKILL_SUMMON_SPIRIT,
    //animationType: AnimationType.SUMMON_SPELL,
};

export const warriorSummonSkill_2: IHeroSkillSet = {
    id: "warriorSummonSkill",
    //name: "Spark Summon(2)",
    //desc: "Summon magic spark [4,1]",
    name: i18n.skills.basic.prititWarriorSummon.name,
    desc: i18n.skills.basic.prititWarriorSummon.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(warriorSummon_2, 1, 35, 20, 2, 2), // summon 3/5
    nextLevel: warriorSummonSkill_3,
    image: IMAGE_SKILL_SUMMON_SPIRIT,
    //animationType: AnimationType.SUMMON_SPELL,
};

export const warriorSummonSkill: IHeroSkillSet = {
    id: "warriorSummonSkill",
    name: i18n.skills.basic.prititWarriorSummon.name,
    desc: i18n.skills.basic.prititWarriorSummon.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(warriorSummon, 1, 35, 20, 1, 1), // summon 2/3
    nextLevel: warriorSummonSkill_2,
    image: IMAGE_SKILL_SUMMON_SPIRIT,
    //animationType: AnimationType.SUMMON_SPELL,
};

// INCREASE CURRENT SUMMON BA SKILL
const incrSummonBaSkillset = (atk: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: atk,
            valueType: "number",
            mpScale: mpScale,
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+SmnAtk",
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                targetType: ETargetType.SELF,
                valueType: "number",
                timeType: EBuffTimeType.DUEL,
                appTrigger: {
                    limitedRepeats: true,
                    type: EAppTriggerType.SUMMON,
                    targetCheck: ETargetType.SELF,
                    skillId: "incrSummonBa",
                    skill: [
                        {
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            attribute: "attack",
                            value: atk,
                            valueType: "number",
                            mpScale: mpScale,
                            targetType: ETargetType.SUMMON_CURRENT,
                            condition: ESkillCondition.HAS_SUMMON,
                        },
                    ],
                },
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const incrSummonBa_3: IHeroSkillSet = {
    id: "incrSummonBa",
    //name: "Increase summon attack(3)",
    //desc: "Increase current summon basic attack damage [1]+[MP]",
    name: i18n.skills.level2.incrSummonBa.name,
    desc: i18n.skills.level2.incrSummonBa.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonBaSkillset(1, 100),
    image: IMAGE_SKILL_SUMMON_SWORD,
};

export const incrSummonBa_2: IHeroSkillSet = {
    id: "incrSummonBa",
    //name: "Increase summon attack(2)",
    //desc: "Increase current summon basic attack damage [1]+[MP*70%]",
    name: i18n.skills.level2.incrSummonBa.name,
    desc: i18n.skills.level2.incrSummonBa.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonBaSkillset(1, 70),
    image: IMAGE_SKILL_SUMMON_SWORD,
    nextLevel: incrSummonBa_3,
};

export const incrSummonBa: IHeroSkillSet = {
    id: "incrSummonBa",
    //name: "Increase summon attack",
    //desc: "Increase current summon basic attack damage [1]+[MP*50%]",
    name: i18n.skills.level2.incrSummonBa.name,
    desc: i18n.skills.level2.incrSummonBa.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonBaSkillset(1, 50),
    image: IMAGE_SKILL_SUMMON_SWORD,
    nextLevel: incrSummonBa_2,
};

//
export const summonerFamiliarSkill_3: IHeroSkillSet = {
    id: "summonerFamiliar",
    name: i18n.skills.level3.summonerFamiliar.name,
    desc: i18n.skills.level3.summonerFamiliar.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(familiarSummon, 1, 25, 50, 1, 1), // summon 3/1,
    //nextLevel: summonerFamiliarSkill_2,
    isActivateOnStart: true,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    animationType: AnimationType.SUMMON_SPELL,
};

export const summonerFamiliarSkill_2: IHeroSkillSet = {
    id: "summonerFamiliar",
    name: i18n.skills.level3.summonerFamiliar.name,
    desc: i18n.skills.level3.summonerFamiliar.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(familiarSummon, 1, 25, 35, 0, 1), // summon 3/1,
    nextLevel: summonerFamiliarSkill_3,
    isActivateOnStart: true,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    animationType: AnimationType.SUMMON_SPELL,
};

export const summonerFamiliarSkill: IHeroSkillSet = {
    id: "summonerFamiliar",
    name: i18n.skills.level3.summonerFamiliar.name,
    desc: i18n.skills.level3.summonerFamiliar.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    type: ESkillSetType.SUMMON,
    skills: skillsetSummon(familiarSummon, 0, 25, 25, 0, 0), // summon 3/1,
    nextLevel: summonerFamiliarSkill_2,
    isActivateOnStart: true,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
    animationType: AnimationType.SUMMON_SPELL,
};

// INCREASE CURRENT SUMMON ARMOR SKILL
//
const incrSummonArmorSkillset = (armor: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: armor,
            valueType: "number",
            mpScale: mpScale,
            targetType: ETargetType.SUMMON_CURRENT,
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "+SmnAtk",
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                targetType: ETargetType.SELF,
                valueType: "number",
                timeType: EBuffTimeType.DUEL,
                appTrigger: {
                    limitedRepeats: true,
                    type: EAppTriggerType.SUMMON,
                    targetCheck: ETargetType.SELF,
                    skillId: "incrSummonBa",
                    skill: [
                        {
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            attribute: "armor",
                            value: armor,
                            valueType: "number",
                            mpScale: mpScale,
                            targetType: ETargetType.SUMMON_CURRENT,
                            condition: ESkillCondition.HAS_SUMMON,
                        },
                    ],
                },
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const incrSummonArmor_3: IHeroSkillSet = {
    id: "incrSummonArmor",
    //name: "Increase summon armor",
    //desc: "Increase current summon basic attack damage [8]+[MP]",
    name: i18n.skills.level2.incrSummonArmor.name,
    desc: i18n.skills.level2.incrSummonArmor.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonArmorSkillset(8, 100),
    image: IMAGE_SKILL_SUMMON_SHIELD,
};

export const incrSummonArmor_2: IHeroSkillSet = {
    id: "incrSummonArmor",
    //name: "Increase summon armor",
    //desc: "Increase current summon basic attack damage [8]+[MP*75%]",
    name: i18n.skills.level2.incrSummonArmor.name,
    desc: i18n.skills.level2.incrSummonArmor.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonArmorSkillset(8, 70),
    image: IMAGE_SKILL_SUMMON_SHIELD,
    nextLevel: incrSummonArmor_3,
};

export const incrSummonArmor: IHeroSkillSet = {
    id: "incrSummonArmor",
    //name: "Increase summon armor",
    //desc: "Increase current summon armor [8]+[MP*50%]",
    name: i18n.skills.level2.incrSummonArmor.name,
    desc: i18n.skills.level2.incrSummonArmor.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: incrSummonArmorSkillset(8, 50),
    image: IMAGE_SKILL_SUMMON_SHIELD,
    nextLevel: incrSummonArmor_2,
};

const explodingSummonsBuffSkillset = (mpScale: number, area: ETargetType): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Summons explode",
                type: EBuffType.BATTLE_TRIGGER,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DURATION,
                duration: 3,
                value: 1,
                appTrigger: {
                    limitedRepeats: false,
                    targetCheck: ETargetType.ALL_ALLY_SUMMONS,
                    type: EAppTriggerType.DEATH,
                    skillId: "Shock explode",
                    skill: [
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            status: EStatusType.SHOCK,
                            value: 1,
                            valueType: "number",
                            targetType: area,
                            animation: AnimationType.NONE,
                            effectAnimationType: EEffectAnimationType.EFFECT_LIGHTNING_1,
                            effectAnimationDelay: 250,
                        },
                        {
                            type: EHeroSkillType.ATTACK,
                            targetType: area,
                            attackType: EHeroAttackType.MAGIC,
                            value: 0,
                            mpScale: mpScale,
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const explodingSummonsBuffSkill_3: IHeroSkillSet = {
    id: "explodingSummonsBuff",
    name: i18n.skills.level3.explodingSummonsBuff.name,
    desc: i18n.skills.level3.explodingSummonsBuff.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: explodingSummonsBuffSkillset(80, ETargetType.FIRST_THREE_ENEMIES),
    image: IMAGE_SKILL_SUMMON_SHIELD,
    //nextLevel: explodingSummonsBuffSkill_3,
};

export const explodingSummonsBuffSkill_2: IHeroSkillSet = {
    id: "explodingSummonsBuff",
    name: i18n.skills.level3.explodingSummonsBuff.name,
    desc: i18n.skills.level3.explodingSummonsBuff.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: explodingSummonsBuffSkillset(65, ETargetType.FIRST_TWO_ENEMIES),
    image: IMAGE_SKILL_SUMMON_SHIELD,
    nextLevel: explodingSummonsBuffSkill_3,
};

export const explodingSummonsBuffSkill: IHeroSkillSet = {
    id: "explodingSummonsBuff",
    name: i18n.skills.level3.explodingSummonsBuff.name,
    desc: i18n.skills.level3.explodingSummonsBuff.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.SUMMON],
    skills: explodingSummonsBuffSkillset(50, ETargetType.FIRST_ENEMY),
    image: IMAGE_SKILL_SUMMON_SHIELD,
    nextLevel: explodingSummonsBuffSkill_2,
};

const AS_ONE_BUFF_NAME = "As one"
const asOneSkillset = (regen: number, duration: number): IHeroSkill[] => {
    // For 3 turns increase summons regen by 1 (stacking) and attack by own basic attack
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SUMMON_CURRENT,
            targetBuffId: AS_ONE_BUFF_NAME,
            animation: AnimationType.NONE,
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SUMMON_CURRENT,
            value: regen,
            valueType: "number",
            valueFrom: "customNumber", // number + this -> perform addition (customNumber += value)
            animation: AnimationType.NONE,
            condition: ESkillCondition.HAS_SUMMON,
        }, // these 2 above is to perform stacking; because buffs with duration only stack dutation time, and use highest totalValue
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "customNumber", // push caster.customNumber value into summon.customNumber
            value: 100,                // because buff.valueFrom uses target's attribute values
            valueType: "percent",
            valueFrom: "customNumber",
            animation: AnimationType.NONE,
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "customNumber2", // push caster.attack value into summon.customNumber2
            value: 100,
            valueType: "percent",
            valueFrom: "attack",
            animation: AnimationType.NONE,
            condition: ESkillCondition.HAS_SUMMON,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: AS_ONE_BUFF_NAME,
                targetType: ETargetType.SUMMON_CURRENT,
                type: EBuffType.ATTRIBUTE_INCREASE,
                attribute: "hpRegen",
                timeType: EBuffTimeType.DURATION,
                value: 100,
                valueFrom: "customNumber",
                valueType: "percent",
                duration,
                nestedEffects: [
                    {
                        buffType: EBuffType.ATTRIBUTE_INCREASE,
                        attribute: "attack",
                        value: 100,
                        valueFrom: "customNumber2",
                        valueType: "percent",
                    }
                ],
            },
            condition: ESkillCondition.HAS_SUMMON,
        }
    ];
}

export const asOneSkill_3: IHeroSkillSet = {
    id: "asOneSkill",
    name: "As one",
    desc: "For 4 turns increase\nsummon's regen by [3]\n(stacking) and attack by own basic\nattack (not stacking)",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: asOneSkillset(3, 4),
    image: IMAGE_DRAFT_ASONE, //IMAGE_SKILL_TEST,
};

export const asOneSkill_2: IHeroSkillSet = {
    id: "asOneSkill",
    name: "As one",
    desc: "For 3 turns increase\nsummon's regen by [2]\n(stacking) and attack by own basic\nattack (not stacking)",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: asOneSkillset(2, 3),
    image: IMAGE_DRAFT_ASONE, //IMAGE_SKILL_TEST,
    nextLevel: asOneSkill_3,
};

export const asOneSkill: IHeroSkillSet = {
    id: "asOneSkill",
    name: "As one",
    desc: "For 3 turns increase\nsummon's regen by [1]\n(stacking) and attack by own basic\nattack (not stacking)",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.SUMMON],
    skills: asOneSkillset(1, 3),
    image: IMAGE_DRAFT_ASONE, //IMAGE_SKILL_TEST,
    nextLevel: asOneSkill_2,
};


//////////////////////////////////////////////////////////////////////////////////////////////////////

export const summonSkills: THeroSkills = [fireflySummonSkill, warriorSummonSkill];

export const summonSkills_2: THeroSkills = summonSkills.concat([incrSummonBa, incrSummonArmor, radiantWallSkill, venomHeartSkill, asOneSkill]);

export const summonSkills_3: THeroSkills = summonSkills_2.concat([explodingSummonsBuffSkill, summonerFamiliarSkill, buffSummonCritSkill]);
