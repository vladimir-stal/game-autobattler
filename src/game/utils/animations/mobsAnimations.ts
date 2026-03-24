// MOBS ///////////////////////////////////////// MOBS //////////

import { Scene } from "phaser";
import { AnimationType } from "../../../types";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_BOSS_MINOTAUR_ATTACK,
    IMAGE_BOSS_MINOTAUR_HURT,
    IMAGE_BOSS_MINOTAUR_IDLE,
    IMAGE_BOSS_MINOTAUR_SPELL,
    IMAGE_BOSS_MINOTAUR_STOMP,
} from "../imageLoadUtil";
import {
    IMAGE_FIREFLY_BATTLE_IDLE,
    IMAGE_FIREFLY_DEFEATED,
    IMAGE_GOBLIN_1_ATTACK,
    IMAGE_GOBLIN_1_BATTLE_IDLE,
    IMAGE_GOBLIN_2_ATTACK,
    IMAGE_GOBLIN_2_BATTLE_IDLE,
    IMAGE_GOBLIN_SHAMAN_ATTACK,
    IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE,
    IMAGE_GOBLIN_SHAMAN_DEFEATED,
    IMAGE_GOBLIN_SHAMAN_SPELL,
    IMAGE_PEASANT_ATTACK,
    IMAGE_PEASANT_BATTLE_IDLE,
    IMAGE_SKELETON_ATTACK,
    IMAGE_SKELETON_BATTLE_IDLE,
    IMAGE_SUMMONKNIHGT_ATTACK,
    IMAGE_SUMMONKNIHGT_BATTLE_IDLE,
} from "../load/imageLoadMobs";

//

export function createMobAnimations(scene: Scene) {
    //
    //
    // SKELETON_1 /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_SKELETON_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SKELETON_BATTLE_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_SKELETON_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SKELETON_ATTACK, { start: 0, end: 69 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SKELETON_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
                //
                29, 31, 33,
                //
                37, 41, 45, 49, 53, 57,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    // GOBLIN_1 /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_1_BATTLE_IDLE,
        // frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_1_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_1_BATTLE_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                //
                8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 16,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_1_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_1_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_1_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 28, 30, 34, 40, 40, 40,
                //
                20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    // GOBLIN_2 /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_2_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_2_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_2_BATTLE_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                //
                21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 16,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_2_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_2_ATTACK, { start: 0, end: 32 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_1_ATTACK, {
        //     frames: [
        //         11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 28, 30, 34, 40, 40, 40,
        //         //
        //         20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
        //     ],
        // }),
        frameRate: 20,
        //repeat: -1,
    });

    // GOBLIN_SHAMAN /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_SHAMAN_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, {
            frames: [
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99,
                //
                98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
            ],
        }),
        frameRate: 16,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_SHAMAN_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_ATTACK, {
            frames: [
                //31, 32, 33, 34, 35, 36, 37, 38, 39,
                //40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                //51, 52, 53, 54,
                55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //55, 56, 57, 58, 59, 60, 61, 62, 64, 66, 68, 70,
                //
                71, 72, 74, 74, 75, 76, 77, 78,
                //72, 74, 76, 78,
                //79,80
                //
                //31, 30, 29, 28, 27, 26, 25, 24, 23,
                22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_SHAMAN_SPELL,
        //frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_SPELL, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_SPELL, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                //
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                // 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                // 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                // 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                // 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                //
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_GOBLIN_SHAMAN_DEFEATED,
        frames: scene.anims.generateFrameNumbers(IMAGE_GOBLIN_SHAMAN_DEFEATED, { start: 0, end: 99 }),
        frameRate: 20,
        //repeat: -1,
    });

    // PEASANT /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_PEASANT_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PEASANT_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PEASANT_BATTLE_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                //
                22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_PEASANT_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PEASANT_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PEASANT_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30, 32, 34, 36, 38,
                //
                42, 42, 42, 42, 42, 41,
                //
                20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    // FIREFLY /////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MOB_FIREFLY_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_FIREFLY_BATTLE_IDLE, { start: 0, end: 99 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_PEASANT_ATTACK, {
        //     frames: [
        //         11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30, 32, 34, 36, 38,
        //         //
        //         42, 42, 42, 42, 42, 41,
        //         //
        //         20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
        //     ],
        // }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_FIREFLY_DEFEATED,
        frames: scene.anims.generateFrameNumbers(IMAGE_FIREFLY_DEFEATED, { start: 0, end: 43 }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_FIREFLY_APPEAR,
        frames: scene.anims.generateFrameNumbers(IMAGE_FIREFLY_DEFEATED, {
            frames: [29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    // SUMMON KNIHGT

    scene.anims.create({
        key: AnimationType.MOB_SUMMONKNIGHT_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMONKNIHGT_BATTLE_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MOB_SUMMONKNIGHT_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SUMMONKNIHGT_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMONKNIHGT_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                //21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                22, 24, 26, 28, 30,
                //
                //31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                32, 34, 36, 38, 40,
                //
                //41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                42, 44, 46, 48, 50,
                //
                //51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                54, 58,
                //
                //61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                62, 66, 70,
                //
                71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                //29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    //
    //
    // BOSSES ///////////////////////////////////////////////////////
    //
    //

    // MINOTAUR

    scene.anims.create({
        key: AnimationType.BOSS_MINOTAUR_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BOSS_MINOTAUR_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_ATTACK, { start: 11, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 41, 45, 49, 51, 55, 59, 60, 61, 62,
                63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
                99,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BOSS_MINOTAUR_STOMP,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_STOMP, { start: 0, end: 103 }), //72, 73, 74, 75, 76, 77, 78,79, 80, 81, 82, 83, 84, 85,
        frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_STOMP, {
            frames: [
                12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 36, 37, 41, 42, 43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
            ],
        }),
        frameRate: 20,
    });

    scene.anims.create({
        key: AnimationType.BOSS_MINOTAUR_SPELL,
        frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_SPELL, { start: 22, end: 75 }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BOSS_MINOTAUR_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_HURT, { start: 0, end: 54 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BOSS_MINOTAUR_HURT, {
            frames: [4, 8, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
        }),
        frameRate: 20,
        //repeat: -1,
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
