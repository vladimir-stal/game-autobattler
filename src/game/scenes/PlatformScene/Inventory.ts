import { ActionType, EDudeStatus, EItemType, IHouseItem, IInventoryItem, IItem } from "../../../types";
import { EventBus, EventType } from "../../EventBus";
import { PlatformScene } from "../../scenes/PlatformScene";
import Dude from "../../components/house/Dude";
import { Cooldowns } from "./Cooldowns";
import { ATTACK_ITEMS, createEmptyInventoryItem } from "../../utils/commonUtils";
import { BAG_OPEN_CD, CURSED_SKULL_BLOCK_CD, CURSED_SKULL_BOMB_CD, MAX_CURSE_POWER, STONE_HEAVY_DROP_CD, SWORD_ATTACK_CD } from "../../consts";

/** Player inventory */
export class Inventory {
    items: IInventoryItem[];
    dude: Dude; // inventory owner
    cooldowns: Cooldowns;
    droppedItemIds: string[]; // dropped items list to not allow picking up items dropped by same player
    actionCooldowns: Record<string, number>; // list of items with actions which will execute after time delay
    // callback to start visual timer after item picked
    onItemPickup: ((itemIndex: number, activationTime: number, itemType: EItemType) => void) | undefined;
    onItemReady: ((itemId: string) => void) | undefined;
    onItemUsed: ((itemIndex: number, cd: number) => void) | undefined;
    onItemActionCooldown: ((itemIndex: number, itemType: EItemType) => void) | undefined;

    cursePower: number; // number of skulls collected

    constructor() {
        this.droppedItemIds = [];
        this.actionCooldowns = {};
        this.items = [createEmptyInventoryItem(), createEmptyInventoryItem(), createEmptyInventoryItem(), createEmptyInventoryItem()];
        this.cursePower = 0;
    }

    init(
        items: IInventoryItem[],
        dude: Dude,
        onItemPickup?: (itemIndex: number, activationTime: number, itemType: EItemType) => void,
        onItemReady?: (itemId: string) => void,
        onItemUsed?: (itemIndex: number, cd: number) => void,
        onItemActionCooldown?: (itemIndex: number, itemType: EItemType) => void
    ) {
        this.dude = dude;
        this.items = items;
        this.cooldowns = new Cooldowns();
        this.cooldowns.setInitItems(items.filter((item) => !item.isEmpty));
        this.onItemPickup = onItemPickup;
        this.onItemReady = onItemReady;
        this.onItemUsed = onItemUsed;
        this.onItemActionCooldown = onItemActionCooldown;
    }

    pickUpItem(itemId: string) {
        //this.cooldowns.pickUpItem();
        EventBus.emit(EventType.ITEM_TAKE, itemId);
    }

    /**
     *
     * @param scene - current scene
     * @param items - new items from server
     * @param isSound - flag to play sound on item add/remove
     */
    changeItems(scene: PlatformScene, items: IInventoryItem[], isSound: boolean = false) {
        const previousItems = [...this.items];

        items.forEach((newItem, index) => {
            // check if an item added to inventory
            if (!newItem.isEmpty && !previousItems.find((item) => item.id === newItem.id)) {
                console.log("ITEM ADDED", newItem.id);
                // set item pickup action on cd
                this.cooldowns.onItemPickedUp(newItem.id, newItem.activationTime, this.onItemReady);
                this.addDroppedItem(newItem.id);
                this.addItemActionCooldown(newItem, index);
                this.executeItemPickedUpAction(newItem.type);
                this.onItemPickup?.(index, newItem.activationTime, newItem.type);

                // sound
                if (isSound) {
                    scene.audio.playTakeItemSound(newItem.type, true);
                }
            }
            // check if item removed from inventory
            if (newItem.isEmpty && !previousItems[index].isEmpty) {
                console.log("ITEM REMOVED", newItem.id);
                // clear item cooldown action timer
                const prevItemCdActionTimer = this.actionCooldowns[previousItems[index].id];
                if (prevItemCdActionTimer) {
                    clearTimeout(prevItemCdActionTimer);
                    delete this.actionCooldowns[previousItems[index].id];
                }
            }
        });

        this.items = items;
    }

