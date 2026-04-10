import { EHeroClass, EHeroSkillType, ETargetType, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

export const forestSpititSkill_2: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    //name: "Spirit Sacrifice(2)",
    //desc: "Sacrifice self armor to gain\n[40%xARMOR] hp regen",
    name: i18n.skills.mc.forestSpititSkill.name,
    desc: i18n.skills.mc.forestSpititSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "hpRegen",
            value: 30,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 100,
            valueType: "percent",
            targetType: ETargetType.SELF,
        },
    ],
};

export const forestSpititSkill: IHeroSkillSet = {
    id: "forestSpiritSacrifice",
    //name: "Spirit Sacrifice",
    //desc: "Sacrifice self armor to gain\n[20%xARMOR] hp regen",
    name: i18n.skills.mc.forestSpititSkill.name,
    desc: i18n.skills.mc.forestSpititSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.FOREST_SPIRIT],
    isMcSkill: true,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            isBasicAttack: false,
            attribute: "hpRegen",
            value: 20,
            valueType: "percent",
            valueFrom: "armor",
            targetType: ETargetType.SELF,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_DECREASE,
            isBasicAttack: true,
            attribute: "armor",
            value: 100,
            valueType: "percent",
            targetType: ETargetType.SELF,
        },
    ],
    nextLevel: forestSpititSkill_2,
};

export const forestSpititSkills: THeroSkills = [forestSpititSkill];
