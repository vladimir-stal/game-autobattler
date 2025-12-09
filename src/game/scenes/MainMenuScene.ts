import { EGameStatus, ERoomStatus, EScene } from "../../types";
import {
    IMAGE_MAIN_MENU,
    SOUND_MAIN_MENU_CHANGE_SCENE,
    //SOUND_MAIN_MENU_CLICK,
    SOUND_MAIN_MENU_CLICK_2,
    //SOUND_MAIN_MENU_MUSIC,
    //SOUND_MAIN_MENU_START,
} from "../consts";
import { EventBus, EventType } from "../EventBus";
import { Actions, Cameras, Display, Events, GameObjects, Input, Scale, Scene, Sound, Structs } from "phaser";

export class MainMenuScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    //titleText: GameObjects.Text;
    mainContainer: GameObjects.Container;

    changeSceneSound1: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    changeSceneSound: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    mainMenuMusic: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;

    constructor() {
        console.log("MainMenuScene costructor");
        super(EScene.MAIN_MENU);
    }

    preload() {
        console.log("MainMenuScene preload");
        //this.load.audio(SOUND_MAIN_MENU_START, "assets/audio/sounds/main_menu_start.mp3");
        this.load.audio(SOUND_MAIN_MENU_CHANGE_SCENE, "assets/audio/sounds/owl_1.mp3");
        //this.load.audio(SOUND_MAIN_MENU_CLICK, "assets/audio/sounds/ui_click_2.mp3");
        this.load.audio(SOUND_MAIN_MENU_CLICK_2, "assets/audio/sounds/ui_click_1.mp3");
        //this.load.audio(SOUND_MAIN_MENU_MUSIC, "assets/audio/music/main_menu.mp3");

        this.load.image(IMAGE_MAIN_MENU, "assets/sprites/background/allHeroes_1200.png");
        //this.load.image(IMAGE_FOUR_BEASTS, "assets/sprites/background/game_main.png");
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x000000);

        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;
        this.background = this.add.image(screenCenterX, screenCenterY, IMAGE_MAIN_MENU).setOrigin(0.5, 0.5).setDisplaySize(600, 190);

        this.background.setInteractive();
        this.background.on(
            Input.Events.GAMEOBJECT_POINTER_DOWN,
            () => {
                this.playChangeSceneSound();
                EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                this.scene.switch(EScene.LOBBY_LOADING);
            },
            this
        );

        //sounds test
        //const startMainMenuSound = this.sound.add(SOUND_MAIN_MENU_START, { loop: false });
        //startMainMenuSound.play();
        this.changeSceneSound1 = this.sound.add(SOUND_MAIN_MENU_CLICK_2, { loop: false, volume: 0.05 });
        this.changeSceneSound = this.sound.add(SOUND_MAIN_MENU_CHANGE_SCENE, { loop: false, volume: 0.05 });
        //this.mainMenuMusic = this.sound.add(SOUND_MAIN_MENU_MUSIC, { loop: false, volume: 0.05 });

        // if (this.game.sound.context.state === "suspended") {
        //     game.sound.context.resume();
        // }
        //this.mainMenuMusic.play();

        if (this.input.keyboard) {
            const { keyboard } = this.input;
            keyboard.on("keydown-SPACE", () => {
                // if (testSong.isPaused) {
                //     testSong.resume();
                // } else if (testSong.isPlaying) {
                //     testSong.pause();
                // } else {
                //     testSong.play();
                // }
                this.playChangeSceneSound();
                //EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                this.scene.switch(EScene.LOBBY_LOADING);
            });
        }

        //this.scale.scaleMode = Scale.ScaleModes.HEIGHT_CONTROLS_WIDTH;

        // align container to the center of scene
        this.mainContainer = this.add.container(screenCenterX, screenCenterY);

        //this.mainContainer.setSize(300, 200);
        // const aboutContainerText = this.add.text(
        //     400,
        //     40,
        //     this.mainContainer.x +
        //         ' ' +
        //         this.mainContainer.y +
        //         ', ' +
        //         this.mainContainer.width +
        //         'x' +
        //         this.mainContainer.height,
        //     {}
        // );
        // move container to the center of the scene on game resize
        this.scale.addListener(
            Scale.Events.RESIZE,
            (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
                //console.log("SCENE RESIZED", gameSize, baseSize, displaySize, previousWidth, previousHeight);
                //const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
                //const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
                //this.mainContainer.setPosition(screenCenterX, screenCenterY);
                const screenCenterX = this.cameras.main.width / 2;
                const screenCenterY = this.cameras.main.height / 2;
                const currentPosition = { x: this.mainContainer.x, y: this.mainContainer.y };
                this.mainContainer.setPosition(
                    (gameSize.width - previousWidth) / 2 + currentPosition.x,
                    (gameSize.height - previousHeight) / 2 + currentPosition.y
                );
                this.background.setPosition(screenCenterX, screenCenterY);
                //this.mainContainer.setSize(this.cameras.main.width / 4, this.cameras.main.height / 4);
                // aboutContainerText.setText(
                //     this.mainContainer.x +
                //         ' ' +
                //         this.mainContainer.y +
                //         ', ' +
                //         this.mainContainer.width +
                //         'x' +
                //         this.mainContainer.height
                // );
            }
        );
        // use this methods to align one game object inside another game object
        //Display.Align.In.Center(this.titleText, this, )

        // const bg1 = this.add.image(0, 0, 'background1');
        // bg1.displayOriginX = 1;
        // bg1.displayOriginY = 0;
        // this.mainContainer.add(bg1);

        const titleText = this.add
            .text(0, -250, "START GAME", {
                //screenCenterX, screenCenterY - 100,
                fontFamily: "Arial Black",
                fontSize: 64,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);
        titleText.setInteractive();
        titleText.on(
            Input.Events.GAMEOBJECT_POINTER_DOWN,
            () => {
                this.playChangeSceneSound();
                EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                this.scene.switch(EScene.LOBBY_LOADING);
            },
            this
        );
        this.mainContainer.add(titleText);

        this.events.on("shutdown", () => {
            //console.log("MENU SCENE shutdown");
            EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
        });
    }

    playChangeSceneSound() {
        this.changeSceneSound1.play();
        this.changeSceneSound.play();
        //this.mainMenuMusic.stop();
    }
}
