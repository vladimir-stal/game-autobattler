import {
    AnimationType,
    EBuffTimeType,
    EDebuffType,
    EHeroAttackType,
    EHeroClass,
    EHeroSkillType,
    EStatusType,
    ETargetType,
    IHeroSkill,
    IHeroSkillSet,
} from "../../../types";
import { i18n } from "../../consts";
import {
    IMAGE_SKILL_MOB_PIRATE_BLACK_MARK,
    IMAGE_SKILL_MOB_PIRATE_CANNON_FIRE,
    IMAGE_SKILL_MOB_PIRATE_DRAG_DROWN,
    IMAGE_SKILL_TEST,
} from "../../utils/load/skillImagesLoad";

const pirateDragNDrownSkillset = (atkReduce: number, ppmpReduce: number, duration: number): IHeroSkill[] => {
    //~ debuff -atk -pp -mp
    return [
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Drag",
                targetType: ETargetType.RANDOM_ENEMY,
                timeType: EBuffTimeType.DURATION,
                type: EDebuffType.ATTRIBUTE_DECREASE,
                value: atkReduce,
                valueType: "number",
                attribute: "attack",
                duration: duration,
            },
            //animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "and",
                targetType: ETargetType.SAME_LAST_TARGET,
                timeType: EBuffTimeType.DURATION,
                type: EDebuffType.ATTRIBUTE_DECREASE,
                value: ppmpReduce,
                valueType: "number",
                attribute: "physicalPower",
                duration: duration,
            },
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Drown",
                targetType: ETargetType.SAME_LAST_TARGET,
                timeType: EBuffTimeType.DURATION,
                type: EDebuffType.ATTRIBUTE_DECREASE,
                value: ppmpReduce,
                valueType: "number",
                attribute: "magicPower",
                duration: duration,
            },
            animation: AnimationType.NONE,
        },
    ];
};

export const pirateDragNDrown_3: IHeroSkillSet = {
    id: "pirateDragNDrown",
    //name: "Drag and drown",
    //desc: "Random enemy gets\n-[5] attack, -[7] PP & MP\nfor 2 turns",
    name: i18n.skills.mobs.pirateDragNDrown.name,
    desc: i18n.skills.mobs.pirateDragNDrown.desc3,
    level: 3,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.DARK],
    isBasicAttack: true,
    skills: pirateDragNDrownSkillset(5, 7, 2),
    image: IMAGE_SKILL_MOB_PIRATE_DRAG_DROWN,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateDragNDrown_2: IHeroSkillSet = {
    id: "pirateDragNDrown",
    //name: "Drag and drown",
    //desc: "Random enemy gets\n-[4] attack, -[5] PP & MP\nfor 2 turns",
    name: i18n.skills.mobs.pirateDragNDrown.name,
    desc: i18n.skills.mobs.pirateDragNDrown.desc2,
    level: 2,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.DARK],
    isBasicAttack: true,
    skills: pirateDragNDrownSkillset(4, 5, 2),
    nextLevel: pirateDragNDrown_3,
    image: IMAGE_SKILL_MOB_PIRATE_DRAG_DROWN,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateDragNDrown: IHeroSkillSet = {
    id: "pirateDragNDrown",
    //name: "Drag and drown",
    //desc: "Random enemy gets\n-[3] attack, -[3] PP & MP\nfor 2 turns",
    name: i18n.skills.mobs.pirateDragNDrown.name,
    desc: i18n.skills.mobs.pirateDragNDrown.desc1,
    level: 1,
    priceLevel: 2,
    heroClasses: [EHeroClass.MASTER, EHeroClass.DARK],
    isBasicAttack: true,
    skills: pirateDragNDrownSkillset(3, 3, 2),
    nextLevel: pirateDragNDrown_2,
    image: IMAGE_SKILL_MOB_PIRATE_DRAG_DROWN,
    animationType: AnimationType.UNIT_ATTACK,
};

// pirate captain skills
const pirateCallTheCannonsSkillset = (damage: number, burnNbleed: number): IHeroSkill[] => {
    //~ AoE physical, bleed + fire
    return [
        {
            type: EHeroSkillType.ATTACK,
            attackType: EHeroAttackType.PHYSICAL,
            value: damage,
            valueType: "number",
            targetType: ETargetType.ALL_ENEMIES, // ?? one random enemy
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BURN,
            value: burnNbleed,
            valueType: "number",
            targetType: ETargetType.ALL_ENEMIES,
            animation: AnimationType.NONE,
        },
        {
            type: EHeroSkillType.STATUS_APPLY,
            status: EStatusType.BLEED,
            value: burnNbleed,
            valueType: "number",
            targetType: ETargetType.ALL_ENEMIES,
            animation: AnimationType.NONE,
        },
    ];
};

