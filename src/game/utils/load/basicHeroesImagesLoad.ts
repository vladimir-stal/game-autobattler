import { Scene } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import {
    IMAGE_BARD_ATTACK,
    IMAGE_BARD_BUFF,
    IMAGE_BARD_DEFEATED,
    IMAGE_BARD_HURT,
    IMAGE_BARD_IDLE,
    IMAGE_BARD_IDLE_BATTLE,
    IMAGE_DARK_ATTACK,
    IMAGE_DARK_DEFEATED,
    IMAGE_DARK_HURT,
    IMAGE_DARK_IDLE,
    IMAGE_DARK_IDLE_BATTLE,
    IMAGE_DARK_SPELL,
    IMAGE_MAGIC_ATTACK,
    IMAGE_MAGIC_DEFEATED,
    IMAGE_MAGIC_HURT,
    IMAGE_MAGIC_IDLE,
    IMAGE_MAGIC_IDLE_BATTLE_0,
    IMAGE_MAGIC_SPELL,
    IMAGE_MASTER_ATTACK,
    IMAGE_MASTER_ATTACK_2,
    IMAGE_MASTER_BUFF,
    IMAGE_MASTER_DEFEATED,
    IMAGE_MASTER_HURT,
    IMAGE_MASTER_IDLE,
    IMAGE_MASTER_IDLE_BATTLE,
    IMAGE_ORDER_ATTACK,
    IMAGE_ORDER_ATTACK_2,
    IMAGE_ORDER_DEFEATED,
    IMAGE_ORDER_HURT,
    IMAGE_ORDER_IDLE,
    IMAGE_ORDER_IDLE_BATTLE,
    IMAGE_ORDER_IDLE_BATTLE_0,
    IMAGE_ORDER_SHIELD_BUFF,
    IMAGE_PRIEST_ATTACK,
    IMAGE_PRIEST_ATTACK_2,
    IMAGE_PRIEST_DEFEATED,
    IMAGE_PRIEST_HEAL,
    IMAGE_PRIEST_HURT,
    IMAGE_PRIEST_IDLE,
    IMAGE_PRIEST_IDLE_BATTLE,
    IMAGE_SUMMON_ATTACK,
    IMAGE_SUMMON_DEFEATED,
    IMAGE_SUMMON_HURT,
    IMAGE_SUMMON_IDLE,
    IMAGE_SUMMON_IDLE_BATTLE,
    IMAGE_SUMMON_SPELL,
    IMAGE_WARRIOR_ATTACK,
    IMAGE_WARRIOR_BUFF_REGEN,
    IMAGE_WARRIOR_DEFEATED,
    IMAGE_WARRIOR_HURT,
    IMAGE_WARRIOR_IDLE,
    IMAGE_WARRIOR_IDLE_BATTLE,
    IMAGE_WILD_ATTACK,
    IMAGE_WILD_BUFF_GREEN,
    IMAGE_WILD_DEFEATED,
    IMAGE_WILD_HURT,
    IMAGE_WILD_IDLE,
    IMAGE_WILD_IDLE_BATTLE,
} from "../imageLoadUtil";

