import { i18n as i18n_eng } from "../i18n/en";
import { i18n as i18n_ru } from "../i18n/ru";
import {
    ETargetType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    IUnit,
    EUnitType,
    EHeroClassType,
    EBuffTimeType,
    EBuffType,
    EHeroSkillType,
    EAppTriggerType,
} from "../types";
import { LANG } from "./consts";
import { alchemistSkills } from "./skills/mc/alchemistSkills";
import { assassinSkills } from "./skills/mc/assassinSkills";
import { barbarianSkills } from "./skills/mc/barbarianSkills";
import { battleMageSkills } from "./skills/mc/battleMageSkills";
import { beastMasterSkills } from "./skills/mc/beastmasterSkills";
import { bishopSkills } from "./skills/mc/bishopSkills";
import { blackKnightSkills } from "./skills/mc/blackKnightSkills";
import { bladedancerSkills } from "./skills/mc/bladedancerSkills";
import { commanderSkills } from "./skills/mc/commanderSkills";
import { doomsayerSkills } from "./skills/mc/doomsayerSkills";
import { druidSkills } from "./skills/mc/druidSkills";
import { duelistSkills } from "./skills/mc/duelistSkills";
import { exorcistSkills } from "./skills/mc/exorcistSkills";
import { forestSpititSkills } from "./skills/mc/forestSpiritSkills";
import { gladiatorSkills } from "./skills/mc/gladiatorSkills";
import { heraldSkills } from "./skills/mc/heraldSkills";
import { hunterSkills } from "./skills/mc/hunterSkills";
import { illusionistSkills } from "./skills/mc/illusionistSkills";
import { inquisitorSkills } from "./skills/mc/inquisitorSkills";
import { knightSkills } from "./skills/mc/knightSkills";
import { jesterSkills } from "./skills/mc/magicBardSkills";
import { mimicSkills } from "./skills/mc/mimicSkills";
import { minstrelSkills } from "./skills/mc/minstrelSkills";
import { monkSkills } from "./skills/mc/monkSkills";
import { necromancerSkills } from "./skills/mc/necromancerSkills";
import { oracleSkills } from "./skills/mc/oracleSkills";
import { paladinSkills } from "./skills/mc/paladinSkills";
import { predatorSkills } from "./skills/mc/predatorSkills";
import { runecasterSkills } from "./skills/mc/runecasterSkills";
import { samuraiSkills } from "./skills/mc/samuraiSkills";
import { shadowMasterSkills } from "./skills/mc/shadowMasterSkills";
import { shamanSkills } from "./skills/mc/shamanSkills";
import { sorcererSkills } from "./skills/mc/sorcererSkills";
import { warlockSkills } from "./skills/mc/warlockSkills";
import { witchSkills } from "./skills/mc/witchSkills";
import { zealotSkills } from "./skills/mc/zealotSkills";

const i18n = LANG === "eng" ? i18n_eng : i18n_ru;

//  SKILLS  //////////////////////////////////////////////////////////////

//TODO: use this skill
// const shamanSkills_OLD: THeroSkills = [
//     {
//         id: "ShamanTotem",
//         name: "Shaman totem",
//         desc: "Place a totem that \nheals low hp ally",
//         level: 1,
//         heroClasses: [EHeroClass.SHAMAN],
//         isMcSkill: true,
//         skills: [
//             {
//                 //heroClasses: [EHeroClass.ALL],
//                 type: EHeroSkillType.TOTEM,
//                 isBasicAttack: true,
//                 totem: {
//                     id: "SHAMAN_TOTEM",
//                     name: "Shaman totem",
//                     skills: [
//                         {
//                             type: EHeroSkillType.HEAL,
//                             isBasicAttack: false,
//                             value: 3, // TODO MP: add MP modifier to value
//                             valueType: "number",
//                             targetType: ETargetType.LOW_HP_ALLY,
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
// ];

