import { AnimationType, EEffectAnimationType, EHeroClass } from "../../types";
import {
    IMAGE_ALHEMIST,
    IMAGE_BARBARIAN,
    IMAGE_BARBARIAN_BATTLE_IDLE,
    IMAGE_BARD_IDLE,
    IMAGE_BATTLEMAGE,
    IMAGE_BEASTMASTER,
    IMAGE_BISHOP,
    IMAGE_BLACKKNIGHT,
    IMAGE_BLADEDANCER,
    IMAGE_BOSS_MINOTAUR,
    IMAGE_COMMANDER,
    IMAGE_DARK_IDLE,
    IMAGE_DOOMSAYER,
    IMAGE_DRUID,
    IMAGE_DUELIST,
    IMAGE_EXORCIST,
    IMAGE_FISHMAN,
    IMAGE_FORESTSPIRIT,
    IMAGE_GLADIATOR,
    IMAGE_HERALD,
    IMAGE_ILLUSIONIST,
    IMAGE_INQUISITOR,
    IMAGE_JESTER,
    IMAGE_KNIGHT,
    IMAGE_MAGIC_IDLE,
    IMAGE_MAGIC_IDLE_BATTLE_0,
    IMAGE_MASTER_IDLE,
    IMAGE_MASTER_IDLE_BATTLE,
    IMAGE_MINSTREL,
    IMAGE_MONK,
    IMAGE_ORACLE,
    IMAGE_ORDER_IDLE,
    IMAGE_ORDER_IDLE_BATTLE_0,
    IMAGE_PALADIN,
    IMAGE_PREDATOR,
    IMAGE_PRIEST_IDLE,
    IMAGE_RUNECASTER_IDLE,
    IMAGE_SAMURAI,
    IMAGE_SHADOWMASTER,
    IMAGE_SHAMAN,
    IMAGE_SORCERER,
    IMAGE_SUMMON_IDLE,
    IMAGE_TOTEM_ATTACK,
    IMAGE_WARLOCK,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WILD_IDLE,
    IMAGE_WITCH,
    IMAGE_ZEALOT,
} from "./imageLoadUtil";
import {
    IMAGE_FIREFLY_BATTLE_IDLE,
    IMAGE_GOBLIN_1,
    IMAGE_GOBLIN_2,
    IMAGE_PEASANT_1,
    IMAGE_SKELETON_1,
    IMAGE_SKELETON_MAGE,
    IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
    IMAGE_WOLF_1,
    IMAGE_WOLF_2,
} from "./load/imageLoadMobs";
import { IMAGE_ASSASSIN_IDLE, IMAGE_HUNTER, IMAGE_HUNTER_IDLE, IMAGE_NECROMANCER_IDLE } from "./load/mcHeroesImagesLoad";

/**
 * @constant animation Unit idle animation in select phase
 * @constant attackAnimation Basic attack animation spritesheet
 * @constant healAnimation Using heal skill animation
 * @constant deadImage Animation unit defeated
 * @constant attackEnemyAnimation Effect animation on enemy when unit attacks with basic attack
 * @constant attackEnemyAnimDelay Delay after basic attack before playing effect animation on enemy
 */
export interface IAnimations {
    image: string;
    imageBattle?: string;
    idleBattleAnimation?: string;
    animation?: string;
    attackAnimation?: string;
    attackEnemyAnimation?: EEffectAnimationType;
    attackEnemyAnimDelay?: number;
    attackEnemyAnimDistance?: { x?: number; y?: number };
    attackEnemyAnimDistanceInverted?: { x?: number; y?: number };
    massAttackAnimation?: string;
    magicAttackSkillAnimation?: string;
    physicalAttackSkillAnimation?: string;
    healAnimation?: string;
    deadImage?: string;
    hurtAnimation?: string;
    buffAnimation?: string;
    defeatedAnimation?: string;
    summonTotemAnimation?: string;
    statusApplyAnimation?: string;
    appearAnimation?: string;
    size?: number;
    distance?: number;
    distanceEnemy?: number;
    attackAnimDisance?: number;
    tint?: number; // ? 0xff0000
}

