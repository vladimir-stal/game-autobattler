import { IItem } from "../../../types";

const PICK_ITEM_CD = 1000;
const USE_ITEM_CD = 1000;

/** Handling actions with cooldowns */
export class Cooldowns {
    private isPickItemAvailable: boolean;
    private isUseItemAvailable: boolean;
    private itemsReadyState: Record<string, boolean>; // after picking up item get a cd before it can be used

    constructor() {
        this.isPickItemAvailable = true;
        this.isUseItemAvailable = true;
        this.itemsReadyState = {};
    }

    /** Set initial player items ready to use from the start of the game */
    setInitItems(items: IItem[]) {
        items.forEach((item) => {
            this.itemsReadyState[item.id] = true;
        });
    }

    /** Dont allow to pick up items until server response comes (call func before request to server) */
    pickUpItem() {
        this.isPickItemAvailable = false;
    }

    /** set pick item action on cooldown (call func after server response to pick up request) */
    onItemPickedUp(itemId: string, activationTime: number, onReady?: (itemId: string) => void) {
        this.setItemReadyTimer(itemId, activationTime, onReady);
        setTimeout(() => {
            this.isPickItemAvailable = true;
        }, PICK_ITEM_CD);
    }

    canPickUpItem() {
        return this.isPickItemAvailable;
    }

    setIsPickItemAvailable(value: boolean) {
        this.isPickItemAvailable = value;
    }

    /** set use item action on cooldown */
    useItem(item: IItem) {
        this.isUseItemAvailable = false;
        this.removeFromReadyState(item.id);
        setTimeout(() => {
            this.isUseItemAvailable = true;
        }, USE_ITEM_CD);
    }

    dropItem(item: IItem) {
        this.removeFromReadyState(item.id);
    }

    canUseItem(itemId: string) {
        return this.isUseItemAvailable && this.itemsReadyState[itemId];
    }

    setItemReadyTimer(itemId: string, itemTime: number, onReady?: (itemId: string) => void) {
        if (this.itemsReadyState[itemId]) {
            return;
        }

        this.itemsReadyState[itemId] = false;
        setTimeout(() => {
            this.itemsReadyState[itemId] = true;
            onReady?.(itemId);
        }, itemTime);
    }

    removeFromReadyState(itemId: string) {
        delete this.itemsReadyState[itemId];
    }
}
