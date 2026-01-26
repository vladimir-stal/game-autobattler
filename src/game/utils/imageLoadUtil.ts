import { Scene } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { loadBasicHeroesImages } from "./load/basicHeroesImagesLoad";
import { loadImagesMobs } from "./load/imageLoadMobs";
import { loadMcHeroesImages } from "./load/mcHeroesImagesLoad";

// UNITS

//export const IMAGE_BARBARIAN = "IMAGE_BARBARIAN";
//export const IMAGE_SORCERESS = "IMAGE_SORCERESS";
//export const IMAGE_SHAMAN = "IMAGE_SHAMAN";
export const IMAGE_SHAMAN_RIGHT = "IMAGE_SHAMAN_RIGHT";
//export const IMAGE_SHAMAN_ATTACK = "IMAGE_SHAMAN_ATTACK";

//export const IMAGE_PRIEST = "IMAGE_PRIEST";
//export const IMAGE_BARD = "IMAGE_BARD";
//export const IMAGE_MAGIC = "IMAGE_MAGIC";
//export const IMAGE_ORDER = "IMAGE_ORDER";
//export const IMAGE_DARK = "IMAGE_DARK";
//export const IMAGE_SUMMON = "IMAGE_SUMMON";
//
// BASIC HEROES
//
//
// BARD
export const IMAGE_BARD_IDLE = "IMAGE_BARD_IDLE";
export const IMAGE_BARD_IDLE_BATTLE = "IMAGE_BARD_IDLE_BATTLE";
export const IMAGE_BARD_ATTACK = "IMAGE_BARD_ATTACK";
export const IMAGE_BARD_DEFEATED = "IMAGE_BARD_DEFEATED";
export const IMAGE_BARD_BUFF = "IMAGE_BARD_BUFF";
export const IMAGE_BARD_HURT = "IMAGE_BARD_HURT";
//
// DARK
export const IMAGE_DARK_IDLE = "IMAGE_DARK_IDLE";
export const IMAGE_DARK_IDLE_BATTLE = "IMAGE_DARK_IDLE_BATTLE";
export const IMAGE_DARK_ATTACK = "IMAGE_DARK_ATTACK";
export const IMAGE_DARK_SPELL = "IMAGE_DARK_SPELL";
export const IMAGE_DARK_DEFEATED = "IMAGE_DARK_DEFEATED";
export const IMAGE_DARK_HURT = "IMAGE_DARK_HURT";
//
// MAGIC
export const IMAGE_MAGIC_IDLE = "IMAGE_MAGIC_IDLE";
export const IMAGE_MAGIC_IDLE_BATTLE_0 = "IMAGE_MAGIC_IDLE_BATTLE_0";
export const IMAGE_MAGIC_ATTACK = "IMAGE_MAGIC_ATTACK";
export const IMAGE_MAGIC_SPELL = "IMAGE_MAGIC_SPELL";
export const IMAGE_MAGIC_DEFEATED = "IMAGE_MAGIC_DEFEATED";
export const IMAGE_MAGIC_HURT = "IMAGE_MAGIC_HURT";

