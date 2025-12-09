import {
    ETargetType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    IHeroSkill,
    IUnit,
    EUnitType,
    EStatusType,
    EHeroClassType,
    THeroSkills,
} from "../types";
import { shamanSkills } from "./skills/mc/shamanSkills";
import { skeletonUnit, soldierUnit } from "./unitConsts";

//  SKILLS  //////////////////////////////////////////////////////////////

const paladinSkills: THeroSkills = [
    {
        id: "DivineShield",
        name: "Divine Shield",
        desc: "Shield self with magic, protecting from first attack",
        level: 1,
        heroClasses: [EHeroClass.PALADIN],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF,
                isBasicAttack: true,
                buff: {
                    name: "Divine shield",
                    type: EBuffType.DIVINE_SHIELD,
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.DUEL,
                    value: 1,
                },
            },
        ],
    },
];

const barbarianSkills: THeroSkills = [
    // [
    //     {
    //         type: EHeroSkillType.BUFF,
    //         isBasicAttack: false,
    //         buff: {
    //             name: "+4 hp regen",
    //             type: EBuffType.ATTRIBUTE_INCREASE,
    //             value: 4,
    //             valueType: "number",
    //             attribute: "hpRegen",
    //             targetType: ETargetType.SELF,
    //             timeType: EBuffTimeType.DUEL,
    //         },
    //     },
    //     {
    //         type: EHeroSkillType.BUFF,
    //         isBasicAttack: true,
    //         buff: {
    //             name: "+2 ba",
    //             type: EBuffType.ATTRIBUTE_INCREASE,
    //             attribute: "attack",
    //             value: 2,
    //             valueType: "number",
    //             targetType: ETargetType.SELF,
    //             timeType: EBuffTimeType.DUEL,
    //         },
    //     },
    // ],
    {
        id: "BarbarianShout",
        name: "Barbarian shout",
        desc: "Add hp regen value to self next basic attack",
        level: 1,
        heroClasses: [EHeroClass.BARBARIAN],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF,
                isBasicAttack: true,
                buff: {
                    name: "add hpReg to next ba",
                    type: EBuffType.ATTRIBUTE_INCREASE,
                    attribute: "attack",
                    value: 100,
                    valueType: "percent",
                    valueFrom: "hpRegen",
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                },
            },
        ],
    },
];

// TODO: rework!
const knightSkills: THeroSkills = [
    {
        id: "KnightArmor",
        name: "Knight armor",
        desc: "Armor self [8]",
        level: 1,
        heroClasses: [EHeroClass.KNIGHT],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                isBasicAttack: true,
                value: 8, //TODO PP: add pp to armor
                valueType: "number",
                attribute: "armor",
                targetType: ETargetType.SELF,
            },
        ],
    },
];

//TODO: change to Totem which gives armor all
const heraldSkills: THeroSkills = [
    {
        id: "HeraldHorn",
        name: "Herald horn",
        desc: "Armor all allies [4]",
        level: 1,
        heroClasses: [EHeroClass.HERALD],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                isBasicAttack: true,
                value: 4, //TODO PP: add pp to armor
                valueType: "number",
                attribute: "armor",
                targetType: ETargetType.ALL_ALLIES,
            },
        ],
    },
];

//TODO: do
const blackKnightSkills: THeroSkills = [
    {
        id: "blackKnightShield",
        name: "TEMP: Heal self",
        desc: "Not implemented yet",
        level: 1,
        heroClasses: [EHeroClass.BLACK_KNIGHT],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 5,
                targetType: ETargetType.SELF,
            },
        ],
    },
];

//TODO: do
const bishopSkills: THeroSkills = [
    {
        id: "bishopHeal",
        name: "TEMP: Heal self",
        desc: "Not implemented yet",
        level: 1,
        heroClasses: [EHeroClass.BISHOP],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 5,
                targetType: ETargetType.SELF,
            },
        ],
    },
];

