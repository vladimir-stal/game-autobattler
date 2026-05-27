import {
    ETargetType,
    EHeroAttackType,
    EHeroClass,
    IUnit,
    EUnitType,
    THeroSkills,
    EHeroSkillType,
    AnimationType,
    IBossFight,
    IHeroSkillSet,
    ESkillCondition,
} from "../types";
import { i18n } from "./consts";
import { TOTEM_ID_BOSS_MINOTAUR } from "./totemConsts";
import { cheeringGoblinUnit_attacks, cheeringGoblinUnit_skills, goldGoblinBattleUnit } from "./units/goblinMobUnits";
import { BOSS_MINOTAUR_ID } from "./units/mobUnitConsts";

export const BASIC_CLASS_MAX_ITEM_COUNT = 2;
export const MC_CLASS_MAX_ITEM_COUNT = 4;

export const BASIC_CLASS_MAX_WEAPON_COUNT = 1;
export const MC_CLASS_MAX_WEAPON_COUNT = 2;

// BOSS MINOTAUR

const minotaurEarthquakeSkill: IHeroSkillSet = {
    id: "MinotaurEarthquake",
    name: "Minotaur Earthquake",
    desc: "Deal damage to all ememies",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.ATTACK,
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ENEMIES,
            attackType: EHeroAttackType.PHYSICAL,
            animation: AnimationType.BOSS_MINOTAUR_STOMP,
        },
    ],
};

const minotaurTotemSkill: IHeroSkillSet = {
    id: "MinotaurTotemSkill",
    name: "Minotaur totem",
    desc: "Summons a totem that heals",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.WILD],
    skills: [
        {
            type: EHeroSkillType.FORCE_TOTEM_ACTION,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_TOTEM,
        },
        {
            type: EHeroSkillType.TOTEM,
            totem: {
                id: TOTEM_ID_BOSS_MINOTAUR,
                name: i18n.totems.minotaurTotem,
                skills: [
                    {
                        type: EHeroSkillType.HEAL,
                        value: 5,
                        valueType: "number",
                        targetType: ETargetType.FIRST_ALLY,
                    },
                ],
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
            animation: AnimationType.BOSS_MINOTAUR_SPELL,
        },
    ],
};

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
    name: i18n.units.BOSS_MINOTAUR,
    id: BOSS_MINOTAUR_ID,
    skills: [minotaurTotemSkill, minotaurEarthquakeSkill, minotaurEarthquakeSkill],
    items: [],
    level: 5,
    exp: 0,
};

export const bosses: IBossFight[] = [
    {
        name: bossMinotaur.name,
        units: [bossMinotaur, cheeringGoblinUnit_skills, cheeringGoblinUnit_attacks, goldGoblinBattleUnit],
    },
    {
        name: bossMinotaur.name,
        units: [bossMinotaur, cheeringGoblinUnit_attacks, cheeringGoblinUnit_skills, goldGoblinBattleUnit],
    },
];
