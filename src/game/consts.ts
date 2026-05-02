import { i18n as i18n_eng } from "../i18n/en";
import { i18n as i18n_ru } from "../i18n/ru";

export const LANG: "eng" | "ru" = "ru";
// @ts-ignore: TS2367
export const i18n = LANG === "eng" ? i18n_eng : i18n_ru;

export const GAME_MODE: "NO_MC_HEROES" | "FULL" = "FULL";

export const IMAGE_LOBBY_FOX_SMILE = "IMAGE_LOBBY_FOX_SMILE";
export const IMAGE_LOBBY_LOADING = "IMAGE_LOBBY_LOADING";

export const ANIMATION_COMPLETE = "animationcomplete";

export const SOUND_MAIN_MENU_CHANGE_SCENE = "SOUND_MAIN_MENU_CHANGE_SCENE";

export const colors = {
    BLACK: 0x000000,
    BLUE: 0x333399,
    BLUE_LIGHT: 0x66ccff,
    GREY: 0x666666,
    GREY_BLUE: 0x6688aa, // "#6688aa"
    GREEN: 0x339933, // "#339933"
    GREEN_2: 0x339933,
    GREEN_DARK: 0x002200, // "#002200"
    WHITE: 0x999999,
    GREY_HOVER: 0x888888,
    GREEN_HOVER: 0x22aa22,
    ORANGE: 0xff9966,
    PURPLE: 0x990099, //"#990099"
    PURPLE_DARK: 0x663366, // "#663366"
    RED: 0xcc4444, //"#cc4444"
    BROWN: 0xaa6666, //"#aa6666"
    RED_DARK: 0x330000, //"#330000"
    RED_DARK_2: 0x993333, //"#993333"
    WHITE_HOVER: 0xbbbbbb,
    string: {
        GREY: "#666666",
        GREEN_LIGHT: "#aaffaa",
    },
};
