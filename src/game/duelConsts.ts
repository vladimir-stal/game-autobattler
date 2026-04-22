import { EHeroClass, EHeroClassType, EItemBonusType, IItem, IUnit, TDuelCards, TDuelEnemy } from "../types";
import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "./basicHeroConsts";
import { axe1, mace1, musical1, musical1_2, scepter1, scepter1_2, shield1, staff1, sword1, sword1_2, totem1, wand1, wand1_2 } from "./basicWeaponItemConsts";
import {
    basic_boots,
    basic_exp_bag,
    basic_hat,
    basic_hat_2,
    basic_heal,
    basic_heal_2,
    basic_jacket,
    basic_pants,
    basic_pants_2,
    basic_ring_damage,
} from "./commonItemConsts";
import {
    assasinHero,
    beastMasterHero,
    bishopHero,
    blackKnightHero,
    druidHero,
    forestSpiritHero,
    heraldHero,
    hunterHero,
    knightHero,
    jesterHero,
    minstrelHero,
    monkHero,
    necromancerHero,
    paladinHero,
    predatorHero,
    samuraiHero,
    witchHero,
    zealotHero,
    inquisitorHero,
    bladedancerHero,
} from "./mcHeroConsts";
import { peasantUnit } from "./units/mobUnitConsts";
import { buffNextBaAll, buffNextBaAll_2 } from "./skills/bardSkillConsts";
import { noBasicAttackSkill, phycisalAttackSkill, removeBuffSkill, removeDebuffSkill } from "./skills/commonSkillConsts";
import { magicAttackX3, poisonRandom, poisonRandom_2 } from "./skills/darkSkillConsts";
import { applyBurn, applyShock, magicAttack } from "./skills/magicSkillConsts";
import { buffNextBaIgnoreArmorSelf, buffNextBaXSelf } from "./skills/masterSkillConsts";
import { attrArmorAll, attrArmorAll_2, attrArmorSelf, attrAttackSelf } from "./skills/orderSkillConsts";
import { healFirst, healFirst_2, healSelf } from "./skills/priestSkillConsts";
import { fireflySummonSkill, summonSkills } from "./skills/summonSkillConsts2";
import { buffNextBa } from "./skills/warriorSkillConsts";
import { attrDescArmor, totemAttackSkill, totemAttackSkill_2 } from "./skills/wildSkillConsts";
import { applyItemBonuses } from "./utils/itemUtils";
import { levelUpUnit } from "./utils/unitUtils";
import {
    axe21,
    axe22,
    mace21,
    musical21,
    musical21_2,
    scepter22,
    shield22,
    shield22_2,
    staff22,
    sword22,
    sword22_2,
    totem21,
    totem22,
    wand21,
    wand21_2,
} from "./weaponItem2Consts";
import { goblinUnit, goldGoblin1Unit, weakGoblinUnit } from "./units/goblinMobUnits";
import { gloves_war2, hat21, jacket21 } from "./commonItemConsts2";
import { strongWolfUnit } from "./units/wolfsMobUnits";
import { minstrelSkill } from "./skills/mc/minstrelSkills";
import { itemGoblinBoneDagger, itemPeasantPitchfork } from "./mobItemConsts";
import { shield31, shield32 } from "./weaponItem3Consts";
import { buffSelfMPorPP } from "./skills/commonSkill3Consts";
import { buildDuelEnemy } from "./utils/duelUtils";
import { removeBuff } from "./utils/battleUtils";
import { music5AddBuffTarget } from "./weaponItem5Consts";

