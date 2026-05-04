import { EScene } from "../../types";
import { Cameras, GameObjects, Scene } from "phaser";
import { loadImages } from "../utils/imageLoadUtil";
import { createAnimations, createIntialAnimations } from "../utils/animationUtils";

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
        const loadingScreen = this.scene.get(EScene.LOBBY_LOADING);
        this.load.on("filecomplete", (key: string, type: string, data: any) => {
            loadingScreen.events.emit("progress-info3", key);
        });
        this.load.on("progress", (progress: number) => {
            const num = Math.floor(progress * 1000) / 10;
            const n2 = Math.floor(progress * 40 + 0.5);
            loadingScreen.events.emit("progress-info2", num + "%");
            loadingScreen.events.emit("progress-info", "=".repeat(n2) + "-".repeat(40 - n2));
        });
        loadImages(this);
    }

    create() {
        //createAnimations(this);
        createIntialAnimations(this);
        console.log("RESOURCE LOADED! CHANGE SCENE!");

        this.scene.stop(EScene.LOBBY_LOADING);
        this.scene.stop();
        this.scene.start(EScene.GAME);
    }
}
