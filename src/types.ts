export enum EScene {
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    GAME = "GAME",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
    PLATFORM = "PLATFORM",
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
    // CHARACTERS
    // BASIC
    //IDLE
    BARD_IDLE = "BARD_IDLE",
    DARK_IDLE = "DARK_IDLE",
    MAGIC_IDLE = "MAGIC_IDLE",
    MAGIC_ATTACK = "MAGIC_ATTACK",
    MASTER_IDLE = "MASTER_IDLE",
    ORDER_IDLE = "ORDER_IDLE",
    PRIEST_IDLE = "PRIEST_IDLE",
    SUMMON_IDLE = "SUMMON_IDLE",
    WARRIOR_IDLE = "IMAGE_WARRIOR_IDLE",
    WILD_IDLE = "WILD_IDLE",
    // HEAL
    PRIEST_HEAL = "PRIEST_HEAL",
    // ATTACK
    DARK_ATTACK = "DARK_ATTACK",
    MASTER_ATTACK = "MASTER_ATTACK",
    ORDER_ATTACK = "ORDER_ATTACK",
    PRIEST_ATTACK = "PRIEST_ATTACK",
    SUMMON_ATTACK = "SUMMON_ATTACK",
    WARRIOR_ATTACK = "WARRIOR_ATTACK",
    WILD_ATTACK = "WILD_ATTACK",
    // MC
    //IDLE
    BARBARIAN_IDLE = "BARBARIAN_IDLE",
    BARBARIAN_ATTACK = "BARBARIAN_ATTACK",
    SHAMAN_IDLE = "SHAMAN_IDLE",
    //SHAMAN_ATTACK = "SHAMAN_ATTACK",
    SORCERER_IDLE = "SORCERER_IDLE",
    SAMURAI_IDLE = "SAMURAI_IDLE",
    // LEADER
    LEADER_1_IDLE = "LEADER_1_IDLE",
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
    EXP_ALL = "EXP_ALL",
    EXP_SELECT = "EXP_SELECT",
    EXP_SINGLE = "EXP_SINGLE",
    GOLD = "GOLD",
    //HEAL_CHOISE = "HEAL_CHOISE",
    HEROES_SELL = "HEROES_SELL",
    INCOME = "INCOME",
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
    MIXED_CLASS_SELECT = "MIXED_CLASS_SELECT", // select 3 item/skill from one basic class
    MOBS_REWARDS = "MOBS_REWARDS",
    SKILLS_SELL = "SKILLS_SELL", // buy 3 random skills
    SKILLS_CLASS_SELL = "SKILLS_CLASS_SELL", // buy one of 3 random skills for specific hero classes
    SKILL_CLASS_RANDOM = "SKILL_CLASS_RANDOM", // get random skill for specific hero classes
    SKILL_RANDOM = "SKILL_RANDOM", // get random skill
    TRIPLE_SET = "TRIPLE_SET", // get 3 free random items from [commonItem, weapon, skill, gold, exp, attr]
    UNIT_RANDOM = "UNIT_RANDOM",
    UNIT_SELL = "UNIT_SELL",
    UPGRADE_SKILL_OR_ITEM = "UPGRADE_SKILL_OR_ITEM", // allow to upgrade item or a skill to next level
    // SPECIAL
    //
    DUEL = "DUEL",
    MOBS = "MOBS",
    BOSS = "BOSS",
}

export enum ECardType {
    ATTRIBUTE = "ATTRIBUTE",
    BUFF = "BUFF",
    EXP = "EXP",
    GOLD = "GOLD",
    //HEAL = "HEAL",
    ITEM = "ITEM",
    MOBS = "MOBS",
    SKILL = "SKILL",
    UNIT = "UNIT",
}

export enum EHeroClassType {
    BASIC = "BASIC",
    MULTI = "MULTI",
}

