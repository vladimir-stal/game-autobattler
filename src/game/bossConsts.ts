import {
    ETargetType,
    EHeroAttackType,
    EHeroClass,
    IUnit,
    EUnitType,
    TUnits,
    IMobReward,
    IMobRewardType,
    EItemAfterDuelBonusType,
    IMobsVariants,
    THeroSkills,
    EHeroSkillType,
} from "../types";
import { basic_boots, basic_hat, basic_jacket, basic_pants } from "./commonItemConsts";
import { itemGoblinBoneDagger, itemGoblinSilverCoin, itemPeasantPitchfork } from "./mobItemConsts";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

// BOSS MINOTAUR

const minotaurSkills: THeroSkills = [
    {
        id: "MinotaurTotemSkill",
        name: "Minotaur totem",
        desc: "Summons a totem that heals",
        level: 1,
        heroClasses: [EHeroClass.WILD],
        skills: [
            {
                type: EHeroSkillType.TOTEM,
                isBasicAttack: true,
                totem: {
                    id: "MinotaurTotem",
                    name: "Minotaur Totem",
                    skills: [
                        {
                            type: EHeroSkillType.HEAL,
                            isBasicAttack: false,
                            value: 5,
                            valueType: "number",
                            targetType: ETargetType.FIRST_ALLY,
                        },
                    ],
                },
            },
        ],
    },
    {
        id: "MinotaurEarthquake",
        name: "Minotaur Earthquake",
        desc: "Deal damage to all ememies",
        level: 1,
        heroClasses: [EHeroClass.WILD],
        skills: [
            {
                type: EHeroSkillType.ATTACK,
                isBasicAttack: true,
                value: 5,
                valueType: "number",
                targetType: ETargetType.ALL_ENEMIES,
                attackType: EHeroAttackType.PHYSICAL,
            },
        ],
    },
];

export const bossMinotaur: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.WARRIOR,
    attackType: EHeroAttackType.PHYSICAL,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 10,
    basicAttackTimes: 1,
    basicMaxHp: 50,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Minotaur",
    id: "BOSSMINOTAUR",
    skills: minotaurSkills,
    items: [],
    level: 5,
    exp: 0,
};

export const bosses = [bossMinotaur];
