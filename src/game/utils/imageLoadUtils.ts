import { Scene } from "phaser";
import {
    IMAGE_BEAR_CORPSE,
    IMAGE_BEAR_DAGGER,
    IMAGE_BEAR_GHOST,
    IMAGE_BEAR_HEAD_LEFT,
    IMAGE_BEAR_HEAD_UP,
    IMAGE_BEAR_PAIN,
    IMAGE_BEAR_TAKE,
    //IMAGE_BEAR_THROW_SKULL,
    //IMAGE_BEAR_THROW_SKULL_2,
    IMAGE_BEAR_USE_HP_BOTTLE,
    IMAGE_BEAR_USE_ROOM_OBJECT,
    IMAGE_BEAR_USE_SKULL,
    IMAGE_BEAR_USE_STONE,
    IMAGE_BEAR_WALK,
    IMAGE_BEAR_WALK_CURSED,
    IMAGE_BUTTON_CRAFT,
    IMAGE_BUTTON_CROSS,
    IMAGE_BUTTON_LEFT,
    IMAGE_BUTTON_RIGHT,
    IMAGE_CHARACTER_CURSE_SELECTED,
    IMAGE_CHEST,
    IMAGE_COMPONENT_SLOT,
    IMAGE_BONUS_PANEL,
    IMAGE_CRAFT_TABLE,
    IMAGE_CURSE_FOG,
    IMAGE_CURSE_SLOT_CLOSED,
    IMAGE_CURSE_SLOT_WEB,
    IMAGE_ESCAPE_DOOR,
    IMAGE_FIRSTPLAN_BAT,
    IMAGE_FIRSTPLAN_BAT_GIANT,
    IMAGE_FIRSTPLAN_CHAIN,
    IMAGE_FIRSTPLAN_CHAIN_SMALL,
    IMAGE_FIRSTPLAN_COLUMN,
    IMAGE_FIRSTPLAN_ROCK,
    IMAGE_FIRSTPLAN_SPIDER,
    IMAGE_FIRSTPLAN_STONE,
    IMAGE_FIRSTPLAN_WATER_DROP,
    IMAGE_FIRSTPLAN_WEB,
    IMAGE_FOX_CORPSE,
    IMAGE_FOX_DAGGER,
    IMAGE_FOX_FALL,
    IMAGE_FOX_GHOST,
    IMAGE_FOX_HEAD_LEFT,
    IMAGE_FOX_HEAD_UP,
    IMAGE_FOX_PAIN,
    IMAGE_FOX_TAKE,
    IMAGE_FOX_USE_HP_BOTTLE,
    IMAGE_FOX_USE_ROOM_OBJECT,
    IMAGE_FOX_USE_SKULL,
    IMAGE_FOX_USE_STONE,
    IMAGE_FOX_WALK,
    IMAGE_FOX_WALK_CURSED,
    IMAGE_HOME_TP_DOOR,
    IMAGE_INVENTORY_BG_LEFT,
    IMAGE_INVENTORY_BG_LEFT_EMPTY,
    IMAGE_INVENTORY_BG_LEFT_SKULL_1,
    IMAGE_INVENTORY_BG_LEFT_SKULL_2,
    IMAGE_INVENTORY_BG_LEFT_SKULL_3,
    IMAGE_INVENTORY_BG_LEFT_SKULL_4,
    IMAGE_INVENTORY_BG_MID,
    IMAGE_INVENTORY_BG_RIGHT,
    IMAGE_INVENTORY_SLOT,
    IMAGE_INVENTORY_VERTICAL_LINE,
    IMAGE_ITEM_BAG,
    IMAGE_ITEM_CANDLE,
    IMAGE_ITEM_DAGGER,
    IMAGE_ITEM_DAGGER_GROUND,
    IMAGE_ITEM_GOLDEN_SKULL,
    IMAGE_ITEM_HP_BOTTLE,
    IMAGE_ITEM_HP_BOTTLE_DISABLED,
    IMAGE_ITEM_HP_BOTTLE_GROUND,
    IMAGE_ITEM_HP_HOME_TP,
    IMAGE_ITEM_HP_HOME_TP_DISABLED,
    IMAGE_ITEM_KEY,
    IMAGE_ITEM_KEY_DISABLED,
    IMAGE_ITEM_LIGHT_BOTTLE,
    IMAGE_ITEM_LIGHT_BOTTLE_DISABLED,
    IMAGE_ITEM_SHIELD,
    IMAGE_ITEM_SHIELD_GROUND,
    IMAGE_ITEM_SKULL,
    IMAGE_ITEM_SKULL_GROUND_1,
    IMAGE_ITEM_SKULL_GROUND_2,
    IMAGE_ITEM_SKULL_GROUND_3,
    IMAGE_ITEM_STONE,
    IMAGE_ITEM_STONE_GROUND,
    IMAGE_ITEMS_PANEL,
    IMAGE_LADDER,
    IMAGE_LOBBY_CHARACTER_BEAR,
    IMAGE_LOBBY_CHARACTER_BLACK_BEAR,
    IMAGE_LOBBY_CHARACTER_BLACK_FOX,
    IMAGE_LOBBY_CHARACTER_BLACK_PIG,
    IMAGE_LOBBY_CHARACTER_BLACK_WOLF,
    IMAGE_LOBBY_CHARACTER_FOX,
    IMAGE_LOBBY_CHARACTER_PIG,
    IMAGE_LOBBY_CHARACTER_WOLF,
    IMAGE_LOBBY_LOADING,
    IMAGE_PIG_APPEAR,
    IMAGE_PIG_APPEAR_NEXT,
    IMAGE_PIG_CORPSE,
    IMAGE_PIG_DAGGER,
    IMAGE_PIG_FALL,
    IMAGE_PIG_GHOST,
    IMAGE_PIG_HEAD_LEFT,
    IMAGE_PIG_HEAD_UP,
    IMAGE_PIG_PAIN,
    IMAGE_PIG_TAKE,
    IMAGE_PIG_USE_HP_BOTTLE,
    IMAGE_PIG_USE_ROOM_OBJECT,
    IMAGE_PIG_USE_SKULL,
    IMAGE_PIG_USE_STONE,
    IMAGE_PIG_WALK,
    IMAGE_PIG_WALK_CURSED,
    IMAGE_RIDDLE_ROOM_OBJECT,
    IMAGE_RIDDLE_ROOM_OBJECT_CLOSED,
    IMAGE_ROOM_OBJECT_BARREL,
    IMAGE_ROOM_OBJECT_BAT,
    IMAGE_ROOM_OBJECT_BOOKS,
    IMAGE_ROOM_OBJECT_BUCKET,
    IMAGE_ROOM_OBJECT_GHOST_BEHIND,
    IMAGE_ROOM_OBJECT_SKULL_PILE,
    IMAGE_ROOM_OBJECT_SPIDER,
    IMAGE_ROOM_OBJECT_STONES,
    IMAGE_ROOM_OBJECT_STONES_2,
    IMAGE_ROOM_OBJECT_STONES_3,
    IMAGE_ROOM_OBJECT_SWORDS,
    IMAGE_ROOM_OBJECT_TRAP,
    IMAGE_STONE_FROM_TOP,
    IMAGE_UI_BONUS_HEAL,
    IMAGE_UI_BONUS_HP,
    IMAGE_UI_BONUS_ITEM_SHIELD,
    IMAGE_UI_BUTTON_E,
    IMAGE_UI_BUTTON_T,
    IMAGE_UI_BUTTON_W,
    IMAGE_UI_CURSE_BOOK,
    IMAGE_UI_HP_HEART,
    IMAGE_WALL_DOOR,
    IMAGE_WALL_DOOR_OPEN,
    IMAGE_WOLF_CORPSE,
    IMAGE_WOLF_DAGGER,
    IMAGE_WOLF_FALL,
    IMAGE_WOLF_GHOST,
    IMAGE_WOLF_HEAD_LEFT,
    IMAGE_WOLF_HEAD_UP,
    IMAGE_WOLF_PAIN,
    IMAGE_WOLF_TAKE,
    IMAGE_WOLF_USE_HP_BOTTLE,
    IMAGE_WOLF_USE_ROOM_OBJECT,
    IMAGE_WOLF_USE_SKULL,
    IMAGE_WOLF_USE_STONE,
    IMAGE_WOLF_WALK,
    IMAGE_WOLF_WALK_CURSED,
    IMAGE_BEAR_FALL,
    IMAGE_UI_BONUS_SLOT_SELECTED_1,
    IMAGE_UI_BONUS_SLOT_SELECTED_2,
    IMAGE_UI_BONUS_REMOVE_CURSE,
    IMAGE_FIRSTPLAN_WITCH,
    IMAGE_ROOM_OBJECT_GHOST_FRONT,
    IMAGE_UI_CURSED_ITEM_EFFECT,
    IMAGE_UI_ITEM_SLOT_CURSED_BG,
    IMAGE_ITEM_BOMB_SKULL,
    IMAGE_ITEM_BLOCK_SKULL,
    IMAGE_UI_BUTTON_Q,
    IMAGE_UI_BUTTON_R,
    IMAGE_UI_BUTTON_A,
    IMAGE_UI_BUTTON_S,
    IMAGE_UI_BUTTON_D,
    IMAGE_UI_BUTTON_F,
    IMAGE_UI_BUTTON_Z,
    IMAGE_UI_BUTTON_X,
    IMAGE_UI_BUTTON_C,
    IMAGE_UI_BUTTON_V,
} from "../consts";

