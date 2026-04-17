import { Scene } from "phaser";
import { AnimationType } from "../../../types";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_BARBARIAN_ATTACK,
    IMAGE_BARBARIAN_BATTLE_IDLE,
    IMAGE_BARBARIAN_IDLE,
    IMAGE_BLADEDANCER,
    IMAGE_COMMANDER_BATTLE_IDLE,
    IMAGE_COMMANDER_IDLE,
    IMAGE_PREDATOR_IDLE,
    IMAGE_RUNECASTER_IDLE,
    IMAGE_SAMURAI_ATTACK,
    IMAGE_SAMURAI_ATTACK_2,
    IMAGE_SAMURAI_BATTLE_IDLE,
    IMAGE_SAMURAI_IDLE,
} from "../imageLoadUtil";
import {
    IMAGE_ASSASSIN_ATTACK,
    IMAGE_ASSASSIN_BATTLE_IDLE,
    IMAGE_ASSASSIN_IDLE,
    IMAGE_BATTLEMAGE_BATTLE_IDLE,
    IMAGE_BATTLEMAGE_IDLE,
    IMAGE_BLADEDANCER_IDLE,
    IMAGE_HUNTER_ATTACK,
    IMAGE_HUNTER_BATTLE_IDLE,
    IMAGE_HUNTER_IDLE,
    IMAGE_JESTER_ATTACK,
    IMAGE_JESTER_BATTLE_IDLE,
    IMAGE_JESTER_IDLE,
    IMAGE_NECROMANCER_ATTACK,
    IMAGE_NECROMANCER_BATTLE_IDLE,
    IMAGE_NECROMANCER_IDLE,
    IMAGE_PALADIN_ATTACK,
    IMAGE_PALADIN_BATTLE_IDLE,
    IMAGE_PALADIN_IDLE,
    IMAGE_PALADIN_SHIELD_SPELL,
    IMAGE_SORCERER_IDLE,
    IMAGE_WARLOCK_IDLE,
} from "../load/mcHeroesImagesLoad";

