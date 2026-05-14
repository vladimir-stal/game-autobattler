import {
    EHeroAttackType,
    EHeroClass,
    EItemAfterDuelBonusCondition,
    EItemAfterDuelBonusType,
    EItemBattleBonusType,
    EItemBonusType,
    EItemTargetType,
    ERoomType,
    ESelectCardHint,
    ESelectRoomHint,
    EStatusType,
    THeroAttribute,
    THeroBattleAttribute,
} from "../types";
import { MOBS_EN } from "./mobs_en";
import { SKILLS_EN } from "./skills_en";

type TSkillI18n = Record<number | "name" | "desc1" | "desc2" | "desc3", string>;

export interface Ii18n {
    attributes: {
        attribute: Record<THeroAttribute, string>;
        battleAttribute: Record<THeroBattleAttribute, string>;
        afterDuelBonus: Record<EItemAfterDuelBonusType, string>;
        bonusType: Record<EItemBattleBonusType, string>;
        itemBonusType: Record<EItemBonusType, string>;
        afterDuelBonusesText: string;
    };
    heroes: Record<EHeroClass, string>;
    units: {
        WEAKGOBLIN: string;
        GOBLIN: string;
        GOBLINSHAMAN: string;
        SKELETON: string;
        SKELETONWARRIOR: string;
        SKELETONMAGE: string;
        SOLDIER: string;
        GOLDGOBLIN1: string;
        PEASANT: string;
        WARRIORSUMMON: string;
        SHIELDWARRIORSUMMON: string;
        FIREFLY: string;
        WOLF: string;
        STRONGWOLF: string;
        PIRATE_1: string;
        PIRATE_2: string;
        BOSS_MINOTAUR: string;
    };
    mobs: {
        level1: Record<string, string>;
        level2: Record<string, string>;
        level3: Record<string, string>;
        level4: Record<string, string>;
        level5: Record<string, string>;
        level6: Record<string, string>;
        level7: Record<string, string>;
        level8: Record<string, string>;
    };
    totems: {
        basicWildTotem: string;
    };
    items: {
        coin: string;
        coin_description: string;
        scrollOfSkill: string;
        scrollOfSkill_description: string;
        peasantPitchfork: string;
        goblin_silver_coin: string;
        goblin_gold_coin: string;
        goblinBoneDagger: string;
        regen_mantle: string;
        spiritArmor: string;
        spiritSpear: string;
        // WEAPON
        // basic
        axe1: string;
        dagger1: string;
        mace1: string;
        musical1: string;
        scepter1: string;
        shield1: string;
        staff1: string;
        sword1: string;
        totem1: string;
        wand1: string;
        // COMMON
        // basic
        basic_ring_damage: string;
        basic_ring_regen: string;
        basic_gold_bag: string;
        basic_exp_ring: string;
        basic_heal: string;
        basic_hat: string;
        basic_jacket: string;
        basic_pants: string;
        basic_boots: string;
        // level 2
        // WEAPON
        wand22: string;
        wand21: string;
        totem22: string;
        totem21: string;
        shield22: string;
        shield21: string;
        scepter22: string;
        scepter21: string;
        musical21: string;
        staff22: string;
        staff21: string;
        sword22: string;
        sword21: string;
        mace22: string;
        mace21: string;
        dagger22: string;
        dagger21: string;
        axe22: string;
        axe21: string;
        // COMMON
        ring_heal2: string;
        ring_damage2: string;
        ring_regen2: string;
        gloves_war2: string;
        gloves_priest2: string;
        gloves_magic2: string;
        pants21: string;
        jacket21: string;
        boots21: string;
        hat21: string;
        hp_amulet: string;
        armor_amulet: string;
        // level 3
        magicBook31: string;
        magicSpear31: string;
        axe31: string;
        axe32: string;
        dagger31: string;
        dagger32: string;
        mace31: string;
        sword31: string;
        staff31: string;
        musical31: string;
        musical32: string;
        scepter31: string;
        shield31: string;
        shield32: string;
        totem31: string;
        totem32: string;
        wand31: string;
        // COMMON
        evasion_amulet: string;
        crit_amulet: string;
        summonerMantle3: string;
        // level 4
        // WEAPON
        totem41: string;
        // COMMON
        armorMassHp: string;
        helmetMassArmor: string;
        // level 5
        wand5: string;
        totem5: string;
        music5: string;
        staff5: string;
        dagger5: string;
        // COMMON
        weaponSlotSheath: string;
        weaponSlotSheath_description: string;
    };
    rooms: Partial<Record<ERoomType, string>>;
    roomDescriptions: Partial<Record<ERoomType, string>>;
    skills: {
        basic: Record<string, TSkillI18n>;
        level2: Record<string, TSkillI18n>;
        level3: Record<string, TSkillI18n>;
        level4: Record<string, TSkillI18n>;
        mobs: Record<string, TSkillI18n>;
        mc: Record<string, TSkillI18n>;
    };
    statuses: Record<EStatusType, string>;
    tags: Partial<Record<EHeroClass, string>>;
    ui: {
        BUY: string;
        TAKE: string;
        SELL: string;
        MOVE: string;
        REROLL: string;
        SELECT: string;
        SKIP: string;
        START: string;
        EQUIP: string;
        APPLY: string;
        GOLD: string;
        INCOME: string;
        DAY: string;
        HOUR: string;
        HP: string;
        NEXT_ROOM: string;
        UPGRADE: string;
        RESTART_GAME: string;
        PREPARE: string;
        NEXT: string;
        SELECT_UPGRADE: string;
        LEVEL: string;
        LOADING: string;
        LOADING_DESCR: string;
        DUEL: string;
        //
        SKILL: string;
        ITEM: string;
        HERO: string;
        EXP: string;
        EXP_PARTY: string;
        ATTRIBUTE: string;
        CHAINED_SKILL: string;
        ON_START_SKILL: string;
        NO_BA_SKILL: string;
        //
        WEAPON: string;
        COMMON: string;
        OFSTAT: string;
        //
        [EHeroAttackType.MAGIC]: string;
        [EHeroAttackType.PHYSICAL]: string;
        //
        DEAD: string;
        VICTORY: string;
        DEFEAT: string;
        // card select hints
        [ESelectCardHint.TAKE_ALL_REWARDS]: string;
        [ESelectCardHint.SELECT_SINGLE_HERO]: string;
        [ESelectCardHint.TAKE_REWARD]: string;
        [ESelectCardHint.TAKE_ITEM]: string;
        [ESelectCardHint.TAKE_SKILL]: string;
        [ESelectCardHint.SELECT_SINGLE]: string;
        [ESelectCardHint.SELECT_SINGLE_DUNGEON]: string;
        // room select hint
        [ESelectRoomHint.UPGRADE_SKILL_OR_ITEM]: string;
        [ESelectRoomHint.ENHANT_SKILL_CHAINED]: string;
        [ESelectRoomHint.UPGRADE_HERO_TO_MC]: string;
        // bonus condition
        [EItemAfterDuelBonusCondition.WON]: string;
        [EItemAfterDuelBonusCondition.LOST]: string;
        [EItemAfterDuelBonusCondition.IS_HERO]: string;
        [EItemAfterDuelBonusCondition.IS_MOB]: string;
        // bonus target
        [EItemTargetType.ALL_ALLIES]: string;

        mainMenu: {
            START_GAME: string;
        };
    };
}

