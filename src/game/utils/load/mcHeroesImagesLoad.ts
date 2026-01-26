import { Scene } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_BARBARIAN_ATTACK,
    IMAGE_BARBARIAN_BATTLE_IDLE,
    IMAGE_BARBARIAN_IDLE,
    IMAGE_SAMURAI_ATTACK,
    IMAGE_SAMURAI_BATTLE_IDLE,
    IMAGE_SAMURAI_IDLE,
} from "../imageLoadUtil";

export const IMAGE_PALADIN_IDLE = "IMAGE_PALADIN_IDLE";
export const IMAGE_PALADIN_BATTLE_IDLE = "IMAGE_PALADIN_BATTLE_IDLE";
export const IMAGE_PALADIN_ATTACK = "IMAGE_PALADIN_ATTACK";
export const IMAGE_PALADIN_SHIELD_SPELL = "IMAGE_PALADIN_SHIELD_SPELL";
//
export const IMAGE_NECROMANCER_BATTLE_IDLE = "IMAGE_NECROMANCER_BATTLE_IDLE";
export const IMAGE_NECROMANCER_ATTACK = "IMAGE_NECROMANCER_ATTACK";
//

export function loadMcHeroesImages(scene: Scene) {
    //
    // BARBARIAN ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_BARBARIAN_IDLE, "assets/sprites/units/mc/barbarian/barbarian_idle_cut_300.png", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_BARBARIAN_BATTLE_IDLE, "assets/sprites/units/mc/barbarian/barbarian_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_BARBARIAN_ATTACK, "assets/sprites/units/mc/barbarian/barbarian_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // NECROMANCER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_NECROMANCER_BATTLE_IDLE, "assets/sprites/units/mc/necromancer/necromancer_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_NECROMANCER_ATTACK, "assets/sprites/units/mc/necromancer/necromancer_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PALADIN ///////////////////////////////////////////////////////////////////

    // scene.load.spritesheet(IMAGE_PALADIN_IDLE, "assets/sprites/units/mc/samurai/samurai_idle_sprite_320.png", {
    //     frameWidth: 320,
    //     frameHeight: 320,
    // });

    scene.load.spritesheet(IMAGE_PALADIN_BATTLE_IDLE, "assets/sprites/units/mc/paladin/paladin_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_PALADIN_ATTACK, "assets/sprites/units/mc/paladin/paladin_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_PALADIN_SHIELD_SPELL, "assets/sprites/units/mc/paladin/paladin_magic_shield_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // SAMURAI ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SAMURAI_IDLE, "assets/sprites/units/mc/samurai/samurai_idle_sprite_320.png", {
        frameWidth: 320,
        frameHeight: 320,
    });

    scene.load.spritesheet(IMAGE_SAMURAI_BATTLE_IDLE, "assets/sprites/units/mc/samurai/sanurai_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_SAMURAI_ATTACK, "assets/sprites/units/mc/samurai/samurai_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
}