//TODO: use this skill
const shamanSkills_OLD: THeroSkills = [
    {
        id: "ShamanTotem",
        name: "Shaman totem",
        desc: "Place a totem that \nheals low hp ally",
        level: 1,
        heroClasses: [EHeroClass.SHAMAN],
        isMcSkill: true,
        skills: [
            {
                //heroClasses: [EHeroClass.ALL],
                type: EHeroSkillType.TOTEM,
                isBasicAttack: true,
                totem: {
                    id: "SHAMAN_TOTEM",
                    name: "Shaman totem",
                    skills: [
                        {
                            type: EHeroSkillType.HEAL,
                            isBasicAttack: false,
                            value: 3, // TODO MP: add MP modifier to value
                            valueType: "number",
                            targetType: ETargetType.LOW_HP_ALLY,
                        },
                    ],
                },
            },
        ],
    },
];

const samuraiSkills: THeroSkills = [
    {
        id: "SamuraiSharpBlade",
        name: "Samurai sharp blade",
        desc: "Next basic attack applies [2] bleed",
        level: 1,
        heroClasses: [EHeroClass.SAMURAI],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF,
                isBasicAttack: true,
                buff: {
                    name: "+2 bleed on ba",
                    type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                    statusType: EStatusType.BLEED,
                    value: 2,
                    valueType: "number",
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.DUEL,
                },
            },
        ],
        isChained: true,
    },
];

export const necromancerSkills: THeroSkills = [
    {
        id: "NecromancerSkeleton",
        name: "Necromancer skeleton",
        desc: "Summon a skeleton [4,10]",
        level: 1,
        heroClasses: [EHeroClass.NECROMANCER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.SUMMON,
                isBasicAttack: true,
                summon: skeletonUnit,
            },
        ],
    },
];

const beastMasterSkills: THeroSkills = [
    {
        id: "BeastmasterCrows",
        name: "Beastmaster crows",
        desc: "Summon two crows [2]",
        level: 1,
        heroClasses: [EHeroClass.BEAST_MASTER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.TOTEM,
                isBasicAttack: true,
                totem: {
                    id: "CROWS_TOTEM",
                    name: "Crows",
                    skills: [
                        {
                            //heroClasses: [EHeroClass.ALL],
                            type: EHeroSkillType.ATTACK,
                            isBasicAttack: false,
                            value: 2, // TODO MP: add PP modifier to value
                            targetType: ETargetType.RANDOM_ENEMY,
                            attackType: EHeroAttackType.PHYSICAL,
                        },
                        {
                            //heroClasses: [EHeroClass.ALL],
                            type: EHeroSkillType.ATTACK,
                            isBasicAttack: false,
                            value: 2, // TODO MP: add PP modifier to value
                            targetType: ETargetType.RANDOM_ENEMY,
                            attackType: EHeroAttackType.PHYSICAL,
                        },
                    ],
                },
            },
        ],
    },
];

const gladiatorSkills: THeroSkills = [
    {
        id: "GladiatorTotem",
        name: "Gladiator totem",
        desc: "Place a totem that \nincreases basic attack damage",
        level: 1,
        heroClasses: [EHeroClass.GLADIATOR],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.TOTEM,
                isBasicAttack: true,
                totem: {
                    id: "GLADIATOR_TOTEM",
                    name: "Тотем гладиатора",
                    skills: [
                        {
                            //heroClasses: [EHeroClass.ALL],
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            isBasicAttack: false,
                            value: 2,
                            valueType: "number",
                            targetType: ETargetType.SELF,
                            attribute: "attack",
                        },
                    ],
                },
            },
        ],
    },
];

