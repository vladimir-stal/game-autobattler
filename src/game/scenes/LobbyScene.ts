import { ERoomStatus, EScene, LobbyPlayer, Player } from "../../types";
import {
    IMAGE_LOBBY_CHAR_ACTIVE,
    IMAGE_LOBBY_CHARACTER_BEAR,
    IMAGE_LOBBY_CHARACTER_FOX,
    IMAGE_LOBBY_CHARACTER_PIG,
    IMAGE_LOBBY_CHARACTER_WOLF,
    IMAGE_UI_BUTTON_E,
    SOUND_MAIN_MENU_CHANGE_SCENE,
    SOUND_MAIN_MENU_CLICK,
    SOUND_MAIN_MENU_CLICK_2,
} from "../consts";
import { EventBus, EventType } from "../EventBus";
import { Actions, Cameras, Display, Events, GameObjects, Input, Scale, Scene, Sound, Structs } from "phaser";

const START_GAME = "START GAME";

export class LobbyScene extends Scene {
    isReady: boolean = false;
    isHost: boolean = false;
    players: LobbyPlayer[];
    // UI
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    mainContainer: GameObjects.Container;
    playersContainer: GameObjects.Container;
    readyText: GameObjects.Text;
    gameStartText: GameObjects.Text;
    sceneCreated: boolean = false;
    activeImage: GameObjects.Image;

    //clickSound: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    changeSceneSound: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    changeSceneSound1: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;

    constructor() {
        super(EScene.LOBBY);
    }

    preload() {
        //this.load.image('background1', 'assets/sprites/background1.png');
        // this.load.image(IMAGE_LOBBY_CHARACTER_BEAR, "assets/sprites/ui/lobby_character_bear.png");
        // this.load.image(IMAGE_LOBBY_CHARACTER_FOX, "assets/sprites/ui/lobby_character_fox.png");
        // this.load.image(IMAGE_LOBBY_CHARACTER_PIG, "assets/sprites/ui/lobby_character_pig.png");
        // this.load.image(IMAGE_LOBBY_CHARACTER_WOLF, "assets/sprites/ui/lobby_character_wolf.png");
        //this.load.image(IMAGE_LOBBY_CHAR_ACTIVE, "assets/sprites/ui/lobby_character_button_active.png");
    }

    create() {
        // SOUNDS
        //this.clickSound = this.sound.add(SOUND_MAIN_MENU_CLICK, { loop: false, volume: 0.05 });
        this.changeSceneSound = this.sound.add(SOUND_MAIN_MENU_CHANGE_SCENE, { loop: false, volume: 0.05 });
        this.changeSceneSound1 = this.sound.add(SOUND_MAIN_MENU_CLICK_2, { loop: false, volume: 0.05 });

        this.sceneCreated = true;
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x000000);
        this.players = [];

        // align container to the center of scene
        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 3;
        this.mainContainer = this.add.container(screenCenterX, screenCenterY);
        this.playersContainer = this.add.container();
        this.mainContainer.add(this.playersContainer);

        // move container to the center of the scene on game resize
        this.scale.addListener(
            Scale.Events.RESIZE,
            (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
                const currentPosition = { x: this.mainContainer.x, y: this.mainContainer.y };
                this.mainContainer.setPosition(
                    (gameSize.width - previousWidth) / 2 + currentPosition.x,
                    (gameSize.height - previousHeight) / 2 + currentPosition.y
                );
            }
        );

        // ACTION ON SPACE KEYBOARD BUTTON
        if (this.input.keyboard) {
            const { keyboard } = this.input;
            keyboard.on("keydown-SPACE", () => {
                if (this.isHost) {
                    const allPlayersReady = this.gameStartText.text === START_GAME;
                    if (allPlayersReady) {
                        this.playChangeSceneSound();
                        EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                        this.scene.switch(EScene.GAME_LOADING);
                    }
                } else {
                    this.setIsReady(!this.isReady);
                }
            });
        }

