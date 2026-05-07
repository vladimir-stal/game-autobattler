import { Scene } from "phaser";

export const IMAGE_SKILL_PHYS_ATTACK = "sword_attack_100.png";
export const IMAGE_SKILL_BARD_BUFF_1 = "bard_buff_1.png";
export const IMAGE_SKILL_BARD_BUFF_2 = "bard_buff_2.png";
export const IMAGE_SKILL_SHIELD_BUFF_1 = "shield_empower.png";

export const IMAGE_SKILL_BURN = "burn.png";
export const IMAGE_SKILL_LIGHTNING = "lightning.png";
export const IMAGE_SKILL_SUMMON_FIREFLY = "summon_1.png";
export const IMAGE_SKILL_SUMMON_SPIRIT = "summon_2.png";
export const IMAGE_SKILL_POISON = "poison1.png";
export const IMAGE_SKILL_MAGIC_MISSILES = "magic_missiles.png";

export const IMAGE_SKILL_REGEN = "regen.png";
export const IMAGE_SKILL_TOTEM_1 = "summon_totem_1.png";
export const IMAGE_SKILL_SWORD_BUFF = "sword_buff.png";
export const IMAGE_SKILL_SWORD_BUFF_2 = "sword_buff_2.png";
export const IMAGE_SKILL_AXE_BUFF = "empower_axe.png";
export const IMAGE_SKILL_HEAL_1 = "holy_spell_1.png";
export const IMAGE_SKILL_TEST = "2/yellow_flame.png";

export const IMAGE_SKILL_CHAIN = "chain.png";
export const IMAGE_SKILL_CLEAR = "clear.png";
export const IMAGE_SKILL_DUEL = "duel.png";
export const IMAGE_SKILL_MACE_ATTACK = "mace_attack.png";

export const IMAGE_FIREFLY_SELF_POISON = "poison1.png";

// LEVEL 2

export const IMAGE_SKILL_DARK_21 = "2/dark_21.png";
export const IMAGE_SKILL_DARK_22 = "2/dark_22.png";
export const IMAGE_SKILL_BATTLE = "2/battle.png";
export const IMAGE_SKILL_DRAGON_FIRE = "2/dragon_fire.png";
export const IMAGE_SKILL_POISON_FLOWER = "2/flower_poison.png";
export const IMAGE_SKILL_KNIGHT = "2/knight.png";
export const IMAGE_SKILL_KNIGHT_MAGIC = "2/knight_magic.png";
export const IMAGE_SKILL_KNIGHT_SHIELD = "2/knight_shield.png";
export const IMAGE_SKILL_MAGIC_FIGHT = "2/magic_fight.png";
export const IMAGE_SKILL_MAGIC_HAND = "2/magic_hand.png";
export const IMAGE_SKILL_DARK_MISSILES_RAIN = "2/missiles_rain.png";
export const IMAGE_SKILL_NATURE_SHIELD = "2/nature_shield.png";
export const IMAGE_SKILL_RAGE = "2/rage.png";
export const IMAGE_SKILL_SHOCK_HAND = "2/shock_hand.png";
export const IMAGE_SKILL_SKULL_KNIFE = "2/skull_knife.png";
export const IMAGE_SKILL_SKULLS = "2/skulls.png";
export const IMAGE_SKILL_VINES_ARMOR = "2/vines_armor.png";
export const IMAGE_SKILL_WARLOCK_SPELL = "2/warlock_spell.png";
export const IMAGE_SKILL_YELLOW_EXPLOSION = "2/yellow_explosion.png";
export const IMAGE_SKILL_YELLOW_FLAME = "2/yellow_flame.png";
export const IMAGE_SKILL_BLOOD_KNIFE = "2/blood_knife_2.png";
export const IMAGE_SKILL_DOUBLE_SWORD = "2/double_attack.png";
export const IMAGE_SKILL_HEAL_2 = "2/heal_2.png";
export const IMAGE_SKILL_PRIEST_SCROLL = "2/priest_scroll.png";
export const IMAGE_SKILL_SUMMON_SHIELD = "2/summon_shield.png";
export const IMAGE_SKILL_SUMMON_SWORD = "2/summon_sword.png";
export const IMAGE_SKILL_TOTEM_EMPOWER_2 = "2/totem_empower_2.png";
export const IMAGE_SKILL_YELLOW_CROWN = "2/yellow_crown.png";
export const IMAGE_SKILL_SUMMON_WITH_SHIELD = "2/shield_summon.png";
export const IMAGE_SKILL_BURNING_MAN = "2/burning_man.png";

