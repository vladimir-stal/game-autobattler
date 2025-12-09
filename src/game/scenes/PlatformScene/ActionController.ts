import { ActionType, EItemType, ERoomObjectStatus, ERoomObjectType } from "../../../types";
import Dude from "../../components/house/Dude";
import Bat from "../../components/house/roomObjects/Bat";
import RoomObject from "../../components/house/roomObjects/RoomObject";
import TreasureChest from "../../components/house/roomObjects/TreasureChest";
import { EventBus, EventType } from "../../EventBus";
import { getRoomObjectUseAnimationTime } from "../../utils/animationUtils";

export class ActionController {
    dude: Dude;
    usedRoomObjectIds: string[]; // list of already used room objects

    constructor(dude: Dude) {
        this.dude = dude;
        this.usedRoomObjectIds = [];
    }

    // execute(actionType: ActionType) {
    //     switch (actionType) {
    //         case ActionType.ROOM_OBJECT_SKULL_PILE:
    //             {
    //                 const ANIMATION_TIME = 1000;
    //                 // play animation
    //                 EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.SKULL_PILE);
    //                 // execute action after animation delay
    //                 setTimeout(() => {
    //                     console.log("EXCUTE ROOM OBJECT ACTION", actionType);
    //                     EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, ERoomObjectType.SKULL_PILE);
    //                 }, ANIMATION_TIME);
    //             }
    //             break;
    //         default: {
    //             console.log("ERROR! ACTION  TYPE IS NOT HANDLED!", actionType);
    //         }
    //     }
    // }

