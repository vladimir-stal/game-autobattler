import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet } from "../../types";
import { i18n, LANG } from "../consts";
import { IMAGE_SKILL_PHYS_ATTACK } from "../utils/imageLoadUtil";

// PHYSICAL ATTACK

export const phycisalAttackSkill_3: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name + "(3)",
    desc: i18n.skills.basic.phycAttack.desc3, //"Deal [4] physical damage to first enemy",
    level: 3,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 8,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill_2: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name + "(2)",
    desc: i18n.skills.basic.phycAttack.desc2, //"Deal [4] physical damage to first enemy",
    level: 2,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 6,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    nextLevel: phycisalAttackSkill_3,
    image: IMAGE_SKILL_PHYS_ATTACK,
};

export const phycisalAttackSkill: IHeroSkillSet = {
    id: "phycAttack",
    name: i18n.skills.basic.phycAttack.name,
    desc: i18n.skills.basic.phycAttack.desc1, //"Deal [4] physical damage to first enemy",
    level: 1,
    heroClasses: [EHeroClass.WARRIOR, EHeroClass.MASTER],
    skills: [
        {
            isBasicAttack: true,
            type: EHeroSkillType.ATTACK,
            value: 4,
            targetType: ETargetType.FIRST_ENEMY,
            attackType: EHeroAttackType.PHYSICAL,
        },
    ],
    //isChained: true,
    nextLevel: phycisalAttackSkill_2,
    image: IMAGE_SKILL_PHYS_ATTACK,
};
