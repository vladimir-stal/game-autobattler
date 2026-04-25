import { CardSlot } from "./game/components/CardSlot";

export enum EScene {
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    GAME = "GAME",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
    RESOURCE_LOAD = "RESOURCE_LOAD",
}

// Status of the game same for all players
export enum ERoomStatus {
    GAME_CREATED = "GAME_CREATED",
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
    PLATFORM_LOADED = "PLATFORM_LOADED", // platform scene loaded for all players
}

// Status of the game for a specific player
export enum EGameStatus {
    GAME_CREATED = "GAME_CREATED",
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
}

export enum AnimationType {
    // MENU / LOBBY
    LOBBY_LOADING = "LOBBY_LOADING",
    LOBBY_FOX_SMILE = "LOBBY_FOX_SMILE",
    // COMMON
    NONE = "NONE",
    // UNITS
    // COMMON FOR ALL UNITS
    UNIT_ATTACK = "UNIT_ATTACK",
    // BASIC HEROES
    //
    // BARD
    BARD_IDLE = "BARD_IDLE",
    BARD_IDLE_BATTLE = "BARD_IDLE_BATTLE",
    BARD_ATTACK = "BARD_ATTACK",
    BARD_DEFEATED = "BARD_DEFEATED",
    BARD_BUFF = "BARD_BUFF",
    BARD_HURT = "BARD_HURT",
    //
    // DARK
    //
    DARK_IDLE = "DARK_IDLE",
    DARK_IDLE_BATTLE = "DARK_IDLE_BATTLE",
    DARK_ATTACK = "DARK_ATTACK",
    DARK_SPELL = "DARK_SPELL",
    DARK_DEFEATED = "DARK_DEFEATED",
    DARK_HURT = "DARK_HURT",
    //
    // MAGIC
    //
    MAGIC_IDLE = "MAGIC_IDLE",
    MAGIC_IDLE_BATTLE = "MAGIC_IDLE_BATTLE",
    MAGIC_ATTACK = "MAGIC_ATTACK",
    MAGIC_ATTACK_SPELL = "MAGIC_ATTACK_SPELL",
    MAGIC_DEFEATED = "MAGIC_DEFEATED",
    MAGIC_HURT = "MAGIC_HURT",
    //
    // MASTER
    //
    MASTER_IDLE = "MASTER_IDLE",
    MASTER_IDLE_BATTLE = "MASTER_IDLE_BATTLE",
    MASTER_ATTACK = "MASTER_ATTACK",
    MASTER_ATTACK_2 = "MASTER_ATTACK_2",
    MASTER_DEFEATED = "MASTER_DEFEATED",
    MASTER_HURT = "MASTER_HURT",
    MASTER_BUFF = "MASTER_BUFF",
    //
    // ORDER
    //
    ORDER_IDLE = "ORDER_IDLE",
    ORDER_IDLE_BATTLE = "ORDER_IDLE_BATTLE",
    ORDER_HURT = "ORDER_HURT",
    ORDER_ATTACK = "ORDER_ATTACK",
    ORDER_ATTACK_2 = "ORDER_ATTACK_2",
    ORDER_SHIELD_BUFF = "ORDER_SHIELD_BUFF",
    ORDER_DEFEATED = "ORDER_DEFEATED",
    //
    // PRIEST
    //
    PRIEST_IDLE = "PRIEST_IDLE",
    PRIEST_IDLE_BATTLE = "PRIEST_IDLE_BATTLE",
    PRIEST_ATTACK = "PRIEST_ATTACK",
    PRIEST_ATTACK_2 = "PRIEST_ATTACK_2",
    PRIEST_HEAL = "PRIEST_HEAL",
    PRIEST_DEFEATED = "PRIEST_DEFEATED",
    PRIEST_HURT = "PRIEST_HURT",
    //
    // SUMMON
    //
    SUMMON_IDLE = "SUMMON_IDLE",
    SUMMON_IDLE_BATTLE = "SUMMON_IDLE_BATTLE",
    SUMMON_ATTACK = "SUMMON_ATTACK",
    SUMMON_DEFEATED = "SUMMON_DEFEATED",
    SUMMON_SPELL = "SUMMON_SPELL",
    SUMMON_HURT = "SUMMON_HURT",
    //
    // WARRIOR
    //
    WARRIOR_IDLE = "WARRIOR_IDLE",
    WARRIOR_IDLE_BATTLE = "WARRIOR_IDLE_BATTLE",
    WARRIOR_ATTACK = "WARRIOR_ATTACK",
    WARRIOR_BUFF_REGEN = "WARRIOR_BUFF_REGEN",
    WARRIOR_DEFEATED = "WARRIOR_DEFEATED",
    WARRIOR_HURT = "WARRIOR_HURT",
    //
    // WILD
    //
    WILD_IDLE = "WILD_IDLE",
    WILD_IDLE_BATTLE = "WILD_IDLE_BATTLE",
    WILD_ATTACK = "WILD_ATTACK",
    WILD_DEFEATED = "WILD_DEFEATED",
    WILD_BUFF = "WILD_BUFF",
    WILD_HURT = "WILD_HURT",
    //
    //
    // MC HEROES ///////////////////////////////////////////////// MC HEROES /////////////////////////////////////////////
    //
    // ASSASSIN
    ASSASSIN_IDLE = "ASSASSIN_IDLE",
    ASSASSIN_BATTLE_IDLE = "ASSASSIN_BATTLE_IDLE",
    ASSASSIN_ATTACK = "ASSASSIN_ATTACK",
    //
    BATTLEMAGE_IDLE = "BATTLEMAGE_IDLE",
    BATTLEMAGE_BATTLE_IDLE = "BATTLEMAGE_BATTLE_IDLE",
    BATTLEMAGE_ATTACK = "BATTLEMAGE_ATTACK",
    // BARBARIAN
    BARBARIAN_IDLE = "BARBARIAN_IDLE",
    BARBARIAN_ATTACK = "BARBARIAN_ATTACK",
    BARBARIAN_BATTLE_IDLE = "BARBARIAN_BATTLE_IDLE",
    //
    BLADEDANCER_IDLE = "BLADEDANCER_IDLE",
    BLADEDANCER_BATTLE_IDLE = "BLADEDANCER_BATTLE_IDLE",
    BLADEDANCER_ATTACK = "BLADEDANCER_ATTACK",
    // COMMADER
    COMMANDER_IDLE = "COMMANDER_IDLE",
    COMMANDER_BATTLE_IDLE = "COMMANDER_BATTLE_IDLE",
    COMMANDER_ATTACK = "COMMANDER_ATTACK",
    // HUNTER
    HUNTER_IDLE = "HUNTER_IDLE",
    HUNTER_BATTLE_IDLE = "HUNTER_BATTLE_IDLE",
    HUNTER_ATTACK = "HUNTER_ATTACK",
    // JESTER
    JESTER_IDLE = "JESTER_IDLE",
    JESTER_BATTLE_IDLE = "JESTER_BATTLE_IDLE",
    JESTER_ATTACK = "JESTER_ATTACK",
    // NECROMANCER
    NECROMANCER_IDLE = "NECROMANCER_IDLE",
    NECROMANCER_BATTLE_IDLE = "NECROMANCER_BATTLE_IDLE",
    NECROMANCER_ATTACK = "NECROMANCER_ATTACK",
    // PALADIN
    PALADIN_IDLE = "PALADIN_IDLE",
    PALADIN_BATTLE_IDLE = "PALADIN_BATTLE_IDLE",
    PALADIN_ATTACK = "PALADIN_ATTACK",
    PALADIN_MAGIC_SHIELD = "PALADIN_MAGIC_SHIELD",
    // PREDATOR
    PREDATOR_IDLE = "PREDATOR_IDLE",
    PREDATOR_BATTLE_IDLE = "PREDATOR_BATTLE_IDLE",
    // RUNECASTER
    RUNECASTER_IDLE = "RUNECASTER_IDLE",
    RUNECASTER_BATTLE_IDLE = "RUNECASTER_BATTLE_IDLE",
    // SAMURAI
    SAMURAI_IDLE = "SAMURAI_IDLE",
    SAMURAI_BATTLE_IDLE = "SAMURAI_BATTLE_IDLE",
    SAMURAI_ATTACK = "SAMURAI_ATTACK",
    SAMURAI_ATTACK_2 = "SAMURAI_ATTACK_2",
    // SHAMAN
    SHAMAN_IDLE = "SHAMAN_IDLE",
    //SHAMAN_ATTACK = "SHAMAN_ATTACK",
    // SORCERER
    SORCERER_IDLE = "SORCERER_IDLE",
    // WARLOCK
    WARLOCK_IDLE = "WARLOCK_IDLE",
    //
    // LEADER
    LEADER_1_IDLE = "LEADER_1_IDLE",
    // MOBS
    MOB_SKELETON_BATTLE_IDLE = "MOB_SKELETON_BATTLE_IDLE",
    MOB_SKELETON_ATTACK = "MOB_SKELETON_ATTACK",
    MOB_GOBLIN_1_BATTLE_IDLE = "MOB_GOBLIN_1_BATTLE_IDLE",
    MOB_GOBLIN_1_ATTACK = "MOB_GOBLIN_1_ATTACK",
    MOB_GOBLIN_2_BATTLE_IDLE = "MOB_GOBLIN_2_BATTLE_IDLE",
    MOB_GOBLIN_2_ATTACK = "MOB_GOBLIN_2_ATTACK",
    //
    MOB_GOBLIN_SHAMAN_BATTLE_IDLE = "MOB_GOBLIN_SHAMAN_BATTLE_IDLE",
    MOB_GOBLIN_SHAMAN_ATTACK = "MOB_GOBLIN_SHAMAN_ATTACK",
    MOB_GOBLIN_SHAMAN_DEFEATED = "MOB_GOBLIN_SHAMAN_DEFEATED",
    MOB_GOBLIN_SHAMAN_SPELL = "MOB_GOBLIN_SHAMAN_SPELL",
    //
    MOB_PEASANT_BATTLE_IDLE = "MOB_PEASANT_BATTLE_IDLE",
    MOB_PEASANT_ATTACK = "MOB_PEASANT_ATTACK",
    //
    MOB_FIREFLY_BATTLE_IDLE = "MOB_FIREFLY_BATTLE_IDLE",
    MOB_FIREFLY_ATTACK = "MOB_FIREFLY_ATTACK",
    MOB_FIREFLY_DEFEATED = "MOB_FIREFLY_DEFEATED",
    MOB_FIREFLY_APPEAR = "MOB_FIREFLY_APPEAR",
    //
    MOB_SUMMONKNIGHT_BATTLE_IDLE = "MOB_SUMMONKNIGHT_BATTLE_IDLE",
    MOB_SUMMONKNIGHT_ATTACK = "MOB_SUMMONKNIGHT_ATTACK",
    //
    MOB_PIRATE_1_BATTLE_IDLE = "MOB_PIRATE_1_BATTLE_IDLE",
    MOB_PIRATE_1_ATTACK = "MOB_PIRATE_1_ATTACK",
    MOB_PIRATE_2_BATTLE_IDLE = "MOB_PIRATE_2_BATTLE_IDLE",
    MOB_PIRATE_2_ATTACK = "MOB_PIRATE_2_ATTACK",
    // BOSSES
    // MINOTAUR
    BOSS_MINOTAUR_IDLE = "BOSS_MINOTAUR_IDLE",
    BOSS_MINOTAUR_ATTACK = "BOSS_MINOTAUR_ATTACK",
    BOSS_MINOTAUR_STOMP = "BOSS_MINOTAUR_STOMP",
    BOSS_MINOTAUR_SPELL = "BOSS_MINOTAUR_SPELL",
    BOSS_MINOTAUR_HURT = "BOSS_MINOTAUR_HURT",
    //
    // TOTEMS
    TOTEM_WILD_1_IDLE = "TOTEM_WILD_1_IDLE",
}