    hasEmptySlot() {
        return !!this.items.find((item) => item.isEmpty);
    }

    getFirstEmptySlot() {
        return this.items.find((item) => item.isEmpty);
    }

    private emitUseItemAction(itemId: string, itemType: EItemType, userId: string, isBot: boolean) {
        if (isBot) {
            EventBus.emit(EventType.BOT_ITEM_USE, itemId, itemType, userId);
        } else {
            EventBus.emit(EventType.ITEM_USE, itemId, itemType);
        }
    }

    useItem(item: IInventoryItem, dude: Dude, scene: PlatformScene, callback?: (actionType: ActionType) => void) {
        const { id, isUsable, type } = item;
        const { isBot } = dude;

        //TODO: remove. isUsable is checked before
        if (!isUsable) {
            console.log("is not usable");
            return;
        }

        //this.cooldowns.useItem(item);

        switch (type) {
            //TODO: remove base tp item
            // case EItemType.BASE_TP:
            //     {
            //         //executeHomeTP(dude, scene, callback);
            //         //EventBus.emit(useItemEventType, { id, type });
            //         this.emitUseItemAction(id, type, isBot);
            //     }
            //     break;
            case EItemType.DAGGER:
            // case EItemType.SKULL:
            case EItemType.STONE_LIGHT:
                {
                    // check if not first in queue
                    const { queue } = scene;
                    if (queue.getPosition(dude.userId) === 0) {
                        console.log("Noone in front");
                        return;
                    }
                    this.addDroppedItem(id);

                    this.emitUseItemAction(id, type, dude.userId, isBot);
                }
                break;
            case EItemType.SWORD:
                {
                    // check if not first in queue
                    const { queue } = scene;
                    if (queue.getPosition(dude.userId) === 0) {
                        console.log("Noone in front");
                        return;
                    }

                    this.onItemUsed?.(this.findItemIndex(id), SWORD_ATTACK_CD);
                    this.cooldowns.setItemReadyTimer(id, SWORD_ATTACK_CD, this.onItemReady);
                    this.emitUseItemAction(id, type, dude.userId, isBot);
                }
                break;
            default: {
                // not allow to pick up used item
                this.addDroppedItem(id);
                //EventBus.emit(useItemEventType, { id, type });
                this.emitUseItemAction(id, type, dude.userId, isBot);
            }
        }
    }

    findItem(type: EItemType) {
        return this.items.find((item) => item.type === type);
    }

    findItemIndex(itemId: string) {
        return this.items.findIndex((item) => item.id === itemId);
    }

    /** Remove item from inventory panel */
    removeItem(itemId: string) {
        EventBus.emit(EventType.ITEM_REMOVE, itemId);
    }

    /** Remove item from inventory panel and put it on the floor (add it to house items) */
    dropItem(item: IHouseItem) {
        this.addDroppedItem(item.id);
        // TODO: add param distance to drop item in front of dude
        EventBus.emit(EventType.ITEM_DROP, item);
    }

    /** if item contains a weapon change main dude weapon */
    // changeWeapon(items: IInventoryItem[]) {
    //     for (let item of items) {
    //         if (!item.isEmpty && item.type.startsWith("WEAPON")) {
    //             this.mainDude.setWeapon(getWeaponType(item.type));
    //         }
    //     }
    // }

    getItems() {
        return this.items.filter((inventoryItem) => !inventoryItem.isEmpty);
    }

    /** Add item id to dropped items list to not allow pick it up again */
    addDroppedItem(itemId: string) {
        this.droppedItemIds.push(itemId);
    }

    /** check if an item was already dropped by main player */
    isDropped(itemId: string) {
        return this.droppedItemIds.includes(itemId);
    }

