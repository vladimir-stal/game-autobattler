import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const blackKnightSkill: IHeroSkillSet = {
    id: "blackKnightShield",
    //name: "Black shield",
    //desc: "Deflect next enemy skill\n back to the owner",
    name: i18n.skills.mc.blackKnightSkill.name,
    desc: i18n.skills.mc.blackKnightSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.BLACK_KNIGHT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.BUFF,
            isBasicAttack: true,
            buff: {
                name: "Black shield",
                type: EBuffType.ANTISKILL_SHIELD,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 1,
            },
            //animation: AnimationType.PALADIN_MAGIC_SHIELD,
        },
    ],
};

export const blackKnightSkills: THeroSkills = [blackKnightSkill];
