import { Scene } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_BOSS_MINOTAUR,
    IMAGE_BOSS_MINOTAUR_ATTACK,
    IMAGE_BOSS_MINOTAUR_HURT,
    IMAGE_BOSS_MINOTAUR_IDLE,
    IMAGE_BOSS_MINOTAUR_SPELL,
    IMAGE_BOSS_MINOTAUR_STOMP,
} from "../imageLoadUtil";

//

const path = "assets/sprites/units/mobs/";

export const IMAGE_SKELETON_1 = "IMAGE_SKELETON_1";
export const IMAGE_GOBLIN_1 = "IMAGE_GOBLIN_1";
export const IMAGE_GOBLIN_2 = "IMAGE_GOBLIN_2";
export const IMAGE_PEASANT_1 = "IMAGE_PEASANT_1";
export const IMAGE_WOLF_1 = "IMAGE_WOLF_1";
export const IMAGE_WOLF_2 = "IMAGE_WOLF_2";

export const IMAGE_SKELETON_BATTLE_IDLE = "IMAGE_SKELETON_BATTLE_IDLE";
export const IMAGE_SKELETON_ATTACK = "IMAGE_SKELETON_ATTACK";

export const IMAGE_GOBLIN_1_BATTLE_IDLE = "IMAGE_GOBLIN_1_BATTLE_IDLE";
export const IMAGE_GOBLIN_1_ATTACK = "IMAGE_GOBLIN_1_ATTACK";

export const IMAGE_GOBLIN_2_BATTLE_IDLE = "IMAGE_GOBLIN_2_BATTLE_IDLE";
export const IMAGE_GOBLIN_2_ATTACK = "IMAGE_GOBLIN_2_ATTACK";

export const IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE = "IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE";
export const IMAGE_GOBLIN_SHAMAN_ATTACK = "IMAGE_GOBLIN_SHAMAN_ATTACK";
export const IMAGE_GOBLIN_SHAMAN_SPELL = "IMAGE_GOBLIN_SHAMAN_SPELL";
export const IMAGE_GOBLIN_SHAMAN_DEFEATED = "IMAGE_GOBLIN_SHAMAN_DEFEATED";

export const IMAGE_PEASANT_BATTLE_IDLE = "IMAGE_PEASANT_BATTLE_IDLE";
export const IMAGE_PEASANT_ATTACK = "IMAGE_PEASANT_ATTACK";

export const IMAGE_FIREFLY_BATTLE_IDLE = "IMAGE_FIREFLY_BATTLE_IDLE";
export const IMAGE_FIREFLY_DEFEATED = "IMAGE_FIREFLY_DEFEATED";
export const IMAGE_FIREFLY_ATTACK = "IMAGE_FIREFLY_ATTACK";

export const IMAGE_SUMMONKNIHGT_BATTLE_IDLE = "IMAGE_SUMMONKNIHGT_BATTLE_IDLE";
export const IMAGE_SUMMONKNIHGT_ATTACK = "IMAGE_SUMMONKNIHGT_ATTACK";

export const IMAGE_PIRATE_1_BATTLE_IDLE = "IMAGE_PIRATE_1_BATTLE_IDLE";
export const IMAGE_PIRATE_1_ATTACK = "IMAGE_PIRATE_1_ATTACK";
export const IMAGE_PIRATE_2_BATTLE_IDLE = "IMAGE_PIRATE_2_BATTLE_IDLE";
export const IMAGE_PIRATE_2_ATTACK = "IMAGE_PIRATE_2_ATTACK";

//

export function loadImagesMobs(scene: Scene) {
    scene.load.image(IMAGE_SKELETON_1, "assets/sprites/units/mobs/skeleton_1/skeleton_1.webp");
    scene.load.image(IMAGE_GOBLIN_1, "assets/sprites/units/mobs/goblin_1/goblin_1.webp");
    scene.load.image(IMAGE_GOBLIN_2, "assets/sprites/units/mobs/goblin_2/goblin_2.webp");
    scene.load.image(IMAGE_PEASANT_1, "assets/sprites/units/mobs/peasant/peasant.webp");

    scene.load.image(IMAGE_WOLF_1, "assets/sprites/units/mobs/wolfs/wolf_1.png");
    scene.load.image(IMAGE_WOLF_2, "assets/sprites/units/mobs/wolfs/wolf_2.png");

    // SKELETON_1 //////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SKELETON_BATTLE_IDLE, "assets/sprites/units/mobs/skeleton_1/skeleton_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_SKELETON_ATTACK, "assets/sprites/units/mobs/skeleton_1/skeleton_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_1 //////////////////////////////////////////////////////////////
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_1_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_1/goblin_1_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_1_ATTACK, "assets/sprites/units/mobs/goblin_1/goblin_1_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_2 //////////////////////////////////////////////////////////////
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_2_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_2/goblin_2_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_GOBLIN_2_ATTACK, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_SHAMAN //////////////////////////////////////////////////////////////
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_ATTACK, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_SPELL, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_spell_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_DEFEATED, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PEASANT //////////////////////////////////////////////////////////////
    //WEBP
    scene.load.spritesheet(IMAGE_PEASANT_BATTLE_IDLE, "assets/sprites/units/mobs/peasant/peasant_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_PEASANT_ATTACK, "assets/sprites/units/mobs/peasant/peasant_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // FIREFLY

    scene.load.spritesheet(IMAGE_FIREFLY_BATTLE_IDLE, path + "firefly/firefly_battle_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_FIREFLY_DEFEATED, path + "firefly/firefly_defeated_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });
    scene.load.spritesheet(IMAGE_FIREFLY_ATTACK, path + "firefly/firefly_attack_1_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    // SUMMON KNIHGT

    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_BATTLE_IDLE, path + "summon_knight/knight_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_ATTACK, path + "summon_knight/knight_1_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PIRATES

    // PIRATE 1
    //
    //WEBP
    scene.load.spritesheet(IMAGE_PIRATE_1_BATTLE_IDLE, path + "pirates/pirate_1/pirate_1_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_PIRATE_1_ATTACK, path + "pirates/pirate_1/pirate_1_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    // PIRATE 2
    //
    //WEBP
    scene.load.spritesheet(IMAGE_PIRATE_2_BATTLE_IDLE, path + "pirates/pirate_2/pirate_2_battle_idle_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //WEBP
    scene.load.spritesheet(IMAGE_PIRATE_2_ATTACK, path + "pirates/pirate_2/pirate_2_attack_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // BOSSES

    scene.load.image(IMAGE_BOSS_MINOTAUR, "assets/sprites/units/bosses/minotaur.webp");

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_IDLE, "assets/sprites/units/bosses/boss_minotuar_idle_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_ATTACK, "assets/sprites/units/bosses/boss_minotuar_attack_cut_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_STOMP, "assets/sprites/units/bosses/boss_minotuar_jump_cut_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_SPELL, "assets/sprites/units/bosses/boss_minotuar_spell_cut_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_HURT, "assets/sprites/units/bosses/boss_minotuar_hurt_cut_500.png", {
        frameWidth: 500,
        frameHeight: 500,
    });
}
