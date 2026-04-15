import { Scene } from "phaser";

export const IMAGE_SKILL_PHYS_ATTACK = "IMAGE_SKILL_PHYS_ATTACK";
export const IMAGE_SKILL_BARD_BUFF_1 = "IMAGE_SKILL_BARD_BUFF_1";
export const IMAGE_SKILL_BARD_BUFF_2 = "IMAGE_SKILL_BARD_BUFF_2";
export const IMAGE_SKILL_SHIELD_BUFF_1 = "IMAGE_SKILL_SHIELD_BUFF_1";

export const IMAGE_SKILL_BURN = "IMAGE_SKILL_BURN";
export const IMAGE_SKILL_LIGHTNING = "IMAGE_SKILL_LIGHTNING";
export const IMAGE_SKILL_SUMMON_FIREFLY = "IMAGE_SKILL_SUMMON_FIREFLY";
export const IMAGE_SKILL_SUMMON_SPIRIT = "IMAGE_SKILL_SUMMON_SPIRIT";
export const IMAGE_SKILL_POISON = "IMAGE_SKILL_POISON";
export const IMAGE_SKILL_MAGIC_MISSILES = "IMAGE_SKILL_MAGIC_MISSILES";

export const IMAGE_SKILL_REGEN = "IMAGE_SKILL_REGEN";
export const IMAGE_SKILL_TOTEM_1 = "IMAGE_SKILL_TOTEM_1";
export const IMAGE_SKILL_SWORD_BUFF = "IMAGE_SKILL_SWORD_BUFF";
export const IMAGE_SKILL_SWORD_BUFF_2 = "IMAGE_SKILL_SWORD_BUFF_2";
export const IMAGE_SKILL_AXE_BUFF = "IMAGE_SKILL_AXE_BUFF";
export const IMAGE_SKILL_HEAL_1 = "IMAGE_SKILL_HEAL_1";
export const IMAGE_SKILL_TEST = "IMAGE_SKILL_TEST";

export const IMAGE_SKILL_WORTHY_FOE = "IMAGE_SKILL_WORTHY_FOE";
export const IMAGE_FEINT_ATTACK = "IMAGE_FEINT_ATTACK";
export const IMAGE_SKILL_OVERCOME = "IMAGE_SKILL_OVERCOME";
export const IMAGE_FIREFLY_SELF_POISON = "IMAGE_FIREFLY_SELF_POISON";
export const IMAGE_SKILL_CLEAVE = "IMAGE_SKILL_CLEAVE";
export const IMAGE_SKILL_CHAIN = "IMAGE_SKILL_CHAIN";
export const IMAGE_SKILL_CLEAR = "IMAGE_SKILL_CLEAR";
export const IMAGE_SKILL_DUEL = "IMAGE_SKILL_DUEL";

// LEVEL 2

