import { EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EItemBattleBonusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const blackKnightSkillset = (value: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Black shield",
                type: EBuffType.ANTISKILL_MIRROR,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: value,
            },
        },
    ];
};

export const blackKnightSkill_3: IHeroSkillSet = {
    id: "blackKnightShield",
    name: i18n.skills.mc.blackKnightSkill.name,
    desc: i18n.skills.mc.blackKnightSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLACK_KNIGHT],
    isMcSkill: true,
    skills: blackKnightSkillset(3),
};

export const blackKnightSkill_2: IHeroSkillSet = {
    id: "blackKnightShield",
    name: i18n.skills.mc.blackKnightSkill.name,
    desc: i18n.skills.mc.blackKnightSkill.desc1,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLACK_KNIGHT],
    isMcSkill: true,
    skills: blackKnightSkillset(2),
    nextLevel: blackKnightSkill_3,
};

export const blackKnightSkill: IHeroSkillSet = {
    id: "blackKnightShield",
    name: i18n.skills.mc.blackKnightSkill.name,
    desc: i18n.skills.mc.blackKnightSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLACK_KNIGHT],
    isMcSkill: true,
    skills: blackKnightSkillset(1),
    nextLevel: blackKnightSkill_2,
};

export const blackKnightPassive: IPassiveSkill = {
    desc: i18n.skills.passives.blackKnightPassive,
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: true,
            type: EAppTriggerType.PRE_BATTLE,
            skillId: "Dark power",
            skill: [
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "physicalPower",
                    value: 0,
                    valueType: "number",
                    mpScale: 100,
                }
            ],
        }
    }
}

export const blackKnightSkills: THeroSkills = [blackKnightSkill];
