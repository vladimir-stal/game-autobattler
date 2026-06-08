import { IUnit, ICard, TDuelCards, TDuelEnemy, EUnitType, IItem, EHeroClassType, ESelectCardHint, IHeroSkillSet } from "../../types";
import { duelEnemies2 } from "../duelConsts";
import { debugAlwaysOneEnemy, debugEnemy } from "./debugUtils";
import { applyItemBonuses, createItem } from "./itemUtils";
import { levelUpUnit } from "./unitUtils";

export const getDuelEnemy = (player: number) => {
    if (debugAlwaysOneEnemy)
        return debugEnemy; // FOR TESTING
    else return buildDuelEnemy(duelEnemies2[player].unitData); // [player];
};

const addItem = (unit: IUnit, item: IItem) => {
    unit.items.push(createItem(item));
};

const applyItems = (unit: IUnit): IUnit => {
    const resulUnit = { ...unit };
    unit.items.forEach((item) => {
        applyItemBonuses(item, resulUnit);
    });
    return resulUnit;
};

const createHero = (templateUnit: IUnit) => {
    const hero = { ...templateUnit };
    hero.items = [];
    hero.skills = templateUnit.heroClassType === EHeroClassType.MULTI ? [templateUnit.skills[0]] : [];
    return hero;
};

export const buildDuelEnemy = (daysCards: TDuelCards[]): TDuelEnemy => {
    const result: TDuelEnemy = {};
    for (let i = 0; i < daysCards.length; i++) {
        const day = i + 1;
        result[day] = [];
        const dc: TDuelCards = daysCards[i];
        // 1: [{unit: wildHero}, {item:totem1}, {skill:totemAttackSkill}],
        for (let unitSlot = 1; unitSlot < 5; unitSlot++) {
            if (dc[unitSlot]) {
                const unitTemplate = dc[unitSlot].find((mx) => !!mx.unit)?.unit;
                let unit: IUnit | undefined = undefined;
                if (unitTemplate && unitTemplate.unitType === EUnitType.HERO) {
                    unit = createHero(unitTemplate);
                } else if (unitTemplate && unitTemplate.unitType === EUnitType.UNIT) {
                    unit = { ...unitTemplate, items: [], skills: [...unitTemplate.skills] };
                }
                if (unit) {
                    dc[unitSlot].forEach((v) => {
                        if (!!v.unit) return;
                        if (!!v.item) {
                            addItem(unit, v.item);
                        } else if (!!v.skill) {
                            unit.skills.push({ ...v.skill, isChained: v.chained });
                            if (unit.unitType === EUnitType.UNIT) {
                                if (unit.skills[4]) {
                                    unit.skills[1] = unit.skills[4];
                                }
                                if (unit.skills[5]) {
                                    unit.skills[3] = unit.skills[5];
                                }
                            }
                        } else if (!!v.attr) {
                            unit[v.attr] += v.incr || 0;
                        } else if (!!v.levelup) {
                            for (let r = 0; r < v.levelup; r++) levelUpUnit(unit);
                        } else if (!!v.moveMcSkillToSlotIndex) {
                            const nonmc = unit.skills.filter((sk) => !!sk && sk.isMcSkill);
                            const mcSkill = unit.skills.find((sk) => sk.isMcSkill);
                            unit.skills = [];
                            nonmc.forEach((sk, idx) => {
                                if (idx === v.moveMcSkillToSlotIndex) {
                                    mcSkill && unit.skills.push(mcSkill);
                                }
                                unit.skills.push(sk);
                            });
                            if (unit.skills.length === v.moveMcSkillToSlotIndex) {
                                mcSkill && unit.skills.push(mcSkill);
                            }
                        }
                    });
                    result[day].push(applyItems(unit));
                }
            }
        }
    }
    return result;
};
