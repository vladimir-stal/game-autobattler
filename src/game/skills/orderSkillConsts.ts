import {
    AnimationType,
    EAppTriggerType,
    EBuffTimeType,
    EBuffType,
    EHeroClass,
    EHeroSkillType,
    ESkillCondition,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
    THeroSkills,
} from "../../types";
import { i18n } from "../consts";
import { removeDebuff } from "../utils/battleUtils";
import {
    IMAGE_DRAFT_MARTYR,
    IMAGE_DRAFT_MOMENTUM,
    IMAGE_SKILL_BATTLE,
    IMAGE_SKILL_KNIGHT,
    IMAGE_SKILL_SHIELD_BUFF_1,
    IMAGE_SKILL_SWORD_BUFF,
    IMAGE_SKILL_TEST,
} from "../utils/load/skillImagesLoad";
import { shieldAttackSkill } from "./commonSkill3Consts";
import { nextBAArea, removeDebuffSkill, statusesIntoHeal } from "./commonSkillConsts";

// INCREASE ATTR ARMOR SELF SKILL

export const attrArmorSelf_3: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 7,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf_2: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 50,
        },
    ],
    nextLevel: attrArmorSelf_3,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

export const attrArmorSelf: IHeroSkillSet = {
    id: "attrArmorSelf",
    name: i18n.skills.basic.attrIncArmorSelf.name,
    desc: i18n.skills.basic.attrIncArmorSelf.desc1,
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 35,
        },
    ],
    nextLevel: attrArmorSelf_2,
    image: IMAGE_SKILL_SHIELD_BUFF_1,
};

// INCREASE ATTR ATTACK SELF SKILL

export const attrAttackSelf_3: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc3,
    level: 3,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 3,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_SWORD_BUFF,
};

export const attrAttackSelf_2: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc2,
    level: 2,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 2,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 50,
        },
    ],
    nextLevel: attrAttackSelf_3,
    image: IMAGE_SKILL_SWORD_BUFF,
};

export const attrAttackSelf: IHeroSkillSet = {
    id: "attrAttackSelf",
    name: i18n.skills.basic.attrAttackSelf.name,
    desc: i18n.skills.basic.attrAttackSelf.desc1, //"Increase self attack [1]",
    level: 1,
    priceLevel: 1,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "attack",
            value: 1,
            valueType: "number",
            targetType: ETargetType.SELF,
            //ppScale: 35,
        },
    ],
    nextLevel: attrAttackSelf_2,
    image: IMAGE_SKILL_SWORD_BUFF,
};

// INCREASE ATTR ARMOR ALL SKILL

export const attrArmorAll_3: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all(3)",
    //desc: "Armor all [5 + 65% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 65,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
};

export const attrArmorAll_2: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all(2)",
    //desc: "Armor all [5 + 35% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 35,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
    nextLevel: attrArmorAll_3,
};

export const attrArmorAll: IHeroSkillSet = {
    id: "attrArmorAll",
    //name: "+armor all",
    //desc: "Armor all [5 + 20% PP]",
    name: i18n.skills.level2.attrIncArmorAll.name,
    desc: i18n.skills.level2.attrIncArmorAll.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    isBasicAttack: false,
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.ALL_ALLIES,
            ppScale: 20,
        },
    ],
    image: IMAGE_SKILL_BATTLE,
    nextLevel: attrArmorAll_2,
};

// // INCREASE ATTR ARMOR SELF (LEVEL 3) SKILL

export const attrArmorBigSelf_3: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 100,
        },
    ],
    //nextLevel: attrArmorBigSelf_2,
    image: IMAGE_SKILL_KNIGHT,
};

export const attrArmorBigSelf_2: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    //name: "Armor more(2)",
    //desc: "Armor self [5]+[PPx70%]",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 70,
        },
    ],
    nextLevel: attrArmorBigSelf_3,
    image: IMAGE_SKILL_KNIGHT,
};

