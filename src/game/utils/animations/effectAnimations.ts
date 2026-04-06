// MOBS ///////////////////////////////////////// MOBS //////////

import { Scene } from "phaser";
import { EEffectAnimationType } from "../../../types";
import {
    IMAGE_EFFECT_BARD_ATTACK,
    IMAGE_EFFECT_DARK_ATTACK,
    IMAGE_EFFECT_LIGHTNING_1,
    IMAGE_EFFECT_MAGIC_ATTACK,
    IMAGE_EFFECT_MASTER_ATTACK_2,
    IMAGE_EFFECT_ORDER_ATTACK_2,
    IMAGE_EFFECT_PRIEST_ATTACK,
    IMAGE_EFFECT_PRIEST_ATTACK_2,
    IMAGE_EFFECT_PRIEST_HEAL,
    IMAGE_EFFECT_SAMURAI_ATTACK_2,
    IMAGE_EFFECT_WARRIOR_ATTACK_2,
    IMAGE_EFFECT_WILD_ATTACK,
} from "../load/imageLoadEffects";

//

export function createEffectAnimations(scene: Scene) {
    scene.anims.create({
        key: EEffectAnimationType.EFFECT_LIGHTNING_1,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_LIGHTNING_1, { start: 0, end: 119 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_TOTEM_ATTACK, {
        //     frames: [
        //         0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25,
        //         //
        //         26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
        //     ],
        // }),
        frameRate: 50,
        //repeat: -1,
    });

    //
    //
    // BASIC HEROES //////////////////////////////////////////////////////////
    //
    //

    // BARD

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_BARD_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_BARD_ATTACK, { start: 0, end: 54 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_BARD_ATTACK, {
        //     frames: [
        //         //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3,
        //         4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        //         //
        //         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
        //     ],
        // }),
        frameRate: 40,
        //repeat: -1,
    });

    // DARK

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_DARK_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_DARK_ATTACK, { start: 0, end: 32 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_DARK_ATTACK, {
        //     frames: [
        //         1, 3, 5, 7, 9, 13, 17,
        //         //
        //         21, 25, 27, 29, 31, 33, 35, 37,
        //         //
        //         39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        //     ],
        // }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_MAGIC_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_MAGIC_ATTACK, { start: 2, end: 25 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_DARK_ATTACK, {
        //     frames: [
        //         1, 3, 5, 7, 9, 13, 17,
        //         //
        //         21, 25, 27, 29, 31, 33, 35, 37,
        //         //
        //         39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        //     ],
        // }),
        frameRate: 40,
        //repeat: -1,
    });

    // MASTER

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_MASTER_ATTACK_2,
        //frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_MASTER_ATTACK_2, { start: 0, end: 54 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_MASTER_ATTACK_2, {
            frames: [
                //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3,
                4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                //
                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
            ],
        }),
        frameRate: 50,
        //repeat: -1,
    });

    // ORDER

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_ORDER_ATTACK_2,
        //frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_ORDER_ATTACK_2, { start: 0, end: 54 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_ORDER_ATTACK_2, {
            frames: [
                1, 3, 5, 7, 9, 13, 17,
                //
                21, 25, 27, 29, 31, 33, 35, 37,
                //
                39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            ],
        }),
        frameRate: 50,
        //repeat: -1,
    });

    // PRIEST

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_PRIEST_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_PRIEST_ATTACK, { start: 5, end: 27 }),
        frameRate: 30,
    });

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_PRIEST_ATTACK_2,
        //frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_PRIEST_ATTACK_2, { start: 0, end: 43 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_PRIEST_ATTACK_2, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //
                //21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                //24, 28, 29, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76,
                24, 28, 29, 32, 36, 40, 44, 48, 52, 56, 62, 68, 74, 76,
            ],
        }),
        frameRate: 40,
    });

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_PRIEST_HEAL,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_PRIEST_HEAL, { start: 0, end: 87 }), // 0 37
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_PRIEST_HEAL, {
        //     frames: [
        //         1, 3, 5, 7, 9, 13, 17,
        //         //
        //         21, 25, 27, 29, 31, 33, 35, 37,
        //         //
        //         39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        //     ],
        // }),
        frameRate: 40,
        //repeat: -1,
    });

    // WARRIOR

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_WARRIOR_ATTACK_2,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_WARRIOR_ATTACK_2, { start: 5, end: 65 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_DARK_ATTACK, {
        //     frames: [
        //         1, 3, 5, 7, 9, 13, 17,
        //         //
        //         21, 25, 27, 29, 31, 33, 35, 37,
        //         //
        //         39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        //     ],
        // }),
        frameRate: 60,
        //repeat: -1,
    });

    // WILD

    //покрасить в белый анимацию wild и проверить тайминг

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_WILD_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_WILD_ATTACK, { start: 0, end: 54 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_DARK_ATTACK, {
        //     frames: [
        //         1, 3, 5, 7, 9, 13, 17,
        //         //
        //         21, 25, 27, 29, 31, 33, 35, 37,
        //         //
        //         39, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        //     ],
        // }),
        frameRate: 60,
        //repeat: -1,
    });

    //
    //
    // MC HEROES //////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: EEffectAnimationType.EFFECT_SAMURAI_ATTACK_2,
        frames: scene.anims.generateFrameNumbers(IMAGE_EFFECT_SAMURAI_ATTACK_2, { start: 0, end: 45 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_TOTEM_ATTACK, {
        //     frames: [
        //         0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 24, 25,
        //         //
        //         26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
        //     ],
        // }),
        frameRate: 50,
        //repeat: -1,
    });
}

//

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