export function getHeroImage(heroClass: EHeroClass): IAnimations {
    //
    switch (heroClass) {
        // BASIC HEROES
        case EHeroClass.BARD:
            return {
                distance: -40,
                distanceEnemy: -10,
                image: IMAGE_BARD_IDLE,
                animation: AnimationType.BARD_IDLE,
                idleBattleAnimation: AnimationType.BARD_IDLE_BATTLE, //, BARD_IDLE_BATTLE
                attackAnimation: AnimationType.BARD_ATTACK,
                defeatedAnimation: AnimationType.BARD_DEFEATED,
                buffAnimation: AnimationType.BARD_BUFF,
                hurtAnimation: AnimationType.BARD_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_BARD_ATTACK,
                attackEnemyAnimDelay: 500,
                attackEnemyAnimDistance: { x: 100, y: -30 },
                attackEnemyAnimDistanceInverted: { x: 200, y: -30 },
            };
        case EHeroClass.DARK:
            return {
                distance: -10,
                distanceEnemy: -50,
                image: IMAGE_DARK_IDLE,
                animation: AnimationType.DARK_IDLE,
                idleBattleAnimation: AnimationType.DARK_IDLE_BATTLE, //DARK_IDLE_BATTLE,
                attackAnimation: AnimationType.DARK_ATTACK,
                magicAttackSkillAnimation: AnimationType.DARK_SPELL,
                statusApplyAnimation: AnimationType.DARK_SPELL,
                defeatedAnimation: AnimationType.DARK_DEFEATED,
                hurtAnimation: AnimationType.DARK_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_DARK_ATTACK,
                attackEnemyAnimDelay: 500,
                attackEnemyAnimDistance: { x: 120, y: -50 },
                attackEnemyAnimDistanceInverted: { x: 230, y: -50 },
            };
        case EHeroClass.MAGIC:
            return {
                size: 400,
                distance: -50,
                image: IMAGE_MAGIC_IDLE,
                imageBattle: IMAGE_MAGIC_IDLE_BATTLE_0,
                animation: AnimationType.MAGIC_IDLE,
                idleBattleAnimation: AnimationType.MAGIC_IDLE_BATTLE, //MAGIC_IDLE_BATTLE,
                attackAnimation: AnimationType.MAGIC_ATTACK,
                magicAttackSkillAnimation: AnimationType.MAGIC_ATTACK_SPELL,
                defeatedAnimation: AnimationType.MAGIC_DEFEATED,
                hurtAnimation: AnimationType.MAGIC_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_MAGIC_ATTACK,
                attackEnemyAnimDelay: 700,
                attackEnemyAnimDistance: { x: 20, y: 50 },
                attackEnemyAnimDistanceInverted: { x: 250, y: 50 },
                //
                //test
                //tint: 0x00ff00,
            };
        case EHeroClass.MASTER:
            return {
                size: 420,
                distance: -50,
                image: IMAGE_MASTER_IDLE,
                imageBattle: IMAGE_MASTER_IDLE_BATTLE,
                animation: AnimationType.MASTER_IDLE,
                idleBattleAnimation: AnimationType.MASTER_IDLE_BATTLE,
                attackAnimation: AnimationType.MASTER_ATTACK_2, // AnimationType.MASTER_ATTACK,
                //magicAttackSkillAnimation: AnimationType.MASTER_ATTACK,
                defeatedAnimation: AnimationType.MASTER_DEFEATED,
                hurtAnimation: AnimationType.MASTER_HURT,
                buffAnimation: AnimationType.MASTER_BUFF,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_MASTER_ATTACK_2,
                attackEnemyAnimDelay: 400,
                attackEnemyAnimDistance: { x: 100, y: -50 },
                attackEnemyAnimDistanceInverted: { x: 230, y: -50 },
            };
        case EHeroClass.ORDER:
            return {
                distance: -20,
                distanceEnemy: -40,
                //size: 380,
                image: IMAGE_ORDER_IDLE,
                imageBattle: IMAGE_ORDER_IDLE_BATTLE_0,
                animation: AnimationType.ORDER_IDLE,
                attackAnimation: AnimationType.ORDER_ATTACK_2, //AnimationType.ORDER_ATTACK,
                idleBattleAnimation: AnimationType.ORDER_IDLE_BATTLE,
                hurtAnimation: AnimationType.ORDER_HURT,
                buffAnimation: AnimationType.ORDER_SHIELD_BUFF,
                defeatedAnimation: AnimationType.ORDER_DEFEATED,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_ORDER_ATTACK_2,
                attackEnemyAnimDelay: 500,
                attackEnemyAnimDistance: { x: 150, y: -50 },
                attackEnemyAnimDistanceInverted: { x: 200, y: -50 },
            };
        case EHeroClass.PRIEST:
            return {
                distance: -50,
                image: IMAGE_PRIEST_IDLE,
                animation: AnimationType.PRIEST_IDLE,
                idleBattleAnimation: AnimationType.PRIEST_IDLE_BATTLE,
                attackAnimation: AnimationType.PRIEST_ATTACK_2, //PRIEST_ATTACK
                attackAnimDisance: 80,
                healAnimation: AnimationType.PRIEST_HEAL,
                defeatedAnimation: AnimationType.PRIEST_DEFEATED,
                hurtAnimation: AnimationType.PRIEST_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_PRIEST_ATTACK_2, //EEffectAnimationType.EFFECT_PRIEST_ATTACK,
                attackEnemyAnimDelay: 400, //500,
                attackEnemyAnimDistance: { x: 20, y: 0 }, //{ x: -50, y: 150 },
                attackEnemyAnimDistanceInverted: { x: 200, y: 0 }, //{ x: 230, y: 150 },
            };
        case EHeroClass.SUMMON:
            return {
                distance: -40,
                distanceEnemy: -10,
                image: IMAGE_SUMMON_IDLE,
                animation: AnimationType.SUMMON_IDLE,
                idleBattleAnimation: AnimationType.SUMMON_IDLE_BATTLE, //SUMMON_IDLE_BATTLE
                attackAnimation: AnimationType.SUMMON_ATTACK,
                summonTotemAnimation: AnimationType.SUMMON_SPELL,
                defeatedAnimation: AnimationType.SUMMON_DEFEATED,
                hurtAnimation: AnimationType.SUMMON_HURT,
                buffAnimation: AnimationType.SUMMON_SPELL, // TODO: change to summon animation
            };
        case EHeroClass.WARRIOR:
            return {
                distance: -30,
                //size: 400,
                image: IMAGE_WARRIOR_IDLE,
                animation: AnimationType.WARRIOR_IDLE,
                idleBattleAnimation: AnimationType.WARRIOR_IDLE_BATTLE,
                attackAnimation: AnimationType.WARRIOR_ATTACK,
                magicAttackSkillAnimation: AnimationType.WARRIOR_ATTACK,
                buffAnimation: AnimationType.WARRIOR_BUFF_REGEN,
                defeatedAnimation: AnimationType.WARRIOR_DEFEATED,
                hurtAnimation: AnimationType.WARRIOR_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_WARRIOR_ATTACK_2,
                attackEnemyAnimDelay: 300,
                attackEnemyAnimDistance: { x: 120, y: -10 },
                attackEnemyAnimDistanceInverted: { x: 200, y: -10 },
            };
        case EHeroClass.WILD:
            return {
                distance: -40,
                //size: 400,
                image: IMAGE_WILD_IDLE,
                animation: AnimationType.WILD_IDLE,
                idleBattleAnimation: AnimationType.WILD_IDLE_BATTLE,
                attackAnimation: AnimationType.WILD_ATTACK,
                buffAnimation: AnimationType.WILD_BUFF,
                summonTotemAnimation: AnimationType.WILD_BUFF,
                defeatedAnimation: AnimationType.WILD_DEFEATED,
                hurtAnimation: AnimationType.WILD_HURT,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_WILD_ATTACK,
                attackEnemyAnimDelay: 700,
                attackEnemyAnimDistance: { x: 150, y: -50 },
                attackEnemyAnimDistanceInverted: { x: 220, y: -50 },
            };
        //
        //
        //
        //
        // MC HEROES
        case EHeroClass.ALCHEMIST:
            return { image: IMAGE_ALHEMIST };
        case EHeroClass.ASSASSIN:
            return {
                distance: -30,
                image: IMAGE_ASSASSIN_IDLE,
                animation: AnimationType.ASSASSIN_IDLE,
                idleBattleAnimation: AnimationType.ASSASSIN_BATTLE_IDLE,
                attackAnimation: AnimationType.ASSASSIN_ATTACK,
            };
        case EHeroClass.BATTLE_MAGE:
            return {
                distance: -30,
                image: IMAGE_BATTLEMAGE,
                animation: AnimationType.BATTLEMAGE_IDLE,
                idleBattleAnimation: AnimationType.BATTLEMAGE_BATTLE_IDLE,
            };
        case EHeroClass.BARBARIAN:
            return {
                image: IMAGE_BARBARIAN,
                distance: -20,
                imageBattle: IMAGE_BARBARIAN_BATTLE_IDLE,
                animation: AnimationType.BARBARIAN_IDLE,
                idleBattleAnimation: AnimationType.BARBARIAN_BATTLE_IDLE,
                attackAnimation: AnimationType.BARBARIAN_ATTACK,
            };
        case EHeroClass.BEAST_MASTER:
            return { image: IMAGE_BEASTMASTER };
        case EHeroClass.BLADEDANCER:
            return { image: IMAGE_BLADEDANCER, animation: AnimationType.BLADEDANCER_IDLE };
        case EHeroClass.DRUID:
            return { image: IMAGE_DRUID };
        case EHeroClass.GLADIATOR:
            return { image: IMAGE_GLADIATOR };
        case EHeroClass.HERALD:
            return { image: IMAGE_HERALD };
        case EHeroClass.HUNTER:
            return {
                image: IMAGE_HUNTER_IDLE,
                animation: AnimationType.HUNTER_IDLE,
                idleBattleAnimation: AnimationType.HUNTER_BATTLE_IDLE,
                attackAnimation: AnimationType.HUNTER_ATTACK,
            };
        case EHeroClass.KNIGHT:
            return { image: IMAGE_KNIGHT };
        case EHeroClass.MIMIC:
            return { image: IMAGE_JESTER };
        case EHeroClass.MONK:
            return { image: IMAGE_MONK };
        case EHeroClass.NECROMANCER:
            return {
                distance: -30,
                distanceEnemy: -40,
                image: IMAGE_NECROMANCER_IDLE,
                animation: AnimationType.NECROMANCER_IDLE,
                idleBattleAnimation: AnimationType.NECROMANCER_BATTLE_IDLE,
                attackAnimation: AnimationType.NECROMANCER_ATTACK,
            };
        //return { image: IMAGE_NECROMANCER };
        case EHeroClass.PALADIN:
            return {
                distanceEnemy: -50,
                image: IMAGE_PALADIN,
                animation: AnimationType.PALADIN_IDLE,
                idleBattleAnimation: AnimationType.PALADIN_BATTLE_IDLE,
                attackAnimation: AnimationType.PALADIN_ATTACK,
            };
        //return { image: IMAGE_PALADIN };
        case EHeroClass.PREDATOR:
            return { image: IMAGE_PREDATOR, animation: AnimationType.PREDATOR_IDLE };
        case EHeroClass.SHADOW_MASTER:
            return { image: IMAGE_SHADOWMASTER };
        case EHeroClass.SHAMAN:
            return { image: IMAGE_SHAMAN };
        case EHeroClass.COMMANDER:
            return {
                image: IMAGE_COMMANDER,
                animation: AnimationType.COMMANDER_IDLE,
            };
        case EHeroClass.SAMURAI:
            return {
                distance: -10,
                distanceEnemy: -50,
                image: IMAGE_SAMURAI,
                animation: AnimationType.SAMURAI_IDLE,
                //animation: AnimationType.COMMANDER_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.SAMURAI_BATTLE_IDLE,
                attackAnimation: AnimationType.SAMURAI_ATTACK_2, //SAMURAI_ATTACK
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_SAMURAI_ATTACK_2,
                attackEnemyAnimDelay: 800,
                attackEnemyAnimDistance: { x: 200, y: -70 },
            };
        case EHeroClass.WITCH:
            return { image: IMAGE_WITCH };
        case EHeroClass.ORACLE:
            return {
                //size: 500,
                distance: -10,
                distanceEnemy: -60,
                image: IMAGE_ORACLE,
                animation: AnimationType.ORACLE_IDLE,
                idleBattleAnimation: AnimationType.ORACLE_BATTLE_IDLE,
                attackAnimation: AnimationType.ORACLE_ATTACK,
                hurtAnimation: AnimationType.ORACLE_SKILL_2,
                buffAnimation: AnimationType.ORACLE_SKILL_1,
            };
        case EHeroClass.FOREST_SPIRIT:
            return { image: IMAGE_FORESTSPIRIT };
        case EHeroClass.BLACK_KNIGHT:
            return { image: IMAGE_BLACKKNIGHT };
        case EHeroClass.RUNECASTER:
            return { image: IMAGE_RUNECASTER_IDLE, animation: AnimationType.RUNECASTER_IDLE, idleBattleAnimation: AnimationType.RUNECASTER_IDLE };
        case EHeroClass.SORCERER:
            return { image: IMAGE_SORCERER, animation: AnimationType.SORCERER_IDLE };
        case EHeroClass.DOOMSAYER:
            return {
                distance: -20,
                distanceEnemy: -50,
                image: IMAGE_DOOMSAYER,
                animation: AnimationType.DOOMSAYER_IDLE,
                idleBattleAnimation: AnimationType.DOOMSAYER_BATTLE_IDLE,
                attackAnimation: AnimationType.DOOMSAYER_ATTACK,
                magicAttackSkillAnimation: AnimationType.DOOMSAYER_SKILL,
                buffAnimation: AnimationType.DOOMSAYER_SKILL,
            };
        case EHeroClass.MINSTREL:
            return { image: IMAGE_MINSTREL };
        case EHeroClass.WARLOCK:
            return { image: IMAGE_WARLOCK, animation: AnimationType.WARLOCK_IDLE };
        case EHeroClass.EXORCIST:
            return { image: IMAGE_EXORCIST };
        case EHeroClass.ILLUSIONIST:
            return { image: IMAGE_ILLUSIONIST };
        case EHeroClass.ZEALOT:
            return { image: IMAGE_ZEALOT };
        case EHeroClass.INQUISITOR:
            return { image: IMAGE_INQUISITOR };
        case EHeroClass.DUELIST:
            return { image: IMAGE_DUELIST };
        case EHeroClass.BISHOP:
            return { image: IMAGE_BISHOP };
        case EHeroClass.JESTER:
            return {
                distanceEnemy: -70,
                image: IMAGE_JESTER,
                animation: AnimationType.JESTER_IDLE,
                idleBattleAnimation: AnimationType.JESTER_BATTLE_IDLE,
                attackAnimation: AnimationType.JESTER_ATTACK,
            };
        //
        default:
            return { image: IMAGE_FISHMAN };
    }
}

