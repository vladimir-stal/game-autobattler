import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    IPassiveSkill,
} from "../../../types";
import { i18n } from "../../consts";
import { IMAGE_SKILL_KNIGHT_SHIELD, IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE, IMAGE_SKILL_MOB_SPIRIT_SPEARS } from "../../utils/load/skillImagesLoad";

// Spirit warrior (levels 1, 3, 5)
//  ~ summon, warrior
//
const spiritTeamFlurrySkillset = (ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: -1,
            valueType: "number",
            animation: AnimationType.NONE,
        }, // start with customNumber = -1
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ALLIES,
            childSkill: {
                type: EHeroSkillType.NONE,
                condition: ESkillCondition.NOT_BEFORE_COMBAT,
            },
            animation: AnimationType.NONE,
        }, // calc number of alive allies
        // customNumber = numberOfAllies - 1;
        // condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE ~ 2+ allies alive
        {
            type: EHeroSkillType.REPEATING_SKILL,
            targetType: ETargetType.SELF,
            value: 100,
            valueFrom: "customNumber",
            valueType: "percent",
            ppScale: ppScale,
            childSkill: {
                type: EHeroSkillType.ATTACK,
                attackType: EHeroAttackType.PHYSICAL,
                targetType: ETargetType.FIRST_ENEMY,
                value: 1,
                valueType: "number",
            },
        },
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            targetType: ETargetType.FIRST_TWO_ENEMIES,
            value: 100,
            valueFrom: "attack",
            valueType: "percent",
            condition: ESkillCondition.CUSTOM_NUMBER_IS_ZERO, // no other allies alive
        },
    ];
};

export const spiritTeamFlurry_3: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    //name: "Pointy sticks",
    //desc: "Unleash [65%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    name: i18n.skills.mobs.spiritTeamFlurry.name,
    desc: i18n.skills.mobs.spiritTeamFlurry.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(65),
    image: IMAGE_SKILL_MOB_SPIRIT_SPEARS,
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamFlurry_2: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    //name: "Pointy sticks",
    //desc: "Unleash [50%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    name: i18n.skills.mobs.spiritTeamFlurry.name,
    desc: i18n.skills.mobs.spiritTeamFlurry.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(50),
    nextLevel: spiritTeamFlurry_3,
    image: IMAGE_SKILL_MOB_SPIRIT_SPEARS,
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamFlurry: IHeroSkillSet = {
    id: "spiritTeamFlurry",
    //name: "Pointy sticks",
    //desc: "Unleash [35%xPP]+ number\nof teammates damage 1\nattacks. And if alone\npowerful attack on two\nenemies",
    name: i18n.skills.mobs.spiritTeamFlurry.name,
    desc: i18n.skills.mobs.spiritTeamFlurry.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.MASTER, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamFlurrySkillset(35),
    nextLevel: spiritTeamFlurry_2,
    image: IMAGE_SKILL_MOB_SPIRIT_SPEARS,
    animationType: AnimationType.UNIT_ATTACK,
};

const spiritTeamRevengeSkillset = (ppScale: number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Revenge",
                timeType: EBuffTimeType.TILL_NEXT_BA,
                targetType: ETargetType.SELF,
                type: EBuffType.BATTLE_TRIGGER,
                value: 1,
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Revenge poke",
                    type: EAppTriggerType.BASIC_ATTACK,
                    targetCheck: ETargetType.ALL_ENEMIES,
                    skill: [
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "Aim",
                                targetType: ETargetType.SELF,
                                timeType: EBuffTimeType.TILL_NEXT_BA,
                                type: EBuffType.CHANGE_TARGET_TYPE,
                                changeTargetTypeTo: ETargetType.BY_UNIT_ID, // current acting unit id
                                isHidden: true,
                                value: 1,
                            },
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.STATUS_APPLY,
                            targetType: ETargetType.BY_UNIT_ID,
                            targetUnitId: "[ActingUnit]",
                            status: EStatusType.BLEED,
                            value: 1,
                            valueType: "number",
                            ppScale: ppScale,
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.FORCE_UNIT_MAKE_ATTACK,
                            targetType: ETargetType.SELF,
                            value: 1, // not used
                            animation: AnimationType.NONE,
                        },
                    ],
                },
            },
        },
    ];
};

