import {
    EHeroClass,
    EHeroSkillType,
    EItemBattleBonusType,
    ESkillCondition,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";
import { TOTEM_ID_GLADIATOR } from "../../totemConsts";
import { phycisalAttackSkill } from "../commonSkillConsts";

const gladiatorSkillset = (pp: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.FORCE_TOTEM_ACTION,
            targetType: ETargetType.SELF,
            condition: ESkillCondition.HAS_TOTEM,
        },
        {
            type: EHeroSkillType.TOTEM,
            totem: {
                id: TOTEM_ID_GLADIATOR,
                name: "Тотем гладиатора",
                skills: [
                    {
                        type: EHeroSkillType.ATTRIBUTE_INCREASE,
                        value: pp,
                        valueType: "number",
                        targetType: ETargetType.SELF,
                        attribute: "physicalPower",
                    },
                ],
            },
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
    ];
};

const gladiatorSkill_3: IHeroSkillSet = {
    id: "GladiatorTotem",
    name: i18n.skills.mc.gladiatorSkill.name,
    desc: i18n.skills.mc.gladiatorSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.GLADIATOR],
    isMcSkill: true,
    skills: gladiatorSkillset(4),
};

const gladiatorSkill_2: IHeroSkillSet = {
    id: "GladiatorTotem",
    name: i18n.skills.mc.gladiatorSkill.name,
    desc: i18n.skills.mc.gladiatorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.GLADIATOR],
    isMcSkill: true,
    skills: gladiatorSkillset(3),
    nextLevel: gladiatorSkill_3,
};

const gladiatorSkill: IHeroSkillSet = {
    id: "GladiatorTotem",
    //name: "Gladiator totem",
    //desc: "Place a totem that \nincreases physical power [2]",
    name: i18n.skills.mc.gladiatorSkill.name,
    desc: i18n.skills.mc.gladiatorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.GLADIATOR],
    isMcSkill: true,
    skills: gladiatorSkillset(2),
    nextLevel: gladiatorSkill_2,
};

export const gladiatorPassive: IPassiveSkill = {
    desc: "Can crit with\nphysical attack skills",
    // battleUtils - prepareUnitToBattle()
    itemPassive: {
        type: EItemBattleBonusType.CRIT_WITH_PHYSICAL,
        value: 1,
        valueType: "number",
    },
};

export const gladiatorSkills: THeroSkills = [gladiatorSkill];