export enum EEffectAnimationType {
    EFFECT_LIGHTNING_1 = "EFFECT_LIGHTNING_1",
    // BASIC
    EFFECT_BARD_ATTACK = "EFFECT_BARD_ATTACK",
    EFFECT_DARK_ATTACK = "EFFECT_DARK_ATTACK",
    EFFECT_MAGIC_ATTACK = "EFFECT_MAGIC_ATTACK",
    EFFECT_MASTER_ATTACK_2 = "EFFECT_MASTER_ATTACK_2",
    EFFECT_ORDER_ATTACK_2 = "EFFECT_ORDER_ATTACK_2",
    EFFECT_PRIEST_ATTACK = "EFFECT_PRIEST_ATTACK",
    EFFECT_PRIEST_ATTACK_2 = "EFFECT_PRIEST_ATTACK_2",
    EFFECT_PRIEST_HEAL = "EFFECT_PRIEST_HEAL",
    EFFECT_WARRIOR_ATTACK_2 = "EFFECT_WARRIOR_ATTACK_2",
    EFFECT_WILD_ATTACK = "EFFECT_WILD_ATTACK",
    // MC
    EFFECT_SAMURAI_ATTACK_2 = "EFFECT_SAMURAI_ATTACK_2",
    // UI
    EFFECT_UI_BUFF_0 = "EFFECT_UI_BUFF_0",
    EFFECT_UI_BUFF_2 = "EFFECT_UI_BUFF_2",
    EFFECT_UI_STATUS_SHOCK_0 = "EFFECT_UI_STATUS_SHOCK_0",
}

