import { ActionType, ECurseType, EDudeStatus, EItemType, IInventoryItem } from "../../../../types";
import Dude from "../../../components/house/Dude";
import RoomObject from "../../../components/house/roomObjects/RoomObject";
import { TAKE_ITEM_ANIMATION_TIME } from "../../../consts";
import { EventBus, EventType } from "../../../EventBus";
import { getItemUseAnimationTime } from "../../../utils/animationUtils";
import { createEmptyInventoryItem } from "../../../utils/commonUtils";
import { PlatformScene } from "../../PlatformScene";
import { Inventory } from "../Inventory";

const BOTS_ENABLED = true;
const BOT_UPDATE_DELAY = 50; // 50 update frames

export class BotController {
    private scene: PlatformScene;
    private isEnabled: boolean = false;
    private isUpdateEnabled: boolean = false;
    private bots: Dude[];
    private inventories: Record<string, Inventory>;

    droppedItemIds: Record<string, string[]>; // dropped items list to not allow picking up items dropped by same bot

    frame: number = 0;

    constructor(scene: PlatformScene) {
        this.scene = scene;
        this.droppedItemIds = {};
        this.inventories = {};

        if (BOTS_ENABLED) {
            EventBus.on(EventType.BOT_INVENTORY_CHANGED, (inventories: Record<string, IInventoryItem[]>) => {
                //console.log(">>> BOT_INVENTORY_CHANGED", inventories);
                Object.keys(inventories).forEach((userId) => {
                    this.inventories[userId].changeItems(this.scene, inventories[userId]);
                    const bot = this.bots.find((bot) => bot.userId === userId);
                    if (bot) {
                        bot.updateInventoryPanel(inventories[userId]);
                    }
                });
            });

            EventBus.on(EventType.DUDE_REMOVE_CURSE_RESPONSE, (userId: string, curseType: ECurseType) => {
                if (!this.bots) {
                    return;
                }
                const bot = this.bots.find((bot) => bot.userId === userId);
                if (!bot) {
                    return;
                }
                // TODO: remove curse from bot
                console.log(`REMOVE CURSE ${curseType} FROM BOT PLAYER ${userId}`);
            });
        }
    }

    init(bots: Dude[]) {
        this.isEnabled = BOTS_ENABLED;
        if (this.isEnabled) {
            this.bots = bots;
            bots.forEach((bot) => {
                const inventory = new Inventory();
                //TODO: use items from initial inventory
                inventory.init([createEmptyInventoryItem(), createEmptyInventoryItem(), createEmptyInventoryItem(), createEmptyInventoryItem()], bot);
                this.inventories[bot.userId] = inventory;
                this.droppedItemIds[bot.userId] = [];
            });
        }
    }

    update() {
        //limit the frequency of bot update
        this.frame++;
        if (this.frame > BOT_UPDATE_DELAY) {
            this.frame = 0;
        }
        if (this.frame !== 0) {
            return;
        }

        this.bots.forEach((bot) => {
            if (!bot.isAlive) {
                return;
            }

            const inventory = this.getInventory(bot.userId);

            // check bot and items on the floor collision
            this.scene.houseItemsColliders.forEach((collider) => {
                collider.checkBotDudeCollide(bot, inventory);
            });

            // check bot and room objects collision
            this.scene.houseColliders.forEach((collider) => {
                collider.checkBotDudeCollide(bot);
            });

            // BOT ACTIVE ACTIONS
            if (bot.isAnimation) {
                //console.log("BOT IS ANIMATION => return");
                return;
            }
            //
            // PICK UP ITEMS
            if (bot.hasItemAction && bot.itemActionType === ActionType.ITEM_TAKE && bot.itemActionTarget) {
                const { id: itemId, type: itemType, activationTime } = bot.itemActionTarget.item;
                //console.log("BOT tries to pick up item", bot.userId, itemId, bot.itemActionTarget);
                //console.log("isDroppedItem", this.isDroppedItem(itemId));
                if (!this.isDroppedItem(itemId, bot.userId) && inventory.canPickUpItem()) {
                    //console.log("BOT success pick up item", bot.userId, itemId);
                    bot.startTakeItemAnimation(itemType);
                    inventory.cooldowns.pickUpItem();

                    setTimeout(() => {
                        //bot.setIsAnimation(false);
                        // for bots onItemPickedUp is called before server response // TODO: check if it's a good idea
                        inventory.cooldowns.onItemPickedUp(itemId, activationTime);
                        EventBus.emit(EventType.BOT_ITEM_TAKE, itemId, bot.userId);
                        this.addDroppedItem(itemId, bot.userId);
                        bot.executeItemAction();
                    }, TAKE_ITEM_ANIMATION_TIME);
                    return;
                }
            }
            //
            // USE ITEMS
            if (!bot.hasStatus(EDudeStatus.WEAKNESS)) {
                const queuePosition = this.scene.queue.getPosition(bot.userId);
                let isItemUsed = false;
                inventory.getUsableItems().forEach((usableItem) => {
                    if (isItemUsed) {
                        return;
                    }
                    if (inventory.canUseItem(usableItem, queuePosition, bot.maxHp)) {
                        isItemUsed = true;

                        bot.startUseItemAnimation(usableItem.type);
                        inventory.cooldowns.useItem(usableItem);

                        setTimeout(() => {
                            inventory.useItem(usableItem, bot, this.scene);
                        }, getItemUseAnimationTime(usableItem.type));
                    }
                });
                if (isItemUsed) {
                    return;
                }
            }
            //
            // USE ROOM OBJECTS
            // USE W
            {
                const { actionType, actionTarget, hasAction } = bot.actions.W;
                if (hasAction && actionTarget && actionType) {
                    bot.performRoomObjectAtion(actionTarget as RoomObject, actionType);
                    return;
                }
            }
            // USE E
            {
                const { actionType, actionTarget, hasAction } = bot.actions.E;
                if (hasAction && actionTarget && actionType) {
                    bot.performRoomObjectAtion(actionTarget as RoomObject, actionType);
                    return;
                }
            }
        });
    }

    getBots() {
        return this.bots;
    }

    getIsEnabled() {
        return this.isEnabled;
    }

    getIsUpdateEnabled() {
        return this.isUpdateEnabled;
    }

    /** Add item id to dropped items list to not allow pick it up again */
    addDroppedItem(itemId: string, botId: string) {
        this.droppedItemIds[botId].push(itemId);
    }

    isDroppedItem(itemId: string, botId: string) {
        return this.droppedItemIds[botId].some((id) => id === itemId);
    }

    getInventory(userId: string) {
        return this.inventories[userId];
    }

    disableBots() {
        // stop calling update for bots
        this.isUpdateEnabled = false;
        // disable item actions for bots
        this.bots.forEach((bot) => {
            const inventory = this.getInventory(bot.userId);
            inventory.disableAllItemActionCooldowns();
        });
    }

    enableBots() {
        // start calling update for bots
        this.isUpdateEnabled = true;
        //TODO: enable item actions for bots - restart timers
        // this.bots.forEach((bot) => {
        //     const inventory = this.getInventory(bot.userId);
        //     inventory.disableAllItemActionCooldowns();
        // });
    }

    /** Select random bonus from BonusSelectPanel on rest level */
    selectBonus(botUserId: string) {
        setTimeout(() => {
            EventBus.emit(EventType.BOT_SELECT_BONUS, botUserId);
        }, 4000);
    }
}
