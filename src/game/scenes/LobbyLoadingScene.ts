import { EScene } from "../../types";
import { Cameras, GameObjects, Scale, Scene, Scenes, Structs } from "phaser";
import { getRandomArrayIndex } from "../utils/commonUtils";
import { i18n } from "../consts";

//const IMAGE_LOBBY_LOADING = "IMAGE_LOBBY_LOADING";
//const IMAGE_LOBBY_FOX_SMILE = "IMAGE_LOBBY_FOX_SMILE";

export class LobbyLoadingScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    titleText: GameObjects.Text;
    scrollText: GameObjects.Text;
    cameraControls: Cameras.Controls.SmoothedKeyControl;
    //loadingImage: GameObjects.Sprite;

    pointer: { x: number; y: number };

    loadingText: GameObjects.Text;
    descrText: GameObjects.Text;
    hintText: GameObjects.Text;

    hints: string[];
    currentHintIndex: number;

    timeoutId: number;

    resizeTimeoutId: number;
    line1: string;
    line2: string;
    line3: string;

    constructor() {
        super(EScene.LOBBY_LOADING);
    }

    preload() {
        // this.load.spritesheet(IMAGE_LOBBY_LOADING, "assets/sprites/background/fox_loading.png", {
        //     frameWidth: 1000,
        //     frameHeight: 1500,
        // });
        // this.load.spritesheet(IMAGE_LOBBY_FOX_SMILE, "assets/sprites/background/fox_smile.png", {
        //     frameWidth: 400,
        //     frameHeight: 600,
        // });
    }

    // update() {
    //     const status = this.scene.getStatus(EScene.LOBBY_LOADING);
    //     console.log("STATUS:" + status);
    //     if (status !== 5) {
    //         console.log("STATUS IS NOT 5 >>" + status);
    //     }
    // }
    updateDescr(): void {
        this.descrText.setText(i18n.ui.LOADING_DESCR + "\n\n" + (this.line1 || "") + " " + this.line2 + "\n" + (this.line3 || ""));
    }

    create() {
        this.initHints();

        // this.events.on("create", () => {
        //     console.log("SCENE LOADING IS CREATED");
        // });

        this.events.on("destroy", () => {
            console.log("SCENE LOADING IS DESTROYED");
            this.events.off("progress-info");
            this.events.off("progress-info2");
            this.events.off("progress-info3");
        });

        // this.events.on("pause", () => {
        //     console.log("SCENE LOADING IS PAUSED");
        // });

        this.events.on("shutdown", () => {
            console.log("SCENE LOADING IS shutdown");
            this.events.off("progress-info");
            this.events.off("progress-info2");
            this.events.off("progress-info3");
        });

        // this.events.on("sleep", () => {
        //     console.log("SCENE LOADING IS sleep");
        // });

        // this.events.on("start", () => {
        //     console.log("SCENE LOADING IS start");
        // });

        this.events.on("progress-info", (data: string) => {
            this.line1 = data;
            this.updateDescr();
        });
        this.events.on("progress-info2", (data: string) => {
            this.line2 = data;
            this.updateDescr();
        });
        this.events.on("progress-info3", (data: string) => {
            this.line3 = data;
            this.updateDescr();
        });

        // this.anims.create({
        //     key: AnimationType.LOBBY_LOADING,
        //     defaultTextureKey: IMAGE_LOBBY_LOADING,
        //     frames: [
        //         { frame: 0, duration: 5000 },
        //         { frame: 1, duration: 100 },
        //         { frame: 2, duration: 100 },
        //         { frame: 3, duration: 100 },
        //         { frame: 4, duration: 1000 },
        //         { frame: 3, duration: 100 },
        //         { frame: 2, duration: 100 },
        //         { frame: 1, duration: 100 },
        //     ],
        //     repeat: -1,
        // });

        // this.anims.create({
        //     key: AnimationType.LOBBY_FOX_SMILE,
        //     defaultTextureKey: IMAGE_LOBBY_FOX_SMILE,
        //     frames: [
        //         { frame: 0, duration: 50 },
        //         { frame: 1, duration: 50 },
        //         { frame: 2, duration: 50 },
        //         { frame: 3, duration: 50 },
        //         { frame: 4, duration: 50 },
        //         { frame: 5, duration: 100 },
        //         //{ frame: 6, duration: 100 },
        //     ],
        // });

        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;

        // this.loadingImage = this.add
        //     .sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_LOADING)
        //     .setDisplaySize(400, 600)
        //     .setOrigin(0.5, 0.5);
        // this.loadingImage.anims.play(AnimationType.LOBBY_LOADING);

        this.loadingText = this.add
            .text(screenCenterX, screenCenterY - 200, i18n.ui.LOADING + "...", { fontFamily: "Arial Black", fontSize: 24, color: "#ffffff" })
            .setOrigin(0.5, 0); //LOADING...

        this.descrText = this.add
            .text(screenCenterX, screenCenterY - 150, i18n.ui.LOADING_DESCR, {
                fontFamily: "Arial Black",
                fontSize: 16,
                //fontStyle: "bold",
                color: "#dddddd",
            })
            .setOrigin(0.5, 0); //LOADING...

        this.currentHintIndex = getRandomArrayIndex(this.hints);

        this.hintText = this.add
            .text(screenCenterX, screenCenterY, this.hints[this.currentHintIndex], {
                fontFamily: "Arial Black",
                fontSize: 20,
                color: "#dddddd",
            })
            .setOrigin(0.5, 0)
            .setAlpha(0); //LOADING...

        //this.changeHint();
        setTimeout(() => {
            this.tweens.add({
                targets: this.hintText,
                //x: { from: 2000, to: -1000 },
                //y: { from: -1000, to: 2000 },
                alpha: { from: 0, to: 1 },
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 800,
                repeat: 0, // -1: infinity
                yoyo: false,
            });
            //this.hintText.setVisible(true);
        }, 1000);

        setTimeout(() => {
            this.changeHint();
        }, 8000);

        //EventBus.on(EventType.GAME_STATUS_CHANGED, (status: EGameStatus) => {
        //if (status === EGameStatus.LOBBY) {
        //this.loadingImage.setVisible(false);

        // const loadedImage = this.add.sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_FOX_SMILE).setOrigin(0.5, 0.5);
        // loadedImage.anims.play(AnimationType.LOBBY_FOX_SMILE);

        // const rect = this.add.rectangle(2000, -1000, 3000, 3000, 0);
        // rect.setRotation(0.785);

        // loadedImage.on(ANIMATION_COMPLETE, () => {
        //     //loadedImage.destroy();
        //     //this.scene.stop();
        //     //this.scene.start(EScene.LOBBY);
        //     this.tweens.add({
        //         targets: rect,
        //         //x: "-=1",
        //         // x: '+=1',
        //         // x: '-=1',
        //         // x: '*=1',
        //         // x: '/=1',
        //         // x: 'random(0.25, 0.75)',
        //         // x: 'int(10, 100)',
        //         // x: [100, 300, 200, 600],
        //         x: { from: 2000, to: -1000 },
        //         y: { from: -1000, to: 2000 },
        //         // x: { start: 0, to: 1 },
        //         // x: { start: value0, from: value1, to: value2 },
        //         // x: {
        //         //      getActive: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
        //         //      getStart: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
        //         //      getEnd: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; }
        //         // },
        //         ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
        //         duration: 1700,
        //         repeat: 0, // -1: infinity
        //         yoyo: false,

        //         // interpolation: null,
        //     });
        // });

        this.scale.addListener(Scale.Events.RESIZE, this.debounceResize);

        this.events.once(Scenes.Events.SHUTDOWN, () => {
            //this.scale.removeAllListeners(Phaser.Scale.Events.RESIZE);
            this.scale.removeListener(Phaser.Scale.Events.RESIZE, this.debounceResize, this);
        });

        //setTimeout(() => {
        this.scene.launch(EScene.RESOURCE_LOAD);
        //}, 1000);

        // setTimeout(() => {
        //     this.scene.stop();
        //     //this.scene.start(EScene.LOBBY);
        //     this.scene.start(EScene.GAME);
        // }, 1000);
        //}
        //});

        //EventBus.emit(EventType.JOIN_LOBBY);
    }

    private resize(width: number, height: number) {
        const screenCenterX = width / 2;
        const screenCenterY = height / 2;

        this.loadingText.setPosition(screenCenterX, screenCenterY - 200);
        this.descrText.setPosition(screenCenterX, screenCenterY - 150);
        this.hintText.setPosition(screenCenterX, screenCenterY);
    }

    private debounceResize = () => {
        this.resizeTimeoutId && clearTimeout(this.resizeTimeoutId);
        if (!this?.cameras?.main) {
            return;
        }
        const { width, height } = this.cameras.main;
        this.resizeTimeoutId = setTimeout(() => {
            this.resize(width, height);
        }, 500);
    };

    changeHint() {
        this.tweens.add({
            targets: this.hintText,
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 800,
            repeat: 0, // -1: infinity
            yoyo: false,
        });

        const newHintIndex = getRandomArrayIndex(this.hints);
        if (this.currentHintIndex === newHintIndex) {
            this.currentHintIndex = newHintIndex === this.hints.length - 1 ? 0 : newHintIndex + 1;
        } else {
            this.currentHintIndex = newHintIndex;
        }

        this.timeoutId = setTimeout(() => {
            if (this.scene.getStatus(EScene.LOBBY_LOADING) !== 5) {
                return;
            }

            this.hintText.setText(this.hints[this.currentHintIndex]);

            this.tweens.add({
                targets: this.hintText,
                alpha: { from: 0, to: 1 },
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 800,
                repeat: 0, // -1: infinity
                yoyo: false,
            });

            setTimeout(() => {
                this.changeHint();
            }, 8000);
        }, 900);
    }

    initHints() {
        this.hints = i18n.hints;
    }
}
