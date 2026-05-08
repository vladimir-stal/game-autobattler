import { Scene } from "phaser";
import {
    loadBardBattleHeroImages,
    loadBasicHeroesIdleImages,
    loadDarkBattleHeroImages,
    loadMagicBattleHeroImages,
    loadMasterBattleHeroImages,
    loadOrderBattleHeroImages,
    loadPriestBattleHeroImages,
    loadSummonBattleHeroImages,
    loadWarriorBattleHeroImages,
    loadWildBattleHeroImages,
} from "./load/basicHeroesImagesLoad";
import {
    IMAGE_GOBLIN_1,
    IMAGE_GOBLIN_2,
    IMAGE_PEASANT_1,
    IMAGE_SKELETON_1,
    IMAGE_WOLF_1,
    IMAGE_WOLF_2,
    loadBossMinotaurImages,
    loadGoblinBattleImages,
    loadGoblinIdleImages,
    loadGoblinMageBattleImages,
    loadGoblinMageIdleImages,
    loadGoblinShamanBattleImages,
    loadPeasantBattleImages,
    loadPeasantIdleImages,
    loadPirate1BattleImages,
    loadPirate1IdleImages,
    loadPirate2BattleImages,
    loadPirate2IdleImages,
    loadSkeletonBattleImages,
    loadSkeletonIdleImages,
    loadSkeletonMageBattleImages,
    loadSkeletonMageIdleImages,
    loadSummonFireflyIdleImages,
    loadSummonFireflyImages,
    loadSummonShieldWarriorIdleImages,
    loadSummonShieldWarriorImages,
    loadSummonWarriorIdleImages,
    loadSummonWarriorImages,
    loadWolf1BattleImages,
    loadWolf1IdleImages,
    loadWolf2BattleImages,
    loadWolf2IdleImages,
} from "./load/imageLoadMobs";
import { loadMcHeroBattleImages, loadMcHeroesImages, loadMcHeroIdleImages } from "./load/mcHeroesImagesLoad";
import {
    loadBardEffectsImages,
    loadCommonImagesEffects,
    loadDarkEffectsImages,
    loadMagicEffectsImages,
    loadMasterEffectsImages,
    loadMcHeroEffectsImages,
    loadOrderEffectsImages,
    loadPriestEffectsImages,
    loadSummonEffectsImages,
    loadWarriorEffectsImages,
    loadWildEffectsImages,
} from "./load/imageLoadEffects";
import { loadImagesItems } from "./load/imageLoadItems";
import { loadImagesUIEffects } from "./load/imageLoadUIEffects";
import { loadSkillImages } from "./load/skillImagesLoad";
import {
    createBardBattleAnimations,
    createDarkBattleAnimations,
    createMagicBattleAnimations,
    createMasterBattleAnimations,
    createOrderBattleAnimations,
    createPriestBattleAnimations,
    createSummonBattleAnimations,
    createWarriorBattleAnimations,
    createWildBattleAnimations,
} from "./animations/basicHeroesAnimations";
import {
    createBardEffectAnimations,
    createDarkEffectAnimations,
    createMagicEffectAnimations,
    createMasterEffectAnimations,
    createMcHeroEffectAnimations,
    createOrderEffectAnimations,
    createPriestEffectAnimations,
    createSummonEffectAnimations,
    createWarriorEffectAnimations,
    createWildEffectAnimations,
} from "./animations/effectAnimations";
import {
    createBossMinotaurAnimations,
    createFireflyAnimations,
    createFireflyIdleAnimations,
    createGoblinAnimations,
    createGoblinMageAnimations,
    createGoblinShamanAnimations,
    createPeasantAnimations,
    createPirate1Animations,
    createPirate1IdleAnimations,
    createPirate2Animations,
    createPirate2IdleAnimations,
    createSkeletonAnimations,
    createSkeletonMageAnimations,
    createSpiritShieldWarriorAnimations,
    createSpiritShieldWarriorIdleAnimations,
    createSpiritWarriorAnimations,
    createWolf1Animations,
    createWolf1IdleAnimations,
    createWolf2Animations,
    createWolf2IdleAnimations,
} from "./animations/mobsAnimations";
import { TOTEM_ID_WILD_BASIC } from "../totemConsts";
import { loadBasicWildTotemImages } from "./load/totemsImagesLoad";
import { createWildBasicTotemAnimations } from "./animations/totemAnimations";
import { EHeroClass } from "../../types";
import { createMcHeroBattleAnimations, createMcHeroIdleAnimations } from "./animations/mcHeroesAnimations";
import { BOSS_MINOTAUR_ID, PEASANT_ID, WOLF_ID } from "../units/mobUnitConsts";
import { NECROMANCER_MC_SKILL_ID } from "../skills/mc/necromancerSkills";

