import { Scene } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_ALHEMIST,
    IMAGE_BARBARIAN,
    IMAGE_BARBARIAN_ATTACK,
    IMAGE_BARBARIAN_BATTLE_IDLE,
    IMAGE_BARBARIAN_IDLE,
    IMAGE_BATTLEMAGE,
    IMAGE_BEASTMASTER,
    IMAGE_BISHOP,
    IMAGE_BLACKKNIGHT,
    IMAGE_BLADEDANCER,
    IMAGE_COMMANDER,
    IMAGE_COMMANDER_BATTLE_IDLE,
    IMAGE_COMMANDER_IDLE,
    IMAGE_DOOMSAYER,
    IMAGE_DOOMSAYER_ATTACK,
    IMAGE_DOOMSAYER_BATTLE_IDLE,
    IMAGE_DOOMSAYER_IDLE,
    IMAGE_DOOMSAYER_SKILL,
    IMAGE_DRUID,
    IMAGE_DUELIST,
    IMAGE_EXORCIST,
    IMAGE_FORESTSPIRIT,
    IMAGE_GLADIATOR,
    IMAGE_HERALD,
    IMAGE_ILLUSIONIST,
    IMAGE_INQUISITOR,
    IMAGE_JESTER,
    IMAGE_KNIGHT,
    IMAGE_MAGIC_BARD,
    IMAGE_MINSTREL,
    IMAGE_MONK,
    IMAGE_ORACLE,
    IMAGE_PALADIN,
    IMAGE_PREDATOR,
    IMAGE_PREDATOR_IDLE,
    IMAGE_RUNECASTER,
    IMAGE_RUNECASTER_IDLE,
    IMAGE_SAMURAI,
    IMAGE_SAMURAI_ATTACK,
    IMAGE_SAMURAI_ATTACK_2,
    IMAGE_SAMURAI_BATTLE_IDLE,
    IMAGE_SAMURAI_IDLE,
    IMAGE_SHADOWMASTER,
    IMAGE_SHAMAN,
    IMAGE_SORCERER,
    IMAGE_WARLOCK,
    IMAGE_WITCH,
    IMAGE_ZEALOT,
} from "../imageLoadUtil";
import { COMPLETE, GAME_MODE } from "../../consts";
import { EHeroClass } from "../../../types";

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
//INQUISITOR
export const IMAGE_INQUISITOR_IDLE = "IMAGE_INQUISITOR_IDLE";
export const IMAGE_INQUISITOR_BATTLE_IDLE = "IMAGE_INQUISITOR_BATTLE_IDLE";
export const IMAGE_INQUISITOR_ATTACK = "IMAGE_INQUISITOR_ATTACK";
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
// ORACLE
export const IMAGE_ORACLE_IDLE = "IMAGE_ORACLE_IDLE";
export const IMAGE_ORACLE_BATTLE_IDLE = "IMAGE_ORACLE_BATTLE_IDLE";
export const IMAGE_ORACLE_ATTACK = "IMAGE_ORACLE_ATTACK";
export const IMAGE_ORACLE_SKILL_1 = "IMAGE_ORACLE_SKILL_1";
export const IMAGE_ORACLE_SKILL_2 = "IMAGE_ORACLE_SKILL_2";
// SHAMAN
export const IMAGE_SHAMAN_IDLE = "IMAGE_SHAMAN_IDLE";
export const IMAGE_SHAMAN_BATTLE_IDLE = "IMAGE_SHAMAN_BATTLE_IDLE";
export const IMAGE_SHAMAN_ATTACK = "IMAGE_SHAMAN_ATTACK";
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
    // WITH NO ANOMATIONS YET
    scene.load.image(IMAGE_ALHEMIST, "assets/sprites/units/alchemist.png");
    scene.load.image(IMAGE_BEASTMASTER, "assets/sprites/units/beastmaster.png");
    scene.load.image(IMAGE_DRUID, "assets/sprites/units/druid.png");
    scene.load.image(IMAGE_GLADIATOR, "assets/sprites/units/gladiator.png");
    scene.load.image(IMAGE_HERALD, "assets/sprites/units/herald.png");
    scene.load.image(IMAGE_JESTER, "assets/sprites/units/jester.png");
    scene.load.image(IMAGE_KNIGHT, "assets/sprites/units/knight.png");
    scene.load.image(IMAGE_MONK, "assets/sprites/units/monk.png");
    scene.load.image(IMAGE_PALADIN, "assets/sprites/units/paladin.png");
    scene.load.image(IMAGE_PREDATOR, "assets/sprites/units/predator.png");
    scene.load.image(IMAGE_SHADOWMASTER, "assets/sprites/units/shadowmaster.png");
    scene.load.image(IMAGE_SHAMAN, "assets/sprites/units/shaman2.png");
    scene.load.image(IMAGE_COMMANDER, "assets/sprites/units/commander.png");
    scene.load.image(IMAGE_FORESTSPIRIT, "assets/sprites/units/forest_spirit.png");
    scene.load.image(IMAGE_ORACLE, "assets/sprites/units/oracle.png");
    scene.load.image(IMAGE_SAMURAI, "assets/sprites/units/samurai.png");
    scene.load.image(IMAGE_WITCH, "assets/sprites/units/witch.png");
    scene.load.image(IMAGE_RUNECASTER, "assets/sprites/units/runecaster.png");
    scene.load.image(IMAGE_SORCERER, "assets/sprites/units/sorceress.png");
    scene.load.image(IMAGE_BLACKKNIGHT, "assets/sprites/units/black_knight.png");
    scene.load.image(IMAGE_DOOMSAYER, "assets/sprites/units/mc/doomsayer/doomsayer.webp");
    scene.load.image(IMAGE_BATTLEMAGE, "assets/sprites/units/battle_mage.png");
    scene.load.image(IMAGE_MINSTREL, "assets/sprites/units/minstrel.png");
    scene.load.image(IMAGE_BARBARIAN, "assets/sprites/units/barbarian.png");
    scene.load.image(IMAGE_WARLOCK, "assets/sprites/units/warlock.png");
    scene.load.image(IMAGE_ZEALOT, "assets/sprites/units/zealot.png");
    scene.load.image(IMAGE_ILLUSIONIST, "assets/sprites/units/magician.png");
    scene.load.image(IMAGE_EXORCIST, "assets/sprites/units/exorcist.png");
    scene.load.image(IMAGE_INQUISITOR, "assets/sprites/units/inquisitor.png");
    scene.load.image(IMAGE_DUELIST, "assets/sprites/units/duelist.png");
    scene.load.image(IMAGE_BISHOP, "assets/sprites/units/bishop.png");
    scene.load.image(IMAGE_MAGIC_BARD, "assets/sprites/units/magic_bard.png");
    //scene.load.image(IMAGE_FISHMAN, "assets/sprites/units/fishman1.png");

    //
    // ASSASSIN ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_ASSASSIN_IDLE, "assets/sprites/units/mc/assassin/assassin_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    if (GAME_MODE === "FULL") {
        scene.load.spritesheet(IMAGE_ASSASSIN_BATTLE_IDLE, "assets/sprites/units/mc/assassin/assassin_battle_idle_cut_400.webp", {
            frameWidth: 400,
            frameHeight: 400,
        });
        scene.load.spritesheet(IMAGE_ASSASSIN_ATTACK, "assets/sprites/units/mc/assassin/assassin_attack_cut_400.webp", {
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
    scene.load.spritesheet(IMAGE_COMMANDER_IDLE, "assets/sprites/units/mc/commander/commander_2_idle_cut_350.webp", {
        frameWidth: 350,
        frameHeight: 350,
    });

    // DOOMSAYER ///////////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_DOOMSAYER_IDLE, "assets/sprites/units/mc/doomsayer/doomsayer_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });
    scene.load.spritesheet(IMAGE_DOOMSAYER_BATTLE_IDLE, "assets/sprites/units/mc/doomsayer/doomsayer_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_DOOMSAYER_ATTACK, "assets/sprites/units/mc/doomsayer/doomsayer_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_DOOMSAYER_SKILL, "assets/sprites/units/mc/doomsayer/doomsayer_skill_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // HUNTER ///////////////////////////////////////////////////////////////////

    //scene.load.image(IMAGE_HUNTER, "assets/sprites/units/hunter.webp");

    //scene.load.image(IMAGE_HUNTER, "assets/sprites/units/mc/hunter/hunter_2_idle_300.webp");

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

    // ORACLE ///////////////////////////////////////////////////////////////////
    scene.load.spritesheet(IMAGE_ORACLE_IDLE, "assets/sprites/units/mc/oracle/oracle_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });
    scene.load.spritesheet(IMAGE_ORACLE_BATTLE_IDLE, "assets/sprites/units/mc/oracle/oracle_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_ORACLE_ATTACK, "assets/sprites/units/mc/oracle/oracle_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_ORACLE_SKILL_1, "assets/sprites/units/mc/oracle/oracle_skill_1_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
    scene.load.spritesheet(IMAGE_ORACLE_SKILL_2, "assets/sprites/units/mc/oracle/oracle_skill_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // PALADIN ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_PALADIN_IDLE, "assets/sprites/units/mc/paladin/paladin_idle_cut_300.webp", {
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

    scene.load.spritesheet(IMAGE_PREDATOR_IDLE, "assets/sprites/units/mc/predator/predator_idle_cut_320.webp", {
        frameWidth: 320,
        frameHeight: 320,
    });

    // RUNECASTER ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_RUNECASTER_IDLE, "assets/sprites/units/mc/runecaster/runecaster_battle_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // SAMURAI ///////////////////////////////////////////////////////////////////

    scene.load.spritesheet(IMAGE_SAMURAI_IDLE, "assets/sprites/units/mc/samurai/samurai_idle_cut_320.webp", {
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

    scene.load.spritesheet(IMAGE_WARLOCK_IDLE, "assets/sprites/units/mc/warlock/warlock_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    //
}

export function loadMcHeroIdleImages(scene: Scene, mcHeroClass: EHeroClass, loadedImages: Record<string, boolean>) {
    switch (mcHeroClass) {
        case EHeroClass.JESTER:
            {
                scene.load.spritesheet(IMAGE_JESTER_IDLE, "assets/sprites/units/mc/jester/jester_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }

            break;
        case EHeroClass.DUELIST:
            scene.load.image(IMAGE_DUELIST, "assets/sprites/units/duelist.png");
            break;
        case EHeroClass.MIMIC:
            scene.load.image(IMAGE_JESTER, "assets/sprites/units/jester.png");
            break;
        case EHeroClass.MINSTREL:
            scene.load.image(IMAGE_MINSTREL, "assets/sprites/units/minstrel.png");
            break;
        case EHeroClass.ORACLE:
            {
                scene.load.spritesheet(IMAGE_ORACLE_IDLE, "assets/sprites/units/mc/oracle/oracle_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.RUNECASTER:
            {
                scene.load.spritesheet(IMAGE_RUNECASTER_IDLE, "assets/sprites/units/mc/runecaster/runecaster_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.SHADOW_MASTER:
            scene.load.image(IMAGE_SHADOWMASTER, "assets/sprites/units/shadowmaster.png");
            break;
        case EHeroClass.FOREST_SPIRIT:
            scene.load.image(IMAGE_FORESTSPIRIT, "assets/sprites/units/forest_spirit.png");
            break;
        case EHeroClass.ALCHEMIST:
            scene.load.image(IMAGE_ALHEMIST, "assets/sprites/units/alchemist.png");
            break;
        case EHeroClass.ASSASSIN:
            {
                scene.load.spritesheet(IMAGE_ASSASSIN_IDLE, "assets/sprites/units/mc/assassin/assassin_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.BARBARIAN:
            {
                scene.load.spritesheet(IMAGE_BARBARIAN_IDLE, "assets/sprites/units/mc/barbarian/barbarian_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.BATTLE_MAGE:
            {
                scene.load.spritesheet(IMAGE_BATTLEMAGE_IDLE, "assets/sprites/units/mc/battlemage/battle_mage_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.BEAST_MASTER:
            scene.load.image(IMAGE_BEASTMASTER, "assets/sprites/units/beastmaster.png");
            break;
        case EHeroClass.BLACK_KNIGHT:
            scene.load.image(IMAGE_BLACKKNIGHT, "assets/sprites/units/black_knight.png");
            break;
        case EHeroClass.BLADEDANCER:
            {
                scene.load.spritesheet(IMAGE_BLADEDANCER_IDLE, "assets/sprites/units/mc/bladedancer/bladedancer_idle_cut_350.webp", {
                    frameWidth: 350,
                    frameHeight: 350,
                });
            }
            break;
        case EHeroClass.COMMANDER:
            {
                scene.load.spritesheet(IMAGE_COMMANDER_IDLE, "assets/sprites/units/mc/commander/commander_2_idle_cut_350.webp", {
                    frameWidth: 350,
                    frameHeight: 350,
                });
            }
            break;
        case EHeroClass.DOOMSAYER:
            {
                scene.load.spritesheet(IMAGE_DOOMSAYER_IDLE, "assets/sprites/units/mc/doomsayer/doomsayer_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.DRUID:
            scene.load.image(IMAGE_DRUID, "assets/sprites/units/druid.png");
            break;
        case EHeroClass.EXORCIST:
            scene.load.image(IMAGE_EXORCIST, "assets/sprites/units/exorcist.png");
            break;
        case EHeroClass.GLADIATOR:
            scene.load.image(IMAGE_GLADIATOR, "assets/sprites/units/gladiator.png");
            break;
        case EHeroClass.HERALD:
            scene.load.image(IMAGE_HERALD, "assets/sprites/units/herald.png");
            break;
        case EHeroClass.HUNTER:
            {
                scene.load.spritesheet(IMAGE_HUNTER_IDLE, "assets/sprites/units/mc/hunter/hunter_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.ILLUSIONIST:
            scene.load.image(IMAGE_ILLUSIONIST, "assets/sprites/units/magician.png");
            break;
        case EHeroClass.INQUISITOR:
            {
                scene.load.image(IMAGE_INQUISITOR, "assets/sprites/units/inquisitor.png");
                // WEBP
                scene.load.spritesheet(IMAGE_INQUISITOR_IDLE, "assets/sprites/units/mc/inquisitor/inquisitor_idle_2_cut_300.png", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.KNIGHT:
            scene.load.image(IMAGE_KNIGHT, "assets/sprites/units/knight.png");
            break;
        case EHeroClass.MONK:
            scene.load.image(IMAGE_MONK, "assets/sprites/units/monk.png");
            break;
        case EHeroClass.NECROMANCER:
            {
                scene.load.spritesheet(IMAGE_NECROMANCER_IDLE, "assets/sprites/units/mc/necromancer/necromancer_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.PALADIN:
            {
                scene.load.spritesheet(IMAGE_PALADIN_IDLE, "assets/sprites/units/mc/paladin/paladin_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.PREDATOR:
            {
                scene.load.spritesheet(IMAGE_PREDATOR_IDLE, "assets/sprites/units/mc/predator/predator_idle_cut_320.webp", {
                    frameWidth: 320,
                    frameHeight: 320,
                });
            }
            break;
        case EHeroClass.BISHOP:
            scene.load.image(IMAGE_BISHOP, "assets/sprites/units/bishop.png");
            break;
        case EHeroClass.SAMURAI:
            {
                scene.load.spritesheet(IMAGE_SAMURAI_IDLE, "assets/sprites/units/mc/samurai/samurai_idle_cut_320.webp", {
                    frameWidth: 320,
                    frameHeight: 320,
                });
            }
            break;
        case EHeroClass.SHAMAN:
            {
                scene.load.image(IMAGE_SHAMAN, "assets/sprites/units/shaman2.png");
                // WEBP
                scene.load.spritesheet(IMAGE_SHAMAN_IDLE, "assets/sprites/units/mc/shaman/shaman_idle_2_cut_300.png", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.SORCERER:
            {
                scene.load.spritesheet(IMAGE_SORCERER_IDLE, "assets/sprites/units/mc/sorcerer/sorcerer_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.WARLOCK:
            {
                scene.load.spritesheet(IMAGE_WARLOCK_IDLE, "assets/sprites/units/mc/warlock/warlock_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.WITCH:
            scene.load.image(IMAGE_WITCH, "assets/sprites/units/witch.png");
            break;
        case EHeroClass.ZEALOT:
            scene.load.image(IMAGE_ZEALOT, "assets/sprites/units/zealot.png");
    }
    //
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        scene.load.start();
    });
}

export function loadMcHeroBattleImages(scene: Scene, mcHeroClass: EHeroClass) {
    switch (mcHeroClass) {
        case EHeroClass.ASSASSIN:
            {
                scene.load.spritesheet(IMAGE_ASSASSIN_BATTLE_IDLE, "assets/sprites/units/mc/assassin/assassin_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                scene.load.spritesheet(IMAGE_ASSASSIN_ATTACK, "assets/sprites/units/mc/assassin/assassin_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.ALCHEMIST:
            {
                scene.load.image(IMAGE_ALHEMIST, "assets/sprites/units/alchemist.png");
            }
            break;
        case EHeroClass.BATTLE_MAGE:
            {
                scene.load.spritesheet(IMAGE_BATTLEMAGE_BATTLE_IDLE, "assets/sprites/units/mc/battlemage/battlemage_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.BARBARIAN:
            {
                scene.load.spritesheet(IMAGE_BARBARIAN_BATTLE_IDLE, "assets/sprites/units/mc/barbarian/barbarian_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });

                scene.load.spritesheet(IMAGE_BARBARIAN_ATTACK, "assets/sprites/units/mc/barbarian/barbarian_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.BEAST_MASTER:
            {
                scene.load.image(IMAGE_BEASTMASTER, "assets/sprites/units/beastmaster.png");
            }
            break;
        case EHeroClass.BLACK_KNIGHT:
            {
                scene.load.image(IMAGE_BLACKKNIGHT, "assets/sprites/units/black_knight.png");
            }
            break;
        case EHeroClass.BLADEDANCER:
            {
                scene.load.spritesheet(IMAGE_BLADEDANCER_IDLE, "assets/sprites/units/mc/bladedancer/bladedancer_idle_cut_350.webp", {
                    frameWidth: 350,
                    frameHeight: 350,
                });
            }
            break;
        case EHeroClass.BISHOP:
            {
                scene.load.image(IMAGE_BISHOP, "assets/sprites/units/bishop.png");
            }
            break;
        case EHeroClass.COMMANDER:
            {
                scene.load.spritesheet(IMAGE_COMMANDER_IDLE, "assets/sprites/units/mc/commander/commander_2_idle_cut_350.webp", {
                    frameWidth: 350,
                    frameHeight: 350,
                });
            }
            break;
        case EHeroClass.DOOMSAYER:
            {
                //
                scene.load.spritesheet(IMAGE_DOOMSAYER_BATTLE_IDLE, "assets/sprites/units/mc/doomsayer/doomsayer_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //
                scene.load.spritesheet(IMAGE_DOOMSAYER_ATTACK, "assets/sprites/units/mc/doomsayer/doomsayer_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //
                scene.load.spritesheet(IMAGE_DOOMSAYER_SKILL, "assets/sprites/units/mc/doomsayer/doomsayer_skill_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.DRUID:
            {
                scene.load.image(IMAGE_DRUID, "assets/sprites/units/druid.png");
            }
            break;
        case EHeroClass.DUELIST:
            {
                scene.load.image(IMAGE_DUELIST, "assets/sprites/units/duelist.png");
            }
            break;
        case EHeroClass.EXORCIST:
            {
                scene.load.image(IMAGE_EXORCIST, "assets/sprites/units/exorcist.png");
            }
            break;
        case EHeroClass.FOREST_SPIRIT:
            {
                scene.load.image(IMAGE_FORESTSPIRIT, "assets/sprites/units/forest_spirit.png");
            }
            break;
        case EHeroClass.GLADIATOR:
            {
                scene.load.image(IMAGE_GLADIATOR, "assets/sprites/units/gladiator.png");
            }
            break;
        case EHeroClass.HERALD:
            {
                scene.load.image(IMAGE_HERALD, "assets/sprites/units/herald.png");
            }
            break;
        case EHeroClass.HUNTER:
            {
                scene.load.spritesheet(IMAGE_HUNTER_BATTLE_IDLE, "assets/sprites/units/mc/hunter/hunter_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });

                scene.load.spritesheet(IMAGE_HUNTER_ATTACK, "assets/sprites/units/mc/hunter/hunter_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.ILLUSIONIST:
            {
                scene.load.image(IMAGE_ILLUSIONIST, "assets/sprites/units/magician.png");
            }
            break;
        case EHeroClass.INQUISITOR:
            {
                //scene.load.image(IMAGE_INQUISITOR, "assets/sprites/units/inquisitor.png");
                //WEBP
                scene.load.spritesheet(IMAGE_INQUISITOR_BATTLE_IDLE, "assets/sprites/units/mc/inquisitor/inquisitor_battle_idle_cut_400.png", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //WEBP
                scene.load.spritesheet(IMAGE_INQUISITOR_ATTACK, "assets/sprites/units/mc/inquisitor/inquisitor_attack_cut_400.png", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.JESTER:
            {
                scene.load.spritesheet(IMAGE_JESTER_BATTLE_IDLE, "assets/sprites/units/mc/jester/jester_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });

                scene.load.spritesheet(IMAGE_JESTER_ATTACK, "assets/sprites/units/mc/jester/jester_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.KNIGHT:
            {
                scene.load.image(IMAGE_KNIGHT, "assets/sprites/units/knight.png");
            }
            break;
        case EHeroClass.MIMIC:
            {
                scene.load.image(IMAGE_JESTER, "assets/sprites/units/jester.png");
            }
            break;
        case EHeroClass.MINSTREL:
            {
                scene.load.image(IMAGE_MINSTREL, "assets/sprites/units/minstrel.png");
            }
            break;
        case EHeroClass.MONK:
            {
                scene.load.image(IMAGE_MONK, "assets/sprites/units/monk.png");
            }
            break;
        case EHeroClass.NECROMANCER:
            {
                scene.load.spritesheet(IMAGE_NECROMANCER_BATTLE_IDLE, "assets/sprites/units/mc/necromancer/necromancer_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });

                scene.load.spritesheet(IMAGE_NECROMANCER_ATTACK, "assets/sprites/units/mc/necromancer/necromancer_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.ORACLE:
            {
                //
                scene.load.spritesheet(IMAGE_ORACLE_BATTLE_IDLE, "assets/sprites/units/mc/oracle/oracle_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //
                scene.load.spritesheet(IMAGE_ORACLE_ATTACK, "assets/sprites/units/mc/oracle/oracle_attack_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //
                scene.load.spritesheet(IMAGE_ORACLE_SKILL_1, "assets/sprites/units/mc/oracle/oracle_skill_1_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
                //
                scene.load.spritesheet(IMAGE_ORACLE_SKILL_2, "assets/sprites/units/mc/oracle/oracle_skill_2_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.PALADIN:
            {
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
            break;
        case EHeroClass.PREDATOR:
            {
                scene.load.spritesheet(IMAGE_PREDATOR_IDLE, "assets/sprites/units/mc/predator/predator_idle_cut_320.webp", {
                    frameWidth: 320,
                    frameHeight: 320,
                });
            }
            break;
        case EHeroClass.RUNECASTER:
            {
                scene.load.spritesheet(IMAGE_RUNECASTER_IDLE, "assets/sprites/units/mc/runecaster/runecaster_battle_idle_cut_400.webp", {
                    frameWidth: 400,
                    frameHeight: 400,
                });
            }
            break;
        case EHeroClass.SAMURAI:
            {
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
            break;
        case EHeroClass.SHADOW_MASTER:
            {
                scene.load.image(IMAGE_SHADOWMASTER, "assets/sprites/units/shadowmaster.png");
            }
            break;
        case EHeroClass.SHAMAN:
            {
                scene.load.image(IMAGE_SHAMAN, "assets/sprites/units/shaman2.png");
            }
            break;
        case EHeroClass.SORCERER:
            {
                scene.load.spritesheet(IMAGE_SORCERER_IDLE, "assets/sprites/units/mc/sorcerer/sorcerer_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.WARLOCK:
            {
                scene.load.spritesheet(IMAGE_WARLOCK_IDLE, "assets/sprites/units/mc/warlock/warlock_idle_cut_300.webp", {
                    frameWidth: 300,
                    frameHeight: 300,
                });
            }
            break;
        case EHeroClass.WITCH:
            {
                scene.load.image(IMAGE_WITCH, "assets/sprites/units/witch.png");
            }
            break;
        case EHeroClass.ZEALOT:
            {
                scene.load.image(IMAGE_ZEALOT, "assets/sprites/units/zealot.png");
            }
            break;
    }
    //
    scene.load.start();
    return new Promise((resolve) => {
        scene.load.once(COMPLETE, resolve);
        //scene.load.start();
    });
}
