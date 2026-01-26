import { EScene } from "../../types";
import { Cameras, GameObjects, Scene } from "phaser";
import { loadImages } from "../utils/imageLoadUtil";
import { createAnimations } from "../utils/animationUtils";

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
        loadImages(this);
        // loadSounds(this);
    }

    create() {
        createAnimations(this);

        console.log("RESOURCE LOADED! CHANGE SCENE!");

        this.scene.stop(EScene.LOBBY_LOADING);
        this.scene.stop();
        this.scene.start(EScene.GAME);
    }
}
