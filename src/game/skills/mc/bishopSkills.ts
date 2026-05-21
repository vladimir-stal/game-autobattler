import { EHeroClass, EHeroSkillType, EItemBattleBonusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const bishopSkillset = (heal: number, mpScale: number, repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            value: repeats,
            targetType: ETargetType.SELF,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.HEAL,
                value: heal,
                valueType: "number",
                targetType: ETargetType.LOW_PERCENT_ALLY,
                mpScale: mpScale,
            },
        },
    ];
};

export const bishopSkill_3: IHeroSkillSet = {
    id: "bishopHeal",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: bishopSkillset(2, 40, 3),
};

export const bishopSkill_2: IHeroSkillSet = {
    id: "bishopHeal",
    //name: "Chain heal(2)",
    //desc: "Heals low hp ally\n[2]+[70%xMP] 3 times",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: bishopSkillset(2, 30, 3),
    nextLevel: bishopSkill_3,
};

export const bishopSkill: IHeroSkillSet = {
    id: "bishopHeal",
    //name: "Chain heal",
    //desc: "Heals low hp ally\n[2]+[50%xMP] 3 times",
    name: i18n.skills.mc.bishopSkill.name,
    desc: i18n.skills.mc.bishopSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BISHOP],
    isMcSkill: true,
    skills: bishopSkillset(2, 20, 3),
    nextLevel: bishopSkill_2,
};

export const bishopPassive: IPassiveSkill = {
    desc: i18n.skills.passives.bishopPassive,
    // battleUtils - prepareUnitToBattle()
    itemPassive: {
        type: EItemBattleBonusType.CRIT_WITH_HEAL,
        value: 1,
        valueType: "number",
    },
};

export const bishopSkills: THeroSkills = [bishopSkill];