export const IMAGE_SKILL_DARK_21 = "IMAGE_SKILL_DARK_21";
export const IMAGE_SKILL_DARK_22 = "IMAGE_SKILL_DARK_22";
export const IMAGE_SKILL_BATTLE = "IMAGE_SKILL_BATTLE"; //battle
export const IMAGE_SKILL_DRAGON_FIRE = "IMAGE_SKILL_DRAGON_FIRE"; //dragon_fire
export const IMAGE_SKILL_POISON_FLOWER = "IMAGE_SKILL_POISON_FLOWER"; //flower_poison
export const IMAGE_SKILL_KNIGHT = "IMAGE_SKILL_KNIGHT"; //knight
export const IMAGE_SKILL_KNIGHT_MAGIC = "IMAGE_SKILL_KNIGHT_MAGIC"; // knight_magic
export const IMAGE_SKILL_KNIGHT_SHIELD = "IMAGE_SKILL_KNIGHT_SHIELD"; // knight_shield
export const IMAGE_SKILL_MAGIC_FIGHT = "IMAGE_SKILL_MAGIC_FIGHT"; //magic_fight
export const IMAGE_SKILL_MAGIC_HAND = "IMAGE_SKILL_MAGIC_HAND"; //magic_hand
export const IMAGE_SKILL_DARK_MISSILES_RAIN = "IMAGE_SKILL_DARK_MISSILES_RAIN"; // missiles_rain
export const IMAGE_SKILL_NATURE_SHIELD = "IMAGE_SKILL_NATURE_SHIELD"; // nature_shield
export const IMAGE_SKILL_RAGE = "IMAGE_SKILL_RAGE"; // rage
export const IMAGE_SKILL_SHOCK_HAND = "IMAGE_SKILL_SHOCK_HAND"; //shock_hand
export const IMAGE_SKILL_SKULL_KNIFE = "IMAGE_SKILL_SKULL_KNIFE"; //skull_knife
export const IMAGE_SKILL_SKULLS = "IMAGE_SKILL_SKULLS"; //skulls
export const IMAGE_SKILL_VINES_ARMOR = "IMAGE_SKILL_VINES_ARMOR"; // vines_armor
export const IMAGE_SKILL_WARLOCK_SPELL = "IMAGE_SKILL_WARLOCK_SPELL"; // warlock_spell
export const IMAGE_SKILL_YELLOW_EXPLOSION = "IMAGE_SKILL_YELLOW_EXPLOSION"; // yellow_explosion
export const IMAGE_SKILL_YELLOW_FLAME = "IMAGE_SKILL_YELLOW_FLAME";
export const IMAGE_SKILL_BLOOD_KNIFE = "IMAGE_SKILL_BLOOD_KNIFE"; // free
export const IMAGE_SKILL_DOUBLE_SWORD = "IMAGE_SKILL_DOUBLE_SWORD";
export const IMAGE_SKILL_HEAL_2 = "IMAGE_SKILL_HEAL_2";
export const IMAGE_SKILL_PRIEST_SCROLL = "IMAGE_SKILL_PRIEST_SCROLL";
export const IMAGE_SKILL_SUMMON_SHIELD = "IMAGE_SKILL_SUMMON_SHIELD";
export const IMAGE_SKILL_SUMMON_SWORD = "IMAGE_SKILL_SUMMON_SWORD";
export const IMAGE_SKILL_TOTEM_EMPOWER_2 = "IMAGE_SKILL_TOTEM_EMPOWER_2";
export const IMAGE_SKILL_YELLOW_CROWN = "IMAGE_SKILL_YELLOW_CROWN";
export const IMAGE_SKILL_SUMMON_WITH_SHIELD = "IMAGE_SKILL_SUMMON_WITH_SHIELD";

const prefix = "assets/sprites/skills/";