        const titleText = this.add
            .text(0, -200, "LOBBY", {
                //screenCenterX, screenCenterY - 100,
                fontFamily: "Arial Black",
                fontSize: 64,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);
        this.mainContainer.add(titleText);

        // listeners
        EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
            if (status === ERoomStatus.GAME_LOADING) {
                console.log("change scene to GameLoadingScene");
                this.scene.start(EScene.GAME_LOADING);
            }
        });

        this.events.on("shutdown", () => {
            EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
        });

        EventBus.on(EventType.CHANGE_LOBBY_PLAYERS, (lobbyPlayers: LobbyPlayer[]) => {
            //console.log(">> CHANGE_LOBBY_PLAYERS", lobbyPlayers);
            this.players = [];
            lobbyPlayers.forEach((lobbyPlayer: LobbyPlayer) => {
                this.players.push({ ...lobbyPlayer });
                if (lobbyPlayer.isMe) {
                    this.isReady = lobbyPlayer.isReady;
                }
            });
            this.renderPlayers();
            if (this.isHost) {
                this.renderGameStartText();
            }
        });

        EventBus.on(EventType.GET_LOBBY_PLAYERS_RESPONSE, (lobbyPlayers: LobbyPlayer[]) => {
            //console.log(">> GET_LOBBY_PLAYERS_RESPONSE", lobbyPlayers);
            this.players = [];
            lobbyPlayers.forEach((lobbyPlayer: LobbyPlayer) => {
                this.players.push({ ...lobbyPlayer });
                if (lobbyPlayer.isMe) {
                    this.isHost = lobbyPlayer.isHost;
                    this.isReady = lobbyPlayer.isReady;
                }
            });
            this.renderPlayers();
            this.renderButtons();
            //this.renderCharSelect();
        });

        EventBus.emit(EventType.GET_LOBBY_PLAYERS);
    }

    renderPlayers() {
        this.playersContainer.removeAll(true);
        this.players.forEach((player, index) => {
            this.playersContainer.add(
                this.add.text(
                    0,
                    100 + index * 50,
                    `${player.name} ${player.isMe ? "(you)" : ""} ${player.isReady ? "<READY>" : ""} ${player.isHost ? "<HOST>" : ""}`
                )
            );
        });
        if (this.isHost) {
            const addBotButton = this.add.text(0, 100 + this.players.length * 50, ">> ADD BOT");
            addBotButton.setInteractive();
            addBotButton.on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                //this.clickSound.play();
                EventBus.emit(EventType.LOBBY_ADD_BOT);
            });
            this.playersContainer.add(addBotButton);
        }
    }

    renderButtons() {
        //if (false) {
        if (this.isHost) {
            const allPlayersReady = this.getIsAllPlayersReady();
            const text = allPlayersReady ? START_GAME : "Not all players ready";
            this.gameStartText = this.add
                .text(0, 0, text, {
                    //400, 350,
                    fontFamily: "Arial Black",
                    fontSize: 32,
                    color: "#ffffff",
                    //stroke: '#000000',
                    //strokeThickness: 8,
                    align: "center",
                })
                .setOrigin(0.5);
            this.gameStartText.setInteractive();
            this.gameStartText.on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                const allPlayersReady = this.gameStartText.text === START_GAME;
                if (allPlayersReady) {
                    this.playChangeSceneSound();
                    EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                    this.scene.switch(EScene.GAME_LOADING);
                }
            });
            this.mainContainer.add(this.gameStartText);

            // align items using grid template
            // Actions.GridAlign([titleText, gameStartText], {
            //     height: -1,
            //     cellHeight: 150,
            //     position: Phaser.Display.Align.TOP_CENTER,
            // });
        } else {
            const text = this.isReady ? "READY" : "GET READY";
            const color = this.isReady ? "#55FF55" : "#cccccc";
            this.readyText = this.add
                .text(0, 0, text, {
                    //400, 350,
                    fontFamily: "Arial Black",
                    fontSize: 32,
                    color,
                    //stroke: '#000000',
                    //strokeThickness: 8,
                    align: "center",
                })
                .setOrigin(0.5);
            this.readyText.setInteractive();
            this.readyText.on(
                Input.Events.GAMEOBJECT_POINTER_DOWN,
                () => {
                    //this.clickSound.play();
                    this.setIsReady(!this.isReady);
                },
                this
            );
            this.mainContainer.add(this.readyText);
        }
    }

    renderGameStartText() {
        const allPlayersReady = this.getIsAllPlayersReady();
        const text = allPlayersReady ? START_GAME : "Not all players ready";
        const color = allPlayersReady ? "#55FF55" : "#FFFFFF";
        this.gameStartText.setText(text).setColor(color);
    }

    setIsReady(value: boolean) {
        this.isReady = value;
        const text = this.isReady ? "READY" : "GET READY";
        const color = this.isReady ? "#55FF55" : "#cccccc";
        this.readyText.setText(text).setColor(color);
        const myPlayer = this.players.find((p) => p.isMe);
        if (myPlayer) {
            myPlayer.isReady = value;
            this.renderPlayers();
        }

        EventBus.emit(EventType.CHANGE_LOBBY_IS_READY, this.isReady);
    }

    // setCharacterType(type: ECharacterType) {
    //     const player = this.players.find((localPlayer) => localPlayer.isMe);
    //     if (player) {
    //         player.characterType = type;
    //         this.renderPlayers();
    //         EventBus.emit(EventType.CHANGE_LOBBY_CHAR_TYPE, type);
    //     }
    // }

    getIsAllPlayersReady() {
        return this.players.filter((p) => !p.isHost && !p.isBot && !p.isReady).length === 0;
    }

    playChangeSceneSound() {
        this.changeSceneSound1.play();
        this.changeSceneSound.play();
    }
}