const addItem = (unit: IUnit, item: IItem) => {
    unit.items.push(item);
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

//////////////////////// ENEMY 1 //////////////////

export const enemy1_test: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 1: [{ unit: warriorHero }, { item: shield1 }, { skill: phycisalAttackSkill }] },
    // day 2
    { 1: [{ unit: warriorHero }, { item: shield1 }, { skill: phycisalAttackSkill }, { levelup: 1 }], 2: [{ unit: masterHero }, { skill: buffNextBaXSelf }] },
    // day 3
    {
        1: [{ unit: warriorHero }, { item: shield1 }, { skill: phycisalAttackSkill }, { levelup: 2 }, { item: basic_hat }],
        2: [{ unit: masterHero }, { skill: buffNextBaXSelf }, { levelup: 1 }],
    },
    // day 4
    {
        1: [{ unit: paladinHero }, { skill: healFirst }, { skill: phycisalAttackSkill }, { item: shield1 }, { item: basic_hat }],
        2: [{ unit: masterHero }, { skill: buffNextBaXSelf }, { levelup: 2 }],
        3: [{ unit: darkHero }, { skill: magicAttackX3 }, { item: wand1_2 }],
    },
    // day 5
    {
        1: [
            { unit: paladinHero },
            { skill: healFirst_2 },
            { skill: phycisalAttackSkill },
            { skill: phycisalAttackSkill },
            { item: shield1 },
            { item: basic_hat },
        ],
        2: [{ unit: samuraiHero }, { skill: buffNextBaXSelf }],
        3: [{ unit: darkHero }, { skill: magicAttackX3 }, { item: wand1_2 }, { levelup: 2 }],
    },
    // day 6
    {
        1: [
            { unit: paladinHero },
            { skill: healFirst_2 },
            { skill: phycisalAttackSkill },
            { skill: phycisalAttackSkill },
            { item: shield1 },
            { item: basic_hat },
        ],
        2: [{ unit: samuraiHero }, { skill: buffNextBaXSelf }],
        3: [{ unit: darkHero }, { skill: magicAttackX3 }, { item: wand1_2 }, { levelup: 2 }],
        4: [{ unit: strongWolfUnit }, { levelup: 1 }],
    },
]);

//////////////////////// ENEMY 2 //////////////////

// 0

const unit21 = createHero(wildHero);
addItem(unit21, totem1);
unit21.skills.push(totemAttackSkill);

// 1

const unit21_1 = { ...unit21 };
unit21_1.basicCritChance += 1;

// 2

const unit21_2 = { ...unit21_1 };
unit21_2.items = [...unit21_1.items];
unit21_2.skills = [...unit21_1.skills];
//levelUpUnit(unit21_2);

const unit22_2 = createHero(darkHero);
unit22_2.skills.push(magicAttackX3);

// 3

const unit21_3 = { ...unit21_2 };
unit21_3.items = [...unit21_2.items];
addItem(unit21_3, basic_hat);
unit21_3.skills = [...unit21_2.skills];
levelUpUnit(unit21_3);

const unit22_3 = { ...unit22_2 };
unit22_3.items = [...unit22_2.items];
addItem(unit21_3, wand1);
addItem(unit21_3, gloves_war2);
unit22_3.skills = [...unit22_2.skills];
levelUpUnit(unit22_3);

// 4

const unit21_4 = createHero(beastMasterHero);
unit21_4.items = [...unit21_3.items];
unit21_4.skills = unit21_4.skills.concat([...unit21_3.skills]);

const unit22_4 = { ...unit22_3 };
unit22_4.items = [wand21];
unit22_4.skills = [...unit22_3.skills];
levelUpUnit(unit22_4);

const unit23_4 = createHero(wildHero);
unit23_4.items = [wand1, gloves_war2];
unit23_4.skills.push(magicAttack);

// 5

const unit21_5 = { ...unit21_4 };
unit21_5.items = [...unit21_4.items];
unit21_5.skills = [...unit21_4.skills];

const unit22_5 = createHero(blackKnightHero);
unit22_5.items = [...unit22_4.items];
unit22_5.items.push(basic_hat);
unit22_5.skills = unit22_5.skills.concat([...unit21_4.skills]);

const unit23_5 = { ...unit23_4 };
unit23_5.items = [gloves_war2, wand1_2];
unit23_5.skills = [...unit23_4.skills];
levelUpUnit(unit23_5);
levelUpUnit(unit23_5);

// 6

const unit21_6 = { ...unit21_5 };
unit21_6.items = [...unit21_5.items];
unit21_6.skills = [...unit21_5.skills];
levelUpUnit(unit21_6);

const unit22_6 = { ...unit22_5 };
unit22_6.items = [...unit22_5.items];
unit22_6.items.push(basic_hat);
unit22_6.items.push(basic_ring_damage);
unit22_6.skills = [...unit22_5.skills];
levelUpUnit(unit22_6);

