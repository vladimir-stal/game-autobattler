import { AnimationType, EAppTriggerType, EBuffTimeType, EBuffType, EHeroAttackType, EHeroClass, EHeroSkillType, ESkillCondition, ETargetType, EUnitType, IHeroSkill, IHeroSkillSet, IPassiveSkill, IUnit, THeroSkills } from "../../../types";
import { i18n } from "../../consts";
import { heroPassiveTemplate } from "../../utils/skillUtils2";
import { mobNoSkill } from "../mobSkills";


const mimicSummonSkillset = (index:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.COPY_UNIT_CAST_SKILL,
            targetType: ETargetType.ALLY_IN_FRONT,
            animation: AnimationType.NONE,
            value: index, // cast previous skill of the target
            childSkill: {
                type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                targetType: ETargetType.SELF,
            },
            condition: ESkillCondition.IN_BACK_ROW
        },
        {
            type: EHeroSkillType.COPY_UNIT_CAST_SKILL,
            targetType: ETargetType.ALLY_BEHIND,
            animation: AnimationType.NONE,
            value: index, // cast previous skill of the target
            childSkill: {
                type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                targetType: ETargetType.SELF,
            },
            condition: ESkillCondition.IN_FRONT_ROW
        },
    ];
}
const mimicSummonSkillset3 = (index:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.COPY_UNIT_CAST_SKILL,
            targetType: ETargetType.ALL_ALLIES,
            animation: AnimationType.NONE,
            value: index, // cast previous skill of the target
            childSkill: {
                type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                targetType: ETargetType.SELF,
            },
        }
    ];
}


const copycatSkill: IHeroSkillSet = {
    id: "mimicCopySkill",
    name: "Copycat skill",
    desc: "Copy 4th skill of a random\nally or make basic attack\notherwise",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MOB],
    isBasicAttack: false,
    isMcSkill: true,
    skills: mimicSummonSkillset3(3),
}

const mimicSkill_3: IHeroSkillSet = {
    id: "mimicCopySkill",
    name: i18n.skills.mc.mimicSkill.name,
    desc: i18n.skills.mc.mimicSkill.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MIMIC],
    isBasicAttack: true,
    isMcSkill: true,
    skills: [...mimicSummonSkillset(1),...mimicSummonSkillset3(3)],
}

const mimicSkill_2: IHeroSkillSet = {
    id: "mimicCopySkill",
    name: i18n.skills.mc.mimicSkill.name,
    desc: i18n.skills.mc.mimicSkill.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MIMIC],
    isBasicAttack: true,
    isMcSkill: true,
    skills: mimicSummonSkillset(1),
    nextLevel: mimicSkill_3,
}

const mimicSkill: IHeroSkillSet = {
    id: "mimicCopySkill",
    name: i18n.skills.mc.mimicSkill.name,
    desc: i18n.skills.mc.mimicSkill.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MIMIC],
    isBasicAttack: false,
    isMcSkill: true,
    skills: mimicSummonSkillset(1),
    nextLevel: mimicSkill_2
}

export const mimicSummon: IUnit = {
    unitType: EUnitType.UNIT,
    heroClass: EHeroClass.MAGIC,
    attackType: EHeroAttackType.MAGIC,
    attackTargetType: ETargetType.FIRST_ENEMY,
    basicAttack: 0,
    basicAttackTimes: 1,
    basicMaxHp: 2,
    basicHpRegen: 0,
    basicArmor: 0,
    basicCritChance: 0,
    basicEvasionChance: 0,
    basicMagicPower: 0,
    basicPhysicalPower: 0,
    name: "Copycat",
    id: "COPYCAT",
    skills: [mobNoSkill,copycatSkill,mobNoSkill,copycatSkill],
    items: [],
    level: 1,
    exp: 0,
};

const mimicSkillset = (ppScale: number, mpScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.SUMMON,
            summon: mimicSummon,
            condition: ESkillCondition.HAS_NO_SUMMON_OR_TOTEM,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "physicalPower",
            value: 0,
            valueType: "number",
            ppScale: 40,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "magicPower",
            value: 0,
            valueType: "number",
            mpScale: 40,
            animation: AnimationType.NONE
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "hp",
            value: 0,
            valueType: "number",
            ppScale: ppScale,
            animation: AnimationType.NONE
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SUMMON_CURRENT,
            attribute: "attack",
            value: 0,
            valueType: "number",
            mpScale: mpScale,
            animation: AnimationType.NONE
        }
    ];
};

export const mimicPassive: IPassiveSkill = {
    //desc: "At the start of 2nd round\nsummons Copycat. Boost\nsummon stats atk+35%xMP\nhp+50%xPP, MP & PP x40%\nCopycat mimics 4th slot\nskill every odd round",
    desc: "At the start of\n2nd round summons Copycat\nIt gets atk and hp from\nMP and PP",
    preBattleBuff: {
        ...heroPassiveTemplate,
        appTrigger: {
            limitedRepeats: true,
            skillId: "Self copy",
            type: EAppTriggerType.ROUND_CYCLE,
            skill: mimicSkillset(50,35),
        }
    }
};

export const mimicSkills: THeroSkills = [mimicSkill];
