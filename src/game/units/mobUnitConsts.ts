import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, IMobRewardType, EItemAfterDuelBonusType, IMobsVariants } from "../../types";
import { i18n } from "../consts";
import { itemCoin, itemPeasantPitchfork, itemPeasantPitchfork_2 } from "../mobItemConsts";
import { noBasicAttackSkill } from "../skills/commonSkillConsts";
import { peasantLastStandSkill, peasantsStronkSkill } from "../skills/mobs/peasantMobSkills";
import { mobNoSkill } from "../skills/mobSkills";

export const PEASANT_ID = "PEASANT";
export const WOLF_ID = "WOLF1";
export const STRONG_WOLF_ID = "WOLF2";
export const BOSS_MINOTAUR_ID = "BOSSMINOTAUR";

export const peasantUnit_4: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 5,
    basicAttackTimes: 1,
    basicMaxHp: 20,
    basicHpRegen: 2,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.PEASANT,
    id: PEASANT_ID,
    skills: [noBasicAttackSkill, peasantsStronkSkill],
    items: [],
    level: 4,
    exp: 0,
    mobItems: [
        { item: itemPeasantPitchfork, probability: 20 }, // 20%
        { item: itemCoin, probability: 12 }, // 10% ~ 10/0.8
        { item: itemPeasantPitchfork_2, probability: 14 }, // 10% ~ 10/0.8/0.88
        // nothing = 100*0.80*0.88*0.86
        { skill: peasantsStronkSkill, probability: 16 },
    ],
};

export const peasantUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.ORDER, EHeroClass.MOB],
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
    name: i18n.units.PEASANT,
    id: PEASANT_ID,
    skills: [mobNoSkill, peasantLastStandSkill, noBasicAttackSkill],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemPeasantPitchfork, probability: 25 },
        { item: itemCoin, probability: 20 }, // 15% ~ 15/(100-25)
        // nothing = 100*0.75*0.80
        { skill: peasantLastStandSkill, probability: 16 }, // ~10%
    ],
};