    addItemActionCooldown(item: IInventoryItem, index: number) {
        const { id, type } = item;
        if (this.actionCooldowns[id]) {
            return;
        }

        //console.log("ADD ACTION CD", id);

        switch (type) {
            case EItemType.BAG:
                {
                    this.actionCooldowns[id] = window.setTimeout(() => {
                        console.log("BAG OPENED");
                        delete this.actionCooldowns[id];
                        this.executeCooldownAction(item);
                        //
                        this.onItemActionCooldown?.(index, type);
                    }, BAG_OPEN_CD);
                }
                break;
            case EItemType.STONE_HEAVY:
                {
                    // TODO: clear timeout in case of what?
                    this.actionCooldowns[id] = window.setTimeout(() => {
                        console.log("DROP STONE_HEAVY");
                        delete this.actionCooldowns[id];
                        //this.dropItem({ ...item, x: 0, floor: 0, isDroppedByPlayer: true, dropAtUserId: this.dude.userId });
                        this.executeCooldownAction(item);
                        //
                        this.onItemActionCooldown?.(index, type);
                    }, STONE_HEAVY_DROP_CD);
                }
                break;
            case EItemType.CURSED_SKULL_BLOCK:
                {
                    this.actionCooldowns[id] = window.setTimeout(() => {
                        //console.log("CURSED BLOCK");
                        delete this.actionCooldowns[id];
                        this.executeCooldownAction(item);
                        //
                        this.onItemActionCooldown?.(index, type);
                    }, CURSED_SKULL_BLOCK_CD);
                }
                break;
            case EItemType.CURSED_SKULL_BOMB:
                {
                    this.actionCooldowns[id] = window.setTimeout(() => {
                        //console.log("CURSED BOM EXPLODE");
                        delete this.actionCooldowns[id];
                        this.executeCooldownAction(item);
                        //
                        this.onItemActionCooldown?.(index, type);
                    }, CURSED_SKULL_BOMB_CD);
                }
                break;
            default: {
                console.log("No cooldown action for type", type);
            }
        }
    }

    disableAllItemActionCooldowns() {
        Object.values(this.actionCooldowns).forEach((timerId) => {
            clearTimeout(timerId);
        });
    }

    getUsableItems() {
        return this.items.filter((item) => item.isUsable);
    }

    canPickUpItem() {
        //console.log("this.hasEmptySlot()", this.hasEmptySlot());
        //console.log("this.cooldowns.canPickUpItem()", this.cooldowns.canPickUpItem());
        return this.hasEmptySlot() && this.cooldowns.canPickUpItem();
    }

    canUseItem(item: IItem, queuePosition: number, maxDudeHp: number) {
        //console.log("canUseItem", queuePosition, item.type);
        const { id: itemId, isUsable, type } = item;

        if (!isUsable) {
            //console.log(">>>>>> NOT USABLE!");
            return false;
        }

        if (!this.cooldowns.canUseItem(itemId)) {
            //console.log(">>>>>> COODOWNS!");
            return false;
        }

        // cant use attack items when dude is first in queue
        if (queuePosition === 0 && ATTACK_ITEMS.includes(type)) {
            //console.log(">>>>>> FIRST POSITION!");
            return false;
        }

        // cant use heal items when dude full hp
        if (this.dude.hp === maxDudeHp && [EItemType.HP_BOTTLE].includes(type)) {
            //console.log(">>>>>> FULL HP!");
            return false;
        }

        return true;
    }

    executeCooldownAction(item: IInventoryItem) {
        switch (item.type) {
            case EItemType.CURSED_SKULL_BLOCK:
                {
                    // stop blocking items use
                    this.dude.removeStatus(EDudeStatus.WEAKNESS);
                }
                break;
        }
        EventBus.emit(EventType.ITEM_EXECUTE_COOLDOWN_ACTION, this.dude.userId, item.id);
    }

    /** execute a specific action when item appears in inventory  */
    executeItemPickedUpAction(itemType: EItemType) {
        switch (itemType) {
            case EItemType.CURSED_SKULL_BLOCK:
                {
                    // start blocking items use
                    this.dude.addStatus(EDudeStatus.WEAKNESS);
                }
                break;
        }
    }

    isMaxCursePower() {
        console.log("isMaxCursePower", this.cursePower);
        return this.cursePower >= MAX_CURSE_POWER;
    }
}