export function loadBasicHeroesImages(scene: Scene) {
    //
    //
    // BARD ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_BARD_IDLE, "assets/sprites/units/bard/bard_idle_spritesheet_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_BARD_IDLE_BATTLE, "assets/sprites/units/bard/bard_battle_idle_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_BARD_ATTACK, "assets/sprites/units/bard/bard_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_BARD_DEFEATED, "assets/sprites/units/bard/bard_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_BARD_BUFF, "assets/sprites/units/bard/bard_spell_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_BARD_HURT, "assets/sprites/units/bard/bard_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // DARK //////////////////////////////////////////// DARK ////////////////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_DARK_IDLE, "assets/sprites/units/dark/dark_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_DARK_IDLE_BATTLE, "assets/sprites/units/dark/dark_idle_battle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_DARK_ATTACK, "assets/sprites/units/dark/dark_attack_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_DARK_SPELL, "assets/sprites/units/dark/dark_spell_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // TODO: webp
    scene.load.spritesheet(IMAGE_DARK_DEFEATED, "assets/sprites/units/dark/dark_defeated_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_DARK_DEFEATED, "assets/sprites/units/dark/dark_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_DARK_HURT, "assets/sprites/units/dark/dark_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // MAGIC //////////////////////////////////////////////////// MAGIC ////////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_MAGIC_IDLE, "assets/sprites/units/magic/magic_idle_spritesheet_300_t.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_MAGIC_IDLE_BATTLE_0, "assets/sprites/units/magic/mage_idle_battle_2_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MAGIC_SPELL, "assets/sprites/units/magic/magic_lightning_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MAGIC_ATTACK, "assets/sprites/units/magic/magic_attack_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MAGIC_DEFEATED, "assets/sprites/units/magic/magic_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MAGIC_HURT, "assets/sprites/units/magic/magic_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // MASTER ///////////////////////////////////////////////// MASTER ///////////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_MASTER_IDLE, "assets/sprites/units/master/master_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_MASTER_IDLE_BATTLE, "assets/sprites/units/master/master_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MASTER_ATTACK, "assets/sprites/units/master/master_attack_3_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // TODO: webp
    scene.load.spritesheet(IMAGE_MASTER_ATTACK_2, "assets/sprites/units/master/master_attack_2_cut_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MASTER_DEFEATED, "assets/sprites/units/master/master_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MASTER_HURT, "assets/sprites/units/master/master_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_MASTER_BUFF, "assets/sprites/units/master/master_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // ORDER ////////////////////////////////////////////////////////// ORDER //////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_ORDER_IDLE, "assets/sprites/units/order/order_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_ORDER_IDLE_BATTLE, "assets/sprites/units/order/order_idle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_ORDER_HURT, "assets/sprites/units/order/order_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_ORDER_ATTACK, "assets/sprites/units/order/order_attack_cut_500.webp", {
        frameWidth: 500,
        frameHeight: 500,
    });

    // TODO: webp
    scene.load.spritesheet(IMAGE_ORDER_ATTACK_2, "assets/sprites/units/order/order_attack_2_cut_500.png", {
        frameWidth: 500,
        frameHeight: 375,
    });

    scene.load.spritesheet(IMAGE_ORDER_SHIELD_BUFF, "assets/sprites/units/order/order_shield_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_ORDER_DEFEATED, "assets/sprites/units/order/order_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.image(IMAGE_ORDER_IDLE_BATTLE_0, "assets/sprites/units/order/order_idle_500_img.webp");

    //
    //
    // PRIEST /////////////////////////////////////////////////////// PRIEST /////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_PRIEST_IDLE, "assets/sprites/units/priest/priest_idle_spritesheet_300_t.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_PRIEST_IDLE_BATTLE, "assets/sprites/units/priest/priest_idle_battle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_PRIEST_HEAL, "assets/sprites/units/priest/priest_spell_2_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // scene.load.spritesheet(IMAGE_PRIEST_ATTACK, "assets/sprites/units/priest/priest_spell_1_cut_400.webp", {
    //     frameWidth: 400,
    //     frameHeight: 400,
    // });

    // TODO: webp
    scene.load.spritesheet(IMAGE_PRIEST_ATTACK_2, "assets/sprites/units/priest/priest_holy_sword_cut_2_400.png", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_PRIEST_DEFEATED, "assets/sprites/units/priest/priest_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_PRIEST_HURT, "assets/sprites/units/priest/priest_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // SUMMON ///////////////////////////////////////////////////// SUMMON ///////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_SUMMON_IDLE, "assets/sprites/units/summon/summon_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_SUMMON_IDLE_BATTLE, "assets/sprites/units/summon/summon_idle_battle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_SUMMON_ATTACK, "assets/sprites/units/summon/summon_attack_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_SUMMON_DEFEATED, "assets/sprites/units/summon/summon_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_SUMMON_SPELL, "assets/sprites/units/summon/summon_spell_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_SUMMON_HURT, "assets/sprites/units/summon/summon_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // WARRIOR ///////////////////////////////////////////////////// WARRIOR ///////////////////////////////////////////////////////////////////
    //
    //

    scene.load.spritesheet(IMAGE_WARRIOR_IDLE, "assets/sprites/units/warrior/warrior_idle_cut_300.webp", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_WARRIOR_IDLE_BATTLE, "assets/sprites/units/warrior/warrior_idle_battle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    // prev image: warrior_attack_4_cut_400
    scene.load.spritesheet(IMAGE_WARRIOR_ATTACK, "assets/sprites/units/warrior/warrior_attack_5_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WARRIOR_BUFF_REGEN, "assets/sprites/units/warrior/warrior_reg_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WARRIOR_DEFEATED, "assets/sprites/units/warrior/warrior_defeated_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WARRIOR_HURT, "assets/sprites/units/warrior/warrior_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    //
    //
    // WILD ///////////////////////////////////////////////////// WILD ///////////////////////////////////////////////////////////////////
    //
    //

    //TODO: webp
    scene.load.spritesheet(IMAGE_WILD_IDLE, "assets/sprites/units/wild/wild_idle_cut_300.png", {
        frameWidth: 300,
        frameHeight: 300,
    });

    scene.load.spritesheet(IMAGE_WILD_IDLE_BATTLE, "assets/sprites/units/wild/wild_idle_battle_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WILD_ATTACK, "assets/sprites/units/wild/wild_attack_3_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WILD_DEFEATED, "assets/sprites/units/wild/wild_defeated_cut_2_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WILD_BUFF_GREEN, "assets/sprites/units/wild/wild_buff_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });

    scene.load.spritesheet(IMAGE_WILD_HURT, "assets/sprites/units/wild/wild_hurt_cut_400.webp", {
        frameWidth: 400,
        frameHeight: 400,
    });
}
