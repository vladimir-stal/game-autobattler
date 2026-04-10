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
    THeroAttribute,
} from "../types";
import { SKILLS_EN } from "./skills_en";

type TSkillI18n = Record<number | "name" | "desc1" | "desc2" | "desc3", string>;

export interface Ii18n {
    attributes: {
        attribute: Record<THeroAttribute, string>;
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
        FIREFLY: string;
        WOLF: string;
        STRONGWOLF: string;
    };
    totems: {
        basicWildTotem: string;
    };
    items: {
        coin: string;
        peasantPitchfork: string;
        goblin_silver_coin: string;
        goblin_gold_coin: string;
        goblinBoneDagger: string;
        regen_mantle: string;
        spiritArmor: string;
        spiritSpear: string;
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
        wand5: string;
        totem5: string;
        music5: string;
        staff5: string;
        dagger5: string;
        totem41: string;
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
        // COMMON
        armorMassHp: string;
        helmetMassArmor: string;
        //
    };
    rooms: Partial<Record<ERoomType, string>>;
    roomDescriptions: Partial<Record<ERoomType, string>>;
    skills: {
        basic: Record<string, TSkillI18n>;
        level2: Record<string, TSkillI18n>;
        common: Record<string, TSkillI18n>;
        mobs: Record<string, TSkillI18n>;
        mc: Record<string, TSkillI18n>;
        // basic: {
        //     phycNBleed: TSkillI18n;
        //     feintAttack: TSkillI18n;
        //     magicRain: TSkillI18n;
        //     buffBaNextBaAll: TSkillI18n;
        //     buffBaSelf: TSkillI18n;
        //     buffPpAll: TSkillI18n;
        //     buffNextBaX: TSkillI18n;
        //     phycAttack: TSkillI18n;
        //     attrIncArmorSelf: TSkillI18n;
        //     attrAttackSelf: TSkillI18n;
        //     magicAttack: TSkillI18n;
        //     applyBurn: TSkillI18n;
        //     attrIncrHpReg: TSkillI18n;
        //     totemAttack: TSkillI18n;
        //     poisonRandom: TSkillI18n;
        //     magicAttackX3: TSkillI18n;
        //     buffNextBa: TSkillI18n;
        //     healFirst: TSkillI18n;
        //     healSelf: TSkillI18n;
        //     fireflySummon: TSkillI18n;
        //     sparkSummon: TSkillI18n;
        // };
        // level2: {
        //     // magic
        //     applyShock: TSkillI18n;
        // };
        // common: {
        //     removeBuff: TSkillI18n;
        //     removeDebuff: TSkillI18n;
        // };
        // mobs: {
        //     goblinShamanHpRegIncr: TSkillI18n;
        // };
        // mc: {
        //     DivineShield: TSkillI18n;
        //     BarbarianShout: TSkillI18n;
        //     shamanTotemEmpower: TSkillI18n;
        // };
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
        EQUIP: string;
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
        EXP: string;
        EXP_PARTY: string;
        ATTRIBUTE: string;
        CHAINED_SKILL: string;
        ON_START_SKILL: string;
        NO_BA_SKILL: string;
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
        COIN_SELL: string;
    };
}

