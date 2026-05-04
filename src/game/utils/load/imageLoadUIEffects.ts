import { Scene } from "phaser";
import { IMAGE_EFFECT_PRIEST_HEAL } from "./imageLoadEffects";

const path = "assets/sprites/effects/ui/";

// buffs
export const IMAGE_EFFECT_UI_BUFF_0 = "IMAGE_EFFECT_UI_BUFF_0";
export const IMAGE_EFFECT_UI_BUFF_2 = "IMAGE_EFFECT_UI_BUFF_2";
// statuses
export const IMAGE_EFFECT_UI_STATUS_SHOCK_0 = "IMAGE_EFFECT_UI_STATUS_SHOCK_0";

export function loadImagesUIEffects(scene: Scene) {
    // BUFFS
    //
    scene.load.spritesheet(IMAGE_EFFECT_UI_BUFF_0, `${path}buffs/buff_animation_0_cut_58x86.webp`, {
        frameWidth: 58,
        frameHeight: 86,
    });
    //
    scene.load.spritesheet(IMAGE_EFFECT_UI_BUFF_2, `${path}buffs/buff_animation_2_cut_232x344.webp`, {
        frameWidth: 232,
        frameHeight: 344,
    });
    // HEAL
    scene.load.spritesheet(IMAGE_EFFECT_PRIEST_HEAL, `assets/sprites/effects/priest/heal_2_cut_400.webp`, {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    // STATUSES
    //
    // SHOCK
    scene.load.spritesheet(IMAGE_EFFECT_UI_STATUS_SHOCK_0, `${path}statuses/shock_2_cut_323x344.webp`, {
        frameWidth: 232,
        frameHeight: 344,
    });
}
