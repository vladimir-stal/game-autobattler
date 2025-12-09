import { EHouseEventType, ERoomObjectType, IHouseEvent } from "../../../types";
import { getFloorY } from "../../consts";
import { EventBus, EventType } from "../../EventBus";
import { getRandomArrayItem, getRandomIntFromInterval } from "../../utils/commonUtils";
import { PlatformScene } from "../PlatformScene";
import { EFirstPlanObject } from "./FirstPlanContainer";

const BASIC_OBJECTS = [EFirstPlanObject.CHAIN, EFirstPlanObject.CHAIN_SMALL, EFirstPlanObject.COLUMN, EFirstPlanObject.WATER_DROP_BIG, EFirstPlanObject.ROCK];
const SMALL_BASIC_OBJECTS = [EFirstPlanObject.WATER_DROP];
const RARE_OBJECTS = [EFirstPlanObject.WITCH];

const BASIC_OBJECT_TIME = 5000;
const BASIC_OBJECT_CHANCE = 40;

const SMALL_BASIC_OBJECT_TIME = 4000;
const SMALL_BASIC_OBJECT_CHANCE = 80;

const RARE_OBJECT_CHANCE = 5;

export class FirstPlanController {
    scene: PlatformScene;

    basicObjectTimerId: ReturnType<typeof setTimeout>;

    constructor(scene: PlatformScene) {
        this.scene = scene;
    }

    start() {
        this.addBasicObjectTimer();
        this.addSmallBasicObjectTimer();
    }

    addBasicObjectTimer() {
        this.basicObjectTimerId = setTimeout(() => {
            const randomChance = getRandomIntFromInterval(0, 100);
            if (randomChance < BASIC_OBJECT_CHANCE) {
                const { firstPlan } = this.scene;
                // on % use rare object intead of basic
                const objects = randomChance < RARE_OBJECT_CHANCE ? RARE_OBJECTS : BASIC_OBJECTS;
                const type = getRandomArrayItem(objects);
                firstPlan.addObject(type);
            }
            this.addBasicObjectTimer();
        }, BASIC_OBJECT_TIME);
    }

    addSmallBasicObjectTimer() {
        this.basicObjectTimerId = setTimeout(() => {
            const randomChance = getRandomIntFromInterval(0, 100);
            if (randomChance < SMALL_BASIC_OBJECT_CHANCE) {
                const { firstPlan } = this.scene;
                const randomIndex = getRandomIntFromInterval(0, SMALL_BASIC_OBJECTS.length - 1);
                const type = SMALL_BASIC_OBJECTS[randomIndex];
                firstPlan.addObject(type);
            }
            this.addSmallBasicObjectTimer();
        }, SMALL_BASIC_OBJECT_TIME);
    }

    abortBasicObjectTimer() {
        clearTimeout(this.basicObjectTimerId);
    }

    stop() {
        this.abortBasicObjectTimer();
    }

    addCustomObjectTimer(type: EFirstPlanObject, time: number) {
        const { firstPlan } = this.scene;
        firstPlan.addObject(type);
        const objectTimerId = setTimeout(() => {
            firstPlan.removeObject(type);
        }, time);
    }
}
