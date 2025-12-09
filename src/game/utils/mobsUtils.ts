import { mobsLvl1, mobsLvl2, mobsLvl3, mobsLvl4, mobsLvl5, mobsLvl6 } from "../unitConsts";
import { getRandomArrayItem } from "./commonUtils";

export const getMobs = (day: number) => {
    switch (day) {
        case 1:
            return [getRandomArrayItem(mobsLvl1), getRandomArrayItem(mobsLvl2), getRandomArrayItem(mobsLvl3)];
        case 2:
            return [getRandomArrayItem(mobsLvl2), getRandomArrayItem(mobsLvl3), getRandomArrayItem(mobsLvl4)];
        case 3:
            return [getRandomArrayItem(mobsLvl3), getRandomArrayItem(mobsLvl4), getRandomArrayItem(mobsLvl5)];
        case 4:
            return [getRandomArrayItem(mobsLvl4), getRandomArrayItem(mobsLvl5), getRandomArrayItem(mobsLvl6)];
        default:
            return [getRandomArrayItem(mobsLvl6), getRandomArrayItem(mobsLvl6), getRandomArrayItem(mobsLvl6)];
    }
};