export const IMAGE_MULTIATALAS_SKILLS = "IMAGE_MULTIATALAS_SKILLS";

//TODO: pack in atlas
// MOB SKILLS
export const IMAGE_SKILL_MOB_GOBLIN_REGEN = "IMAGE_SKILL_MOB_GOBLIN_REGEN";
export const IMAGE_SKILL_MOB_GOBLIN_SONG = "IMAGE_SKILL_MOB_GOBLIN_SONG";
export const IMAGE_SKILL_MOB_GOBLIN_SHOCK = "IMAGE_SKILL_MOB_GOBLIN_SHOCK";
export const IMAGE_SKILL_MOB_GOBLIN_SAND = "IMAGE_SKILL_MOB_GOBLIN_SAND";
export const IMAGE_SKILL_MOB_LAST_STAND = "IMAGE_SKILL_MOB_LAST_STAND";
export const IMAGE_SKILL_MOB_POISON_FLAME = "IMAGE_SKILL_MOB_POISON_FLAME";
export const IMAGE_SKILL_MOB_POISON_BLADE = "IMAGE_SKILL_MOB_POISON_BLADE";
export const IMAGE_SKILL_MOB_SKELETON_SHIELD = "IMAGE_SKILL_MOB_SKELETON_SHIELD";
export const IMAGE_SKILL_MOB_PIRATE_BLACK_MARK = "IMAGE_SKILL_MOB_PIRATE_BLACK_MARK";
export const IMAGE_SKILL_MOB_WOLF_CLAWS = "IMAGE_SKILL_MOB_WOLF_CLAWS";
export const IMAGE_SKILL_MOB_FIREFLY_SHOCK = "IMAGE_SKILL_MOB_FIREFLY_SHOCK";
export const IMAGE_SKILL_MOB_FIREFLY_MIST = "IMAGE_SKILL_MOB_FIREFLY_MIST";
export const IMAGE_SKILL_MOB_SPIRIT_SPEARS = "IMAGE_SKILL_MOB_SPIRIT_SPEARS";
export const IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE = "IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE";
export const IMAGE_SKILL_MOB_STRONG_TOGEATHER = "IMAGE_SKILL_MOB_STRONG_TOGEATHER";

const prefix = "assets/sprites/skills/";