export interface Player {
    sessionId: string;
    userId: string;
    avatarUri: string;
    name: string;
    talking: boolean;
    isHost: boolean;
}

export interface LobbyPlayer {
    userId: string;
    name: string;
    isReady: boolean;
    //characterType: ECharacterType;
    isHost: boolean;
    isMe: boolean;
    isBot: boolean;
}

export interface IGuildsMembersRead {
    roles: string[];
    nick: string | null;
    avatar: string | null;
    premium_since: string | null;
    joined_at: string;
    is_pending: boolean;
    pending: boolean;
    communication_disabled_until: string | null;
    user: {
        id: string;
        username: string;
        avatar: string | null;
        discriminator: string;
        public_flags: number;
    };
    mute: boolean;
    deaf: boolean;
}

/////  ENUMS  /////////////////////////////////////////////////////////////////////////////////////////////////////////

//BUFFS = "BUFFS",
export enum ERoomType {
    ATTRIBUTE_RANDOM = "ATTRIBUTE_RANDOM",
    ATTRIBUTE_SELECT = "ATTRIBUTE_SELECT",
    BOSS = "BOSS",
    DUEL = "DUEL",
    EXP_ALL = "EXP_ALL",
    EXP_SELECT = "EXP_SELECT",
    EXP_SINGLE = "EXP_SINGLE",
    ENCHANCE_SKILL_CHAINED = "ENCHANCE_SKILL_CHAINED", // add <chained> to skill >>> TODO: IMPLEMENT
    ENCHANCE_SKILL_ONSTART = "ENCHANCE_SKILL_ONSTART", // add <onStart> to skill >>> TODO: IMPLEMENT
    GOLD = "GOLD", // get gold
    HEROES_SELL = "HEROES_SELL", // buy a basic class hero
    INCOME = "INCOME", // increase gold income
    ITEM_SELECT = "ITEM_SELECT", // buy one of 3 random items of all items available for current day
    ITEM_CLASS_RANDOM = "ITEM_CLASS_RANDOM", // get random item for specific hero classes
    ITEM_RANDOM = "ITEM_RANDOM", // get random item (common or weapon)
    ITEM_COMMON_RANDOM = "ITEM_COMMON_RANDOM",
    ITEM_WEAPON_BASIC_RANDOM = "ITEM_WEAPON_BASIC_RANDOM", // get random basic weapon for hero classes player ownes
    ITEM_WEAPON_SELL = "ITEM_WEAPON_SELL", // buy from 3 random weapons
    ITEM_COMMON_SELL = "ITEM_COMMON_SELL", // buy from 3 random common items
    ITEM_WEAPON_CLASS_SELL = "ITEM_WEAPON_CLASS_SELL", // buy one of 3 random weapons for specific hero classes
    ITEM_WEAPON_CLASS_RANDOM = "ITEM_WEAPON_CLASS_RANDOM", // get random weapon for specific hero classes
    ITEM_CLASS_SELL = "ITEM_CLASS_SELL", // buy one of 3 random items for specific hero classes
    ITEMS_SELL = "ITEMS_SELL", // buy one of 3 random items (common/weapon or just common ??)
    ITEM_LEGEND_SELL = "ITEM_LEGEND_SELL",
    MIXED_CLASS_SELECT = "MIXED_CLASS_SELECT", // select 3 item/skill from one basic class
    MOBS = "MOBS", // fight vs mobs
    MOBS_REWARDS = "MOBS_REWARDS",
    SKILLS_SELL = "SKILLS_SELL", // buy 3 random skills
    SKILLS_SELL_MIXED_CLASSES = "SKILLS_SELL_MIXED_CLASSES", // buy 3 random skills for multiple basic classes
    SKILLS_SELL_ENHANCED = "SKILLS_SELL_ENHANCED", // buy 1 of 3 random skills with chain or onStart
    SKILLS_CLASS_SELL = "SKILLS_CLASS_SELL", // buy one of 3 random skills for specific hero classes
    SKILL_CLASS_RANDOM = "SKILL_CLASS_RANDOM", // get random skill for specific hero classes
    SKILL_RANDOM = "SKILL_RANDOM", // get random skill

    TRIPLE_SET = "TRIPLE_SET", // get 3 free random items from [commonItem, weapon, skill, gold, exp, attr]
    UNIT_RANDOM = "UNIT_RANDOM",
    UNIT_SELL = "UNIT_SELL",
    UPGRADE_SKILL_OR_ITEM = "UPGRADE_SKILL_OR_ITEM", // allow to upgrade item or a skill to the next level
    //
    // FOR_TESTING
    GIVE_TEST_ITEM = "GIVE_TEST_ITEM",
    GIVE_TEST_ITEM_2 = "GIVE_TEST_ITEM_2",
}

export enum ECardType {
    ATTRIBUTE = "ATTRIBUTE",
    //BUFF = "BUFF",
    EXP = "EXP",
    EXP_PARTY = "EXP_PARTY",
    GOLD = "GOLD",
    //HEAL = "HEAL",
    ITEM = "ITEM",
    MOBS = "MOBS",
    SKILL = "SKILL",
    UNIT = "UNIT",
}

export enum ESelectCardHint {
    TAKE_ITEM = "TAKE_ITEM",
    TAKE_SKILL = "TAKE_SKILL",
    TAKE_REWARD = "TAKE_REWARD",
    TAKE_ALL_REWARDS = "TAKE_ALL_REWARDS",
    SELECT_SINGLE = "SELECT_SINGLE",
    SELECT_SINGLE_HERO = "SELECT_SINGLE_HERO",
    SELECT_SINGLE_DUNGEON = "SELECT_SINGLE_DUNGEON",
}