// UNITS

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
export const IMAGE_MASTER_ATTACK_2 = "IMAGE_MASTER_ATTACK_2";
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
export const IMAGE_ORDER_ATTACK_2 = "IMAGE_ORDER_ATTACK_2";
export const IMAGE_ORDER_SHIELD_BUFF = "IMAGE_ORDER_SHIELD_BUFF";
export const IMAGE_ORDER_DEFEATED = "IMAGE_ORDER_DEFEATED";
//
// PRIEST
export const IMAGE_PRIEST_IDLE = "IMAGE_PRIEST_IDLE";
export const IMAGE_PRIEST_IDLE_BATTLE = "IMAGE_PRIEST_IDLE_BATTLE";
export const IMAGE_PRIEST_ATTACK = "IMAGE_PRIEST_ATTACK";
export const IMAGE_PRIEST_ATTACK_2 = "IMAGE_PRIEST_ATTACK_2";
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
export const IMAGE_PALADIN = "IMAGE_PALADIN";
export const IMAGE_MONK = "IMAGE_MONK";
export const IMAGE_PREDATOR = "IMAGE_PREDATOR";
export const IMAGE_DRUID = "IMAGE_DRUID";
export const IMAGE_GLADIATOR = "IMAGE_GLADIATOR";
export const IMAGE_ALHEMIST = "IMAGE_ALHEMIST";
export const IMAGE_BEASTMASTER = "IMAGE_BEASTMASTER";
export const IMAGE_SHADOWMASTER = "IMAGE_SHADOWMASTER";
export const IMAGE_KNIGHT = "IMAGE_KNIGHT";
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
// BLADEDANCER
export const IMAGE_BLADEDANCER = "IMAGE_BLADEDANCER";

// COMMANDER
export const IMAGE_COMMANDER_IDLE = "IMAGE_COMMANDER_IDLE";
export const IMAGE_COMMANDER_BATTLE_IDLE = "IMAGE_COMMANDER_BATTLE_IDLE";
export const IMAGE_COMMANDER_ATTACK = "IMAGE_COMMANDER_ATTACK";
//DOOMSAYER
export const IMAGE_DOOMSAYER_IDLE = "IMAGE_DOOMSAYER_IDLE";
export const IMAGE_DOOMSAYER_BATTLE_IDLE = "IMAGE_DOOMSAYER_BATTLE_IDLE";
export const IMAGE_DOOMSAYER_ATTACK = "IMAGE_DOOMSAYER_ATTACK";
export const IMAGE_DOOMSAYER_SKILL = "IMAGE_DOOMSAYER_SKILL";
// PREDATOR
export const IMAGE_PREDATOR_IDLE = "IMAGE_PREDATOR_IDLE";
export const IMAGE_PREDATOR_BATTLE_IDLE = "IMAGE_PREDATOR_BATTLE_IDLE";
export const IMAGE_PREDATOR_ATTACK = "IMAGE_PREDATOR_ATTACK";

// RUNECASTER
export const IMAGE_RUNECASTER_IDLE = "IMAGE_RUNECASTER_IDLE";
// SAMURAI
export const IMAGE_SAMURAI_IDLE = "IMAGE_SAMURAI_IDLE";
export const IMAGE_SAMURAI_BATTLE_IDLE = "IMAGE_SAMURAI_BATTLE_IDLE";
export const IMAGE_SAMURAI_ATTACK = "IMAGE_SAMURAI_ATTACK";
export const IMAGE_SAMURAI_ATTACK_2 = "IMAGE_SAMURAI_ATTACK_2";

