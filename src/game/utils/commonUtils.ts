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
