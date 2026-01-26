import { AnimationType, EHeroClass } from "../../types";
import {
    IMAGE_ALHEMIST,
    IMAGE_ASSASSIN,
    IMAGE_BARBARIAN,
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
    IMAGE_HUNTER,
    IMAGE_ILLUSIONIST,
    IMAGE_INQUISITOR,
    IMAGE_JESTER,
    IMAGE_KNIGHT,
    IMAGE_MAGIC_BARD,
    IMAGE_MAGIC_IDLE,
    IMAGE_MAGIC_IDLE_BATTLE_0,
    IMAGE_MASTER_IDLE,
    IMAGE_MASTER_IDLE_BATTLE,
    IMAGE_MINSTREL,
    IMAGE_MONK,
    IMAGE_NECROMANCER,
    IMAGE_ORACLE,
    IMAGE_ORDER_IDLE,
    IMAGE_ORDER_IDLE_BATTLE_0,
    IMAGE_PALADIN,
    IMAGE_PREDATOR,
    IMAGE_PRIEST_IDLE,
    IMAGE_RUNECASTER,
    IMAGE_SAMURAI,
    IMAGE_SHADOWMASTER,
    IMAGE_SHAMAN,
    IMAGE_SORCERER,
    IMAGE_SUMMON_IDLE,
    IMAGE_WARLOCK,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WILD_IDLE,
    IMAGE_WITCH,
    IMAGE_ZEALOT,
} from "./imageLoadUtil";
import { IMAGE_GOBLIN_1, IMAGE_GOBLIN_2, IMAGE_PEASANT_1, IMAGE_SKELETON_1 } from "./load/imageLoadMobs";

/**
 * @property animation Unit idle animation
 * @property attackAnimation Basic attack animation spritesheet
 * @property healAnimation Using heal skill animation
 * @property deadImage Animation unit defeated
 */
export interface IAnimations {
    image: string;
    imageBattle?: string;
    idleBattleAnimation?: string;
    animation?: string;
    attackAnimation?: string;
    massAttackAnimation?: string;
    magicAttackSkillAnimation?: string;
    healAnimation?: string;
    deadImage?: string;
    hurtAnimation?: string;
    buffAnimation?: string;
    defeatedAnimation?: string;
    summonTotemAnimation?: string;
    statusApplyAnimation?: string;
    size?: number;
    distance?: number;
    distanceEnemy?: number;
}