const unit23_6 = createHero(minstrelHero);
unit23_6.items = [...unit23_5.items];
unit23_6.skills = unit23_6.skills.concat([...unit23_5.skills, buffNextBaAll]);
levelUpUnit(unit23_5);
levelUpUnit(unit23_5);

//

/** Duel units for each day */
export const enemy2: TDuelEnemy = {
    0: [applyItems(unit21)],
    1: [applyItems(unit21_1)],
    2: [applyItems(unit21_2), applyItems(unit22_2)],
    3: [applyItems(unit21_3), applyItems(unit22_3)],
    4: [applyItems(unit21_4), applyItems(unit23_4), applyItems(unit22_4)],
    5: [applyItems(unit21_5), applyItems(unit22_5), applyItems(unit23_5)],
    6: [applyItems(unit21_6), applyItems(unit22_6), applyItems(unit23_6)],
    7: [],
    8: [],
    9: [],
    10: [],
};

//////////////////////// ENEMY 3 //////////////////

// 0

const unit31 = createHero(bardHero);
addItem(unit31, musical1);
unit31.skills.push(buffNextBaAll);

// 1

const unit31_1 = { ...unit31 };
unit31_1.items = [...unit31.items];
unit31_1.skills = [...unit31.skills];

const unit32_1 = { ...peasantUnit };

// 2

const unit31_2 = { ...unit31_1 };
unit31_2.items = [...unit31_1.items];
unit31_2.skills = [...unit31_1.skills];
levelUpUnit(unit31_1);

const unit32_2 = { ...peasantUnit };

const unit33_2 = { ...wildHero };
unit33_2.items = [axe1];
unit33_2.skills.push(attrDescArmor);

// 3

const unit31_3 = { ...unit31_2 };
unit31_3.items = [...unit31_2.items];
unit31_3.skills = [...unit31_2.skills];
levelUpUnit(unit31_3);

const unit32_3 = { ...peasantUnit };

const unit33_3 = { ...unit33_2 };
unit33_3.items = [...unit33_2.items, basic_hat];
unit33_3.skills = [...unit33_2.skills];

// 4

const unit31_4 = createHero(jesterHero);
unit31_4.items = [musical1_2, basic_hat];
unit31_4.skills = unit31_4.skills.concat([...unit31_3.skills]);

const unit32_4 = { ...peasantUnit };

const unit33_4 = { ...unit33_3 };
unit33_4.items = [...unit33_3.items];
unit33_4.skills = [...unit33_3.skills];
levelUpUnit(unit33_4);

const unit34_4 = createHero(masterHero);
addItem(unit34_4, sword1_2);
unit34_4.skills.push(phycisalAttackSkill);
unit34_4.skills.push(phycisalAttackSkill);

// 5

const unit31_5 = { ...unit31_4 };
unit31_5.items = [...unit31_4.items];
unit31_5.skills = [...unit31_4.skills];

const unit32_5 = { ...peasantUnit };

const unit33_5 = createHero(forestSpiritHero);
unit33_5.items = [basic_hat, shield1, totem21];
unit33_5.skills = unit33_5.skills.concat([...unit33_4.skills]);

const unit34_5 = { ...unit34_4 };
unit34_5.items = [...unit34_4.items];
unit34_5.skills = [...unit34_4.skills];
levelUpUnit(unit34_5);
unit34_5.basicPhysicalPower++;
unit34_5.basicCritChance += 2;

// 6

const unit31_6 = { ...unit31_5 };
unit31_6.items = [...unit31_5.items, musical21];
unit31_6.skills = [...unit31_5.skills];

const unit32_6 = { ...peasantUnit };

const unit33_6 = { ...unit33_5 };
unit33_6.items = [...unit33_5.items];
unit33_6.skills = [...unit33_5.skills];

const unit34_6 = createHero(hunterHero);
unit34_6.items = [...unit34_5.items, totem1];
unit34_6.skills = unit34_6.skills.concat([...unit34_5.skills]);

