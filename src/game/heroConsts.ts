import { EHeroClass, IUnit, EDebuffType, THeroAttribute } from "../types";
import { bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, summonHero, warriorHero, wildHero } from "./basicHeroConsts";
import {
    alchemistHero,
    assasinHero,
    barbarianHero,
    battleMageHero,
    beastMasterHero,
    blackKnightHero,
    bladedancerHero,
    commanderHero,
    doomsayerHero,
    druidHero,
    duelistHero,
    exorcistHero,
    forestSpiritHero,
    gladiatorHero,
    heraldHero,
    hunterHero,
    illusionistHero,
    inquisitorHero,
    knightHero,
    magicBardHero,
    mimicHero,
    minstrelHero,
    monkHero,
    necromancerHero,
    oracleHero,
    paladinHero,
    predatorHero,
    bishopHero,
    runecasterHero,
    samuraiHero,
    shadowMasterHero,
    shamanHero,
    sorcererHero,
    warlockHero,
    witchHero,
    zealotHero,
} from "./mcHeroConsts";

export const BASIC_CLASSES = [
    EHeroClass.BARD,
    //EHeroClass.CHAOS,
    EHeroClass.DARK,
    EHeroClass.MAGIC,
    EHeroClass.MASTER,
    EHeroClass.ORDER,
    EHeroClass.PRIEST,
    EHeroClass.SUMMON,
    //EHeroClass.TRICK,
    EHeroClass.WARRIOR,
    EHeroClass.WILD,
];

export const basicHeroAttributes: THeroAttribute[] = [
    "basicArmor",
    "basicCritChance",
    "basicEvasionChance",
    //"basicHpRegen",
    "basicMaxHp",
    "basicMagicPower",
    "basicPhysicalPower",
];

export const PHYSICAL_RESIST_DESCREASE_DEBUFFS = [EDebuffType.PHYSICAL_RESIST_DECREASE, EDebuffType.MARK_HUNTER, EDebuffType.MARK_PREDATOR];

export const basicClassHeroes: IUnit[] = //[masterHero, magicHero, wildHero].map((unit) => {
    [bardHero, darkHero, magicHero, masterHero, orderHero, priestHero, warriorHero, wildHero, summonHero].map((unit) => {
        //[bardHero, masterHero, magicHero].map((unit) => {
        return { ...unit };
    });

export const mcClassHeroes: IUnit[] = [
    paladinHero,
    barbarianHero,
    magicHero,
    knightHero,
    heraldHero,
    shamanHero,
    samuraiHero,
    necromancerHero,
    beastMasterHero,
    gladiatorHero,
    warlockHero,
    runecasterHero,
    commanderHero,
    doomsayerHero,
    minstrelHero,
    magicBardHero,
    duelistHero,
    mimicHero,
    forestSpiritHero,
    oracleHero,
    shadowMasterHero,
    druidHero,
    battleMageHero,
    sorcererHero,
    assasinHero,
    inquisitorHero,
    witchHero,
    monkHero,
    hunterHero,
    predatorHero,
    bladedancerHero,
    alchemistHero,
    zealotHero,
    exorcistHero,
    illusionistHero,
    blackKnightHero,
    bishopHero,
].map((unit) => {
    return { ...unit };
});

export const basicClassHeroesLvl0: IUnit[] = basicClassHeroes;

export const basicClassHeroesLvl1: IUnit[] = basicClassHeroes;

export const basicClassHeroesLvl2: IUnit[] = basicClassHeroes.map((unit) => {
    return { ...unit, level: 2, basicMaxHp: unit.basicMaxHp + 2, basicAttack: unit.basicAttack + 1 };
});

export const basicClassHeroesLvl3: IUnit[] = basicClassHeroes.map((unit) => {
    return { ...unit, level: 3, basicMaxHp: unit.basicMaxHp + 4, basicAttack: unit.basicAttack + 2 };
});

export const basicClassHeroesLvl4: IUnit[] = basicClassHeroes.map((unit) => {
    return { ...unit, level: 4, basicMaxHp: unit.basicMaxHp + 6, basicAttack: unit.basicAttack + 3 };
});

////

export const mcClassHeroesLvl0: IUnit[] = basicClassHeroes;

export const basicClassHeroesByLevel: Record<number, IUnit[]> = {
    0: basicClassHeroesLvl0,
    1: basicClassHeroesLvl1,
    2: basicClassHeroesLvl2,
    3: basicClassHeroesLvl3,
    4: basicClassHeroesLvl4,
};

export const mcClassHeroesByLevel: Record<number, IUnit[]> = {
    0: basicClassHeroesLvl0,
    1: basicClassHeroesLvl1,
    2: basicClassHeroesLvl2,
    3: basicClassHeroesLvl3,
    4: basicClassHeroesLvl4,
};

// export const basicClassHeroes: IUnit[] = [bladedancerHero, zealotHero, exorcistHero].map((unit) => {
//     return { ...unit, unitType: EUnitType.HERO, level: 1, exp: 0 };
// });
