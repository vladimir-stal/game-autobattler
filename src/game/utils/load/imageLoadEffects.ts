import { Scene } from "phaser";

//

const path = "assets/sprites/effects/";

//

export const IMAGE_EFFECT_LIGHTNING_1 = "IMAGE_EFFECT_LIGHTNING_1";
export const IMAGE_EFFECT_LIGHTNING_2 = "IMAGE_EFFECT_LIGHTNING_2";
//
export const IMAGE_EFFECT_SAMURAI_ATTACK_2 = "IMAGE_EFFECT_SAMURAI_ATTACK_2";
export const IMAGE_EFFECT_MASTER_ATTACK_2 = "IMAGE_EFFECT_MASTER_ATTACK_2";
export const IMAGE_EFFECT_ORDER_ATTACK_2 = "IMAGE_EFFECT_ORDER_ATTACK_2";
export const IMAGE_EFFECT_PRIEST_ATTACK = "IMAGE_EFFECT_PRIEST_ATTACK";
export const IMAGE_EFFECT_PRIEST_HEAL = "IMAGE_EFFECT_PRIEST_HEAL";
export const IMAGE_EFFECT_DARK_ATTACK = "IMAGE_EFFECT_DARK_ATTACK";
export const IMAGE_EFFECT_BARD_ATTACK = "IMAGE_EFFECT_BARD_ATTACK";
export const IMAGE_EFFECT_MAGIC_ATTACK = "IMAGE_EFFECT_MAGIC_ATTACK";
export const IMAGE_EFFECT_WARRIOR_ATTACK_2 = "IMAGE_EFFECT_WARRIOR_ATTACK_2";
export const IMAGE_EFFECT_WILD_ATTACK = "IMAGE_EFFECT_WILD_ATTACK";

export function loadImagesEffects(scene: Scene) {
    //
    // LIGHTNING
    //
    scene.load.spritesheet(IMAGE_EFFECT_LIGHTNING_1, `${path}magic_lightning_1_cut_400.png`, {
        frameWidth: 400,
        frameHeight: 400,
    });

    // BASIC HEROES //////////////////////////////////////////////////////////
    //
    // BARD
    scene.load.spritesheet(IMAGE_EFFECT_BARD_ATTACK, `${path}bard/bard_attack_300_5.png`, {
        frameWidth: 300,
        frameHeight: 300,
    });
    // DARK
    scene.load.spritesheet(IMAGE_EFFECT_DARK_ATTACK, `${path}dark/dark_attack_2_300_10.png`, {
        frameWidth: 300,
        frameHeight: 300,
    });
    // MAGIC
    scene.load.spritesheet(IMAGE_EFFECT_MAGIC_ATTACK, `${path}lightning03_cut_400.png`, {
        frameWidth: 400,
        frameHeight: 400,
    });
    // MASTER
    scene.load.spritesheet(IMAGE_EFFECT_MASTER_ATTACK_2, `${path}master/master_attack_2_300.png`, {
        frameWidth: 300,
        frameHeight: 300,
    });
    // ORDER
    scene.load.spritesheet(IMAGE_EFFECT_ORDER_ATTACK_2, `${path}order/order_attack_2_cut_400.png`, {
        frameWidth: 400,
        frameHeight: 300,
    });
    // PRIEST
    scene.load.spritesheet(IMAGE_EFFECT_PRIEST_ATTACK, `${path}priest/priest_attack_2_cut_500.png`, {
        frameWidth: 500,
        frameHeight: 500,
    });
    //
    scene.load.spritesheet(IMAGE_EFFECT_PRIEST_HEAL, `${path}priest/heal_cut_400.png`, {
        frameWidth: 400,
        frameHeight: 400,
    });
    // WARRIOR
    scene.load.spritesheet(IMAGE_EFFECT_WARRIOR_ATTACK_2, `${path}warrior/warrior_attack_5_cut_300.png`, {
        frameWidth: 300,
        frameHeight: 300,
    });
    // WILD
    scene.load.spritesheet(IMAGE_EFFECT_WILD_ATTACK, `${path}wild/wild_attack_2_300.png`, {
        frameWidth: 300,
        frameHeight: 225,
    });

    // MC HEROES //////////////////////////////////////////////////////////

    //
    // SAMURAI
    //
    scene.load.spritesheet(IMAGE_EFFECT_SAMURAI_ATTACK_2, `${path}samurai/samurai_attack_2_cut_300.png`, {
        frameWidth: 300,
        frameHeight: 300,
    });
}
