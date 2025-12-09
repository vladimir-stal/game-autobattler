import { ECurseType, EHouseEventType, ELevelType, ERoomObjectType, IHouseEvent } from "../../../types";
import { DUDES_DISTANCE, getFloorY, GROUND_HEIGHT, ROOM_WIDTH } from "../../consts";
import { EventBus, EventType } from "../../EventBus";
import { getRandomIntFromInterval } from "../../utils/commonUtils";
import { PlatformScene } from "../PlatformScene";
import { EFirstPlanObject } from "./FirstPlanContainer";

export class HouseEventController {
    scene: PlatformScene;
    isHost: boolean;
    frame: number;
    eventRoom: number;
    isEventStarted: boolean;

    constructor(scene: PlatformScene) {
        this.scene = scene;
        this.isHost = scene.isHost;
        this.frame = 0;
        this.eventRoom = 100;
        this.isEventStarted = false;
    }

    init() {
        EventBus.on(EventType.HOUSE_EVENT_STARTED, (houseEvent: IHouseEvent) => {
            console.log("START HOUSE EVENT", houseEvent.type);
            const { type } = houseEvent;

            switch (type) {
                case EHouseEventType.BONUS_SELECT:
                    {
                        const { selectedBonusIndex, userId } = houseEvent;
                        console.log("BONUS SELECTED", selectedBonusIndex, userId);
                        this.scene.bonusSelectPanel.onBonusSelected(userId, selectedBonusIndex);

                        const dude = this.scene.dudesContainer.dudes.find((dude) => dude.userId === userId);
                        if (dude && dude.isBot && this.scene.botController.getIsEnabled()) {
                            this.scene.botController.selectBonus(userId);
                        }
                    }
                    break;
                case EHouseEventType.BONUS_SELECT_FINISH:
                    {
                        this.scene.bonusSelectPanel.onLastCurseSelected(houseEvent.selectedBonusIndex);
                    }
                    break;
                case EHouseEventType.BONUS_SELECT_START:
                    {
                        const { bonusTypes, userId } = houseEvent;
                        console.log("BONUS SELECTED STARTED first to pick", userId);
                        this.scene.bonusSelectPanel.show(bonusTypes, userId);

                        const dude = this.scene.dudesContainer.dudes.find((dude) => dude.userId === userId);
                        if (dude && dude.isBot && this.scene.botController.getIsEnabled()) {
                            this.scene.botController.selectBonus(userId);
                        }
                    }
                    break;
                // WALK EVENTS
                case EHouseEventType.BATS:
                    {
                        const { roomObjects } = houseEvent;
                        //console.log("---> ROOM OBJECTS BATS:");

                        setTimeout(() => {
                            this.scene.firstPlan.addObject(EFirstPlanObject.BAT_VERY_BIG);
                        }, 0);

                        setTimeout(() => {
                            this.scene.firstPlan.addObject(EFirstPlanObject.BAT_BIG);
                        }, 1000);

                        const level = this.scene.levelController.getLevel();
                        const startQueueX = this.scene.queue.getStartX();
                        const floorY = getFloorY(level);

                        roomObjects.forEach((roomObject, index) => {
                            const { id, type } = roomObject;
                            setTimeout(() => {
                                const y = floorY - getRandomIntFromInterval(0, 4) * 50;
                                const x = startQueueX + 1200 + index * 150;
                                const roomObject = this.scene.houseContainer.insertRoomObject(id, x, y, level, type);
                                if (roomObject) {
                                    this.scene.roomObjectsController.addRoomObject(roomObject);
                                }
                            }, index * 1500);
                        });

                        // AFTER EVENT EFFECT
                        setTimeout(() => {
                            if (this.scene.levelController.getLevelType() === ELevelType.REST) {
                                return;
                            }

                            this.scene.mainDude.addCurse({ type: ECurseType.BATS });
                        }, 15000);

                        // for testing
                        // this.scene.notificationPanel.setMainText("EVENT STARTED - BATS");
                        // setTimeout(() => {
                        //     this.scene.notificationPanel.clearMainText();
                        // }, 4000);
                    }
                    break;
                case EHouseEventType.EARTHQUAKE:
                    {
                        // TODO: play event animation
                        this.scene.notificationPanel.setMainText("EVENT STARTED - EARTHQUAKE " + houseEvent.targetIds.length);
                        this.scene.firstPlan.addObject(EFirstPlanObject.STONE_FALL_BIG);
                        this.scene.camera.shake(3000, 0.005);
                        setTimeout(() => {
                            this.scene.firstPlan.addObject(EFirstPlanObject.STONE_FALL_BIG);
                        }, 1000);
                        console.log("EARTHQUAKE", houseEvent.targetIds);

                        console.log("camera x", this.scene.camera.x);
                        console.log("camera width", this.scene.camera.width);
                        console.log("camera scrollX", this.scene.camera.scrollX);

                        console.log("getStartX", this.scene.queue.getStartX());

                        setTimeout(() => {
                            houseEvent.targetIds.forEach((targetId) => {
                                const queueStartX = this.scene.queue.getStartX() - this.scene.camera.scrollX;
                                const x = queueStartX - this.scene.queue.getPosition(targetId) * DUDES_DISTANCE;
                                this.scene.firstPlan.addObject(EFirstPlanObject.STONE_FALL, x + 20);
                            });
                        }, 2000);

                        setTimeout(() => {
                            this.scene.notificationPanel.clearMainText();
                        }, 4000);
                    }
                    break;
                case EHouseEventType.GHOST_ATTACK:
                    {
                        // TODO: play event animation
                        this.scene.notificationPanel.setMainText("EVENT STARTED - GHOST ATTACK ");
                        setTimeout(() => {
                            this.scene.notificationPanel.clearMainText();
                        }, 4000);

                        this.scene.firstPlan.addObject(EFirstPlanObject.GHOST);
                    }
                    break;
                case EHouseEventType.SPIDERS:
                    {
                        const { roomObjects } = houseEvent;
                        console.log("---> ROOM OBJECTS SPIDERS:");

                        this.scene.firstPlan.addObject(EFirstPlanObject.WEB);

                        const level = this.scene.levelController.getLevel();
                        const startQueueX = this.scene.queue.getStartX();
                        const floorY = getFloorY(level);

                        roomObjects.forEach((roomObject, index) => {
                            const { id, type } = roomObject;
                            setTimeout(() => {
                                const y = floorY - GROUND_HEIGHT;
                                const x = startQueueX + 1700 + index * 150;
                                const roomObject = this.scene.houseContainer.insertRoomObject(id, x, y, level, type);
                                if (roomObject) {
                                    this.scene.roomObjectsController.addRoomObject(roomObject);
                                    window.setTimeout(() => {
                                        this.scene.audio.playRoomObjectSound(ERoomObjectType.SPIDER);
                                    }, 5000);
                                }
                            }, index * 1500);
                        });

                        // AFTER EVENT EFFECT
                        setTimeout(() => {
                            if (this.scene.levelController.getLevelType() === ELevelType.REST) {
                                return;
                            }

                            // dont apply effect if dude is dead
                            if (!this.scene.mainDude.isAlive) {
                                return;
                            }

                            EventBus.emit(EventType.DUDE_ADD_CURSE, this.scene.mainDude.userId, ECurseType.SPIDERS);
                            setTimeout(() => {
                                EventBus.emit(EventType.DUDE_REMOVE_CURSE, this.scene.mainDude.userId, ECurseType.SPIDERS);
                            }, 20000);
                        }, 13000);
                    }
                    break;
                default: {
                    console.log("ERROR! unhandled house event type", type);
                }
            }
        });
    }

    initEventsForLevel() {
        // TODO: use random room
        this.eventRoom = 5;
    }

    update() {
        // limit update frequency
        this.frame++;
        if (this.frame > 50) {
            this.frame = 0;
        }
        if (this.frame !== 0) {
            return;
        }
        //
        if (this.isEventStarted) {
            return;
        }
        //console.log(">> event controller UPDATE");

        const currentX = this.scene.queue.getStartX();
        if (currentX > this.eventRoom * ROOM_WIDTH) {
            //console.log("ROOM FOUND!", currentX);
            this.isEventStarted = true;
            EventBus.emit(EventType.EVENT_START_RANDOM);
        }
    }

    /** Remove all events */
    clear() {
        // first plan objects are cleared on rest stage from LevelController
        // inventory curses are cleared on server on LEVEL_CHANGE event
    }
}
