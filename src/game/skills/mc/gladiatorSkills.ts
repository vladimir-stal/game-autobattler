import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { phycisalAttackSkill } from "../commonSkillConsts";

const gladiatorSkill_2: IHeroSkillSet = {
    id: "GladiatorTotem",
    //name: "Gladiator totem(2)",
    //desc: "Place a totem that \nincreases physical power [3]",
    name: i18n.skills.mc.gladiatorSkill.name,
    desc: i18n.skills.mc.gladiatorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.GLADIATOR],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "GLADIATORTOTEM",
                name: "Тотем гладиатора(2)",
                skills: [
                    {
                        type: EHeroSkillType.ATTRIBUTE_INCREASE,
                        isBasicAttack: false,
                        value: 3,
                        valueType: "number",
                        targetType: ETargetType.SELF,
                        attribute: "physicalPower",
                    },
                ],
            },
        },
    ],
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
    skills: [
        {
            type: EHeroSkillType.TOTEM,
            isBasicAttack: true,
            totem: {
                id: "GLADIATORTOTEM",
                name: "Тотем гладиатора",
                skills: [
                    {
                        type: EHeroSkillType.ATTRIBUTE_INCREASE,
                        isBasicAttack: false,
                        value: 2,
                        valueType: "number",
                        targetType: ETargetType.SELF,
                        attribute: "physicalPower",
                    },
                ],
            },
        },
    ],
    nextLevel: gladiatorSkill_2,
};

export const gladiatorSkills: THeroSkills = [gladiatorSkill];