export function getHeroImage(heroClass: EHeroClass): IAnimations {
    switch (heroClass) {
        // BASIC HEROES
        case EHeroClass.BARD:
            return {
                distance: -40,
                image: IMAGE_BARD_IDLE,
                animation: AnimationType.BARD_IDLE,
                idleBattleAnimation: AnimationType.BARD_IDLE_BATTLE, //, BARD_IDLE_BATTLE
                attackAnimation: AnimationType.BARD_ATTACK,
                defeatedAnimation: AnimationType.BARD_DEFEATED,
                buffAnimation: AnimationType.BARD_BUFF,
                hurtAnimation: AnimationType.BARD_HURT,
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
            };
        case EHeroClass.MASTER:
            return {
                size: 420,
                distance: -50,
                image: IMAGE_MASTER_IDLE,
                imageBattle: IMAGE_MASTER_IDLE_BATTLE,
                animation: AnimationType.MASTER_IDLE,
                idleBattleAnimation: AnimationType.MASTER_IDLE_BATTLE,
                attackAnimation: AnimationType.MASTER_ATTACK,
                magicAttackSkillAnimation: AnimationType.MASTER_ATTACK,
                defeatedAnimation: AnimationType.MASTER_DEFEATED,
                hurtAnimation: AnimationType.MASTER_HURT,
                buffAnimation: AnimationType.MASTER_BUFF,
            };
        // return {
        //     image: IMAGE_ORDER_IDLE,
        //     animation: AnimationType.ORDER_IDLE,
        //     attackAnimation: AnimationType.ORDER_ATTACK,
        // };
        case EHeroClass.ORDER:
            return {
                size: 380,
                image: IMAGE_ORDER_IDLE,
                imageBattle: IMAGE_ORDER_IDLE_BATTLE_0,
                animation: AnimationType.ORDER_IDLE,
                attackAnimation: AnimationType.ORDER_ATTACK,
                idleBattleAnimation: AnimationType.ORDER_IDLE_BATTLE,
                hurtAnimation: AnimationType.ORDER_HURT,
                buffAnimation: AnimationType.ORDER_SHIELD_BUFF,
                defeatedAnimation: AnimationType.ORDER_DEFEATED,
            };
        case EHeroClass.PRIEST:
            return {
                distance: -50,
                image: IMAGE_PRIEST_IDLE,
                animation: AnimationType.PRIEST_IDLE,
                idleBattleAnimation: AnimationType.PRIEST_IDLE_BATTLE, //PRIEST_IDLE_BATTLE,
                attackAnimation: AnimationType.PRIEST_ATTACK,
                healAnimation: AnimationType.PRIEST_HEAL,
                defeatedAnimation: AnimationType.PRIEST_DEFEATED,
                hurtAnimation: AnimationType.PRIEST_HURT,
            };
        case EHeroClass.SUMMON:
            return {
                distance: -40,
                image: IMAGE_SUMMON_IDLE,
                animation: AnimationType.SUMMON_IDLE,
                idleBattleAnimation: AnimationType.SUMMON_IDLE_BATTLE, //SUMMON_IDLE_BATTLE
                attackAnimation: AnimationType.SUMMON_ATTACK,
                summonTotemAnimation: AnimationType.SUMMON_SPELL,
                defeatedAnimation: AnimationType.SUMMON_DEFEATED,
                hurtAnimation: AnimationType.SUMMON_HURT,
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
            };
        //
        //
        // MC HEROES
        case EHeroClass.ALCHEMIST:
            return { image: IMAGE_ALHEMIST };
        case EHeroClass.BEAST_MASTER:
            return { image: IMAGE_BEASTMASTER };
        case EHeroClass.BLADEDANCER:
            return { image: IMAGE_BLADEDANCER };
        case EHeroClass.DRUID:
            return { image: IMAGE_DRUID };
        case EHeroClass.GLADIATOR:
            return { image: IMAGE_GLADIATOR };
        case EHeroClass.HERALD:
            return { image: IMAGE_HERALD };
        case EHeroClass.HUNTER:
            return { image: IMAGE_HUNTER };
        case EHeroClass.KNIGHT:
            return { image: IMAGE_KNIGHT };
        case EHeroClass.MIMIC:
            return { image: IMAGE_JESTER };
        case EHeroClass.MONK:
            return { image: IMAGE_MONK };
        case EHeroClass.NECROMANCER:
            return {
                distance: -20,
                image: IMAGE_NECROMANCER,
                //animation: AnimationType.SAMURAI_IDLE,
                idleBattleAnimation: AnimationType.NECROMANCER_BATTLE_IDLE,
                attackAnimation: AnimationType.NECROMANCER_ATTACK,
            };
        //return { image: IMAGE_NECROMANCER };
        case EHeroClass.PALADIN:
            return {
                image: IMAGE_PALADIN,
                //animation: AnimationType.SAMURAI_IDLE,
                idleBattleAnimation: AnimationType.PALADIN_BATTLE_IDLE,
                attackAnimation: AnimationType.PALADIN_ATTACK,
            };
        //return { image: IMAGE_PALADIN };
        case EHeroClass.PREDATOR:
            return { image: IMAGE_PREDATOR };
        case EHeroClass.SHADOW_MASTER:
            return { image: IMAGE_SHADOWMASTER };
        case EHeroClass.SHAMAN:
            return { image: IMAGE_SHAMAN };
        case EHeroClass.COMMANDER:
            return { image: IMAGE_COMMANDER };
        case EHeroClass.SAMURAI:
            return {
                image: IMAGE_SAMURAI,
                animation: AnimationType.SAMURAI_IDLE,
                idleBattleAnimation: AnimationType.SAMURAI_BATTLE_IDLE,
                attackAnimation: AnimationType.SAMURAI_ATTACK,
            };
        case EHeroClass.WITCH:
            return { image: IMAGE_WITCH };
        case EHeroClass.ORACLE:
            return { image: IMAGE_ORACLE };
        case EHeroClass.FOREST_SPIRIT:
            return { image: IMAGE_FORESTSPIRIT };
        case EHeroClass.BLACK_KNIGHT:
            return { image: IMAGE_BLACKKNIGHT };
        case EHeroClass.RUNECASTER:
            return { image: IMAGE_RUNECASTER };
        case EHeroClass.SORCERER:
            return { image: IMAGE_SORCERER };
        case EHeroClass.DOOMSAYER:
            return { image: IMAGE_DOOMSAYER };
        case EHeroClass.BATTLE_MAGE:
            return { image: IMAGE_BATTLEMAGE };
        case EHeroClass.MINSTREL:
            return { image: IMAGE_MINSTREL };
        case EHeroClass.ASSASSIN:
            return { image: IMAGE_ASSASSIN };
        case EHeroClass.BARBARIAN:
            return {
                image: IMAGE_BARBARIAN,
                animation: AnimationType.BARBARIAN_IDLE,
                idleBattleAnimation: AnimationType.BARBARIAN_BATTLE_IDLE,
                attackAnimation: AnimationType.BARBARIAN_ATTACK,
            };
        case EHeroClass.WARLOCK:
            return { image: IMAGE_WARLOCK };
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
        case EHeroClass.MAGIC_BARD:
            return { image: IMAGE_MAGIC_BARD };
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
                size: 500,
                image: IMAGE_BOSS_MINOTAUR,
                animation: AnimationType.BOSS_MINOTAUR_IDLE,
                attackAnimation: AnimationType.BOSS_MINOTAUR_ATTACK,
                massAttackAnimation: AnimationType.BOSS_MINOTAUR_STOMP,
                hurtAnimation: AnimationType.BOSS_MINOTAUR_HURT,
            };
        case "PEASANT":
            return {
                size: 280,
                distanceEnemy: -60,
                image: IMAGE_PEASANT_1,
                idleBattleAnimation: AnimationType.MOB_PEASANT_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_PEASANT_ATTACK,
            };
        case "GOBLIN":
            return {
                distanceEnemy: -60,
                image: IMAGE_GOBLIN_2,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_2_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_2_ATTACK,
            };
        case "GOLDGOBLIN1":
        case "WEAKGOBLIN":
            return {
                distanceEnemy: -60,
                image: IMAGE_GOBLIN_1,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_1_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_1_ATTACK,
            };
        case "GOBLINSHAMAN":
            return {
                distanceEnemy: -50,
                image: IMAGE_GOBLIN_1,
                idleBattleAnimation: AnimationType.MOB_GOBLIN_SHAMAN_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_GOBLIN_SHAMAN_ATTACK,
                buffAnimation: AnimationType.MOB_GOBLIN_SHAMAN_SPELL,
                defeatedAnimation: AnimationType.MOB_GOBLIN_SHAMAN_DEFEATED,
            };
        case "SKELETON":
            return {
                distanceEnemy: -40,
                image: IMAGE_SKELETON_1,
                idleBattleAnimation: AnimationType.MOB_SKELETON_BATTLE_IDLE,
                attackAnimation: AnimationType.MOB_SKELETON_ATTACK,
            };
        case "SKELETONWARRIOR":
        case "SKELETONMAGE":
        case "SOLDIER":
        default:
            return { image: IMAGE_SKELETON_1 };
    }
};
