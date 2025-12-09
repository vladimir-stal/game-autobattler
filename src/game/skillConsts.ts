import { EHeroClass, EHeroSkillType, THeroSkills } from "../types";
import { bardSkills, bardSkills_2 } from "./skills/bardSkillConsts";
import { darkSkills, darkSkills_2 } from "./skills/darkSkillConsts";
import { magicSkills, magicSkills_2 } from "./skills/magicSkillConsts";
import { masterSkills, masterSkills_2 } from "./skills/masterSkillConsts";
import { orderSkills, orderSkills_2 } from "./skills/orderSkillConsts";
import { priestSkills, priestSkills_2 } from "./skills/priestSkillConsts";
import { summonSkills, summonSkills_2 } from "./skills/summonSkillConsts";
import { warriorSkills, warriorSkills_2 } from "./skills/warriorSkillConsts";
import { wildSkills, wildSkills_2 } from "./skills/wildSkillConsts";

export const BASIC_CLASS_MAX_SKILL_COUNT = 2;
export const MC_CLASS_MAX_SKILL_COUNT = 4; // or 3?

export const SKILL_MAX_LEVEL = 5;

// skill price for skill level
export const skillPrices: Record<number, number> = {
    1: 4,
    2: 8,
    3: 12,
    4: 20,
};

//  COMMMON SKILLS  //////////////////////////////////////////////////////////////

//TODO: do we need it?
export const commonSkills: THeroSkills = [
    {
        id: "noSkill",
        name: "no skill with basic attack",
        level: 1,
        desc: "EMPTY SKILL",
        heroClasses: [EHeroClass.ALL],
        skills: [
            {
                // skill just for basic attack
                type: EHeroSkillType.NONE,
                isBasicAttack: true,
            },
        ],
    },
];

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
].filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
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
].filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
});
