import { AnimationType, ERoomStatus, EScene } from "../../types";
import { ANIMATION_COMPLETE, IMAGE_LOBBY_FOX_SMILE, IMAGE_LOBBY_LOADING } from "../consts";
import { EventBus, EventType } from "../EventBus";
import { Cameras, Display, Events, GameObjects, Input, Scene, Types } from "phaser";
import { loadImages } from "../utils/imageLoadUtils";
import { loadSounds } from "../utils/soundLoadUtils";

export class GameLoadingScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    titleText: GameObjects.Text;
    scrollText: GameObjects.Text;
    cameraControls: Cameras.Controls.SmoothedKeyControl;
    loadingImage: GameObjects.Sprite;
    pointer: { x: number; y: number };

    constructor() {
        super(EScene.GAME_LOADING);
    }

    prelaod() {
        this.load.spritesheet(IMAGE_LOBBY_LOADING, "assets/sprites/background/fox_loading.png", {
            frameWidth: 1000,
            frameHeight: 1500,
        });
    }

    create() {
        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;

        this.loadingImage = this.add
            .sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_LOADING)
            .setDisplaySize(400, 600)
            .setOrigin(0.5, 0.5);
        this.loadingImage.anims.play(AnimationType.LOBBY_LOADING);

        this.add.text(screenCenterX - 40, screenCenterY + 200, "LOADING...", {});

        EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
            if (status === ERoomStatus.GAME_CREATED) {
                this.scene.launch(EScene.RESOURCE_LOAD);
                //this.scene.switch(EScene.RESOURCE_LOAD);
            }
            return;

            //console.log(">>>>> ROOM_STATUS_CHANGED", status);
            if (status === ERoomStatus.GAME_CREATED) {
                //this.scene.stop();
                //console.log(">>>>> change to Platform scene");
                //this.scene.start('GameMultScene', { citySize: 5 });
                //this.scene.start(EScene.PLATFORM);
                //this.scene.switch(EScene.PLATFORM);
                //this.scene.switch ('GameMultScene');

                //this.scene.launch(EScene.PLATFORM); this one!!

                this.loadingImage.setVisible(false);

                const loadedImage = this.add.sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_FOX_SMILE).setOrigin(0.5, 0.5);
                loadedImage.anims.play(AnimationType.LOBBY_FOX_SMILE);

                const rect = this.add.rectangle(2000, -1000, 3000, 3000, 0);
                rect.setRotation(0.785);

                loadedImage.on(ANIMATION_COMPLETE, () => {
                    this.tweens.add({
                        targets: rect,
                        x: { from: 2000, to: -1000 },
                        y: { from: -1000, to: 2000 },
                        ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                        duration: 1700,
                        repeat: 0, // -1: infinity
                        yoyo: false,
                    });
                });

                setTimeout(() => {
                    this.scene.launch(EScene.PLATFORM);
                }, 1000);
            }
        });

        EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
            if (status === ERoomStatus.PLATFORM_LOADED) {
                this.loadingImage.setVisible(false);

                const loadedImage = this.add.sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_FOX_SMILE).setOrigin(0.5, 0.5);
                loadedImage.anims.play(AnimationType.LOBBY_FOX_SMILE);

                const rect = this.add.rectangle(2000, -1000, 3000, 3000, 0);
                rect.setRotation(0.785);

                loadedImage.on(ANIMATION_COMPLETE, () => {
                    this.tweens.add({
                        targets: rect,
                        x: { from: 2000, to: -1000 },
                        y: { from: -1000, to: 2000 },
                        ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                        duration: 1700,
                        repeat: 0, // -1: infinity
                        yoyo: false,
                    });
                });
            }
        });

        EventBus.emit(EventType.START_GAME);
    }

    // sleep() {
    //     super.sleep();
    // }
}