//
//
//  HEROES  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//

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
    name: i18n.heroes.PALADIN,
    id: "PALADIN",
    skills: paladinSkills,
    passiveSkill: {
        desc: "Heal low hp unit when block or negate damage",
    },
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
    name: i18n.heroes.BARBARIAN,
    id: "BARBARIAN",
    skills: barbarianSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.KNIGHT,
    id: "KNIGHT",
    skills: knightSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.HERALD,
    id: "HERALD",
    skills: heraldSkills,
    passiveSkill: {
        desc: "Increase PP per\nbuff on allies",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// SHAMAN (wild + bard)
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
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: i18n.heroes.SHAMAN,
    id: "SHAMAN",
    skills: shamanSkills,
    passiveSkill: {
        desc: "Increase MP for each totem",
    },
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
    name: i18n.heroes.SAMURAI,
    id: "SAMURAI",
    skills: samuraiSkills,
    passiveSkill: {
        desc: "Upon death apply bleed to all enemies",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// NECROMANCER (dark + summon)
export const necromancerHero: IUnit = {
    heroClass: EHeroClass.NECROMANCER,
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
    name: i18n.heroes.NECROMANCER,
    id: "NECROMANCER",
    skills: necromancerSkills,
    passiveSkill: {
        desc: "Gain MP when unit dies",
        preBattleBuff: {
            name: "Passive",
            targetType: ETargetType.SELF,
            timeType: EBuffTimeType.DUEL,
            type: EBuffType.BATTLE_TRIGGER,
            value: 1,
            appTrigger: {
                skillId: "NecromancerPassive",
                type: EAppTriggerType.DEATH,
                targetCheck: ETargetType.EVERY_UNIT,
                skill: [
                    {
                        type: EHeroSkillType.ATTRIBUTE_INCREASE,
                        attribute: "magicPower",
                        value: 5,
                        valueType: "number",
                        targetType: ETargetType.SELF,
                    },
                ],
                limitedRepeats: false,
            },
        },
    },
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
    name: i18n.heroes.BEAST_MASTER,
    id: "BEAST_MASTER",
    skills: beastMasterSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 18,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.GLADIATOR,
    id: "GLADIATOR",
    skills: gladiatorSkills,
    passiveSkill: {
        desc: "Can crit with physical attack skills",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WARLOCK (magic + dark)
export const warlockHero: IUnit = {
    heroClass: EHeroClass.WARLOCK,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
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
    name: i18n.heroes.WARLOCK,
    id: "WARLOCK",
    skills: warlockSkills,
    passiveSkill: {
        desc: "Enemy dies from poison increase\nnext magic attack on poison value",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// RUNECASTER (magic + order)
export const runecasterHero: IUnit = {
    heroClass: EHeroClass.RUNECASTER,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
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
    name: i18n.heroes.RUNECASTER,
    id: "RUNECASTER",
    skills: runecasterSkills,
    passiveSkill: {
        desc: "Gain armor increases from MP",
    },
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
    name: i18n.heroes.COMMANDER,
    id: "COMMANDER",
    skills: commanderSkills,
    passiveSkill: {
        desc: "Apply buffs to hero's summon\ninstead of hero",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// DOOMSAYER (dark + bard)
export const doomsayerHero: IUnit = {
    heroClass: EHeroClass.DOOMSAYER,
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
    name: i18n.heroes.DOOMSAYER,
    id: "DOOMSAYER",
    skills: doomsayerSkills,
    passiveSkill: {
        desc: "Increase MP from\neach debuff on enemies",
    },
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
    name: i18n.heroes.MINSTREL,
    id: "MINSTREL",
    skills: minstrelSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MAGICBARD = JESTER (magic + bard)
export const jesterHero: IUnit = {
    heroClass: EHeroClass.MAGIC_BARD,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    heroClassType: EHeroClassType.MULTI,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 26,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: i18n.heroes.MAGIC_BARD,
    id: "MAGICBARD",
    skills: jesterSkills, // Fire fists
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.DUELIST,
    id: "DUELIST",
    skills: duelistSkills,
    passiveSkill: {
        desc: "Gets bonus when using sword",
    },
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
    name: i18n.heroes.MIMIC,
    id: "MIMIC",
    skills: mimicSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    basicArmor: 10,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.FOREST_SPIRIT,
    id: "FORESTSPIRIT",
    skills: forestSpititSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ORACLE (order + summon)
export const oracleHero: IUnit = {
    heroClass: EHeroClass.ORACLE,
    attackType: EHeroAttackType.MAGIC,
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
    name: i18n.heroes.ORACLE,
    id: "ORACLE",
    skills: oracleSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.SHADOW_MASTER,
    id: "SHADOW_MASTER",
    skills: shadowMasterSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.DRUID,
    id: "DRUID",
    skills: druidSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.BATTLE_MAGE,
    id: "BATTLE_MAGE",
    skills: battleMageSkills,
    passiveSkill: {
        desc: "Skills get bonuses both\nfrom MP and PP.\nBut cannot basic attack.",
    },
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
    basicMagicPower: 3,
    basicPhysicalPower: 0,
    name: i18n.heroes.SORCERER,
    id: "SORCERER",
    skills: sorcererSkills,
    passiveSkill: {
        desc: "Can crit with magic attack skills",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// ASSASSIN (dark + master)
export const assasinHero: IUnit = {
    heroClass: EHeroClass.ASSASSIN,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
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
    name: i18n.heroes.ASSASSIN,
    id: "ASSASSIN",
    skills: assassinSkills,
    passiveSkill: {
        desc: "Increased chance of critical\nattack on poisoned target",
    },
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
    name: i18n.heroes.INQUISITOR,
    id: "INQUISITOR",
    skills: inquisitorSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WITCH (mystic + bard)
export const witchHero: IUnit = {
    heroClass: EHeroClass.WITCH,
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
    name: i18n.heroes.WITCH,
    id: "WITCH",
    skills: witchSkills,
    passiveSkill: {
        desc: "Increase MP depending on\ntotal bleed on all enemies",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// MONK (wild + priest)
export const monkHero: IUnit = {
    heroClass: EHeroClass.MONK,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
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
    name: i18n.heroes.MONK,
    id: "MONK",
    skills: monkSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 5,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 2,
    name: i18n.heroes.HUNTER,
    id: "HUNTER",
    skills: hunterSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.PREDATOR,
    id: "PREDATOR",
    skills: predatorSkills,
    passiveSkill: {
        desc: "Killing marked target\ngrants PP bonus",
    },
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
    basicAttack: 3,
    basicAttackTimes: 1,
    basicMaxHp: 22,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 5,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.heroes.BLADEDANCER,
    id: "BLADEDANCER",
    skills: bladedancerSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    basicMaxHp: 22,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 2,
    basicPhysicalPower: 0,
    name: i18n.heroes.ALCHEMIST,
    id: "ALCHEMIST",
    skills: alchemistSkills,
    passiveSkill: {
        desc: "Gets double value from potions",
    },
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
    name: i18n.heroes.ZEALOT,
    id: "ZEALOT",
    skills: zealotSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.EXORCIST,
    id: "EXORCIST",
    skills: exorcistSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.ILLUSIONIST,
    id: "ILLUSIONIST",
    skills: illusionistSkills,
    passiveSkill: {
        desc: "<EMPTY>",
    },
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
    name: i18n.heroes.BLACK_KNIGHT,
    id: "BLACK_KNIGHT",
    skills: blackKnightSkills,
    passiveSkill: {
        desc: "Permanently gain 1 PP\nafter every two duels",
    },
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
    basicMagicPower: 4,
    basicPhysicalPower: 0,
    name: i18n.heroes.BISHOP,
    id: "BISHOP",
    skills: bishopSkills,
    passiveSkill: {
        desc: "Can crit with heal skills",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};
