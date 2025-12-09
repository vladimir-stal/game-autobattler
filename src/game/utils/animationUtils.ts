import { AnimationType } from "../../types";
import { GameScene } from "../scenes/GameScene";
import {
    IMAGE_BARD_IDLE,
    IMAGE_DARK_ATTACK,
    IMAGE_DARK_IDLE,
    IMAGE_LEADER_1_IDLE,
    IMAGE_MAGIC_ATTACK,
    IMAGE_MAGIC_IDLE,
    IMAGE_MASTER_ATTACK,
    IMAGE_MASTER_IDLE,
    IMAGE_ORDER_ATTACK,
    IMAGE_ORDER_IDLE,
    IMAGE_PRIEST_ATTACK,
    IMAGE_PRIEST_HEAL,
    IMAGE_PRIEST_IDLE,
    IMAGE_SAMURAI_IDLE,
    IMAGE_SUMMON_ATTACK,
    //IMAGE_SHAMAN_ATTACK,
    IMAGE_SUMMON_IDLE,
    IMAGE_WARRIOR_ATTACK,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WILD_ATTACK,
    IMAGE_WILD_IDLE,
} from "./imageLoadUtil";

export function createAnimations(scene: GameScene) {
    // scene.anims.create({
    //     defaultTextureKey: IMAGE_SORCERESS,
    //     key: AnimationType.SORCERER_IDLE,
    //     frames: [{ frame: 0, duration: 1900 }],
    // });

    //  scene.anims.create({
    //         key: AnimationType.SORCERER_IDLE,
    //         frames: [{ key: IMAGE_SORCERESS, frame: 1 }],
    //         frameRate: 20,
    //     });

    // scene.anims.create({
    //     key: AnimationType.SORCERER_IDLE,
    //     frames: scene.anims.generateFrameNumbers(IMAGE_SORCERESS, { start: 0, end: 25 }),
    //     frameRate: 6,
    //     repeat: -1,
    // });

    scene.anims.create({
        key: AnimationType.WILD_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_IDLE, { start: 0, end: 99 }),
        frameRate: 6,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WARRIOR_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_IDLE, { start: 0, end: 74 }),
        frameRate: 6,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MAGIC_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_IDLE, { start: 0, end: 103 }),
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.BARD_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_BARD_IDLE, { start: 0, end: 103 }),
        frameRate: 10,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_IDLE, { start: 0, end: 99 }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_IDLE, { start: 0, end: 99 }),
        frameRate: 15,
        repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_IDLE, { start: 0, end: 99 }),
        frameRate: 20,
        repeat: -1,
    });

    //////////////

    // scene.anims.create({
    //     key: AnimationType.SHAMAN_ATTACK,
    //     frames: scene.anims.generateFrameNumbers(IMAGE_SHAMAN_ATTACK, { start: 0, end: 103 }),
    //     frameRate: 40,
    //     //repeat: -1,
    // });

    scene.anims.create({
        key: AnimationType.MAGIC_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_MAGIC_ATTACK, { start: 0, end: 99 }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_HEAL,
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_HEAL, { start: 0, end: 99 }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.PRIEST_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_PRIEST_ATTACK, { start: 0, end: 40 }),
        frameRate: 40,
        //repeat: -1,
    });

    // scene.anims.create({
    //     key: AnimationType.WARRIOR_ATTACK,
    //     frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, { start: 20, end: 59 }),
    //     frameRate: 30,
    //     //repeat: -1,
    // });

    scene.anims.create({
        key: AnimationType.WARRIOR_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_WARRIOR_ATTACK, {
            frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 40, 44, 48, 52, 55, 55, 55, 55, 55],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.WILD_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_WILD_ATTACK, { start: 0, end: 31 }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.SUMMON_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_SUMMON_ATTACK, { start: 0, end: 25 }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.DARK_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_DARK_ATTACK, { start: 0, end: 29 }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.ORDER_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_ORDER_ATTACK, { start: 0, end: 32 }),
        frameRate: 30,
        //repeat: -1,
    });

    scene.anims.create({
        key: AnimationType.MASTER_ATTACK,
        frames: scene.anims.generateFrameNumbers(IMAGE_MASTER_ATTACK, {
            frames: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 20, 24, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
            ],
        }),
        frameRate: 40,
        //repeat: -1,
    });

    // MC HEROES ///////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.SAMURAI_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_SAMURAI_IDLE, { start: 32, end: 81 }),
        frameRate: 20,
        repeat: -1,
    });

    // LEADER ///////////////////////////////////////////////////////

    scene.anims.create({
        key: AnimationType.LEADER_1_IDLE,
        frames: scene.anims.generateFrameNumbers(IMAGE_LEADER_1_IDLE, { start: 0, end: 103 }),
        frameRate: 20,
        repeat: -1,
    });
}