const warlockSkills: THeroSkills = [
    {
        id: "WarlockCurse",
        name: "Warlock curse",
        desc: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [4] poison.",
        level: 1,
        heroClasses: [EHeroClass.WARLOCK],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "-20% ba",
                    type: EDebuffType.ATTRIBUTE_DECREASE,
                    attribute: "attack",
                    value: 20,
                    valueType: "percent",
                    targetType: ETargetType.HIGH_ATTACK_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                },
            },
            {
                type: EHeroSkillType.STATUS_APPLY,
                isBasicAttack: true,
                status: EStatusType.POISON,
                value: 4, //TODO MP: use unit MP
                targetType: ETargetType.HIGH_ATTACK_ENEMY,
            },
        ],
    },
];

export const doomsayerSkills: THeroSkills = [
    {
        id: "DoomsayerCurse",
        name: "Doomsayer curse",
        desc: "Disable next enemy first hero skill",
        level: 1,
        heroClasses: [EHeroClass.DOOMSAYER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "Disable next skill",
                    type: EDebuffType.DISABLE_SKILL,
                    value: 1,
                    targetType: ETargetType.FIRST_ALLY,
                    timeType: EBuffTimeType.TILL_NEXT_BA,
                },
            },
        ],
    },
];

// TODO: rework!
export const minstrelSkills: THeroSkills = [
    {
        id: "MinstralHeal",
        name: "Minstral heal",
        desc: "TEMP: Heal self [8]",
        level: 1,
        heroClasses: [EHeroClass.MINSTREL],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 8, // TODO MP: add MP modifier to value
                targetType: ETargetType.SELF,
            },
        ],
    },
];

export const magicBardSkills: THeroSkills = [
    {
        id: "MagicBardBuff",
        name: "Copy buff",
        desc: "Copy random buff from ally to random ally",
        level: 1,
        heroClasses: [EHeroClass.MAGIC_BARD],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF_COPY,
                isBasicAttack: true,
                value: 1,
                targetType: ETargetType.BUFFED_ALLY_RANDOM,
            },
        ],
    },
];

export const duelistSkills: THeroSkills = [
    {
        id: "DuelistBuff",
        name: "Duelist buff",
        desc: "Doubles value of a random buff on ally",
        level: 1,
        heroClasses: [EHeroClass.DUELIST],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF_INCREASE_VALUE,
                isBasicAttack: true,
                value: 100,
                valueType: "percent",
                targetType: ETargetType.BUFFED_ALLY_RANDOM,
            },
        ],
    },
];

// TODO: rework!
export const runecasterSkills: THeroSkills = [
    {
        id: "RunecasterHeal",
        name: "Runecaster heal",
        desc: "TEMP: Heal self [8]",
        level: 1,
        heroClasses: [EHeroClass.RUNECASTER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 8, // TODO MP: add MP modifier to value
                targetType: ETargetType.SELF,
            },
        ],
    },
];

// TODO: rework!
export const mimicSkills: THeroSkills = [
    {
        id: "MimicHeal",
        name: "Mimic heal",
        desc: "TEMP: Heal self [8]",
        level: 1,
        heroClasses: [EHeroClass.MIMIC],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 8, // TODO MP: add MP modifier to value
                targetType: ETargetType.SELF,
            },
        ],
    },
];

export const forestSpititSkills: THeroSkills = [
    {
        id: "forestSpiritSacrifice",
        name: "Spirit Sacrifice",
        desc: "Sacrifice self armor to gain [0.1] hp regen",
        level: 1,
        heroClasses: [EHeroClass.FOREST_SPIRIT],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                isBasicAttack: false,
                attribute: "hpRegen",
                value: 10,
                valueType: "percent",
                valueFrom: "armor",
                targetType: ETargetType.SELF,
            },
            {
                type: EHeroSkillType.ATTRIBUTE_DECREASE,
                isBasicAttack: true,
                attribute: "armor",
                value: 100,
                valueType: "percent",
                targetType: ETargetType.SELF,
            },
        ],
    },
];