export enum ESelectRoomHint {
    UPGRADE_SKILL_OR_ITEM = "UPGRADE_SKILL_OR_ITEM",
    ENHANT_SKILL_CHAINED = "ENHANT_SKILL_CHAINED",
    UPGRADE_HERO_TO_MC = "UPGRADE_HERO_TO_MC",
}

export enum EHeroClassType {
    BASIC = "BASIC",
    MULTI = "MULTI",
}

export enum EHeroClass {
    ALL = "ALL",
    MOB = "MOB",
    // basic
    BARD = "BARD",
    //CHAOS = "CHAOS", coming soon
    DARK = "DARK",
    MAGIC = "MAGIC",
    MASTER = "MASTER",
    ORDER = "ORDER",
    PRIEST = "PRIEST",
    SUMMON = "SUMMON",
    //TRICK = "TRICK", coming soon
    WILD = "WILD",
    WARRIOR = "WARRIOR",
    // multicalsses
    ALCHEMIST = "ALCHEMIST",
    ASSASSIN = "ASSASSIN",
    BARBARIAN = "BARBARIAN",
    BATTLE_MAGE = "BATTLE_MAGE",
    BEAST_MASTER = "BEAST_MASTER",
    BISHOP = "BISHOP",
    BLACK_KNIGHT = "BLACK_KNIGHT",
    BLADEDANCER = "BLADEDANCER",
    COMMANDER = "COMMANDER",
    DOOMSAYER = "DOOMSAYER",
    DRUID = "DRUID",
    DUELIST = "DUELIST",
    EXORCIST = "EXORCIST",
    FOREST_SPIRIT = "FOREST_SPIRIT",
    GLADIATOR = "GLADIATOR",
    ILLUSIONIST = "ILLUSIONIST",
    HERALD = "HERALD",
    HUNTER = "HUNTER",
    INQUISITOR = "INQUISITOR",
    KNIGHT = "KNIGHT",
    MAGIC_BARD = "MAGIC_BARD",
    MINSTREL = "MINSTREL",
    MIMIC = "MIMIC",
    MONK = "MONK",
    NECROMANCER = "NECROMANCER",
    ORACLE = "ORACLE",
    PALADIN = "PALADIN",
    PREDATOR = "PREDATOR",
    RUNECASTER = "RUNECASTER",
    SAMURAI = "SAMURAI",
    SHADOW_MASTER = "SHADOW_MASTER",
    SHAMAN = "SHAMAN",
    SORCERER = "SORCERER",
    WARLOCK = "WARLOCK",
    WITCH = "WITCH",
    ZEALOT = "ZEALOT",
}

export enum IMobRewardType {
    GOLD = "GOLD",
    ITEM = "ITEM",
    UNIT = "UNIT",
}

export enum EUnitType {
    HERO = "HERO",
    UNIT = "UNIT",
}

export enum EHeroAttackType {
    MAGIC = "MAGIC",
    PHYSICAL = "PHYSICAL",
}

export enum EItemType {
    COMMON = "COMMON",
    WEAPON = "WEAPON",
}

export enum EWeaponItemType {
    AXE = "AXE", // master, wild
    DAGGER = "DAGGER", // any
    MACE = "MACE", // order, priest
    MUSICAL = "MUSICAL", // bard
    SCEPTER = "SCEPTER", // summon, priest
    SHIELD = "SHIELD", // warrior, order
    STAFF = "STAFF", // magic, summon
    SWORD = "SWORD", // warrior, master
    TOTEM = "TOTEM", // wild, dark
    WAND = "WAND", // dark, magic
    //
    BOOK = "BOOK",
    SPEAR = "SPEAR", // any
}

/**
 * @constant ATTRIBUTE Item increases hero attribute
 */
export enum EItemBonusType {
    ATTRIBUTE = "ATTRIBUTE",
    ITEM_WEAPON_SLOT = "ITEM_WEAPON_SLOT",
}

export enum EItemAfterDuelBonusCondition {
    WON = "WON",
    LOST = "LOST",
    IS_HERO = "IS_HERO",
    IS_MOB = "IS_MOB",
}

export enum EItemAfterDuelBonusType {
    GOLD = "GOLD",
    // INCOME?
    EXP = "EXP",
    STAT_ARMOR = "STAT_ARMOR",
    STAT_MAX_HP = "STAT_MAX_HP",
    STAT_HP_REGEN = "STAT_HP_REGEN",
    STAT_MP = "STAT_MP",
    STAT_PP = "STAT_PP",
    STAT_CRIT_CHANCE = "STAT_CRIT_CHANCE",
    STAT_EVAS_CHANCE = "STAT_EVAS_CHANCE",
    STAT_BASIC_ATTACK = "STAT_BASIC_ATTACK",
}

/**
 * @constant CRIT_INCR_NONCRIT_DECR Increase critical attack value, but decrease noncrit attack value
 * @constant INCREASE_SUMMON_ATTACK Increases basic attack damage of your summons
 * @constant INCREASE_SUMMON_HP Increases hp of your summons
 */