//
// MASTER
export const IMAGE_MASTER_IDLE = "IMAGE_MASTER_IDLE";
export const IMAGE_MASTER_IDLE_BATTLE = "IMAGE_MASTER_IDLE_BATTLE";
export const IMAGE_MASTER_ATTACK = "IMAGE_MASTER_ATTACK";
export const IMAGE_MASTER_DEFEATED = "IMAGE_MASTER_DEFEATED";
export const IMAGE_MASTER_HURT = "IMAGE_MASTER_HURT";
export const IMAGE_MASTER_BUFF = "IMAGE_MASTER_BUFF";
//ORDER
//
export const IMAGE_ORDER_IDLE = "IMAGE_ORDER_IDLE";
export const IMAGE_ORDER_IDLE_BATTLE = "IMAGE_ORDER_IDLE_BATTLE";
export const IMAGE_ORDER_IDLE_BATTLE_0 = "IMAGE_ORDER_IDLE_BATTLE_0";
export const IMAGE_ORDER_HURT = "IMAGE_ORDER_HURT";
export const IMAGE_ORDER_ATTACK = "IMAGE_ORDER_ATTACK";
export const IMAGE_ORDER_SHIELD_BUFF = "IMAGE_ORDER_SHIELD_BUFF";
export const IMAGE_ORDER_DEFEATED = "IMAGE_ORDER_DEFEATED";
//
// PRIEST
export const IMAGE_PRIEST_IDLE = "IMAGE_PRIEST_IDLE";
export const IMAGE_PRIEST_IDLE_BATTLE = "IMAGE_PRIEST_IDLE_BATTLE";
export const IMAGE_PRIEST_ATTACK = "IMAGE_PRIEST_ATTACK";
export const IMAGE_PRIEST_HEAL = "IMAGE_PRIEST_HEAL";
export const IMAGE_PRIEST_DEFEATED = "IMAGE_PRIEST_DEFEATED";
export const IMAGE_PRIEST_HURT = "IMAGE_PRIEST_HURT";
//
// SUMMON
export const IMAGE_SUMMON_IDLE = "IMAGE_SUMMON_IDLE";
export const IMAGE_SUMMON_IDLE_BATTLE = "IMAGE_SUMMON_IDLE_BATTLE";
export const IMAGE_SUMMON_ATTACK = "IMAGE_SUMMON_ATTACK";
export const IMAGE_SUMMON_DEFEATED = "IMAGE_SUMMON_DEFEATED";
export const IMAGE_SUMMON_SPELL = "IMAGE_SUMMON_SPELL";
export const IMAGE_SUMMON_HURT = "IMAGE_SUMMON_HURT";
//
// WARRIOR
export const IMAGE_WARRIOR_IDLE = "IMAGE_WARRIOR_IDLE";
export const IMAGE_WARRIOR_IDLE_BATTLE = "IMAGE_WARRIOR_IDLE_BATTLE";
export const IMAGE_WARRIOR_ATTACK = "IMAGE_WARRIOR_ATTACK";
export const IMAGE_WARRIOR_BUFF_REGEN = "IMAGE_WARRIOR_BUFF_REGEN";
export const IMAGE_WARRIOR_DEFEATED = "IMAGE_WARRIOR_DEFEATED";
export const IMAGE_WARRIOR_HURT = "IMAGE_WARRIOR_HURT";
//
// WILD
export const IMAGE_WILD_IDLE = "IMAGE_WILD_IDLE";
export const IMAGE_WILD_IDLE_BATTLE = "IMAGE_WILD_IDLE_BATTLE";
export const IMAGE_WILD_DEFEATED = "IMAGE_WILD_DEFEATED";
export const IMAGE_WILD_BUFF_GREEN = "IMAGE_WILD_BUFF_GREEN";
export const IMAGE_WILD_ATTACK = "IMAGE_WILD_ATTACK";
export const IMAGE_WILD_HURT = "IMAGE_WILD_HURT";
//
//
//
//
//////////// MC HEROES //////////////////////////////////////////////////////////////
export const IMAGE_NECROMANCER = "IMAGE_NECROMANCER";
export const IMAGE_PALADIN = "IMAGE_PALADIN";
export const IMAGE_MONK = "IMAGE_MONK";
export const IMAGE_PREDATOR = "IMAGE_PREDATOR";
export const IMAGE_DRUID = "IMAGE_DRUID";
export const IMAGE_GLADIATOR = "IMAGE_GLADIATOR";
export const IMAGE_ALHEMIST = "IMAGE_ALHEMIST";
export const IMAGE_BLADEDANCER = "IMAGE_BLADEDANCER";
export const IMAGE_BEASTMASTER = "IMAGE_BEASTMASTER";
export const IMAGE_SHADOWMASTER = "IMAGE_SHADOWMASTER";
export const IMAGE_KNIGHT = "IMAGE_KNIGHT";
export const IMAGE_HUNTER = "IMAGE_HUNTER";
export const IMAGE_HERALD = "IMAGE_HERALD";
export const IMAGE_JESTER = "IMAGE_JESTER";
export const IMAGE_SHAMAN = "IMAGE_SHAMAN";
export const IMAGE_COMMANDER = "IMAGE_COMMANDER";
export const IMAGE_FORESTSPIRIT = "IMAGE_FORESTSPIRIT";
export const IMAGE_ORACLE = "IMAGE_ORACLE";
export const IMAGE_SAMURAI = "IMAGE_SAMURAI";
export const IMAGE_WITCH = "IMAGE_WITCH";
export const IMAGE_RUNECASTER = "IMAGE_RUNECASTER";
export const IMAGE_SORCERER = "IMAGE_SORCERER";
export const IMAGE_BLACKKNIGHT = "IMAGE_BLACKKNIGHT";
export const IMAGE_DOOMSAYER = "IMAGE_DOOMSAYER";
export const IMAGE_BATTLEMAGE = "IMAGE_BATTLEMAGE";
export const IMAGE_MINSTREL = "IMAGE_MINSTREL";
export const IMAGE_ASSASSIN = "IMAGE_ASSASSIN";
export const IMAGE_BARBARIAN = "IMAGE_BARBARIAN";
export const IMAGE_WARLOCK = "IMAGE_WARLOCK";
export const IMAGE_ZEALOT = "IMAGE_ZEALOT";
export const IMAGE_ILLUSIONIST = "IMAGE_ILLUSIONIST";
export const IMAGE_EXORCIST = "IMAGE_EXORCIST";
export const IMAGE_INQUISITOR = "IMAGE_INQUISITOR";
export const IMAGE_DUELIST = "IMAGE_DUELIST";
export const IMAGE_BISHOP = "IMAGE_BISHOP";
export const IMAGE_MAGIC_BARD = "IMAGE_MAGIC_BARD";
// MC ANIMATION
//
// BARBARIAN
export const IMAGE_BARBARIAN_IDLE = "IMAGE_BARBARIAN_IDLE";
export const IMAGE_BARBARIAN_BATTLE_IDLE = "IMAGE_BARBARIAN_BATTLE_IDLE";
export const IMAGE_BARBARIAN_ATTACK = "IMAGE_BARBARIAN_ATTACK";
//
// SAMURAI
export const IMAGE_SAMURAI_IDLE = "IMAGE_SAMURAI_IDLE";
export const IMAGE_SAMURAI_BATTLE_IDLE = "IMAGE_SAMURAI_BATTLE_IDLE";
export const IMAGE_SAMURAI_ATTACK = "IMAGE_SAMURAI_ATTACK";

