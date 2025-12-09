import { Scale, Structs } from "phaser";
import { GameScene } from "../../scenes/GameScene";
import { TopPanel } from "./TopPanel";
import { RoomSelectPanel } from "./RoomSelectPanel";
import { CardSelectPanel } from "./CardSelectPanel";
import { UnitPanel } from "./UnitPanel";
import { CardInventoryPanel } from "./CardInventoryPanel";
import { BattlePanel } from "./BattlePanel";
import { UnitUpgradePanel } from "./UnitUpgradePanel";
import { SellCardPanel } from "./SellCardPanel";
import { LeaderPanel } from "./LeaderPanel";
import { LeadersPanel } from "./LeadersPanel";
import { CardUpgradetPanel } from "./CardUpgradetPanel";

export function createUIPanels(scene: GameScene) {
    const fixedContainer = scene.add.container().setScrollFactor(0, 0, true).setDepth(200);

    fixedContainer.setPosition(0, scene.camera.height);

    // SELECTION PHASE

    const roomPanelX = scene.camera.width / 2 - 400;
    const roomPanelY = -scene.camera.height + 100;
    scene.roomSelectPanel = new RoomSelectPanel(scene, roomPanelX, roomPanelY);
    fixedContainer.add(scene.roomSelectPanel);

    const cardsPanelX = scene.camera.width / 2 - 360;
    const cardsPanelY = -scene.camera.height + 200;
    scene.cardSelectPanel = new CardSelectPanel(scene, cardsPanelX, cardsPanelY);
    fixedContainer.add(scene.cardSelectPanel);

    const unitPanelX = scene.camera.width / 2 - 350;
    const unitPanelY = -scene.camera.height + 550;
    scene.unitPanel = new UnitPanel(scene, unitPanelX, unitPanelY);
    fixedContainer.add(scene.unitPanel);

    const invPanelX = scene.camera.width / 2 - 700;
    const invPanelY = -scene.camera.height + 400;
    scene.inventoryPanel = new CardInventoryPanel(scene, invPanelX, invPanelY);
    fixedContainer.add(scene.inventoryPanel);

    const sellPanelX = scene.camera.width / 2 + 450;
    const sellPanelY = -scene.camera.height + 100;
    scene.sellCardPanel = new SellCardPanel(scene, sellPanelX, sellPanelY);
    fixedContainer.add(scene.sellCardPanel);

    const upgPanelX = scene.camera.width / 2 - 400;
    const upgPanelY = -scene.camera.height + 100;
    scene.unitUpgradePanel = new UnitUpgradePanel(scene, upgPanelX, upgPanelY);
    fixedContainer.add(scene.unitUpgradePanel);

    const leaderPanelX = scene.camera.width / 2 - 800;
    const leaderPanelY = -scene.camera.height;
    scene.leaderPanel = new LeaderPanel(scene, leaderPanelX, leaderPanelY);
    fixedContainer.add(scene.leaderPanel);

    const leadersPanelX = scene.camera.width - 100;
    const leadersPanelY = -scene.camera.height + 300;
    scene.leadersPanel = new LeadersPanel(scene, leadersPanelX, leadersPanelY);
    fixedContainer.add(scene.leadersPanel);

    const topPanelY = -scene.camera.height;
    scene.topPanel = new TopPanel(scene, 0, topPanelY).setDepth(200);
    fixedContainer.add(scene.topPanel);

    scene.cardUpgradePanel = new CardUpgradetPanel(scene, cardsPanelX, cardsPanelY - 100);
    fixedContainer.add(scene.cardUpgradePanel);

    // DUEL PHASE

    const battlePanelX = scene.camera.width / 2 - 700;
    const battlePanelY = -scene.camera.height + 400;
    scene.battlePanel = new BattlePanel(scene, battlePanelX, battlePanelY);
    fixedContainer.add(scene.battlePanel);

    //on window resize - move fixed panels
    scene.scale.addListener(
        Scale.Events.RESIZE,
        (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
            fixedContainer.setPosition(0, scene.camera.height);

            scene.camera.scrollY += -gameSize.height + previousHeight;

            const topPanelY = -scene.camera.height;
            scene.topPanel.setY(topPanelY);

            const roomPanelY = -scene.camera.height + 200;
            scene.roomSelectPanel.setY(roomPanelY);
        }
    );

    return fixedContainer;
}