/** Enemy 3 - Duel units for each day */
export const enemy3: TDuelEnemy = {
    0: [applyItems(unit31)],
    1: [applyItems(unit31_1), unit32_1],
    2: [applyItems(unit33_2), applyItems(unit31_2), unit32_2],
    3: [applyItems(unit33_3), applyItems(unit31_3), unit32_3],
    4: [applyItems(unit33_4), applyItems(unit31_4), applyItems(unit34_4), unit32_4],
    5: [applyItems(unit33_5), applyItems(unit31_5), applyItems(unit34_5), unit32_5],
    6: [applyItems(unit33_6), applyItems(unit31_6), applyItems(unit34_6), unit32_6],
    7: [],
    8: [],
    9: [],
    10: [],
};

//////////////////////// ENEMY 4 //////////////////

export const enemy4_test: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 1: [{ unit: summonHero }, { item: scepter1_2 }, { skill: fireflySummonSkill }] },
    // day 2
    { 1: [
        { unit: summonHero },
        { item: scepter1_2 },
        { skill: fireflySummonSkill },
        {levelup:1}],
      2: [
        { unit: darkHero },
        { item: totem22 },
        { skill: poisonRandom_2 }],
    },
    // day 3
    { 1: [
        { unit: summonHero },
        { item: scepter1_2 }, { item: basic_pants },
        { skill: fireflySummonSkill },
        {levelup:2}],
      2: [
        { unit: darkHero },
        { item: totem22 },
        { skill: poisonRandom_2 },
        {levelup:1}],
    },
    // day 4
    { 1: [
        { unit: witchHero },
        { item: scepter1_2 }, { item: basic_pants }, { item: musical21 }, { item: basic_hat },
        { skill: fireflySummonSkill }],
      2: [
        { unit: darkHero },
        { item: totem22 },
        { skill: poisonRandom_2 },
        {levelup:2}],
      3: [
        { unit: darkHero },
        { item: wand21 },
        { skill: poisonRandom }],
    },
    // day 5
    { 1: [
        { unit: witchHero },
        { item: scepter1_2 }, { item: basic_pants }, { item: musical21_2 }, { item: basic_hat },
        { skill: fireflySummonSkill }],
      2: [
        { unit: predatorHero },
        { item: totem22 }, { item: axe22 }, { item: basic_hat },
        { skill: poisonRandom_2 }],
      3: [
        { unit: darkHero },
        { item: wand21 },
        { skill: poisonRandom },
        {levelup:1}],
    },
    // day 6
    { 1: [
        { unit: witchHero },
        { item: scepter1_2 }, { item: basic_pants }, { item: musical21_2 }, { item: basic_hat },
        { skill: fireflySummonSkill },
        {levelup:1}],
      2: [
        { unit: predatorHero },
        { item: totem22 }, { item: axe22 }, { item: basic_hat }, { item: basic_hat },
        { skill: poisonRandom_2 },
        {levelup:1}],
      3: [
        { unit: predatorHero },
        { item: wand21_2 }, { item: wand1_2 },
        { skill: poisonRandom }],
    },
]);

//////////////////////// ENEMY 5 //////////////////

