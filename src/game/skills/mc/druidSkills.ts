import { EHeroClass, EHeroSkillType, EItemBattleBonusType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const druidSkillset = (repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: repeats,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.STATUS_APPLY,
                status: EStatusType.SHOCK,
                value: 1,
                valueType: "number",
                targetType: ETargetType.RANDOM_ENEMY,
            },
        },
    ];
};

export const druidSkill_3: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning(2)",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(5),
};

export const druidSkill_2: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning(2)",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(4),
    nextLevel: druidSkill_3,
};

export const druidSkill: IHeroSkillSet = {
    id: "DruidShock",
    //name: "Chain lightning",
    //desc: "Apply [1] shock to\nrandom enemy 3 times",
    name: i18n.skills.mc.druidSkill.name,
    desc: i18n.skills.mc.druidSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DRUID],
    isMcSkill: true,
    skills: druidSkillset(3),
    nextLevel: druidSkill_2,
};

export const druidPassive: IPassiveSkill = {
    desc: "Deal bonus 35%\nof PP damage vs targets\nwith shock",
    itemPassive: {
        type: EItemBattleBonusType.INCREASE_DAMAGE_TO_TARGET_WITH_STATUS,
        status: EStatusType.SHOCK,
        value: 35,
        valueType: "number",
        valueFrom: "physicalPower",
    }
}

export const druidSkills: THeroSkills = [druidSkill];
