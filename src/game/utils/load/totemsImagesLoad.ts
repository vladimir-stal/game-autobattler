import { Scene } from "phaser";
import { COMPLETE } from "../../consts";
import { IMAGE_TOTEM_4, IMAGE_TOTEM_WILD_BASIC_IDLE, IMAGE_TOTEM_BOSS_MINOTAUR, IMAGE_TOTEM_WILD_BASIC_ACTIVE } from "../imageLoadUtil";

// TOTEMS
//scene.load.image(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/green_totem_1_300.png"); //totem1

// scene.load.spritesheet(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/green_orb_150.png", {
//     frameWidth: 150,
//     frameHeight: 269,
// });

export async function loadBasicWildTotemImages(scene: Scene) {
    //WEBP
    scene.load.spritesheet(IMAGE_TOTEM_WILD_BASIC_IDLE, "assets/sprites/totems/totem_1/totem_1_idle_cut_200.png", {
        frameWidth: 200,
        frameHeight: 300,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_TOTEM_WILD_BASIC_ACTIVE, "assets/sprites/totems/totem_1/totem_1_active_cut_200.png", {
        frameWidth: 200,
        frameHeight: 300,
    });

    //
    //scene.load.image(IMAGE_TOTEM_ATTACK, "assets/sprites/totems/totem_1.png");
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

export async function loadBossMinotaurTotemImages(scene: Scene) {
    scene.load.image(IMAGE_TOTEM_BOSS_MINOTAUR, "assets/sprites/totems/totem_2.png");
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

export async function loadBardHeroictuneTotemImages(scene: Scene) {
    scene.load.image(IMAGE_TOTEM_4, "assets/sprites/totems/totem_4.png");
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
