import { EHeroAttackType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { TOTEM_ID_BEASTMASTER_CROWS } from "../../totemConsts";

const beastMasterSkillset = (atk: number, repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.FORCE_TOTEM_ACTION,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_TOTEM,
        },
        {
            type: EHeroSkillType.TOTEM,
            totem: {
                id: TOTEM_ID_BEASTMASTER_CROWS,
                name: "Crows",
                skills: [
                    {
                        type: EHeroSkillType.REPEATING_SKILL,
                        value: repeats,
                        valueType: "number",
                        targetType: ETargetType.SELF,
                        childSkill: {
                            type: EHeroSkillType.ATTACK,
                            value: atk, // TODO MP: add PP modifier to value
                            targetType: ETargetType.RANDOM_ENEMY,
                            attackType: EHeroAttackType.PHYSICAL,
                        },
                    },
                ],
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

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
    skills: beastMasterSkillset(2, 3),
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
    skills: beastMasterSkillset(2, 2),
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
    skills: beastMasterSkillset(2, 1),
    nextLevel: beastMasterSkill_2,
};

export const beastMasterPassive: IPassiveSkill = {
    desc: "While having totem,\nbuffs targeting summons\nand summoning skills buff\nBeastmaster; while having\nsummon, totem skills\nactivate summon",
    // battleUtils - checkSkillCondition - HAS_SUMMON
    // battleUtils - getAllyTargets - SUMMON_CURRENT
    // battleUtils - getAllAllySummons
}

export const beastMasterSkills: THeroSkills = [beastMasterSkill];
