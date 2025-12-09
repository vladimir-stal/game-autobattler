import { Events } from "phaser";

// Used to emit events between React components and Phaser scenes
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Events.EventEmitter
export const EventBus = new Events.EventEmitter();

/** Event types for EventBus to emit/listen
 * @prop CHANGE_SCENE
 * @prop GAME_STATUS_CHANGED
 * @prop ROOM_STATUS_CHANGED
 * @prop START_GAME
 */
export enum EventType {
    ADD_LOBBY_PLAYER = "ADD_LOBBY_PLAYER",
    CHANGE_SCENE = "changeScene",
    CHANGE_PLAYERS = "CHANGE_PLAYERS",
    CHANGE_LOBBY_PLAYERS = "CHANGE_LOBBY_PLAYERS",
    CHANGE_LOBBY_IS_READY = "CHANGE_LOBBY_IS_READY",
    CHANGE_LOBBY_CHAR_TYPE = "CHANGE_LOBBY_CHAR_TYPE",
    JOIN_LOBBY = "JOIN_LOBBY",
    GAME_STATUS_CHANGED = "gameStatusChanged",
    GET_GAME_RESULTS = "GET_GAME_RESULTS",
    GET_GAME_RESULTS_RESPONSE = "GET_GAME_RESULTS_RESPONSE",
    GET_PLAYERS = "GET_PLAYERS",
    GET_PLAYERS_RESPONSE = "GET_PLAYERS_RESPONSE",
    GET_LOBBY_PLAYERS = "GET_LOBBY_PLAYERS",
    GET_LOBBY_PLAYERS_RESPONSE = "GET_LOBBY_PLAYERS_RESPONSE",
    LOBBY_ADD_BOT = "LOBBY_ADD_BOT",
    LOBBY_PLAYERS_CHANGED = "LOBBY_PLAYERS_CHANGED",
    ROOM_STATUS_CHANGED = "roomStatusChanged",
    SCENE_PLATFORM_LOADED = "SCENE_PLATFORM_LOADED",
    START_GAME = "startGame",
}