export function loadSkillImages(scene: Scene) {
    // LEVEL 1
    scene.load.image(IMAGE_SKILL_PHYS_ATTACK, "assets/sprites/skills/sword_attack_100.png");
    scene.load.image(IMAGE_SKILL_BARD_BUFF_1, "assets/sprites/skills/bard_buff_1.png");
    scene.load.image(IMAGE_SKILL_BARD_BUFF_2, "assets/sprites/skills/bard_buff_2.png");
    scene.load.image(IMAGE_SKILL_SHIELD_BUFF_1, "assets/sprites/skills/shield_empower.png");

    scene.load.image(IMAGE_SKILL_BURN, "assets/sprites/skills/burn.png");
    scene.load.image(IMAGE_SKILL_LIGHTNING, "assets/sprites/skills/lightning.png");
    scene.load.image(IMAGE_SKILL_SUMMON_FIREFLY, "assets/sprites/skills/summon_1.png");
    scene.load.image(IMAGE_SKILL_SUMMON_SPIRIT, "assets/sprites/skills/summon_2.png");
    scene.load.image(IMAGE_SKILL_POISON, "assets/sprites/skills/poison1.png");
    scene.load.image(IMAGE_SKILL_MAGIC_MISSILES, "assets/sprites/skills/magic_missiles.png");

    scene.load.image(IMAGE_SKILL_REGEN, "assets/sprites/skills/regen.png");
    scene.load.image(IMAGE_SKILL_TOTEM_1, "assets/sprites/skills/summon_totem_1.png");
    scene.load.image(IMAGE_SKILL_SWORD_BUFF, "assets/sprites/skills/sword_buff.png");
    scene.load.image(IMAGE_SKILL_SWORD_BUFF_2, "assets/sprites/skills/sword_buff_2.png");
    scene.load.image(IMAGE_SKILL_AXE_BUFF, "assets/sprites/skills/empower_axe.png");
    scene.load.image(IMAGE_SKILL_HEAL_1, "assets/sprites/skills/holy_spell_1.png");
    scene.load.image(IMAGE_SKILL_TEST, "assets/sprites/skills/skills_test.png");

    //scene.load.image(IMAGE_SKILL_WORTHY_FOE, "assets/sprites/skills/worthy_foe.png");
    //scene.load.image(IMAGE_FEINT_ATTACK, "assets/sprites/skills/feint_attack.png");
    //scene.load.image(IMAGE_SKILL_OVERCOME, "assets/sprites/skills/overcome.png");
    scene.load.image(IMAGE_FIREFLY_SELF_POISON, "assets/sprites/skills/firefly_self_poison.png");
    scene.load.image(IMAGE_SKILL_CLEAVE, "assets/sprites/skills/cleave.png");
    //
    scene.load.image(IMAGE_SKILL_CHAIN, "assets/sprites/skills/chain.png");
    scene.load.image(IMAGE_SKILL_CLEAR, "assets/sprites/skills/clear.png");
    scene.load.image(IMAGE_SKILL_DUEL, "assets/sprites/skills/duel.png");
    //
    // LEVEL 2
    scene.load.image(IMAGE_SKILL_DARK_21, prefix + "2/dark_21.png");
    scene.load.image(IMAGE_SKILL_DARK_22, prefix + "2/dark_22.png");
    scene.load.image(IMAGE_SKILL_BATTLE, prefix + "2/battle.png");
    scene.load.image(IMAGE_SKILL_DRAGON_FIRE, prefix + "2/dragon_fire.png");
    scene.load.image(IMAGE_SKILL_POISON_FLOWER, prefix + "2/flower_poison.png");
    scene.load.image(IMAGE_SKILL_KNIGHT, prefix + "2/knight.png");
    scene.load.image(IMAGE_SKILL_KNIGHT_MAGIC, prefix + "2/knight_magic.png"); // free
    scene.load.image(IMAGE_SKILL_KNIGHT_SHIELD, prefix + "2/knight_shield.png");
    scene.load.image(IMAGE_SKILL_MAGIC_FIGHT, prefix + "2/magic_fight.png");
    scene.load.image(IMAGE_SKILL_MAGIC_HAND, prefix + "2/magic_hand.png");
    scene.load.image(IMAGE_SKILL_DARK_MISSILES_RAIN, prefix + "2/missiles_rain.png"); // free
    scene.load.image(IMAGE_SKILL_NATURE_SHIELD, prefix + "2/nature_shield.png"); // free
    scene.load.image(IMAGE_SKILL_RAGE, prefix + "2/rage.png");
    scene.load.image(IMAGE_SKILL_SHOCK_HAND, prefix + "2/shock_hand.png");
    scene.load.image(IMAGE_SKILL_SKULL_KNIFE, prefix + "2/skull_knife.png");
    scene.load.image(IMAGE_SKILL_SKULLS, prefix + "2/skulls.png"); // free
    scene.load.image(IMAGE_SKILL_VINES_ARMOR, prefix + "2/vines_armor.png");
    scene.load.image(IMAGE_SKILL_WARLOCK_SPELL, prefix + "2/warlock_spell.png"); // free
    scene.load.image(IMAGE_SKILL_YELLOW_EXPLOSION, prefix + "2/yellow_explosion.png");
    scene.load.image(IMAGE_SKILL_YELLOW_FLAME, prefix + "2/yellow_flame.png");
    scene.load.image(IMAGE_SKILL_BLOOD_KNIFE, prefix + "2/blood_knife_2.png");
    scene.load.image(IMAGE_SKILL_DOUBLE_SWORD, prefix + "2/double_attack.png");
    scene.load.image(IMAGE_SKILL_HEAL_2, prefix + "2/heal_2.png");
    scene.load.image(IMAGE_SKILL_PRIEST_SCROLL, prefix + "2/priest_scroll.png");
    scene.load.image(IMAGE_SKILL_SUMMON_SHIELD, prefix + "2/summon_shield.png");
    scene.load.image(IMAGE_SKILL_SUMMON_SWORD, prefix + "2/summon_sword.png");
    scene.load.image(IMAGE_SKILL_TOTEM_EMPOWER_2, prefix + "2/totem_empower_2.png");
    //
    scene.load.image(IMAGE_SKILL_YELLOW_CROWN, prefix + "2/shield_summon.png");
    scene.load.image(IMAGE_SKILL_SUMMON_WITH_SHIELD, prefix + "2/yellow_crown.png");
}