export function loadSkillImages(scene: Scene) {
    scene.load.multiatlas(IMAGE_MULTIATALAS_SKILLS, "assets/sprites/skills/skill_atlas.json", "assets/sprites/skills");
    //scene.load.atlas(IMAGE_MULTIATALAS_SKILLS, "assets/sprites/skills/skill_atlas.json", "assets/sprites/skills");

    // MOBS

    scene.load.image(IMAGE_SKILL_MOB_GOBLIN_REGEN, "assets/sprites/skills/mobs/goblin_regen.png");
    scene.load.image(IMAGE_SKILL_MOB_GOBLIN_SONG, "assets/sprites/skills/mobs/goblin_song.png");
    scene.load.image(IMAGE_SKILL_MOB_GOBLIN_SHOCK, "assets/sprites/skills/mobs/goblin_shock.png");
    scene.load.image(IMAGE_SKILL_MOB_GOBLIN_SAND, "assets/sprites/skills/mobs/goblin_pocket_sand.png");
    scene.load.image(IMAGE_SKILL_MOB_LAST_STAND, "assets/sprites/skills/mobs/last_stand.png");
    scene.load.image(IMAGE_SKILL_MOB_POISON_FLAME, "assets/sprites/skills/mobs/posion_flame.png");
    scene.load.image(IMAGE_SKILL_MOB_POISON_BLADE, "assets/sprites/skills/mobs/skeleton_leap.png");
    scene.load.image(IMAGE_SKILL_MOB_SKELETON_SHIELD, "assets/sprites/skills/mobs/skeleton_shield.png");
    scene.load.image(IMAGE_SKILL_MOB_PIRATE_BLACK_MARK, "assets/sprites/skills/mobs/black_mark.png");
    scene.load.image(IMAGE_SKILL_MOB_WOLF_CLAWS, "assets/sprites/skills/mobs/claws.png");
    scene.load.image(IMAGE_SKILL_MOB_FIREFLY_SHOCK, "assets/sprites/skills/mobs/firefly_shock.png");
    scene.load.image(IMAGE_SKILL_MOB_FIREFLY_MIST, "assets/sprites/skills/mobs/mist.png");
    scene.load.image(IMAGE_SKILL_MOB_SPIRIT_SPEARS, "assets/sprites/skills/mobs/spirit_spears.png");
    scene.load.image(IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE, "assets/sprites/skills/mobs/revenge_poke.png");
    scene.load.image(IMAGE_SKILL_MOB_STRONG_TOGEATHER, "assets/sprites/skills/mobs/strong_togeather.png");

    // LEVEL 1
    // scene.load.image(IMAGE_SKILL_PHYS_ATTACK, "assets/sprites/skills/sword_attack_100.png");
    // scene.load.image(IMAGE_SKILL_BARD_BUFF_1, "assets/sprites/skills/bard_buff_1.png");
    // scene.load.image(IMAGE_SKILL_BARD_BUFF_2, "assets/sprites/skills/bard_buff_2.png");
    // scene.load.image(IMAGE_SKILL_SHIELD_BUFF_1, "assets/sprites/skills/shield_empower.png");
    // scene.load.image(IMAGE_SKILL_BURN, "assets/sprites/skills/burn.png");
    // scene.load.image(IMAGE_SKILL_LIGHTNING, "assets/sprites/skills/lightning.png");
    // scene.load.image(IMAGE_SKILL_SUMMON_FIREFLY, "assets/sprites/skills/summon_1.png");
    // scene.load.image(IMAGE_SKILL_SUMMON_SPIRIT, "assets/sprites/skills/summon_2.png");
    // scene.load.image(IMAGE_SKILL_POISON, "assets/sprites/skills/poison1.png");
    // scene.load.image(IMAGE_SKILL_MAGIC_MISSILES, "assets/sprites/skills/magic_missiles.png");
    // scene.load.image(IMAGE_SKILL_REGEN, "assets/sprites/skills/regen.png");
    // scene.load.image(IMAGE_SKILL_TOTEM_1, "assets/sprites/skills/summon_totem_1.png");
    // scene.load.image(IMAGE_SKILL_SWORD_BUFF, "assets/sprites/skills/sword_buff.png");
    // scene.load.image(IMAGE_SKILL_SWORD_BUFF_2, "assets/sprites/skills/sword_buff_2.png");
    // scene.load.image(IMAGE_SKILL_AXE_BUFF, "assets/sprites/skills/empower_axe.png");
    // scene.load.image(IMAGE_SKILL_HEAL_1, "assets/sprites/skills/holy_spell_1.png");
    // scene.load.image(IMAGE_SKILL_TEST, "assets/sprites/skills/skills_test.png");
    // scene.load.image(IMAGE_FIREFLY_SELF_POISON, "assets/sprites/skills/firefly_self_poison.png");
    // scene.load.image(IMAGE_SKILL_CHAIN, "assets/sprites/skills/chain.png");
    // scene.load.image(IMAGE_SKILL_CLEAR, "assets/sprites/skills/clear.png");
    // scene.load.image(IMAGE_SKILL_DUEL, "assets/sprites/skills/duel.png");
    // scene.load.image(IMAGE_SKILL_MACE_ATTACK, "assets/sprites/skills/mace_attack.png");
    //
    // LEVEL 2
    // scene.load.image(IMAGE_SKILL_DARK_21, prefix + "2/dark_21.png");
    // scene.load.image(IMAGE_SKILL_DARK_22, prefix + "2/dark_22.png");
    // scene.load.image(IMAGE_SKILL_BATTLE, prefix + "2/battle.png");
    // scene.load.image(IMAGE_SKILL_DRAGON_FIRE, prefix + "2/dragon_fire.png");
    // scene.load.image(IMAGE_SKILL_POISON_FLOWER, prefix + "2/flower_poison.png");
    // scene.load.image(IMAGE_SKILL_KNIGHT, prefix + "2/knight.png");
    // scene.load.image(IMAGE_SKILL_KNIGHT_MAGIC, prefix + "2/knight_magic.png");
    // scene.load.image(IMAGE_SKILL_KNIGHT_SHIELD, prefix + "2/knight_shield.png");
    // scene.load.image(IMAGE_SKILL_MAGIC_FIGHT, prefix + "2/magic_fight.png");
    // scene.load.image(IMAGE_SKILL_MAGIC_HAND, prefix + "2/magic_hand.png");
    // scene.load.image(IMAGE_SKILL_DARK_MISSILES_RAIN, prefix + "2/missiles_rain.png");
    // scene.load.image(IMAGE_SKILL_NATURE_SHIELD, prefix + "2/nature_shield.png");
    // scene.load.image(IMAGE_SKILL_RAGE, prefix + "2/rage.png");
    // scene.load.image(IMAGE_SKILL_SHOCK_HAND, prefix + "2/shock_hand.png");
    // scene.load.image(IMAGE_SKILL_SKULL_KNIFE, prefix + "2/skull_knife.png");
    // scene.load.image(IMAGE_SKILL_SKULLS, prefix + "2/skulls.png");
    // scene.load.image(IMAGE_SKILL_VINES_ARMOR, prefix + "2/vines_armor.png");
    // scene.load.image(IMAGE_SKILL_WARLOCK_SPELL, prefix + "2/warlock_spell.png"); // free
    // scene.load.image(IMAGE_SKILL_YELLOW_EXPLOSION, prefix + "2/yellow_explosion.png");
    // scene.load.image(IMAGE_SKILL_YELLOW_FLAME, prefix + "2/yellow_flame.png");
    // scene.load.image(IMAGE_SKILL_BLOOD_KNIFE, prefix + "2/blood_knife_2.png");
    // scene.load.image(IMAGE_SKILL_DOUBLE_SWORD, prefix + "2/double_attack.png");
    // scene.load.image(IMAGE_SKILL_HEAL_2, prefix + "2/heal_2.png");
    // scene.load.image(IMAGE_SKILL_PRIEST_SCROLL, prefix + "2/priest_scroll.png");
    // scene.load.image(IMAGE_SKILL_SUMMON_SHIELD, prefix + "2/summon_shield.png");
    // scene.load.image(IMAGE_SKILL_SUMMON_SWORD, prefix + "2/summon_sword.png");
    // scene.load.image(IMAGE_SKILL_TOTEM_EMPOWER_2, prefix + "2/totem_empower_2.png");
    // scene.load.image(IMAGE_SKILL_YELLOW_CROWN, prefix + "2/yellow_crown.png");
    // scene.load.image(IMAGE_SKILL_SUMMON_WITH_SHIELD, prefix + "2/shield_summon.png");
    // scene.load.image(IMAGE_SKILL_BURNING_MAN, prefix + "2/burning_man.png");
}
