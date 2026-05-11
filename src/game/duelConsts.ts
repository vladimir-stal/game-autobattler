import { EHeroClass, EHeroClassType, EItemBonusType, EUnitType, IItem, IUnit, TDuelCards, TDuelEnemy } from "../types";
import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "./basicHeroConsts";
import { axe1, axe1_2, mace1, musical1, musical1_2, scepter1, scepter1_2, shield1, staff1, sword1, sword1_2, totem1, wand1, wand1_2 } from "./basicWeaponItemConsts";
import {
    basic_boots,
    basic_exp_bag,
    basic_hat,
    basic_hat_2,
    basic_heal,
    basic_heal_2,
    basic_jacket,
    basic_jacket_2,
    basic_pants,
    basic_pants_2,
    basic_ring_damage,
    basic_ring_regen,
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
    gladiatorHero,
    doomsayerHero,
    mimicHero,
} from "./mcHeroConsts";
import { buffNextBaAll, buffNextBaAll_2 } from "./skills/bardSkillConsts";
import {
    attackWithBleedSkill,
    heatUpSkill,
    chainToNextSkill,
    phycisalAttackSkill,
    phycisalAttackSkill_2,
    removeBuffSkill,
    removeDebuffSkill,
    attackWithBleedSkill_2,
    attackWithBleedSkill_3,
    phycisalAttackSkill_3,
} from "./skills/commonSkillConsts";
import { concentrateThePoisonSkill, magicAttackX3, poisonRandom, poisonRandom_2 } from "./skills/darkSkillConsts";
import { applyBurn, applyShock, magicAttack } from "./skills/magicSkillConsts";
import { buffNextBaXSelf, riposteSkill_2 } from "./skills/masterSkillConsts";
import { attrArmorAll, attrArmorAll_2, attrArmorSelf, attrAttackSelf, attrAttackSelf_2 } from "./skills/orderSkillConsts";
import { healFirst, healFirst_2, healLowHpSkill, healSelf } from "./skills/priestSkillConsts";
import { fireflySummonSkill, summonSkills } from "./skills/summonSkillConsts2";
import { buffNextBa, buffNextBa_2, buffNextBa_3, buffNextBaTimes_2, debuffWorthyFoe, mortalStrikeSkill } from "./skills/warriorSkillConsts";
import { attrDescArmor, totemAttackSkill, totemAttackSkill_2 } from "./skills/wildSkillConsts";
import { applyItemBonuses } from "./utils/itemUtils";
import { levelUpUnit } from "./utils/unitUtils";
import {
    axe21,
    axe22,
    dagger21,
    mace21,
    musical21,
    musical21_2,
    scepter21,
    scepter22,
    shield21,
    shield22,
    shield22_2,
    staff22,
    sword22,
    sword22_2,
    totem21,
    totem22,
    wand21,
    wand21_2,
    wand22,
} from "./weaponItem2Consts";
import { goblinUnit, goldGoblin1Unit, weakGoblinUnit } from "./units/goblinMobUnits";
import { gloves_war2, hat21, jacket21, jacket21_2, ring_regen2, ring_regen2_2 } from "./commonItemConsts2";
import { strongWolfUnit, wolfUnit } from "./units/wolfsMobUnits";
import { minstrelSkill } from "./skills/mc/minstrelSkills";
import { itemGoblinBoneDagger, itemPeasantPitchfork, regenMantle } from "./mobItemConsts";
import { axe32, dagger32, scepter31, shield31, shield32, sword31 } from "./weaponItem3Consts";
import { buffSelfMPorPP, increaseMaxHpSkill } from "./skills/commonSkill3Consts";
import { buildDuelEnemy } from "./utils/duelUtils";
import { removeBuff } from "./utils/battleUtils";
import { music5AddBuffTarget } from "./weaponItem5Consts";
import { warriorSummonMob, warriorSummonMob_3 } from "./units/summonMobUnits";
import { skeletonWarriorUnit } from "./units/skeletonsMobUnits";
import { peasantLastStandSkill } from "./skills/mobs/peasantMobSkills";
import { skeletonPoisonedFlames } from "./skills/mobs/skeletonMobSkills";
import { peasantUnit } from "./units/peasantMobUnits";

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