/** Enemy 5 - Duel units for each day */
export const enemy5: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 1: [{ unit: priestHero }, { item: mace1 }, { item: basic_heal }, { skill: healSelf }, { levelup: 1 }] },
    // day 2
    {
        1: [{ unit: priestHero }, { item: scepter22 }, { item: basic_heal_2 }, { skill: healSelf }, { levelup: 2 }, { attribute: { a: "basicMaxHp", v: 3 } }],
        2: [{ unit: wildHero }, { item: basic_ring_damage }, { item: basic_hat }, { skill: totemAttackSkill }],
        3: [{ unit: goldGoblin1Unit }],
    },
    // day 3
    {
        1: [
            { unit: inquisitorHero },
            { item: scepter22 },
            { item: basic_heal_2 },
            { item: basic_ring_damage },
            { skill: noBasicAttackSkill },
            { skill: healSelf },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
        ],
        2: [{ unit: wildHero }, { item: axe21 }, { item: basic_hat }, { skill: totemAttackSkill }, { skill: removeBuffSkill }, { levelup: 1 }],
        3: [{ unit: peasantUnit }, { item: itemPeasantPitchfork }],
        4: [{ unit: goldGoblin1Unit }],
    },
    // day 4
    {
        1: [
            { unit: inquisitorHero },
            { item: scepter22 },
            { item: basic_heal_2 },
            { item: basic_ring_damage },
            { item: shield22 },
            { skill: noBasicAttackSkill },
            { skill: healSelf },
            { skill: attrArmorAll },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicEvasionChance", v: 2 } },
        ],
        2: [{ unit: druidHero }, { item: axe21 }, { item: basic_hat }, { item: basic_pants }, { skill: totemAttackSkill }, { skill: removeBuffSkill }],
        3: [{ unit: bardHero }, { skill: buffNextBaAll }],
        4: [{ unit: goldGoblin1Unit }],
    },
    // day 5
    {
        1: [
            { unit: inquisitorHero },
            { item: scepter22 },
            { item: basic_heal_2 },
            { item: basic_ring_damage },
            { item: shield22 },
            { skill: noBasicAttackSkill },
            { skill: healSelf },
            { skill: attrArmorAll },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicEvasionChance", v: 2 } },
        ],
        2: [
            { unit: druidHero },
            { item: axe21 },
            { item: basic_hat },
            { item: basic_pants },
            { skill: totemAttackSkill_2 },
            { skill: removeBuffSkill },
            { attribute: { a: "basicMagicPower", v: 1 } },
        ],
        3: [{ unit: bardHero }, { skill: buffNextBaAll }, { item: music5AddBuffTarget }],
        4: [{ unit: goldGoblin1Unit }, { item: musical21 }],
    },
    // day 6
    {
        1: [
            { unit: inquisitorHero },
            { item: scepter22 },
            { item: basic_heal_2 },
            { item: basic_ring_damage },
            { item: shield22_2 },
            { skill: noBasicAttackSkill },
            { skill: healSelf },
            { skill: attrArmorAll },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicEvasionChance", v: 2 } },
            { attribute: { a: "basicCritChance", v: 2 } },
            { levelup: 1 },
        ],
        2: [
            { unit: druidHero },
            { item: axe21 },
            { item: basic_hat_2 },
            { item: basic_pants_2 },
            { skill: totemAttackSkill_2 },
            { skill: removeBuffSkill },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { levelup: 1 },
        ],
        3: [{ unit: bladedancerHero }, { skill: buffNextBaAll }, { item: music5AddBuffTarget }, { item: musical21 }],
        4: [{ unit: magicHero }, { skill: applyBurn }, { skill: applyBurn }, { item: staff22 }],
    },
]);

//////////////////////// ENEMY 6 //////////////////

// 0

const unit61 = createHero(orderHero);
addItem(unit61, shield1);
unit61.skills.push(attrAttackSelf);

// 1

const unit61_1 = { ...unit61 };
unit61_1.items = [...unit61.items, basic_exp_bag];
unit61_1.skills = [...unit61.skills];

// 2

const unit61_2 = { ...unit61_1 };
unit61_2.items = [...unit61_1.items];
unit61_2.skills = [...unit61_1.skills];
levelUpUnit(unit61_2);

const unit62_2 = createHero(magicHero);
unit62_2.items = [basic_ring_damage];
unit62_2.skills = [magicAttack, magicAttack];

const unit63_2 = { ...weakGoblinUnit };

// 3

const unit61_3 = { ...unit61_2 };
unit61_3.items = [mace21, basic_boots];
unit61_3.skills = [...unit61_2.skills];
levelUpUnit(unit61_3);

const unit62_3 = { ...unit62_2 };
unit62_3.items = [staff1, basic_ring_damage];
unit62_3.skills = [...unit62_2.skills];
levelUpUnit(unit62_3);

const unit63_3 = { ...weakGoblinUnit };

// 4

const unit61_4 = createHero(heraldHero);
unit61_4.items = [mace21, shield1, basic_boots, basic_hat];
unit61_4.skills = unit61_4.skills.concat([...unit61_3.skills, attrArmorSelf]);

const unit62_4 = { ...unit62_3 };
unit62_4.items = [...unit62_3.items];
unit62_4.skills = [...unit62_3.skills];
levelUpUnit(unit62_4);