    executeUseRoomObject(dude: Dude, roomObject: RoomObject, actionType: ActionType) {
        // check room object was already used
        if (this.usedRoomObjectIds.includes(roomObject.id)) {
            return;
        }

        // do not let use this object again
        //TODO: check if this is ok for all room object types
        this.usedRoomObjectIds.push(roomObject.id);

        const { id } = roomObject;

        switch (actionType) {
            case ActionType.BAT:
                {
                    const { isBot, scene, userId } = dude;
                    const { status } = roomObject as Bat;
                    if (status === ERoomObjectStatus.AVAILABLE) {
                        let itemFoundInInventory;
                        if (isBot) {
                            // checking if bot has a stone
                            const inventory = scene.botController.getInventory(userId);
                            itemFoundInInventory = inventory.findItem(EItemType.STONE_LIGHT);
                        } else {
                            // checking if player has a stone
                            itemFoundInInventory = scene.inventoryPanel.findItem(EItemType.STONE_LIGHT);
                        }

                        if (itemFoundInInventory) {
                            // play animation
                            dude.setIsAnimation(true);
                            EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.BAT, id);

                            // execute action after animation delay
                            setTimeout(() => {
                                //console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                                //dude.setIsAnimation(false);
                                EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.BAT);
                            }, getRoomObjectUseAnimationTime(ERoomObjectType.BAT));
                        } else {
                            console.log("NO STONE");
                        }
                    }
                }
                break;
            case ActionType.BAT_ATTACK:
                {
                    // play animation
                    dude.setIsAnimation(true);
                    // TODO: combine in 1 event
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.BAT_ATTACK, id);
                    EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.BAT_ATTACK);
                    // console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                    // execute action after animation delay
                    setTimeout(() => {
                        //dude.setIsAnimation(false);
                    }, getRoomObjectUseAnimationTime(ERoomObjectType.BAT_ATTACK));
                }
                break;
            case ActionType.CURSED_CHEST:
                {
                    // play animation
                    dude.setIsAnimation(true);
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.CURSED_CHEST, id);
                    // execute action after animation delay
                    setTimeout(() => {
                        //console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                        //dude.setIsAnimation(false);
                        EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.CURSED_CHEST);
                    }, getRoomObjectUseAnimationTime(ERoomObjectType.CURSED_CHEST));
                }
                break;
            case ActionType.GHOST_BEHIND:
                {
                    // play animation
                    dude.setIsAnimation(true);
                    // TODO: combine in 1 event
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.GHOST_BEHIND, id);
                    EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.GHOST_BEHIND);
                    // console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                    // execute action after animation delay
                    setTimeout(() => {
                        //dude.setIsAnimation(false);
                    }, getRoomObjectUseAnimationTime(ERoomObjectType.GHOST_BEHIND));
                }
                break;
            case ActionType.ROOM_OBJECT_SKULL_PILE:
                {
                    // play animation
                    dude.setIsAnimation(true);
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.SKULL_PILE, id);
                    // execute action after animation delay
                    setTimeout(() => {
                        console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                        //dude.setIsAnimation(false);
                        EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.SKULL_PILE);
                    }, getRoomObjectUseAnimationTime(ERoomObjectType.SKULL_PILE));
                }
                break;
            case ActionType.SPIDER:
                {
                    // play animation
                    dude.setIsAnimation(true);
                    // TODO: combine in 1 event
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.SPIDER, id);
                    EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.SPIDER);
                }
                break;
            case ActionType.TRAP:
                {
                    // play animation
                    const ANIMATION_TIME = 1000;
                    dude.setIsAnimation(true);
                    // TODO: combine in 1 event
                    EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.TRAP, id);
                    EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.TRAP);
                    console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                    // execute action after animation delay
                    setTimeout(() => {
                        //dude.setIsAnimation(false);
                    }, ANIMATION_TIME);
                }
                break;
            case ActionType.TREASURE_CHEST:
                {
                    // play animation
                    //const ANIMATION_TIME = 2000;
                    if (roomObject.status === ERoomObjectStatus.AVAILABLE) {
                        dude.setIsAnimation(true);

                        const { isBot, scene, userId } = dude;
                        const { id, items, slotCount, status } = roomObject as TreasureChest;
                        let chestIsOpen = false;
                        if (isBot) {
                            // checking if bot has a key
                            const inventory = scene.botController.getInventory(userId);
                            const itemFoundInInventory = inventory.findItem(EItemType.KEY);
                            if (itemFoundInInventory) {
                                chestIsOpen = true;
                            } else {
                                console.log("NO KEY");
                            }
                        } else {
                            // checking if player has a key
                            const itemFoundInInventory = scene.inventoryPanel.findItem(EItemType.KEY);
                            if (itemFoundInInventory) {
                                chestIsOpen = true;
                            }
                        }

                        // status for animation
                        const chestStatus = chestIsOpen ? ERoomObjectStatus.AVAILABLE : ERoomObjectStatus.CLOSED;
                        EventBus.emit(EventType.DUDE_PLAY_USE_OBJECT_ANIMATION, this.dude.userId, ERoomObjectType.TREASURE_CHEST, id, chestStatus);
                        // execute action after animation delay
                        if (chestIsOpen) {
                            setTimeout(() => {
                                EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.TREASURE_CHEST);
                            }, getRoomObjectUseAnimationTime(ERoomObjectType.TREASURE_CHEST));
                        }

                        // setTimeout(() => {
                        //     console.log("EXCUTE ROOM OBJECT ACTION", actionType);
                        //     //dude.setIsAnimation(false);

                        //     const { isBot, scene, userId } = dude;
                        //     const { id, items, slotCount, status } = roomObject as TreasureChest;
                        //     //if (status === ERoomObjectStatus.AVAILABLE) {
                        //     if (isBot) {
                        //         // checking if bot has a key
                        //         const inventory = scene.botController.getInventory(userId);
                        //         const itemFoundInInventory = inventory.findItem(EItemType.KEY);
                        //         if (itemFoundInInventory) {
                        //             // bot takes random item from the chest
                        //             EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.TREASURE_CHEST);
                        //         } else {
                        //             console.log("NO KEY");
                        //         }
                        //     } else {
                        //         // checking if player has a key
                        //         const itemFoundInInventory = scene.inventoryPanel.findItem(EItemType.KEY);
                        //         if (itemFoundInInventory) {
                        //             //scene.inventoryPanel.removeItem(itemFoundInInventory.id);
                        //             // TODO: remove item panel. use same way as bot
                        //             //scene.itemsPanel.show(items, id, slotCount);
                        //             EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.TREASURE_CHEST);
                        //         }
                        //     }

                        //     //EventBus.emit(EventType.DUDE_USE_ROOM_OBJECT, this.dude.userId, roomObject.id, ERoomObjectType.TREASURE_CHEST);
                        // }, getRoomObjectUseAnimationTime(ERoomObjectType.TREASURE_CHEST));
                    } else {
                        console.log("Cannot use this chect now. Status:", status);
                    }
                }
                break;
            default: {
                console.log("ERROR! ACTION  TYPE IS NOT HANDLED!", actionType);
            }
        }
    }
}
