import { AnimationType, EGameStatus, EScene } from "../../types";
import { ANIMATION_COMPLETE, IMAGE_CHEST, IMAGE_INVENTORY_SLOT, IMAGE_LOBBY_FOX_SMILE, IMAGE_LOBBY_LOADING } from "../consts";
import { EventBus, EventType } from "../EventBus";
import { Cameras, GameObjects, Scene } from "phaser";

export class LobbyLoadingScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    titleText: GameObjects.Text;
    scrollText: GameObjects.Text;
    cameraControls: Cameras.Controls.SmoothedKeyControl;
    loadingImage: GameObjects.Sprite;

    pointer: { x: number; y: number };

    constructor() {
        super(EScene.LOBBY_LOADING);
    }

    preload() {
        this.load.spritesheet(IMAGE_LOBBY_LOADING, "assets/sprites/background/fox_loading.png", {
            frameWidth: 1000,
            frameHeight: 1500,
        });

        this.load.spritesheet(IMAGE_LOBBY_FOX_SMILE, "assets/sprites/background/fox_smile.png", {
            frameWidth: 400,
            frameHeight: 600,
        });
    }

    create() {
        this.anims.create({
            key: AnimationType.LOBBY_LOADING,
            defaultTextureKey: IMAGE_LOBBY_LOADING,
            frames: [
                { frame: 0, duration: 5000 },
                { frame: 1, duration: 100 },
                { frame: 2, duration: 100 },
                { frame: 3, duration: 100 },
                { frame: 4, duration: 1000 },
                { frame: 3, duration: 100 },
                { frame: 2, duration: 100 },
                { frame: 1, duration: 100 },
            ],
            repeat: -1,
        });

        this.anims.create({
            key: AnimationType.LOBBY_FOX_SMILE,
            defaultTextureKey: IMAGE_LOBBY_FOX_SMILE,
            frames: [
                { frame: 0, duration: 50 },
                { frame: 1, duration: 50 },
                { frame: 2, duration: 50 },
                { frame: 3, duration: 50 },
                { frame: 4, duration: 50 },
                { frame: 5, duration: 100 },
                //{ frame: 6, duration: 100 },
            ],
        });

        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;

        this.loadingImage = this.add
            .sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_LOADING)
            .setDisplaySize(400, 600)
            .setOrigin(0.5, 0.5);
        this.loadingImage.anims.play(AnimationType.LOBBY_LOADING);

        const text = this.add.text(screenCenterX - 40, screenCenterY + 200, "LOADING...", {});

        //EventBus.on(EventType.GAME_STATUS_CHANGED, (status: EGameStatus) => {
        //if (status === EGameStatus.LOBBY) {
        this.loadingImage.setVisible(false);

        const loadedImage = this.add.sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_FOX_SMILE).setOrigin(0.5, 0.5);
        loadedImage.anims.play(AnimationType.LOBBY_FOX_SMILE);

        const rect = this.add.rectangle(2000, -1000, 3000, 3000, 0);
        rect.setRotation(0.785);

        loadedImage.on(ANIMATION_COMPLETE, () => {
            //loadedImage.destroy();
            //this.scene.stop();
            //this.scene.start(EScene.LOBBY);
            this.tweens.add({
                targets: rect,
                //x: "-=1",
                // x: '+=1',
                // x: '-=1',
                // x: '*=1',
                // x: '/=1',
                // x: 'random(0.25, 0.75)',
                // x: 'int(10, 100)',
                // x: [100, 300, 200, 600],
                x: { from: 2000, to: -1000 },
                y: { from: -1000, to: 2000 },
                // x: { start: 0, to: 1 },
                // x: { start: value0, from: value1, to: value2 },
                // x: {
                //      getActive: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
                //      getStart: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
                //      getEnd: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; }
                // },
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 1700,
                repeat: 0, // -1: infinity
                yoyo: false,

                // interpolation: null,
            });
        });

        setTimeout(() => {
            this.scene.stop();
            //this.scene.start(EScene.LOBBY);
            this.scene.start(EScene.GAME);
        }, 1000);
        //}
        //});

        //EventBus.emit(EventType.JOIN_LOBBY);
    }
}
