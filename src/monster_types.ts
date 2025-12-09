import { EMonsterId } from "./game/components/field/monsters";

export enum EScene {
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    GAME = "GAME",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
    PLATFORM = "PLATFORM",
    RESOURCE_LOAD = "RESOURCE_LOAD",
}

// Status of the game same for all players
export enum ERoomStatus {
    GAME_CREATED = "GAME_CREATED",
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
    PLATFORM_LOADED = "PLATFORM_LOADED", // platform scene loaded for all players
}

// Status of the game for a specific player
export enum EGameStatus {
    GAME_CREATED = "GAME_CREATED",
    GAME_LOADING = "GAME_LOADING",
    GAME_RESULTS = "GAME_RESULTS",
    LOBBY = "LOBBY",
    LOBBY_LOADING = "LOBBY_LOADING",
    MAIN_MENU = "MAIN_MENU",
}

export interface Player {
    sessionId: string;
    userId: string;
    avatarUri: string;
    name: string;
    talking: boolean;
    isHost: boolean;
}

export interface LobbyPlayer {
    userId: string;
    name: string;
    isReady: boolean;
    //characterType: ECharacterType;
    isHost: boolean;
    isMe: boolean;
    isBot: boolean;
}

export interface IGuildsMembersRead {
    roles: string[];
    nick: string | null;
    avatar: string | null;
    premium_since: string | null;
    joined_at: string;
    is_pending: boolean;
    pending: boolean;
    communication_disabled_until: string | null;
    user: {
        id: string;
        username: string;
        avatar: string | null;
        discriminator: string;
        public_flags: number;
    };
    mute: boolean;
    deaf: boolean;
}

export enum ETileStatus {
    OWNED = "OWNED",
    FREE = "FREE",
    AVAILABLE = "AVAILABLE",
}

export enum EMonsterType {
    INCOME = "INCOME",
    EMPTY = "EMPTY",
    INCOME_BUFF = "INCOME_BUFF",
    INSTANT_GOLD = "INSTANT_GOLD",
    ADD_TO_POOL = "ADD_TO_POOL",
}

export interface ITile {
    x: number;
    y: number;
    status: ETileStatus;
    monster: IMonster;
    buffs?: IMBuff[];
}

export interface IMonster {
    id: string;
    name: string;
    types: EMonsterType[];
    tags: EMonsterTag[];
    // instantGold
    instantIncome?: number;
    // income
    incomeCd?: number;
    incomeValue?: number;
    // buff
    buffs?: IMBuff[];
    // addToPool
    addToPoolId?: EMonsterId;
}

export enum EIncomeBuffType {
    INCREASE_VALUE = "INCREASE_VALUE",
    DECREASE_CD = "DECREASE_CD",
}

export enum EBuffRangeType {
    CLOSE = "CLOSE",
    RANGE = "RANGE",
    ALL_BY_TAG = "ALL_BY_TAG",
}

export interface IMBuff {
    rangeType: EBuffRangeType;
    range?: number;
    tags?: EMonsterTag[];
    type: EIncomeBuffType;
    value: number;
}

export enum EMonsterTag {
    GHOST = "GHOST",
    GREEDY = "GREEDY",
    HAPPY = "HAPPY",
    HUNGRY = "HUNGRY",
    PLANT = "PLANT",
    RICH = "RICH",
    SLEPPING = "SLEPPING",
    SINGING = "SINGING",
    TOXIC = "TOXIC",
}

export enum EPackConditionType {
    TAG_COUNT = "TAG_COUNT",
}

export enum EPackRewardType {
    ADD_TO_POOL = "ADD_TO_POOL",
}

export interface IPack {
    //id: EPackId;
    type: EPackConditionType;
    conditions: { tag: EMonsterTag; count: number }[];
    reward: EMonsterId;
    rewardType: EPackRewardType.ADD_TO_POOL;
}