export enum EItemBattleBonusType {
    ADDITIONAL_BUFF_TARGET = "ADDITIONAL_BUFF_TARGET", // add one additional target when appliing single target buff (except initial target)
    //APPLY_POISON_ON_HIT = "APPLY_POISON_ON_HIT",
    APPLY_STATUS_ON_BASIC_ATTACK = "APPLY_STATUS_ON_BASIC_ATTACK",
    CRIT_INCR_NONCRIT_DECR = "CRIT_INCR_NONCRIT_DECR", // TODO: implement
    CRIT_WITH_MAGIC = "CRIT_WITH_MAGIC", // allows crit with magic attacks
    HEAL_INCREASE = "HEAL_INCREASE",
    INCREASE_MAGIC_DAMAGE = "INCREASE_MAGIC_DAMAGE",
    INCREASE_PHYSICAL_DAMAGE = "INCREASE_PHYSICAL_DAMAGE",
    INCREASE_DAMAGE_TO_ARMOR = "INCREASE_DAMAGE_TO_ARMOR",
    INCREASE_DAMAGE_TO_HP = "INCREASE_DAMAGE_TO_HP",
    INCREASE_DAMAGE_TO_BLEEDING = "INCREASE_DAMAGE_TO_BLEEDING",
    INCREASE_DAMAGE_TO_POISONED = "INCREASE_DAMAGE_TO_POISONED",
    INCREASE_DAMAGE_TO_SUMMON = "INCREASE_DAMAGE_TO_SUMMON",
    INCREASE_SUMMON_ATTACK = "INCREASE_SUMMON_ATTACK",
    INCREASE_SUMMON_HP = "INCREASE_SUMMON_HP",
    INCREASE_TOTAL_DAMAGE_FROM_HP = "INCREASE_TOTAL_DAMAGE_FROM_HP",
    BASIC_ATTACK_TWICE = "BASIC_ATTACK_TWICE",
    BASIC_ONCE_IN_TWO_TURNS = "BASIC_ONCE_IN_TWO_TURNS", // TODO: implement
    SUMMON_INCREASE_DAMAGE = "SUMMON_INCREASE_DAMAGE", // TODO: implement
    TOTEM_INCREASE_VALUE = "TOTEM_INCREASE_VALUE", // TODO: implement
    CRIT_EVERY_TWO_TURNS = "CRIT_EVERY_TWO_TURNS", // TODO: implement
    STATUS_BURN_APPLY_INCREASE = "STATUS_BURN_APPLY_INCREASE",
    STATUS_POISON_APPLY_INCREASE = "STATUS_POISON_APPLY_INCREASE",
    STATUS_BLEED_APPLY_INCREASE = "STATUS_BLEED_APPLY_INCREASE",
    CAST_SKILL_X_ROUND = "CAST_SKILL_X_ROUND",
}

export enum EBattleActionType {
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE",
    ATTACK = "ATTACK",
    BUFF = "BUFF",
    //BUFF_INCREASED = "BUFF_INCREASED",
    BUFF_REMOVED = "BUFF_REMOVED",
    BUFF_VALUE_CHANGED = "BUFF_VALUE_CHANGED",
    DEATH = "DEATH",
    DEBUFF = "DEBUFF",
    DEBUFF_REMOVE = "DEBUFF_REMOVE",
    HEAL = "HEAL",
    PEFORM_SKILLSET = "PEFORM_SKILLSET",
    REGEN_HP = "REGEN_HP",
    ROUND_END = "ROUND_END",
    ROUND_START = "ROUND_START",
    SKILL_CHAIN = "SKILL_CHAIN",
    STATUS_APPLY = "STATUS_APPLY",
    STATUS_REMOVE = "STATUS_REMOVE",
    SUMMON = "SUMMON",
    SUMMON_REMOVE = "SUMMON_REMOVE",
    SWAP_HP = "SWAP_HP",
    TAKE_ARMOR_DAMAGE = "TAKE_ARMOR_DAMAGE",
    TAKE_DAMAGE = "TAKE_DAMAGE",
    TOTEM_PLACE = "TOTEM_PLACE",
    TOTEM_REMOVE = "TOTEM_REMOVE",
    TOTEM_INCREASE_VALUE = "TOTEM_INCREASE_VALUE",
    TURN_START = "TURN_START",
    BATTLE_TRIGGER = "BATTLE_TRIGGER",
}

export enum EHeroSkillType {
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE",
    ATTACK = "ATTACK",
    BUFF = "BUFF",
    BUFF_INCREASE_VALUE = "BUFF_INCREASE_VALUE", // increase the value of a buff
    BUFF_COPY = "BUFF_COPY", // copy random buff from buffed ally to random ally
    BUFF_REMOVE = "BUFF_REMOVE", // remove one(2,3) random buff from enemy target
    DEBUFF = "DEBUFF",
    DEBUFF_REMOVE = "DEBUFF_REMOVE", // remove one(2,3) random debuff from ally target
    HEAL = "HEAL",
    NONE = "NONE", // use this skill type to trigger basic attack without a skill, or to trigger no skill and no basic attack
    STATUS_APPLY = "STATUS_APPLY", // apply a status to target
    STATUS_REMOVE = "STATUS_REMOVE", // remove one random status from target
    SUMMON = "SUMMON", // summon a unit to the battle
    SUMMON_REMOVE = "SUMMON_REMOVE", // remove one random summon from an enemy unit
    SWAP_HP = "SWAP_HP", // swap hp values with another ally
    TOTEM = "TOTEM", // summon a totem to the battle
    TOTEM_REMOVE = "TOTEM_REMOVE", // remove one random totem from an enemy unit
    TOTEM_INCREASE_VALUE = "TOTEM_INCREASE_VALUE",
    REPEATING_SKILL = "REPEATING_SKILL",
    CALCULATE_NUMBER = "CALCULATE_NUMBER", // modify IBattleUnit.customNumber
    FORCE_UNIT_CAST_SKILL = "FORCE_UNIT_CAST_SKILL", // make other unit to cast skill out of its turn
    FORCE_UNIT_MAKE_ATTACK = "FORCE_UNIT_MAKE_ATTACK", // make other unit attack
    FORCE_TOTEM_ACTION = "FORCE_TOTEM_ACTION", // make other unit's totem to act immediately
}

export enum EStatusType {
    BLEED = "BLEED",
    BURN = "BURN",
    POISON = "POISON",
    SHOCK = "SHOCK",
    RADIATE = "RADIATE",
}

export enum EBuffType {
    ADD_STATUS_ON_BASIC_ATTACK = "ADD_STATUS_ON_BASIC_ATTACK",
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    DIVINE_SHIELD = "DIVINE_SHIELD", // ignores incoming damage below stacks
    COSMIC_SHIELD = "COSMIC_SHIELD", // ignores first incoming damage
    ANTISKILL_MIRROR = "ANTISKILL_MIRROR", // reflects first enemy skill back to attacker
    FIRE_SHIELD = "FIRE_SHIELD", // on taking damage applies burn to enemy
    DARK_HEAL = "DARK_HEAL", // transforms heal spells into magic attack spells
    BLADEDANCE = "BLADEDANCE", // consecutive attacks deal more damage
    IGNORE_ARMOR = "IGNORE_ARMOR",
    TOTAL_DAMAGE_INCREASE = "TOTAL_DAMAGE_INCREASE", // increase any time of outgoing damage
    BASIC_ATTACK_IS_CRIT = "BASIC_ATTACK_IS_CRIT", // basic attack is a critical hit
    BASIC_ATTACK_ADD_TIMES = "BASIC_ATTACK_ADD_TIMES", // basic attack repeat [x] more times
    CHANGE_TARGET_TYPE = "CHANGE_TARGET_TYPE", // use basic attack on specific target
    EVADE = "EVADE", // evade next N basic attacks
    IGNORE_NEXT_DEBUFF = "IGNORE_NEXT_DEBUFF",
    OUTGOING_HEAL = "OUTGOING_HEAL",
    OVERHEAL_TO_DAMAGE = "OVERHEAL_TO_DAMAGE", // Every heal beyond maxHp apply RADIATE status on [changeTargetTypeTo] targets
    BATTLE_TRIGGER = "BATTLE_TRIGGER", // uses appTrigger field to do stuff
}

