import { ERoomStatus, EScene } from "../../types";
import { EventBus, EventType } from "../EventBus";
import { Cameras, GameObjects, Scene } from "phaser";
import { loadImages } from "../utils/imageLoadUtils";
import { loadSounds } from "../utils/soundLoadUtils";

export class ResourceLoadScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    titleText: GameObjects.Text;
    scrollText: GameObjects.Text;
    cameraControls: Cameras.Controls.SmoothedKeyControl;
    loadingImage: GameObjects.Sprite;

    constructor() {
        super(EScene.RESOURCE_LOAD);
    }

    preload() {
        //loadImages(this);
        //loadSounds(this);
    }

    create() {
        //createAnimations(this);

        // when all players load resources
        EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
            if (status === ERoomStatus.PLATFORM_LOADED) {
                setTimeout(() => {
                    this.scene.stop(EScene.GAME_LOADING);
                    this.scene.stop();
                    this.scene.start(EScene.GAME);
                }, 1000);
            }
        });

        EventBus.emit(EventType.SCENE_PLATFORM_LOADED);
    }
}
