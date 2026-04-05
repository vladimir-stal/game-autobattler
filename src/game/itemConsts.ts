import { EHeroClass, EItemAfterDuelBonusType, EItemBattleBonusType, EItemBonusType, EItemType, EWeaponItemType, IItem, IItemBattleBonus } from "../types";
import { axe1, dagger1, mace1, musical1, scepter1, shield1, staff1, sword1, totem1, wand1 } from "./basicWeaponItemConsts";
import {
    basic_boots,
    basic_exp_bag,
    basic_gold_bag,
    basic_hat,
    basic_heal,
    basic_jacket,
    basic_pants,
    basic_ring_damage,
    basic_ring_regen,
} from "./commonItemConsts";
import {
    armor_amulet,
    boots21,
    gloves_magic2,
    gloves_priest2,
    gloves_war2,
    hat21,
    hp_amulet,
    jacket21,
    pants21,
    ring_damage2,
    ring_heal2,
    ring_regen2,
} from "./commonItemConsts2";
import { crit_amulet, evasion_amulet, summonerMantle3 } from "./commonItemConsts3";
import { armorMassHp, helmetMassArmor } from "./commonItemConsts4";
import { weaponSlotSheath } from "./commonItemConsts5";
import {
    axe21,
    axe22,
    dagger21,
    dagger22,
    mace21,
    mace22,
    musical21,
    scepter21,
    scepter22,
    shield21,
    shield22,
    staff21,
    staff22,
    sword21,
    sword22,
    totem21,
    totem22,
    wand21,
    wand22,
} from "./weaponItem2Consts";
import {
    axe31,
    axe32,
    dagger31,
    dagger32,
    mace31,
    magicBook31,
    magicSpear31,
    musical31,
    musical32,
    scepter31,
    shield31,
    shield32,
    staff31,
    sword31,
    totem31,
    totem32,
    wand31,
} from "./weaponItem3Consts";
import { totem41 } from "./weaponItem4Consts";
import { dagger5_ba, music5AddBuffTarget, staff5MagicCrit, totem5HptoDmg, wand5ShockOnBA } from "./weaponItem5Consts";

export const ITEM_MAX_LEVEL = 5;

////// LVL 1

export const basicCommonItems = [
    basic_hat,
    basic_pants,
    basic_jacket,
    basic_boots,
    basic_ring_regen,
    basic_ring_damage,
    basic_exp_bag,
    basic_heal,
    basic_gold_bag,
];

export const basicWeapons = [axe1, dagger1, mace1, musical1, scepter1, shield1, staff1, sword1, totem1, wand1];

export const basicItems = basicCommonItems.concat(basicWeapons);

////// LVL 2

export const commonItemsLvl2 = [
    hat21,
    boots21,
    jacket21,
    pants21,
    gloves_war2,
    gloves_magic2,
    gloves_priest2,
    armor_amulet,
    hp_amulet,
    ring_heal2,
    ring_damage2,
    ring_regen2,
];

export const weaponsLvl2 = [
    axe21,
    axe22,
    dagger21,
    dagger22,
    mace21,
    mace22,
    musical21,
    scepter21,
    scepter22,
    shield21,
    shield22,
    staff21,
    staff22,
    sword21,
    sword22,
    totem21,
    totem22,
    wand21,
    wand22,
];

export const itemsLvl2 = weaponsLvl2.concat(commonItemsLvl2);

////// LVL 3

export const commonItemsLvl3 = [evasion_amulet, crit_amulet, summonerMantle3];
export const weaponsLvl3 = [
    axe31,
    axe32,
    dagger31,
    dagger32,
    mace31,
    musical31,
    musical32,
    scepter31,
    shield31,
    shield32,
    staff31,
    sword31,
    totem31,
    totem32,
    wand31,
    magicBook31,
    magicSpear31,
];
export const itemsLvl3 = weaponsLvl3.concat(commonItemsLvl3);

////// LVL 4

export const commonItemsLvl4 = [armorMassHp, helmetMassArmor];
export const weaponsLvl4 = [totem41];
export const itemsLvl4 = weaponsLvl4.concat(commonItemsLvl4);

////// LVL 5 (LEGENDARY)

export const commonItemsLvl5 = [weaponSlotSheath];
export const weaponsLvl5 = [dagger5_ba, staff5MagicCrit, music5AddBuffTarget, totem5HptoDmg, wand5ShockOnBA];
export const itemsLvl5 = weaponsLvl5.concat(commonItemsLvl5);

//
//

export const itemBattleBonuseTypes = [
    EItemBattleBonusType.INCREASE_DAMAGE_TO_ARMOR,
    EItemBattleBonusType.INCREASE_DAMAGE_TO_BLEEDING,
    EItemBattleBonusType.INCREASE_DAMAGE_TO_HP,
    EItemBattleBonusType.INCREASE_DAMAGE_TO_POISONED,
    EItemBattleBonusType.INCREASE_DAMAGE_TO_SUMMON,
];

//TODO начать тут - вместо оружия common
export const basicItemsByClass: Partial<Record<EHeroClass, IItem[]>> = {
    [EHeroClass.BARD]: [musical1, dagger1],
    [EHeroClass.DARK]: [wand1, totem1],
    [EHeroClass.MAGIC]: [staff1, wand1],
    [EHeroClass.MASTER]: [sword1, axe1],
    [EHeroClass.ORDER]: [mace1, shield1],
    [EHeroClass.SUMMON]: [staff1, scepter1],
    [EHeroClass.WARRIOR]: [sword1, shield1],
    [EHeroClass.WILD]: [axe1, totem1],
};

export const basicWeaponItemsByClass: Partial<Record<EHeroClass, IItem[]>> = {
    [EHeroClass.BARD]: [musical1, dagger1],
    [EHeroClass.DARK]: [wand1, totem1],
    [EHeroClass.MAGIC]: [staff1, wand1],
    [EHeroClass.MASTER]: [sword1, axe1],
    [EHeroClass.ORDER]: [mace1, shield1],
    [EHeroClass.SUMMON]: [staff1, scepter1],
    [EHeroClass.WARRIOR]: [sword1, shield1],
    [EHeroClass.WILD]: [axe1, totem1],
};