const createUnit = (templateUnit: IUnit) => {
    const { heroClassType, unitType, skills } = templateUnit;
    const hero = { ...templateUnit };
    hero.items = [];
    hero.skills = unitType === EUnitType.HERO && heroClassType === EHeroClassType.MULTI ? [skills[0]] : [];
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

export const enemy2: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 1: [{ unit: warriorHero }, { item: shield1 }, { item: basic_hat_2 }, { skill: buffNextBa }] },
    // day 2
    {
        1: [{ unit: peasantUnit }, { item: basic_boots }],
        2: [{ unit: priestHero }, { item: basic_ring_regen }, { item: basic_hat_2 }, { skill: healFirst }, { skill: healFirst_2 }],
        3: [
            { unit: warriorHero },
            { levelup: 1 },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { item: shield1 },
            { skill: buffNextBa },
            { skill: peasantLastStandSkill },
        ],
    },
    // day 3
    {
        1: [{ unit: peasantUnit }, { item: shield1 }],
        2: [
            { unit: priestHero },
            { levelup: 1 },
            { item: regenMantle },
            { attribute: { a: "basicArmor", v: 2 } },
            { item: basic_hat_2 },
            { skill: healLowHpSkill, chained: true },
            { skill: healFirst_2 },
        ],
        3: [
            { unit: warriorHero },
            { levelup: 2 },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { item: sword1 },
            { item: gloves_war2 },
            { skill: peasantLastStandSkill },
            { skill: debuffWorthyFoe },
        ],
    },
    // day 4
    {
        1: [{ unit: peasantUnit }, { item: shield1 }, { levelup: 1 }],
        2: [
            { unit: priestHero },
            { levelup: 2 },
            { attribute: { a: "basicHpRegen", v: 1 } },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { item: regenMantle },
            { attribute: { a: "basicArmor", v: 2 } },
            { item: basic_hat_2 },
            { skill: healLowHpSkill, chained: true },
            { skill: healFirst_2 },
        ],
        3: [
            { unit: gladiatorHero },
            //{ levelup: 2 },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicCritChance", v: 4 } },
            { item: sword1 },
            { item: sword1 },
            { item: gloves_war2 },
            { item: basic_ring_regen },
            { skill: peasantLastStandSkill },
            { skill: debuffWorthyFoe },
        ],
        4: [{ unit: bardHero }, { item: musical21 }, { item: jacket21 }, { skill: buffNextBaAll }],
    },
    // day 5
    {
        1: [{ unit: peasantUnit }, { item: shield1 }, { levelup: 1 }],
        2: [
            { unit: monkHero },
            //{ levelup: 2 },
            { attribute: { a: "basicHpRegen", v: 1 } },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { item: regenMantle },
            { attribute: { a: "basicArmor", v: 2 } },
            { item: basic_hat_2 },
            { item: scepter21 },
            { skill: healLowHpSkill, chained: true },
            { skill: healFirst_2 },
            { skill: heatUpSkill },
            { moveMcSkillToSlotIndex: 2 },
        ],
        3: [
            { unit: gladiatorHero },
            //{ levelup: 2 },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicPhysicalPower", v: 2 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicCritChance", v: 4 } },
            { item: sword1 },
            { item: sword1 },
            { item: gloves_war2 },
            { item: basic_ring_regen },
            { skill: peasantLastStandSkill },
            { skill: phycisalAttackSkill },
            { skill: debuffWorthyFoe },
        ],
        4: [{ unit: bardHero }, { levelup: 1 }, { item: musical21 }, { item: jacket21 }, { skill: buffNextBaAll }, { skill: buffNextBaAll }],
    },
    // day 6
    {
        1: [{ unit: peasantUnit }, { item: shield1 }, { levelup: 2 }],
        2: [
            { unit: monkHero },
            //{ levelup: 2 },
            { attribute: { a: "basicHpRegen", v: 1 } },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicArmor", v: 6 } },
            { item: jacket21_2 },
            { attribute: { a: "basicArmor", v: 2 } },
            { item: basic_hat_2 },
            { item: scepter21 },
            { item: scepter31 },
            { skill: healLowHpSkill, chained: true },
            { skill: totemAttackSkill, chained: true },
            { skill: healFirst_2 },
            { moveMcSkillToSlotIndex: 3 },
        ],
        3: [
            { unit: gladiatorHero },
            { levelup: 1 },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicPhysicalPower", v: 2 } },
            { attribute: { a: "basicArmor", v: 3 } },
            { attribute: { a: "basicCritChance", v: 4 } },
            { item: sword1 },
            { item: sword1 },
            { item: gloves_war2 },
            { item: basic_ring_regen },
            { skill: phycisalAttackSkill_2, chained: true },
            { skill: peasantLastStandSkill },
            { skill: debuffWorthyFoe },
        ],
        4: [{ unit: doomsayerHero }, { item: musical21 }, { item: regenMantle }, { skill: skeletonPoisonedFlames }, { skill: buffNextBaAll_2 }],
    },
]);