export function loadImages(scene: Scene) {
    scene.load.image("stair", "assets/sprites/ladder2.png");
    scene.load.image("ground", "assets/sprites/platform_black.png");

    // CHARACTER ANIMATION
    //
    // GENERAL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        scene.load.spritesheet(IMAGE_STONE_FROM_TOP, "assets/sprites/dude/stone_from_top.png", {
            frameWidth: 170,
            frameHeight: 260,
        });
    }
    // WOLF >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        scene.load.spritesheet(IMAGE_WOLF_WALK, "assets/sprites/dude/wolf/wolf_walk.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_WOLF_TAKE, "assets/sprites/dude/wolf/wolf_take_item.png", {
            frameWidth: 400,
            frameHeight: 290,
        });

        scene.load.spritesheet(IMAGE_WOLF_HEAD_LEFT, "assets/sprites/dude/wolf/wolf_head_left.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_WOLF_HEAD_UP, "assets/sprites/dude/wolf/wolf_head_up.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_WOLF_USE_STONE, "assets/sprites/dude/wolf/wolf_use_item_light_stone.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_WOLF_USE_HP_BOTTLE, "assets/sprites/dude/wolf/wolf_use_item_bottle.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_WOLF_USE_SKULL, "assets/sprites/dude/wolf/wolf_use_item_skull.png", {
            frameWidth: 400,
            frameHeight: 350,
        });

        scene.load.spritesheet(IMAGE_WOLF_USE_ROOM_OBJECT, "assets/sprites/dude/wolf/wolf_use_object.png", {
            frameWidth: 260,
            frameHeight: 320,
        });

        scene.load.spritesheet(IMAGE_WOLF_WALK_CURSED, "assets/sprites/dude/wolf/wolf_walk_cursed.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_WOLF_GHOST, "assets/sprites/dude/wolf/wolf_ghost.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_WOLF_PAIN, "assets/sprites/dude/wolf/wolf_pain.png", { frameWidth: 280, frameHeight: 300 });

        scene.load.spritesheet(IMAGE_WOLF_DAGGER, "assets/sprites/dude/wolf/wolf_dagger_animation.png", {
            frameWidth: 600,
            frameHeight: 360,
        });

        scene.load.spritesheet(IMAGE_WOLF_FALL, "assets/sprites/dude/wolf/wolf_fall.png", {
            frameWidth: 400,
            frameHeight: 300,
        });

        scene.load.image(IMAGE_WOLF_CORPSE, "assets/sprites/dude/wolf/wolf_corpse.png");
    }
    // FOX >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        scene.load.spritesheet(IMAGE_FOX_WALK, "assets/sprites/dude/fox/fox_walk.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_HEAD_UP, "assets/sprites/dude/fox/fox_head_up.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_FALL, "assets/sprites/dude/fox/fox_fall.png", {
            frameWidth: 400,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_TAKE, "assets/sprites/dude/fox/fox_take_item.png", {
            frameWidth: 400,
            frameHeight: 290,
        });

        scene.load.spritesheet(IMAGE_FOX_USE_STONE, "assets/sprites/dude/fox/fox_use_item_light_stone.png", {
            frameWidth: 320,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_FOX_USE_SKULL, "assets/sprites/dude/fox/fox_use_item_skull.png", {
            frameWidth: 280,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_HEAD_LEFT, "assets/sprites/dude/fox/fox_head_left.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_USE_HP_BOTTLE, "assets/sprites/dude/fox/fox_use_item_bottle.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.image(IMAGE_FOX_CORPSE, "assets/sprites/dude/fox/fox_corpse.png");

        scene.load.spritesheet(IMAGE_FOX_USE_ROOM_OBJECT, "assets/sprites/dude/fox/fox_use_object_animation.png", {
            frameWidth: 400,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_GHOST, "assets/sprites/dude/fox/fox_ghost.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_FOX_DAGGER, "assets/sprites/dude/fox/fox_dagger_animation.png", {
            frameWidth: 600,
            frameHeight: 360,
        });

        scene.load.spritesheet(IMAGE_FOX_WALK_CURSED, "assets/sprites/dude/fox/fox_walk_cursed.png", {
            frameWidth: 200,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_FOX_PAIN, "assets/sprites/dude/fox/fox_pain.png", { frameWidth: 280, frameHeight: 300 });
    }
    // PIG >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        scene.load.spritesheet(IMAGE_PIG_FALL, "assets/sprites/dude/pig/pig_fall.png", {
            frameWidth: 400,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_TAKE, "assets/sprites/dude/pig/pig_take_item.png", {
            frameWidth: 400,
            frameHeight: 290,
        });

        scene.load.spritesheet(IMAGE_PIG_HEAD_LEFT, "assets/sprites/dude/pig/pig_head_left.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_HEAD_UP, "assets/sprites/dude/pig/pig_head_up.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_USE_STONE, "assets/sprites/dude/pig/pig_use_item_light_stone.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_PIG_USE_HP_BOTTLE, "assets/sprites/dude/pig/pig_use_item_bottle.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_USE_SKULL, "assets/sprites/dude/pig/pig_use_item_skull.png", {
            frameWidth: 280,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_USE_ROOM_OBJECT, "assets/sprites/dude/pig/pig_use_object.png", {
            frameWidth: 260,
            frameHeight: 320,
        });

        scene.load.image(IMAGE_PIG_CORPSE, "assets/sprites/dude/pig/pig_corpse.png");

        scene.load.spritesheet(IMAGE_PIG_DAGGER, "assets/sprites/dude/pig/pig_dagger_animation.png", {
            frameWidth: 600,
            frameHeight: 360,
        });

        scene.load.spritesheet(IMAGE_PIG_APPEAR, "assets/sprites/dude/pig/pig_appear.png", {
            frameWidth: 300,
            frameHeight: 700,
        });

        scene.load.spritesheet(IMAGE_PIG_APPEAR_NEXT, "assets/sprites/dude/pig/pig_appear_2.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_PIG_WALK, "assets/sprites/dude/pig/pig_walk.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_GHOST, "assets/sprites/dude/pig/pig_ghost.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_PIG_WALK_CURSED, "assets/sprites/dude/pig/pig_walk_cursed.png", {
            frameWidth: 200,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_PIG_PAIN, "assets/sprites/dude/pig/pig_pain.png", { frameWidth: 280, frameHeight: 300 });
    }
    // BEAR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        scene.load.spritesheet(IMAGE_BEAR_HEAD_UP, "assets/sprites/dude/bear/bear_head_up.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_BEAR_HEAD_LEFT, "assets/sprites/dude/bear/bear_head_left.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_BEAR_WALK, "assets/sprites/dude/bear/bear_walk.png", {
            frameWidth: 200,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_BEAR_WALK_CURSED, "assets/sprites/dude/bear/bear_walk_cursed.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_BEAR_USE_STONE, "assets/sprites/dude/bear/bear_use_item_light_stone.png", {
            frameWidth: 300,
            frameHeight: 400,
        });

        scene.load.spritesheet(IMAGE_BEAR_USE_SKULL, "assets/sprites/dude/bear/bear_use_item_skull.png", {
            frameWidth: 240,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_BEAR_USE_HP_BOTTLE, "assets/sprites/dude/bear/bear_use_item_bottle.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.spritesheet(IMAGE_BEAR_USE_ROOM_OBJECT, "assets/sprites/dude/bear/bear_use_object.png", {
            frameWidth: 260,
            frameHeight: 320,
        });

        scene.load.spritesheet(IMAGE_BEAR_FALL, "assets/sprites/dude/bear/bear_fall.png", {
            frameWidth: 300,
            frameHeight: 300,
        });

        scene.load.image(IMAGE_BEAR_CORPSE, "assets/sprites/dude/bear/bear_corpse.png");

        scene.load.spritesheet(IMAGE_BEAR_TAKE, "assets/sprites/dude/bear/bear_take_item.png", { frameWidth: 240, frameHeight: 290 });

        //scene.load.spritesheet(IMAGE_BEAR_THROW_SKULL, "assets/sprites/dude/bear/bear_skull_throw_animation.png", { frameWidth: 300, frameHeight: 360 });
        //scene.load.spritesheet(IMAGE_BEAR_THROW_SKULL_2, "assets/sprites/dude/bear_skull_throw_2_animation.png", { frameWidth: 300, frameHeight: 360 });

        scene.load.spritesheet(IMAGE_BEAR_PAIN, "assets/sprites/dude/bear/bear_pain.png", { frameWidth: 280, frameHeight: 300 });

        scene.load.spritesheet(IMAGE_BEAR_DAGGER, "assets/sprites/dude/bear/bear_dagger_animation.png", {
            frameWidth: 600,
            frameHeight: 360,
        });

        scene.load.spritesheet(IMAGE_BEAR_GHOST, "assets/sprites/dude/bear/bear_ghost.png", {
            frameWidth: 200,
            frameHeight: 300,
        });
    }
    //
    // room backgrounds basic
    // type 1
    scene.load.image("room_background_0", "assets/sprites/rooms/ROOM_BG_0.png");
    scene.load.image("room_background_1", "assets/sprites/rooms/ROOM_BG_1.png");
    scene.load.image("room_background_2", "assets/sprites/rooms/ROOM_BG_2.png");
    scene.load.image("room_background_3", "assets/sprites/rooms/ROOM_BG_3.png");
    scene.load.image("room_background_4", "assets/sprites/rooms/ROOM_BG_4.png");
    scene.load.image("room_background_5", "assets/sprites/rooms/ROOM_BG_5.png");
    scene.load.image("room_background_6", "assets/sprites/rooms/ROOM_BG_6.png");
    scene.load.image("room_background_21", "assets/sprites/rooms/ROOM_BG_21.png");
    scene.load.image("room_background_22", "assets/sprites/rooms/ROOM_BG_22.png");

    scene.load.image("room_background_24", "assets/sprites/rooms/room_bg_blacksmith.png");
    scene.load.image("room_background_25", "assets/sprites/rooms/room_bg_blacksmith_small.png");
    // type 2
    scene.load.image("room_background_30", "assets/sprites/rooms/room_bg_2_0.png");
    scene.load.image("room_background_31", "assets/sprites/rooms/room_bg_2_1.png");
    scene.load.image("room_background_32", "assets/sprites/rooms/room_bg_fireplace.png");
    scene.load.image("room_background_23", "assets/sprites/rooms/ROOM_BG_2_3.png");
    // room backgrounds outside
    // type 1
    scene.load.image("room_background_51", "assets/sprites/rooms/outside_1_part1.png");
    // type 2
    scene.load.image("room_background_52", "assets/sprites/rooms/outside_2_part2.png");
    // FOR TESTING
    scene.load.image("room_background_100", "assets/sprites/rooms/ROOM_TEST.png");
    //
    //
    // ROOM OBJECTS
    // columns betweeen rooms
    scene.load.image("divide_column_1", "assets/sprites/COLUMN.png");
    // grounds
    scene.load.image("ground1", "assets/sprites/GROUND_1.png");
    scene.load.image("ground2", "assets/sprites/GROUND_2.png");
    scene.load.image("ground_1_0", "assets/sprites/GROUND_200_1.png");
    scene.load.image("ground_2_0", "assets/sprites/GROUND_400_1.png");
    scene.load.image("ground_3_0", "assets/sprites/GROUND_600_1.png");
    scene.load.image("ground_4_0", "assets/sprites/GROUND_800_1.png");
    scene.load.image("ground_8_0", "assets/sprites/GROUND_1600_1.png");
    // walls
    scene.load.image("wall_left_0", "assets/sprites/WALL_LEFT_0.png");
    scene.load.image("wall_left_1", "assets/sprites/WALL_LEFT_1.png");
    scene.load.image("wall_left_2", "assets/sprites/WALL_LEFT_2.png");
    scene.load.image("wall_right_0", "assets/sprites/WALL_RIGHT_0.png");
    scene.load.image("wall_right_1", "assets/sprites/WALL_RIGHT_1.png");
    scene.load.image("wall_right_2", "assets/sprites/WALL_RIGHT_2.png");
    // wall doors
    scene.load.image(`${IMAGE_WALL_DOOR}_0`, "assets/sprites/room_objects/wall_door_0.png");
    scene.load.image(`${IMAGE_WALL_DOOR_OPEN}_0`, "assets/sprites/room_objects/wall_door_open_0.png");
    // ROOM OBJECTS INTERIER
    scene.load.image(IMAGE_LADDER, "assets/sprites/room_objects/ladder_1.png");
    scene.load.image(IMAGE_ROOM_OBJECT_BARREL, "assets/sprites/room_objects/barrel.png");
    scene.load.image(IMAGE_ROOM_OBJECT_BOOKS, "assets/sprites/room_objects/books.png");
    scene.load.image(IMAGE_ROOM_OBJECT_SWORDS, "assets/sprites/room_objects/swords.png");
    scene.load.image(IMAGE_ROOM_OBJECT_STONES, "assets/sprites/room_objects/stones.png");
    scene.load.image(IMAGE_ROOM_OBJECT_STONES_2, "assets/sprites/room_objects/stones_2.png");
    scene.load.image(IMAGE_ROOM_OBJECT_STONES_3, "assets/sprites/room_objects/stones_3.png");
    scene.load.image(IMAGE_ROOM_OBJECT_BUCKET, "assets/sprites/room_objects/bucket.png");
    // columns
    scene.load.image("column_0", "assets/sprites/room_objects/COLUMN_1.png");
    scene.load.image("column_1", "assets/sprites/room_objects/COLUMN_2.png");
    // walls and doors
    scene.load.image("wall_0", "assets/sprites/room_objects/wall_0.png");
    scene.load.image("wall_1", "assets/sprites/room_objects/wall_1.png");
    // escape door
    scene.load.image(IMAGE_ESCAPE_DOOR, "assets/sprites/room_objects/escape_door.png");
    // home tp door
    scene.load.image(IMAGE_HOME_TP_DOOR, "assets/sprites/room_objects/escape_door.png");
    // chest
    scene.load.image(IMAGE_CHEST, "assets/sprites/room_objects/chest.png");
    scene.load.image(IMAGE_ROOM_OBJECT_SKULL_PILE, "assets/sprites/room_objects/skullPile.png");
    // riddle
    scene.load.image(IMAGE_RIDDLE_ROOM_OBJECT, "assets/sprites/room_objects/riddle.png");
    scene.load.image(IMAGE_RIDDLE_ROOM_OBJECT_CLOSED, "assets/sprites/room_objects/riddle_closed.png");
    // bat
    scene.load.spritesheet(IMAGE_ROOM_OBJECT_BAT, "assets/sprites/room_objects/bat.png", {
        frameWidth: 200,
        frameHeight: 200,
    });
    // spider
    scene.load.spritesheet(IMAGE_ROOM_OBJECT_SPIDER, "assets/sprites/room_objects/spider.png", {
        frameWidth: 250,
        frameHeight: 110,
    });
    scene.load.image(IMAGE_RIDDLE_ROOM_OBJECT_CLOSED, "assets/sprites/room_objects/riddle_closed.png");
    // trap
    scene.load.image(IMAGE_ROOM_OBJECT_TRAP, "assets/sprites/room_objects/trap.png");
    // ghost behind
    scene.load.image(IMAGE_ROOM_OBJECT_GHOST_BEHIND, "assets/sprites/room_objects/ghost_left.png");
    scene.load.image(IMAGE_ROOM_OBJECT_GHOST_FRONT, "assets/sprites/room_objects/ghost_right.png");

    // FIRST PLAN OBJECTS
    scene.load.image(IMAGE_FIRSTPLAN_CHAIN, "assets/sprites/room_objects/first_plan/chain_1.png");
    scene.load.image(IMAGE_FIRSTPLAN_CHAIN_SMALL, "assets/sprites/room_objects/first_plan/chain_2.png");
    scene.load.spritesheet(IMAGE_FIRSTPLAN_BAT, "assets/sprites/room_objects/first_plan/bat_big.png", {
        frameWidth: 1000,
        frameHeight: 1000,
    });
    scene.load.image(IMAGE_FIRSTPLAN_STONE, "assets/sprites/room_objects/first_plan/stone.png");
    scene.load.image(IMAGE_FIRSTPLAN_SPIDER, "assets/sprites/room_objects/first_plan/spider.png");
    scene.load.image(IMAGE_FIRSTPLAN_COLUMN, "assets/sprites/room_objects/first_plan/column.png");
    scene.load.image(IMAGE_FIRSTPLAN_ROCK, "assets/sprites/room_objects/first_plan/rock.png");
    scene.load.image(IMAGE_FIRSTPLAN_WITCH, "assets/sprites/room_objects/first_plan/witch.png");
    //scene.load.image(IMAGE_FIRSTPLAN_WATER_DROP, "assets/sprites/room_objects/first_plan/water_drop.png");
    scene.load.spritesheet(IMAGE_FIRSTPLAN_WATER_DROP, "assets/sprites/room_objects/first_plan/water_drop.png", {
        frameWidth: 50,
        frameHeight: 900,
    });
    scene.load.image(IMAGE_FIRSTPLAN_BAT_GIANT, "assets/sprites/room_objects/first_plan/bat_giant.png");
    scene.load.image(IMAGE_FIRSTPLAN_WEB, "assets/sprites/room_objects/first_plan/web.png");
    //
    //
    //
    // UI
    scene.load.image(IMAGE_BUTTON_CROSS, "assets/sprites/ui/buttons/cross_button_2.png");
    scene.load.image(IMAGE_BUTTON_LEFT, "assets/sprites/ui/buttons/left_button.png");
    scene.load.image(IMAGE_BUTTON_RIGHT, "assets/sprites/ui/buttons/right_button.png");
    scene.load.image(IMAGE_BUTTON_CRAFT, "assets/sprites/ui/buttons/craft_button.png");

    scene.load.image(IMAGE_UI_ITEM_SLOT_CURSED_BG, "assets/sprites/ui/inv_item_slot_cursed_bg.png");

    scene.load.image(IMAGE_UI_BUTTON_E, "assets/sprites/ui/letters/button_e.png");
    scene.load.image(IMAGE_UI_BUTTON_T, "assets/sprites/ui/letters/button_t.png");
    scene.load.image(IMAGE_UI_BUTTON_W, "assets/sprites/ui/letters/button_w.png");
    scene.load.image(IMAGE_UI_BUTTON_Q, "assets/sprites/ui/letters/button_letter_Q.png");
    scene.load.image(IMAGE_UI_BUTTON_R, "assets/sprites/ui/letters/button_letter_R.png");
    scene.load.image(IMAGE_UI_BUTTON_A, "assets/sprites/ui/letters/button_letter_A.png");
    scene.load.image(IMAGE_UI_BUTTON_S, "assets/sprites/ui/letters/button_letter_S.png");
    scene.load.image(IMAGE_UI_BUTTON_D, "assets/sprites/ui/letters/button_letter_D.png");
    scene.load.image(IMAGE_UI_BUTTON_F, "assets/sprites/ui/letters/button_letter_F.png");
    scene.load.image(IMAGE_UI_BUTTON_Z, "assets/sprites/ui/letters/button_letter_Z.png");
    scene.load.image(IMAGE_UI_BUTTON_X, "assets/sprites/ui/letters/button_letter_X.png");
    scene.load.image(IMAGE_UI_BUTTON_C, "assets/sprites/ui/letters/button_letter_C.png");
    scene.load.image(IMAGE_UI_BUTTON_V, "assets/sprites/ui/letters/button_letter_V.png");

    scene.load.image(IMAGE_UI_CURSE_BOOK, "assets/sprites/ui/curse_book.png");

    scene.load.image(IMAGE_LOBBY_CHARACTER_BLACK_BEAR, "assets/sprites/ui/lobby_character_black_bear.png");
    scene.load.image(IMAGE_LOBBY_CHARACTER_BLACK_FOX, "assets/sprites/ui/lobby_character_black_fox.png");
    scene.load.image(IMAGE_LOBBY_CHARACTER_BLACK_PIG, "assets/sprites/ui/lobby_character_black_pig.png");
    scene.load.image(IMAGE_LOBBY_CHARACTER_BLACK_WOLF, "assets/sprites/ui/lobby_character_black_wolf.png");

    scene.load.image(IMAGE_CHARACTER_CURSE_SELECTED, "assets/sprites/ui/character_curse_selected.png");

    scene.load.image(IMAGE_UI_HP_HEART, "assets/sprites/ui/heart.png");

    scene.load.spritesheet(IMAGE_UI_CURSED_ITEM_EFFECT, "assets/sprites/ui/inv_cursed_item_effect.png", {
        frameWidth: 60,
        frameHeight: 200,
    });

    // craft table
    //TODO: change
    scene.load.image(IMAGE_CRAFT_TABLE, "assets/sprites/room_objects/chest.png");
    // inventory
    scene.load.image(IMAGE_INVENTORY_SLOT, "assets/sprites/ui/inventory_slot_2.png");
    scene.load.image(IMAGE_INVENTORY_BG_MID, "assets/sprites/ui/inventory_mid_4.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT, "assets/sprites/ui/inventory_left_4.png");
    scene.load.image(IMAGE_INVENTORY_BG_RIGHT, "assets/sprites/ui/inventory_right_4.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT_EMPTY, "assets/sprites/ui/inventory_left_empty.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT_SKULL_1, "assets/sprites/ui/inventory_left_1_skull.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT_SKULL_2, "assets/sprites/ui/inventory_left_2_skull.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT_SKULL_3, "assets/sprites/ui/inventory_left_3_skull.png");
    scene.load.image(IMAGE_INVENTORY_BG_LEFT_SKULL_4, "assets/sprites/ui/inventory_left_4_skull.png");
    scene.load.image(IMAGE_INVENTORY_VERTICAL_LINE, "assets/sprites/ui/inv_vertical.png");

    // items panel
    scene.load.image(IMAGE_ITEMS_PANEL, "assets/sprites/ui/items_panel_2.png");
    // riddle panel
    //scene.load.image(IMAGE_RIDDLE_PANEL, "assets/sprites/ui/riddle_panel.png");

    // bonus panel
    scene.load.image(IMAGE_BONUS_PANEL, "assets/sprites/ui/wooden_panel_2.png");
    scene.load.image(IMAGE_UI_BONUS_HEAL, "assets/sprites/ui/bonus_heal.png");
    scene.load.image(IMAGE_UI_BONUS_HP, "assets/sprites/ui/bonus_hp.png");
    scene.load.image(IMAGE_UI_BONUS_ITEM_SHIELD, "assets/sprites/ui/bonus_shield.png");
    scene.load.image(IMAGE_UI_BONUS_REMOVE_CURSE, "assets/sprites/ui/bonus_remove_curse.png");

    scene.load.image(IMAGE_UI_BONUS_SLOT_SELECTED_1, "assets/sprites/ui/bonus_selected_1.png");
    scene.load.image(IMAGE_UI_BONUS_SLOT_SELECTED_2, "assets/sprites/ui/bonus_selected_2.png");

    scene.load.image(IMAGE_COMPONENT_SLOT, "assets/sprites/ui/component_slot.png");
    //
    //
    // ITEMS
    scene.load.image(IMAGE_ITEM_CANDLE, "assets/sprites/items/item_candle.png");
    scene.load.image(IMAGE_ITEM_KEY, "assets/sprites/items/item_key.png");
    scene.load.image(IMAGE_ITEM_KEY_DISABLED, "assets/sprites/items/item_skull_brown.png");
    scene.load.image(IMAGE_ITEM_HP_BOTTLE, "assets/sprites/items/item_hp_bottle.png");
    scene.load.image(IMAGE_ITEM_HP_BOTTLE_DISABLED, "assets/sprites/items/item_hp_bottle_brown.png");
    scene.load.image(IMAGE_ITEM_HP_HOME_TP, "assets/sprites/items/item_to_home_bottle.png");
    scene.load.image(IMAGE_ITEM_HP_HOME_TP_DISABLED, "assets/sprites/items/item_to_home_bottle_brown.png");
    scene.load.image(IMAGE_ITEM_LIGHT_BOTTLE, "assets/sprites/items/item_light_bottle.png");
    scene.load.image(IMAGE_ITEM_LIGHT_BOTTLE_DISABLED, "assets/sprites/items/item_light_bottle_brown.png");
    scene.load.image(IMAGE_ITEM_DAGGER, "assets/sprites/items/item_dagger.png");
    scene.load.image(IMAGE_ITEM_SHIELD, "assets/sprites/items/item_shield.png");
    scene.load.image(IMAGE_ITEM_STONE, "assets/sprites/items/item_stone.png");
    scene.load.image(IMAGE_ITEM_BAG, "assets/sprites/items/item_bag.png");
    scene.load.image(IMAGE_ITEM_SKULL, "assets/sprites/items/item_skull.png");
    scene.load.image(IMAGE_ITEM_GOLDEN_SKULL, "assets/sprites/items/item_golden_skull_cursed.png");
    scene.load.image(IMAGE_ITEM_BOMB_SKULL, "assets/sprites/items/item_bomb_skull_cursed.png");
    scene.load.image(IMAGE_ITEM_BLOCK_SKULL, "assets/sprites/items/item_block_skull_cursed.png");

    //
    // ITEMS GROUND
    scene.load.image(IMAGE_ITEM_SKULL_GROUND_1, "assets/sprites/items/skull_ground_1.png");
    scene.load.image(IMAGE_ITEM_SKULL_GROUND_2, "assets/sprites/items/skull_ground_2.png");
    scene.load.image(IMAGE_ITEM_SKULL_GROUND_3, "assets/sprites/items/skull_ground_3.png");
    scene.load.image(IMAGE_ITEM_DAGGER_GROUND, "assets/sprites/items/dagger_ground.png");
    scene.load.image(IMAGE_ITEM_HP_BOTTLE_GROUND, "assets/sprites/items/bottle_ground.png");
    scene.load.image(IMAGE_ITEM_SHIELD_GROUND, "assets/sprites/items/shield_ground.png");
    scene.load.image(IMAGE_ITEM_STONE_GROUND, "assets/sprites/items/stone_ground.png");
    //
    //
    // CURSE EFFECTS
    scene.load.image(IMAGE_CURSE_FOG, "assets/sprites/curse_effects/fog.png");
    scene.load.image(IMAGE_CURSE_SLOT_CLOSED, "assets/sprites/curse_effects/inventory_slot_closed.png");
    scene.load.image(IMAGE_CURSE_SLOT_WEB, "assets/sprites/curse_effects/inventory_slot_web.png");
}
