import { EHeroAttackType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const commanderSkill_2: IHeroSkillSet = {
    id: "CommanderHorn",
    //name: "Commander horn(2)",
    //desc: "Increase all summons\nbasic attackdamage [2]+[MPx70%]",
    name: i18n.skills.mc.commanderSkill.name,
    desc: i18n.skills.mc.commanderSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.COMMANDER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 2,
            valueType: "number",
            attribute: "attack",
            targetType: ETargetType.ALL_ALLY_SUMMONS,
            ppScale: 70,
        },
    ],
};

export const commanderSkill: IHeroSkillSet = {
    id: "CommanderHorn",
    //name: "Commander horn",
    //desc: "Increase all summons\nbasic attackdamage [2]+[MPx50%]",
    name: i18n.skills.mc.commanderSkill.name,
    desc: i18n.skills.mc.commanderSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.COMMANDER],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: true,
            value: 2,
            valueType: "number",
            attribute: "attack",
            targetType: ETargetType.ALL_ALLY_SUMMONS,
            ppScale: 50,
        },
    ],
    isActivateOnStart: true,
    nextLevel: commanderSkill_2,
};

export const commanderSkills: THeroSkills = [commanderSkill];