//////////////////////// ENEMY 3 //////////////////

// 0

const unit31 = createUnit(bardHero);
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

const unit32_2 = createUnit(peasantUnit);

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

const unit31_4 = createUnit(jesterHero);
unit31_4.items = [musical1_2, basic_hat];
unit31_4.skills = unit31_4.skills.concat([...unit31_3.skills]);

const unit32_4 = { ...peasantUnit };

const unit33_4 = { ...unit33_3 };
unit33_4.items = [...unit33_3.items];
unit33_4.skills = [...unit33_3.skills];
levelUpUnit(unit33_4);

const unit34_4 = createUnit(masterHero);
addItem(unit34_4, sword1_2);
unit34_4.skills.push(phycisalAttackSkill);
unit34_4.skills.push(phycisalAttackSkill);

// 5

const unit31_5 = { ...unit31_4 };
unit31_5.items = [...unit31_4.items];
unit31_5.skills = [...unit31_4.skills];

const unit32_5 = { ...peasantUnit };

const unit33_5 = createUnit(forestSpiritHero);
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

const unit34_6 = createUnit(hunterHero);
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
    {
        1: [{ unit: summonHero }, { item: scepter1_2 }, { skill: fireflySummonSkill }, { levelup: 1 }],
        2: [{ unit: darkHero }, { item: totem22 }, { skill: poisonRandom_2 }],
    },
    // day 3
    {
        1: [{ unit: summonHero }, { item: scepter1_2 }, { item: basic_pants }, { skill: fireflySummonSkill }, { levelup: 2 }],
        2: [{ unit: darkHero }, { item: totem22 }, { skill: poisonRandom_2 }, { levelup: 1 }],
    },
    // day 4
    {
        1: [{ unit: witchHero }, { item: scepter1_2 }, { item: basic_pants }, { item: musical21 }, { item: basic_hat }, { skill: fireflySummonSkill }],
        2: [{ unit: darkHero }, { item: totem22 }, { skill: poisonRandom_2 }, { levelup: 2 }],
        3: [{ unit: darkHero }, { item: wand21 }, { skill: poisonRandom }],
    },
    // day 5
    {
        1: [{ unit: witchHero }, { item: scepter1_2 }, { item: basic_pants }, { item: musical21_2 }, { item: basic_hat }, { skill: fireflySummonSkill }],
        2: [{ unit: predatorHero }, { item: totem22 }, { item: axe22 }, { item: basic_hat }, { skill: poisonRandom_2 }],
        3: [{ unit: darkHero }, { item: wand21 }, { skill: poisonRandom }, { levelup: 1 }],
    },
    // day 6
    {
        1: [
            { unit: witchHero },
            { item: scepter1_2 },
            { item: basic_pants },
            { item: musical21_2 },
            { item: basic_hat },
            { skill: fireflySummonSkill },
            { levelup: 1 },
        ],
        2: [{ unit: predatorHero }, { item: totem22 }, { item: axe22 }, { item: basic_hat }, { item: basic_hat }, { skill: poisonRandom_2 }, { levelup: 1 }],
        3: [{ unit: predatorHero }, { item: wand21_2 }, { item: wand1_2 }, { skill: poisonRandom }],
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
            { skill: chainToNextSkill },
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
            { skill: chainToNextSkill },
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
            { skill: chainToNextSkill },
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
            { skill: chainToNextSkill },
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

export const enemy6: TDuelEnemy = buildDuelEnemy([
    // day 1
    {
        1: [{ unit: masterHero }, { item: sword1 }, { item: basic_ring_regen }, { skill: buffNextBaXSelf }],
    },
    // day 2
    {
        1: [
            { unit: masterHero },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { item: sword1 },
            { item: basic_ring_regen },
            { skill: buffNextBaXSelf },
        ],
        2: [{ unit: warriorHero }, { item: shield21 }, { item: basic_ring_damage }, { skill: buffNextBa }, { skill: buffNextBa }],
        3: [{ unit: warriorSummonMob }],
        4: [{ unit: goldGoblin1Unit }],
    },
    // day 3
    {
        1: [
            { unit: masterHero },
            { levelup: 2 },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicMagicPower", v: 1 } },
            { attribute: { a: "basicArmor", v: 6 } },
            { item: sword1 },
            { item: basic_ring_regen },
            { skill: buffNextBaXSelf },
        ],
        2: [{ unit: warriorHero }, { item: shield21 }, { item: ring_regen2 }, { skill: buffNextBa_2, chained: true }, { skill: buffNextBa_2, chained: true }],
        3: [{ unit: warriorSummonMob }],
        4: [{ unit: wolfUnit }],
    },
    // day 4
    {
        1: [
            { unit: assasinHero },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicMagicPower", v: 2 } },
            { attribute: { a: "basicArmor", v: 9 } },
            { attribute: { a: "basicCritChance", v: 10 } },
            { item: axe32 },
            { item: basic_ring_regen },
            { skill: attackWithBleedSkill },
            { skill: buffNextBaXSelf },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: warriorHero },
            { levelup: 2 },
            { item: shield21 },
            { item: ring_regen2 },
            { skill: buffNextBa_2, chained: true },
            { skill: buffNextBa_2, chained: true },
        ],
        3: [{ unit: wolfUnit }],
        4: [{ unit: warriorSummonMob }, { attribute: { a: "basicMaxHp", v: 4 } }],
    },
    // day 5
    {
        1: [
            { unit: assasinHero },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicMagicPower", v: 2 } },
            { attribute: { a: "basicArmor", v: 9 } },
            { attribute: { a: "basicCritChance", v: 10 } },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { item: axe32 },
            { item: basic_ring_regen },
            { skill: attackWithBleedSkill },
            { skill: buffNextBaXSelf },
            { skill: riposteSkill_2 },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: paladinHero },
            { item: dagger32 },
            { item: scepter31 },
            { item: ring_regen2 },
            { skill: buffNextBa_2, chained: true },
            { skill: buffNextBa_2, chained: true },
            { skill: buffNextBaTimes_2 },
            { moveMcSkillToSlotIndex: 3 },
        ],
        3: [{ unit: wolfUnit }],
        4: [{ unit: warriorSummonMob }, { item: shield21 }, { attribute: { a: "basicMaxHp", v: 4 } }],
    },
    // day 6
    {
        1: [
            { unit: assasinHero },
            { levelup: 1 },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { attribute: { a: "basicMagicPower", v: 2 } },
            { attribute: { a: "basicArmor", v: 9 } },
            { attribute: { a: "basicCritChance", v: 10 } },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { item: axe32 },
            { item: dagger21 },
            { item: basic_ring_regen },
            { skill: attackWithBleedSkill },
            { skill: buffNextBaXSelf },
            { skill: riposteSkill_2 },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: paladinHero },
            { levelup: 1 },
            { item: dagger32 },
            { attribute: { a: "basicPhysicalPower", v: 1 } },
            { item: scepter31 },
            { item: ring_regen2 },
            { skill: buffNextBa_3, chained: true },
            { skill: mortalStrikeSkill, chained: true },
            { skill: buffNextBaTimes_2 },
            { moveMcSkillToSlotIndex: 3 },
        ],
        3: [{ unit: wolfUnit }, { attribute: { a: "basicMaxHp", v: 4 } }],
        4: [{ unit: warriorSummonMob }, { item: shield21 }, { attribute: { a: "basicMaxHp", v: 4 } }],
    },
]);

