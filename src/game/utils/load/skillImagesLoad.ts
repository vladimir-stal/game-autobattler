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

// LEVEL 2

export const IMAGE_SKILL_DARK_21 = "IMAGE_SKILL_DARK_21";
export const IMAGE_SKILL_DARK_22 = "IMAGE_SKILL_DARK_22";

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

    scene.load.image(IMAGE_SKILL_WORTHY_FOE, "assets/sprites/skills/worthy_foe.png");
    scene.load.image(IMAGE_FEINT_ATTACK, "assets/sprites/skills/feint_attack.png");

    //
    // LEVEL 2
    scene.load.image(IMAGE_SKILL_DARK_21, prefix + "2/dark_21.png");
    scene.load.image(IMAGE_SKILL_DARK_22, prefix + "2/dark_22.png");
}
