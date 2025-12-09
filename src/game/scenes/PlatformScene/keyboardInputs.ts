import { Input } from "phaser";
import { GameScene } from "../GameScene";

/** Initiate keyboard input listeners */
export function initInputListeners(scene: GameScene) {
    if (scene.input.mouse) {
        scene.input.mouse.disableContextMenu();

        scene.input.on("pointerdown", function (p: Input.Pointer) {
            if (p.rightButtonDown()) {
                console.log("right button mouse click");

                if (scene.isCardMoveMode) {
                    scene.cancelCardMove();
                }
            }
        });
    }

    if (scene.input.keyboard) {
        //scene.isInputEnabled = true;
        const { keyboard } = scene.input;
        //
        // W
        //
        keyboard.on("keydown-W", () => {
            //scene.camera.pan(scene.camera.x, scene.camera.scrollY + 20, 200, "Sine.easeIn");
        });
        //
        // A
        //
        keyboard.on("keydown-A", () => {});
        //
        // S
        //
        keyboard.on("keydown-S", () => {});
        //
        // D
        //
        keyboard.on("keydown-D", () => {});
        //
        keyboard.on("keydown-SPACE", () => {});
        keyboard.on("keydown-ESC", () => {});

        const cam = scene.camera;

        // TODO: add type
        scene.input.on("pointermove", function (p: Input.Pointer) {
            if (!p.isDown) return;

            //cam.scrollX -= (p.x - p.prevPosition.x) / cam.zoom;
            //cam.scrollY -= (p.y - p.prevPosition.y) / cam.zoom;

            cam.scrollX -= p.x - p.prevPosition.x;
            cam.scrollY -= p.y - p.prevPosition.y;
        });
    }
}
