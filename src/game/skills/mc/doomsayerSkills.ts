import {
    AnimationType,
    EBuffTimeType,
    EDebuffType,
    EHeroClass,
    EHeroSkillType,
    EItemBattleBonusType,
    ESkillSetType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
    THeroSkills,
} from "../../../types";
import { i18n } from "../../consts";

const doomsayerSkillset = (repeats: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: repeats,
            valueType: "number",
            childSkill: {
                type: EHeroSkillType.DEBUFF,
                debuff: {
                    name: "Doom",
                    type: EDebuffType.DISABLE_SKILL,
                    value: 1,
                    valueType: "number",
                    targetType: ETargetType.RANDOM_ENEMY,
                    timeType: EBuffTimeType.DUEL,
                },
                animation: AnimationType.NONE,
            },
        },
    ];
};

export const doomsayerSkill_3: IHeroSkillSet = {
    id: "DoomsayerCurse",
    name: i18n.skills.mc.doomsayerSkill.name,
    desc: i18n.skills.mc.doomsayerSkill.desc3,
    level: 3,
    priceLevel: 4,
    heroClasses: [EHeroClass.DOOMSAYER],
    isMcSkill: true,
    skills: doomsayerSkillset(3),
    animationType: AnimationType.UNIT_DEBUFF,
};

export const doomsayerSkill_2: IHeroSkillSet = {
    id: "DoomsayerCurse",
    //name: "Doomsayer curse(2)",
    //desc: "Disable next skill of\n2 enemy heroes,\nexcept MC skills",
    name: i18n.skills.mc.doomsayerSkill.name,
    desc: i18n.skills.mc.doomsayerSkill.desc2,
    level: 2,
    priceLevel: 4,
    heroClasses: [EHeroClass.DOOMSAYER],
    isMcSkill: true,
    skills: doomsayerSkillset(2),
    nextLevel: doomsayerSkill_3,
    animationType: AnimationType.UNIT_DEBUFF,
};

export const doomsayerSkill: IHeroSkillSet = {
    id: "DoomsayerCurse",
    //name: "Doomsayer curse",
    //desc: "Disable next enemy\nhero skill,\nexcept MC skills",
    name: i18n.skills.mc.doomsayerSkill.name,
    desc: i18n.skills.mc.doomsayerSkill.desc1,
    level: 1,
    priceLevel: 4,
    heroClasses: [EHeroClass.DOOMSAYER],
    isMcSkill: true,
    skills: doomsayerSkillset(1),
    nextLevel: doomsayerSkill_2,
    //
    animationType: AnimationType.UNIT_DEBUFF,
};

export const doomsayerPassive: IPassiveSkill = {
    desc: "Increase potency of debuffs by 50%",
    itemPassive: {
        type: EItemBattleBonusType.INCREASE_DEBUFF_POTENCY,
        value: 50,
        valueType: "percent",
    }
    
}

export const doomsayerSkills: THeroSkills = [doomsayerSkill];