export const spiritTeamRevenge_3: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    //name: "Revenge poke",
    //desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+PP] bleed",
    name: i18n.skills.mobs.spiritTeamRevenge.name,
    desc: i18n.skills.mobs.spiritTeamRevenge.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(100),
    image: IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE,
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamRevenge_2: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    //name: "Revenge poke",
    //desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+65%xPP] bleed",
    name: i18n.skills.mobs.spiritTeamRevenge.name,
    desc: i18n.skills.mobs.spiritTeamRevenge.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(65),
    nextLevel: spiritTeamRevenge_3,
    image: IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE,
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritTeamRevenge: IHeroSkillSet = {
    id: "spiritTeamRevenge",
    //name: "Revenge poke",
    //desc: "Forgo basic attack to\nstrike next enemy that\nuses basic attack and\napply [1+35%xPP] bleed",
    name: i18n.skills.mobs.spiritTeamRevenge.name,
    desc: i18n.skills.mobs.spiritTeamRevenge.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: spiritTeamRevengeSkillset(35),
    nextLevel: spiritTeamRevenge_2,
    image: IMAGE_SKILL_MOB_SPIRIT_SPEAR_REVENGE,
    animationType: AnimationType.UNIT_ATTACK,
};

// Shield warrior
const spiritShieldRadiateSkillset = (armor: number, ppScale: number, vStacks: number, crit:number): IHeroSkill[] => {
    return [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.SELF,
            attribute: "armor",
            ppScale: ppScale,
            value: armor,
            valueType: "number",
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                targetType: ETargetType.SELF,
                type: EBuffType.BATTLE_TRIGGER,
                name: "Radiate",
                timeType: EBuffTimeType.TILL_GOT_HIT,
                value: 1,
                appTrigger: {
                    type: EAppTriggerType.TAKE_ATTACK,
                    limitedRepeats: true,
                    skillId: "Radiate retaliate",
                    skill: [
                        {
                            type: EHeroSkillType.DEBUFF,
                            debuff: {
                                name: "Guilty",
                                targetType: ETargetType.BY_RELEVANT_ID, // attacker
                                timeType: EBuffTimeType.DURATION,
                                type: EDebuffType.RESIST_DECREASE,
                                duration: 2,
                                value: vStacks,
                                valueType: "number",                                
                            },
                        },
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "Shiny",
                                type: EBuffType.ATTRIBUTE_INCREASE,
                                attribute: "critChance",
                                targetType: ETargetType.ALL_ALLIES,
                                timeType: EBuffTimeType.DURATION,
                                duration: 1,
                                value: crit,
                                valueType: "number",
                            },
                        },
                    ],
                },
            },
        },
    ];
};

export const spiritShieldRadiate_3: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [5+65%xPP] armor\nAnd next time get hit by\nbasic attack, attacker gets\nvulnerable [2] and allies\nget +25 crit.chance for\n1 round",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(5, 65, 2, 25),
    //nextLevel: spiritShieldRadiate_2,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritShieldRadiate_2: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [4+50%xPP] armor\nAnd next time get hit by\nbasic attack, attacker gets\nvulnerable [2] and allies\nget +25 crit.chance for\n1 round",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(4, 50, 1, 25),
    nextLevel: spiritShieldRadiate_3,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritShieldRadiate: IHeroSkillSet = {
    id: "spiritShieldRadiate",
    name: "Sanctuary",
    desc: "Gain [3+35%xPP] armor\nAnd next time get hit by\nbasic attack, attacker gets\nvulnerable [2] and allies\nget +25 crit.chance for\n1 round",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.PRIEST, EHeroClass.ORDER],
    isBasicAttack: true,
    skills: spiritShieldRadiateSkillset(3, 35, 1, 25),
    nextLevel: spiritShieldRadiate_2,
    image: IMAGE_SKILL_KNIGHT_SHIELD, // IMAGE_SKILL_TEST
    animationType: AnimationType.UNIT_ATTACK,
};

export const spiritWarriorPassive: IPassiveSkill = {
    desc: i18n.skills.passives.spiritWarriorPassive,
    preBattleBuff: {
        name: "Passive",
        targetType: ETargetType.SELF,
        timeType: EBuffTimeType.DUEL,
        type: EBuffType.BATTLE_TRIGGER,
        value: 1,
        isHidden: true,
        cannotBeTargeted: true,
        appTrigger: {
            limitedRepeats: false,
            skillId: "Spirit armor",
            type: EAppTriggerType.TURN_START,
            skill: [
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    attribute: "physicalPower",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    value: 35,
                    valueType: "percent",
                    valueFrom: "attack",
                    animation: AnimationType.NONE,
                },
                {
                    type: EHeroSkillType.CALCULATE_NUMBER,
                    targetType: ETargetType.ANCHOR_TARGET,
                    value: -100,
                    valueType: "percent",
                    valueFrom: "armor",
                    animation: AnimationType.NONE,
                }, // calc (Attack - Armor)
                {
                    type: EHeroSkillType.ATTRIBUTE_INCREASE,
                    targetType: ETargetType.ANCHOR_TARGET,
                    attribute: "armor",
                    value: 3,
                    valueType: "number",
                    animation: AnimationType.NONE,
                },
            ],
        },
    },
};
