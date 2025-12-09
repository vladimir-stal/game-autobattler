import { Queue } from "../../components/house/Queue";
import { getFloorY } from "../../consts";
import { PlatformScene } from "../PlatformScene";

export function centerCameraOnMainDude(scene: PlatformScene, duration: number) {
    // let xShift = 0;
    // const { queue, mainDude } = scene;
    // if (queue) {
    //     const length = queue.getLength();
    //     const position = queue.getPosition(mainDude.userId);

    //     if (position === 0) {
    //         xShift = -200;
    //     }

    //     if (position === length - 1) {
    //         xShift = 300;
    //     }
    // }
    // scene.camera.pan(scene.mainDude.gameObject.x + xShift, scene.cameraY, duration, "Sine.easeIn");
    scene.camera.pan(scene.mainDude.gameObject.x, scene.cameraY, duration, "Sine.easeIn");
}

export function panCamera(scene: PlatformScene, x: number, duration: number, queuePosition?: number) {
    console.log("PAN CAMERA TO", x);
    let xShift = 0;
    if (queuePosition !== undefined) {
        const { queue } = scene;
        const length = queue.getLength();

        if (queuePosition === 0) {
            xShift = -200;
        }
        if (queuePosition === length - 1) {
            xShift = 200;
        }
    }
    scene.camera.pan(x + xShift, scene.cameraY, duration, "Sine.easeIn");
}
