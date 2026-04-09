import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, ERoomType, ESelectRoomHint } from "../../../types";
import { colors, i18n } from "../../consts";
import { getCurrentHeroClasses, getSelectRoomDisplayName, IRoomOptions } from "../../utils/selectPhaseUtils";
import { roomsWithSingleHeroClass, tripleSetCardTypes } from "../SelectController";
import { getRandomArrayItem, getRandomArrayItems } from "../../utils/commonUtils";
import { GameObjects } from "phaser";
import { MIN_WIDTH } from "./uiPanels";
import { getMulticlassSubclasses } from "../../utils/heroUtils";

const borderMaxWidth = 800;
const borderMiddleWidth = 600;

/** UI panel to select next room */
export class RoomSelectPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    rooms: ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[];
    roomCount: number;

    borderRect: GameObjects.Rectangle;
    selectButton1: GameObjects.Text;
    selectButton2: GameObjects.Text;
    selectButton3: GameObjects.Text;

    roomObjects: ({ titleText: GameObjects.Text; descriptionText: GameObjects.Text; selectButton: GameObjects.Text } | null)[];

    panelWidth: number;

    hintText: GameObjects.Text;
    hintTextType: ESelectRoomHint;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;
        this.roomCount = 3;
    }

    show(rooms: ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[]) {
        this.rooms = rooms;
        this.panelWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        this.setVisible(true);
        this.removeAll(true);
        this.renderBorder();
        this.renderRooms(rooms);
    }

    hide() {
        this.setVisible(false);
    }

    renderBorder() {
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        this.borderRect = this.scene.add.rectangle(0, 0, rectWidth, 100, colors.BLACK).setOrigin(0, 0);
        this.borderRect.setStrokeStyle(2, 0x999999);
        this.add(this.borderRect);
    }

    renderRooms(rooms: ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[]) {
        this.roomObjects = [];
        rooms.forEach((room, index) => {
            if (room === null) {
                this.roomObjects[index] = null;
                return;
            }
            this.renderRoom(index, room.roomType, room.roomOptions);
        });
    }

    renderRoom(index: number, type: ERoomType, roomOptions?: IRoomOptions) {
        const { heroClasses, boss, autolevel } = roomOptions || {heroClasses: [], boss: undefined, autolevel: undefined};
        const roomX = this.getRoomX(index);

        // TRIPLE SET ROOM
        //
        let tripleSetTypes: ECardType[] | undefined = undefined;
        if (type === ERoomType.TRIPLE_SET) {
            tripleSetTypes = [];
            const chc = getCurrentHeroClasses(this.gameScene);
            const lbh = this.gameScene.unitPanel.lastBoughtHero;
            // bugfix: after buying new hero, this room was generated before hero was put into unitPanel
            //         so, newly bouht hero class is saved into unitPanel.lastBoughtHero and used here
            const lbhclasses = getMulticlassSubclasses(lbh) || [lbh];
            lbhclasses.forEach(c => chc.push(c));
            //console.log("-= DEBUG =-",chc);
            heroClasses.push(getRandomArrayItem(chc));
            heroClasses.push(getRandomArrayItem(chc));
            getRandomArrayItems(tripleSetCardTypes, 3, true).forEach((cardType) => tripleSetTypes?.push(cardType));
        }
        //
        //
        const title = getSelectRoomDisplayName(type) || "";
        const color = [ERoomType.HEROES_SELL, ERoomType.UPGRADE_SKILL_OR_ITEM, ERoomType.ENCHANCE_SKILL_CHAINED].includes(type) ? "#f0dd8cff" : "#ffffff";
        const roomText = this.scene.add
            .text(roomX, 20, title, {
                //50 + index * 250
                fontFamily: "Arial Black",
                fontSize: 18,
                color,
            })
            .setOrigin(0.5);
        this.add(roomText);

        const heroClassesText = (heroClasses && heroClasses.length > 0)
            ? "\n(" + (roomsWithSingleHeroClass.includes(type) ? i18n.tags[heroClasses[0]] : heroClasses?.map((hc) => i18n.tags[hc]).join(", ")) + ")"
            : "";
        const bossDescription = type === ERoomType.BOSS ? "\n" + boss?.name : "";
        // @ts-expect-error
        const tripleSetTypesDescr = tripleSetTypes ? "\n" + tripleSetTypes.map((tst) => i18n.ui[tst]).join(",") : "";
        const typeText = i18n.roomDescriptions[type] || type;
        const description = typeText + heroClassesText + " " + tripleSetTypesDescr + bossDescription;

        const levelAdjustment = autolevel ? autolevel : 0;

        const roomDescriptionText = this.scene.add
            .text(roomX, 40, description, {
                //index * 250
                //fontFamily: "Arial Black",
                fontSize: 12,
                color: "#dddddd",
            })
            .setOrigin(0.5);
        this.add(roomDescriptionText);

        const buttonText = type === ERoomType.DUEL ? i18n.ui.START : i18n.ui.SELECT;
        const selectRoomText = this.scene.add
            .text(roomX, 80, buttonText, {
                //index * 250
                fontFamily: "Arial Black",
                fontSize: 18,
                color: "#aaffaa",
            })
            .setOrigin(0.5);

        selectRoomText
            .setInteractive()
            .on("pointerdown", () => {
                this.gameScene.selectController.selectRoom(type, this.gameScene.selectController.day + levelAdjustment, {
                    heroClasses,
                    tripleSetTypes,
                    units: boss?.units,
                });
            })
            .on("pointerover", () => {
                selectRoomText.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                selectRoomText.setColor("#AAFFAA");
            });

        let selectButton;
        switch (index) {
            case 0:
                {
                    this.selectButton1 = selectRoomText;
                    this.add(this.selectButton1);
                    selectButton = this.selectButton1;
                }
                break;
            case 1:
                {
                    this.selectButton2 = selectRoomText;
                    this.add(this.selectButton2);
                    selectButton = this.selectButton2;
                }
                break;
            case 2:
                {
                    this.selectButton3 = selectRoomText;
                    this.add(this.selectButton3);
                    selectButton = this.selectButton3;
                }
                break;
            default: {
                this.selectButton2 = selectRoomText;
                this.add(this.selectButton2);
                selectButton = this.selectButton2;
            }
        }

        this.roomObjects[index] = { titleText: roomText, descriptionText: roomDescriptionText, selectButton };
    }

    renderHintPanel() {
        if (this.hintTextType) {
            const text = i18n.ui[this.hintTextType];
            const y = 220;
            this.hintText = this.scene.add.text(350, y, text, { fontFamily: "Arial Black", fontSize: 18, color: "#eeeeee" }).setOrigin(0.5, 0);
            this.add(this.hintText);
        }
    }

    private getRoomX(index: number): number {
        const panelCenterX = this.panelWidth / 2;
        let roomX = 0;
        switch (index) {
            case 0:
                roomX = panelCenterX - borderMaxWidth / 4; //panelCenterX / 2;
                break;
            case 1:
                roomX = panelCenterX;
                break;
            case 2:
                roomX = panelCenterX + borderMaxWidth / 4; //(panelCenterX * 3) / 2;
                break;
        }
        return roomX;
    }

    refreshAfterResize() {
        const rectWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        const rectHeight = 100;
        this.borderRect.setSize(rectWidth, rectHeight);

        this.panelWidth = this.gameScene.camera.width >= MIN_WIDTH ? borderMaxWidth : borderMiddleWidth;
        this.roomObjects.forEach((roomObject, index) => {
            if (!roomObject) {
                return;
            }
            roomObject.titleText.setX(this.getRoomX(index));
            roomObject.descriptionText.setX(this.getRoomX(index));
            roomObject.selectButton.setX(this.getRoomX(index));
        });
    }
}
