import { EHeroClass, EUnitType, IUnit } from "../../types";
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
} from "../mcHeroConsts";

const multiclasses: Record<string, EHeroClass> = {
    [EHeroClass.BARD + "_" + EHeroClass.DARK]: EHeroClass.DOOMSAYER,
    [EHeroClass.BARD + "_" + EHeroClass.MAGIC]: EHeroClass.MAGIC_BARD,
    [EHeroClass.BARD + "_" + EHeroClass.MASTER]: EHeroClass.DUELIST,
    [EHeroClass.BARD + "_" + EHeroClass.ORDER]: EHeroClass.HERALD,
    [EHeroClass.BARD + "_" + EHeroClass.PRIEST]: EHeroClass.MINSTREL,
    [EHeroClass.BARD + "_" + EHeroClass.SUMMON]: EHeroClass.WITCH,
    [EHeroClass.BARD + "_" + EHeroClass.WARRIOR]: EHeroClass.BLADEDANCER,
    [EHeroClass.BARD + "_" + EHeroClass.WILD]: EHeroClass.SHAMAN,
    //
    [EHeroClass.DARK + "_" + EHeroClass.BARD]: EHeroClass.DOOMSAYER,
    [EHeroClass.DARK + "_" + EHeroClass.MAGIC]: EHeroClass.WARLOCK,
    [EHeroClass.DARK + "_" + EHeroClass.MASTER]: EHeroClass.ASSASSIN,
    [EHeroClass.DARK + "_" + EHeroClass.ORDER]: EHeroClass.ZEALOT,
    [EHeroClass.DARK + "_" + EHeroClass.PRIEST]: EHeroClass.SHADOW_MASTER,
    [EHeroClass.DARK + "_" + EHeroClass.SUMMON]: EHeroClass.NECROMANCER,
    [EHeroClass.DARK + "_" + EHeroClass.WARRIOR]: EHeroClass.BLACK_KNIGHT,
    [EHeroClass.DARK + "_" + EHeroClass.WILD]: EHeroClass.PREDATOR,
    //
    [EHeroClass.MAGIC + "_" + EHeroClass.BARD]: EHeroClass.MAGIC_BARD,
    [EHeroClass.MAGIC + "_" + EHeroClass.DARK]: EHeroClass.WARLOCK,
    [EHeroClass.MAGIC + "_" + EHeroClass.MASTER]: EHeroClass.SORCERER,
    [EHeroClass.MAGIC + "_" + EHeroClass.ORDER]: EHeroClass.RUNECASTER,
    [EHeroClass.MAGIC + "_" + EHeroClass.PRIEST]: EHeroClass.ALCHEMIST,
    [EHeroClass.MAGIC + "_" + EHeroClass.SUMMON]: EHeroClass.ILLUSIONIST,
    [EHeroClass.MAGIC + "_" + EHeroClass.WARRIOR]: EHeroClass.BATTLE_MAGE,
    [EHeroClass.MAGIC + "_" + EHeroClass.WILD]: EHeroClass.DRUID,
    //
    [EHeroClass.MASTER + "_" + EHeroClass.BARD]: EHeroClass.DUELIST,
    [EHeroClass.MASTER + "_" + EHeroClass.DARK]: EHeroClass.ASSASSIN,
    [EHeroClass.MASTER + "_" + EHeroClass.MAGIC]: EHeroClass.SORCERER,
    [EHeroClass.MASTER + "_" + EHeroClass.ORDER]: EHeroClass.SAMURAI,
    [EHeroClass.MASTER + "_" + EHeroClass.PRIEST]: EHeroClass.BISHOP,
    [EHeroClass.MASTER + "_" + EHeroClass.SUMMON]: EHeroClass.MIMIC,
    [EHeroClass.MASTER + "_" + EHeroClass.WARRIOR]: EHeroClass.GLADIATOR,
    [EHeroClass.MASTER + "_" + EHeroClass.WILD]: EHeroClass.HUNTER,
    //
    [EHeroClass.ORDER + "_" + EHeroClass.BARD]: EHeroClass.HERALD,
    [EHeroClass.ORDER + "_" + EHeroClass.DARK]: EHeroClass.ZEALOT,
    [EHeroClass.ORDER + "_" + EHeroClass.MAGIC]: EHeroClass.RUNECASTER,
    [EHeroClass.ORDER + "_" + EHeroClass.MASTER]: EHeroClass.SAMURAI,
    [EHeroClass.ORDER + "_" + EHeroClass.PRIEST]: EHeroClass.INQUISITOR,
    [EHeroClass.ORDER + "_" + EHeroClass.SUMMON]: EHeroClass.ORACLE,
    [EHeroClass.ORDER + "_" + EHeroClass.WARRIOR]: EHeroClass.KNIGHT,
    [EHeroClass.ORDER + "_" + EHeroClass.WILD]: EHeroClass.FOREST_SPIRIT,
    //
    [EHeroClass.PRIEST + "_" + EHeroClass.BARD]: EHeroClass.MINSTREL,
    [EHeroClass.PRIEST + "_" + EHeroClass.DARK]: EHeroClass.SHADOW_MASTER,
    [EHeroClass.PRIEST + "_" + EHeroClass.MAGIC]: EHeroClass.ALCHEMIST,
    [EHeroClass.PRIEST + "_" + EHeroClass.MASTER]: EHeroClass.BISHOP,
    [EHeroClass.PRIEST + "_" + EHeroClass.ORDER]: EHeroClass.INQUISITOR,
    [EHeroClass.PRIEST + "_" + EHeroClass.SUMMON]: EHeroClass.EXORCIST,
    [EHeroClass.PRIEST + "_" + EHeroClass.WARRIOR]: EHeroClass.PALADIN,
    [EHeroClass.PRIEST + "_" + EHeroClass.WILD]: EHeroClass.MONK,
    //
    [EHeroClass.SUMMON + "_" + EHeroClass.BARD]: EHeroClass.WITCH,
    [EHeroClass.SUMMON + "_" + EHeroClass.DARK]: EHeroClass.NECROMANCER,
    [EHeroClass.SUMMON + "_" + EHeroClass.MAGIC]: EHeroClass.ILLUSIONIST,
    [EHeroClass.SUMMON + "_" + EHeroClass.MASTER]: EHeroClass.MIMIC,
    [EHeroClass.SUMMON + "_" + EHeroClass.ORDER]: EHeroClass.ORACLE,
    [EHeroClass.SUMMON + "_" + EHeroClass.PRIEST]: EHeroClass.EXORCIST,
    [EHeroClass.SUMMON + "_" + EHeroClass.WARRIOR]: EHeroClass.COMMANDER,
    [EHeroClass.SUMMON + "_" + EHeroClass.WILD]: EHeroClass.BEAST_MASTER,
    //
    [EHeroClass.WARRIOR + "_" + EHeroClass.BARD]: EHeroClass.BLADEDANCER,
    [EHeroClass.WARRIOR + "_" + EHeroClass.DARK]: EHeroClass.BLACK_KNIGHT,
    [EHeroClass.WARRIOR + "_" + EHeroClass.MAGIC]: EHeroClass.BATTLE_MAGE,
    [EHeroClass.WARRIOR + "_" + EHeroClass.MASTER]: EHeroClass.GLADIATOR,
    [EHeroClass.WARRIOR + "_" + EHeroClass.ORDER]: EHeroClass.KNIGHT,
    [EHeroClass.WARRIOR + "_" + EHeroClass.PRIEST]: EHeroClass.PALADIN,
    [EHeroClass.WARRIOR + "_" + EHeroClass.SUMMON]: EHeroClass.COMMANDER,
    [EHeroClass.WARRIOR + "_" + EHeroClass.WILD]: EHeroClass.BARBARIAN,
    //
    [EHeroClass.WILD + "_" + EHeroClass.BARD]: EHeroClass.SHAMAN,
    [EHeroClass.WILD + "_" + EHeroClass.DARK]: EHeroClass.PREDATOR,
    [EHeroClass.WILD + "_" + EHeroClass.MAGIC]: EHeroClass.DRUID,
    [EHeroClass.WILD + "_" + EHeroClass.MASTER]: EHeroClass.HUNTER,
    [EHeroClass.WILD + "_" + EHeroClass.ORDER]: EHeroClass.FOREST_SPIRIT,
    [EHeroClass.WILD + "_" + EHeroClass.PRIEST]: EHeroClass.MONK,
    [EHeroClass.WILD + "_" + EHeroClass.SUMMON]: EHeroClass.BEAST_MASTER,
    [EHeroClass.WILD + "_" + EHeroClass.WARRIOR]: EHeroClass.BARBARIAN,
};