export const attrArmorBigSelf: IHeroSkillSet = {
    id: "attrArmorBigSelf",
    //name: "Armor more",
    //desc: "Armor self [5]+[PPx40%]",
    name: i18n.skills.level3.attrArmorBigSelf.name,
    desc: i18n.skills.level3.attrArmorBigSelf.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: [
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            value: 5,
            valueType: "number",
            targetType: ETargetType.SELF,
            ppScale: 40,
        },
    ],
    nextLevel: attrArmorBigSelf_2,
    image: IMAGE_SKILL_KNIGHT,
};

const momentumSkillset = (ppScale: number, percent: number): IHeroSkill[] => {
    // Next 2 basic attacks deal +%pp damage, then increase PP by %damage dealt for 3 turns
    return [
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: "Momentum",
                type: EBuffType.BATTLE_TRIGGER,
                targetType: ETargetType.SELF,
                value: 1,
                timeType: EBuffTimeType.NEXT_TWO_BA,
                appTrigger: {
                    limitedRepeats: false,
                    type: EAppTriggerType.BASIC_ATTACK, // after basic attack
                    skillId: "Momentum +pp",
                    skill: [
                        {
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.ALL_ENEMIES_UNFILTERED,
                            attribute: "latestDamageRecieved", // damage since from current action start
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.ATTRIBUTE_INCREASE,
                            targetType: ETargetType.ANCHOR_TARGET,
                            attribute: "customNumber2",
                            value: percent,
                            valueType: "percent",
                            valueFrom: "customNumber",
                        },
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "PP+",
                                type: EBuffType.ATTRIBUTE_INCREASE,
                                attribute: "physicalPower",
                                timeType: EBuffTimeType.DUEL,
                                targetType: ETargetType.ANCHOR_TARGET,
                                value: 100,
                                valueType: "percent",
                                valueFrom: "customNumber2",
                            },
                            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.BUFF,
                            buff: {
                                name: "BA+",
                                type: EBuffType.ATTRIBUTE_INCREASE,
                                attribute: "attack",
                                timeType: EBuffTimeType.NEXT_TWO_BA,
                                targetType: ETargetType.ANCHOR_TARGET,
                                value: ppScale,
                                valueType: "percent",
                                valueFrom: "customNumber2",
                            },
                            condition: ESkillCondition.CUSTOM_NUMBER_IS_POSITIVE,
                            animation: AnimationType.NONE,
                        },
                    ],
                },
                nestedEffects: [
                    {
                        buffType: EBuffType.ATTRIBUTE_INCREASE,
                        attribute: "attack",
                        value: ppScale,
                        valueType: "percent",
                        valueFrom: "physicalPower",
                    },
                ],
            },
        },
    ];
};

export const momentumSkill_3: IHeroSkillSet = {
    id: "momentumSkill",
    name: "Momentum",
    desc: "Next 2 basic attacks deal\n+[65%xPP] damage, then\nincrease PP by 25% damage\ndealt",
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: momentumSkillset(65, 25),
    image: IMAGE_DRAFT_MOMENTUM, //IMAGE_SKILL_TEST,
};

export const momentumSkill_2: IHeroSkillSet = {
    id: "momentumSkill",
    name: "Momentum",
    desc: "Next 2 basic attacks deal\n+[50%xPP] damage, then\nincrease PP by 25% damage\ndealt",
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: momentumSkillset(50, 25),
    nextLevel: momentumSkill_3,
    image: IMAGE_DRAFT_MOMENTUM, //IMAGE_SKILL_TEST,
};

export const momentumSkill: IHeroSkillSet = {
    id: "momentumSkill",
    name: "Momentum",
    desc: "Next 2 basic attacks deal\n+[35%xPP] damage, then\nincrease PP by 25% damage\ndealt",
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.ORDER],
    skills: momentumSkillset(35, 25),
    nextLevel: momentumSkill_2,
    image: IMAGE_DRAFT_MOMENTUM, //IMAGE_SKILL_TEST,
};

const MARTYR_BUFF_NAME = "Martyr";

