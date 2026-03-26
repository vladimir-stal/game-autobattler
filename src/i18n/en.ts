import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, ERoomType, ESelectCardHint, THeroAttribute } from "../types";

type TSkillI18n = Record<number | "name" | "desc1" | "desc2" | "desc3", string>;

export interface Ii18n {
    attributes: {
        attribute: Record<THeroAttribute, string>;
        afterDuelBonus: Record<EItemAfterDuelBonusType, string>;
        bonusType: Record<EItemBattleBonusType, string>;
        itemBonusType: Record<EItemBonusType, string>;
        afterDuelBonusesText: string;
    };
    heroes: {
        basic: Partial<Record<EHeroClass, string>>;
        mc: Partial<Record<EHeroClass, string>>;
    };
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
        FIREFLY: string;
        WOLF: string;
        STRONGWOLF: string;
    };
    totems: {
        basicWildTotem: string;
    };
    items: {
        //basic weapons
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
        //basic common
        basic_ring_damage: string;
        basic_ring_regen: string;
        basic_gold_bag: string;
        basic_exp_ring: string;
        basic_heal: string;
        basic_hat: string;
        basic_jacket: string;
        basic_pants: string;
        basic_boots: string;
        //
    };
    rooms: Partial<Record<ERoomType, string>>;
    skills: {
        basic: {
            buffBaNextBaAll: TSkillI18n;
            buffBaSelf: TSkillI18n;
            buffPpAll: TSkillI18n;
            buffNextBaX: TSkillI18n;
            phycAttack: TSkillI18n;
            attrIncArmorSelf: TSkillI18n;
            attrAttackSelf: TSkillI18n;
            magicAttack: TSkillI18n;
            applyBurn: TSkillI18n;
            attrIncrHpReg: TSkillI18n;
            totemAttack: TSkillI18n;
            poisonRandom: TSkillI18n;
            magicAttackX3: TSkillI18n;
            buffNextBa: TSkillI18n;
            healFirst: TSkillI18n;
            healSelf: TSkillI18n;
            fireflySummon: TSkillI18n;
            sparkSummon: TSkillI18n;
        };
        level2: {
            // magic
            applyShock: TSkillI18n;
        };
        common: {
            removeBuff: TSkillI18n;
            removeDebuff: TSkillI18n;
        };
        mobs: {
            goblinShamanHpRegIncr: TSkillI18n;
        };
        mc: {
            DivineShield: TSkillI18n;
            BarbarianShout: TSkillI18n;
            shamanTotemEmpower: TSkillI18n;
        };
    };
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
        //
        SKILL: string;
        ITEM: string;
        //
        DEAD: string;
        VICTORY: string;
        DEFEAT: string;
        // hints
        [ESelectCardHint.TAKE_ALL_REWARDS]: string;
        [ESelectCardHint.SELECT_SINGLE_HERO]: string;
        [ESelectCardHint.TAKE_REWARD]: string;
        [ESelectCardHint.TAKE_ITEM]: string;
        [ESelectCardHint.TAKE_SKILL]: string;
        [ESelectCardHint.SELECT_SINGLE]: string;
        [ESelectCardHint.SELECT_SINGLE_DUNGEON]: string;
    };
}

