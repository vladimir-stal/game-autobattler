import { Scene } from "phaser";
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
import { GAME_MODE } from "../../consts";

// ASSASSIN
//export const IMAGE_ASSASSIN = "IMAGE_ASSASSIN";
export const IMAGE_ASSASSIN_IDLE = "IMAGE_ASSASSIN_IDLE";
export const IMAGE_ASSASSIN_BATTLE_IDLE = "IMAGE_ASSASSIN_BATTLE_IDLE";
export const IMAGE_ASSASSIN_ATTACK = "IMAGE_ASSASSIN_ATTACK";
// BATTLE MAGE
export const IMAGE_BATTLEMAGE_IDLE = "IMAGE_BATTLEMAGE_IDLE";
export const IMAGE_BATTLEMAGE_BATTLE_IDLE = "IMAGE_BATTLEMAGE_BATTLE_IDLE";
export const IMAGE_BATTLEMAGE_ATTACK = "IMAGE_BATTLEMAGE_ATTACK";
// BLADEDANCER
export const IMAGE_BLADEDANCER_IDLE = "IMAGE_BLADEDANCER_IDLE";
//HUNTER
export const IMAGE_HUNTER = "IMAGE_HUNTER";
export const IMAGE_HUNTER_IDLE = "IMAGE_HUNTER_IDLE";
export const IMAGE_HUNTER_BATTLE_IDLE = "IMAGE_HUNTER_BATTLE_IDLE";
export const IMAGE_HUNTER_ATTACK = "IMAGE_HUNTER_ATTACK";
// JESTER
export const IMAGE_JESTER_IDLE = "IMAGE_JESTER_IDLE";
export const IMAGE_JESTER_BATTLE_IDLE = "IMAGE_JESTER_BATTLE_IDLE";
export const IMAGE_JESTER_ATTACK = "IMAGE_JESTER_ATTACK";
// PALADIN
export const IMAGE_PALADIN_IDLE = "IMAGE_PALADIN_IDLE";
export const IMAGE_PALADIN_BATTLE_IDLE = "IMAGE_PALADIN_BATTLE_IDLE";
export const IMAGE_PALADIN_ATTACK = "IMAGE_PALADIN_ATTACK";
export const IMAGE_PALADIN_SHIELD_SPELL = "IMAGE_PALADIN_SHIELD_SPELL";
// NECROMANCER
export const IMAGE_NECROMANCER = "IMAGE_NECROMANCER";
export const IMAGE_NECROMANCER_IDLE = "IMAGE_NECROMANCER_IDLE";
export const IMAGE_NECROMANCER_BATTLE_IDLE = "IMAGE_NECROMANCER_BATTLE_IDLE";
export const IMAGE_NECROMANCER_ATTACK = "IMAGE_NECROMANCER_ATTACK";
// SORCERER
export const IMAGE_SORCERER_IDLE = "IMAGE_SORCERER_IDLE";
export const IMAGE_SORCERER_BATTLE_IDLE = "IMAGE_SORCERER_BATTLE_IDLE";
export const IMAGE_SORCERER_ATTACK = "IMAGE_SORCERER_ATTACK";
//
export const IMAGE_WARLOCK_IDLE = "IMAGE_WARLOCK_IDLE";
export const IMAGE_WARLOCK_BATTLE_IDLE = "IMAGE_WARLOCK_BATTLE_IDLE";
export const IMAGE_WARLOCK_ATTACK = "IMAGE_WARLOCK_ATTACK";
//

