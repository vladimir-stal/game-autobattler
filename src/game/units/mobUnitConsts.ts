import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, IMobRewardType, EItemAfterDuelBonusType, IMobsVariants } from "../../types";
import { basic_boots, basic_hat, basic_jacket, basic_pants, basic_ring_damage, basic_ring_regen } from "../commonItemConsts";
import { i18n } from "../consts";
import { itemCoin, itemGoblinBoneDagger, itemGoblinSilverCoin, itemPeasantPitchfork, itemSpiritSpear, regenMantle } from "../mobItemConsts";
import { goblinApplyShock, goblinShamanHpRegIncr } from "../skills/mobSkills";
import { warriorSummon, warriorSummon_3 } from "../skills/summonSkillConsts2";

export const peasantUnit_4: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 10,
    basicAttackTimes: 1,
    basicMaxHp: 30,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Peasant",
    id: "PEASANT",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 },
        { item: itemPeasantPitchfork, probability: 20 },
    ],
};

export const peasantUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 3,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Peasant",
    id: "PEASANT",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 },
        { item: itemPeasantPitchfork, probability: 20 },
    ],
};