export const IMAGE_FISHMAN = "IMAGE_FISHMAN";

// LEADERS

export const IMAGE_LEADER_1 = "IMAGE_LEADER_1";
export const IMAGE_LEADER_1_IDLE = "IMAGE_LEADER_1_IDLE";

// BOSSES
export const IMAGE_BOSS_MINOTAUR = "IMAGE_BOSS_MINOTAUR";
export const IMAGE_BOSS_MINOTAUR_IDLE = "IMAGE_BOSS_MINOTAUR_IDLE";
export const IMAGE_BOSS_MINOTAUR_ATTACK = "IMAGE_BOSS_MINOTAUR_ATTACK";
export const IMAGE_BOSS_MINOTAUR_STOMP = "IMAGE_BOSS_MINOTAUR_STOMP";
export const IMAGE_BOSS_MINOTAUR_SPELL = "IMAGE_BOSS_MINOTAUR_SPELL";
export const IMAGE_BOSS_MINOTAUR_HURT = "IMAGE_BOSS_MINOTAUR_HURT";

// TOTEMS

export const IMAGE_TOTEM_ATTACK = "IMAGE_TOTEM_ATTACK";

// ITEMS

export const IMAGE_ITEM_WAND_1 = "IMAGE_ITEM_WAND_1";
export const IMAGE_ITEM_STAFF_1 = "IMAGE_ITEM_STAFF_1";
export const IMAGE_ITEM_AXE_1 = "IMAGE_ITEM_AXE_1";
export const IMAGE_ITEM_DAGGER_1 = "IMAGE_ITEM_DAGGER_1";
export const IMAGE_ITEM_SWORD_1 = "IMAGE_ITEM_SWORD_1";
export const IMAGE_ITEM_SHIELD_1 = "IMAGE_ITEM_SHIELD_1";
export const IMAGE_ITEM_LUTE_1 = "IMAGE_ITEM_LUTE_1";
export const IMAGE_ITEM_MACE_1 = "IMAGE_ITEM_MACE_1";
export const IMAGE_ITEM_SCEPTER_1 = "IMAGE_ITEM_SCEPTER_1";
export const IMAGE_ITEM_TOTEM_1 = "IMAGE_ITEM_TOTEM_1";

