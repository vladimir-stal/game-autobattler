import { GameScene } from "../../scenes/GameScene";
import { ECardType, EHeroClass, ERoomType } from "../../../types";
import { colors } from "../../consts";
import { getSelectRoomDisplayName, IRoomOptions } from "../../utils/selectPhaseUtils";
import { roomsWithSingleHeroClass, tripleSetCardTypes } from "../SelectController";
import { getRandomArrayItems } from "../../utils/commonUtils";

/** UI panel to select next room */
export class RoomSelectPanel extends Phaser.GameObjects.Container {
    gameScene: GameScene;

    roomCount: number;

    constructor(scene: GameScene, x: number, y: number) {
        super(scene, x, y);
        this.gameScene = scene;

        this.roomCount = 3;

        //this.show();
    }

    show(rooms: ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[]) {
        this.setVisible(true);
        this.removeAll(true);
        this.renderBorder();
        this.renderRooms(rooms);
    }

    hide() {
        this.setVisible(false);
    }

    renderBorder() {
        const rect = this.scene.add.rectangle(0, 0, 800, 100, colors.BLACK).setOrigin(0, 0);
        rect.setStrokeStyle(2, 0x999999);
        this.add(rect);
    }

    renderRooms(rooms: ({ roomType: ERoomType; roomOptions?: IRoomOptions } | null)[]) {
        rooms.forEach((room, index) => {
            if (room === null) {
                return;
            }
            this.renderRoom(index, room.roomType, room.roomOptions);
        });
    }

    renderRoom(index: number, type: ERoomType, roomOptions?: IRoomOptions) {
        //heroClasses?: EHeroClass[]
        console.log("renderRoom TYPE: ", type, getSelectRoomDisplayName(type));

        const { heroClasses, boss } = roomOptions || {};

        // TRIPLE SET ROOM
        //
        let tripleSetTypes: ECardType[] | undefined = undefined;
        if (type === ERoomType.TRIPLE_SET) {
            tripleSetTypes = [];
            getRandomArrayItems(tripleSetCardTypes, 3, true).forEach((cardType) => tripleSetTypes?.push(cardType));
        }
        //
        //
        const title = getSelectRoomDisplayName(type);
        const color = [ERoomType.HEROES_SELL, ERoomType.UPGRADE_SKILL_OR_ITEM].includes(type) ? "#f0dd8cff" : "#ffffff";
        const roomText = this.scene.add.text(50 + index * 250, 20, title, {
            fontFamily: "Arial Black",
            fontSize: 18,
            color,
        });
        this.add(roomText);

        const heroClassesText = heroClasses ? "\n(" + (roomsWithSingleHeroClass.includes(type) ? heroClasses[0] : heroClasses?.join(", ")) + ")" : "";
        const bossDescription = type === ERoomType.BOSS ? "\n" + boss?.name : "";
        const tripleSetTypesDescr = tripleSetTypes ? "\n" + tripleSetTypes.join(",") : "";
        const description = type + heroClassesText + " " + tripleSetTypesDescr + bossDescription;

        const roomDescriptionText = this.scene.add.text(50 + index * 250, 40, description, {
            //fontFamily: "Arial Black",
            fontSize: 12,
            color: "#dddddd",
        });
        this.add(roomDescriptionText);

        const selectRoomText = this.scene.add.text(100 + index * 250, 80, "SELECT", {
            fontFamily: "Arial Black",
            fontSize: 18,
            color: "#aaffaa",
        });

        selectRoomText
            .setInteractive()
            //.setInteractive(new Phaser.Geom.Rectangle(0, 0, 90, 40), Phaser.Geom.Rectangle.Contains)
            .on("pointerdown", () => {
                this.gameScene.selectController.selectRoom(type, this.gameScene.selectController.day, { heroClasses, tripleSetTypes, units: boss?.units });
            })
            .on("pointerover", () => {
                selectRoomText.setColor("#FFFFFF");
            })
            .on("pointerout", () => {
                selectRoomText.setColor("#AAFFAA");
            });

        this.add(selectRoomText);
    }
}