//////////////////////// ENEMY 7 //////////////////

// 1

const unit71_magic = createUnit(magicHero);
addItem(unit71_magic, wand1);
unit71_magic.skills.push(magicAttack);

const unit72_goblin = createUnit(goblinUnit);

// 2

const unit71_magic_2 = { ...unit71_magic };
unit71_magic_2.skills = [applyBurn, magicAttack];

const unit72_goblin_2 = { ...unit72_goblin };
addItem(unit72_goblin_2, itemGoblinBoneDagger);

const unit73_order_2 = createUnit(orderHero);
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

const unit74_goblin_3 = createUnit(goblinUnit);

// 4

//const unit71_magic_4 = { ...unit71_magic_3 };
const unit71_druid_4 = createUnit(druidHero);
unit71_druid_4.basicMagicPower = 3;
unit71_druid_4.skills.push({ ...applyShock, isMcSkill: true });
unit71_druid_4.skills.push(applyShock);
unit71_druid_4.skills.push(magicAttack);
//unit71_magic_4.basicMagicPower += 1;
unit71_druid_4.items = [staff22];

const unit72_goblin_4 = { ...unit72_goblin_3 };
levelUpUnit(unit72_goblin_4);

//const unit73_order_4 = { ...unit73_order_3 };
const unit73_knight_4 = createUnit(knightHero);
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