export enum EHeroClass {
    ALL = "ALL",
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

export enum EItemBonusType {
    ATTRIBUTE = "ATTRIBUTE",
}

export enum EItemAfterDuelBonusType {
    GOLD = "GOLD",
    // INCOME?
    EXP = "EXP",
    STAT_ARMOR = "STAT_ARMOR",
    STAT_MAX_HP = "STAT_MAX_HP",
    STAT_MP = "STAT_MP",
    STAT_PP = "STAT_PP",
    STAT_CRIT_CHANCE = "STAT_CRIT_CHANCE",
    STAT_EVAS_CHANCE = "STAT_EVAS_CHANCE",
}

export enum EItemBattleBonusType {
    CRIT_INCR_NONCRIT_DECR = "CRIT_INCR_NONCRIT_DECR", // TODO: implement
    HEAL_INCREASE = "HEAL_INCREASE",
    INCREASE_MAGIC_DAMAGE = "INCREASE_MAGIC_DAMAGE",
    INCREASE_PHYSICAL_DAMAGE = "INCREASE_PHYSICAL_DAMAGE",
    INCREASE_DAMAGE_TO_ARMOR = "INCREASE_DAMAGE_TO_ARMOR",
    INCREASE_DAMAGE_TO_HP = "INCREASE_DAMAGE_TO_HP",
    INCREASE_DAMAGE_TO_BLEEDING = "INCREASE_DAMAGE_TO_BLEEDING",
    INCREASE_DAMAGE_TO_POISONED = "INCREASE_DAMAGE_TO_POISONED",
    INCREASE_DAMAGE_TO_SUMMON = "INCREASE_DAMAGE_TO_SUMMON",
    INCREASE_SUMMON_ATTACK = "INCREASE_SUMMON_ATTACK", // increases basic attack damage of your summons
    INCREASE_SUMMON_HP = "INCREASE_SUMMON_HP", // increases hp of your summons
    BASIC_ATTACK_TWICE = "BASIC_ATTACK_TWICE",
    BASIC_ONCE_IN_TWO_TURNS = "BASIC_ONCE_IN_TWO_TURNS", // TODO: implement
    SUMMON_INCREASE_DAMAGE = "SUMMON_INCREASE_DAMAGE", // TODO: implement
    TOTEM_INCREASE_VALUE = "TOTEM_INCREASE_VALUE", // TODO: implement
    CRIT_EVERY_TWO_TURNS = "CRIT_EVERY_TWO_TURNS", // TODO: implement
    STATUS_BURN_APPLY_INCREASE = "STATUS_BURN_APPLY_INCREASE",
    STATUS_POISON_APPLY_INCREASE = "STATUS_POISON_APPLY_INCREASE",
    STATUS_BLEED_APPLY_INCREASE = "STATUS_BLEED_APPLY_INCREASE",
}

export enum EBattleActionType {
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE",
    ATTACK = "ATTACK",
    BUFF = "BUFF",
    BUFF_REMOVED = "BUFF_REMOVED",
    DEATH = "DEATH",
    DEBUFF = "DEBUFF",
    DEBUFF_REMOVE = "DEBUFF_REMOVE",
    HEAL = "HEAL",
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
}

export enum EHeroSkillType {
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE",
    ATTACK = "ATTACK",
    BUFF = "BUFF",
    BUFF_INCREASE_VALUE = "BUFF_INCREASE_VALUE", // increase the value of a buff
    BUFF_COPY = "BUFF_COPY", // copy random buff from buffed ally to random ally
    DEBUFF = "DEBUFF",
    DEBUFF_REMOVE = "DEBUFF_REMOVE", // remove one random debuff from target
    HEAL = "HEAL",
    NONE = "NONE", // use this skill type to trigger basic attack without a skill
    STATUS_APPLY = "STATUS_APPLY", // apply a status to target
    STATUS_REMOVE = "STATUS_REMOVE", // remove one random status from target
    SUMMON = "SUMMON", // summon a unit to the battle
    SUMMON_REMOVE = "SUMMON_REMOVE", // remove one random summon from an enemy unit
    SWAP_HP = "SWAP_HP", // swap hp values with another ally
    TOTEM = "TOTEM", // summon a totem to the battle
    TOTEM_REMOVE = "TOTEM_REMOVE", // remove one random totem from an enemy unit
    TOTEM_INCREASE_VALUE = "TOTEM_INCREASE_VALUE",
}

export enum EStatusType {
    BLEED = "BLEED",
    BURN = "BURN",
    POISON = "POISON",
}

export enum EBuffType {
    ADD_STATUS_ON_BASIC_ATTACK = "ADD_STATUS_ON_BASIC_ATTACK",
    ATTRIBUTE_INCREASE = "ATTRIBUTE_INCREASE",
    DIVINE_SHIELD = "DIVINE_SHIELD",
    IGNORE_ARMOR = "IGNORE_ARMOR",
    TOTAL_DAMAGE_INCREASE = "TOTAL_DAMAGE_INCREASE",
    BASIC_ATTACK_IS_CRIT = "BASIC_ATTACK_IS_CRIT", // basic attack is a critical hit
    BASIC_ATTACK_ADD_TIMES = "BASIC_ATTACK_ADD_TIMES", // basic attack repeat [x] more times
}

export enum EDebuffType {
    ATTRIBUTE_DECREASE = "ATTRIBUTE_DECREASE", // descrese hero attribute
    HEALING_DECREASE = "HEALING_DECREASE", // descrese hero outgoing healing
    MARK_BURN = "MARK_BURN", // debuff hero with a mark, that applies burn each turn
    MARK_HUNTER = "MARK_HUNTER", // debuff hero with specific mark (HUNTER)
    MARK_PREDATOR = "MARK_PREDATOR", // debuff hero with specific mark (PREDATOR)
    MAGIC_RESIST_DECREASE = "MAGIC_RESIST_DECREASE", // decrease hero magic resist
    PHYSICAL_RESIST_DECREASE = "PHYSICAL_RESIST_DECREASE", // decrease hero physical resist
    DISABLE_SKILL = "DISABLE_SKILL", // enemy next skill is not performed
}

export enum EBuffTimeType {
    DUEL = "DUEL",
    TILL_NEXT_BA = "TILL_NEXT_BA",
}

export enum ETargetType {
    // ALLY
    ALL_ALLIES = "ALL_ALLIES",
    ALL_ALLY_SUMMONS = "ALL_ALLY_SUMMONS",
    BUFFED_ALLY_RANDOM = "BUFFED_ALLY_RANDOM", // random ally with a buff
    CUSTOM = "CUSTOM",
    FIRST_ALLY = "FIRST_ALLY",
    LOW_HP_ALLY = "LOW_HP_ALLY",
    RANDOM_ALLY = "RANDOM_ALLY",
    SELF = "SELF",
    TOTEM_ALLY_ALL = "TOTEM_ALLY_ALL", // all totems on ally side
    TOTEM_ALLY_CURRENT = "TOTEM_ALLY_CURRENT",
    // ENEMY
    ALL_ENEMIES = "ALL_ENEMIES",
    FIRST_ENEMY = "FIRST_ENEMY",
    FIRST_TWO_ENEMIES = "FIRST_TWO_ENEMIES",
    HIGH_ATTACK_ENEMY = "HIGH_ATTACK_ENEMY",
    HIGH_MP_ENEMY = "HIGH_MP_ENEMY",
    LOW_HP_ENEMY = "LOW_HP_ENEMY",
    MARKED_ENEMY = "MARKED_ENEMY",
    RANDOM_ENEMY = "RANDOM_ENEMY",
    SECOND_ENEMY = "SECOND_ENEMY",
    SUMMON_CURRENT = "SUMMON_CURRENT",
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type TValueType = "number" | "percent";

export type TUnits = (IUnit | null)[];

export type TBattleUnits = (IBattleUnit | null)[];

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
    units: TUnits;
    rewards: IMobReward[];
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
}

export interface IUnit {
    id: string;
    name: string;
    unitType: EUnitType;
    heroClass: EHeroClass;
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
    basicAttackMarkType?: EDebuffType; // hero basic attack type on marked enemy unit
    //
    skills: THeroSkills;
    items: IItem[];
    afterDuelBonuses?: IAfterDuelBonus[];
}

export type THeroAttribute = keyof Pick<
    IUnit,
    "basicAttack" | "basicArmor" | "basicHpRegen" | "basicMaxHp" | "basicCritChance" | "basicEvasionChance" | "basicMagicPower" | "basicPhysicalPower"
>;

export type THeroBattleAttribute = keyof Pick<
    IBattleUnit,
    "attack" | "armor" | "hpRegen" | "critChance" | "evasionChance" | "magicPower" | "physicalPower" | "hp" | "maxHp"
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
    //
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
}

