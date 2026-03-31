import { Scene } from "phaser";
import { AnimationType } from "../../../types";
import {
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
    IMAGE_MAGIC_ATTACK,
    IMAGE_MAGIC_DEFEATED,
    IMAGE_MAGIC_HURT,
    IMAGE_MAGIC_IDLE,
    IMAGE_MAGIC_IDLE_BATTLE_0,
    IMAGE_MAGIC_SPELL,
    IMAGE_MASTER_ATTACK,
    IMAGE_MASTER_ATTACK_2,
    IMAGE_MASTER_BUFF,
    IMAGE_MASTER_DEFEATED,
    IMAGE_MASTER_HURT,
    IMAGE_MASTER_IDLE,
    IMAGE_MASTER_IDLE_BATTLE,
    IMAGE_ORDER_ATTACK,
    IMAGE_ORDER_ATTACK_2,
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
} from "../imageLoadUtil";

export function createBasicHeroesAnimations(scene: Scene) {
    //
    // BARD ///////////////////////////////////////// BARD //////////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.BARD_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_IDLE, { start: 0, end: 103 }),
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_IDLE_BATTLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARD_IDL_BATTLE, { start: 0, end: 103 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_IDLE_BATTLE, {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARD_ATTACK, { start: 0, end: 70 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_ATTACK, {
            frames: [
                1, 3, 5, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19,
                //
                20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
                //
                //40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                40, 44, 48, 52, 56, 60, 61, 62, 63,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARD_DEFEATED, { start: 0, end: 103 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_DEFEATED, {
            frames: [
                1, 2, 3, 4, 5, 5, 7, 9, 11, 12, 14, 16, 18, 22, 24, 26, 30,
                //
                34, 38, 46,

                //
                //40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_BUFF,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARD_DEFEATED, { start: 0, end: 103 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_BUFF, {
            frames: [
                //40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
                40,
                38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                //
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
                86, 87, 88, 89, 90,
                //
                91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                //
                //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_BARD_HURT, { start: 0, end: 103 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_HURT, {
            frames: [
                22, 23, 24, 25, 26, 27, 28, 30, 32, 34, 36, 38, 40, 42, 44, 45, 46, 47, 47, 47,
                //
                28, 27, 26, 25, 24, 23, 22, 21, 20,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // DARK ///////////////////////////////////////// DARK //////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.DARK_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_IDLE_BATTLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_IDLE_BATTLE, {
            frames: [
                //34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                //
                //58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33,
                25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_ATTACK, {
            frames: [
                33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
                69, 70,
                //
                36, 33, 30, 27, 23, 18, 14, 10, 6, 2,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_SPELL,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_SPELL, {
            frames: [
                11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
                //82, 83, 84, 85,
                //
                26, 22, 18, 14, 13, 12, 11,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_DARK_DEFEATED, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_DEFEATED, {
            frames: [
                11, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 46, 50, 56, 62,
                //
                63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_HURT,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_HURT, {
            frames: [
                11, 12, 14, 16, 18, 20, 22, 24, 26, 30, 34, 38, 42, 46, 50,
                //
                20, 18, 16, 14, 12, 10,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    //
    //
    // MAGIC ///////////////////////////////////////// MAGIC ////////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.MAGIC_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE, { start: 0, end: 103 }),
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_IDLE_BATTLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE_BATTLE_0, { start: 0, end: 99 }),
        //frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE_BATTLE_0, { start: 0, end: 36 }),
        // frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE_BATTLE_0, {
        //     frames: [
        //         0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 3, 2,
        //         1,
        //     ],
        // }),
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE_BATTLE_0, {
            frames: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].reverse(),
                1,
                1,
                0,
                0,
            ],
        }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_ATTACK, { start: 0, end: 48 }),
        frameRate: 30,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_ATTACK_SPELL,
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_SPELL, { start: 0, end: 99 }),
        frameRate: 40,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_DEFEATED, { start: 0, end: 90 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_DEFEATED, {
            //frames: [11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28, 30, 34, 38, 42, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
        }),
        frameRate: 30,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_HURT, { start: 0, end: 90 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_HURT, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 33, 34, 35, 36, 37, 38, 38,
                //
                28, 26, 24, 22, 20, 18, 16, 14, 12, 10,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    // MASTER ///////////////////////////////////////// MASTER //////////////////////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.MASTER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_IDLE, { start: 0, end: 99 }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_IDLE_BATTLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_IDLE_BATTLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_IDLE_BATTLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 26, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_ATTACK, {
            frames: [
                2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 30, 36, 42, 48, 54, 54, 54, 54, 54, 54, 54, 56, 60, 64, 68, 72, 73, 74, 75, 76, 77, 78,
                79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_ATTACK_2,
        //frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_ATTACK_2, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_ATTACK_2, {
            frames: [
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                //
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                //42, 43, 44, 45, 46, 47, 48, 49, 50,
                42,
                44,
                46,
                48,
                50,
                52,
                54,
                56,
                58,
                60,
                62,
                64,
                66,
                //
                //51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,66,
                67,
                68,
                69,
                70,
                //
                71,
                72,
                73,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                82,
                83,
                84,
                85,
                86,
                87,
                88,
                89,
                90,
                //
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                98, //99, 100,
                //101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                // 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                //
                //
                //                 110, 109, 108, 107, 106, 105, 104, 103, 102, 101,
                // 99, 98, 97, 96, 95, 94, 93, 92, 91, 90,
                // //
                // 89, 88, 87, 86, 85, 84, 83, 82, 81, 80,
                // 79, 78, 77, 76, 75, 74, 73, 72, 71, 70,
                // //
                // 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                // 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,
                // //
                // 49, 48, 47, 46, 45, 44, 43, 42, 41, 40,
                // 39, 38, 37, 36, 35, 34, 33, 32, 31, 30,
                // //
                // 29, 28, 27, 26, 25, 24, 23, 22, 21, 20,
                // 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,
            ],
        }),
        frameRate: 50,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_DEFEATED,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_DEFEATED, {
            frames: [2, 6, 10, 14, 18, 22, 26, 30, 36, 40, 44, 48, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_HURT,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_HURT, {
            //frames: [74, 72, 70, 68, 64, 60, 55, 55, 55, 55, 55, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
            //frames: [74, 72, 70, 68, 64, 60, 57, 57, 57, 57, 57, 57, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
            frames: [17, 15, 13, 11, 7, 3, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_BUFF,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_BUFF, {
            // frames: [
            //     11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 33, 34, 34, 33, 33, 33, 32, 31, 30, 29, 28, 26, 24,
            //     22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            // ],
            frames: [
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 0, 0, 1, 1, 0, 0, 0, 32, 31, 30, 29, 28, 26, 24, 22, 20,
                18, 16, 14, 12, 11, 10, 9, 8, 7, 6, 5, 4,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // ORDER //////////////////////////////////////////////////////// ORDER ////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.ORDER_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_ATTACK, { start: 11, end: 76 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_ATTACK, {
            frames: [
                11, 12, 16, 20, 24, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 82, 86, 90, 94, 98, 102,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_ATTACK_2,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_ATTACK_2, { start: 0, end: 118 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_ATTACK_2, {
            frames: [
                // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                //
                31, 32, 33,
                //
                //34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                34, 36, 38, 40,
                //
                //42, 44, 46, 48, 50,
                42, 46, 50,
                //
                //51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
                54, 58, 60, 62, 64, 66, 68, 70,
                //
                //71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                72, 74, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                //
                91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                //
                111, 112, 113, 114, 115, 116, 117, 118,
            ],
        }),
        frameRate: 50,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_SHIELD_BUFF,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_SHIELD_BUFF, { start: 0, end: 100 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_SHIELD_BUFF, {
            frames: [8, 9, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 25, 20, 15, 10, 9, 8],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_DEFEATED, { start: 11, end: 42 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_DEFEATED, { start: 0, end: 31 }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_IDLE_BATTLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_IDLE_BATTLE, { start: 0, end: 95 }),
        frameRate: 25,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_HURT, { start: 0, end: 95 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_HURT, {
            // frames: [
            //     60, 57, 54, 48, 39, 39, 40, 40, 40, 40, 40, 41, 41, 42, 42, 43, 44, 45, 47, 49, 51, 53, 55,
            //     //
            //     56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76,
            // ],
            frames: [
                //60, 57, 54, 48, 39, 39, 40, 40, 40, 40, 40, 41, 41, 42, 42, 43, 44, 45, 47, 49, 51, 53, 55,
                //28, 25, 22,
                16, 7, 7, 8, 8, 8, 8, 8, 9, 9, 10, 10, 11, 12, 13, 15, 17, 19, 21, 23,
                //
                //56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76,
                24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // PRIEST ///////////////////////////////////////// PRIEST //////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.PRIEST_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_IDLE, { start: 0, end: 99 }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_IDLE_BATTLE,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_IDLE_BATTLE, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_IDLE_BATTLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                //
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                //
                40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3,
                2, 1,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_HEAL,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_HEAL, { start: 0, end: 50 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_HEAL, {
            frames: [
                //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
                //
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                56, 57, 58, 59, 60, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_ATTACK, {
            frames: [
                //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                1, 3, 5, 7, 9, 11, 13, 15, 17, 19,
                //
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
                //20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                //41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                //39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
                12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_DEFEATED, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_DEFEATED, {
            // frames: [
            //     //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            //     //1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            //     11, 13, 15, 17, 19,
            //     //
            //     //20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            //     20,

            //     22, 24, 26,

            //     28, 30, 34, 38, 62, 66, 70, 74, 75, 76, 77, 78, 79, 80, 81,
            //     //41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            //     //39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
            //     //12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            // ],
            frames: [1, 3, 5, 7, 9, 10, 12, 14, 16, 18, 20, 24, 28, 52, 56, 60, 64, 65, 66, 67, 68, 69, 70, 71],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_HURT, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_HURT, {
            // frames: [
            //     //20,
            //     22, 24, 28, 32, 36, 40, 42, 44, 46, 46, 46, 46, 46, 46, 46, 46,
            //     //
            //     30, 28, 26, 24, 22,
            //     //20,
            // ],
            frames: [
                //20,
                //22, 24, 28, 32, 36, 40, 42, 44, 46, 46, 46, 46, 46, 46, 46, 46,
                //
                0, 2, 6, 10, 14, 18, 20, 22, 24, 24, 24, 24, 24, 24, 24, 24,
                //
                //30, 28, 26, 24, 22,
                //
                8, 6, 4, 2, 0,
                //20,
            ],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    //
    //
    // SUMMON ///////////////////////////////////////// SUMMON ///////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.SUMMON_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_IDLE_BATTLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_IDLE_BATTLE, { start: 0, end: 103 }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_ATTACK, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_ATTACK, {
            frames: [
                4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 60, 65,
                //
                22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_DEFEATED, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_DEFEATED, {
            // frames: [
            //     //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            //     //1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            //     11, 13, 15, 17, 19,
            //     //
            //     //20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            //     20,

            //     22, 24, 26,

            //     28, 30, 34, 38, 62, 66, 70, 74, 75, 76, 77, 78, 79, 80, 81,
            //     //41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            //     //39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
            //     //12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            // ],
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 28, 32, 36, 40, 44, 48, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_SPELL,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_SPELL, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_SPELL, {
            frames: [
                //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 28, 32, 36, 40, 44, 48, 52, 53, 54, 55, 56, 57, 58, 59, 60
                0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                46, 47, 48, 49, 50,
                //
                16, 14, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_HURT, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_HURT, {
            frames: [
                4, 6, 8, 10, 12, 14,
                //
                //65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
                //71, 72, 73, 74, 75,
                74, 75,
                //
                76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
                //
                14, 12, 10, 9, 8, 7, 6, 4,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    //
    //
    // WARRIOR ///////////////////////////////////////// WARRIOR //////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.WARRIOR_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_IDLE, { start: 0, end: 74 }),
        frameRate: 6,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WARRIOR_IDLE_BATTLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_IDLE_BATTLE, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
                10, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0,
            ],
        }),
        frameRate: 15,
        repeat: -1,
    });

    //warrior_attack_2
    // scene.anims.create({
    //     key: AnimationType.WARRIOR_ATTACK,
    //     frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, {
    //         frames: [1, 3, 5, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 22, 21, 20, 19, 11, 0, 0, 0, 0, 0, 0],
    //     }),
    //     frameRate: 20,
    //     //repeat: -1,
    // });

    // scene.anims.create({
    //     key: AnimationType.WARRIOR_ATTACK,
    //     //frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, { start: 0, end: 99 }),
    //     frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, {
    //         frames: [
    //             //22, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 57, 61, 65, 69, 73, 73, 73, 73, 73,
    //             0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 35, 39, 43, 47, 51, 51, 51, 51, 51,
    //             //
    //             //37, 35, 33, 31, 29, 27, 25,
    //             15, 13, 11, 9, 7, 5, 3,
    //         ],
    //     }),
    //     frameRate: 30,
    //     //repeat: -1,
    // });

    scene.anims.create({
        key: AnimationType.WARRIOR_ATTACK,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, { start: 0, end: 119 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, {
            frames: [
                // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                //26, 27, 28, 29, 30,
                26, 28, 30,
                //
                //31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //32, 34, 36, 38, 40, 42, 44, 46, 48, 50,
                32, 34, 36, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                //
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //
                71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
                //85, 86, 87, 88, 89, 90,
                //
                //91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                // 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
                // 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                //19, 18, 17, 16, 15,
                14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WARRIOR_BUFF_REGEN,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_BUFF_REGEN, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_BUFF_REGEN, {
            frames: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                //61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                //71, 72, 73, 74,75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,

                //21, 20, 19, 18.17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
                //27, 26, 25, 24, 23, 22,
                20, 18, 16, 14, 12, 10, 8, 6, 5, 4, 3,
            ],
        }),
        frameRate: 30,
    });

    scene.anims.create({
        key: AnimationType.WARRIOR_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_DEFEATED, { start: 0, end: 50 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_DEFEATED, {
            frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 46, 52],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WARRIOR_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_HURT, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_HURT, {
            frames: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 18, 22, 26, 26,
                //
                18, 16, 14, 12, 10, 8, 6, 4,
            ],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    //
    //
    // WILD ///////////////////////////////////////// WILD //////////////////////////////////////////////////////////////////////
    //
    //

    scene.anims.create({
        key: AnimationType.WILD_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_IDLE, { start: 0, end: 99 }),
        frameRate: 6,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_IDLE_BATTLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_IDLE_BATTLE, {
            frames: [
                //60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 94,
                //
                //93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                //60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 94,
                5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                //
                //93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
            ],
        }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_ATTACK, {
            frames: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                //21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                //24, 28, 32, 36,
                //40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75,
                40, 44, 48, 52, 56, 60, 64, 68, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 94,
                //60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 94,
                //81, 82, 83, 84, 85, 86, 87, 88,
                //89, 90, 91, 92, 93, 94, 95, 96,
                //97, 98, 99, 100, 101, 102, 103,
                //93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
                19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_DEFEATED,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WILD_DEFEATED, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_DEFEATED, {
            frames: [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        }),
        frameRate: 20,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_BUFF,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WILD_BUFF_GREEN, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_BUFF_GREEN, {
            frames: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                //
                10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_HURT,
        //frames: scene.anims.generateFrameNumbers(IMAGE_WILD_HURT, { start: 0, end: 99 }),
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_HURT, {
            frames: [
                //12, 14, 16, 18, 20, 22, 24, 30, 30, 30, 30,
                1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 19, 19, 19,
                //
                //26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
                15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
            ],
        }),
        frameRate: 30,
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