// TODO: summon a soldier on this skill higher level?
export const commanderSkills: THeroSkills = [
    // [
    //     {
    //         type: EHeroSkillType.SUMMON,
    //         isBasicAttack: true,
    //         summon: soldierUnit,
    //     },
    // ],
    {
        id: "CommanderHorn",
        name: "Commander horn",
        desc: "Increase all summons basic attack damage [3]",
        level: 1,
        heroClasses: [EHeroClass.COMMANDER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.ATTRIBUTE_INCREASE,
                isBasicAttack: true,
                value: 3, //TODO PP: add pp to armor
                valueType: "number",
                attribute: "attack",
                targetType: ETargetType.ALL_ALLY_SUMMONS,
            },
        ],
    },
];

export const druidSkills: THeroSkills = [
    // [
    //     {
    //         heroClasses: [EHeroClass.DRUID],
    //         type: EHeroSkillType.ATTRIBUTE_DECREASE,
    //         isBasicAttack: true,
    //         value: 12, //TODO MP: add MP to armor decrease
    //         valueType: "number",
    //         attribute: "armor",
    //         targetType: ETargetType.FIRST_ENEMY,
    //     },
    // ],
    {
        id: "DruidBurn",
        name: "Druid burn",
        desc: "Apply [2] burn on all enemies",
        level: 1,
        heroClasses: [EHeroClass.DRUID],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.STATUS_APPLY,
                isBasicAttack: true,
                status: EStatusType.BURN,
                value: 2, //TODO MP: use unit MP
                targetType: ETargetType.ALL_ENEMIES,
            },
        ],
    },
];

export const battleMageSkills: THeroSkills = [
    {
        id: "BattlemageDebuff",
        name: "Battlemage debuff",
        desc: "Debuff magic resist -[20]% to first enemy",
        level: 1,
        heroClasses: [EHeroClass.BATTLE_MAGE],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "-20% magic resist",
                    type: EDebuffType.MAGIC_RESIST_DECREASE,
                    value: 20,
                    valueType: "percent",
                    targetType: ETargetType.FIRST_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                },
            },
        ],
    },
    // [
    //     {
    //         isBasicAttack: false,
    //         type: EHeroSkillType.ATTACK,
    //         value: 16, //TODO MP: add mp to attack
    //         targetType: ETargetType.FIRST_ENEMY,
    //         attackType: EHeroAttackType.MAGIC,
    //     },
    // ],
];

export const sorcererSkills: THeroSkills = [
    {
        id: "SorcererAttack",
        name: "Sorcerer attack",
        desc: "Deal [10] magic damage to first two enemies",
        level: 1,
        heroClasses: [EHeroClass.SORCERER],
        isMcSkill: true,
        skills: [
            {
                isBasicAttack: false,
                type: EHeroSkillType.ATTACK,
                value: 10, //TODO MP: add mp to attack
                targetType: ETargetType.FIRST_TWO_ENEMIES,
                attackType: EHeroAttackType.MAGIC,
            },
        ],
    },
    // [
    //     {
    //         type: EHeroSkillType.BUFF,
    //         isBasicAttack: true,
    //         buff: {
    //             name: "Divine shield",
    //             type: EBuffType.DIVINE_SHIELD,
    //             targetType: ETargetType.SELF,
    //             timeType: EBuffTimeType.DUEL,
    //             value: 1,
    //         },
    //     },
    // ],
];

const assassinSkills: THeroSkills = [
    {
        id: "AssassinPoisonBlade",
        name: "Assassin poison blade",
        desc: "Apply poison [2] on basic attack",
        level: 1,
        heroClasses: [EHeroClass.ASSASSIN],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.BUFF,
                isBasicAttack: true,
                buff: {
                    name: "+2 poison on ba",
                    type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                    statusType: EStatusType.POISON,
                    value: 2,
                    valueType: "number",
                    targetType: ETargetType.SELF,
                    timeType: EBuffTimeType.DUEL,
                },
            },
        ],
    },
];

