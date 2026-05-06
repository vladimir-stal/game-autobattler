import { i18n as i18n_eng } from "../i18n/en";
import { i18n as i18n_ru } from "../i18n/ru";
import { ETargetType, EDebuffType, EHeroAttackType, EHeroClass, IUnit, EUnitType, EHeroClassType } from "../types";
import { LANG } from "./consts";
import { alchemistSkills } from "./skills/mc/alchemistSkills";
import { assassinSkills } from "./skills/mc/assassinSkills";
import { barbarianPassive, barbarianSkills } from "./skills/mc/barbarianSkills";
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
import { forestSpiritPassive, forestSpititSkills } from "./skills/mc/forestSpiritSkills";
import { gladiatorSkills } from "./skills/mc/gladiatorSkills";
import { heraldPassive, heraldSkills } from "./skills/mc/heraldSkills";
import { hunterSkills } from "./skills/mc/hunterSkills";
import { illusionistPassive, illusionistSkills } from "./skills/mc/illusionistSkills";
import { inquisitorPassive, inquisitorSkills } from "./skills/mc/inquisitorSkills";
import { knightSkills } from "./skills/mc/knightSkills";
import { jesterSkills } from "./skills/mc/magicBardSkills";
import { mimicPassive, mimicSkills } from "./skills/mc/mimicSkills";
import { minstrelSkills } from "./skills/mc/minstrelSkills";
import { monkSkills } from "./skills/mc/monkSkills";
import { necromancerPassive, necromancerSkills } from "./skills/mc/necromancerSkills";
import { oraclePassive, oracleSkills } from "./skills/mc/oracleSkills";
import { paladinSkills } from "./skills/mc/paladinSkills";
import { predatorSkills } from "./skills/mc/predatorSkills";
import { runecasterSkills } from "./skills/mc/runecasterSkills";
import { samuraiPassive, samuraiSkills } from "./skills/mc/samuraiSkills";
import { shadowMasterSkills } from "./skills/mc/shadowMasterSkills";
import { shamanSkills } from "./skills/mc/shamanSkills";
import { sorcererSkills } from "./skills/mc/sorcererSkills";
import { warlockSkills } from "./skills/mc/warlockSkills";
import { witchSkills } from "./skills/mc/witchSkills";
import { zealotSkills } from "./skills/mc/zealotSkills";

const i18n = LANG === "eng" ? i18n_eng : i18n_ru;

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
    id: EHeroClass.PALADIN,
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
    id: EHeroClass.BARBARIAN,
    skills: barbarianSkills,
    passiveSkill: barbarianPassive,
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
    id: EHeroClass.KNIGHT,
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
    id: EHeroClass.HERALD,
    skills: heraldSkills,
    passiveSkill: heraldPassive,
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
    id: EHeroClass.SHAMAN,
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
    id: EHeroClass.SAMURAI,
    skills: samuraiSkills,
    passiveSkill: samuraiPassive,
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
    id: EHeroClass.NECROMANCER,
    skills: necromancerSkills,
    passiveSkill: necromancerPassive,
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
    name: i18n.heroes.BEASTMASTER,
    id: EHeroClass.BEAST_MASTER,
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
    id: EHeroClass.GLADIATOR,
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
    id: EHeroClass.WARLOCK,
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
    id: EHeroClass.RUNECASTER,
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
    id: EHeroClass.COMMANDER,
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
    id: EHeroClass.DOOMSAYER,
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
    id: EHeroClass.MINSTREL,
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
    heroClass: EHeroClass.JESTER,
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
    name: i18n.heroes.JESTER,
    id: EHeroClass.JESTER,
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
    id: EHeroClass.DUELIST,
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
    id: EHeroClass.MIMIC,
    skills: mimicSkills,
    passiveSkill: mimicPassive,
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
    name: i18n.heroes.FORESTSPIRIT,
    id: EHeroClass.FOREST_SPIRIT,
    skills: forestSpititSkills,
    passiveSkill: forestSpiritPassive,
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
    id: EHeroClass.ORACLE,
    skills: oracleSkills,
    passiveSkill: oraclePassive,
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
    name: i18n.heroes.SHADOWMASTER,
    id: EHeroClass.SHADOW_MASTER,
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
    id: EHeroClass.DRUID,
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
    name: i18n.heroes.BATTLEMAGE,
    id: EHeroClass.BATTLE_MAGE,
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
    id: EHeroClass.SORCERER,
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
    id: EHeroClass.ASSASSIN,
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
    id: EHeroClass.INQUISITOR,
    skills: inquisitorSkills,
    passiveSkill: inquisitorPassive,
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};

// WITCH (mystic + bard)
export const witchHero: IUnit = {
    heroClass: EHeroClass.WITCH,
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
    name: i18n.heroes.WITCH,
    id: EHeroClass.WITCH,
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
    id: EHeroClass.MONK,
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
    id: EHeroClass.HUNTER,
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
    id: EHeroClass.PREDATOR,
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
    id: EHeroClass.BLADEDANCER,
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
    id: EHeroClass.ALCHEMIST,
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
    id: EHeroClass.ZEALOT,
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
    id: EHeroClass.EXORCIST,
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
    id: EHeroClass.ILLUSIONIST,
    skills: illusionistSkills,
    passiveSkill: illusionistPassive,
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
    name: i18n.heroes.BLACKKNIGHT,
    id: EHeroClass.BLACK_KNIGHT,
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
    id: EHeroClass.BISHOP,
    skills: bishopSkills,
    passiveSkill: {
        desc: "Can crit with heal skills",
    },
    items: [],
    unitType: EUnitType.HERO,
    level: 1,
    exp: 0,
};