export enum EDebuffType {
    ANTIHEAL = "ANTIHEAL", // transforms next incoming heal into damage
    HEALING_DECREASE = "HEALING_DECREASE", // descrese hero outgoing healing
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE", // descrese hero attribute
    MARK_BURN = "MARK_BURN", // debuff hero with a mark, that applies burn each turn
    MARK_HUNTER = "MARK_HUNTER", // debuff hero with specific mark (HUNTER)
    MARK_PREDATOR = "MARK_PREDATOR", // debuff hero with specific mark (PREDATOR)
    MARK_BLADEDANCER = "MARK_BLADEDANCER", // debuff hero with specific mark (BLADEDANCER)
    MAGIC_RESIST_DECREASE = "MAGIC_RESIST_DECREASE", // decrease hero magic resist
    PHYSICAL_RESIST_DECREASE = "PHYSICAL_RESIST_DECREASE", // decrease hero physical resist
    DISABLE_SKILL = "DISABLE_SKILL", // enemy next skill is not performed
    BLIND = "BLIND", // enemy attacks have their target evasion chance +X
    MARK_WORTHY_FOE = "MARK_WORTHY_FOE",
    BATTLE_TRIGGER = "BATTLE_TRIGGER", // uses appTrigger field to do stuff
}

export enum EBuffTimeType {
    DUEL = "DUEL",
    TILL_NEXT_BA = "TILL_NEXT_BA",
    DURATION = "DURATION",
    TILL_GOT_HIT = "TILL_GOT_HIT",
}

export enum ETargetType {
    // ALLY
    ALL_ALLIES = "ALL_ALLIES",
    ALL_ALLY_SUMMONS = "ALL_ALLY_SUMMONS",
    ALLY_IN_FRONT = "ALLY_IN_FRONT", // ally who stays in front of buffer
    BUFFED_ALLY_RANDOM = "BUFFED_ALLY_RANDOM", // random ally with a buff
    CUSTOM = "CUSTOM",
    DEBUFFED_ALLY_RANDOM = "DEBUFFED_ALLY_RANDOM", // random ally with a debuff
    FIRST_ALLY = "FIRST_ALLY",
    LOW_HP_ALLY = "LOW_HP_ALLY",
    RANDOM_ALLY = "RANDOM_ALLY",
    HIGH_MP_ALLY = "HIGH_MP_ALLY",
    HIGH_PP_ALLY = "HIGH_PP_ALLY",
    RANDOM_ALLY_EXCEPT_ID = "RANDOM_ALLY_EXCEPT_ID", // get random ally except ally with id
    SELF = "SELF",
    TOTEM_ALLY_ALL = "TOTEM_ALLY_ALL", // all totems on ally side
    TOTEM_ALLY_CURRENT = "TOTEM_ALLY_CURRENT",
    // ENEMY
    ALL_ENEMIES = "ALL_ENEMIES",
    FIRST_ENEMY = "FIRST_ENEMY",
    FIRST_TWO_ENEMIES = "FIRST_TWO_ENEMIES",
    FIRST_THREE_ENEMIES = "FIRST_THREE_ENEMIES",
    HIGH_ATTACK_ENEMY = "HIGH_ATTACK_ENEMY",
    HIGH_BLEED_ENEMY = "HIGH_BLEED_ENEMY",
    HIGH_MP_ENEMY = "HIGH_MP_ENEMY",
    HIGH_PP_ENEMY = "HIGH_PP_ENEMY",
    LOW_HP_ENEMY = "LOW_HP_ENEMY",
    MARKED_ENEMY = "MARKED_ENEMY",
    ALL_MARKED_ENEMIES = "ALL_MARKED_ENEMIES",
    RANDOM_ENEMY = "RANDOM_ENEMY",
    SECOND_ENEMY = "SECOND_ENEMY",
    SUMMON_CURRENT = "SUMMON_CURRENT",
    DEBUFFED_ENEMY_RANDOM = "DEBUFFED_ENEMY_RANDOM",
    BUFFED_ENEMY_RANDOM = "BUFFED_ENEMY_RANDOM",
    // COMMON
    BY_UNIT_ID = "BY_UNIT_ID",
    EVERY_UNIT = "EVERY_UNIT",
}

export enum EWeaponType {
    AXE = "AXE",
    DAGGER = "DAGGER",
    MACE = "MACE",
    MUSICAL = "MUSICAL",
    SCEPTER = "SCEPTER",
    SHIELD = "SHIELD",
    STAFF = "STAFF",
    SWORD = "SWORD",
    TOTEM = "TOTEM",
    WAND = "WAND",
}

export enum ESkillSetType {
    MAGIC_ATTACK = "MAGIC_ATTACK",
    PHYSICAL_ATTACK = "PHYSICAL_ATTACK",
    BUFF = "BUFF",
    DEBUFF = "DEBUFF",
    HEAL = "HEAL",
    MIXED = "MIXED",
}

/**
 * @constant IN_BACK_ROW Caster of this skill positioned last (2-3 heroes) or last 2 (4 heroes)
 * @constant IN_FRONT_ROW Caster of this skill positioned first (1-2 hero) or first 2 (3-4 heroes)
 */
