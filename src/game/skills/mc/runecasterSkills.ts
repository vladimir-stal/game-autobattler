import { EBuffTimeType, EBuffType, EHeroClass, EHeroSkillType, EItemBattleBonusType, EStatusType, ETargetType, IHeroSkill, IHeroSkillSet, IPassiveSkill, THeroSkills } from "../../../types";
import { i18n } from "../../consts";

const runecasterSkillset = (base:number, mpScale:number):IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Fire shield",
                type: EBuffType.THORNS_SHIELD,
                statusType: EStatusType.BURN,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: base,
                mpScale: mpScale,
            },
        },
    ]
}

export const runecasterSkill_3: IHeroSkillSet = {
    id: "runecasterFireShield",
    //name: "Fire shield(2)",
    //desc: "Shield self with magic\nfirewhich burns every\nattacker [1]+[70%xMP]",
    name: i18n.skills.mc.runecasterSkill.name,
    desc: i18n.skills.mc.runecasterSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.RUNECASTER],
    isMcSkill: true,
    skills: runecasterSkillset(1,100),
};

export const runecasterSkill_2: IHeroSkillSet = {
    id: "runecasterFireShield",
    //name: "Fire shield(2)",
    //desc: "Shield self with magic\nfirewhich burns every\nattacker [1]+[70%xMP]",
    name: i18n.skills.mc.runecasterSkill.name,
    desc: i18n.skills.mc.runecasterSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.RUNECASTER],
    isMcSkill: true,
    skills: runecasterSkillset(1,70),
    nextLevel: runecasterSkill_3,
};

export const runecasterSkill: IHeroSkillSet = {
    id: "runecasterFireShield",
    //name: "Fire shield",
    //desc: "Shield self with magic\nfirewhich burns every\nattacker [1]+[50%xMP]",
    name: i18n.skills.mc.runecasterSkill.name,
    desc: i18n.skills.mc.runecasterSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.RUNECASTER],
    isMcSkill: true,
    skills: runecasterSkillset(1,50),
    nextLevel: runecasterSkill_2,
};

export const runecasterPassive: IPassiveSkill = {
    desc: "All armor gained\nfrom skills is increased\nby [50%xMP]",
    // battleUtils - prepareUnitToBattle()
    itemPassive: {
        type: EItemBattleBonusType.INCREASE_ARMOR_GAIN,
        value: 50,
        valueType: "number",
        valueFrom: "magicPower",
    },
};

export const runecasterSkills: THeroSkills = [runecasterSkill];