// Enemy 8

export const enemy8: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 1: [{ unit: orderHero }, { item: shield1 }, { item: basic_jacket }, { skill: attrAttackSelf_2 }] },
    // day 2
    {
        1: [
            { unit: orderHero },
            { levelup: 1 },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicCritChance", v: 4 } },
            { item: shield1 },
            { item: basic_jacket_2 },
            { skill: attrAttackSelf_2 },
        ],
        2: [{ unit: darkHero }, { item: totem1 }, { item: basic_hat }, { skill: poisonRandom }],
    },
    // day 3
    {
        1: [
            { unit: orderHero },
            { levelup: 2 },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicCritChance", v: 4 } },
            { item: shield1 },
            { item: basic_jacket_2 },
            { attribute: { a: "basicMaxHp", v: 1 } },
            { skill: attrAttackSelf_2 },
        ],
        2: [{ unit: darkHero }, { item: totem1 }, { item: ring_regen2_2 }, { skill: magicAttackX3, chained: true }, { skill: poisonRandom }],
        3: [{ unit: warriorSummonMob }, { item: basic_hat }],
    },
    // day 4
    {
        1: [
            { unit: forestSpiritHero },
            //{ levelup: 2 },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicCritChance", v: 8 } },
            { item: shield1 },
            { item: totem22 },
            { item: basic_jacket_2 },
            { item: basic_hat },
            { attribute: { a: "basicMaxHp", v: 2 } },
            { skill: attrAttackSelf_2 },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: necromancerHero },
            { attribute: { a: "basicMagicPower", v: 5 } },
            { item: totem1 },
            { item: wand22 },
            { item: ring_regen2_2 },
            { attribute: { a: "basicHpRegen", v: 1 } },
            { skill: magicAttackX3, chained: true },
            { skill: poisonRandom },
            { skill: poisonRandom },
        ],
        3: [{ unit: warriorSummonMob_3 }],
        4: [{ unit: warriorSummonMob }],
    },
    // day 5
    {
        1: [
            { unit: forestSpiritHero },
            { levelup: 1 },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicCritChance", v: 8 } },
            { attribute: { a: "basicEvasionChance", v: 2 } },
            { item: shield1 },
            { item: totem1 },
            { item: basic_jacket_2 },
            { item: basic_hat },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { skill: attrAttackSelf_2 },
            { skill: increaseMaxHpSkill },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: necromancerHero },
            { attribute: { a: "basicMagicPower", v: 5 } },
            { item: totem1 },
            { item: wand22 },
            { item: ring_regen2_2 },
            { attribute: { a: "basicHpRegen", v: 2 } },
            { skill: magicAttackX3, chained: true },
            { skill: poisonRandom_2 },
            { skill: concentrateThePoisonSkill, chained: true },
        ],
        3: [{ unit: warriorSummonMob_3 }],
        4: [{ unit: skeletonWarriorUnit }, { item: totem22 }],
    },
    // day 6
    {
        1: [
            { unit: forestSpiritHero },
            { levelup: 1 },
            { attribute: { a: "basicMaxHp", v: 3 } },
            { attribute: { a: "basicCritChance", v: 8 } },
            { attribute: { a: "basicEvasionChance", v: 2 } },
            { item: axe32 },
            { item: totem1 },
            { item: basic_jacket_2 },
            { item: basic_hat },
            { attribute: { a: "basicMaxHp", v: 4 } },
            { skill: attrAttackSelf_2 },
            { skill: attrArmorSelf, chained: true },
            { skill: increaseMaxHpSkill },
            { moveMcSkillToSlotIndex: 1 },
        ],
        2: [
            { unit: necromancerHero },
            { levelup: 1 },
            { attribute: { a: "basicMagicPower", v: 5 } },
            { item: totem1 },
            { item: wand22 },
            { item: ring_regen2_2 },
            { attribute: { a: "basicHpRegen", v: 3 } },
            { skill: magicAttackX3, chained: true },
            { skill: poisonRandom_2 },
            { skill: concentrateThePoisonSkill, chained: true },
        ],
        3: [{ unit: warriorSummonMob_3 }],
        4: [{ unit: skeletonWarriorUnit }, { item: totem22 }],
    },
]);


