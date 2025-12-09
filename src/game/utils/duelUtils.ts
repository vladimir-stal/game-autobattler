import { IUnit } from "../../types";
import { duelEnemies } from "../duelConsts";
import { unitsLvl1 } from "../unitConsts";
import { getRandomArrayItem } from "./commonUtils";
import { getRandomBasicHero, getRandomMcHero, getRandomUnit } from "./unitUtils";

export const getDuelEnemy = (player: number) => {
    return duelEnemies[player];
};
