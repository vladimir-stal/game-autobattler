import { EDebuffType, EItemBattleBonusType, ETargetType } from "../types";

export const CRIT_MODIFIER = 0.5;
export const EVASION_MODIFIER = 0.5;

export const summonItemBattleBonuses = [EItemBattleBonusType.INCREASE_SUMMON_ATTACK, EItemBattleBonusType.INCREASE_SUMMON_HP];

export const eachTurnDebuffs = [EDebuffType.MARK_BURN];

export const allyTargets = [
    ETargetType.ALL_ALLIES,
    ETargetType.BUFFED_ALLY_RANDOM,
    ETargetType.DEBUFFED_ALLY_RANDOM,
    ETargetType.FIRST_ALLY,
    ETargetType.LOW_HP_ALLY,
    ETargetType.RANDOM_ALLY,
    ETargetType.SELF,
    ETargetType.ALLY_IN_FRONT,
    ETargetType.HIGH_MP_ALLY,
    ETargetType.HIGH_PP_ALLY,
    //ETargetType.
];
