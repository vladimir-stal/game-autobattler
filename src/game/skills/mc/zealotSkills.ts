import { EBuffTimeType, EDebuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkill, IHeroSkillSet, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

// TODO: add scaling from mp? add value if heal < value => debuff is not removed

const zealotSkillset = (value:number, targets:ETargetType):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                type: EDebuffType.ANTIHEAL,
                name: "Antiheal",
                timeType: EBuffTimeType.DUEL,
                value: value,
                valueType: "number",
                targetType: targets,
            },
        },
    ]; 
}

export const zealotSkill_3: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_THREE_ENEMIES),
};

export const zealotSkill_2: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_TWO_ENEMIES),
    nextLevel: zealotSkill_3,
};

export const zealotSkill: IHeroSkillSet = {
    id: "ZealotDebuff",
    name: i18n.skills.mc.zealotSkill.name,
    desc: i18n.skills.mc.zealotSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.ZEALOT],
    isMcSkill: true,
    skills: zealotSkillset(1,ETargetType.FIRST_ENEMY),
    nextLevel: zealotSkill_2,
};

export const zealotSkills: THeroSkills = [zealotSkill];