export const getMcHeroByClass = (heroClass: EHeroClass): IUnit => {
    let unit;
    switch (heroClass) {
        case EHeroClass.MAGIC_BARD:
            unit = magicBardHero;
            break;
        case EHeroClass.DUELIST:
            unit = duelistHero;
            break;
        case EHeroClass.MIMIC:
            unit = mimicHero;
            break;
        case EHeroClass.MINSTREL:
            unit = minstrelHero;
            break;
        case EHeroClass.ORACLE:
            unit = oracleHero;
            break;
        case EHeroClass.RUNECASTER:
            unit = runecasterHero;
            break;
        case EHeroClass.SHADOW_MASTER:
            unit = shadowMasterHero;
            break;
        case EHeroClass.FOREST_SPIRIT:
            unit = forestSpiritHero;
            break;
        case EHeroClass.ALCHEMIST:
            unit = alchemistHero;
            break;
        case EHeroClass.ASSASSIN:
            unit = assasinHero;
            break;
        case EHeroClass.BARBARIAN:
            unit = barbarianHero;
            break;
        case EHeroClass.BATTLE_MAGE:
            unit = battleMageHero;
            break;
        case EHeroClass.BEAST_MASTER:
            unit = beastMasterHero;
            break;
        case EHeroClass.BLACK_KNIGHT:
            unit = blackKnightHero;
            break;
        case EHeroClass.BLADEDANCER:
            unit = bladedancerHero;
            break;
        case EHeroClass.COMMANDER:
            unit = commanderHero;
            break;
        case EHeroClass.DOOMSAYER:
            unit = doomsayerHero;
            break;
        case EHeroClass.DRUID:
            unit = druidHero;
            break;
        case EHeroClass.EXORCIST:
            unit = exorcistHero;
            break;
        case EHeroClass.GLADIATOR:
            unit = gladiatorHero;
            break;
        case EHeroClass.HERALD:
            unit = heraldHero;
            break;
        case EHeroClass.HUNTER:
            unit = hunterHero;
            break;
        case EHeroClass.ILLUSIONIST:
            unit = illusionistHero;
            break;
        case EHeroClass.INQUISITOR:
            unit = inquisitorHero;
            break;
        case EHeroClass.KNIGHT:
            unit = knightHero;
            break;
        case EHeroClass.MONK:
            unit = monkHero;
            break;
        case EHeroClass.NECROMANCER:
            unit = necromancerHero;
            break;
        case EHeroClass.PALADIN:
            unit = paladinHero;
            break;
        case EHeroClass.PREDATOR:
            unit = predatorHero;
            break;
        case EHeroClass.BISHOP:
            unit = bishopHero;
            break;
        case EHeroClass.SAMURAI:
            unit = samuraiHero;
            break;
        case EHeroClass.SHAMAN:
            unit = shamanHero;
            break;
        case EHeroClass.SORCERER:
            unit = sorcererHero;
            break;
        case EHeroClass.WARLOCK:
            unit = warlockHero;
            break;
        case EHeroClass.WITCH:
            unit = witchHero;
            break;
        case EHeroClass.ZEALOT:
            unit = zealotHero;
        default:
            unit = zealotHero;
    }
    return { ...unit, unitType: EUnitType.HERO, level: 1, exp: 0 };
};

