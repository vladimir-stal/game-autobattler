import { ETargetType, EHeroAttackType, EHeroClass, IUnit, EUnitType, EItemAfterDuelBonusType, EDebuffType } from "../../types";
import { i18n } from "../consts";
import { itemCoin, itemCoin2, itemGoblinBoneDagger, itemGoblinGoldCoin, itemGoblinSilverCoin } from "../mobItemConsts";
import { chainToNextSkill } from "../skills/commonSkillConsts";
import { goblinApplyShock, goblinPocketSand, goblinShamanHpRegIncr, goldGoblinBuff } from "../skills/mobs/goblinMobSkills";
import { mobNoSkill, mobCheerSkill, mobAmbushSkill } from "../skills/mobSkills";

export const weakGoblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.WARRIOR, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WEAKGOBLIN,
    id: "WEAKGOBLIN",
    skills: [mobNoSkill, goblinPocketSand, chainToNextSkill],
    items: [],
    level: 1,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 40 },
        { skill: goblinPocketSand, probability: 17 }, // ~10%
    ],
};

export const goblinUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.MAGIC, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 8,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.GOBLIN,
    id: "GOBLIN",
    skills: [chainToNextSkill, goblinApplyShock],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 20 },
        { item: itemGoblinBoneDagger, probability: 12 },
        { item: itemCoin2, probability: 14 },
        // 100*0.80*0.88*0.86 = 60% not to get anything
        { skill: goblinApplyShock, probability: 16 },
    ],
};

export const goblinShamanUnit: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.WILD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY, //??? ETargetType.MARKED_ENEMY
    //basicAttackMarkType: EDebuffType.MARK_WORTHY_FOE,
    basicAttack: 4,
    basicAttackTimes: 1,
    basicMaxHp: 14,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.GOBLINSHAMAN,
    id: "GOBLINSHAMAN",
    skills: [chainToNextSkill, goblinShamanHpRegIncr],
    items: [],
    level: 2,
    exp: 0,
    mobItems: [
        { item: itemCoin, probability: 15 },
        { item: itemGoblinSilverCoin, probability: 17 },
        { item: itemGoblinBoneDagger, probability: 14 },
        // 100*0.85*0.83*0.86 = 60% not to get anything
        { skill: goblinShamanHpRegIncr, probability: 16 },
    ],
};

export const goldGoblin1Unit: IUnit = {
    // Rewards and shop variant (NOT FOR COMBAT)
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.BARD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 1,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    //name: "Goblin trader",
    name: i18n.units.GOLDGOBLIN1,
    id: "GOLDGOBLIN1",
    skills: [],
    items: [],
    level: 3,
    exp: 0,
    afterDuelBonuses: [{ type: EItemAfterDuelBonusType.GOLD, value: 1 }],
    mobItems: [
        { item: itemCoin, probability: 15 }, // 15%
        { item: itemCoin2, probability: 17 }, // 15% ~ 15/0.85
        { item: itemGoblinBoneDagger, probability: 14 }, // 10% ~ 10/(0.85*0.83)
        { item: itemGoblinSilverCoin, probability: 41 }, // 25/(0.85*0.83*0.86)
        { skill: goldGoblinBuff, probability: 28 }, // ~10%
        { item: itemGoblinGoldCoin, probability: 100 }, // ~25%
    ],
};

export const goldGoblinBattleUnit: IUnit = {
    // combat variant
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.BARD, EHeroClass.MOB],
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.RANDOM_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 2,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 10,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.GOLDGOBLIN1, //name: "Goblin trader"
    id: "GOLDGOBLIN1",
    skills: [mobNoSkill, goldGoblinBuff, chainToNextSkill, chainToNextSkill],
    items: [],
    level: 3,
    exp: 0,
    afterDuelBonuses: [],
    mobItems: [],
};

export const cheeringGoblinUnit_skills: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.BARD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WEAKGOBLIN, // Cheer goblin
    id: "WEAKGOBLIN",
    skills: [mobNoSkill, mobCheerSkill, chainToNextSkill, chainToNextSkill], // rotation 2 rounds
    items: [],
    level: 1,
    exp: 0,
    mobItems: [{ item: itemCoin, probability: 40 }],
};

export const cheeringGoblinUnit_attacks: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MOB,
    mobHeroClasses: [EHeroClass.BARD, EHeroClass.MOB],
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 2,
    basicAttackTimes: 1,
    basicMaxHp: 5,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: i18n.units.WEAKGOBLIN, // Cheer goblin
    id: "WEAKGOBLIN",
    skills: [chainToNextSkill, mobAmbushSkill, mobNoSkill, chainToNextSkill], // rotation 2 rounds
    items: [],
    level: 1,
    exp: 0,
    mobItems: [{ item: itemCoin, probability: 40 }],
};
