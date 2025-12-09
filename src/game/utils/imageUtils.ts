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
    IMAGE_GOBLIN_1,
    IMAGE_HERALD,
    IMAGE_HUNTER,
    IMAGE_ILLUSIONIST,
    IMAGE_INQUISITOR,
    IMAGE_JESTER,
    IMAGE_KNIGHT,
    IMAGE_MAGIC_IDLE,
    IMAGE_MASTER_IDLE,
    IMAGE_MINSTREL,
    IMAGE_MONK,
    IMAGE_NECROMANCER,
    IMAGE_ORACLE,
    IMAGE_ORDER_IDLE,
    IMAGE_PALADIN,
    IMAGE_PESANT_1,
    IMAGE_PREDATOR,
    IMAGE_PRIEST_IDLE,
    IMAGE_RUNECASTER,
    IMAGE_SAMURAI,
    IMAGE_SHADOWMASTER,
    IMAGE_SHAMAN,
    IMAGE_SKELETON_1,
    IMAGE_SORCERER,
    IMAGE_SUMMON_IDLE,
    IMAGE_WARLOCK,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WILD_IDLE,
    IMAGE_WITCH,
    IMAGE_ZEALOT,
    //IMAGE_MAGIC_DEAD,
    //IMAGE_WARRIOR_DEAD,
    //IMAGE_SUMMON_DEAD,
} from "./imageLoadUtil";

export interface IAnimations {
    image: string;
    animation?: string;
    attackAnimation?: string;
    healAnimation?: string;
    deadImage?: string;
}

export function getHeroImage(heroClass: EHeroClass): IAnimations {
    switch (heroClass) {
        // BASIC HEROES
        case EHeroClass.BARD:
            return { image: IMAGE_BARD_IDLE, animation: AnimationType.BARD_IDLE };
        case EHeroClass.DARK:
            return { image: IMAGE_DARK_IDLE, animation: AnimationType.DARK_IDLE, attackAnimation: AnimationType.DARK_ATTACK };
        case EHeroClass.MAGIC:
            return { image: IMAGE_MAGIC_IDLE, animation: AnimationType.MAGIC_IDLE, attackAnimation: AnimationType.MAGIC_ATTACK }; //deadImage: IMAGE_MAGIC_DEAD
        case EHeroClass.MASTER:
            return { image: IMAGE_MASTER_IDLE, animation: AnimationType.MASTER_IDLE, attackAnimation: AnimationType.MASTER_ATTACK };
        case EHeroClass.ORDER:
            return { image: IMAGE_ORDER_IDLE, animation: AnimationType.ORDER_IDLE, attackAnimation: AnimationType.ORDER_ATTACK };
        case EHeroClass.PRIEST:
            return {
                image: IMAGE_PRIEST_IDLE,
                animation: AnimationType.PRIEST_IDLE,
                attackAnimation: AnimationType.PRIEST_ATTACK,
                healAnimation: AnimationType.PRIEST_HEAL,
            };
        case EHeroClass.SUMMON:
            return {
                image: IMAGE_SUMMON_IDLE,
                animation: AnimationType.SUMMON_IDLE,
                attackAnimation: AnimationType.SUMMON_ATTACK,
                //deadImage: IMAGE_SUMMON_DEAD,
            };
        case EHeroClass.WILD:
            return { image: IMAGE_WILD_IDLE, animation: AnimationType.WILD_IDLE, attackAnimation: AnimationType.WILD_ATTACK };
        case EHeroClass.WARRIOR:
            return {
                image: IMAGE_WARRIOR_IDLE,
                animation: AnimationType.WARRIOR_IDLE,
                attackAnimation: AnimationType.WARRIOR_ATTACK,
                //deadImage: IMAGE_WARRIOR_DEAD,
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
            return { image: IMAGE_NECROMANCER };
        case EHeroClass.PALADIN:
            return { image: IMAGE_PALADIN };
        case EHeroClass.PREDATOR:
            return { image: IMAGE_PREDATOR };
        case EHeroClass.SHADOW_MASTER:
            return { image: IMAGE_SHADOWMASTER };
        case EHeroClass.SHAMAN:
            return { image: IMAGE_SHAMAN };
        case EHeroClass.COMMANDER:
            return { image: IMAGE_COMMANDER };
        case EHeroClass.SAMURAI:
            //return { image: IMAGE_SAMURAI };
            return { image: IMAGE_SAMURAI, animation: AnimationType.SAMURAI_IDLE };
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
            return { image: IMAGE_BARBARIAN };
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
        //
        default:
            return { image: IMAGE_FISHMAN };
    }
}

export const getUnitImage = (unitId: string): IAnimations => {
    const id = unitId.split("_")[0];
    console.log(">>>> getUnitImage", unitId);
    switch (id) {
        case "BOSSMINOTAUR":
            return { image: IMAGE_BOSS_MINOTAUR };
        case "PEASANT":
            return { image: IMAGE_PESANT_1 };
        case "GOBLIN":
        case "GOLDGOBLIN1":
        case "WEAKGOBLIN":
            return { image: IMAGE_GOBLIN_1 };
        case "SKELETON":
        case "SKELETONWARRIOR":
        case "SKELETONMAGE":
        case "SOLDIER":
        default:
            return { image: IMAGE_SKELETON_1 };
    }
};
