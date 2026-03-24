//

import { Scene } from "phaser";

// ITEMS

export const IMAGE_ITEM_COIN = "IMAGE_ITEM_COIN";
// 1
export const IMAGE_ITEM_WAND_1 = "IMAGE_ITEM_WAND_1";
export const IMAGE_ITEM_STAFF_1 = "IMAGE_ITEM_STAFF_1";
export const IMAGE_ITEM_AXE_1 = "IMAGE_ITEM_AXE_1";
export const IMAGE_ITEM_DAGGER_1 = "IMAGE_ITEM_DAGGER_1";
export const IMAGE_ITEM_SWORD_1 = "IMAGE_ITEM_SWORD_1";
export const IMAGE_ITEM_SHIELD_1 = "IMAGE_ITEM_SHIELD_1";
export const IMAGE_ITEM_LUTE_1 = "IMAGE_ITEM_LUTE_1";
export const IMAGE_ITEM_MACE_1 = "IMAGE_ITEM_MACE_1";
export const IMAGE_ITEM_SCEPTER_1 = "IMAGE_ITEM_SCEPTER_1";
export const IMAGE_ITEM_TOTEM_1 = "IMAGE_ITEM_TOTEM_1";
// 2
export const IMAGE_ITEM_WAND_2 = "IMAGE_ITEM_WAND_2";
export const IMAGE_ITEM_STAFF_2 = "IMAGE_ITEM_STAFF_2";
export const IMAGE_ITEM_AXE_2 = "IMAGE_ITEM_AXE_2";
export const IMAGE_ITEM_DAGGER_2 = "IMAIMAGE_ITEM_DAGGER_2GE_ITEM_DAGGER_1";
export const IMAGE_ITEM_SWORD_2 = "IMAGE_ITEM_SWORD_2";
export const IMAGE_ITEM_SHIELD_2 = "IMAGE_ITEM_SHIELD_2";
export const IMAGE_ITEM_LUTE_2 = "IMAGE_ITEM_LUTE_2";
export const IMAGE_ITEM_MACE_2 = "IMAGE_ITEM_MACE_2";
export const IMAGE_ITEM_SCEPTER_2 = "IMAGE_ITEM_SCEPTER_2";
export const IMAGE_ITEM_TOTEM_2 = "IMAGE_ITEM_TOTEM_2";
// 3
export const IMAGE_ITEM_WAND_3 = "IMAGE_ITEM_WAND_3";
export const IMAGE_ITEM_STAFF_3 = "IMAGE_ITEM_STAFF_3";
export const IMAGE_ITEM_AXE_3 = "IMAGE_ITEM_AXE_3";
export const IMAGE_ITEM_DAGGER_3 = "IMAGE_ITEM_DAGGER_3";
export const IMAGE_ITEM_SWORD_3 = "IMAGE_ITEM_SWORD_3";
export const IMAGE_ITEM_SHIELD_3 = "IMAGE_ITEM_SHIELD_3";
export const IMAGE_ITEM_LUTE_3 = "IMAGE_ITEM_LUTE_3";
export const IMAGE_ITEM_MACE_3 = "IMAGE_ITEM_MACE_3";
export const IMAGE_ITEM_SCEPTER_3 = "IMAGE_ITEM_SCEPTER_3";
export const IMAGE_ITEM_TOTEM_3 = "IMAGE_ITEM_TOTEM_3";

export const IMAGE_ITEM_HELM_1 = "IMAGE_ITEM_HELM_1";
export const IMAGE_ITEM_ARMOR_1 = "IMAGE_ITEM_ARMOR_1";
export const IMAGE_ITEM_RING_ATTACK_1 = "IMAGE_ITEM_RING_ATTACK_1";
export const IMAGE_ITEM_RING_REGEN_1 = "IMAGE_ITEM_RING_REGEN_1";
export const IMAGE_ITEM_GOLD_BAG_1 = "IMAGE_ITEM_GOLD_BAG_1";
export const IMAGE_ITEM_RING_EXP_1 = "IMAGE_ITEM_RING_EXP_1";
export const IMAGE_ITEM_RING_HEAL_1 = "IMAGE_ITEM_RING_HEAL_1";
export const IMAGE_ITEM_PANTS_1 = "IMAGE_ITEM_PANTS_1";
export const IMAGE_ITEM_BOOTS_1 = "IMAGE_ITEM_BOOTS_1";
export const IMAGE_ITEM_POTION_1 = "IMAGE_ITEM_POTION_1";

