import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet } from "../../types";

// PHYSICAL ATTACK

export const phycisalAttackSkill_3: IHeroSkillSet = {
    id: "phycAttack",
    name: "Phys Attack(3)",
    desc: "Deal [8] physical damage to first enemy",
    level: 3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 8, // TODO: pp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
};

export const phycisalAttackSkill_2: IHeroSkillSet = {
    id: "phycAttack",
    name: "Phys Attack(2)",
    desc: "Deal [6] physical damage to first enemy",
    level: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 6, // TODO: pp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: phycisalAttackSkill_3,
};

export const phycisalAttackSkill: IHeroSkillSet = {
    id: "phycAttack",
    name: "Phys Attack",
    desc: "Deal [4] physical damage to first enemy",
    level: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 4, // TODO: pp power
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    isChained: true,
    nextLevel: phycisalAttackSkill_2,
};
