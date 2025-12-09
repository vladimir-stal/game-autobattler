import { ECharacterType, ERoomStatus, EScene, LobbyPlayer, Player } from "../../types";
import { EventBus, EventType } from "../EventBus";
import { Actions, Cameras, Display, Events, GameObjects, Input, Scale, Scene, Structs } from "phaser";

const START_GAME = "START GAME";

export class GameResultsScene extends Scene {
    isReady: boolean = false;
    isHost: boolean = false;
    players: LobbyPlayer[];
    // UI
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    mainContainer: GameObjects.Container;
    playersContainer: GameObjects.Container;
    readyText: GameObjects.Text;
    toLobbyText: GameObjects.Text;
    sceneCreated: boolean = false;

    constructor() {
        super(EScene.GAME_RESULTS);
    }

    preload() {}

    create() {
        console.log("GameResultsScene CREATE!");

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
        // this.scale.addListener(
        //     Scale.Events.RESIZE,
        //     (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
        //         const currentPosition = { x: this.mainContainer.x, y: this.mainContainer.y };
        //         this.mainContainer.setPosition(
        //             (gameSize.width - previousWidth) / 2 + currentPosition.x,
        //             (gameSize.height - previousHeight) / 2 + currentPosition.y
        //         );
        //     }
        // );

        const titleText = this.add
            .text(0, -200, "RESULTS", {
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
        // EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
        //     console.log("ROOM_STATUS_CHANGED", status);
        //     if (status === ERoomStatus.GAME_LOADING) {
        //         console.log("change scene to GameLoadingScene");
        //         this.scene.start("GameLoadingScene");
        //     }
        // });

        // this.events.on("shutdown", () => {
        //     EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
        // });

        // EventBus.on(EventType.CHANGE_LOBBY_PLAYERS, (lobbyPlayers: LobbyPlayer[]) => {
        //     //console.log(">> CHANGE_LOBBY_PLAYERS", lobbyPlayers);
        //     this.players = [];
        //     lobbyPlayers.forEach((lobbyPlayer: LobbyPlayer) => {
        //         this.players.push({ ...lobbyPlayer });
        //         if (lobbyPlayer.isMe) {
        //             this.isReady = lobbyPlayer.isReady;
        //         }
        //     });
        //     this.renderPlayers();
        //     if (this.isHost) {
        //         this.renderGameStartText();
        //     }
        // });

        EventBus.on(EventType.GET_GAME_RESULTS_RESPONSE, (queue: string[]) => {
            console.log("GET_GAME_RESULTS_RESPONSE", queue);
            const winnerText = this.add.text(0, 0, "Winner: " + queue[0]);
            this.mainContainer.add(winnerText);
            this.renderButtons();
        });

        EventBus.emit(EventType.GET_GAME_RESULTS);
    }

    renderButtons() {
        this.toLobbyText = this.add
            .text(0, 200, "To lobby", {
                //400, 350,
                fontFamily: "Arial Black",
                fontSize: 32,
                color: "#ffffff",
                //stroke: '#000000',
                //strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);
        this.toLobbyText.setInteractive();
        this.toLobbyText.on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            //TODO:  join new lobby
        });
        this.mainContainer.add(this.toLobbyText);
    }
}