export const IMAGE_ITEM_WAND_3 = "IMAGE_ITEM_WAND_3";
export const IMAGE_ITEM_STAFF_3 = "IMAGE_ITEM_STAFF_3";
export const IMAGE_ITEM_AXE_3 = "IMAGE_ITEM_AXE_3";
export const IMAGE_ITEM_DAGGER_3 = "IMAGE_ITEM_DAGGER_3";
export const IMAGE_ITEM_SWORD_3 = "IMAGE_ITEM_SWORD_3";
export const IMAGE_ITEM_SHIELD_3 = "IMAGE_ITEM_SHIELD_3";
export const IMAGE_ITEM_LUTE_3 = "IMAGE_ITEM_LUTE_3";
export const IMAGE_ITEM_MACE_3 = "IMAGE_ITEM_MACE_3";
export const IMAGE_ITEM_SCEPTER_3 = "IMAGE_ITEM_SCEPTER_3";
export const IMAGE_ITEM_TOTEM_3 = "IMAGE_ITEM_TOTEM_3";

export const IMAGE_ITEM_HELM_1 = "IMAGE_ITEM_HELM_1";
export const IMAGE_ITEM_ARMOR_1 = "IMAGE_ITEM_ARMOR_1";
export const IMAGE_ITEM_RING_ATTACK_1 = "IMAGE_ITEM_RING_ATTACK_1";
export const IMAGE_ITEM_RING_REGEN_1 = "IMAGE_ITEM_RING_REGEN_1";
export const IMAGE_ITEM_GOLD_BAG_1 = "IMAGE_ITEM_GOLD_BAG_1";
export const IMAGE_ITEM_RING_EXP_1 = "IMAGE_ITEM_RING_EXP_1";
export const IMAGE_ITEM_RING_HEAL_1 = "IMAGE_ITEM_RING_HEAL_1";
export const IMAGE_ITEM_PANTS_1 = "IMAGE_ITEM_PANTS_1";
export const IMAGE_ITEM_BOOTS_1 = "IMAGE_ITEM_BOOTS_1";

export const IMAGE_ITEM_GLOVES_21 = "IMAGE_ITEM_GLOVES_21";
export const IMAGE_ITEM_DARK_CLOAK = "IMAGE_ITEM_DARK_CLOAK";
export const IMAGE_ITEM_AXE_RED = "IMAGE_ITEM_AXE_RED";
export const IMAGE_ITEM_BOOK_MAGIC = "IMAGE_ITEM_BOOK_MAGIC";

export const IMAGE_ITEM_HOLY_GLOVES_1 = "IMAGE_ITEM_HOLY_GLOVES_1";
export const IMAGE_ITEM_MAGIC_GLOVES_1 = "IMAGE_ITEM_MAGIC_GLOVES_1";
// mob items
export const IMAGE_ITEM_GOBLIN_SILVER_COIN = "IMAGE_ITEM_GOBLIN_SILVER_COIN";
export const IMAGE_ITEM_GOBLIN_GOLD_COIN = "IMAGE_ITEM_GOBLIN_GOLD_COIN";
export const IMAGE_ITEM_GOBLIN_BONE_DAGGER = "IMAGE_ITEM_GOBLIN_BONE_DAGGER";
export const IMAGE_ITEM_PEASANTS_PITCHFORK = "IMAGE_ITEM_PEASANTS_PITCHFORK";
export const IMAGE_ITEM_REGEN_MANTLE = "IMAGE_ITEM_REGEN_MANTLE";

// ICONS
//
// STATUSES

export const IMAGE_STATUS_POISON = "IMAGE_STATUS_POISON";
export const IMAGE_STATUS_BLEED = "IMAGE_STATUS_BLEED";
export const IMAGE_STATUS_BURN = "IMAGE_STATUS_BURN";

export const IMAGE_ICON_ATTACK = "IMAGE_ICON_ATTACK";
export const IMAGE_ICON_HEALTH = "IMAGE_ICON_HEALTH";
export const IMAGE_ICON_SHIELD = "IMAGE_ICON_SHIELD";

