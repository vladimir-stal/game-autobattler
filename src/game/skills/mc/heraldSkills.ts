import { EAppTriggerType, EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const heraldSkillset = (base:number, ppScale: number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            value: base,
            valueType: "number",
            attribute: "armor",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: ppScale,
        },
    ];
}

export const heraldSkill_3: IHeroSkillSet = {
    id: "HeraldHorn",
    //name: "Herald horn",
    //desc: "Armor all allies [4]+[200%xPP]",
    name: i18n.skills.mc.heraldSkill.name,
    desc: i18n.skills.mc.heraldSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.HERALD],
    isMcSkill: true,
    skills: heraldSkillset(4,300),
};

export const heraldSkill_2: IHeroSkillSet = {
    id: "HeraldHorn",
    //name: "Herald horn",
    //desc: "Armor all allies [4]+[200%xPP]",
    name: i18n.skills.mc.heraldSkill.name,
    desc: i18n.skills.mc.heraldSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.HERALD],
    isMcSkill: true,
    skills: heraldSkillset(4,200),
    nextLevel: heraldSkill_3,
};

export const heraldSkill: IHeroSkillSet = {
    id: "HeraldHorn",
    //name: "Herald horn",
    //desc: "Armor all allies [4]+[PP]",
    name: i18n.skills.mc.heraldSkill.name,
    desc: i18n.skills.mc.heraldSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.HERALD],
    isMcSkill: true,
    skills: heraldSkillset(4,100),
    nextLevel: heraldSkill_2,
};

export const heraldPassive: IPassiveSkill = {
        desc: i18n.skills.passives.heraldPassive,
        preBattleBuff: {
            ...heroPassiveTemplate,
            appTrigger: {
                limitedRepeats: false,
                skillId: "Herald +PP",
                type: EAppTriggerType.RECIEVE_BUFF,
                targetCheck: ETargetType.ALL_ALLIES,
                skill: [
                    {
                        type:EHeroSkillType.ATTRIBUTE_INCREASE,
                        attribute: "physicalPower",
                        value: 1,
                        valueType: "number",
                        targetType: ETargetType.SELF
                    }
                ]
            }
        }
    }

export const heraldSkills: THeroSkills = [heraldSkill];