export const IMAGE_FISHMAN = "IMAGE_FISHMAN";

// LEADERS

//export const IMAGE_LEADER_1 = "IMAGE_LEADER_1";
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

// ICONS
//
// STATUSES

export const IMAGE_STATUS_POISON = "IMAGE_STATUS_POISON";
export const IMAGE_STATUS_BLEED = "IMAGE_STATUS_BLEED";
export const IMAGE_STATUS_BURN = "IMAGE_STATUS_BURN";
export const IMAGE_STATUS_SHOCK = "IMAGE_STATUS_SHOCK";

export const IMAGE_ICON_ATTACK = "IMAGE_ICON_ATTACK";
export const IMAGE_ICON_HEALTH = "IMAGE_ICON_HEALTH";
export const IMAGE_ICON_SHIELD = "IMAGE_ICON_SHIELD";

export const IMAGE_ICON_REGEN = "IMAGE_ICON_REGEN";
export const IMAGE_ICON_MP = "IMAGE_ICON_MP";
export const IMAGE_ICON_PP = "IMAGE_ICON_PP";
export const IMAGE_ICON_CRIT = "IMAGE_ICON_CRIT";
export const IMAGE_ICON_EVASION = "IMAGE_ICON_EVASION";

export const IMAGE_ICON_CHAINED = "IMAGE_ICON_CHAINED";

// ATTRIBUTES

export const IMAGE_ATTRIBUTE_EVASION = "IMAGE_ATTRIBUTE_EVASION";
export const IMAGE_ATTRIBUTE_CRIT_CHANCE = "IMAGE_ATTRIBUTE_CRIT_CHANCE";
export const IMAGE_ATTRIBUTE_HEALTH = "IMAGE_ATTRIBUTE_HEALTH";
export const IMAGE_ATTRIBUTE_ARMOR = "IMAGE_ATTRIBUTE_ARMOR";
export const IMAGE_ATTRIBUTE_REGENERATION = "IMAGE_ATTRIBUTE_REGENERATION";
export const IMAGE_ATTRIBUTE_MAGIC_POWER = "IMAGE_ATTRIBUTE_MAGIC_POWER";
export const IMAGE_ATTRIBUTE_PHYSICAL_POWER = "IMAGE_ATTRIBUTE_PHYSICAL_POWER";

export const IMAGE_CARD_EXP = "IMAGE_CARD_EXP";
export const IMAGE_ICON_REROLL = "IMAGE_ICON_REROLL";
export const IMAGE_ICON_GOLD = "IMAGE_ICON_GOLD";