export function loadMcHeroesImages(scene: Scene) {
    //
    // ASSASSIN ///////////////////////////////////////////////////////////////////

    // TODO: webp
    scene.load.spritesheet(IMAGE_ASSASSIN_IDLE, "assets/sprites/units/mc/assassin/assassin_idle_cut_300.png", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        // TODO: webp
        scene.load.spritesheet(IMAGE_ASSASSIN_BATTLE_IDLE, "assets/sprites/units/mc/assassin/assassin_battle_idle_cut_400.png", {
            frameWidth: 400,
            frameHeight: 400,
        });
        // TODO: webp
        scene.load.spritesheet(IMAGE_ASSASSIN_ATTACK, "assets/sprites/units/mc/assassin/assassin_attack_cut_400.png", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // BATTLE MAGE ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_BATTLEMAGE_IDLE, "assets/sprites/units/mc/battlemage/battle_mage_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_BATTLEMAGE_BATTLE_IDLE, "assets/sprites/units/mc/battlemage/battlemage_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // BARBARIAN ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_BARBARIAN_IDLE, "assets/sprites/units/mc/barbarian/barbarian_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_BARBARIAN_BATTLE_IDLE, "assets/sprites/units/mc/barbarian/barbarian_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_BARBARIAN_ATTACK, "assets/sprites/units/mc/barbarian/barbarian_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // BLADEDANCER ///////////////////////////////////////////////////////////////////

    //scene.load.image(IMAGE_BLADEDANCER, "assets/sprites/units/mc/bladedancer/bladedancer_2_400.webp");

    scene.load.spritesheet(IMAGE_BLADEDANCER_IDLE, "assets/sprites/units/mc/bladedancer/bladedancer_idle_cut_350.webp", {
        frameWidth: 350,
        frameHeight: 350,
    });

    // COMMADER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_COMMANDER_IDLE, "assets/sprites/units/mc/commander/commander_2_idle_cut_350.png", {
        frameWidth: 350,
        frameHeight: 350,
    });

    // HUNTER ///////////////////////////////////////////////////////////////////

    //scene.load.image(IMAGE_HUNTER, "assets/sprites/units/hunter.webp");

    //scene.load.image(IMAGE_HUNTER, "assets/sprites/units/mc/hunter/hunter_2_idle_300.webp");

    //TODO: webp
    scene.load.spritesheet(IMAGE_HUNTER_IDLE, "assets/sprites/units/mc/hunter/hunter_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_HUNTER_BATTLE_IDLE, "assets/sprites/units/mc/hunter/hunter_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_HUNTER_ATTACK, "assets/sprites/units/mc/hunter/hunter_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // JESTER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_JESTER_IDLE, "assets/sprites/units/mc/jester/jester_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_JESTER_BATTLE_IDLE, "assets/sprites/units/mc/jester/jester_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_JESTER_ATTACK, "assets/sprites/units/mc/jester/jester_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // NECROMANCER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_NECROMANCER_IDLE, "assets/sprites/units/mc/necromancer/necromancer_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_NECROMANCER_BATTLE_IDLE, "assets/sprites/units/mc/necromancer/necromancer_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_NECROMANCER_ATTACK, "assets/sprites/units/mc/necromancer/necromancer_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // PALADIN ///////////////////////////////////////////////////////////////////

    // TODO: webp
    scene.load.spritesheet(IMAGE_PALADIN_IDLE, "assets/sprites/units/mc/paladin/paladin_idle_cut_300.png", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        //
        scene.load.spritesheet(IMAGE_PALADIN_BATTLE_IDLE, "assets/sprites/units/mc/paladin/paladin_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_PALADIN_ATTACK, "assets/sprites/units/mc/paladin/paladin_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_PALADIN_SHIELD_SPELL, "assets/sprites/units/mc/paladin/paladin_magic_shield_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // PREDATOR /////////////////////////////////////////////////////////////////////

    // TODO: webp
    scene.load.spritesheet(IMAGE_PREDATOR_IDLE, "assets/sprites/units/mc/predator/predator_idle_cut_320.png", {
        frameWidth: 320,
        frameHeight: 320,
    });

    // RUNECASTER ///////////////////////////////////////////////////////////////////

    //TODO: webp
    scene.load.spritesheet(IMAGE_RUNECASTER_IDLE, "assets/sprites/units/mc/runecaster/runecaster_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // SAMURAI ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SAMURAI_IDLE, "assets/sprites/units/mc/samurai/samurai_idle_sprite_320.webp", {
        frameWidth: 320,
        frameHeight: 320,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_SAMURAI_BATTLE_IDLE, "assets/sprites/units/mc/samurai/samurai_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_SAMURAI_ATTACK, "assets/sprites/units/mc/samurai/samurai_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_SAMURAI_ATTACK_2, "assets/sprites/units/mc/samurai/samurai_attack_2_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    }

    // SORCERER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SORCERER_IDLE, "assets/sprites/units/mc/sorcerer/sorcerer_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    // WARLOCK_IDLE ///////////////////////////////////////////////////////////////////

    // TODO: webp
    scene.load.spritesheet(IMAGE_WARLOCK_IDLE, "assets/sprites/units/mc/warlock/warlock_idle_cut_300.png", {
        frameWidth: 300,
        frameHeight: 300,
    });

    //
}
