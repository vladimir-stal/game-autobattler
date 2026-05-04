import { Scene } from "phaser";
import { COMPLETE } from "../../consts";
import { IMAGE_TOTEM_ATTACK } from "../imageLoadUtil";

// TOTEMS
//scene.load.image(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/green_totem_1_300.png"); //totem1

// scene.load.spritesheet(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/green_orb_150.png", {
//     frameWidth: 150,
//     frameHeight: 269,
// });

export async function loadBasicWildTotemImages(scene: Scene) {
    //WEBP
    scene.load.spritesheet(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/wild_basic_totem_cut_100.png", {
        frameWidth: 100,
        frameHeight: 100,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