export const i18n: Ii18n = {
    attributes: {
        attribute: {
            basicArmor: "Armor",
            basicAttack: "Basic attack",
            basicCritChance: "Crit chance",
            basicEvasionChance: "Evasion chance",
            basicHpRegen: "Regeneration",
            basicMagicPower: "Magic power",
            basicMaxHp: "Health",
            basicPhysicalPower: "Physical power",
        },
        battleAttribute: {
            armor: "armor",
            attack: "basic attack",
            critChance: "crit.chance",
            evasionChance: "evasion",
            hpRegen: "regeneration",
            magicPower: "magic power",
            maxHp: "health",
            physicalPower: "physical power",
            customNumber: "some number",
            hp: "current health",
        },
        afterDuelBonusesText: "Get after each duel:",
        afterDuelBonus: {
            EXP: "EXP",
            GOLD: "GOLD",
            STAT_ARMOR: "ARMOR",
            STAT_CRIT_CHANCE: "CRIT_CHANCE",
            STAT_EVAS_CHANCE: "EVAS_CHANCE",
            STAT_MAX_HP: "MAX_HP",
            STAT_MP: "MP",
            STAT_PP: "PP",
            STAT_HP_REGEN: "STAT_HP_REGEN",
            STAT_BASIC_ATTACK: "BASIC_ATTACK",
        },
        bonusType: {
            ADDITIONAL_BUFF_TARGET: "Buff skills get random\nally as an additional\ntarget",
            APPLY_STATUS_ON_BASIC_ATTACK: "Apply {2} [{1}]\non basic attacks",
            //APPLY_POISON_ON_HIT: "APPLY_POISON_ON_HIT",
            BASIC_ATTACK_TWICE: "Attacks twice but with\nstrength reduced to\n{1}%{2}",
            BASIC_ONCE_IN_TWO_TURNS: "BASIC_ONCE_IN_TWO_TURNS",
            CRIT_EVERY_TWO_TURNS: "CRIT_EVERY_TWO_TURNS",
            CRIT_INCR_NONCRIT_DECR: "Increase critical damage,\nbut reduce non-critical\ndamage by {1}{2}",
            CRIT_WITH_MAGIC: "Magical attack skills\ncan be critical",
            CRIT_WITH_PHYSICAL: "Physical attack skills\ncan be critical",
            CRIT_WITH_HEAL: "Healing skills can be\ncritical",
            HEAL_INCREASE: "Increase healing by {1}{2}",
            INCREASE_DAMAGE_TO_ARMOR: "Increase damage to armor\nby {1}{2}",
            INCREASE_DAMAGE_TO_BLEEDING: "Increase damage to bleeding\ntargets by {1}{2}",
            INCREASE_DAMAGE_TO_HP: "Increase damage to health\nby {1}{2}",
            INCREASE_DAMAGE_TO_POISONED: "Increase damage to poisoned\ntargets by {1}{2}",
            INCREASE_DAMAGE_TO_SUMMON: "Increase damage to summons\nby {1}{2}",
            INCREASE_MAGIC_DAMAGE: "Increase magic damage\nby {1}{2}",
            INCREASE_PHYSICAL_DAMAGE: "Increase physical damage\nby {1}{2}",
            INCREASE_SUMMON_ATTACK: "Increase summons' attack\nby {1}{2}",
            INCREASE_SUMMON_HP: "Increase summons' health\nby {1}{2}",
            INCREASE_TOTAL_DAMAGE: "Increase total damage\nby {1}%{2}",
            INCREASE_ARMOR_GAIN: "Increase amount of gained\narmor by {1}{2}",
            STATUS_BLEED_APPLY_INCREASE: "Increase applied bleed\nby {1}{2}",
            STATUS_BURN_APPLY_INCREASE: "Increase applied burn\nby {1}{2}",
            STATUS_POISON_APPLY_INCREASE: "Increase applied poison\nby {1}{2}",
            SUMMON_INCREASE_DAMAGE: "SUMMON_INCREASE_DAMAGE",
            TOTEM_INCREASE_VALUE: "Increase totem values\nby {1}{2}",
            CAST_SKILL_X_ROUND: "Once per combat, applies\neffect at the end of round",
            UNPACK_SKILL_IN_STASH: "Move this item into stash\nto unpack a skill",
        },
        itemBonusType: { ATTRIBUTE: "ATTRIBUTE", ITEM_WEAPON_SLOT: "ITEM_WEAPON_SLOT" },
    },
    heroes: {
        BARD: "Bard",
        DARK: "Dark",
        MAGIC: "Magic",
        MASTER: "Master",
        ORDER: "Order",
        PRIEST: "Priest",
        SUMMON: "Mystic",
        WARRIOR: "Warrior",
        WILD: "Wild",
        ALCHEMIST: "Alhemist",
        ASSASSIN: "Assasin",
        BARBARIAN: "Barbarian",
        BATTLEMAGE: "Battle Mage",
        BEASTMASTER: "Beast Master",
        BISHOP: "Bishop",
        BLACKKNIGHT: "Black Knight",
        BLADEDANCER: "Bladedancer",
        COMMANDER: "Commander",
        DOOMSAYER: "Doomsayer",
        DRUID: "Druid",
        DUELIST: "Duelist",
        EXORCIST: "Exorcist",
        FORESTSPIRIT: "Forest Spirit",
        GLADIATOR: "Gladiator",
        HERALD: "Herald",
        HUNTER: "Hunter",
        ILLUSIONIST: "Illusionist",
        INQUISITOR: "Inquisitor",
        KNIGHT: "Royal knight",
        JESTER: "Jester",
        MIMIC: "Mimic",
        MINSTREL: "Minstrel",
        MONK: "Monk",
        NECROMANCER: "Necromancer",
        ORACLE: "Oracle",
        PALADIN: "Paladin",
        PREDATOR: "Predator",
        RUNECASTER: "Runecaster",
        SAMURAI: "Samurai",
        SHADOWMASTER: "Shadow Master",
        SHAMAN: "Shaman",
        SORCERER: "Sorcerrer",
        WARLOCK: "Warlock",
        WITCH: "Witch",
        ZEALOT: "Zealot",
        //
        ALL: "ALL",
        MOB: "MOB",
    },
    units: {
        WEAKGOBLIN: "Weak goblin",
        GOBLIN: "Goblin",
        GOBLINSHAMAN: "Goblin shaman",
        SKELETON: "Skeleton",
        SKELETONWARRIOR: "Skeleton warrior",
        SKELETONMAGE: "Skeleton mage",
        SOLDIER: "Soldier",
        GOLDGOBLIN1: "Goblin merchant",
        PEASANT: "Peasant",
        WARRIORSUMMON: "Spirit warrior",
        SHIELDWARRIORSUMMON: "Spirit defender",
        FIREFLY: "Firefly",
        WOLF: "Wolf",
        STRONGWOLF: "Strong wolf",
        PIRATE_1: "Pirate",
        PIRATE_2: "Pirate captain",
        //
        BOSS_MINOTAUR: "Minotaur",
    },
    mobs: MOBS_EN,
    totems: {
        basicWildTotem: "Wild Totem",
    },
    items: {
        // WEAPON
        //basic
        axe1: "Rusty axe",
        dagger1: "Rusty dagger",
        mace1: "Rusty mace",
        musical1: "Broken lute",
        scepter1: "Rusty scepter",
        shield1: "Rusty shield",
        staff1: "Weak staff",
        sword1: "Rusty sword",
        totem1: "Weak totem",
        wand1: "Weak wand",
        //
        // COMMON
        // basic
        basic_ring_damage: "Broken damage ring",
        basic_ring_regen: "Broken regeneration ring",
        basic_gold_bag: "Old gold bag",
        basic_exp_ring: "Experience ring",
        basic_heal: "Broken priest ring",
        basic_hat: "Old hat",
        basic_jacket: "Old jacket",
        basic_pants: "Old pants",
        basic_boots: "Old boots",
        // level 2
        // WEAPON
        axe21: "Rending axe",
        axe22: "Mighty axe",
        dagger21: "Swift dagger",
        dagger22: "Mighty dagger",
        mace21: "Shattering mace",
        mace22: "Purifying mace",
        sword21: "Slaying sword",
        sword22: "Mighty sword",
        staff21: "Summoners staff",
        staff22: "Wizards staff",
        musical21: "Fine lute",
        scepter21: "Healers scepter",
        scepter22: "Purifying scepter",
        shield21: "Hard shield",
        shield22: "Champions shield",
        totem21: "Verdant totem",
        totem22: "Poisoners totem",
        wand21: "Swift wand",
        wand22: "Power wand",
        // COMMON
        ring_heal2: "Priest ring",
        ring_damage2: "Damage ring",
        ring_regen2: "Regeneration ring",
        gloves_war2: "Warrior gloves",
        gloves_priest2: "Priest gloves",
        gloves_magic2: "Mage gloves",
        pants21: "Pants 2.1",
        jacket21: "Jacket 2.1",
        boots21: "Boots 2.1",
        hat21: "Helmet 2.1",
        hp_amulet: "Health amulet",
        armor_amulet: "Armor amulet",
        // level 3
        magicBook31: "Tome of power",
        magicSpear31: "Spear of might",
        axe31: "Woodcutter's axe",
        axe32: "Bloody axe",
        dagger31: "Rogue knife",
        dagger32: "Masters dagger",
        mace31: "Hammer of heroes",
        sword31: "Elegant sword",
        staff31: "Fire staff",
        musical31: "Flute of vigor",
        musical32: "Tempest violin",
        scepter31: "Priests scepter",
        shield31: "Oak shield",
        shield32: "Bear shield",
        totem31: "Totem of totems",
        totem32: "Regeneration totem",
        wand31: "Wand of magic",
        // COMMON
        evasion_amulet: "Evasion amulet",
        crit_amulet: "Crit amulet",
        summonerMantle3: "Summoner cape",
        // level 4
        // WEAPON
        totem41: "Toxic totem",
        // COMMON
        armorMassHp: "Hp aura chest",
        helmetMassArmor: "Armor aura helmet",
        // level 5
        // WEAPON
        dagger5: "The Flurry",
        wand5: "The Thunder",
        totem5: "The Titan",
        music5: "The Chorus",
        staff5: "The Volcano",
        // COMMON
        weaponSlotSheath: "Weapon sheath",
        weaponSlotSheath_description: "Adds one more\nweapon slot",
        // mob items
        spiritSpear: "Spirit Spear",
        spiritArmor: "Spirit Armor",
        regen_mantle: "Mantle of regeneration",
        goblinBoneDagger: "Bone dagger",
        goblin_gold_coin: "Gold coin",
        goblin_silver_coin: "Silver coin",
        peasantPitchfork: "Pitchfork",
        // unique items
        coin: "The Coin",
        coin_description: "Collect to increase its\nprice, or sell it for ",
        scrollOfSkill: "Skill book of ",
        scrollOfSkill_description: "",
    },
    rooms: {
        //
        // SELL ROOMS
        //
        [ERoomType.HEROES_SELL]: "TAVERN",
        //
        [ERoomType.ITEM_CLASS_SELL]: "SPECIAL SHOP",
        [ERoomType.ITEM_WEAPON_CLASS_SELL]: "WEAPON STORE",
        [ERoomType.ITEM_WEAPON_SELL]: "ARSENAL",
        [ERoomType.ITEM_COMMON_SELL]: "BLACKSMITH",
        //
        [ERoomType.SKILLS_CLASS_SELL]: "MAGIC STORE",
        [ERoomType.SKILLS_SELL]: "MAGIC SHOP",
        [ERoomType.UNIT_SELL]: "MERCENARIES",
        [ERoomType.ITEM_LEGEND_SELL]: "LEGEND ITEMS",
        //
        // CHOISE ROOMS
        //
        [ERoomType.ATTRIBUTE_SELECT]: "EXERCISES",
        [ERoomType.EXP_ALL]: "EXP_ALL",
        [ERoomType.EXP_SELECT]: "TRAINING CAMP",
        //
        [ERoomType.ITEM_SELECT]: "BLACK MARKET",
        [ERoomType.MIXED_CLASS_SELECT]: "SPECIALIST",
        [ERoomType.SKILLS_SELL_MIXED_CLASSES]: "MIXED SKILLS",
        //
        // RANDOM ROOMS
        //
        [ERoomType.ATTRIBUTE_RANDOM]: "EXERCISE",
        [ERoomType.EXP_SINGLE]: "TRAINING",
        [ERoomType.GOLD]: "FIND COINS",
        [ERoomType.INCOME]: "INCOME",
        [ERoomType.ITEM_CLASS_RANDOM]: "STEAL ITEM",
        [ERoomType.ITEM_RANDOM]: "ITEM",
        [ERoomType.ITEM_COMMON_RANDOM]: "GET ARMOR",
        [ERoomType.ITEM_WEAPON_BASIC_RANDOM]: "LEGACY",
        [ERoomType.ITEM_WEAPON_CLASS_RANDOM]: "STEAL WEAPON",
        [ERoomType.SKILL_CLASS_RANDOM]: "MAGIC SCHOOL",
        [ERoomType.SKILL_RANDOM]: "MAGIC TRICK",
        [ERoomType.UNIT_RANDOM]: "FOLLOWER",
        //
        // SPECIAL ROOMS
        //
        [ERoomType.DUEL]: "DUEL",
        [ERoomType.MOBS]: "MOBS",
        [ERoomType.BOSS]: "DUNGEON BOSS",
        [ERoomType.TRIPLE_SET]: "DUNGEON",
        [ERoomType.SKILLS_SELL_ENHANCED]: "ENHANCED SKILLS",
        [ERoomType.UPGRADE_SKILL_OR_ITEM]: "UPGRADE",
        [ERoomType.ENCHANCE_SKILL_CHAINED]: "ENHANCE",
        //
    },
    roomDescriptions: {
        [ERoomType.SKILLS_SELL_MIXED_CLASSES]: "BUY MIXED SKILLS",
    },
    skills: SKILLS_EN,
    statuses: {
        BLEED: "bleed",
        BURN: "burn",
        POISON: "poison",
        SHOCK: "shock",
        RADIATE: "radiate",
    },
    tags: {
        BARD: "BARD",
        DARK: "DARK",
        MAGIC: "MAGIC",
        MASTER: "MASTER",
        ORDER: "ORDER",
        PRIEST: "HOLY",
        SUMMON: "MYSTIC",
        WARRIOR: "WARRIOR",
        WILD: "WILD",
        MOB: "MOB",
        //
        ALL: "ALL",
    },
    ui: {
        BUY: "BUY",
        TAKE: "TAKE",
        REROLL: "REROLL",
        SELL: "SELL",
        START: "START",
        MOVE: "MOVE",
        SELECT: "SELECT",
        SKIP: "SKIP",
        EQUIP: "EQUIP",
        APPLY: "APPLY",
        GOLD: "GOLD",
        INCOME: "INCOME",
        DAY: "DAY",
        HOUR: "HOUR",
        HP: "HP",
        NEXT_ROOM: "NEXT ROOM",
        UPGRADE: "UPGRADE",
        RESTART_GAME: "RESTART GAME",
        PREPARE: "PREPARE",
        NEXT: "NEXT",
        SELECT_UPGRADE: "SELECT UPGRADE",
        LEVEL: "Level",
        LOADING: "LOADING",
        LOADING_DESCR: "Please, wait. Resource loading can take several minutes",
        DUEL: "DUEL",
        //
        WEAPON: "weapon",
        COMMON: "common",
        OFSTAT: "of",
        //
        [EHeroAttackType.MAGIC]: "magic",
        [EHeroAttackType.PHYSICAL]: "phys",
        //
        ATTRIBUTE: "ATTRIBUTE",
        SKILL: "SKILL",
        ITEM: "ITEM",
        HERO: "HERO",
        EXP: "EXP",
        EXP_PARTY: "EXP ALL",
        CHAINED_SKILL: "CHAINED SKILL",
        ON_START_SKILL: "DUEL START SKILL",
        NO_BA_SKILL: "Not followed by basic attack",
        //
        DEAD: "DEAD",
        VICTORY: "VICTORY",
        DEFEAT: "DEFEAT",
        //
        //
        // HINTS
        [ESelectCardHint.TAKE_ALL_REWARDS]: "TAKE ALL REWARDS",
        [ESelectCardHint.SELECT_SINGLE_HERO]: "SELECT SINGLE HERO",
        [ESelectCardHint.TAKE_REWARD]: "TAKE REWARD",
        [ESelectCardHint.TAKE_ITEM]: "TAKE ITEM",
        [ESelectCardHint.TAKE_SKILL]: "TAKE SKILL",
        [ESelectCardHint.SELECT_SINGLE]: "SELECT ONE OPTION",
        SELECT_SINGLE_DUNGEON: "SELECT A DUNGEON",
        //
        [ESelectRoomHint.UPGRADE_SKILL_OR_ITEM]: "PLACE ITEM OR SKILL TO UPGRADE TO THE NEXT LEVEL",
        [ESelectRoomHint.ENHANT_SKILL_CHAINED]: "PLACE SKILL TO ENCHANT WITH CHAINED",
        [ESelectRoomHint.UPGRADE_HERO_TO_MC]: "SELECT MULTICLASS",
        //
        [EItemAfterDuelBonusCondition.WON]: "WIN",
        [EItemAfterDuelBonusCondition.LOST]: "LOSE",
        [EItemAfterDuelBonusCondition.IS_HERO]: "HERO",
        [EItemAfterDuelBonusCondition.IS_MOB]: "NON HERO",
        //
        [EItemTargetType.ALL_ALLIES]: "for all",
        mainMenu: {
            START_GAME: "START GAME",
        },
    },
};
