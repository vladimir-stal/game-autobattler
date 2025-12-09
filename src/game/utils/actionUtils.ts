import { ActionType } from "../../types";
import Dude from "../components/house/Dude";
import { PlatformScene } from "../scenes/PlatformScene";

export function executeHomeTP(dude: Dude, scene?: PlatformScene, callback?: (actionType: ActionType) => void) {
    if (scene) {
        const { x, y, floor } = scene.houseContainer.baseRoom;
        dude.gameObject.x = x;
        dude.gameObject.y = y - 400;
        dude.floor = floor;
        callback?.(ActionType.HOME_TP_DOOR);
    }
}