export enum ESkillCondition {
    PP_IS_HIGHER_THAN_MP = "PP_IS_HIGHER_THAN_MP",
    MP_IS_HIGHER_THAN_PP = "MP_IS_HIGHER_THAN_PP",
    MP_IS_EQUALS_PP = "MP_IS_EQUALS_PP",
    HAS_SUMMON = "HAS_SUMMON",
    HAS_TOTEM = "HAS_TOTEM",
    HAS_NO_SUMMON_OR_TOTEM = "HAS_NO_SUMMON_OR_TOTEM",
    CUSTOM_NUMBER_NOT_ZERO = "CUSTOM_NUMBER_NOT_ZERO",
    IN_BACK_ROW = "IN_BACK_ROW",
    IN_FRONT_ROW = "IN_FRONT_ROW",
    ONLY_BEFORE_COMBAT = "ONLY_BEFORE_COMBAT",
    NOT_BEFORE_COMBAT = "NOT_BEFORE_COMBAT",
}

/**
 * @constant SELF Item bonuses applied to single unit
 * @constant ALL_ALLIES Item bonuses applied to all ally units
 */
export enum EItemTargetType {
    SELF = "SELF",
    ALL_ALLIES = "ALL_ALLIES",
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type TValueType = "number" | "percent" | "evolvedNumber" | "evolvedPercent";
// evolvedNumber is used for items with evolve mechanics; acts the same way as "number", but is carried over to upgraded item

export type TUnits = (IUnit | null)[];

export type TBattleUnits = (IBattleUnit | null)[];

export interface IBossFight {
    name: string;
    units: IUnit[];
}

export interface IMobReward {
    type: IMobRewardType;
    exp: number;
    value?: number;
    unit?: IUnit;
    item?: IItem;
}

export interface IMobs {
    name: string;
    units: TUnits;
    reward: IMobReward;
}

export interface IMobsVariants {
    name: string;
    description: string;
    units: TUnits;
    rewards: IMobReward[];
    level: number;
}

export interface ICard {
    type: ECardType;
    price: number;
    attribute?: THeroAttribute;
    name?: string;
    unit?: IUnit;
    item?: IItem;
    skill?: IHeroSkillSet;
    value?: number;
    valueType?: TValueType;
    mobs?: { units: TUnits; reward: IMobReward };
    description?: string;
}

export interface ICardToMove {
    card: ICard;
    isCardObject: boolean;
    cardSlot: CardSlot | undefined;
    onCardMoved: (() => void) | undefined; // used when moving card from hero item slot
    parentUnitId: string | undefined; // used when moving card from hero item slot to check if item is moved from unit to same unit
}

export interface IPassiveSkill {
    desc: string;
    preBattleBuff?: IBuff;
}

/**
 * @prop basicAttackMarkType - hero basic attack type on marked enemy unit
 * @prop mobItems - list of items unit can probably have when bought
 */
export interface IUnit {
    id: string;
    name: string;
    unitType: EUnitType;
    heroClass: EHeroClass;
    mobHeroClasses?: EHeroClass[];
    heroClassType?: EHeroClassType;
    level: number;
    exp: number;
    addedAttributes?: { attr: THeroAttribute; value: number }[];
    // battle parameters
    basicAttack: number;
    attackType: EHeroAttackType;
    attackTargetType: ETargetType;
    basicMaxHp: number;
    basicMagicPower: number;
    basicPhysicalPower: number;
    basicCritChance: number;
    basicEvasionChance: number;
    //hp: number;
    basicHpRegen: number;
    basicArmor: number;
    basicAttackTimes: number;
    basicAttackMarkType?: EDebuffType;
    //
    skills: THeroSkills;
    items: IItem[];
    afterDuelBonuses?: IAfterDuelBonus[];
    passiveSkill?: IPassiveSkill;
    mobItems?: { item: IItem; probability: number }[];
}

export type THeroAttribute = keyof Pick<
    IUnit,
    "basicAttack" | "basicArmor" | "basicHpRegen" | "basicMaxHp" | "basicCritChance" | "basicEvasionChance" | "basicMagicPower" | "basicPhysicalPower"
>;

export type THeroBattleAttribute = keyof Pick<
    IBattleUnit,
    "attack" | "armor" | "hpRegen" | "critChance" | "evasionChance" | "magicPower" | "physicalPower" | "hp" | "maxHp" | "customNumber"
>;

export interface IStatus {
    type: EStatusType;
    value: number;
}

export interface IBattleUnit extends IUnit {
    attack: number;
    hpRegen: number;
    armor: number;
    hp: number;
    maxHp: number;
    magicPower: number;
    physicalPower: number;
    critChance: number;
    evasionChance: number;
    isBackRowPosition: boolean;
    customNumber: number; // for tricky skill calculations
    // see BattleController.performCustomCalculation()
    // count by priority: skill.status (add) > skill.attribute (add) > skill.value (set)
    //    > skill.valueFrom (add%) > skill.valueType="percent" (multiply this customNumber)
    // after calculation IHeroSkill may use .valueFrom="customNumber"
    // is set to 0 before every IHeroSkillSet
    isSummon: boolean;
    buffs: IBuff[];
    debuffs: IDebuff[];
    summon?: IBattleUnit;
    totem?: ITotem;
    statuses: IStatus[];
    itemBonuses: IItemBattleBonus[];
    //
    currentSkillIndex: number;
}

export interface IItemBonus {
    type: EItemBonusType;
    value: number;
    valueType: TValueType;
    attribute?: THeroAttribute;
    targetType?: EItemTargetType;
}

export interface IAfterDuelBonus {
    type: EItemAfterDuelBonusType;
    value: number;
    condition?: EItemAfterDuelBonusCondition;
}

export interface IItemBattleBonus {
    type: EItemBattleBonusType;
    value: number;
    valueType: TValueType;
    status?: EStatusType;
    relatedSkill?: IHeroSkillSet;
}

export interface IItemHeroClassBonus {
    heroClass: EHeroClass;
    bonus?: IItemBonus;
    battleBonus?: IItemBattleBonus;
}

export interface IItem {
    id: string;
    name: string;
    type: EItemType;
    level: number;
    image: string;
    heroClasses: EHeroClass[]; // hero classes item can be used by
    bonuses: IItemBonus[]; // bonuses to apply when item is equipped
    weaponType?: EWeaponItemType;
    afterDuelBonuses?: IAfterDuelBonus[]; // bonuses player/hero gets after each duel if item equipped
    battleBonuses?: IItemBattleBonus[];
    heroClassBonuses?: IItemHeroClassBonus[];
    priceLevel: number;
    nextLevel?: IItem;
    previousLevel?: IItem;
    evolving?: boolean;
    desc?: string;
    sellPrice?: number;
}

export interface IActionTarget {
    targetId: string;
    damageValue?: number;
    armorValue?: number;
    isEvasion?: boolean;
    value?: number;
    attribute?: THeroBattleAttribute;
}

export interface IActionBuffTarget {
    targetId: string;
    isExisting?: boolean;
    value?: number;
}

export interface IBattleAction {
    type: EBattleActionType;
    attribute?: THeroBattleAttribute;
    unitId?: string;
    targetId?: string;
    value?: number;
    value2?: number;
    name?: string;
    status?: EStatusType;
    targets?: IActionTarget[];
    summon?: IBattleUnit;
    totem?: ITotem;
    buff?: IBuff;
    debuff?: IDebuff;
    buffTargets?: IActionBuffTarget[];
    armorValue?: number;
    isCrit?: boolean;
    skill?: IHeroSkill;
    isStartBattle?: boolean;
    animation?: string;
}

export enum EAppTriggerType {
    NONE = "NONE",
    BASIC_ATTACK = "BASIC_ATTACK", // after making all basic attacks
    TAKE_ATTACK = "TAKE_ATTACK", // before taking damage of basic attack
    SUMMON = "SUMMON", // after summon
    ROUND_CYCLE = "ROUND_CYCLE", // end of the round
    DEATH = "DEATH", // after reduced to 0 hp
    KILL = "KILL", // after attack in which target hp reduced to 0
    RECIEVE_BUFF = "RECIEVE_BUFF", // after recieving (non-battle-trigger) buff
    RECIEVE_DEBUFF = "RECIEVE_DEBUFF", // after recieving (non-battle-trigger) debuff
}

export interface IAppTrigger {
    type: EAppTriggerType;
    skill: IHeroSkill[];
    skillId: string;
    // default: targetNumber = 1; limitedRepeats = false; targetCheck = self;
    targetCheck?: ETargetType; // who triggers
    currentNumber?: number; // increase this every time trigger happens
    targetNumber?: number; // perform skill cast after currentNumber reach this number
    limitedRepeats: boolean;
}

export interface IBattleTrigger {
    anchorTarget: IBattleUnit; // buff/debuff anchored to target unit
    originBattleUnit: IBattleUnit; // original caster and caster of triggered IHeroSkillSet
    type: EAppTriggerType;
    targetCheck: ETargetType;
    isBuff: boolean; // buff or debuff
    isPlayer1: boolean;
}

export interface IBuffOrDebuff {
    buff?: IBuff;
    debuff?: IDebuff;
}

export interface IBuff {
    name: string;
    type: EBuffType;
    timeType: EBuffTimeType;
    targetType: ETargetType;
    targetUnitId?: string;
    value: number;
    valueType?: TValueType;
    valueFrom?: THeroBattleAttribute;
    attribute?: THeroBattleAttribute;
    totalValue?: number; // total value is calculated in battle
    statusType?: EStatusType;
    changeTargetTypeTo?: ETargetType;
    changeTargetMarkType?: EDebuffType;
    mpScale?: number; // % of MP value is added to debuff value
    ppScale?: number; // % of PP value is added to debuff value
    duration?: number;
    appTrigger?: IAppTrigger;
}

export interface IDebuff {
    name: string;
    type: EDebuffType;
    timeType: EBuffTimeType;
    targetType: ETargetType;
    value: number;
    valueType?: TValueType;
    attribute?: THeroBattleAttribute;
    totalValue?: number; // total value is calculated in battle
    mpScale?: number; // % of MP value is added to debuff value
    ppScale?: number; // % of PP value is added to debuff value
    duration?: number;
    appTrigger?: IAppTrigger;
}

/**
 * @constant isBasicAttack Flag: skill is followed by basic attack
 * @constant mpScale % of MP value is added to skill value
 * @constant ppScale % of PP value is added to skill value
 * @constant effectAnimDistance position of effect on enemy
 * @constant effectAnimDistanceInverted position of effect on ally (when skill is casted by enemy)
 * @constant targetFromType unit to take buff/attr from
 * @constant targetType unit to apply skill on
 */
export interface IHeroSkill {
    type: EHeroSkillType;
    isBasicAttack?: boolean;
    attackType?: EHeroAttackType;
    attribute?: THeroBattleAttribute;
    buff?: IBuff;
    debuff?: IDebuff;
    value?: number;
    targetType?: ETargetType;
    targetFromType?: ETargetType;
    targetUnitId?: string;
    valueType?: TValueType;
    valueFrom?: THeroBattleAttribute;
    summon?: IUnit;
    totem?: ITotem;
    status?: EStatusType;
    markType?: EDebuffType;
    mpScale?: number;
    ppScale?: number;
    childSkill?: IHeroSkill;
    //
    animation?: AnimationType;
    condition?: ESkillCondition;
    effectAnimationType?: EEffectAnimationType;
    effectAnimationDelay?: number;
    effectAnimDistance?: { x?: number; y?: number };
    effectAnimDistanceInverted?: { x?: number; y?: number };
}

/**
 * @constant isChained Flag shows if this skill is instantly followed by the next skill
 * @constant isBasicAttack Flag skillset is followed by basic attack
 */
export interface IHeroSkillSet {
    id: string;
    name: string;
    desc: string;
    level: number;
    heroClasses: EHeroClass[];
    skills: IHeroSkill[];
    nextLevel?: IHeroSkillSet;
    previousLevel?: IHeroSkillSet;
    isMcSkill?: boolean;
    isChained?: boolean;
    isActivateOnStart?: boolean;
    image?: string;
    //rarity?: number;
    type?: ESkillSetType;
    isBasicAttack?: boolean;
    priceLevel: number;
    animation?: AnimationType;
}

export interface ITotem {
    id: string;
    name: string;
    skills: IHeroSkill[];
}

export type TBattleRecord = IBattleAction[];

export type THeroSkills = IHeroSkillSet[];

export type TDuelEnemy = Record<number, (IUnit | null)[]>;
export type TDuelCards = Record<number, IMixedDuelCard[]>;

export interface IAttrModify {
    a: THeroAttribute;
    v: number;
}
export interface IMixedDuelCard {
    unit?: IUnit;
    item?: IItem;
    skill?: IHeroSkillSet;
    attribute?: IAttrModify;
    levelup?: number;
}