const witchSkills: THeroSkills = [
    {
        id: "WitchBleedAll",
        name: "Witch all bleed",
        desc: "Apply [2] bleed to all enemies",
        level: 1,
        heroClasses: [EHeroClass.WITCH],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.STATUS_APPLY,
                isBasicAttack: true,
                status: EStatusType.BLEED,
                value: 2, //TODO MP: use unit MP
                targetType: ETargetType.ALL_ENEMIES,
            },
        ],
    },
    // [
    //     {
    //         type: EHeroSkillType.DEBUFF,
    //         isBasicAttack: true,
    //         debuff: {
    //             name: "-30% healing",
    //             type: EDebuffType.HEALING_DECREASE,
    //             value: 30,
    //             valueType: "percent",
    //             targetType: ETargetType.FIRST_ENEMY,
    //             timeType: EBuffTimeType.DUEL,
    //         },
    //     },
    // ],
];

const monkSkills: THeroSkills = [
    // [
    //     {
    //         type: EHeroSkillType.HEAL,
    //         isBasicAttack: true,
    //         value: 5, // TODO MP: add MP modifier to value
    //         targetType: ETargetType.SELF,
    //     },
    // ],
    {
        id: "MonkSelfClear",
        name: "Monk self clear",
        desc: "Remove negative status from self. Remove debuff from self",
        level: 1,
        heroClasses: [EHeroClass.MONK],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.STATUS_REMOVE,
                isBasicAttack: false,
                targetType: ETargetType.SELF,
            },
            {
                type: EHeroSkillType.DEBUFF_REMOVE,
                isBasicAttack: true,
                targetType: ETargetType.SELF,
            },
        ],
    },
];

const hunterSkills: THeroSkills = [
    {
        id: "HunterMark",
        name: "Hunter mark",
        desc: "Mark second enemy and \ndecrease physical resistance -[20]%",
        level: 1,
        heroClasses: [EHeroClass.HUNTER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "Hunter mark",
                    type: EDebuffType.MARK_HUNTER,
                    targetType: ETargetType.SECOND_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                    value: 20,
                    valueType: "percent",
                },
            },
        ],
    },
    // [
    //     {
    //         isBasicAttack: false,
    //         type: EHeroSkillType.ATTACK,
    //         value: 12, //TODO PP: add pp to attack
    //         targetType: ETargetType.MARKED_ENEMY,
    //         markType: EDebuffType.MARK_HUNTER,
    //         attackType: EHeroAttackType.PHYSICAL,
    //     },
    // ],
];

const predatorSkills: THeroSkills = [
    {
        id: "PredatorMark",
        name: "Predator mark",
        desc: "Mark low hp enemy\n and decrease physical resistance -[20]%",
        level: 1,
        heroClasses: [EHeroClass.PREDATOR],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "Predator mark",
                    type: EDebuffType.MARK_PREDATOR,
                    targetType: ETargetType.LOW_HP_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                    value: 20,
                    valueType: "percent",
                },
            },
        ],
    },
    // [
    //     {
    //         type: EHeroSkillType.STATUS_APPLY,
    //         isBasicAttack: true,
    //         status: EStatusType.BLEED,
    //         value: 4, //TODO PP: % unit PP to bleed
    //         targetType: ETargetType.MARKED_ENEMY,
    //         markType: EDebuffType.MARK_PREDATOR,
    //     },
    // ],
];

// TODO: bladedancer skills
const bladedancerSkills: THeroSkills = [
    {
        id: "BladedancerAttack",
        name: "Bladedancer Attack",
        desc: "TEMP: physical attack [10]",
        level: 1,
        heroClasses: [EHeroClass.BLADEDANCER],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.ATTACK,
                isBasicAttack: true,
                targetType: ETargetType.FIRST_ENEMY,
                value: 10,
            },
        ],
    },
];