export const IMAGE_ITEM_GLOVES_21 = "IMAGE_ITEM_GLOVES_21";
export const IMAGE_ITEM_DARK_CLOAK = "IMAGE_ITEM_DARK_CLOAK";
export const IMAGE_ITEM_AXE_RED = "IMAGE_ITEM_AXE_RED";
export const IMAGE_ITEM_BOOK_MAGIC = "IMAGE_ITEM_BOOK_MAGIC";

export const IMAGE_ITEM_HOLY_GLOVES_1 = "IMAGE_ITEM_HOLY_GLOVES_1";
export const IMAGE_ITEM_MAGIC_GLOVES_1 = "IMAGE_ITEM_MAGIC_GLOVES_1";
// mob items
export const IMAGE_ITEM_GOBLIN_SILVER_COIN = "IMAGE_ITEM_GOBLIN_SILVER_COIN";
export const IMAGE_ITEM_GOBLIN_GOLD_COIN = "IMAGE_ITEM_GOBLIN_GOLD_COIN";
export const IMAGE_ITEM_GOBLIN_BONE_DAGGER = "IMAGE_ITEM_GOBLIN_BONE_DAGGER";
export const IMAGE_ITEM_PEASANTS_PITCHFORK = "IMAGE_ITEM_PEASANTS_PITCHFORK";
export const IMAGE_ITEM_REGEN_MANTLE = "IMAGE_ITEM_REGEN_MANTLE";
export const IMAGE_ITEM_SPIRIT_SPEAR = "IMAGE_ITEM_SPIRIT_SPEAR";

