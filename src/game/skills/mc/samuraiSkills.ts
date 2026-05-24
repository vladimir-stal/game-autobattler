import {
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroClass,
    EHeroSkillType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";

const samuraiSkillset = (bleed: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Bleed+",
                type: EBuffType.ADD_STATUS_ON_BASIC_ATTACK,
                statusType: EStatusType.BLEED,
                value: bleed,
                valueType: "number",
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
            },
        },
    ];
};

export const samuraiSkill_3: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: samuraiSkillset(4),
    isChained: true,
    //nextLevel: samuraiSkill_3,
};

export const samuraiSkill_2: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: samuraiSkillset(3),
    isChained: true,
    nextLevel: samuraiSkill_3,
};

export const samuraiSkill: IHeroSkillSet = {
    id: "SamuraiSharpBlade",
    //name: "Sharp blade",
    //desc: "Applies [2] bleed on basic attacks",
    name: i18n.skills.mc.samuraiSkill.name,
    desc: i18n.skills.mc.samuraiSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.SAMURAI],
    isMcSkill: true,
    skills: samuraiSkillset(2),
    isChained: true,
    nextLevel: samuraiSkill_2,
};

export const samuraiPassive: IPassiveSkill = {
    desc: "Upon death apply [ba+PP]x50%\nbleed to all enemies",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: false,
            allowCastFromDead: true,
            skillId: "SUDOKU",
            type: EAppTriggerType.DEATH,
            //targetCheck: ETargetType.SELF,
            skill: [
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    attribute: "physicalPower",
                    value: 100,
                    valueFrom: "attack",
                    valueType: "percent",
                    targetType: ETargetType.SELF,
                },
                {
                    type: EHeroSkillType.STATUS_APPLY,
                    status: EStatusType.BLEED,
                    value: 100,
                    valueType: "percent",
                    valueFrom: "physicalPower",
                    targetType: ETargetType.ALL_ENEMIES,
                },
            ],
        },
    },
};

export const samuraiSkills: THeroSkills = [samuraiSkill];