const alchemistSkills: THeroSkills = [
    {
        id: "AlchemistHpSwap",
        name: "Alchemist hp swap",
        desc: "Swap hp with first ally and heal self [5]",
        level: 1,
        heroClasses: [EHeroClass.ALCHEMIST],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.SWAP_HP,
                isBasicAttack: false,
                targetType: ETargetType.LOW_HP_ALLY,
            },
            {
                type: EHeroSkillType.HEAL,
                isBasicAttack: true,
                value: 5, // TODO MP: add MP modifier to value
                targetType: ETargetType.SELF,
            },
        ],
    },
];

const zealotSkills: THeroSkills = [
    {
        id: "ZealotDebuff",
        name: "Zealot debuff",
        desc: "Debuff first enemy hp regen -[100]%",
        level: 1,
        heroClasses: [EHeroClass.ZEALOT],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "hpReg -100%",
                    type: EDebuffType.ATTRIBUTE_DECREASE,
                    targetType: ETargetType.FIRST_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                    value: 100,
                    valueType: "percent",
                    attribute: "hpRegen",
                },
            },
        ],
    },
    // [
    //     {
    //         isBasicAttack: false,
    //         type: EHeroSkillType.ATTACK,
    //         value: 8, //TODO MP: add MP to attack
    //         targetType: ETargetType.RANDOM_ENEMY,
    //         attackType: EHeroAttackType.MAGIC,
    //     },
    //     {
    //         isBasicAttack: false,
    //         type: EHeroSkillType.ATTACK,
    //         value: 8, //TODO MP: add MP to attack
    //         targetType: ETargetType.RANDOM_ENEMY,
    //         attackType: EHeroAttackType.MAGIC,
    //     },
    //     {
    //         isBasicAttack: false,
    //         type: EHeroSkillType.ATTACK,
    //         value: 8, //TODO MP: add MP to attack
    //         targetType: ETargetType.RANDOM_ENEMY,
    //         attackType: EHeroAttackType.MAGIC,
    //     },
    // ],
];

const exorcistSkills: THeroSkills = [
    // [
    //     {
    //         type: EHeroSkillType.SUMMON,
    //         isBasicAttack: true,
    //         summon: skeletonUnit,
    //     },
    // ],
    {
        id: "ExorcistClear",
        name: "Exorcist clear",
        desc: "Remove summon and remove totem",
        level: 1,
        heroClasses: [EHeroClass.EXORCIST],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.TOTEM_REMOVE,
                isBasicAttack: false,
                targetType: ETargetType.CUSTOM,
            },
            {
                type: EHeroSkillType.SUMMON_REMOVE,
                isBasicAttack: true,
                targetType: ETargetType.CUSTOM,
            },
        ],
    },
];

// TODO: illusionist skills
const illusionistSkills: THeroSkills = [
    {
        id: "Illusionist",
        name: "Illusionist summon",
        desc: "TEMP: Summon skeleton",
        level: 1,
        heroClasses: [EHeroClass.EXORCIST],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.SUMMON,
                isBasicAttack: true,
                summon: skeletonUnit,
            },
        ],
    },
];

const inquisitorSkills: THeroSkills = [
    {
        id: "InquisitorBurn",
        name: "Inquisitor Burn",
        desc: "Debuff highest MP enemy \nwith mark that applies [5] burn every turn.",
        level: 1,
        heroClasses: [EHeroClass.INQUISITOR],
        isMcSkill: true,
        skills: [
            {
                type: EHeroSkillType.DEBUFF,
                isBasicAttack: true,
                debuff: {
                    name: "Burn mark",
                    type: EDebuffType.MARK_BURN,
                    value: 5,
                    valueType: "number",
                    targetType: ETargetType.HIGH_MP_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                },
            },
        ],
    },
];