export const IMAGE_ICON_REGEN = "IMAGE_ICON_REGEN";
export const IMAGE_ICON_MP = "IMAGE_ICON_MP";
export const IMAGE_ICON_PP = "IMAGE_ICON_PP";
export const IMAGE_ICON_CRIT = "IMAGE_ICON_CRIT";
export const IMAGE_ICON_EVASION = "IMAGE_ICON_EVASION";

export const IMAGE_ICON_CHAINED = "IMAGE_ICON_CHAINED";

//
// SKILLS
//

export const IMAGE_SKILL_PHYS_ATTACK = "IMAGE_SKILL_PHYS_ATTACK";
export const IMAGE_SKILL_BARD_BUFF_1 = "IMAGE_SKILL_BARD_BUFF_1";
export const IMAGE_SKILL_BARD_BUFF_2 = "IMAGE_SKILL_BARD_BUFF_2";
export const IMAGE_SKILL_SHIELD_BUFF_1 = "IMAGE_SKILL_SHIELD_BUFF_1";

export const IMAGE_SKILL_BURN = "IMAGE_SKILL_BURN";
export const IMAGE_SKILL_LIGHTNING = "IMAGE_SKILL_LIGHTNING";
export const IMAGE_SKILL_SUMMON_FIREFLY = "IMAGE_SKILL_SUMMON_FIREFLY";
export const IMAGE_SKILL_SUMMON_SPIRIT = "IMAGE_SKILL_SUMMON_SPIRIT";
export const IMAGE_SKILL_POISON = "IMAGE_SKILL_POISON";
export const IMAGE_SKILL_MAGIC_MISSILES = "IMAGE_SKILL_MAGIC_MISSILES";

export const IMAGE_SKILL_REGEN = "IMAGE_SKILL_REGEN";
export const IMAGE_SKILL_TOTEM_1 = "IMAGE_SKILL_TOTEM_1";
export const IMAGE_SKILL_SWORD_BUFF = "IMAGE_SKILL_SWORD_BUFF";
export const IMAGE_SKILL_SWORD_BUFF_2 = "IMAGE_SKILL_SWORD_BUFF_2";
export const IMAGE_SKILL_AXE_BUFF = "IMAGE_SKILL_AXE_BUFF";
export const IMAGE_SKILL_HEAL_1 = "IMAGE_SKILL_HEAL_1";

//

