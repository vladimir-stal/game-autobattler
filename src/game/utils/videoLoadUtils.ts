import { Scene } from "phaser";
import { VIDEO_BEAR_CURSE } from "../consts";

export function loadVideos(scene: Scene) {
    scene.load.setPath("assets/video");

    scene.load.video(VIDEO_BEAR_CURSE, "bear_curse.mp4");
}