export const pirateCallTheCannons_3: IHeroSkillSet = {
    id: "pirateCallTheCannons",
    //name: "Call cannons",
    //desc: "Deal [8] physical damage\nand apply [3] burn and\nbleed to all enemies",
    name: i18n.skills.mobs.pirateCallTheCannons.name,
    desc: i18n.skills.mobs.pirateCallTheCannons.desc3,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: pirateCallTheCannonsSkillset(8, 3),
    image: IMAGE_SKILL_MOB_PIRATE_CANNON_FIRE,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateCallTheCannons_2: IHeroSkillSet = {
    id: "pirateCallTheCannons",
    //name: "Call cannons",
    //desc: "Deal [6] physical damage\nand apply [2] burn and\nbleed to all enemies",
    name: i18n.skills.mobs.pirateCallTheCannons.name,
    desc: i18n.skills.mobs.pirateCallTheCannons.desc2,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: pirateCallTheCannonsSkillset(6, 2),
    nextLevel: pirateCallTheCannons_3,
    image: IMAGE_SKILL_MOB_PIRATE_CANNON_FIRE,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateCallTheCannons: IHeroSkillSet = {
    id: "pirateCallTheCannons",
    //name: "Call cannons",
    //desc: "Deal [4] physical damage\nand apply [2] burn and\nbleed to all enemies",
    name: i18n.skills.mobs.pirateCallTheCannons.name,
    desc: i18n.skills.mobs.pirateCallTheCannons.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD, EHeroClass.WARRIOR],
    isBasicAttack: false,
    skills: pirateCallTheCannonsSkillset(4, 2),
    nextLevel: pirateCallTheCannons_2,
    image: IMAGE_SKILL_MOB_PIRATE_CANNON_FIRE,
    animationType: AnimationType.UNIT_ATTACK,
};

const pirateDeadmansCurseSkillset = (multiplier: number, ppmpScale: number): IHeroSkill[] => {
    //~ per buffs number -> apply debuff
    return [
        {
            type: EHeroSkillType.CALCULATE_NUMBER,
            targetType: ETargetType.ALL_ENEMIES,
            childSkill: {
                type: EHeroSkillType.BUFF,
            },
            animation: AnimationType.NONE,
        }, // count number of buffs in enemy team
        {
            type: EHeroSkillType.ATTRIBUTE_INCREASE,
            targetType: ETargetType.RANDOM_ENEMY,
            attribute: "customNumber",
            value: 100,
            valueType: "percent",
            valueFrom: "customNumber",
            ppScale: ppmpScale, // base 20%, each 5 power -> +1% blind
            mpScale: ppmpScale,
        }, // save value on target
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "Deadman",
                timeType: EBuffTimeType.DUEL,
                targetType: ETargetType.SAME_LAST_TARGET,
                type: EDebuffType.BLIND,
                value: multiplier, // at 100% multiplier, 4 buffs -> 4% blind
                valueType: "percent",
                attribute: "customNumber", // read saved value on target
            },
        },
        {
            type: EHeroSkillType.DEBUFF,
            debuff: {
                name: "curse",
                timeType: EBuffTimeType.DUEL,
                targetType: ETargetType.SAME_LAST_TARGET,
                type: EDebuffType.RESIST_DECREASE,
                value: 1,
                valueType: "number",
            },
        },
    ];
};

export const pirateDeadmansCurse_3: IHeroSkillSet = {
    id: "pirateDeadmansCurse",
    //name: "Deadmans curse",
    //desc: "Random enemy gets blind\nstacks x[2.0] number of\nbuffs in his team plus\n[40%xPP+40%xMP] and gets\n1 vulnerability for the\nrest of the duel",
    name: i18n.skills.mobs.pirateDeadmansCurse.name,
    desc: i18n.skills.mobs.pirateDeadmansCurse.desc1,
    level: 3,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: pirateDeadmansCurseSkillset(200, 40),
    image: IMAGE_SKILL_MOB_PIRATE_BLACK_MARK,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateDeadmansCurse_2: IHeroSkillSet = {
    id: "pirateDeadmansCurse",
    //name: "Deadmans curse",
    //desc: "Random enemy gets blind\nstacks x[1.5] number of\nbuffs in his team plus\n[30%xPP+30%xMP] and gets\n1 vulnerability for the\nrest of the duel",
    name: i18n.skills.mobs.pirateDeadmansCurse.name,
    desc: i18n.skills.mobs.pirateDeadmansCurse.desc1,
    level: 2,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: pirateDeadmansCurseSkillset(150, 30),
    nextLevel: pirateDeadmansCurse_3,
    image: IMAGE_SKILL_MOB_PIRATE_BLACK_MARK,
    animationType: AnimationType.UNIT_ATTACK,
};

export const pirateDeadmansCurse: IHeroSkillSet = {
    id: "pirateDeadmansCurse",
    //name: "Deadmans curse",
    //desc: "Random enemy gets blind\nstacks x[1.0] number of\nbuffs in his team plus\n[20%xPP+20%xMP] and gets\n1 vulnerability for the\nrest of the duel",
    name: i18n.skills.mobs.pirateDeadmansCurse.name,
    desc: i18n.skills.mobs.pirateDeadmansCurse.desc1,
    level: 1,
    priceLevel: 3,
    heroClasses: [EHeroClass.BARD],
    skills: pirateDeadmansCurseSkillset(100, 20),
    nextLevel: pirateDeadmansCurse_2,
    image: IMAGE_SKILL_MOB_PIRATE_BLACK_MARK,
    animationType: AnimationType.UNIT_ATTACK,
};