const unit63_4 = { ...weakGoblinUnit };

const unit64_4 = createHero(darkHero);
unit64_4.items = [basic_exp_bag];
unit64_4.skills = [poisonRandom];

// 5

const unit61_5 = { ...unit61_4 };
unit61_5.items = [mace21, shield22, basic_pants, basic_hat_2];
unit61_5.skills = [...unit61_4.skills];
levelUpUnit(unit61_5);

const unit62_5 = createHero(druidHero);
unit62_5.items = [basic_ring_damage, staff1];
unit62_5.skills = unit62_5.skills.concat([...unit62_4.skills]);

const unit63_5 = { ...weakGoblinUnit };

const unit64_5 = { ...unit64_4 };
unit64_5.items = [basic_exp_bag, totem1];
unit64_5.skills = [...unit64_4.skills];

// 6

const unit61_6 = { ...unit61_5 };
unit61_6.items = [...unit61_5.items];
unit61_6.skills = [...unit61_4.skills];

const unit62_6 = { ...unit62_5 };
unit62_6.items = [...unit62_5.items];
unit62_6.skills = [...unit62_5.skills];
levelUpUnit(unit62_6);

const unit64_6 = createHero(blackKnightHero);
unit64_6.items = [...unit64_5.items, sword22_2];
unit64_6.skills = unit64_6.skills.concat([...unit64_5.skills]);

const unit63_6 = createHero(darkHero);
unit63_6.items = [wand1];
unit63_6.skills = [poisonRandom];

/** Enemy 6 - Duel units for each day */
export const enemy6: TDuelEnemy = {
    0: [applyItems(unit61)],
    1: [applyItems(unit61_1)],
    2: [unit63_2, applyItems(unit61_2), applyItems(unit62_2)],
    3: [unit63_3, applyItems(unit61_3), applyItems(unit62_3)],
    4: [unit63_4, applyItems(unit61_4), applyItems(unit62_3), applyItems(unit64_4)],
    5: [unit63_5, applyItems(unit61_5), applyItems(unit62_5), applyItems(unit64_5)],

    6: [applyItems(unit61_6), applyItems(unit62_6), applyItems(unit64_6), applyItems(unit63_6)],
    7: [],
    8: [],
    9: [],
    10: [],
};

//////////////////////// ENEMY 7 //////////////////

// 1

const unit71_magic = createHero(magicHero);
addItem(unit71_magic, wand1);
unit71_magic.skills.push(magicAttack);

const unit72_goblin = { ...goblinUnit };

// 2

const unit71_magic_2 = { ...unit71_magic };
unit71_magic_2.skills = [applyBurn, magicAttack];

const unit72_goblin_2 = { ...unit72_goblin };
addItem(unit72_goblin_2, itemGoblinBoneDagger);

const unit73_order_2 = createHero(orderHero);
unit73_order_2.skills.push(attrArmorSelf);
addItem(unit73_order_2, basic_jacket);

// 3

const unit71_magic_3 = { ...unit71_magic_2 };
levelUpUnit(unit71_magic_3);
unit71_magic_3.skills = [{ ...applyShock, isMcSkill: true }, magicAttack];
unit71_magic_3.items = [wand1_2];

const unit72_goblin_3 = { ...unit72_goblin_2 };

const unit73_order_3 = { ...unit73_order_2 };
levelUpUnit(unit73_order_3);
levelUpUnit(unit73_order_3);
unit73_order_3.basicArmor += 3;
unit73_order_3.skills = [attrArmorAll, attrArmorSelf];
unit73_order_3.items.push(hat21);

const unit74_goblin_3 = { ...goblinUnit };

// 4

//const unit71_magic_4 = { ...unit71_magic_3 };
const unit71_druid_4 = createHero(druidHero);
unit71_druid_4.basicMagicPower = 3;
unit71_druid_4.skills.push({ ...applyShock, isMcSkill: true });
unit71_druid_4.skills.push(applyShock);
unit71_druid_4.skills.push(magicAttack);
//unit71_magic_4.basicMagicPower += 1;
unit71_druid_4.items = [staff22];