export const getHeroMulticlass = (class1: EHeroClass, class2: EHeroClass): EHeroClass => {
    return multiclasses[class1 + "_" + class2];
};

/**
 * @returns two basic classes of multiclass hero
 */
export const getMulticlassSubclasses = (mcHeroClass: EHeroClass): EHeroClass[] => {
    switch (mcHeroClass) {
        case EHeroClass.ALCHEMIST:
            return [EHeroClass.PRIEST, EHeroClass.MAGIC];
        case EHeroClass.ASSASSIN:
            return [EHeroClass.DARK, EHeroClass.MASTER];
        case EHeroClass.BARBARIAN:
            return [EHeroClass.WILD, EHeroClass.WARRIOR];
        case EHeroClass.BATTLE_MAGE:
            return [EHeroClass.WARRIOR, EHeroClass.MAGIC];
        case EHeroClass.BEAST_MASTER:
            return [EHeroClass.WILD, EHeroClass.SUMMON];
        case EHeroClass.BLACK_KNIGHT:
            return [EHeroClass.DARK, EHeroClass.WARRIOR];
        case EHeroClass.BLADEDANCER:
            return [EHeroClass.BARD, EHeroClass.WARRIOR];
        case EHeroClass.COMMANDER:
            return [EHeroClass.SUMMON, EHeroClass.WARRIOR];
        case EHeroClass.DOOMSAYER:
            return [EHeroClass.BARD, EHeroClass.DARK];
        case EHeroClass.DRUID:
            return [EHeroClass.WILD, EHeroClass.MAGIC];
        case EHeroClass.EXORCIST:
            return [EHeroClass.PRIEST, EHeroClass.SUMMON];
        case EHeroClass.FOREST_SPIRIT:
            return [EHeroClass.WILD, EHeroClass.ORDER];
        case EHeroClass.GLADIATOR:
            return [EHeroClass.WARRIOR, EHeroClass.MASTER];
        case EHeroClass.HERALD:
            return [EHeroClass.BARD, EHeroClass.ORDER];
        case EHeroClass.HUNTER:
            return [EHeroClass.WILD, EHeroClass.MASTER];
        case EHeroClass.ILLUSIONIST:
            return [EHeroClass.MAGIC, EHeroClass.SUMMON];
        case EHeroClass.INQUISITOR:
            return [EHeroClass.PRIEST, EHeroClass.ORDER];
        case EHeroClass.KNIGHT:
            return [EHeroClass.ORDER, EHeroClass.WARRIOR];
        case EHeroClass.MAGIC_BARD:
            return [EHeroClass.MAGIC, EHeroClass.BARD];
        case EHeroClass.DUELIST:
            return [EHeroClass.MASTER, EHeroClass.BARD];
        case EHeroClass.MIMIC:
            return [EHeroClass.SUMMON, EHeroClass.MASTER];
        case EHeroClass.MINSTREL:
            return [EHeroClass.PRIEST, EHeroClass.BARD];
        case EHeroClass.MONK:
            return [EHeroClass.PRIEST, EHeroClass.WILD];
        case EHeroClass.NECROMANCER:
            return [EHeroClass.DARK, EHeroClass.SUMMON];
        case EHeroClass.ORACLE:
            return [EHeroClass.SUMMON, EHeroClass.ORDER];
        case EHeroClass.PALADIN:
            return [EHeroClass.PRIEST, EHeroClass.WARRIOR];
        case EHeroClass.PREDATOR:
            return [EHeroClass.WILD, EHeroClass.DARK];
        case EHeroClass.BISHOP:
            return [EHeroClass.PRIEST, EHeroClass.MASTER];
        case EHeroClass.RUNECASTER:
            return [EHeroClass.ORDER, EHeroClass.MAGIC];
        case EHeroClass.SAMURAI:
            return [EHeroClass.MASTER, EHeroClass.ORDER];
        case EHeroClass.SHADOW_MASTER:
            return [EHeroClass.PRIEST, EHeroClass.DARK];
        case EHeroClass.SHAMAN:
            return [EHeroClass.WILD, EHeroClass.BARD];
        case EHeroClass.SORCERER:
            return [EHeroClass.MAGIC, EHeroClass.MASTER];
        case EHeroClass.WARLOCK:
            return [EHeroClass.MAGIC, EHeroClass.DARK];
        case EHeroClass.WITCH:
            return [EHeroClass.SUMMON, EHeroClass.BARD];
        case EHeroClass.ZEALOT:
            return [EHeroClass.DARK, EHeroClass.ORDER];
        default:
            return [EHeroClass.BARD, EHeroClass.BARD];
    }
};