export const i18n: Ii18n = {
    attributes: {
        attribute: {
            basicArmor: "basicArmor",
            basicAttack: "basicAttack",
            basicCritChance: "basicCritChance",
            basicEvasionChance: "basicEvasionChance",
            basicHpRegen: "basicHpRegen",
            basicMagicPower: "basicMagicPower",
            basicMaxHp: "basicMaxHp",
            basicPhysicalPower: "basicPhysicalPower",
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
        },
        bonusType: {
            ADDITIONAL_BUFF_TARGET: "ADDITIONAL_BUFF_TARGET",
            APPLY_STATUS_ON_BASIC_ATTACK: "APPLY_STATUS_ON_BASIC_ATTACK",
            //APPLY_POISON_ON_HIT: "APPLY_POISON_ON_HIT",
            BASIC_ATTACK_TWICE: "BASIC_ATTACK_TWICE",
            BASIC_ONCE_IN_TWO_TURNS: "BASIC_ONCE_IN_TWO_TURNS",
            CRIT_EVERY_TWO_TURNS: "CRIT_EVERY_TWO_TURNS",
            CRIT_INCR_NONCRIT_DECR: "CRIT_INCR_NONCRIT_DECR",
            CRIT_WITH_MAGIC: "CRIT_WITH_MAGIC",
            HEAL_INCREASE: "HEAL_INCREASE",
            INCREASE_DAMAGE_TO_ARMOR: "INCREASE_DAMAGE_TO_ARMOR",
            INCREASE_DAMAGE_TO_BLEEDING: "INCREASE_DAMAGE_TO_BLEEDING",
            INCREASE_DAMAGE_TO_HP: "INCREASE_DAMAGE_TO_HP",
            INCREASE_DAMAGE_TO_POISONED: "INCREASE_DAMAGE_TO_POISONED",
            INCREASE_DAMAGE_TO_SUMMON: "INCREASE_DAMAGE_TO_SUMMON",
            INCREASE_MAGIC_DAMAGE: "INCREASE_MAGIC_DAMAGE",
            INCREASE_PHYSICAL_DAMAGE: "INCREASE_PHYSICAL_DAMAGE",
            INCREASE_SUMMON_ATTACK: "INCREASE_SUMMON_ATTACK",
            INCREASE_SUMMON_HP: "INCREASE_SUMMON_HP",
            INCREASE_TOTAL_DAMAGE_FROM_HP: "INCREASE_TOTAL_DAMAGE_FROM_HP",
            STATUS_BLEED_APPLY_INCREASE: "STATUS_BLEED_APPLY_INCREASE",
            STATUS_BURN_APPLY_INCREASE: "STATUS_BURN_APPLY_INCREASE",
            STATUS_POISON_APPLY_INCREASE: "STATUS_POISON_APPLY_INCREASE",
            SUMMON_INCREASE_DAMAGE: "SUMMON_INCREASE_DAMAGE",
            TOTEM_INCREASE_VALUE: "TOTEM_INCREASE_VALUE",
        },
        itemBonusType: { ATTRIBUTE: "ATTRIBUTE", ITEM_WEAPON_SLOT: "ITEM_WEAPON_SLOT" },
    },
    heroes: {
        basic: {
            BARD: "Bard",
            DARK: "Dark",
            MAGIC: "Magic",
            MASTER: "Master",
            ORDER: "Order",
            PRIEST: "Priest",
            SUMMON: "Mystic",
            WARRIOR: "Warrior",
            WILD: "Wild",
        },
        mc: {
            [EHeroClass.ALCHEMIST]: "Alhemist",
            [EHeroClass.ASSASSIN]: "Assasin",
            [EHeroClass.BARBARIAN]: "Barbarian",
            [EHeroClass.BATTLE_MAGE]: "Battle Mage",
            [EHeroClass.BEAST_MASTER]: "Beast Master",
            [EHeroClass.BISHOP]: "Bishop",
            [EHeroClass.BLACK_KNIGHT]: "Black Knight",
            [EHeroClass.BLADEDANCER]: "Bladedancer",
            [EHeroClass.COMMANDER]: "Commander",
            [EHeroClass.DOOMSAYER]: "Doomsayer",
            [EHeroClass.DRUID]: "Druid",
            [EHeroClass.DUELIST]: "Duelist",
            [EHeroClass.EXORCIST]: "Exorcist",
            [EHeroClass.FOREST_SPIRIT]: "Forest Spirit",
            [EHeroClass.GLADIATOR]: "Gladiator",
            [EHeroClass.HERALD]: "Herald",
            [EHeroClass.HUNTER]: "Hunter",
            [EHeroClass.ILLUSIONIST]: "Illusionist",
            [EHeroClass.INQUISITOR]: "Inquisitor",
            [EHeroClass.KNIGHT]: "Royal knight",
            [EHeroClass.MAGIC_BARD]: "Magic Bard",
            [EHeroClass.MIMIC]: "Mimic",
            [EHeroClass.MINSTREL]: "Minstrel",
            [EHeroClass.MONK]: "Monk",
            [EHeroClass.NECROMANCER]: "Necromancer",
            [EHeroClass.ORACLE]: "Oracle",
            [EHeroClass.PALADIN]: "Paladin",
            [EHeroClass.PREDATOR]: "Predator",
            [EHeroClass.RUNECASTER]: "Runecaster",
            [EHeroClass.SAMURAI]: "Samurai",
            [EHeroClass.SHADOW_MASTER]: "Shadow Master",
            [EHeroClass.SHAMAN]: "Shaman",
            [EHeroClass.SORCERER]: "Sorcerrer",
            [EHeroClass.WARLOCK]: "Warlock",
            [EHeroClass.WITCH]: "Witch",
            [EHeroClass.ZEALOT]: "Zealot",
        },
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
        FIREFLY: "Firefly",
        WOLF: "Wolf",
        STRONGWOLF: "Strong wolf",
    },
    totems: {
        basicWildTotem: "Wild Totem",
    },
    items: {
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
        basic_ring_damage: "Damage ring",
        basic_ring_regen: "Regeneration ring",
        basic_gold_bag: "Old gold bag",
        basic_exp_ring: "Experience ring",
        basic_heal: "Priest ring",
        basic_hat: "Old hat",
        basic_jacket: "Old jacket",
        basic_pants: "Old pants",
        basic_boots: "Old boots",
        //
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
        //
        // CHOISE ROOMS
        //
        [ERoomType.ATTRIBUTE_SELECT]: "EXERCISES",
        [ERoomType.EXP_ALL]: "EXP_ALL",
        [ERoomType.EXP_SELECT]: "TRAINING CAMP",
        //
        [ERoomType.ITEM_SELECT]: "BLACK MARKET",
        [ERoomType.MIXED_CLASS_SELECT]: "SPECIALIST",
        [ERoomType.UPGRADE_SKILL_OR_ITEM]: "UPGRADE",
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
        //
    },
    skills: {
        basic: {
            //
            // BARD
            //
            buffBaNextBaAll: {
                name: "Buff BA all",
                desc1: "Buff next basic attack for [2] damage for all allies",
                desc2: "Buff next basic attack for [3] damage for all allies",
                desc3: "Buff next basic attack for [4] damage for all allies",
            },
            buffBaSelf: {
                name: "Buff self BA",
                desc1: "Buff self basic attack [1]",
                desc2: "Buff self basic attack [2]",
                desc3: "Buff self basic attack [3]",
            },
            buffPpAll: {
                name: "Buff PP all",
                desc1: "Buff Physical power \n[1]+[MP*50%] all allies",
                desc2: "Buff Physical power \n[1]+[MP*70%] all allies",
                desc3: "Buff Physical power \n[1]+[MP] all allies",
            },
            //
            // DARK
            //
            poisonRandom: {
                name: "Posion random",
                desc1: "Poison [3] random enemy",
                desc2: "Poison [3] random enemy",
                desc3: "Poison [3] random enemy",
            },
            magicAttackX3: {
                name: "Magic missiles",
                desc1: "Deal [2] magic damage \nto random enemy 3 times",
                desc2: "Deal [3] magic damage \nto random enemy 3 times",
                desc3: "Deal [4] magic damage \nto random enemy 3 times",
            },
            //
            // MASTER
            //
            buffNextBaX: {
                name: "Next BAx buff",
                desc1: "Multiply x[1.4] self next basic attack",
                desc2: "Multiply x[1.6] self next basic attack",
                desc3: "Multiply x[1.8] self next basic attack",
            },
            //
            // MAGIC
            //
            magicAttack: {
                name: "Magic Attack",
                desc1: "Deal [5] magic damage to first enemy",
                desc2: "Deal [7] magic damage to first enemy",
                desc3: "Deal [9] magic damage to first enemy",
            },
            applyBurn: {
                name: "Apply Burn",
                desc1: "Apply [3] burn on the first enemy",
                desc2: "Apply [4] burn on the first enemy",
                desc3: "Apply [6] burn on the first enemy",
            },
            //
            // MASTER + WARRIOR
            //
            phycAttack: {
                name: "Phys Attack",
                desc1: "Deal [4] physical damage to first enemy",
                desc2: "Deal [6] physical damage to first enemy",
                desc3: "Deal [6]+[PPx50%] physical damage to first enemy",
            },
            //
            // ORDER
            //
            attrIncArmorSelf: {
                name: "Armor self",
                desc1: "Armor self [3]",
                desc2: "Armor self [5]",
                desc3: "Armor self [8]",
            },
            attrAttackSelf: {
                name: "Incr Attack self",
                desc1: "Increase self attack [1]",
                desc2: "Increase self attack [2]",
                desc3: "Increase self attack [3]",
            },
            //
            // PRIEST
            //
            healFirst: {
                name: "Heal first",
                desc1: "Heal [3] first ally",
                desc2: "Heal [5] first ally",
                desc3: "Heal [7] first ally",
            },
            healSelf: {
                name: "Heal self",
                desc1: "Heal [8] self",
                desc2: "Heal [6] self",
                desc3: "Heal [4] self",
            },
            //
            // SUMMON
            //
            fireflySummon: {
                name: "Firefly Summon",
                desc1: "Summon magic creature [7,1]",
                desc2: "Summon magic creature [4,1]",
                desc3: "Summon magic creature [3,1]",
            },
            sparkSummon: {
                name: "Heal self",

                desc1: "Summon spirit warrior [2,3]",
                desc2: "Summon spirit warrior [3,4]",
                desc3: "Summon spirit warrior [6,6]",
            },
            //
            // WARRIOR
            //
            buffNextBa: {
                name: "Next BA+ buff",
                desc1: "Buff [4] self next basic attack",
                desc2: "Buff [6] self next basic attack",
                desc3: "Buff [8] self next basic attack",
            },
            //
            // WILD
            //
            attrIncrHpReg: {
                name: "Wild regen",
                desc1: "Increase self hp regen [1]",
                desc2: "Increase self hp regen [2]",
                desc3: "Increase self hp regen [3]",
            },
            totemAttack: {
                name: "Wild totem",
                desc1: "Summon totem that deals \n[1] damage to random enemy",
                desc2: "Summon totem that deals \n[2] damage to random enemy",
                desc3: "Summon totem that deals \n[3] damage to random enemy",
            },
        },
        level2: {
            applyShock: {
                name: "Apply Shock",
                desc1: "Apply [1] shock to the first enemy",
                desc2: "Apply [1] shock to the first enemy",
                desc3: "Apply [1] shock to the first enemy",
            },
        },
        common: {
            removeBuff: {
                name: "Remove buff",
                desc1: "Remove [1] buff from enemy",
                desc2: "Remove [2] buffs from enemy",
                desc3: "Remove [3] buffs from enemy",
            },
            removeDebuff: {
                name: "Remove debuff",
                desc1: "Remove [1] debuff from ally",
                desc2: "Remove [2] debuffs from ally",
                desc3: "Remove [3] debuff from ally",
            },
        },
        mc: {
            BarbarianShout: {
                name: "Barbarian Shout",
                desc1: "Add hp regen value to self next basic attack",
                desc2: "Add hp regen value to self next basic attack",
                desc3: "Add hp regen value to self next basic attack",
            },
            DivineShield: {
                name: "Divine shield",
                desc1: "Shield self with magic, protecting from first attack",
                desc2: "Shield self with magic, protecting from first attack",
                desc3: "Shield self with magic, protecting from first attack",
            },
            shamanTotemEmpower: {
                name: "Empower all totems",
                desc1: "Increase all totems value by [1]+[MP*50%]",
                desc2: "Increase all totems value by [1]+[MP*70%]",
                desc3: "Increase all totems value by [1]+[MP]",
            },
        },
        mobs: {
            goblinShamanHpRegIncr: {
                name: "Increase regen all",
                desc1: "Increase regeneration [2] for all allies",
                desc2: "Increase regeneration [4] for all allies",
                desc3: "Increase regeneration [8] for all allies",
            },
        },
    },
    tags: {
        BARD: "bard",
        DARK: "dark",
        MAGIC: "magic",
        MASTER: "master",
        ORDER: "order",
        PRIEST: "holy",
        SUMMON: "mystic",
        WARRIOR: "war",
        WILD: "wild",
        //
        ALL: "all",
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
        //
        SKILL: "SKILL",
        ITEM: "ITEM",
        //
        DEAD: "DEAD",
        VICTORY: "VICTORY",
        DEFEAT: "DEFEAT",
        //
        // HINTS
        [ESelectCardHint.TAKE_ALL_REWARDS]: "TAKE ALL REWARDS",
        [ESelectCardHint.SELECT_SINGLE_HERO]: "SELECT SINGLE HERO",
        [ESelectCardHint.TAKE_REWARD]: "TAKE REWARD",
        [ESelectCardHint.TAKE_ITEM]: "TAKE ITEM",
        [ESelectCardHint.TAKE_SKILL]: "TAKE SKILL",
        [ESelectCardHint.SELECT_SINGLE]: "SELECT ONE OPTION",
        SELECT_SINGLE_DUNGEON: "SELECT A DUNGEON",
    },
};
