// FIREFLY SUMMON UNIT

import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, EUnitType, IHeroSkillSet, IUnit, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_SKILL_SUMMON_FIREFLY } from "../../utils/imageLoadUtil";

export const illusionSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MAGIC,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 1,
    basicAttackTimes: 1,
    basicMaxHp: 50,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Illusion", //i18n.units.WARRIORSUMMON,
    id: "ILLUSIONSUMMON",
    skills: [],
    items: [],
    level: 1,
    exp: 0,
};

export const illusionistSkill: IHeroSkillSet = {
    id: "illusionSummonSkill",
    name: "Illusion",
    desc: "Summon magic illusion that\n repeats magic skills",
    //name: i18n.skills.basic.fireflySummon.name,
    //desc: i18n.skills.basic.fireflySummon.desc1,
    isMcSkill: true,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ILLUSIONIST],
    skills: [
        {
            type: EHeroSkillType.SUMMON,
            isBasicAttack: true,
            summon: illusionSummon,
        },
    ],
    //nextLevel: fireflySummonSkill_2,
    image: IMAGE_SKILL_SUMMON_FIREFLY,
};

export const illusionistSkills: THeroSkills = [illusionistSkill];