export interface IAfterDuelBonus {
    type: EItemAfterDuelBonusType;
    value: number;
}

export interface IItemBattleBonus {
    type: EItemBattleBonusType;
    value: number;
    valueType: TValueType;
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
}

export interface IActionAttackTarget {
    targetId: string;
    damageValue: number;
    armorValue?: number;
    isEvasion?: boolean;
}

export interface IActionBuffTarget {
    targetId: string;
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
    targets?: IActionAttackTarget[];
    summon?: IBattleUnit;
    totem?: ITotem;
    buff?: IBuff;
    debuff?: IDebuff;
    buffTargets?: IActionBuffTarget[];
    armorValue?: number;
    isCrit?: boolean;
}

export interface IBuff {
    name: string;
    type: EBuffType;
    timeType: EBuffTimeType;
    targetType: ETargetType;
    value: number;
    valueType?: TValueType;
    valueFrom?: THeroBattleAttribute;
    attribute?: THeroBattleAttribute;
    totalValue?: number; // total value is calculated in battle
    statusType?: EStatusType;
    mpScale?: number; // % of MP value is added to debuff value
    ppScale?: number; // % of PP value is added to debuff value
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
}

export interface IHeroSkill {
    type: EHeroSkillType;
    isBasicAttack: boolean; // flag: skill is followed by basic attack
    attackType?: EHeroAttackType;
    attribute?: THeroBattleAttribute;
    buff?: IBuff;
    debuff?: IDebuff;
    value?: number;
    targetType?: ETargetType;
    valueType?: TValueType;
    valueFrom?: THeroBattleAttribute;
    summon?: IUnit;
    totem?: ITotem;
    status?: EStatusType;
    markType?: EDebuffType;
    mpScale?: number; // % of MP value is added to skill value
    ppScale?: number; // % of PP value is added to skill value
}

/**
 * @property isChained Flag shows if this skill is instantly followed by the next skill
 */
export interface IHeroSkillSet {
    id: string;
    name: string;
    desc: string;
    level: number;
    heroClasses: EHeroClass[];
    skills: IHeroSkill[];
    nextLevel?: IHeroSkillSet;
    isMcSkill?: boolean;
    isChained?: boolean;
}

export interface ITotem {
    id: string;
    name: string;
    skills: IHeroSkill[];
}

export type TBattleRecord = IBattleAction[];

export type THeroSkills = IHeroSkillSet[];
