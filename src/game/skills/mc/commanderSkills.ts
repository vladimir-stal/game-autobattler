import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";

const commanderSkillset = (atk: number, ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            targetType: ETargetType.SELF,
            buff: {
                name: "Rally",
                type: EBuffType.BATTLE_TRIGGER,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
                valueType: "number",
                appTrigger: {
                    limitedRepeats: false,
                    skillId: "Commander Rally",
                    type: EAppTriggerType.SUMMON,
                    targetCheck: ETargetType.ALL_ALLIES,
                    skill: [
                        {
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            value: atk,
                            valueType: "number",
                            attribute: "attack",
                            targetType: ETargetType.ALL_ALLY_SUMMONS,
                            ppScale: ppScale,
                            // new Scale? add bonus value from Buff.totalValue
                        },
                    ],
                },
            },
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: atk,
            valueType: "number",
            attribute: "attack",
            targetType: ETargetType.ALL_ALLY_SUMMONS,
            ppScale: ppScale,
            condition: ESkillCondition.NOT_BEFORE_COMBAT,
        },
    ];
};

export const commanderSkill_3: IHeroSkillSet = {
    id: "CommanderHorn",
    name: i18n.skills.mc.commanderSkill.name,
    desc: i18n.skills.mc.commanderSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.COMMANDER],
    isMcSkill: true,
    skills: commanderSkillset(2, 100),
    isActivateOnStart: true,
};

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
    skills: commanderSkillset(2, 70),
    isActivateOnStart: true,
    nextLevel: commanderSkill_3,
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
    skills: commanderSkillset(2, 50),
    isActivateOnStart: true,
    nextLevel: commanderSkill_2,
};

export const commanderSkills: THeroSkills = [commanderSkill];
