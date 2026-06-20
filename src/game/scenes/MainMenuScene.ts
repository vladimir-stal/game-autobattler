import { colors } from "../../i18n/skills_ru";
import { EScene } from "../../types";
import { i18n } from "../consts";
import { EventBus, EventType } from "../EventBus";
import { Cameras, GameObjects, Input, Scale, Scene, Sound, Structs } from "phaser";

const IMAGE_MAIN_MENU = "IMAGE_MAIN_MENU";
//const SOUND_MAIN_MENU_CHANGE_SCENE = "SOUND_MAIN_MENU_CHANGE_SCENE";
//const SOUND_MAIN_MENU_CLICK_2 = "SOUND_MAIN_MENU_CLICK_2";

export class MainMenuScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    //titleText: GameObjects.Text;

    mainContainer: GameObjects.Container;

    //changeSceneSound1: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    //changeSceneSound: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;
    //mainMenuMusic: Sound.WebAudioSound | Sound.NoAudioSound | Sound.HTML5AudioSound;

    constructor() {
        super(EScene.MAIN_MENU);
    }

    preload() {
        //this.load.audio(SOUND_MAIN_MENU_CHANGE_SCENE, "assets/audio/sounds/owl_1.mp3");
        //this.load.audio(SOUND_MAIN_MENU_CLICK_2, "assets/audio/sounds/ui_click_1.mp3");
        this.load.image(IMAGE_MAIN_MENU, "assets/sprites/background/allHeroes_1200.png");
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x000000);

        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;
        this.background = this.add.image(screenCenterX, screenCenterY, IMAGE_MAIN_MENU).setOrigin(0.5, 0.5).setDisplaySize(600, 190);

        //this.background.setInteractive();
        // this.background.on(
        //     Input.Events.GAMEOBJECT_POINTER_DOWN,
        //     () => {
        //         //this.playChangeSceneSound();
        //         EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
        //         this.scene.switch(EScene.LOBBY_LOADING);
        //     },
        //     this,
        // );

        //sounds
        //this.changeSceneSound1 = this.sound.add(SOUND_MAIN_MENU_CLICK_2, { loop: false, volume: 0.05 });
        //this.changeSceneSound = this.sound.add(SOUND_MAIN_MENU_CHANGE_SCENE, { loop: false, volume: 0.05 });

        if (this.input.keyboard) {
            const { keyboard } = this.input;
            keyboard.on("keydown-SPACE", () => {
                //this.playChangeSceneSound();
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
                    (gameSize.height - previousHeight) / 2 + currentPosition.y,
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
            },
        );
        // use this methods to align one game object inside another game object
        //Display.Align.In.Center(this.titleText, this, )

        // const bg1 = this.add.image(0, 0, 'background1');
        // bg1.displayOriginX = 1;
        // bg1.displayOriginY = 0;
        // this.mainContainer.add(bg1);

        const gameTitleText = this.add
            .text(0, 120, "ECLIPSE CROWN version 0.13", {
                fontFamily: "Arial Black",
                fontSize: 16,
                color: "#ffffff",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);
        this.mainContainer.add(gameTitleText);

        const tutorialLinkText = this.add
            .rexBBCodeText(0, -170, `BEFORE PLAYING GAME PLEASE CHECK THE SHORT [color=${colors.HEAL}]TUTORIAL![/color]`, {
                fontFamily: "Arial Black",
                fontSize: 16,
                color: "#e74e4e",
                stroke: "#000000",
                strokeThickness: 8,
                align: "center",
            })
            .setOrigin(0.5);
        this.mainContainer.add(tutorialLinkText);

        tutorialLinkText.setInteractive();
        tutorialLinkText
            .on(
                Input.Events.GAMEOBJECT_POINTER_OVER,
                () => {
                    tutorialLinkText.setText(`BEFORE PLAYING GAME PLEASE CHECK THE SHORT [color=${colors.TOTEM}]TUTORIAL![/color]`);
                },
                this,
            )
            .on(
                Input.Events.GAMEOBJECT_POINTER_OUT,
                () => {
                    tutorialLinkText.setText(`BEFORE PLAYING GAME PLEASE CHECK THE SHORT [color=${colors.HEAL}]TUTORIAL![/color]`);
                },
                this,
            );

        tutorialLinkText.on(Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            window.open("https://steamcommunity.com/sharedfiles/filedetails/?id=3724244199", "_blank");
        });

        const titleText = this.add
            .text(0, -250, i18n.ui.mainMenu.START_GAME, {
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
                //this.playChangeSceneSound();
                EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
                this.scene.switch(EScene.LOBBY_LOADING);
            },
            this,
        );
        titleText.on(
            Input.Events.GAMEOBJECT_POINTER_OVER,
            () => {
                titleText.setColor("#c0e9cc");
            },
            this,
        );
        titleText.on(
            Input.Events.GAMEOBJECT_POINTER_OUT,
            () => {
                titleText.setColor("#ffffff");
            },
            this,
        );
        this.mainContainer.add(titleText);

        this.events.on("shutdown", () => {
            //console.log("MENU SCENE shutdown");
            EventBus.removeListener(EventType.ROOM_STATUS_CHANGED);
        });
    }

    playChangeSceneSound() {
        //this.changeSceneSound1.play();
        //this.changeSceneSound.play();
        //this.mainMenuMusic.stop();
    }
}
