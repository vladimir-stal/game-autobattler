import { bardSkills, bardSkills_2, bardSkills_3 } from "./skills/bardSkillConsts";
import {
    attackWithBleedSkill,
    mixedClassSkills1,
    chainToNextSkill,
    chainBasicAttackSkill,
    phycisalAttackSkill,
    statusesIntoHeal,
} from "./skills/commonSkillConsts";
import { darkSkills, darkSkills_2, darkSkills_3 } from "./skills/darkSkillConsts";
import { magicSkills, magicSkills_2, magicSkills_3 } from "./skills/magicSkillConsts";
import { masterSkills, masterSkills_2, masterSkills_3 } from "./skills/masterSkillConsts";
import { orderSkills, orderSkills_2, orderSkills_3 } from "./skills/orderSkillConsts";
import { priestSkills, priestSkills_2, priestSkills_3 } from "./skills/priestSkillConsts";
import { summonSkills, summonSkills_2, summonSkills_3 } from "./skills/summonSkillConsts2";
import { warriorSkills, warriorSkills_2, warriorSkills_3 } from "./skills/warriorSkillConsts";
import { wildSkills, wildSkills_2, wildSkills_3 } from "./skills/wildSkillConsts";

export const BASIC_CLASS_MAX_SKILL_COUNT = 2;
export const MC_CLASS_MAX_SKILL_COUNT = 4;

export const SKILL_MAX_LEVEL = 3;

// skill price for skill level
export const skillPrices: Record<number, number> = {
    1: 4,
    2: 6,
    3: 8,
    4: 10,
    5: 13,
    6: 16,
    7: 18,
    8: 20,
    9: 24,
    10: 28,
};

////////////////////////////////////////////////////////////////////////////////////////////////////

// All basic classes basic skills
export const allBasicClassesSkills = [
    ...bardSkills,
    ...darkSkills,
    ...magicSkills,
    ...masterSkills,
    ...orderSkills,
    ...priestSkills,
    ...summonSkills,
    ...warriorSkills,
    ...wildSkills,
    ...mixedClassSkills1,
].filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
});

// All basic classes skills level 2
export const allClassesSkills_2 = [
    ...bardSkills_2,
    ...darkSkills_2,
    ...magicSkills_2,
    ...masterSkills_2,
    ...orderSkills_2,
    ...priestSkills_2,
    ...summonSkills_2,
    ...warriorSkills_2,
    ...wildSkills_2,
    chainToNextSkill,
    //onlyBasicAttackSkill, // level 3
].filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
});

// All basic classes skills level 3
export const allClassesSkills_3 = [
    ...bardSkills_3,
    ...darkSkills_3,
    ...magicSkills_3,
    ...masterSkills_3,
    ...orderSkills_3,
    ...priestSkills_3,
    ...summonSkills_3,
    ...warriorSkills_3,
    ...wildSkills_3,
    chainToNextSkill,
    chainBasicAttackSkill,
].filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
});
