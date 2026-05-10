import { peasantLastStandSkill } from "../skills/mobs/peasantMobSkills";
import { chainToNextSkill } from "../skills/commonSkillConsts";
import { mobNoSkill } from "../skills/mobSkills";
import { peasantUnit } from "./peasantMobUnits";

export const WOLF_ID = "WOLF1";
export const STRONG_WOLF_ID = "WOLF2";
export const BOSS_MINOTAUR_ID = "BOSSMINOTAUR";

// PEASANTS

export const peasantUnit_1 = { ...peasantUnit, skills: [] };

export const peasantUnit_2 = { ...peasantUnit, skills: [mobNoSkill, peasantLastStandSkill, chainToNextSkill] };
