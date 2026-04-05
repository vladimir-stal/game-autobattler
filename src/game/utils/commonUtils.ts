/** Get random integer in interval of [min] and [max]. [min] and [max] included. */
export function getRandomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/** Get random array index. */
export function getRandomArrayIndex(array: unknown[]) {
    return getRandomIntFromInterval(0, array.length - 1);
}

/** Get random array item. */
export function getRandomArrayItem<T>(array: T[]) {
    // if (array.length === 0) {
    //     return null;
    // }
    return array[getRandomArrayIndex(array)];
}

/** Get random array items. */
export function getRandomArrayItems<T>(array: T[], count: number, isUnique: boolean): T[] {
    const result: T[] = [];
    // case same items can be in result array
    if (!isUnique) {
        const result: T[] = [];
        for (let i = 0; i < count; i++) {
            result.push(getRandomArrayItem(array));
        }
        return result;
    }

    // case all items unique in result array
    const arrayCopy = [...array];
    for (let i = 0; i < count; i++) {
        const randomIndex = getRandomArrayIndex(arrayCopy);
        result.push(arrayCopy[randomIndex]);
        arrayCopy.splice(randomIndex, 1);
    }
    return result;
}

/** Check if probability worked */
export function checkProbability(chance: number) {
    const random100 = getRandomIntFromInterval(0, 100);
    return chance >= random100;
}

export function getCardBorderColor(rarityLevel: number) {
    let borderColor = 0x777777;
    switch (rarityLevel) {
        case 1:
            borderColor = 0x777777; // GREY
            break;
        case 2:
            borderColor = 0x2e8b57; //0x3cb371; // 0x32cd32; // GREEN
            break;
        case 3:
            borderColor = 0x4682b4; // BLUE
            break;
        case 4:
            borderColor = 0x483d8b; //0x8a2be2; // PURPLE
            break;
        case 5:
            borderColor = 0xbdb76b; // YELLOW
            break;
        default:
            borderColor = 0x777777;
    }
    return borderColor;
}
