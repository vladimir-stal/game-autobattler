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
import { CardHintPanel } from "./CardHintPanel";
import { SkillCardEnchantPanel } from "./SkillCardEnchantPanel";

export const MAX_WIDTH = 1550; // max camera width for resizing
export const MIDDLE_WIDTH = 1400; // middle camera width for resizing
export const MIN_WIDTH = 1200; // min range camera width for resizing
export const MAX_HEIGHT = 920;

let resizeTimeoutId: number;

export function createUIPanels(scene: GameScene) {
    const fixedContainer = scene.add.container().setScrollFactor(0, 0, false).setDepth(200);

    fixedContainer.setPosition(0, scene.camera.height);

    const { width, height } = scene.camera;

    // SELECTION PHASE ///////////////////////////////////////////////////////////

    //
    // LEADER PANEL
    //
    //const leaderPanelX = -10; // scene.camera.width / 2 - 800
    //const leaderPanelY = 50 - scene.camera.height;
    const { x: leaderPanelX, y: leaderPanelY } = getLeaderPanelPosition(width, height);
    scene.leaderPanel = new LeaderPanel(scene, leaderPanelX, leaderPanelY);
    fixedContainer.add(scene.leaderPanel);
    //
    // ROOM SELECT PANEL
    //
    //const roomPanelX = scene.camera.width / 2 - 400;
    //const roomPanelY = -scene.camera.height + 100;
    const { x: roomPanelX, y: roomPanelY } = getRoomSelectPanelPosition(width, height);
    scene.roomSelectPanel = new RoomSelectPanel(scene, roomPanelX, roomPanelY);
    fixedContainer.add(scene.roomSelectPanel);
    //
    // CARD SELECT PANEL
    //
    //const cardsPanelX = scene.camera.width / 2 - 360;
    //const cardsPanelY = -scene.camera.height + 160;
    const { x: cardsPanelX, y: cardsPanelY } = getCardSelectPanelPosition(width, height);
    scene.cardSelectPanel = new CardSelectPanel(scene, cardsPanelX, cardsPanelY);
    fixedContainer.add(scene.cardSelectPanel);
    //
    // UNIT PANEL
    //
    //const unitPanelX = scene.camera.width / 2 - 350;
    //const unitPanelY = -350; //-scene.camera.height + 550;
    const { x: unitPanelX, y: unitPanelY } = getUnitPanelPosition(width, height);
    scene.unitPanel = new UnitPanel(scene, unitPanelX, unitPanelY);
    fixedContainer.add(scene.unitPanel);
    //
    // INVENTORY PANEL
    //
    //const invPanelX = -5; //scene.camera.width / 2 - 700;
    //const invPanelY = -430; //leaderPanelY + scene.leaderPanel.imgHeight; //-scene.camera.height + 400;
    const { x: invPanelX, y: invPanelY } = getInventoryPanelPosition(width, height);
    scene.inventoryPanel = new CardInventoryPanel(scene, invPanelX, invPanelY);
    fixedContainer.add(scene.inventoryPanel);
    //
    // SELL CARD PANEL
    //
    //const sellPanelX = scene.camera.width / 2 + 450;
    //const sellPanelY = -scene.camera.height + 50;
    const { x: sellPanelX, y: sellPanelY } = getSellPanelPosition(width, height);
    scene.sellCardPanel = new SellCardPanel(scene, sellPanelX, sellPanelY);
    fixedContainer.add(scene.sellCardPanel);
    //
    // UNIT UPGRADE PANEL
    //
    //const upgPanelX = scene.camera.width / 2 - 400;
    //const upgPanelY = -scene.camera.height + 100;
    const { x: upgPanelX, y: upgPanelY } = getUnitUpgradePanelPosition(width, height);
    scene.unitUpgradePanel = new UnitUpgradePanel(scene, upgPanelX, upgPanelY);
    fixedContainer.add(scene.unitUpgradePanel);
    //
    // LEADERS LIST PANEL
    //
    //const leadersPanelX = width > MAX_WIDTH ? width / 2 + 500 : width - 100;
    //const leadersPanelY = -scene.camera.height + 300;
    const { x: leadersPanelX, y: leadersPanelY } = getLeadersPanelPosition(width, height);
    scene.leadersPanel = new LeadersPanel(scene, leadersPanelX, leadersPanelY);
    fixedContainer.add(scene.leadersPanel);
    //
    // TOP PANEL
    //
    //const topPanelY = -scene.camera.height;
    const { x: topPanelX, y: topPanelY } = getTopPanelPosition(width, height);
    scene.topPanel = new TopPanel(scene, topPanelX, topPanelY).setDepth(200);
    fixedContainer.add(scene.topPanel);

    scene.cardUpgradePanel = new CardUpgradetPanel(scene, cardsPanelX, cardsPanelY - 100);
    fixedContainer.add(scene.cardUpgradePanel);

    scene.skillCardEnchantPanel = new SkillCardEnchantPanel(scene, cardsPanelX, cardsPanelY - 100);
    fixedContainer.add(scene.skillCardEnchantPanel);

    scene.hintPanel = new CardHintPanel(scene, 0, 0).setDepth(500).setVisible(false);
    scene.add.existing(scene.hintPanel);

    // DUEL PHASE ///////////////////////////////////////////////////////////

    //const battlePanelX = scene.camera.width / 2;
    //const battlePanelY = -scene.camera.height + 400;
    const { x: battlePanelX, y: battlePanelY } = getBattlePanelPosition(width, height);
    scene.battlePanel = new BattlePanel(scene, battlePanelX, battlePanelY);
    fixedContainer.add(scene.battlePanel);

    ////////////////////////////////////////////

    //on window resize - move fixed panels
    scene.scale.addListener(
        Scale.Events.RESIZE,
        (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
            // debounce scale
            resizeTimeoutId && clearTimeout(resizeTimeoutId);
            resizeTimeoutId = setTimeout(() => {
                const { width, height } = scene.camera;

                fixedContainer.setPosition(0, height);
                //scene.camera.scrollY += -gameSize.height + previousHeight;

                scene.leadersPanel.setX(getLeadersPanelPosition(width, height).x);

                scene.roomSelectPanel.setPosition(...Object.values(getRoomSelectPanelPosition(width, height)));
                scene.roomSelectPanel.refreshAfterResize();

                scene.cardSelectPanel.setPosition(...Object.values(getCardSelectPanelPosition(width, height)));
                scene.cardSelectPanel.refreshAfterResize();

                scene.unitPanel.setPosition(...Object.values(getUnitPanelPosition(width, height)));
                scene.unitPanel.refreshAfterResize();

                scene.sellCardPanel.setPosition(...Object.values(getSellPanelPosition(width, height)));
                scene.sellCardPanel.refreshAfterResize();

                scene.unitUpgradePanel.setPosition(...Object.values(getUnitUpgradePanelPosition(width, height)));

                scene.leaderPanel.setPosition(...Object.values(getLeaderPanelPosition(width, height)));
                scene.leaderPanel.refreshAfterResize();

                scene.topPanel.setPosition(...Object.values(getTopPanelPosition(width, height)));
                scene.topPanel.refreshAfterResize();

                scene.inventoryPanel.setPosition(...Object.values(getInventoryPanelPosition(width, height)));

                scene.battlePanel.setPosition(...Object.values(getBattlePanelPosition(width, height)));
                scene.battlePanel.refreshAfterResize();
            }, 100);
        },
    );

    return fixedContainer;
}

function getLeadersPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width > MAX_WIDTH ? width / 2 + 800 : width - 100;
    const y = -height + 300;
    return { x, y };
}

function getLeaderPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width > MAX_WIDTH ? width / 2 - 800 : -10;
    const y = -height + 50;
    return { x, y };
}

function getRoomSelectPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width >= MIN_WIDTH ? width / 2 - 400 : width / 2 - 300;
    const y = -height + 100;
    return { x, y };
}

function getCardSelectPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width > MIN_WIDTH ? width / 2 - 360 : width / 2 - 300;
    const y = -height + 160;
    return { x, y };
}

function getUnitPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width > MIN_WIDTH ? width / 2 - 360 : width / 2;
    const y = height > MAX_HEIGHT ? -height + 550 : -350;
    return { x, y };
}

function getSellPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width > MIN_WIDTH ? width / 2 + 450 : width / 2 + 340;
    const y = -height + 50;
    return { x, y };
}

function getUnitUpgradePanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width / 2 - 400;
    const y = -height + 100;
    return { x, y };
}

function getTopPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = 0;
    const y = -height;
    return { x, y };
}

function getInventoryPanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width >= MAX_WIDTH ? width / 2 - 700 : -5;
    const y = height >= MAX_HEIGHT ? -height + 450 : -430;
    return { x, y };
}

function getBattlePanelPosition(width: number, height: number): { x: number; y: number } {
    const x = width / 2;
    const y = -height + 400;
    return { x, y };
}
