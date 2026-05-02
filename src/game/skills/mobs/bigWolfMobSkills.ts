import { AnimationType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkill, IHeroSkillSet } from "../../../types";

import { wolfUnitSmol } from "../../units/wolfsMobUnits2";
import { IMAGE_SKILL_PHYS_ATTACK } from "../../utils/load/skillImagesLoad";

// big wolf skill
const bigWolfSummonSkillset = (bonusAtk: number, bonusHp: number, bonusPP: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_SUMMON,
            value: 1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.SUMMON,
            summon: {
                ...wolfUnitSmol,
                basicMaxHp: wolfUnitSmol.basicMaxHp + bonusHp,
                basicAttack: wolfUnitSmol.basicAttack + bonusAtk,
                basicPhysicalPower: wolfUnitSmol.basicPhysicalPower + bonusPP,
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

export const bigWolfSummonSkill_3: IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [3,8] wolf that\nuses physical attack skill\nwith bleed status",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(1, 4, 10),
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const bigWolfSummonSkill_2: IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [3,6] wolf that\nuses physical attack skill\nwith bleed status",
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(1, 2, 5),
    nextLevel: bigWolfSummonSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const bigWolfSummonSkill: IHeroSkillSet = {
    id: "bigWolfSummon",
    name: "Call the pack",
    desc: "Summon [2,4] wolf that\nuses physical attack skill\nwith bleed status",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.WILD, EHeroClass.SUMMON],
    skills: bigWolfSummonSkillset(0, 0, 0),
    nextLevel: bigWolfSummonSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};
