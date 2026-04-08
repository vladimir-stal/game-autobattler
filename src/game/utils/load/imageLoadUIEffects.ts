import { Scene } from "phaser";

const path = "assets/sprites/effects/ui/";

export const IMAGE_EFFECT_UI_BUFF_0 = "IMAGE_EFFECT_UI_BUFF_0";
export const IMAGE_EFFECT_UI_BUFF_2 = "IMAGE_EFFECT_UI_BUFF_2";

export function loadImagesUIEffects(scene: Scene) {
    // BUFFS
    //
    scene.load.spritesheet(IMAGE_EFFECT_UI_BUFF_0, `${path}buffs/buff_animation_0_cut_58x86.png`, {
        frameWidth: 58,
        frameHeight: 86,
    });
    //
    scene.load.spritesheet(IMAGE_EFFECT_UI_BUFF_2, `${path}buffs/buff_animation_2_cut_232x344.png`, {
        frameWidth: 232,
        frameHeight: 344,
    });
}
