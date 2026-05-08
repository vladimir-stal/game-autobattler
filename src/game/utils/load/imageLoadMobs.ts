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
import { COMPLETE } from "../../consts";

//

const path = "assets/sprites/units/mobs/";

export const IMAGE_SKELETON_1 = "IMAGE_SKELETON_1";
export const IMAGE_SKELETON_MAGE = "IMAGE_SKELETON_MAGE";
export const IMAGE_GOBLIN_1 = "IMAGE_GOBLIN_1";
export const IMAGE_GOBLIN_2 = "IMAGE_GOBLIN_2";
export const IMAGE_PEASANT_1 = "IMAGE_PEASANT_1";
export const IMAGE_WOLF_1 = "IMAGE_WOLF_1";
export const IMAGE_WOLF_2 = "IMAGE_WOLF_2";

export const IMAGE_SKELETON_BATTLE_IDLE = "IMAGE_SKELETON_BATTLE_IDLE";
export const IMAGE_SKELETON_ATTACK = "IMAGE_SKELETON_ATTACK";

export const IMAGE_SKELETON_MAGE_BATTLE_IDLE = "IMAGE_SKELETON_MAGE_BATTLE_IDLE";
export const IMAGE_SKELETON_MAGE_ATTACK = "IMAGE_SKELETON_MAGE_ATTACK";

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

export const IMAGE_SUMMON_SHIELD_KNIHGT_BATTLE_IDLE = "IMAGE_SUMMON_SHIELD_KNIHGT_BATTLE_IDLE";
export const IMAGE_SUMMON_SHIELD_KNIHGT_BUFF = "IMAGE_SUMMON_SHIELD_KNIHGT_BUFF";
export const IMAGE_SUMMON_SHIELD_KNIHGT_HURT = "IMAGE_SUMMON_SHIELD_KNIHGT_HURT";

export const IMAGE_PIRATE_1_BATTLE_IDLE = "IMAGE_PIRATE_1_BATTLE_IDLE";
export const IMAGE_PIRATE_1_ATTACK = "IMAGE_PIRATE_1_ATTACK";
export const IMAGE_PIRATE_2_BATTLE_IDLE = "IMAGE_PIRATE_2_BATTLE_IDLE";
export const IMAGE_PIRATE_2_ATTACK = "IMAGE_PIRATE_2_ATTACK";

export const IMAGE_WOLF_1_BATTLE_IDLE = "IMAGE_WOLF_1_BATTLE_IDLE";
export const IMAGE_WOLF_1_ATTACK = "IMAGE_WOLF_1_ATTACK";
export const IMAGE_WOLF_1_ATTACK_2 = "IMAGE_WOLF_1_ATTACK_2";

export const IMAGE_WOLF_2_BATTLE_IDLE = "IMAGE_WOLF_2_BATTLE_IDLE";
export const IMAGE_WOLF_2_ATTACK = "IMAGE_WOLF_2_ATTACK";
export const IMAGE_WOLF_2_ATTACK_2 = "IMAGE_WOLF_2_ATTACK_2";
export const IMAGE_WOLF_3_BATTLE_IDLE = "IMAGE_WOLF_3_BATTLE_IDLE";
export const IMAGE_WOLF_3_ATTACK = "IMAGE_WOLF_3_ATTACK";

//