export function loadImagesItems(scene: Scene) {
    //
    scene.load.image(IMAGE_ITEM_WAND_1, "assets/sprites/items/wand_1.png");
    scene.load.image(IMAGE_ITEM_STAFF_1, "assets/sprites/items/staff_1.png");
    scene.load.image(IMAGE_ITEM_AXE_1, "assets/sprites/items/axe_1.png");
    scene.load.image(IMAGE_ITEM_DAGGER_1, "assets/sprites/items/dagger_1.png");
    scene.load.image(IMAGE_ITEM_SWORD_1, "assets/sprites/items/sword_1.png");
    scene.load.image(IMAGE_ITEM_SHIELD_1, "assets/sprites/items/shield_1.png");
    scene.load.image(IMAGE_ITEM_LUTE_1, "assets/sprites/items/lute_1.png");
    scene.load.image(IMAGE_ITEM_MACE_1, "assets/sprites/items/mace_1.png");
    scene.load.image(IMAGE_ITEM_SCEPTER_1, "assets/sprites/items/scepter_1.png");
    scene.load.image(IMAGE_ITEM_TOTEM_1, "assets/sprites/items/totem_skull_1.png");

    scene.load.image(IMAGE_ITEM_HELM_1, "assets/sprites/items/helm_1.png");
    scene.load.image(IMAGE_ITEM_ARMOR_1, "assets/sprites/items/armor_1.png");
    scene.load.image(IMAGE_ITEM_PANTS_1, "assets/sprites/items/pants_1.png");
    scene.load.image(IMAGE_ITEM_BOOTS_1, "assets/sprites/items/boots_1.png");
    scene.load.image(IMAGE_ITEM_POTION_1, "assets/sprites/items/potion1.png");

    /// LVL 2 WEAPONS

    scene.load.image(IMAGE_ITEM_WAND_2, "assets/sprites/items/2/wand_2.png");
    scene.load.image(IMAGE_ITEM_STAFF_2, "assets/sprites/items/2/staff_2.png");
    scene.load.image(IMAGE_ITEM_AXE_2, "assets/sprites/items/2/axe_2.png");
    scene.load.image(IMAGE_ITEM_DAGGER_2, "assets/sprites/items/2/dagger_2.png");
    scene.load.image(IMAGE_ITEM_SWORD_2, "assets/sprites/items/2/sword_2.png");
    scene.load.image(IMAGE_ITEM_SHIELD_2, "assets/sprites/items/2/shield_2.png");
    scene.load.image(IMAGE_ITEM_LUTE_2, "assets/sprites/items/2/lute_2.png");
    scene.load.image(IMAGE_ITEM_MACE_2, "assets/sprites/items/2/mace_2.png");
    scene.load.image(IMAGE_ITEM_SCEPTER_2, "assets/sprites/items/2/scepter_2.png");
    scene.load.image(IMAGE_ITEM_TOTEM_2, "assets/sprites/items/2/totem_skull_2.png");

    /// LVL 3 WEAPONS

    scene.load.image(IMAGE_ITEM_WAND_3, "assets/sprites/items/3/wand_2.png");
    scene.load.image(IMAGE_ITEM_STAFF_3, "assets/sprites/items/3/wand_2.png");
    scene.load.image(IMAGE_ITEM_AXE_3, "assets/sprites/items/3/axe_3.png");
    scene.load.image(IMAGE_ITEM_DAGGER_3, "assets/sprites/items/3/dagger_2.png");
    scene.load.image(IMAGE_ITEM_SWORD_3, "assets/sprites/items/3/sword_3.png");
    scene.load.image(IMAGE_ITEM_SHIELD_3, "assets/sprites/items/3/shield_2.png");
    //scene.load.image(IMAGE_ITEM_LUTE_3, "assets/sprites/items/3/lute_1.png");
    scene.load.image(IMAGE_ITEM_MACE_3, "assets/sprites/items/3/mace_2.png");
    scene.load.image(IMAGE_ITEM_SCEPTER_3, "assets/sprites/items/3/scepter_2.png");
    scene.load.image(IMAGE_ITEM_TOTEM_3, "assets/sprites/items/3/totem_3.png");

    //

    scene.load.image(IMAGE_ITEM_RING_ATTACK_1, "assets/sprites/items/ring_attack_1.png");
    scene.load.image(IMAGE_ITEM_RING_REGEN_1, "assets/sprites/items/ring_regen_1.png");
    scene.load.image(IMAGE_ITEM_RING_EXP_1, "assets/sprites/items/ring_exp_1.png");
    scene.load.image(IMAGE_ITEM_RING_HEAL_1, "assets/sprites/items/heal_ring_1.png");

    scene.load.image(IMAGE_ITEM_GOLD_BAG_1, "assets/sprites/items/gold_bag_1.png");

    scene.load.image(IMAGE_ITEM_GLOVES_21, "assets/sprites/items/gloves_21.png");
    scene.load.image(IMAGE_ITEM_DARK_CLOAK, "assets/sprites/items/dark_cloak.png");
    scene.load.image(IMAGE_ITEM_AXE_RED, "assets/sprites/items/axe_red.png");
    scene.load.image(IMAGE_ITEM_BOOK_MAGIC, "assets/sprites/items/magic_book.png");

    scene.load.image(IMAGE_ITEM_HOLY_GLOVES_1, "assets/sprites/items/holy_gloves1.png");
    scene.load.image(IMAGE_ITEM_MAGIC_GLOVES_1, "assets/sprites/items/magic_gloves1.png");
    // mob items
    scene.load.image(IMAGE_ITEM_COIN, "assets/sprites/items/gold_coin.png");
    scene.load.image(IMAGE_ITEM_GOBLIN_SILVER_COIN, "assets/sprites/items/goblin_silver_coin.png");
    scene.load.image(IMAGE_ITEM_GOBLIN_GOLD_COIN, "assets/sprites/items/goblin_gold_coin.png");
    scene.load.image(IMAGE_ITEM_GOBLIN_BONE_DAGGER, "assets/sprites/items/mobs/bone_dagger.png");
    scene.load.image(IMAGE_ITEM_PEASANTS_PITCHFORK, "assets/sprites/items/mobs/peasants_pitchfork.png");
    scene.load.image(IMAGE_ITEM_REGEN_MANTLE, "assets/sprites/items/mobs/regenMantle.png");
    scene.load.image(IMAGE_ITEM_SPIRIT_SPEAR, "assets/sprites/items/mobs/spirit_spear.png");
}
