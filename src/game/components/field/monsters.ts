import { EBuffRangeType, EIncomeBuffType, EMonsterTag, EMonsterType, IMonster } from "../../../types";

export enum EMonsterId {
    INCOME_PLANT = "INCOME_PLANT",
    INCOME_2 = "INCOME_2",
    INCOME_3 = "INCOME_3",
    INCOME_4 = "INCOME_4",
    EMPTY = "EMPTY",
    EMPTY_2 = "EMPTY_2",
    EMPTY_3 = "EMPTY_3",
    BASE_INCOME_1 = "BASE_INCOME_1",
    INCOME_BUFF_1 = "INCOME_BUFF_1",
    BUFF_PLANT_1 = "BUFF_PLANT_1",
    GOLD_1 = "GOLD_1",
    GOLD_2 = "GOLD_2",
    GOLD_3 = "GOLD_3",
    ADD_TO_POOL_1 = "ADD_TO_POOL_1",
    ADD_TO_POOL_2 = "ADD_TO_POOL_2",
}

export const basicMonsterPool2 = [EMonsterId.GOLD_1, EMonsterId.GOLD_2];

export const basicMonsterPool = [
    EMonsterId.INCOME_PLANT,
    EMonsterId.INCOME_2,
    EMonsterId.INCOME_3,
    EMonsterId.INCOME_4,
    EMonsterId.EMPTY,
    EMonsterId.INCOME_BUFF_1,
    EMonsterId.GOLD_1,
    EMonsterId.GOLD_2,
    EMonsterId.ADD_TO_POOL_1,
    EMonsterId.ADD_TO_POOL_2,
];

export const defaultMonster: IMonster = {
    id: EMonsterId.EMPTY,
    name: "EMPTY",
    types: [EMonsterType.EMPTY],
    tags: [],
};

export const baseIncomeMonster: IMonster = {
    id: EMonsterId.BASE_INCOME_1,
    name: "INCOME B",
    types: [EMonsterType.INCOME],
    incomeCd: 3,
    incomeValue: 1,
    tags: [],
};

export const allMonsters: IMonster[] = [
    baseIncomeMonster,
    {
        id: EMonsterId.INCOME_PLANT,
        name: "INCOME_PLANT",
        types: [EMonsterType.INCOME],
        incomeCd: 5,
        incomeValue: 10,
        tags: [EMonsterTag.PLANT],
    },
    {
        id: EMonsterId.INCOME_2,
        name: "INCOME_2",
        types: [EMonsterType.INCOME],
        incomeCd: 10,
        incomeValue: 20,
        tags: [],
    },
    {
        id: EMonsterId.INCOME_3,
        name: "INCOME_3",
        types: [EMonsterType.INCOME],
        incomeCd: 5,
        incomeValue: 10,
        tags: [EMonsterTag.GHOST],
    },
    {
        id: EMonsterId.INCOME_4,
        name: "INCOME_4",
        types: [EMonsterType.INCOME],
        incomeCd: 20,
        incomeValue: 46,
        tags: [],
    },
    defaultMonster,
    {
        id: EMonsterId.INCOME_BUFF_1,
        name: "BUFF_1",
        types: [EMonsterType.INCOME_BUFF],
        buffs: [{ value: 1, type: EIncomeBuffType.INCREASE_VALUE, rangeType: EBuffRangeType.CLOSE }],
        tags: [],
    },
    {
        id: EMonsterId.BUFF_PLANT_1,
        name: "BUFF PLANTS",
        types: [EMonsterType.INCOME_BUFF],
        buffs: [{ value: 1, type: EIncomeBuffType.INCREASE_VALUE, rangeType: EBuffRangeType.ALL_BY_TAG }],
        tags: [],
    },
    {
        id: EMonsterId.GOLD_1,
        name: "GOLD_1",
        types: [EMonsterType.INSTANT_GOLD],
        instantIncome: 10,
        tags: [EMonsterTag.RICH],
    },
    {
        id: EMonsterId.GOLD_2,
        name: "GOLD_2",
        types: [EMonsterType.INSTANT_GOLD],
        instantIncome: 20,
        tags: [EMonsterTag.RICH],
    },
    {
        // TODO: gets gold equals to RICH tag count x 10
        id: EMonsterId.GOLD_3,
        name: "GOLD_3",
        types: [EMonsterType.INSTANT_GOLD],
        instantIncome: 10,
        tags: [EMonsterTag.RICH],
    },
    {
        id: EMonsterId.ADD_TO_POOL_1,
        name: "ADD 1",
        types: [EMonsterType.ADD_TO_POOL],
        addToPoolId: EMonsterId.EMPTY_2,
        tags: [],
    },
    {
        id: EMonsterId.ADD_TO_POOL_2,
        name: "ADD 2",
        types: [EMonsterType.ADD_TO_POOL],
        addToPoolId: EMonsterId.EMPTY_2,
        tags: [],
    },
    {
        id: EMonsterId.EMPTY_2,
        name: "EMPTY 2",
        types: [EMonsterType.EMPTY],
        tags: [],
    },
    {
        id: EMonsterId.EMPTY_3,
        name: "EMPTY 3",
        types: [EMonsterType.EMPTY],
        tags: [EMonsterTag.SINGING],
    },
];