export const getUnitImage = (unitId: string): IAnimations => {
    const id = unitId.split("_")[0];
    //console.log(">>>> getUnitImage", unitId);
    switch (id) {
        case "BOSSMINOTAUR":
            return {
                //size: 550,
                distance: -50,
                distanceEnemy: -100,
                image: IMAGE_BOSS_MINOTAUR,
                animation: AnimationType.BOSS_MINOTAUR_IDLE,
                attackAnimation: AnimationType.BOSS_MINOTAUR_ATTACK,
                massAttackAnimation: AnimationType.BOSS_MINOTAUR_STOMP,
                hurtAnimation: AnimationType.BOSS_MINOTAUR_HURT,
            };
        case "FIREFLY":
        case "FIREFLYSUMMON": {
            return {
                //distance: -40,
                //distanceEnemy: -40,
                image: IMAGE_FIREFLY_BATTLE_IDLE,
                animation: AnimationType.MOB_FIREFLY_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_FIREFLY_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_FIREFLY_ATTACK,
                defeatedAnimation: AnimationType.MOB_FIREFLY_DEFEATED,
                appearAnimation: AnimationType.MOB_FIREFLY_APPEAR,
            };
        }
        case "ILLUSIONSUMMON": {
            return {
                //distance: -40,
                //distanceEnemy: -40,
                image: IMAGE_ILLUSIONIST,
                //idleBattleAnimation: AnimationType.MOB_FIREFLY_BATTLE_IDLE,
                //attackAnimation: AnimationType.MOB_SKELETON_ATTACK,
                //defeatedAnimation: AnimationType.MOB_FIREFLY_DEFEATED,
                //appearAnimation: AnimationType.MOB_FIREFLY_APPEAR,
            };
        }
        case "SPIRITWARRIOR": {
            return {
                //size: 400,
                distance: -30,
                distanceEnemy: -20,
                image: IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
                animation: AnimationType.MOB_SUMMONKNIGHT_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_SUMMONKNIGHT_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SUMMONKNIGHT_ATTACK,
            };
        }
        case "SPIRITSHIELDWARRIOR": {
            return {
                //size: 400,
                distance: -20,
                distanceEnemy: -50,
                image: IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
                animation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BATTLE_IDLE,
                buffAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BUFF,
                hurtAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_HURT,
            };
        }
        // SUMMONS
        case "WARRIORSUMMON": {
            return {
                //size: 400,
                distance: -50,
                distanceEnemy: -10,
                image: IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_SUMMONKNIGHT_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SUMMONKNIGHT_ATTACK,
            };
        }
        case "SHIELDWARRIORSUMMON": {
            return {
                //size: 400,
                distance: -30,
                distanceEnemy: -20,
                image: IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
                animation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BATTLE_IDLE,
                buffAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_BUFF,
                hurtAnimation: AnimationType.MOB_SUMMONKSHIELDNIGHT_HURT,
                tint: 0xeeee00,
            };
        }
        case "PEASANT":
            return {
                //size: 270,
                distance: 5,
                distanceEnemy: -60,
                image: IMAGE_PEASANT_1,
                idleBattleAnimation: AnimationType.MOB_PEASANT_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_PEASANT_ATTACK,
                buffAnimation: AnimationType.MOB_PEASANT_ATTACK,
            };
        case "PIRATE1":
            return {
                //size: 270,
                distance: -10,
                distanceEnemy: -80,
                image: IMAGE_PEASANT_1,
                animation: AnimationType.MOB_PIRATE_1_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_PIRATE_1_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_PIRATE_1_ATTACK,
            };
        case "PIRATE2":
            return {
                //size: 270,
                distance: -10,
                distanceEnemy: -80,
                image: IMAGE_PEASANT_1,
                animation: AnimationType.MOB_PIRATE_2_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_PIRATE_2_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_PIRATE_2_ATTACK,
            };
        case "GOBLIN":
            return {
                distance: -20,
                distanceEnemy: -60,
                image: IMAGE_GOBLIN_2,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_2_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_2_ATTACK,
            };
        case "GOLDGOBLIN1":
        case "WEAKGOBLIN":
            return {
                distance: -30,
                distanceEnemy: -30,
                image: IMAGE_GOBLIN_1,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_1_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_1_ATTACK,
            };
        case "GOBLINSHAMAN":
            return {
                distance: -30,
                distanceEnemy: -50,
                image: IMAGE_GOBLIN_1,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_SHAMAN_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_SHAMAN_ATTACK,
                buffAnimation: AnimationType.MOB_GOBLIN_SHAMAN_SPELL,
                defeatedAnimation: AnimationType.MOB_GOBLIN_SHAMAN_DEFEATED,
            };
        case "SkeletonFrontSummon":
        case "SkeletonBackSummon":
            return {
                distance: -40,
                distanceEnemy: -40,
                image: IMAGE_SKELETON_1,
                idleBattleAnimation: AnimationType.MOB_SKELETON_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SKELETON_ATTACK,
            };
        case "SKELETON":
        case "SKELETONWARRIOR":
            return {
                distance: -40,
                distanceEnemy: -20,
                image: IMAGE_SKELETON_1,
                idleBattleAnimation: AnimationType.MOB_SKELETON_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SKELETON_ATTACK,
            };
        case "SKELETONMAGE":
            return {
                distance: -10,
                distanceEnemy: -70,
                image: IMAGE_SKELETON_MAGE,
                animation: AnimationType.MOB_SKELETON_MAGE_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_SKELETON_MAGE_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SKELETON_MAGE_ATTACK,
            };
        case "WOLF1":
            return {
                distance: 20,
                distanceEnemy: -130,
                image: IMAGE_WOLF_1,
                animation: AnimationType.MOB_WOLF_1_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_WOLF_1_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_WOLF_1_ATTACK,
                physicalAttackSkillAnimation: AnimationType.MOB_WOLF_1_ATTACK_2,
            };
        case "WOLF2":
            return {
                //distance: 20,
                distanceEnemy: -100,
                image: IMAGE_WOLF_2,
                animation: AnimationType.MOB_WOLF_2_BATTLE_IDLE,
                idleBattleAnimation: AnimationType.MOB_WOLF_2_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_WOLF_2_ATTACK,
                physicalAttackSkillAnimation: AnimationType.MOB_WOLF_2_ATTACK_2,
            };
        case "COPYCAT":
            return {
                size: 420,
                distance: -50,
                image: IMAGE_MASTER_IDLE,
                imageBattle: IMAGE_MASTER_IDLE_BATTLE,
                animation: AnimationType.MASTER_IDLE,
                idleBattleAnimation: AnimationType.MASTER_IDLE_BATTLE,
                attackAnimation: AnimationType.MASTER_ATTACK_2, // AnimationType.MASTER_ATTACK,
                //magicAttackSkillAnimation: AnimationType.MASTER_ATTACK,
                defeatedAnimation: AnimationType.MASTER_DEFEATED,
                hurtAnimation: AnimationType.MASTER_HURT,
                buffAnimation: AnimationType.MASTER_BUFF,
                //
                attackEnemyAnimation: EEffectAnimationType.EFFECT_MASTER_ATTACK_2,
                attackEnemyAnimDelay: 400,
                attackEnemyAnimDistance: { x: 100, y: -50 },
                attackEnemyAnimDistanceInverted: { x: 230, y: -50 },
            };
        default:
            return { image: IMAGE_SKELETON_1 };
    }
};

export const getTotemImage = (totemId: string): IAnimations => {
    const id = totemId.split("_")[0];
    console.log(">>>>>>>>>>> GET TOTEM IMAGE BY ID", totemId);
    switch (id) {
        case "basicWildTotem":
            return {
                image: IMAGE_TOTEM_ATTACK,
                idleBattleAnimation: AnimationType.TOTEM_WILD_1_IDLE,
            };
        default:
            return { image: IMAGE_SKELETON_1 };
    }
};