export function loadImages(scene: Scene) {
    // BASIC HEROES
    //loadBasicHeroesImages(scene);
    loadBasicHeroesIdleImages(scene);

    // EFFECTS
    //loadImagesEffects(scene);
    loadCommonImagesEffects(scene);
    loadImagesUIEffects(scene);

    // MOBS
    //loadImagesMobs(scene);

    // MC ANIMATION
    // loadMcHeroesImages(scene);

    //
    // LEADERS

    scene.load.spritesheet(IMAGE_LEADER_1_IDLE, "assets/sprites/leader/leader1_sprite.webp", {
        frameWidth: 600,
        frameHeight: 600,
    });

    // ITEMS
    loadImagesItems(scene);
    // SKILLS
    loadSkillImages(scene);

    // STATUSES

    scene.load.image(IMAGE_STATUS_POISON, "assets/sprites/icons/poison_icon.png");
    scene.load.image(IMAGE_STATUS_BLEED, "assets/sprites/icons/blood_icon.png");
    scene.load.image(IMAGE_STATUS_BURN, "assets/sprites/icons/burn_icon.png");
    scene.load.image(IMAGE_STATUS_SHOCK, "assets/sprites/icons/shock_icon.png");

    scene.load.image(IMAGE_ICON_ATTACK, "assets/sprites/icons/sword.png");
    scene.load.image(IMAGE_ICON_HEALTH, "assets/sprites/icons/heart.png");
    scene.load.image(IMAGE_ICON_SHIELD, "assets/sprites/icons/shield.png");
    scene.load.image(IMAGE_ICON_REGEN, "assets/sprites/icons/regen.png");
    scene.load.image(IMAGE_ICON_MP, "assets/sprites/icons/magic_power.png");
    scene.load.image(IMAGE_ICON_PP, "assets/sprites/icons/physical_power.png");
    scene.load.image(IMAGE_ICON_CRIT, "assets/sprites/icons/crit.png");
    scene.load.image(IMAGE_ICON_EVASION, "assets/sprites/icons/evasion.png");

    scene.load.image(IMAGE_ICON_CHAINED, "assets/sprites/icons/chain.png");

    // ATTRIBUTES
    scene.load.image(IMAGE_ATTRIBUTE_EVASION, "assets/sprites/attributes/evasion.png");
    scene.load.image(IMAGE_ATTRIBUTE_CRIT_CHANCE, "assets/sprites/attributes/crit.png");
    scene.load.image(IMAGE_ATTRIBUTE_HEALTH, "assets/sprites/attributes/health.png");
    scene.load.image(IMAGE_ATTRIBUTE_ARMOR, "assets/sprites/attributes/armor.png");
    scene.load.image(IMAGE_ATTRIBUTE_REGENERATION, "assets/sprites/attributes/regen.png");
    scene.load.image(IMAGE_ATTRIBUTE_MAGIC_POWER, "assets/sprites/attributes/magicPower.png");
    scene.load.image(IMAGE_ATTRIBUTE_PHYSICAL_POWER, "assets/sprites/attributes/physicalPower.png");

    //scene.load.image(IMAGE_CARD_EXP, "assets/sprites/attributes/exp.png");
    scene.load.image(IMAGE_CARD_EXP, "assets/sprites/exp.png");
    //
    scene.load.image(IMAGE_ICON_REROLL, "assets/sprites/icons/reroll.png");
    //scene.load.image(IMAGE_ICON_GOLD, "assets/sprites/icons/coin.png");
}

/**
 * loads all spritesheet images for unit animations for select
 */

export async function loadUnitImagesForSelect(scene: Scene, unitId: string, loadedImages: Record<string, boolean>) {
    console.log(">>> loadUnitImagesForSelect", unitId);
    // MOB UNIT
    let isMob = false;
    switch (unitId) {
        case "WEAKGOBLIN":
        case "GOBLINSHAMAN":
        case "GOLDGOBLIN1":
            {
                await loadGoblinIdleImages(scene, loadedImages);
                isMob = true;
            }
            break;
        case "GOBLIN": {
            await loadGoblinMageIdleImages(scene, loadedImages);
            isMob = true;
        }
        case "PEASANT":
            {
                await loadPeasantIdleImages(scene, loadedImages);
                isMob = true;
            }
            break;
        case "SKELETON":
        case "SKELETONWARRIOR":
            {
                await loadSkeletonIdleImages(scene, loadedImages);
                isMob = true;
            }
            break;
        case "SKELETONMAGE": {
            console.log("load for select skeletonmage");
            await loadSkeletonMageIdleImages(scene, loadedImages);
            //createSkeletonMageAnimations(scene);
            isMob = true;
        }
        case "WOLF1":
            {
                await loadWolf1IdleImages(scene, loadedImages);
                createWolf1IdleAnimations(scene);
                isMob = true;
            }
            break;
        case "WOLF2":
            {
                await loadWolf2IdleImages(scene, loadedImages);
                createWolf2IdleAnimations(scene);
                isMob = true;
            }
            break;
        case "PIRATE1":
            {
                await loadPirate1IdleImages(scene, loadedImages);
                createPirate1IdleAnimations(scene);
                isMob = true;
            }
            break;
        case "PIRATE2":
            {
                await loadPirate2IdleImages(scene, loadedImages);
                createPirate2IdleAnimations(scene);
                isMob = true;
            }
            break;
        case "FIREFLYSUMMON":
            {
                await loadSummonFireflyIdleImages(scene, loadedImages);
                createFireflyIdleAnimations(scene);
            }
            break;
        case "WARRIORSUMMON":
            {
                await loadSummonWarriorIdleImages(scene, loadedImages);
                createFireflyIdleAnimations(scene);
            }
            break;
        case "SHIELDWARRIORSUMMON":
            {
                await loadSummonShieldWarriorIdleImages(scene, loadedImages);
                createSpiritShieldWarriorIdleAnimations(scene);
            }
            break;
    }

    if (isMob) {
        return;
    }

    // MC HERO
    await loadMcHeroIdleImages(scene, unitId as EHeroClass, loadedImages);
    createMcHeroIdleAnimations(scene, unitId as EHeroClass);
}

