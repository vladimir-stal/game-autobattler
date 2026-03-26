import { AnimationType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

//TODO: DivineShield should also ignore dmg below X instead of removing self. X is increased with lvl and scales from PP or hp%

export const paladinSkill: IHeroSkillSet = {
    id: "DivineShield",
    name: i18n.skills.mc.DivineShield.name,
    desc: i18n.skills.mc.DivineShield.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.PALADIN],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Divine shield",
                type: EBuffType.DIVINE_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
            animation: AnimationType.PALADIN_MAGIC_SHIELD,
        },
    ],
    //isActivateOnStart: true,
};

export const paladinSkills: THeroSkills = [paladinSkill];