const martyrSkillset = (armorPercent:number, healPercent:number): IHeroSkill[] => {
    // remove highest status from ally and take same value dmg
    return [
        {
            type: EHeroSkillType.MARTYR_STATUS,
            targetType: ETargetType.SELF,
            targetFromType: ETargetType.HIGH_STATUS_ALLY,
        },
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.SELF,
            value: 100,
            valueFrom: "latestDamageRecieved",
            valueType: "percent",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.HEAL,
            targetType: ETargetType.SELF,
            value: 1,
            valueType: "number",
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            attribute: "armor",
            targetType: ETargetType.SELF,
            value: armorPercent,
            valueType: "percent",
            valueFrom: "customNumber",
            condition: ESkillCondition.HAS_ONE_OR_LESS_HP,
        },
        {
            type: EHeroSkillType.BUFF,
            buff: {
                name: MARTYR_BUFF_NAME,
                type: EBuffType.BATTLE_TRIGGER,
                targetType: ETargetType.SELF,
                timeType: EBuffTimeType.DUEL,
                value: 2,
                nestedEffects: [
                    {
                        buffType: EBuffType.SAVED_VALUE,
                        value: healPercent,
                        valueType: "percent",
                        valueFrom: "customNumber",
                    },
                ],
                appTrigger: {
                    limitedRepeats: true,
                    skillId: "Martyr heal",
                    type: EAppTriggerType.TURN_START,
                    skill: [
                        {
                            type: EHeroSkillType.CALCULATE_NUMBER,
                            targetType: ETargetType.ANCHOR_TARGET,
                            buff: {
                                name: MARTYR_BUFF_NAME,
                                type: EBuffType.SAVED_VALUE,
                                // sum all nested effects of buff/debuff with name (name)
                                // of buffType SAVED_VALUE
                                targetType: ETargetType.SELF, // not used
                                timeType: EBuffTimeType.DUEL, // not used
                                value: 1, // not used
                            },
                            animation: AnimationType.NONE,
                        },
                        {
                            type: EHeroSkillType.HEAL,
                            targetType: ETargetType.ANCHOR_TARGET,
                            value: 100,
                            valueType: "percent",
                            valueFrom: "customNumber",
                        },
                    ],
                },
            },
            animation: AnimationType.NONE,
        },
    ];
};

export const martyrSkill_3: IHeroSkillSet = {
    id: "martyrSkill",
    name: "Martyr",
    desc: "Remove highest status from\nally and recieve that\namount of status damage.\nIf fatal, gain 130% of dmg\nas armor and survive with\n1 hp. At start of next 2\nturns heal 65% of damage",
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: martyrSkillset(130, 65),
    image: IMAGE_DRAFT_MARTYR, //IMAGE_SKILL_TEST,
};

export const martyrSkill_2: IHeroSkillSet = {
    id: "martyrSkill",
    name: "Martyr",
    desc: "Remove highest status from\nally and recieve that\namount of status damage.\nIf fatal, gain 80% of dmg\nas armor and survive with\n1 hp. At start of next 2\nturns heal 50% of damage",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: martyrSkillset(80, 50),
    nextLevel: martyrSkill_3,
    image: IMAGE_DRAFT_MARTYR, //IMAGE_SKILL_TEST,
};

export const martyrSkill: IHeroSkillSet = {
    id: "martyrSkill",
    name: "Martyr",
    desc: "Remove highest status from\nally and recieve that\namount of status damage.\nIf fatal, gain 50% of dmg\nas armor and survive with\n1 hp. At start of next 2\nturns heal 35% of damage",
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.ORDER],
    skills: martyrSkillset(50, 35),
    nextLevel: martyrSkill_2,
    image: IMAGE_DRAFT_MARTYR, //IMAGE_SKILL_TEST,
};

export const orderSkills: THeroSkills = [attrArmorSelf, attrAttackSelf];

export const orderSkills_2: THeroSkills = orderSkills.concat([attrArmorAll, removeDebuffSkill, statusesIntoHeal, nextBAArea, momentumSkill]);

export const orderSkills_3: THeroSkills = orderSkills_2.concat([attrArmorBigSelf, shieldAttackSkill, martyrSkill]);
