import { i18n as i18n_eng } from "../i18n/en";
import { i18n as i18n_ru } from "../i18n/ru";

export const LANG: "eng" | "ru" = "ru";
export const i18n = i18n_ru; //LANG === "eng" ? i18n_eng : i18n_ru;

export const GAME_MODE: "NO_ANIMATIONS" | "FULL" = "NO_ANIMATIONS";

export const IMAGE_LOBBY_FOX_SMILE = "IMAGE_LOBBY_FOX_SMILE";
export const IMAGE_LOBBY_LOADING = "IMAGE_LOBBY_LOADING";

export const ANIMATION_COMPLETE = "animationcomplete";

export const SOUND_MAIN_MENU_CHANGE_SCENE = "SOUND_MAIN_MENU_CHANGE_SCENE";

export const colors = {
    BLACK: 0x000000,
    BLUE: 0x333399,
    GREY: 0x666666,
    GREEN: 0x339933,
    GREEN_2: 0x339933,
    WHITE: 0x999999,
    GREY_HOVER: 0x888888,
    GREEN_HOVER: 0x22aa22,
    RED: 0xcc4444,
    WHITE_HOVER: 0xbbbbbb,
};