const unit72_goblin_4 = { ...unit72_goblin_3 };
levelUpUnit(unit72_goblin_4);

//const unit73_order_4 = { ...unit73_order_3 };
const unit73_knight_4 = createHero(knightHero);
unit73_knight_4.basicArmor = 24;
unit73_knight_4.basicArmor = 25;
unit73_knight_4.skills.push(attrArmorAll);
unit73_knight_4.skills.push(attrArmorSelf);
unit73_knight_4.items = [basic_jacket, hat21, sword22];

const unit74_goblin_4 = { ...unit74_goblin_3 };
levelUpUnit(unit74_goblin_4);
unit74_goblin_4.items = [wand1_2];

// 5

const unit71_druid_5 = { ...unit71_druid_4 };
unit71_druid_5.basicMagicPower += 2;

const unit73_knight_5 = { ...unit73_knight_4 };
levelUpUnit(unit73_knight_5);
unit73_knight_5.basicArmor += 3;
unit73_knight_5.skills = [unit73_knight_4.skills[0], attrArmorAll_2, removeDebuffSkill, attrArmorAll];

const unit72_goblin_5 = { ...unit72_goblin_4 };

const unit74_goblin_5 = { ...unit74_goblin_4 };

// 6

const unit71_druid_6 = { ...unit71_druid_5 };
levelUpUnit(unit71_druid_5);
unit71_druid_6.basicArmor += 3;
unit71_druid_6.items.push(basic_jacket);

const unit73_knight_6 = { ...unit73_knight_5 };
levelUpUnit(unit73_knight_6);
unit73_knight_6.items = [jacket21, hat21, sword22, shield32];

const unit72_goblin_6 = { ...unit72_goblin_5 };
levelUpUnit(unit72_goblin_6);
levelUpUnit(unit72_goblin_6);

const unit74_goblin_6 = { ...unit74_goblin_5 };
levelUpUnit(unit72_goblin_5);

// 7

const unit71_druid_7 = { ...unit71_druid_6 };
unit71_druid_7.basicMaxHp += 3;

const unit73_knight_7 = { ...unit73_knight_6 };
unit73_knight_7.skills = [unit73_knight_6.skills[0], buffSelfMPorPP, attrArmorAll_2, attrArmorAll];

const unit72_goblin_7 = { ...unit72_goblin_6 };
levelUpUnit(unit72_goblin_7);

const unit74_goblin_7 = { ...unit74_goblin_6 };
levelUpUnit(unit74_goblin_7);

// hp aura - hack
unit71_druid_7.basicMaxHp += 10;
unit73_knight_7.basicMaxHp += 10;
unit72_goblin_7.basicMaxHp += 10;
unit74_goblin_7.basicMaxHp += 10;

const units_7_7 = [applyItems(unit73_knight_7), applyItems(unit71_druid_7), applyItems(unit72_goblin_7), applyItems(unit74_goblin_7)];

/** Enemy 7 - for RELEASE_1 */
export const enemy7: TDuelEnemy = {
    0: [unit72_goblin, applyItems(unit71_magic)],
    1: [unit72_goblin, applyItems(unit71_magic)],
    2: [applyItems(unit73_order_2), applyItems(unit72_goblin_2), applyItems(unit71_magic_2)],
    3: [applyItems(unit73_order_3), applyItems(unit72_goblin_3), applyItems(unit71_magic_3), applyItems(unit74_goblin_3)],
    4: [applyItems(unit73_knight_4), applyItems(unit71_druid_4), applyItems(unit72_goblin_4), applyItems(unit74_goblin_4)],
    5: [applyItems(unit73_knight_5), applyItems(unit71_druid_5), applyItems(unit72_goblin_5), applyItems(unit74_goblin_5)],
    6: [applyItems(unit73_knight_6), applyItems(unit71_druid_6), applyItems(unit72_goblin_6), applyItems(unit74_goblin_6)],
    7: units_7_7,
    8: units_7_7,
    9: units_7_7,
    10: units_7_7,
};

///////////////////////////////////////////////////////////

//

export const duelEnemies = [enemy1_test, enemy2, enemy3, enemy4_test, enemy5, enemy6, enemy7, enemy2];