export function createMcHeroesAnimations(scene: Scene) {
    //
    // ASSASSIN ///////////////////////////////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.ASSASSIN_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_ASSASSIN_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ASSASSIN_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ASSASSIN_BATTLE_IDLE, { start: 0, end: 103 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ASSASSIN_BATTLE_IDLE, {
            frames: [
                //37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
                //
                //67, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 37,
                4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 32, 0,
                //
                0, 0, 32, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 4,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ASSASSIN_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ASSASSIN_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ASSASSIN_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                //
                //31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                //32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
                32, 36, 40, 44, 48, 50, 52, 54, 56, 58,
                //
                //60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
                //
                81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
                //99, 100,
            ].map((num) => num - 11),
        }),
        frameRate: 40,
        //repeat: -1,
    });

    // BATTLE MAGE ///////////////////////////////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.BATTLEMAGE_IDLE,
        // frames: scene.anims.generateFrameNumbers(IMAGE_BATTLEMAGE_IDLE, { start: 0, end: 120 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BATTLEMAGE_IDLE, {
            frames: [
                77, 78, 79, 80,
                //
                81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                //
                101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                //
                119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101,
                //
                99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                //
                79, 78, 77,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BATTLEMAGE_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BATTLEMAGE_BATTLE_IDLE, { start: 0, end: 120 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BATTLEMAGE_BATTLE_IDLE, {
            frames: [
                //31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //
                71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
                //88, 89, 90,
                //
                //91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                //101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                //
                //99, 98, 97, 96, 95, 94, 93, 92, 91,
                //90, 89, 88,
                87, 86, 85, 84, 83, 82, 81, 80,
                //
                79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                //
                59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
            ],
        }),
        frameRate: 25,
        repeat: -1,
    });

    // BARBARIAN ///////////////////////////////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.BARBARIAN_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_BARBARIAN_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18,
                17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARBARIAN_BATTLE_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARBARIAN_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARBARIAN_BATTLE_IDLE, {
            frames: [
                //50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                //
                //60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                //
                //70, 71, 72, 73, 74, 75,
                //
                //76, 77, 78, 79,
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 100,
                //
                //51, 52, 53, 54, 54,
                //55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
                //67, 68, 69, 70,
                //
                //69, 68, 67, 66,
                //65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54,
                //53, 52, 51, 50,
                //
                99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81,
                //80, 79, 78, 77, 76,
                //
                //75, 74, 73, 72, 71, 70,
                //
                //69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                //
                //59, 58, 57, 56, 55, 54, 53, 52, 51,
            ],
        }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARBARIAN_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARBARIAN_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARBARIAN_ATTACK, {
            frames: [
                //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                //
                61, 62, 63, 64, 65,
                //66, 67, 68, 69, 70,
                //71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                //
                //81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                //91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
            ],
        }),
        frameRate: 25,
        //repeat: -1,
    });

    //
    //
    // BLADEDANCER ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.BLADEDANCER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_BLADEDANCER_IDLE, { start: 0, end: 99 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_BLADEDANCER_IDLE, {
        //     frames: [
        //         0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18,
        //         17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0,
        //     ],
        // }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // COMMANDER ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    // scene.anims.create({
    //     key: AnimationType.COMMANDER_IDLE,
    //     frames: scene.anims.generateFrameNumbers(IMAGE_COMMANDER_IDLE, { start: 0, end: 119 }),
    //     frameRate: 20,
    //     repeat: -1,
    // });

    scene.anims.create({
        key: AnimationType.COMMANDER_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_COMMANDER_BATTLE_IDLE, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_COMMANDER_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
                //36, 37, 38, 39, 40,
                //
                // 49, 48, 47, 46, 45, 44, 43, 42, 41, 40,
                //40, 39, 38, 37, 36,
                35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
                //
                19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // HUNTER  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.HUNTER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_HUNTER_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.HUNTER_BATTLE_IDLE,
        // frames: scene.anims.generateFrameNumbers(IMAGE_HUNTER_BATTLE_IDLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_HUNTER_BATTLE_IDLE, {
            frames: [
                //
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                //
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
                //
                //
                103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                //
                79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.HUNTER_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_HUNTER_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_HUNTER_ATTACK, {
            frames: [
                // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                //
                33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
                //66, 67, 68, 69, 70,
                // 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                // 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                // 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    //
    //
    // JESTER  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.JESTER_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_JESTER_IDLE, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_JESTER_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                //
                61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                //
                81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                //
                101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                //
                119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101,
                //
                99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                //
                79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                //
                59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40,
                //
                39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
                //
                19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.JESTER_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_JESTER_BATTLE_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.JESTER_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_JESTER_ATTACK, { start: 0, end: 103 }),
        frameRate: 50,
        //repeat: -1,
    });

    //
    //
    // NECROMANCER  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.NECROMANCER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_NECROMANCER_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.NECROMANCER_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_NECROMANCER_BATTLE_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
                //
                19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.NECROMANCER_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_NECROMANCER_ATTACK, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                //
                8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // PALADIN  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.PALADIN_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_PALADIN_IDLE, { start: 0, end: 119 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_PALADIN_IDLE, {
        //     frames: [
        //         0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        //         //
        //         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 40,
        //         //
        //         39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21,
        //         //
        //         20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
        //     ],
        // }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PALADIN_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_PALADIN_BATTLE_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 40,
                //
                39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21,
                //
                20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PALADIN_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_PALADIN_ATTACK, {
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28,
                //
                30, 32, 34, 36, 38, 40, 42, 44, 46, 47, 48, 49, 50, 51, 52,
                //
                16, 15, 14, 13, 12, 11,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PALADIN_MAGIC_SHIELD,
        frames: scene.anims.generateFrameNumbers(IMAGE_PALADIN_SHIELD_SPELL, {
            frames: [
                16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // PREDATOR ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.PREDATOR_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PREDATOR_IDLE, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PREDATOR_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
                108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                //
                119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88,
                87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52,
                51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // RUNECASTER  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.RUNECASTER_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_RUNECASTER_IDLE, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_RUNECASTER_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                //27, 28, 29, 30,
                //31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //
                //30, 29, 28, 27,
                26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // SAMURAI  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.SAMURAI_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_IDLE, { start: 32, end: 81 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_IDLE, {
            frames: [
                32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SAMURAI_BATTLE_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_BATTLE_IDLE, {
            frames: [
                //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                //
                //29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
                55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
                //72, 73, 74, 75, 76,
                //
                //75, 74, 73, 72,
                71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56,
                //77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            ],
        }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SAMURAI_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_ATTACK, {
            frames: [
                20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
                //
                42, 44, 48, 52,
                //
                56, 60, 64, 68,
                //
                //72, 76, 80, 84, 88, 92, 96, 100, 102,
                76, 84, 92, 100, 102, 102, 102,
                //
                20, 18, 16, 14, 12, 10, 8, 6, 4, 2,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SAMURAI_ATTACK_2,
        frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_ATTACK_2, { start: 0, end: 118 }),
        frameRate: 50,
        //repeat: -1,
    });

    //
    //
    // SORCERER  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.SORCERER_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SORCERER_IDLE, { start: 0, end: 120 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SORCERER_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
                108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                //
                119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88,
                87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52,
                51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // WARCLOCK  ///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.WARLOCK_IDLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WARLOCK_IDLE, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WARLOCK_IDLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
                108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                //
                119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88,
                87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52,
                51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    //
    //
    // ///////////////////////////////////////////////////////////////////////////////////////////////////
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
// 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
// 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
//
// 120, 119, 118, 117, 116, 115, 114, 113, 112, 111,
// 110, 109, 108, 107, 106, 105, 104, 103, 102, 101,
// 99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
// 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
// 79, 78, 77, 76, 75, 74, 73, 72, 71, 70,
// 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
// 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
// 49, 48, 47, 46, 45, 44, 43, 42, 41, 40,
// 39, 38, 37, 36, 35, 34, 33, 32, 31, 30,
// 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
// 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
// 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