export function loadImages(scene: Scene) {
    // BASIC HEROES
    loadBasicHeroesImages(scene);

    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    //
    // MC HEROES
    //
    scene.load.image(IMAGE_ALHEMIST, "assets/sprites/units/alchemist.png");
    scene.load.image(IMAGE_BEASTMASTER, "assets/sprites/units/beastmaster.png");
    scene.load.image(IMAGE_BLADEDANCER, "assets/sprites/units/bladedancer.png");
    scene.load.image(IMAGE_DRUID, "assets/sprites/units/druid.png");
    scene.load.image(IMAGE_GLADIATOR, "assets/sprites/units/gladiator.png");
    scene.load.image(IMAGE_HERALD, "assets/sprites/units/herald.png");
    scene.load.image(IMAGE_HUNTER, "assets/sprites/units/hunter.png");
    scene.load.image(IMAGE_JESTER, "assets/sprites/units/jester.png");
    scene.load.image(IMAGE_KNIGHT, "assets/sprites/units/knight.png");
    scene.load.image(IMAGE_MONK, "assets/sprites/units/monk.png");
    scene.load.image(IMAGE_NECROMANCER, "assets/sprites/units/necrmancer.png");
    scene.load.image(IMAGE_PALADIN, "assets/sprites/units/paladin.png");
    scene.load.image(IMAGE_PREDATOR, "assets/sprites/units/predator.png");
    scene.load.image(IMAGE_SHADOWMASTER, "assets/sprites/units/shadowmaster.png");
    scene.load.image(IMAGE_SHAMAN, "assets/sprites/units/shaman2.png");
    scene.load.image(IMAGE_COMMANDER, "assets/sprites/units/commander.png");
    scene.load.image(IMAGE_FORESTSPIRIT, "assets/sprites/units/forest_spirit.png");
    scene.load.image(IMAGE_ORACLE, "assets/sprites/units/oracle.png");
    scene.load.image(IMAGE_SAMURAI, "assets/sprites/units/samurai.png");
    scene.load.image(IMAGE_WITCH, "assets/sprites/units/witch.png");
    scene.load.image(IMAGE_RUNECASTER, "assets/sprites/units/runecaster.png");
    scene.load.image(IMAGE_SORCERER, "assets/sprites/units/sorceress.png");
    scene.load.image(IMAGE_BLACKKNIGHT, "assets/sprites/units/black_knight.png");
    scene.load.image(IMAGE_DOOMSAYER, "assets/sprites/units/doomsayer.png");
    scene.load.image(IMAGE_BATTLEMAGE, "assets/sprites/units/battle_mage.png");
    scene.load.image(IMAGE_MINSTREL, "assets/sprites/units/minstrel.png");
    scene.load.image(IMAGE_ASSASSIN, "assets/sprites/units/assassin.png");
    scene.load.image(IMAGE_BARBARIAN, "assets/sprites/units/barbarian.png");
    scene.load.image(IMAGE_WARLOCK, "assets/sprites/units/warlock.png");
    scene.load.image(IMAGE_ZEALOT, "assets/sprites/units/zealot.png");
    scene.load.image(IMAGE_ILLUSIONIST, "assets/sprites/units/magician.png");
    scene.load.image(IMAGE_EXORCIST, "assets/sprites/units/exorcist.png");
    scene.load.image(IMAGE_INQUISITOR, "assets/sprites/units/inquisitor.png");
    scene.load.image(IMAGE_DUELIST, "assets/sprites/units/duelist.png");
    scene.load.image(IMAGE_BISHOP, "assets/sprites/units/bishop.png");
    scene.load.image(IMAGE_MAGIC_BARD, "assets/sprites/units/magic_bard.png");

    scene.load.image(IMAGE_FISHMAN, "assets/sprites/units/fishman1.png");

    // MC ANIMATION

    loadMcHeroesImages(scene);

    // BOSSES

    scene.load.image(IMAGE_BOSS_MINOTAUR, "assets/sprites/units/bosses/minotaur.png");

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_IDLE, "assets/sprites/units/bosses/boss_minotuar_idle_500_t.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_ATTACK, "assets/sprites/units/bosses/boss_minotuar_attack_500_t.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_STOMP, "assets/sprites/units/bosses/boss_minotuar_jump_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_SPELL, "assets/sprites/units/bosses/boss_minotuar_spell_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_HURT, "assets/sprites/units/bosses/boss_minotuar_hurt_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    //
    // LEADERS

    scene.load.image(IMAGE_LEADER_1, "assets/sprites/leader/rider_1.png");
    scene.load.spritesheet(IMAGE_LEADER_1_IDLE, "assets/sprites/leader/leader1_sprite.png", {
        frameWidth: 600,
        frameHeight: 600,
    });

    // MOBS

    loadImagesMobs(scene);

    // scene.load.image(IMAGE_SKELETON_1, "assets/sprites/units/mobs/skeleton_1/skeleton_1.png");
    // scene.load.image(IMAGE_GOBLIN_1, "assets/sprites/units/mobs/goblin_1/goblin_1.png");
    // scene.load.image(IMAGE_GOBLIN_2, "assets/sprites/units/mobs/goblin_2/goblin_2.png");
    // scene.load.image(IMAGE_PEASANT_1, "assets/sprites/units/mobs/peasant/peasant.png");

    // // SKELETON_1

    // scene.load.spritesheet(IMAGE_SKELETON_BATTLE_IDLE, "assets/sprites/units/mobs/skeleton_1/skeleton_battle_idle_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_SKELETON_ATTACK, "assets/sprites/units/mobs/skeleton_1/skeleton_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // // GOBLIN_1

    // scene.load.spritesheet(IMAGE_GOBLIN_1_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_1/goblin_1_battle_idle_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_GOBLIN_1_ATTACK, "assets/sprites/units/mobs/goblin_1/goblin_1_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // // GOBLIN_2

    // scene.load.spritesheet(IMAGE_GOBLIN_2_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_2/goblin_2_battle_idle_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_GOBLIN_2_ATTACK, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // // GOBLIN_SHAMAN

    // scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_2/goblin_2_battle_idle_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_ATTACK, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_SPELL, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    //     scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_DEFEATED, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // // PEASANT

    // scene.load.spritesheet(IMAGE_PEASANT_BATTLE_IDLE, "assets/sprites/units/mobs/peasant/peasant_battle_idle_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // scene.load.spritesheet(IMAGE_PEASANT_ATTACK, "assets/sprites/units/mobs/peasant/peasant_attack_cut_400.png", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // TOTEMS
    scene.load.image(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/totem1.png");

    // ITEMS

    scene.load.image(IMAGE_ITEM_WAND_1, "assets/sprites/items/wand_1.png");
    scene.load.image(IMAGE_ITEM_STAFF_1, "assets/sprites/items/staff_1.png");
    scene.load.image(IMAGE_ITEM_AXE_1, "assets/sprites/items/axe_1.png");
    scene.load.image(IMAGE_ITEM_DAGGER_1, "assets/sprites/items/dagger_1.png");
    scene.load.image(IMAGE_ITEM_SWORD_1, "assets/sprites/items/sword_1.png");
    scene.load.image(IMAGE_ITEM_SHIELD_1, "assets/sprites/items/shield_1.png");
    scene.load.image(IMAGE_ITEM_LUTE_1, "assets/sprites/items/lute_1.png");
    scene.load.image(IMAGE_ITEM_MACE_1, "assets/sprites/items/mace_1.png");
    scene.load.image(IMAGE_ITEM_SCEPTER_1, "assets/sprites/items/scepter_1.png");
    scene.load.image(IMAGE_ITEM_TOTEM_1, "assets/sprites/items/totem_skull_1.png");

    scene.load.image(IMAGE_ITEM_HELM_1, "assets/sprites/items/helm_1.png");
    scene.load.image(IMAGE_ITEM_ARMOR_1, "assets/sprites/items/armor_1.png");
    scene.load.image(IMAGE_ITEM_PANTS_1, "assets/sprites/items/pants_1.png");
    scene.load.image(IMAGE_ITEM_BOOTS_1, "assets/sprites/items/boots_1.png");

    /// LVL 3 WEAPONS

    scene.load.image(IMAGE_ITEM_WAND_3, "assets/sprites/items/3/wand_2.png");
    scene.load.image(IMAGE_ITEM_STAFF_3, "assets/sprites/items/3/wand_2.png");
    scene.load.image(IMAGE_ITEM_AXE_3, "assets/sprites/items/3/axe_3.png");
    scene.load.image(IMAGE_ITEM_DAGGER_3, "assets/sprites/items/3/dagger_2.png");
    scene.load.image(IMAGE_ITEM_SWORD_3, "assets/sprites/items/3/sword_3.png");
    scene.load.image(IMAGE_ITEM_SHIELD_3, "assets/sprites/items/3/shield_2.png");
    //scene.load.image(IMAGE_ITEM_LUTE_3, "assets/sprites/items/3/lute_1.png");
    scene.load.image(IMAGE_ITEM_MACE_3, "assets/sprites/items/3/mace_2.png");
    scene.load.image(IMAGE_ITEM_SCEPTER_3, "assets/sprites/items/3/scepter_2.png");
    scene.load.image(IMAGE_ITEM_TOTEM_3, "assets/sprites/items/3/totem_3.png");

    //

    scene.load.image(IMAGE_ITEM_RING_ATTACK_1, "assets/sprites/items/ring_attack_1.png");
    scene.load.image(IMAGE_ITEM_RING_REGEN_1, "assets/sprites/items/ring_regen_1.png");
    scene.load.image(IMAGE_ITEM_RING_EXP_1, "assets/sprites/items/ring_exp_1.png");
    scene.load.image(IMAGE_ITEM_RING_HEAL_1, "assets/sprites/items/heal_ring_1.png");

    scene.load.image(IMAGE_ITEM_GOLD_BAG_1, "assets/sprites/items/gold_bag_1.png");

    scene.load.image(IMAGE_ITEM_GLOVES_21, "assets/sprites/items/gloves_21.png");
    scene.load.image(IMAGE_ITEM_DARK_CLOAK, "assets/sprites/items/dark_cloak.png");
    scene.load.image(IMAGE_ITEM_AXE_RED, "assets/sprites/items/axe_red.png");
    scene.load.image(IMAGE_ITEM_BOOK_MAGIC, "assets/sprites/items/magic_book.png");

    scene.load.image(IMAGE_ITEM_HOLY_GLOVES_1, "assets/sprites/items/holy_gloves1.png");
    scene.load.image(IMAGE_ITEM_MAGIC_GLOVES_1, "assets/sprites/items/magic_gloves1.png");
    // mob items
    scene.load.image(IMAGE_ITEM_GOBLIN_SILVER_COIN, "assets/sprites/items/goblin_silver_coin.png");
    scene.load.image(IMAGE_ITEM_GOBLIN_GOLD_COIN, "assets/sprites/items/goblin_gold_coin.png");
    scene.load.image(IMAGE_ITEM_GOBLIN_BONE_DAGGER, "assets/sprites/items/mobs/bone_dagger.png");
    scene.load.image(IMAGE_ITEM_PEASANTS_PITCHFORK, "assets/sprites/items/mobs/peasants_pitchfork.png");
    scene.load.image(IMAGE_ITEM_REGEN_MANTLE, "assets/sprites/items/mobs/regenMantle.png");

    // STATUSES

    //scene.load.image(IMAGE_STATUS_POISON, "assets/sprites/poison_icon.png");
    //scene.load.image(IMAGE_STATUS_BLEED, "assets/sprites/bleed_icon.png");
    //scene.load.image(IMAGE_STATUS_BURN, "assets/sprites/burn_icon.png");

    scene.load.image(IMAGE_ICON_ATTACK, "assets/sprites/icons/sword.png");
    scene.load.image(IMAGE_ICON_HEALTH, "assets/sprites/icons/heart.png");
    scene.load.image(IMAGE_ICON_SHIELD, "assets/sprites/icons/shield.png");
    scene.load.image(IMAGE_ICON_REGEN, "assets/sprites/icons/regen.png");
    scene.load.image(IMAGE_ICON_MP, "assets/sprites/icons/magic_power.png");
    scene.load.image(IMAGE_ICON_PP, "assets/sprites/icons/physical_power.png");
    scene.load.image(IMAGE_ICON_CRIT, "assets/sprites/icons/crit.png");
    scene.load.image(IMAGE_ICON_EVASION, "assets/sprites/icons/evasion.png");

    scene.load.image(IMAGE_ICON_CHAINED, "assets/sprites/icons/chain.png");

    // SKILLS

    scene.load.image(IMAGE_SKILL_PHYS_ATTACK, "assets/sprites/skills/sword_attack_100.png");
    scene.load.image(IMAGE_SKILL_BARD_BUFF_1, "assets/sprites/skills/bard_buff_1.png");
    scene.load.image(IMAGE_SKILL_BARD_BUFF_2, "assets/sprites/skills/bard_buff_2.png");
    scene.load.image(IMAGE_SKILL_SHIELD_BUFF_1, "assets/sprites/skills/shield_empower.png");

    scene.load.image(IMAGE_SKILL_BURN, "assets/sprites/skills/burn.png");
    scene.load.image(IMAGE_SKILL_LIGHTNING, "assets/sprites/skills/lightning.png");
    scene.load.image(IMAGE_SKILL_SUMMON_FIREFLY, "assets/sprites/skills/summon_1.png");
    scene.load.image(IMAGE_SKILL_SUMMON_SPIRIT, "assets/sprites/skills/summon_2.png");
    scene.load.image(IMAGE_SKILL_POISON, "assets/sprites/skills/poison1.png");
    scene.load.image(IMAGE_SKILL_MAGIC_MISSILES, "assets/sprites/skills/magic_missiles.png");

    scene.load.image(IMAGE_SKILL_REGEN, "assets/sprites/skills/regen.png");
    scene.load.image(IMAGE_SKILL_TOTEM_1, "assets/sprites/skills/summon_totem_1.png");
    scene.load.image(IMAGE_SKILL_SWORD_BUFF, "assets/sprites/skills/sword_buff.png");
    scene.load.image(IMAGE_SKILL_SWORD_BUFF_2, "assets/sprites/skills/sword_buff_2.png");
    scene.load.image(IMAGE_SKILL_AXE_BUFF, "assets/sprites/skills/empower_axe.png");
    scene.load.image(IMAGE_SKILL_HEAL_1, "assets/sprites/skills/holy_spell_1.png");
}
