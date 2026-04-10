import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const beastMasterSkill_3: IHeroSkillSet = {
    id: "BeastmasterCrows",
    //name: "Beastmaster crows(3)",
    //desc: "Summon crow (totem)",
    name: i18n.skills.mc.beastMasterSkill.name,
    desc: i18n.skills.mc.beastMasterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BEAST_MASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "CROWS_TOTEM",
                name: "Crows",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: true,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                ],
            },
        },
    ],
};

export const beastMasterSkill_2: IHeroSkillSet = {
    id: "BeastmasterCrows",
    //name: "Beastmaster crows(2)",
    //desc: "Summon crow (totem)",
    name: i18n.skills.mc.beastMasterSkill.name,
    desc: i18n.skills.mc.beastMasterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BEAST_MASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "CROWS_TOTEM",
                name: "Crows",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: false,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: true,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                ],
            },
        },
    ],
    nextLevel: beastMasterSkill_3,
};

export const beastMasterSkill: IHeroSkillSet = {
    id: "BeastmasterCrows",
    //name: "Beastmaster crow",
    //desc: "Summon crow (totem)",
    name: i18n.skills.mc.beastMasterSkill.name,
    desc: i18n.skills.mc.beastMasterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BEAST_MASTER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "CROWS_TOTEM",
                name: "Crows",
                skills: [
                    {
                        type: EHeroSkillType.ATTACK,
                        isBasicAttack: true,
                        value: 2, // TODO MP: add PP modifier to value
                        targetType: ETargetType.RANDOM_ENEMY,
                        attackType: EHeroAttackType.PHYSICAL,
                    },
                ],
            },
        },
    ],
    nextLevel: beastMasterSkill_2,
};

export const beastMasterSkills: THeroSkills = [beastMasterSkill];