//  HEROES  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PALADIN (priest + warrior)
export const paladinHero: IUnit = {
    heroClass: EHeroClass.PALADIN,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 4,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Paladin",
    id: "PALADIN",
    skills: paladinSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BARBARIAN (wild + warrior)
export const barbarianHero: IUnit = {
    heroClass: EHeroClass.BARBARIAN,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Barbarian",
    id: "BARBARIAN",
    skills: barbarianSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// KNIGHT (order + warrior)
export const knightHero: IUnit = {
    heroClass: EHeroClass.KNIGHT,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 10,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Knight",
    id: "KNIGHT",
    skills: knightSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// HERALD (order + bard)
export const heraldHero: IUnit = {
    heroClass: EHeroClass.HERALD,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 25,
    basicHpRegen: 0,
    basicArmor: 6,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Herald",
    id: "HERALD",
    skills: heraldSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// HERALD (wild + bard)
export const shamanHero: IUnit = {
    heroClass: EHeroClass.SHAMAN,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 24,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Shaman",
    id: "SHAMAN",
    skills: shamanSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// SAMURAI (order + master)
export const samuraiHero: IUnit = {
    heroClass: EHeroClass.SAMURAI,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 8,
    basicCritChance: 20,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Samurai",
    id: "SAMURAI",
    skills: samuraiSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// NECROMANCER (dark + summon)
export const necromancerHero: IUnit = {
    heroClass: EHeroClass.NECROMANCER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_TWO_ENEMIES,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Necromancer",
    id: "NECROMANCER",
    skills: necromancerSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BEAST MASTER (wild + summon)
export const beastMasterHero: IUnit = {
    heroClass: EHeroClass.BEAST_MASTER,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 22,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Beast Master",
    id: "BEAST_MASTER",
    skills: beastMasterSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// GLADIATOR (warrior + summon)
export const gladiatorHero: IUnit = {
    heroClass: EHeroClass.GLADIATOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Gladiator",
    id: "GLADIATOR",
    skills: gladiatorSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WARLOCK (magic + dark)
export const warlockHero: IUnit = {
    heroClass: EHeroClass.WARLOCK,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.HIGH_ATTACK_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Warlock",
    id: "WARLOCK",
    skills: warlockSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// RUNECASTER (magic + order)
export const runecasterHero: IUnit = {
    heroClass: EHeroClass.RUNECASTER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.HIGH_ATTACK_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 6,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Runecaster",
    id: "RUNECASTER",
    skills: runecasterSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// COMMANDER (warrior + summon)
export const commanderHero: IUnit = {
    heroClass: EHeroClass.COMMANDER,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 2,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Commander",
    id: "COMMANDER",
    skills: commanderSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// DOOMSAYER (dark + bard)
export const doomsayerHero: IUnit = {
    heroClass: EHeroClass.COMMANDER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 24,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Doomsayer",
    id: "DOOMSAYER",
    skills: doomsayerSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MINSTREL (priest + bard)
export const minstrelHero: IUnit = {
    heroClass: EHeroClass.MINSTREL,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 24,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Minstrel",
    id: "MINSTREL",
    skills: minstrelSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MAGICBARD (magic + bard)
export const magicBardHero: IUnit = {
    heroClass: EHeroClass.MAGIC_BARD,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 24,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Magic Bard",
    id: "MAGICBARD",
    skills: magicBardSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// DUELIST (master + bard)
export const duelistHero: IUnit = {
    heroClass: EHeroClass.DUELIST,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 24,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Duelist",
    id: "DUELIST",
    skills: duelistSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MIMIC (master + summon)
export const mimicHero: IUnit = {
    heroClass: EHeroClass.MIMIC,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Mimic",
    id: "MIMIC",
    skills: mimicSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// FOREST_SPIRIT (order + wild)
export const forestSpiritHero: IUnit = {
    heroClass: EHeroClass.FOREST_SPIRIT,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 3,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Forest Spirit",
    id: "FORESTSPIRIT",
    skills: forestSpititSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ORACLE (order + wild)
export const oracleHero: IUnit = {
    heroClass: EHeroClass.ORACLE,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 1,
    basicArmor: 6,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Oracle",
    id: "ORACLE",
    skills: mimicSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// SHADOW_MASTER (dark + priest)
export const shadowMasterHero: IUnit = {
    heroClass: EHeroClass.SHADOW_MASTER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Shadow Master",
    id: "SHADOW_MASTER",
    skills: mimicSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// DRUID (magic + wild)
export const druidHero: IUnit = {
    heroClass: EHeroClass.DRUID,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Druid",
    id: "DRUID",
    skills: druidSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BATTLE MAGE (magic + warrior)
export const battleMageHero: IUnit = {
    heroClass: EHeroClass.BATTLE_MAGE,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 2,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 2,
    name: "Battle Mage",
    id: "BATTLE_MAGE",
    skills: battleMageSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// SORCERER (magic + master)
export const sorcererHero: IUnit = {
    heroClass: EHeroClass.SORCERER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 16,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 10,
    basicPhysicalPower: 2,
    name: "Sorcerer",
    id: "SORCERER",
    skills: sorcererSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ASSASSIN (dark + master)
export const assasinHero: IUnit = {
    heroClass: EHeroClass.ASSASSIN,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 16,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Assassin",
    id: "ASSASSIN",
    skills: assassinSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// INQUISITOR (priest + order) => (blood + priest)
export const inquisitorHero: IUnit = {
    heroClass: EHeroClass.INQUISITOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 6,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Inquisitor",
    id: "INQUISITOR",
    skills: inquisitorSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WITCH (mystic + bard) => ???
export const witchHero: IUnit = {
    heroClass: EHeroClass.WITCH,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 25,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Witch",
    id: "WITCH",
    skills: witchSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MONK (wild + priest)
export const monkHero: IUnit = {
    heroClass: EHeroClass.MONK,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ALLY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Monk",
    id: "MONK",
    skills: monkSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// HUNTER (wild + master)
export const hunterHero: IUnit = {
    heroClass: EHeroClass.HUNTER,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.MARKED_ENEMY,
    basicAttackMarkType: EDebuffType.MARK_HUNTER,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 1,
    basicArmor: 0,
    basicCritChance: 5,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 2,
    name: "Hunter",
    id: "HUNTER",
    skills: hunterSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// PREDATOR (wild + dark) => (wild, blood) ?
export const predatorHero: IUnit = {
    heroClass: EHeroClass.PREDATOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.MARKED_ENEMY,
    basicAttackMarkType: EDebuffType.MARK_PREDATOR,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Predator",
    id: "PREDATOR",
    skills: predatorSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BLADEDANCER (bard + war)
export const bladedancerHero: IUnit = {
    heroClass: EHeroClass.BLADEDANCER,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 22,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 5,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Bladedancer",
    id: "BLADEDANCER",
    skills: bladedancerSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ALCHEMIST (priest + magic)
export const alchemistHero: IUnit = {
    heroClass: EHeroClass.ALCHEMIST,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Alchemist",
    id: "ALCHEMIST",
    skills: alchemistSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ZEALOT (order + dark)
export const zealotHero: IUnit = {
    heroClass: EHeroClass.ZEALOT,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 2,
    name: "Zealot",
    id: "ZEALOT",
    skills: zealotSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// EXORCIST (priest + order)
export const exorcistHero: IUnit = {
    heroClass: EHeroClass.EXORCIST,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 4,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Exorcist",
    id: "EXORCIST",
    skills: exorcistSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ILLUSIONIST (magic + summon)
export const illusionistHero: IUnit = {
    heroClass: EHeroClass.ILLUSIONIST,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: "Illusionist",
    id: "ILLUSIONIST",
    skills: illusionistSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BLACK KNIGHT (warrior + dark)
export const blackKnightHero: IUnit = {
    heroClass: EHeroClass.BLACK_KNIGHT,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 2,
    name: "Black Knight",
    id: "BLACK_KNIGHT",
    skills: blackKnightSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// BISHOP (priest + master)
export const bishopHero: IUnit = {
    heroClass: EHeroClass.BISHOP,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 16,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 10,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Bishop",
    id: "BISHOP",
    skills: bishopSkills,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};