export const enemy9: TDuelEnemy = buildDuelEnemy([
    // day 1
    { 
        1: [{ unit: masterHero }, { item: sword1 }, { skill: buffNextBaXSelf }],
        2: [{ unit: warriorSummonMob }, {item: staff1}],
        3: [{ unit: warriorSummonMob}],
        4: [{ unit: warriorSummonMob}]
    },
    // day 2
    { 
        1: [
            { unit: masterHero }, {levelup: 2},
            { attribute: {a:"basicMaxHp", v:3}},
            { attribute: {a:"basicEvasionChance", v:2}},
            { item: axe1 }, {skill: phycisalAttackSkill},
            { skill: buffNextBaXSelf }],
        2: [{ unit: warriorSummonMob}, {item: staff1}],
        3: [{ unit: warriorSummonMob}, {item: sword1}],
        4: [{ unit: warriorSummonMob}]
    },
    // day 3
    { 
        1: [
            { unit: mimicHero },
            { attribute: {a:"basicMaxHp", v:9}},
            { attribute: {a:"basicEvasionChance", v:4}},
            { attribute: {a:"basicArmor", v:3}},
            { item: axe1_2 }, {item: jacket21},
            { item: regenMantle }, {item: basic_pants},
            { skill: attackWithBleedSkill, chained: true },
            { skill: phycisalAttackSkill},
            { moveMcSkillToSlotIndex: 1}],
        2: [{ unit: warriorSummonMob}, {levelup:1}, {item: staff1}],
        3: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}],
        4: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}]
    },
    // day 4
    { 
        1: [
            { unit: mimicHero }, {levelup: 1},
            { attribute: {a:"basicMaxHp", v:9}},
            { attribute: {a:"basicEvasionChance", v:4}},
            { attribute: {a:"basicArmor", v:3}},
            { attribute: {a:"basicHpRegen", v:1}},
            { attribute: {a:"basicCritChance", v:2}},
            { attribute: {a:"basicPhysicalPower", v:3}},
            { item: axe1_2 }, {item: jacket21},
            { item: regenMantle }, {item: basic_pants},
            { skill: attackWithBleedSkill_2, chained: true },
            { skill: chainToNextSkill, chained: true},
            { skill: phycisalAttackSkill_2},
            { moveMcSkillToSlotIndex: 1}],
        2: [{ unit: warriorSummonMob}, {levelup:1}, {item: staff1}],
        3: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}],
        4: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}]
    },
    // day 5
    { 
        1: [
            { unit: mimicHero }, {levelup: 1},
            { attribute: {a:"basicMaxHp", v:9}},
            { attribute: {a:"basicEvasionChance", v:4}},
            { attribute: {a:"basicArmor", v:3}},
            { attribute: {a:"basicHpRegen", v:2}},
            { attribute: {a:"basicCritChance", v:2}},
            { attribute: {a:"basicPhysicalPower", v:3}},
            { attribute: {a:"basicMagicPower", v:2}},
            { item: axe1_2 }, {item: jacket21},
            { item: regenMantle }, {item: sword22},
            { skill: attackWithBleedSkill_3, chained: true },
            { skill: chainToNextSkill, chained: true},
            { skill: phycisalAttackSkill_2},
            { moveMcSkillToSlotIndex: 1}],
        2: [{ unit: warriorSummonMob}, {levelup:1}, {item: staff1}],
        3: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}],
        4: [{ unit: warriorSummonMob}, {levelup:1}, {item: sword1}]
    },
    // day 6
    { 
        1: [
            { unit: mimicHero }, {levelup: 1},
            { attribute: {a:"basicMaxHp", v:9}},
            { attribute: {a:"basicEvasionChance", v:4}},
            { attribute: {a:"basicArmor", v:3}},
            { attribute: {a:"basicHpRegen", v:3}},
            { attribute: {a:"basicCritChance", v:2}},
            { attribute: {a:"basicPhysicalPower", v:3}},
            { attribute: {a:"basicMagicPower", v:2}},
            { item: axe1_2 }, {item: jacket21},
            { item: regenMantle }, {item: sword31},
            { skill: attackWithBleedSkill_3, chained: true },
            { skill: attackWithBleedSkill, chained: true},
            { skill: phycisalAttackSkill_3},
            { moveMcSkillToSlotIndex: 1}],
        2: [{ unit: warriorSummonMob}, {levelup:2}, {item: sword22}],
        3: [{ unit: warriorSummonMob}, {levelup:2}, {item: staff1}],
        4: [{ unit: warriorSummonMob}, {levelup:2}, {item: sword1_2}]
    },
]);

///////////////////////////////////////////////////////////

//

export const duelEnemies = [enemy1_test, enemy2, enemy3, enemy4_test, enemy5, enemy6, enemy7, enemy8, enemy9];

export const duelEnemyNames = [
    "Lolodin87",
    "xXxRatWarxXx",
    "MeAndMySon",
    "CuteWitch99",
    "NobodyExpects",
    "Holy_Dagger_13",
    "shocKING",
    "MisterDETH",
    "ClownSticks",
]