export function loadImagesMobs(scene: Scene) {
    scene.load.image(IMAGE_SKELETON_1, "assets/sprites/units/mobs/skeleton_1/skeleton_1.webp");
    scene.load.image(IMAGE_GOBLIN_1, "assets/sprites/units/mobs/goblin_1/goblin_1.webp");
    scene.load.image(IMAGE_GOBLIN_2, "assets/sprites/units/mobs/goblin_2/goblin_2.webp");
    scene.load.image(IMAGE_PEASANT_1, "assets/sprites/units/mobs/peasant/peasant.webp");

    scene.load.image(IMAGE_WOLF_1, "assets/sprites/units/mobs/wolves/wolf_1.webp");
    scene.load.image(IMAGE_WOLF_2, "assets/sprites/units/mobs/wolves/wolf_2.webp");

    // SKELETON_1 //////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SKELETON_BATTLE_IDLE, "assets/sprites/units/mobs/skeleton_1/skeleton_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_SKELETON_ATTACK, "assets/sprites/units/mobs/skeleton_1/skeleton_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_1 //////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_GOBLIN_1_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_1/goblin_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_GOBLIN_1_ATTACK, "assets/sprites/units/mobs/goblin_1/goblin_1_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_2 //////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_GOBLIN_2_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_2/goblin_2_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_GOBLIN_2_ATTACK, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // GOBLIN_SHAMAN //////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_ATTACK, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_SPELL, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_spell_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_DEFEATED, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PEASANT //////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_PEASANT_BATTLE_IDLE, "assets/sprites/units/mobs/peasant/peasant_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_PEASANT_ATTACK, "assets/sprites/units/mobs/peasant/peasant_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // SUMMONS
    //
    //

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

    // SUMMON KNIGHT

    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_BATTLE_IDLE, path + "summon_knight/knight_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_ATTACK, path + "summon_knight/knight_1_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // SUMMON SHIELD KNIHGT
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_BATTLE_IDLE, path + "summon_shield_knight/spirit_warrior_shield_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_BUFF, path + "summon_shield_knight/spirit_warrior_shield_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_HURT, path + "summon_shield_knight/spirit_warrior_shield_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PIRATES

    // PIRATE 1
    //
    scene.load.spritesheet(IMAGE_PIRATE_1_BATTLE_IDLE, path + "pirates/pirate_1/pirate_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_PIRATE_1_ATTACK, path + "pirates/pirate_1/pirate_1_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    // PIRATE 2
    //
    scene.load.spritesheet(IMAGE_PIRATE_2_BATTLE_IDLE, path + "pirates/pirate_2/pirate_2_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_PIRATE_2_ATTACK, path + "pirates/pirate_2/pirate_2_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // WOLVES

    // WOLF 1
    //
    scene.load.spritesheet(IMAGE_WOLF_1_BATTLE_IDLE, path + "wolves/wolf_1/wolf_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_WOLF_1_ATTACK, path + "wolves/wolf_1/wolf_1_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_WOLF_1_ATTACK_2, path + "wolves/wolf_1/wolf_1_attack_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // WOLF 2
    //
    scene.load.spritesheet(IMAGE_WOLF_2_BATTLE_IDLE, path + "wolves/wolf_2/wolf_2_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_WOLF_2_ATTACK, path + "wolves/wolf_2/wolf_2_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_WOLF_2_ATTACK_2, path + "wolves/wolf_2/wolf_2_attack_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // BOSSES

    scene.load.image(IMAGE_BOSS_MINOTAUR, "assets/sprites/units/bosses/minotaur.webp");

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_IDLE, "assets/sprites/units/bosses/boss_minotuar_idle_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_ATTACK, "assets/sprites/units/bosses/boss_minotuar_attack_cut_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_STOMP, "assets/sprites/units/bosses/boss_minotuar_jump_cut_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_SPELL, "assets/sprites/units/bosses/boss_minotuar_spell_cut_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });

    scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_HURT, "assets/sprites/units/bosses/boss_minotuar_hurt_cut_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });
}

//
//
// SUMMONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//

// SUMMON KNIHGT
// IDLE
export async function loadSummonWarriorIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_BATTLE_IDLE, path + "summon_knight/knight_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadSummonWarriorImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_BATTLE_IDLE, path + "summon_knight/knight_1_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    scene.load.spritesheet(IMAGE_SUMMONKNIHGT_ATTACK, path + "summon_knight/knight_1_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// SUMMON SHIELD KNIHGT
// IDLE
export async function loadSummonShieldWarriorIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_BATTLE_IDLE, path + "summon_shield_knight/spirit_warrior_shield_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadSummonShieldWarriorImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_BATTLE_IDLE, path + "summon_shield_knight/spirit_warrior_shield_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_BUFF, path + "summon_shield_knight/spirit_warrior_shield_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    scene.load.spritesheet(IMAGE_SUMMON_SHIELD_KNIHGT_HURT, path + "summon_shield_knight/spirit_warrior_shield_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// SUMMON FIREFLY
// IDLE
export async function loadSummonFireflyIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    scene.load.spritesheet(IMAGE_FIREFLY_BATTLE_IDLE, path + "firefly/firefly_battle_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadSummonFireflyImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
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
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

//
//
// MOBS ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//

// SKELETON
// IDLE
export async function loadSkeletonIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    const loadRequired = checkLoadRequired(IMAGE_SKELETON_1, loadedImages);
    loadRequired && scene.load.image(IMAGE_SKELETON_1, "assets/sprites/units/mobs/skeletons/skeleton_1/skeleton_1.webp");
    //
    if (!loadRequired) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadSkeletonBattleImages(scene: Scene, loadedImages: Record<string, boolean>): Promise<boolean> {
    const loadRequired1 = checkLoadRequired(IMAGE_SKELETON_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_SKELETON_BATTLE_IDLE, "assets/sprites/units/mobs/skeletons/skeleton_1/skeleton_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired2 = checkLoadRequired(IMAGE_SKELETON_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_SKELETON_ATTACK, "assets/sprites/units/mobs/skeletons/skeleton_1/skeleton_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return false;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, () => resolve(true));
        scene.load.start();
    });
}

// SKELETON MAGE
// IDLE
export async function loadSkeletonMageIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    const loadRequired = checkLoadRequired(IMAGE_SKELETON_MAGE, loadedImages);
    loadRequired && scene.load.image(IMAGE_SKELETON_MAGE, "assets/sprites/units/mobs/skeletons/skeleton_mage/skeleton_mage_idle.png");
    //
    if (!loadRequired) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadSkeletonMageBattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    const loadRequired1 = checkLoadRequired(IMAGE_SKELETON_MAGE_BATTLE_IDLE, loadedImages);
    //WEBP
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_SKELETON_MAGE_BATTLE_IDLE, "assets/sprites/units/mobs/skeletons/skeleton_mage/skeleton_mage_idle_cut_400.png", {
            frameWidth: 400,
            frameHeight: 400,
        });

    const loadRequired2 = checkLoadRequired(IMAGE_SKELETON_MAGE_ATTACK, loadedImages);
    //WEBP
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_SKELETON_MAGE_ATTACK, "assets/sprites/units/mobs/skeletons/skeleton_mage/skeleton_mage_attack_cut_400.png", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return false;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, () => resolve(true));
        scene.load.start();
    });
}