/**
 * loads all spritesheet images for unit animations in battle
 */
export async function loadUnitImagesForDuel(scene: Scene, unitId: string, loadedImages: Record<string, boolean>) {
    console.log(">>>> loadUnitImagesForDuel", unitId);
    // case basic class hero
    let isBasicHero = false;
    let isMob = false;
    switch (unitId) {
        //
        // BASIC HEROES
        //
        case "BARD":
            {
                await loadBardBattleHeroImages(scene);
                createBardBattleAnimations(scene);
                await loadBardEffectsImages(scene);
                createBardEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "DARK":
            {
                await loadDarkBattleHeroImages(scene);
                createDarkBattleAnimations(scene);
                await loadDarkEffectsImages(scene);
                createDarkEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "MAGIC":
            {
                await loadMagicBattleHeroImages(scene);
                createMagicBattleAnimations(scene);
                await loadMagicEffectsImages(scene);
                createMagicEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "MASTER":
            {
                await loadMasterBattleHeroImages(scene);
                createMasterBattleAnimations(scene);
                await loadMasterEffectsImages(scene);
                createMasterEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "ORDER":
            {
                await loadOrderBattleHeroImages(scene);
                createOrderBattleAnimations(scene);
                await loadOrderEffectsImages(scene);
                createOrderEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "PRIEST":
            {
                await loadPriestBattleHeroImages(scene);
                createPriestBattleAnimations(scene);
                await loadPriestEffectsImages(scene);
                createPriestEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "SUMMON":
            {
                await loadSummonBattleHeroImages(scene);
                createSummonBattleAnimations(scene);
                await loadSummonEffectsImages(scene);
                createSummonEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "WARRIOR":
            {
                await loadWarriorBattleHeroImages(scene);
                createWarriorBattleAnimations(scene);
                await loadWarriorEffectsImages(scene);
                createWarriorEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        case "WILD":
            {
                await loadWildBattleHeroImages(scene);
                createWildBattleAnimations(scene);
                await loadWildEffectsImages(scene);
                createWildEffectAnimations(scene);
                isBasicHero = true;
            }
            break;
        //
        // SUMMONS
        //
        case "FIREFLYSUMMON":
            {
                await loadSummonFireflyImages(scene, loadedImages);
                createFireflyAnimations(scene);
                isMob = true;
            }
            break;
        case "WARRIORSUMMON":
            {
                await loadSummonWarriorImages(scene, loadedImages);
                createSpiritWarriorAnimations(scene);
                isMob = true;
            }
            break;
        case "SHIELDWARRIORSUMMON":
            {
                await loadSummonShieldWarriorImages(scene, loadedImages);
                createSpiritShieldWarriorAnimations(scene);
                isMob = true;
            }
            break;
        //
        // MOBS
        //
        case "SKELETON":
        case "SKELETONWARRIOR":
            {
                const loadRequired = await loadSkeletonBattleImages(scene, loadedImages);
                console.log("LOAD SKELETON", loadRequired);
                loadRequired && createSkeletonAnimations(scene);
                isMob = true;
            }
            break;
        case "SKELETONMAGE":
            {
                await loadSkeletonMageBattleImages(scene, loadedImages);
                createSkeletonMageAnimations(scene);
                isMob = true;
            }
            break;
        case "WEAKGOBLIN":
        case "GOLDGOBLIN1":
            {
                const loadRequired = await loadGoblinBattleImages(scene, loadedImages);
                console.log("LOAD WEAKGOBLIN", loadRequired);
                loadRequired && createGoblinAnimations(scene);
                isMob = true;
            }
            break;
        case "GOBLIN":
            {
                await loadGoblinMageBattleImages(scene, loadedImages);
                createGoblinMageAnimations(scene);
                isMob = true;
            }
            break;
        case "GOBLINSHAMAN":
            {
                await loadGoblinShamanBattleImages(scene, loadedImages);
                createGoblinShamanAnimations(scene);
                isMob = true;
            }
            break;
        case PEASANT_ID:
            {
                await loadPeasantBattleImages(scene, loadedImages);
                createPeasantAnimations(scene);
                isMob = true;
            }
            break;
        case "PIRATE1":
            {
                await loadPirate1BattleImages(scene, loadedImages);
                createPirate1Animations(scene);
                isMob = true;
            }
            break;
        case "PIRATE2":
            {
                await loadPirate2BattleImages(scene, loadedImages);
                createPirate2Animations(scene);
                isMob = true;
            }
            break;
        case "WOLF1":
            {
                await loadWolf1BattleImages(scene, loadedImages);
                createWolf1Animations(scene);
                isMob = true;
            }
            break;
        case "WOLF2":
            {
                await loadWolf2BattleImages(scene, loadedImages);
                createWolf2Animations(scene);
                isMob = true;
            }
            break;
        //
        // BOSSES
        //
        case BOSS_MINOTAUR_ID:
            {
                console.log("minotaur start loading");
                await loadBossMinotaurImages(scene, loadedImages);
                console.log("minotaur loaded");
                await createBossMinotaurAnimations(scene);
                isMob = true;
            }
            break;
    }

    if (isBasicHero || isMob) {
        return;
    }
    //
    // MC HEROES
    //
    await loadMcHeroBattleImages(scene, unitId as EHeroClass);
    createMcHeroBattleAnimations(scene, unitId as EHeroClass);
    await loadMcHeroEffectsImages(scene, unitId as EHeroClass);
    createMcHeroEffectAnimations(scene, unitId as EHeroClass);
}

export async function loadTotemImagesForDuel(scene: Scene, totemId: string) {
    //
    switch (totemId) {
        case TOTEM_ID_WILD_BASIC:
            {
                await loadBasicWildTotemImages(scene);
                createWildBasicTotemAnimations(scene);
            }
            break;
    }
}

/** return all units ids required to load images for this skill in battle */
export function getUnitIdsBySkill(skillId: string): string[] {
    const unitsIds: string[] = [];
    switch (skillId) {
        case "warriorSummonSkill":
            unitsIds.push("WARRIORSUMMON");
            break;
        case "fireflySummonSkill":
            unitsIds.push("FIREFLYSUMMON");
            break;
        case "radiantWallSkill":
            unitsIds.push("SHIELDWARRIORSUMMON");
            break;
        case "bigWolfSummon":
            unitsIds.push(WOLF_ID);
            break;
        case NECROMANCER_MC_SKILL_ID:
            {
                unitsIds.push("SKELETON");
                unitsIds.push("SKELETONMAGE");
            }
            break;
    }
    return unitsIds;
}

/** return all totem ids required to load images for this skill in battle */
export function getTotemIdsBySkill(skillId: string): string[] {
    const unitsIds: string[] = [];
    switch (skillId) {
        case "wildBasicTotemSkill":
        case "toxicTuneSkill":
        case "MinotaurTotemSkill":
            unitsIds.push(TOTEM_ID_WILD_BASIC);
            break;
    }
    return unitsIds;
}
