import { EHeroClass, EHeroClassType, EItemBonusType, IItem, IUnit } from "../types";
import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "./basicHeroConsts";
import { axe1, mace1, musical1, musical1_2, scepter1, scepter1_2, shield1, staff1, sword1, sword1_2, totem1, wand1, wand1_2 } from "./basicWeaponItemConsts";
import {
    basic_boots,
    basic_exp_bag,
    basic_hat,
    basic_hat_2,
    basic_jacket,
    basic_pants,
    basic_ring_damage,
    basic_ring_regen,
    gloves_war2,
} from "./commonItemConsts";
import {
    beastMasterHero,
    blackKnightHero,
    druidHero,
    forestSpiritHero,
    heraldHero,
    hunterHero,
    knightHero,
    magicBardHero,
    minstrelHero,
    monkHero,
    paladinHero,
    predatorHero,
    samuraiHero,
    witchHero,
} from "./mcHeroConsts";
import { buffNextBaAll, buffNextBaAll_2 } from "./skills/bardSkillConsts";
import { phycisalAttackSkill } from "./skills/commonSkillConsts";
import { magicAttackX3, poisonRandom, poisonRandom_2 } from "./skills/darkSkillConsts";
import { magicAttack } from "./skills/magicSkillConsts";
import { buffNextBaIgnoreArmorSelf, buffNextBaXSelf } from "./skills/masterSkillConsts";
import { attrArmorSelf } from "./skills/orderSkillConsts";
import { healFirst, healFirst_2 } from "./skills/priestSkillConsts";
import { fireflySummonSkill } from "./skills/summonSkillConsts";
import { buffNextBa } from "./skills/warriorSkillConsts";
import { attrDescArmor, totemAttackSkill } from "./skills/wildSkillConsts";
import { peasantUnit, weakGoblinUnit } from "./unitConsts";
import { applyItemBonuses } from "./utils/itemUtils";
import { levelUpUnit } from "./utils/unitUtils";
import { axe22, mace21, musical21, musical21_2, scepter22, shield22, sword22_2, totem21, totem22, wand21, wand21_2 } from "./weaponItem2Consts";

type TDuelEnemy = Record<number, (IUnit | null)[]>;

