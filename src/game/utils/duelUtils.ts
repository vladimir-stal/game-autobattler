import { duelEnemies, testDuelEnemies } from "../duelConsts";

export const getDuelEnemy = (player: number) => {
    return testDuelEnemies[0]; // FOR TESTING
    //return duelEnemies[player]; // [player];
};