export const i18n: Ii18n = {
    attributes: {
        attribute: {
            basicArmor: "armor",
            basicAttack: "basicAttack",
            basicCritChance: "basicCritChance",
            basicEvasionChance: "basicEvasionChance",
            basicHpRegen: "basicHpRegen",
            basicMagicPower: "basicMagicPower",
            basicMaxHp: "health",
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
            STAT_BASIC_ATTACK: "BASIC_ATTACK",
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
            CAST_SKILL_X_ROUND: "Once per combat, applies effect at the\nend of round",
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
        BATTLE_MAGE: "Battle Mage",
        BEAST_MASTER: "Beast Master",
        BISHOP: "Bishop",
        BLACK_KNIGHT: "Black Knight",
        BLADEDANCER: "Bladedancer",
        COMMANDER: "Commander",
        DOOMSAYER: "Doomsayer",
        DRUID: "Druid",
        DUELIST: "Duelist",
        EXORCIST: "Exorcist",
        FOREST_SPIRIT: "Forest Spirit",
        GLADIATOR: "Gladiator",
        HERALD: "Herald",
        HUNTER: "Hunter",
        ILLUSIONIST: "Illusionist",
        INQUISITOR: "Inquisitor",
        KNIGHT: "Royal knight",
        MAGIC_BARD: "Magic Bard",
        MIMIC: "Mimic",
        MINSTREL: "Minstrel",
        MONK: "Monk",
        NECROMANCER: "Necromancer",
        ORACLE: "Oracle",
        PALADIN: "Paladin",
        PREDATOR: "Predator",
        RUNECASTER: "Runecaster",
        SAMURAI: "Samurai",
        SHADOW_MASTER: "Shadow Master",
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
        FIREFLY: "Firefly",
        WOLF: "Wolf",
        STRONGWOLF: "Strong wolf",
    },
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
        // COMMON
        armorMassHp: "Hp aura chest",
        helmetMassArmor: "Armor aura helmet",
        totem41: "Toxic totem",
        dagger5: "The Flurry",
        wand5: "The Thunder",
        totem5: "The Titan",
        music5: "The Chorus",
        staff5: "The Volcano",
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
        // mob items
        spiritSpear: "Spirit Spear",
        spiritArmor: "Spirit Armor",
        regen_mantle: "Mantle of regeneration",
        goblinBoneDagger: "Bone dagger",
        goblin_gold_coin: "Gold coin",
        goblin_silver_coin: "Silver coin",
        peasantPitchfork: "Pitchfork",
        coin: "The Coin",
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
    roomDescriptions: {},
    skills: SKILLS_EN,
    // skills: {
    //     basic: {
    //         //
    //         // BARD
    //         //
    //         buffBaNextBaAll: {
    //             name: "Buff BA all",
    //             desc1: "Buff next basic attack for [2] damage for all allies",
    //             desc2: "Buff next basic attack for [3] damage for all allies",
    //             desc3: "Buff next basic attack for [4] damage for all allies",
    //         },
    //         buffBaSelf: {
    //             name: "Buff self BA",
    //             desc1: "Buff self basic attack [1]",
    //             desc2: "Buff self basic attack [2]",
    //             desc3: "Buff self basic attack [3]",
    //         },
    //         buffPpAll: {
    //             name: "Buff PP all",
    //             desc1: "Buff Physical power \n[1]+[MP*50%] all allies",
    //             desc2: "Buff Physical power \n[1]+[MP*70%] all allies",
    //             desc3: "Buff Physical power \n[1]+[MP] all allies",
    //         },
    //         //
    //         // DARK
    //         //
    //         poisonRandom: {
    //             name: "Posion random",
    //             desc1: "Poison [3] random enemy",
    //             desc2: "Poison [4] random enemy",
    //             desc3: "Poison [6] random enemy",
    //         },
    //         magicAttackX3: {
    //             name: "Magic missiles",
    //             desc1: "Deal [2] magic damage \nto random enemy 3 times",
    //             desc2: "Deal [3] magic damage \nto random enemy 3 times",
    //             desc3: "Deal [4] magic damage \nto random enemy 3 times",
    //         },
    //         magicRain: {
    //             name: "Magic rain",
    //             desc1: "Deal [2] magic damage \nto random enemy [1+MP*40%] times",
    //             desc2: "Deal [2] magic damage \nto random enemy [2+MP*50%] times",
    //             desc3: "Deal [2] magic damage \nto random enemy [3+MP*60%] times",
    //         },
    //         //
    //         // MASTER
    //         //
    //         buffNextBaX: {
    //             name: "Next BAx buff",
    //             desc1: "Multiply x[1.4] self next basic attack",
    //             desc2: "Multiply x[1.6] self next basic attack",
    //             desc3: "Multiply x[1.8] self next basic attack",
    //         },
    //         feintAttack: {
    //             name: "Feint attack",
    //             desc1: "Reduce self basic attack\nby 35% and gain same armor\namount plus [PP*20%]",
    //             desc2: "Reduce self basic attack\nby 35% and gain same armor\namount plus [PP*30%]",
    //             desc3: "Reduce self basic attack\nby 35% and gain same armor\namount plus [PP*40%]",
    //         },
    //         //
    //         // MAGIC
    //         //
    //         magicAttack: {
    //             name: "Magic Attack",
    //             desc1: "Deal [5] magic damage to first enemy",
    //             desc2: "Deal [7] magic damage to first enemy",
    //             desc3: "Deal [9] magic damage to first enemy",
    //         },
    //         applyBurn: {
    //             name: "Apply Burn",
    //             desc1: "Apply [3] burn on the first enemy",
    //             desc2: "Apply [4] burn on the first enemy",
    //             desc3: "Apply [6] burn on the first enemy",
    //         },
    //         //
    //         // MASTER + WARRIOR
    //         //
    //         phycAttack: {
    //             name: "Phys Attack",
    //             desc1: "Deal [4+PPx35%] physical\ndamage to first enemy",
    //             desc2: "Deal [5+PPx50%] physical\ndamage to first enemy",
    //             desc3: "Deal [6+PPx65%] physical\ndamage to first enemy",
    //         },
    //         phycNBleed: {
    //             name: "PhysNBleed Attack",
    //             desc1: "Deal [2+PPx35%] physical\ndamage to first enemy\nand apply [1] bleed",
    //             desc2: "Deal [2+PPx50%] physical\ndamage to first enemy\nand apply [2] bleed",
    //             desc3: "Deal [2+PPx65%] physical\ndamage to first enemy\nand apply [3] bleed",
    //         },
    //         //
    //         // ORDER
    //         //
    //         attrIncArmorSelf: {
    //             name: "Armor self",
    //             desc1: "Armor self [3]",
    //             desc2: "Armor self [5]",
    //             desc3: "Armor self [8]",
    //         },
    //         attrAttackSelf: {
    //             name: "Incr Attack self",
    //             desc1: "Increase self attack [1]",
    //             desc2: "Increase self attack [2]",
    //             desc3: "Increase self attack [3]",
    //         },
    //         //
    //         // PRIEST
    //         //
    //         healFirst: {
    //             name: "Heal first",
    //             desc1: "Heal [3 +35% MP] first ally",
    //             desc2: "Heal [5 +50% MP] first ally",
    //             desc3: "Heal [7 +65% MP] first ally",
    //         },
    //         healSelf: {
    //             name: "Heal self",
    //             desc3: "Heal [8 +65% MP] self",
    //             desc2: "Heal [6 +50% MP] self",
    //             desc1: "Heal [4 +35% MP] self",
    //         },
    //         //
    //         // SUMMON
    //         //
    //         fireflySummon: {
    //             name: "Firefly Summon",
    //             desc3: "Summon magic creature [stats]",
    //             desc2: "Summon magic creature [stats]",
    //             desc1: "Summon magic creature [stats]",
    //         },
    //         sparkSummon: {
    //             name: "Summon spirit warrior",

    //             desc1: "Summon spirit warrior [stats]",
    //             desc2: "Summon spirit warrior [stats]",
    //             desc3: "Summon spirit warrior [stats]",
    //         },
    //         //
    //         // WARRIOR
    //         //
    //         buffNextBa: {
    //             name: "Next BA+ buff",
    //             desc1: "Buff [4] self next basic attack",
    //             desc2: "Buff [6] self next basic attack",
    //             desc3: "Buff [8] self next basic attack",
    //         },
    //         //
    //         // WILD
    //         //
    //         attrIncrHpReg: {
    //             name: "Wild regen",
    //             desc1: "Increase self hp regen [1]",
    //             desc2: "Increase self hp regen [2]",
    //             desc3: "Increase self hp regen [3]",
    //         },
    //         totemAttack: {
    //             name: "Wild totem",
    //             desc1: "Summon totem that deals \n[1] damage to random enemy",
    //             desc2: "Summon totem that deals \n[2] damage to random enemy",
    //             desc3: "Summon totem that deals \n[3] damage to random enemy",
    //         },
    //     },
    //     level2: {
    //         applyShock: {
    //             name: "Apply Shock",
    //             desc1: "Apply [1] shock to the first enemy",
    //             desc2: "Apply [1] shock to the first enemy",
    //             desc3: "Apply [1] shock to the first enemy",
    //         },
    //     },
    //     common: {
    //         removeBuff: {
    //             name: "Remove buff",
    //             desc1: "Remove [1] buff from enemy",
    //             desc2: "Remove [2] buffs from enemy",
    //             desc3: "Remove [3] buffs from enemy",
    //         },
    //         removeDebuff: {
    //             name: "Remove debuff",
    //             desc1: "Remove [1] debuff from ally",
    //             desc2: "Remove [2] debuffs from ally",
    //             desc3: "Remove [3] debuff from ally",
    //         },
    //     },
    //     mc: {
    //         BarbarianShout: {
    //             name: "Barbarian Shout",
    //             desc1: "Add hp regen value to self next basic attack",
    //             desc2: "Add hp regen value to self next basic attack",
    //             desc3: "Add hp regen value to self next basic attack",
    //         },
    //         DivineShield: {
    //             name: "Divine shield",
    //             desc1: "Shield self with magic, protecting from first attack",
    //             desc2: "Shield self with magic, protecting from first attack",
    //             desc3: "Shield self with magic, protecting from first attack",
    //         },
    //         shamanTotemEmpower: {
    //             name: "Empower all totems",
    //             desc1: "Increase all totems value by [1]+[MP*50%]",
    //             desc2: "Increase all totems value by [1]+[MP*70%]",
    //             desc3: "Increase all totems value by [1]+[MP]",
    //         },
    //     },
    //     mobs: {
    //         goblinShamanHpRegIncr: {
    //             name: "Increase regen all",
    //             desc1: "Increase regeneration [2] for all allies",
    //             desc2: "Increase regeneration [4] for all allies",
    //             desc3: "Increase regeneration [8] for all allies",
    //         },
    //     },
    // },
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
        MOB: "mob",
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
        EQUIP: "EQUIP",
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
        [EHeroAttackType.MAGIC]: "magic",
        [EHeroAttackType.PHYSICAL]: "phys",
        //
        ATTRIBUTE: "ATTRIBUTE",
        SKILL: "SKILL",
        ITEM: "ITEM",
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
        COIN_SELL: "Collect to increase its\nprice, or sell it for",
    },
};
