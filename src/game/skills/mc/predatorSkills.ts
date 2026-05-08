import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

// [
//     {
//         type: EHeroSkillType.STATUS_APPLY,
//         isBasicAttack: true,
//         status: EStatusType.BLEED,
//         value: 4, //TODO PP: % unit PP to bleed
//         targetType: ETargetType.MARKED_ENEMY,
//         markType: EDebuffType.MARK_PREDATOR,
//     },
// ],

const predatorSkillset = (markStrength: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Predator mark",
                type: EDebuffType.MARK_PREDATOR,
                targetType: ETargetType.HIGH_BLEED_ENEMY,
                timeType: EBuffTimeType.DUEL,
                value: markStrength,
                valueType: "percent",
            },
        },
    ];
};

export const predatorSkill_3: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[40]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(35),
};

export const predatorSkill_2: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[40]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(25),
};

export const predatorSkill: IHeroSkillSet = {
    id: "PredatorMark",
    //name: "Predator mark",
    //desc: "Mark low hp enemy\nand decrease physical resistance -[20]%.\nTarget marked enemy with basic attacks.",
    name: i18n.skills.mc.predatorSkill.name,
    desc: i18n.skills.mc.predatorSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.PREDATOR],
    isMcSkill: true,
    skills: predatorSkillset(15),
    nextLevel: predatorSkill_2,
};

export const predatorSkills: THeroSkills = [predatorSkill];