// GOBLIN
// IDLE
export async function loadGoblinIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    const loadRequired = checkLoadRequired(IMAGE_GOBLIN_1, loadedImages);
    loadRequired && scene.load.image(IMAGE_GOBLIN_1, "assets/sprites/units/mobs/goblin_1/goblin_1.webp");
    //
    if (!loadRequired) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
//BATTLE
export async function loadGoblinBattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_GOBLIN_1_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_GOBLIN_1_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_1/goblin_1_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired2 = checkLoadRequired(IMAGE_GOBLIN_1_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_GOBLIN_1_ATTACK, "assets/sprites/units/mobs/goblin_1/goblin_1_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return false;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, () => resolve(true));
        scene.load.start();
    });
}

// GOBLIN MAGE
// IDLE
export async function loadGoblinMageIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired = checkLoadRequired(IMAGE_GOBLIN_2, loadedImages);
    loadRequired && scene.load.image(IMAGE_GOBLIN_2, "assets/sprites/units/mobs/goblin_2/goblin_2.webp");
    //
    if (!loadRequired) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadGoblinMageBattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_GOBLIN_2_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_GOBLIN_2_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_2/goblin_2_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired2 = checkLoadRequired(IMAGE_GOBLIN_2_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_GOBLIN_2_ATTACK, "assets/sprites/units/mobs/goblin_2/goblin_2_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// GOBLIN SHAMAN
export async function loadGoblinShamanBattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_BATTLE_IDLE, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired2 = checkLoadRequired(IMAGE_GOBLIN_SHAMAN_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_ATTACK, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired3 = checkLoadRequired(IMAGE_GOBLIN_SHAMAN_SPELL, loadedImages);
    loadRequired3 &&
        scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_SPELL, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_spell_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    const loadRequired4 = checkLoadRequired(IMAGE_GOBLIN_SHAMAN_DEFEATED, loadedImages);
    loadRequired4 &&
        scene.load.spritesheet(IMAGE_GOBLIN_SHAMAN_DEFEATED, "assets/sprites/units/mobs/goblin_shaman/goblin_shaman_defeated_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2 || loadRequired3 || loadRequired4)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// PEASANT
// IDLE
export async function loadPeasantIdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    const loadRequired1 = checkLoadRequired(IMAGE_PEASANT_1, loadedImages);
    loadRequired1 && scene.load.image(IMAGE_PEASANT_1, "assets/sprites/units/mobs/peasant/peasant.webp");
    //
    if (!loadRequired1) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadPeasantBattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_PEASANT_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_PEASANT_BATTLE_IDLE, "assets/sprites/units/mobs/peasant/peasant_battle_idle_cut_350.png", {
            frameWidth: 350,
            frameHeight: 350,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_PEASANT_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_PEASANT_ATTACK, "assets/sprites/units/mobs/peasant/peasant_attack_cut_350.png", {
            frameWidth: 350,
            frameHeight: 350,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// PIRATE 1
// IDLE
export async function loadPirate1IdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_PIRATE_1_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_PIRATE_1_BATTLE_IDLE, path + "pirates/pirate_1/pirate_1_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!loadRequired1) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadPirate1BattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_PIRATE_1_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_PIRATE_1_BATTLE_IDLE, path + "pirates/pirate_1/pirate_1_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_PIRATE_1_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_PIRATE_1_ATTACK, path + "pirates/pirate_1/pirate_1_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// PIRATE 2
// IDLE
export async function loadPirate2IdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_PIRATE_2_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_PIRATE_2_BATTLE_IDLE, path + "pirates/pirate_2/pirate_2_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!loadRequired1) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadPirate2BattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_PIRATE_2_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_PIRATE_2_BATTLE_IDLE, path + "pirates/pirate_2/pirate_2_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_PIRATE_2_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_PIRATE_2_ATTACK, path + "pirates/pirate_2/pirate_2_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// WOLF 1
// IDLE
export async function loadWolf1IdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_WOLF_1_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_WOLF_1_BATTLE_IDLE, path + "wolves/wolf_1/wolf_1_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!loadRequired1) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
//BATTLE
export async function loadWolf1BattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_WOLF_1_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_WOLF_1_BATTLE_IDLE, path + "wolves/wolf_1/wolf_1_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_WOLF_1_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_WOLF_1_ATTACK, path + "wolves/wolf_1/wolf_1_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired3 = checkLoadRequired(IMAGE_WOLF_1_ATTACK_2, loadedImages);
    loadRequired3 &&
        scene.load.spritesheet(IMAGE_WOLF_1_ATTACK_2, path + "wolves/wolf_1/wolf_1_attack_2_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2 || loadRequired3)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// WOLF 2
// IDLE
export async function loadWolf2IdleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_WOLF_2_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_WOLF_2_BATTLE_IDLE, path + "wolves/wolf_2/wolf_2_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!loadRequired1) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}
// BATTLE
export async function loadWolf2BattleImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_WOLF_2_BATTLE_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_WOLF_2_BATTLE_IDLE, path + "wolves/wolf_2/wolf_2_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_WOLF_2_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_WOLF_2_ATTACK, path + "wolves/wolf_2/wolf_2_attack_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    const loadRequired3 = checkLoadRequired(IMAGE_WOLF_2_ATTACK_2, loadedImages);
    loadRequired3 &&
        scene.load.spritesheet(IMAGE_WOLF_2_ATTACK_2, path + "wolves/wolf_2/wolf_2_attack_2_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
    //
    if (!(loadRequired1 || loadRequired2 || loadRequired3)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

// BOSS MINOTAUR
export async function loadBossMinotaurImages(scene: Scene, loadedImages: Record<string, boolean>) {
    //
    const loadRequired1 = checkLoadRequired(IMAGE_BOSS_MINOTAUR_IDLE, loadedImages);
    loadRequired1 &&
        scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_IDLE, "assets/sprites/units/bosses/boss_minotuar_idle_500.webp", {
            frameWidth: 500,
            frameHeight: 500,
        });
    //
    const loadRequired2 = checkLoadRequired(IMAGE_BOSS_MINOTAUR_ATTACK, loadedImages);
    loadRequired2 &&
        scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_ATTACK, "assets/sprites/units/bosses/boss_minotuar_attack_cut_500.webp", {
            frameWidth: 500,
            frameHeight: 500,
        });
    //
    const loadRequired3 = checkLoadRequired(IMAGE_BOSS_MINOTAUR_STOMP, loadedImages);
    loadRequired3 &&
        scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_STOMP, "assets/sprites/units/bosses/boss_minotuar_jump_cut_500.webp", {
            frameWidth: 500,
            frameHeight: 500,
        });
    //
    const loadRequired4 = checkLoadRequired(IMAGE_BOSS_MINOTAUR_SPELL, loadedImages);
    loadRequired4 &&
        scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_SPELL, "assets/sprites/units/bosses/boss_minotuar_spell_cut_500.webp", {
            frameWidth: 500,
            frameHeight: 500,
        });
    //
    const loadRequired5 = checkLoadRequired(IMAGE_BOSS_MINOTAUR_HURT, loadedImages);
    loadRequired5 &&
        scene.load.spritesheet(IMAGE_BOSS_MINOTAUR_HURT, "assets/sprites/units/bosses/boss_minotuar_hurt_cut_500.webp", {
            frameWidth: 500,
            frameHeight: 500,
        });
    //
    if (!(loadRequired1 || loadRequired2 || loadRequired3 || loadRequired4 || loadRequired5)) {
        return;
    }
    return new Promise((resolve) => {
        scene.load.on(COMPLETE, resolve);
        scene.load.start();
    });
}

const checkLoadRequired = (imageId: string, loadedImages: Record<string, boolean>): boolean => {
    if (loadedImages[imageId]) {
        return false;
    } else {
        loadedImages[imageId] = true;
        return true;
    }
};
