import { Scale, Structs } from "phaser";
import { InventoryPanel } from "../../components/ui/InventoryPanel";
import { ItemActionPanel } from "../../components/ui/ItemActionPanel";
import { ItemsPanel } from "../../components/ui/ItemsPanel";
import {
    FLOOR_HEIGHT,
    IMAGE_INVENTORY_BG_LEFT,
    IMAGE_INVENTORY_BG_LEFT_EMPTY,
    IMAGE_INVENTORY_BG_LEFT_SKULL_1,
    IMAGE_INVENTORY_BG_LEFT_SKULL_2,
    IMAGE_INVENTORY_BG_LEFT_SKULL_3,
    IMAGE_INVENTORY_BG_LEFT_SKULL_4,
    IMAGE_INVENTORY_BG_MID,
    IMAGE_INVENTORY_BG_RIGHT,
    IMAGE_UI_HP_HEART,
    ROOM_HEIGHT,
    ROOM_WIDTH,
    VIDEO_BEAR_CURSE,
} from "../../consts";
import { PlatformScene } from "../PlatformScene";
import { EItemType, ICurse, IInventoryItem } from "../../../types";
import { RiddlePanel } from "../../components/ui/RiddlePanel";
import { NotificationPanel } from "../../components/ui/NotificationPanel";
import { CursePanel } from "../../components/ui/CursePanel";
import { CurseTargetSelectPanel } from "../../components/ui/CurseTargetSelectPanel";
import { CurseVideoPanel } from "../../components/ui/CurseVideoPanel";
import { BonusSelectPanel } from "../../components/ui/BonusSelectPanel";
import { TopPanel } from "../../components/ui/TopPanel";

export function createUIPanels(scene: PlatformScene) {
    //const screenCenterX = scene.camera.worldView.x + scene.camera.width / 2;
    //const screenCenterY = scene.camera.worldView.y + scene.camera.height / 2;
    // create layer fixed to camera
    //const fixedLayer = scene.add.layer();
    //fixedLayer.add(scene.add.image(400, 100, 'buttonBG').setScrollFactor(0));

    const fixedContainer = scene.add.container().setScrollFactor(0, 0, true).setDepth(200);

    //scene.curseVideoPanel = new CurseVideoPanel(scene);
    //fixedContainer.add(scene.curseVideoPanel);
    //scene.curseVideoPanel.setDepth(10);

    //fixedContainer.setPosition(0, scene.camera.height - 150);
    fixedContainer.setPosition(0, scene.camera.height);

    scene.inventoryPanel = new InventoryPanel(scene, 0, -150);
    fixedContainer.add(scene.inventoryPanel);
    scene.inventoryPanel.setDepth(100);

    scene.cursePanel = new CursePanel(scene, 200, -125);
    fixedContainer.add(scene.cursePanel);

    scene.itemsPanel = new ItemsPanel(scene);
    fixedContainer.add(scene.itemsPanel);

    scene.inventoryPanel.setItemPanel(scene.itemsPanel);

    scene.itemActionPanel = new ItemActionPanel(scene);
    fixedContainer.add(scene.itemActionPanel);

    scene.riddlePanel = new RiddlePanel(scene);
    fixedContainer.add(scene.riddlePanel);

    scene.notificationPanel = new NotificationPanel(scene, 0, 0, scene.camera);
    fixedContainer.add(scene.notificationPanel);

    scene.bonusSelectPanel = new BonusSelectPanel(scene);
    fixedContainer.add(scene.bonusSelectPanel);

    scene.curseTargetSelectPanel = new CurseTargetSelectPanel(scene);
    fixedContainer.add(scene.curseTargetSelectPanel);

    const topPanelY = -scene.camera.height;
    scene.topPanel = new TopPanel(scene, 0, topPanelY).setDepth(200);
    fixedContainer.add(scene.topPanel);

    // black screen for changing levels animation
    scene.blackContainer = scene.add.rectangle(600, -FLOOR_HEIGHT, 4000, 2000, 0x000000, 1);
    scene.blackContainer.setDepth(500).setVisible(false);
    fixedContainer.add(scene.blackContainer);

    //on window resize - move fixed panels
    scene.scale.addListener(
        Scale.Events.RESIZE,
        (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
            // console.log('SCENE RESIZED');
            // console.log('game size', gameSize);
            // console.log('baseSize', baseSize);
            // console.log('displaySize', displaySize);
            // console.log('previous', previousWidth, previousHeight);
            //const screenCenterX = scene.cameras.main.width / 2;
            //const screenCenterY = scene.cameras.main.height / 2;
            //fixedContainer.setPosition(screenCenterX, 20);
            //scene.cardPanel.setPosition(screenCenterX - 120, 20);

            //fixedContainer.setPosition(0, scene.camera.height - 150);
            fixedContainer.setPosition(0, scene.camera.height);

            //inv_right.setPosition(scene.camera.width - 380, 0); //scene.camera.width - 250
            //const newCameraCenterY = scene.camera.centerY + (gameSize.height - previousHeight) - 200;
            //scene.camera.centerOnY(newCameraCenterY);
            scene.camera.scrollY += -gameSize.height + previousHeight;

            const topPanelY = -scene.camera.height;
            scene.topPanel.setY(topPanelY);
        }
    );

    return fixedContainer;
}

export function initUIPanels(scene: PlatformScene, inventory: IInventoryItem[], curses: ICurse[]) {
    // init inventory
    scene.inventoryPanel.init(inventory, scene.mainDude);
    // init curses
    scene.cursePanel.init(curses?.map((curse) => curse.type) || []);
}
