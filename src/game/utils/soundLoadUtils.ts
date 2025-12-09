import { Scene } from "phaser";
import {
    SOUND_DUDE_APPLY_CURSE,
    SOUND_DUDE_BEAR_HURT,
    SOUND_DUDE_FOX_HURT,
    SOUND_DUDE_PIG_HURT,
    SOUND_DUDE_WOLF_HURT,
    SOUND_RO_SPIDER,
    SOUND_TAKE_ITEM,
    SOUND_TAKE_ITEM_DAGGER,
    SOUND_TAKE_ITEM_HP_BOTTLE,
    SOUND_TAKE_ITEM_KEY,
    SOUND_TAKE_ITEM_SHIELD,
    SOUND_TAKE_ITEM_SKULL,
    SOUND_TAKE_ITEM_STONE_HEAVY,
    SOUND_TAKE_ITEM_STONE_LIGHT,
    SOUND_TRIGGER_BAT_ATTACK,
    SOUND_TRIGGER_GHOST_BEHIND,
    SOUND_UI_CLICK_3,
    SOUND_UI_CLICK_4,
    SOUND_UI_CLICK_6,
    SOUND_UI_OPEN_CURSE_BOOK,
    SOUND_USE_BAT_ATTACK,
    SOUND_USE_CHEST,
    SOUND_USE_CHEST_LOCKED,
    SOUND_USE_CURSED_CHEST,
    SOUND_USE_ITEM_DAGGER,
    SOUND_USE_ITEM_HP_BOTTLE,
    SOUND_USE_ITEM_HP_BOTTLE_2,
    SOUND_USE_ITEM_SKULL_BEAR,
    SOUND_USE_ITEM_STONE,
    SOUND_USE_ITEM_STONE_2,
    SOUND_USE_SKULL_PILE,
    SOUND_WOOD_1,
    SOUND_WOOD_2,
    SOUND_WOOD_3,
} from "../consts";

export function loadSounds(scene: Scene) {
    scene.load.setPath("assets/audio/sounds");

    // USE ROOM OBJECTS
    scene.load.audio(SOUND_USE_CHEST, "use_chest.mp3");
    scene.load.audio(SOUND_USE_CURSED_CHEST, "use_cursed_chest.mp3");
    scene.load.audio(SOUND_USE_BAT_ATTACK, "bat_cry_1.mp3");
    scene.load.audio(SOUND_USE_SKULL_PILE, "use_skull_pile.mp3");
    scene.load.audio(SOUND_USE_CHEST_LOCKED, "treasure_chest_locked.mp3");
    // TRIGGER ROOM OBJECTS
    scene.load.audio(SOUND_TRIGGER_BAT_ATTACK, "bat_cry_2.mp3");
    scene.load.audio(SOUND_TRIGGER_GHOST_BEHIND, "ghost_attack.mp3");

    // OTHER ROOM OBJECTS
    scene.load.audio(SOUND_RO_SPIDER, "spider_run.mp3");
    // ITEMS
    scene.load.audio(SOUND_TAKE_ITEM, "take_item.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_HP_BOTTLE, "take_item_hp_bottle.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_SKULL, "take_item_skull.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_KEY, "take_item_key.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_DAGGER, "take_item_dagger.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_SHIELD, "take_item_shield.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_STONE_LIGHT, "take_item_stone_light.mp3");
    scene.load.audio(SOUND_TAKE_ITEM_STONE_HEAVY, "take_item_stone_heavy.mp3");

    scene.load.audio(SOUND_USE_ITEM_DAGGER, "use_dagger.mp3");
    scene.load.audio(SOUND_USE_ITEM_HP_BOTTLE, "use_hp_bottle.mp3");
    scene.load.audio(SOUND_USE_ITEM_HP_BOTTLE_2, "use_item_hp_bottle_2.mp3");
    scene.load.audio(SOUND_USE_ITEM_STONE, "use_stone.mp3");
    scene.load.audio(SOUND_USE_ITEM_STONE_2, "use_stone_2.mp3");
    scene.load.audio(SOUND_USE_ITEM_SKULL_BEAR, "use_item_skull_bear.mp3");

    // DUDES
    scene.load.audio(SOUND_DUDE_WOLF_HURT, "wolf_hurt.mp3");
    scene.load.audio(SOUND_DUDE_PIG_HURT, "pig_hurt.mp3");
    scene.load.audio(SOUND_DUDE_BEAR_HURT, "bear_hurt.mp3");
    scene.load.audio(SOUND_DUDE_FOX_HURT, "fox_hurt.mp3");

    scene.load.audio(SOUND_DUDE_APPLY_CURSE, "apply_curse.mp3");
    // EVENTS

    // UI
    scene.load.audio(SOUND_WOOD_1, "wood_1.mp3");
    scene.load.audio(SOUND_WOOD_2, "wood_2.mp3");
    scene.load.audio(SOUND_WOOD_3, "wood_3.mp3");
    scene.load.audio(SOUND_UI_CLICK_3, "ui_click_3.mp3");
    //scene.load.audio(SOUND_UI_CLICK_4, "ui_click_4.mp3");
    scene.load.audio(SOUND_UI_CLICK_6, "ui_click_4.mp3");

    scene.load.audio(SOUND_UI_OPEN_CURSE_BOOK, "ui_open_curse_book.mp3");
}