const addItem = (unit: IUnit, item: IItem) => {
    unit.items.push(item);
    //applyItemBonuses(item, unit);
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

// 1

const unit11 = createHero(warriorHero);
addItem(unit11, shield1);
unit11.skills.push(phycisalAttackSkill);

// 2

const unit11_2 = { ...unit11 };
unit11_2.items = [...unit11.items];
unit11_2.skills = [...unit11.skills];
levelUpUnit(unit11_2);

const unit12_2 = createHero(masterHero);
unit12_2.skills.push(buffNextBaXSelf);

// 3

const unit11_3 = { ...unit11_2 };
unit11_3.items = [...unit11_2.items];
unit11_3.skills = [...unit11_2.skills];
levelUpUnit(unit11_3);
addItem(unit11_3, basic_hat);

const unit12_3 = { ...unit12_2 };
unit12_3.items = [...unit12_2.items];
unit12_3.skills = [...unit12_2.skills];
levelUpUnit(unit12_3);

// 4

const unit11_4 = createHero(paladinHero);
unit11_4.skills.push(healFirst);
unit11_4.skills.push(phycisalAttackSkill);
unit11_4.items = [...unit11_3.items];

const unit12_4 = { ...unit12_3 };
unit12_4.items = [...unit12_3.items];
unit12_4.skills = [...unit12_3.skills];
levelUpUnit(unit12_4);

const unit13_4 = createHero(darkHero);
unit13_4.skills.push(magicAttackX3);
unit12_4.items.push(wand1_2);

// 5

const unit11_5 = { ...unit11_4 };
unit11_5.items = [...unit11_4.items];
unit11_5.skills = [...unit11_4.skills];
unit11_5.skills[1] = healFirst_2;
unit11_5.skills[2] = phycisalAttackSkill;
unit11_5.skills[3] = phycisalAttackSkill;

const unit12_5 = createHero(samuraiHero);
unit12_5.items = [...unit12_4.items];
unit11_4.skills.push(buffNextBaXSelf);

const unit13_5 = createHero(darkHero);
unit13_5.items = [...unit13_4.items];
unit13_5.skills = [...unit13_4.skills];
unit13_5.skills.push(magicAttackX3);
levelUpUnit(unit13_5);
levelUpUnit(unit13_5);

//

/** Duel units for each day */
export const enemy1: TDuelEnemy = {
    0: [unit11],
    1: [unit11],
    2: [unit11_2, unit12_2],
    3: [unit11_3, unit12_3],
    4: [unit11_4, unit12_4, unit13_4],
    5: [unit11_4, unit12_4, unit13_4],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
};

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

const unit31_4 = createHero(magicBardHero);
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

// 0

const unit41 = createHero(summonHero);
addItem(unit41, scepter1);
unit41.skills.push(fireflySummonSkill);

// 1

const unit41_1 = { ...unit41 };
unit41_1.items = [scepter1_2];
unit41_1.skills = [...unit41.skills];

// 2

const unit41_2 = { ...unit41_1 };
unit41_2.items = [...unit41_1.items];
unit41_2.skills = [...unit41_1.skills];
levelUpUnit(unit41_2);

const unit42_2 = createHero(darkHero);
unit42_2.items = [totem22];
unit42_2.skills.push(poisonRandom_2);

// 3

const unit41_3 = { ...unit41_2 };
unit41_3.items = [...unit41_2.items, basic_pants];
unit41_3.skills = [...unit41_2.skills];
levelUpUnit(unit41_3);

const unit42_3 = { ...unit42_2 };
unit42_3.items = [...unit42_2.items];
unit42_3.skills = [...unit42_2.skills];
levelUpUnit(unit42_3);

// 4

const unit41_4 = createHero(witchHero);
unit41_4.items = [...unit41_3.items, musical21, basic_hat];
unit41_4.skills = unit41_4.skills.concat([...unit41_3.skills]);

const unit42_4 = { ...unit42_3 };
unit42_4.items = [...unit42_3.items];
unit42_4.skills = [...unit42_3.skills];
levelUpUnit(unit42_4);

const unit43_4 = createHero(darkHero);
addItem(unit43_4, wand21);
unit43_4.skills.push(poisonRandom);

// 5

const unit41_5 = { ...unit41_4 };
unit41_5.items = [musical21_2, scepter1_2, basic_hat, basic_pants];
unit41_5.skills = [...unit41_4.skills];

const unit42_5 = createHero(predatorHero);
unit42_5.items = [...unit42_4.items, axe22, basic_hat];
unit42_5.skills = unit42_5.skills.concat([...unit42_4.skills]);

const unit43_5 = { ...unit43_4 };
unit43_5.items = [...unit43_4.items];
unit43_5.skills = [...unit43_4.skills];

// 6

const unit41_6 = { ...unit41_5 };
unit41_6.items = [...unit41_5.items];
unit41_6.skills = [...unit41_5.skills];
levelUpUnit(unit41_6);

const unit42_6 = { ...unit42_5 };
unit42_6.items = [...unit42_5.items, basic_hat];
unit42_6.skills = [...unit42_5.skills];
levelUpUnit(unit42_6);

const unit43_6 = createHero(predatorHero);
unit43_6.items = [wand21_2, wand1_2];
unit43_6.skills = unit43_6.skills.concat([...unit43_5.skills]);

//

/** Enemy 4 - Duel units for each day */
export const enemy4: TDuelEnemy = {
    0: [applyItems(unit41)],
    1: [applyItems(unit41_1)],
    2: [applyItems(unit41_2), applyItems(unit42_2)],
    3: [applyItems(unit41_3), applyItems(unit42_3)],
    4: [applyItems(unit41_4), applyItems(unit42_4), applyItems(unit43_4)],
    5: [applyItems(unit41_5), applyItems(unit42_5), applyItems(unit43_5)],
    6: [applyItems(unit41_6), applyItems(unit42_6), applyItems(unit43_6)],
    7: [],
    8: [],
    9: [],
    10: [],
};

//////////////////////// ENEMY 5 //////////////////

// 0

const unit51 = createHero(priestHero);
addItem(unit51, mace1);
unit51.skills.push(healFirst);

// 1

const unit51_1 = { ...unit51 };
unit41_1.items = [...unit51.items, basic_pants];
unit41_1.skills = [...unit51.skills];

// 2

const unit51_2 = { ...unit51_1 };
unit51_2.items = [...unit51_1.items];
unit51_2.skills = [...unit51_1.skills];
levelUpUnit(unit51_2);

const unit52_2 = createHero(orderHero);
unit52_2.items = [basic_ring_damage];
unit52_2.skills.push(attrArmorSelf);

// 3

const unit51_3 = { ...unit51_2 };
unit51_3.items = [scepter22, basic_pants];
unit51_3.skills = [...unit51_2.skills];
levelUpUnit(unit51_3);

const unit52_3 = { ...unit52_2 };
unit52_3.items = [mace1, basic_jacket];
unit52_3.skills = [...unit52_2.skills];
levelUpUnit(unit52_3);

// 4

const unit51_4 = createHero(monkHero);
unit51_4.items = [scepter22, mace1, basic_pants, basic_hat];
unit51_4.skills = unit51_4.skills.concat([...unit51_3.skills]);

const unit52_4 = { ...unit52_3 };
unit52_4.items = [shield22, basic_jacket];
unit52_4.skills = [...unit52_3.skills];
levelUpUnit(unit52_4);

const unit53_4 = createHero(priestHero);
unit53_4.items = [musical1, basic_ring_damage];
unit53_4.skills.push(buffNextBaAll);

// 5

const unit51_5 = { ...unit51_4 };
unit51_5.items = [...unit51_4.items];
unit51_5.skills = [...unit51_4.skills];

const unit52_5 = createHero(knightHero);
unit52_5.items = [shield22, sword1, basic_jacket, basic_hat];
unit52_5.skills = unit52_5.skills.concat([attrArmorSelf, buffNextBa]);

const unit53_5 = { ...unit53_4 };
unit53_5.items = [musical1_2, basic_ring_damage];
unit53_5.skills = [...unit53_4.skills];
levelUpUnit(unit53_5);

// 6

const unit51_6 = { ...unit51_5 };
unit51_6.items = [...unit51_5.items];
unit51_6.skills = [...unit51_5.skills];

const unit52_6 = { ...unit52_5 };
unit52_6.items = [...unit52_5.items];
unit52_6.skills = [...unit52_5.skills, attrArmorSelf];
levelUpUnit(unit52_6);

const unit53_6 = createHero(heraldHero);
unit53_6.items = [];
unit53_6.skills = unit53_6.skills.concat([buffNextBaAll_2]);

const unit54_6 = createHero(bardHero);
unit54_6.items = [];
unit54_6.skills.push(buffNextBaAll);

//

/** Enemy 5 - Duel units for each day */
export const enemy5: TDuelEnemy = {
    0: [null, applyItems(unit51)],
    1: [null, applyItems(unit51_1)],
    2: [applyItems(unit52_2), applyItems(unit51_2)],
    3: [applyItems(unit52_3), applyItems(unit51_3)],
    4: [applyItems(unit52_4), applyItems(unit51_4), applyItems(unit53_4)],
    5: [applyItems(unit52_5), applyItems(unit51_5), applyItems(unit53_5)],
    6: [applyItems(unit52_6), applyItems(unit53_6), applyItems(unit51_6), applyItems(unit54_6)],
    7: [],
    8: [],
    9: [],
    10: [],
};

//////////////////////// ENEMY 6 //////////////////

// 0

const unit61 = createHero(orderHero);
addItem(unit61, shield1);
unit61.skills.push(healFirst);

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
unit61.skills = [magicAttack, magicAttack];

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

//

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

//

export const duelEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy1, enemy2];
