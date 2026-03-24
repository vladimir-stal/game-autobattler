import { Scene } from "phaser";
import { AnimationType } from "../../types";
import { GameScene } from "../scenes/GameScene";
import { createMcHeroesAnimations } from "./animations/mcHeroesAnimations";
import { createMobAnimations } from "./animations/mobsAnimations";
import {
    IMAGE_BARBARIAN_ATTACK,
    IMAGE_BARBARIAN_BATTLE_IDLE,
    IMAGE_BARD_ATTACK,
    IMAGE_BARD_BUFF,
    IMAGE_BARD_DEFEATED,
    IMAGE_BARD_HURT,
    IMAGE_BARD_IDLE,
    IMAGE_BARD_IDLE_BATTLE,
    IMAGE_DARK_ATTACK,
    IMAGE_DARK_DEFEATED,
    IMAGE_DARK_HURT,
    IMAGE_DARK_IDLE,
    IMAGE_DARK_IDLE_BATTLE,
    IMAGE_DARK_SPELL,
    IMAGE_LEADER_1_IDLE,
    IMAGE_MAGIC_ATTACK,
    IMAGE_MAGIC_DEFEATED,
    IMAGE_MAGIC_HURT,
    IMAGE_MAGIC_IDLE,
    IMAGE_MAGIC_IDLE_BATTLE_0,
    IMAGE_MAGIC_SPELL,
    IMAGE_MASTER_ATTACK,
    IMAGE_MASTER_BUFF,
    IMAGE_MASTER_DEFEATED,
    IMAGE_MASTER_HURT,
    IMAGE_MASTER_IDLE,
    IMAGE_MASTER_IDLE_BATTLE,
    IMAGE_ORDER_ATTACK,
    IMAGE_ORDER_DEFEATED,
    IMAGE_ORDER_HURT,
    IMAGE_ORDER_IDLE,
    IMAGE_ORDER_IDLE_BATTLE,
    IMAGE_ORDER_SHIELD_BUFF,
    IMAGE_PRIEST_ATTACK,
    IMAGE_PRIEST_DEFEATED,
    IMAGE_PRIEST_HEAL,
    IMAGE_PRIEST_HURT,
    IMAGE_PRIEST_IDLE,
    IMAGE_PRIEST_IDLE_BATTLE,
    IMAGE_SUMMON_ATTACK,
    IMAGE_SUMMON_DEFEATED,
    IMAGE_SUMMON_HURT,
    IMAGE_SUMMON_IDLE,
    IMAGE_SUMMON_IDLE_BATTLE,
    IMAGE_SUMMON_SPELL,
    IMAGE_WARRIOR_ATTACK,
    IMAGE_WARRIOR_BUFF_REGEN,
    IMAGE_WARRIOR_DEFEATED,
    IMAGE_WARRIOR_HURT,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WARRIOR_IDLE_BATTLE,
    IMAGE_WILD_ATTACK,
    IMAGE_WILD_BUFF_GREEN,
    IMAGE_WILD_DEFEATED,
    IMAGE_WILD_HURT,
    IMAGE_WILD_IDLE,
    IMAGE_WILD_IDLE_BATTLE,
} from "./imageLoadUtil";
import { createTotemAnimations } from "./animations/totemAnimations";
import { createBasicHeroesAnimations } from "./animations/basicHeroesAnimations";
import { createEffectAnimations } from "./animations/effectAnimations";

export function createAnimations(scene: Scene) {
    createEffectAnimations(scene);
    //
    createBasicHeroesAnimations(scene);
    //

    // MC HEROES ///////////////////////////////////////////////////////

    createMcHeroesAnimations(scene);

    // MOBS ///////////////////////////////////////// MOBS //////////

    createMobAnimations(scene);

    // TOTEMS

    createTotemAnimations(scene);

    // LEADER ///////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.LEADER_1_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_LEADER_1_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });
}

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
// 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
// 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
// 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
// 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
// 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
// 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
// 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
//
// 99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
// 89, 88, 87, 83, 85, 84, 83, 82, 81, 80,
// 79, 78, 77, 73, 75, 74, 73, 72, 71, 70,
// 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
// 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
// 49, 48, 47, 46, 45, 44, 43, 42, 41, 40,
// 39, 38, 37, 36, 35, 34, 33, 32, 31, 30,
// 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
// 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
// 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
