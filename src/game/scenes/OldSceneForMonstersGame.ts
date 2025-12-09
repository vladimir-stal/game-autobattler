import { Cameras, Input, Scale, Structs } from "phaser";
import { EScene, ETileStatus, IMonster, ITile } from "../../types";
import { initInputListeners } from "./PlatformScene/keyboardInputs";
import { Tile } from "../components/field/Tile";
import { createUIPanels } from "../components/ui/uiPanels";
import { TilesContainer } from "../components/field/TilesContainer";
import { TopPanel } from "../components/ui/TopPanel";
import { BankController } from "../components/BankController";
import { BuyController } from "../components/BuyController";
import { baseIncomeMonster, defaultMonster } from "../components/field/monsters";
import { BuffController } from "../components/BuffController";
import { isBuff } from "../utils/monsterUtils";
import { PackController } from "../components/packController";

export class GameScene extends Phaser.Scene {
    isHost: boolean;
    // input
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    keyA: Input.Keyboard.Key;
    keyD: Input.Keyboard.Key;
    isInputEnabled: boolean;
    // camera
    camera: Cameras.Scene2D.Camera;
    cameraY: number;

    //audio: AudioManager;

    tilesContainer: TilesContainer;
    topPanel: TopPanel;

    bankController: BankController;
    buyController: BuyController;
    buffController: BuffController;
    packController: PackController;

    ownedTiles: { x: number; y: number; tile?: ITile }[];

    fieldWidth: number;
    fieldHeight: number;
    allTiles: ITile[];

    //

    constructor() {
        super(EScene.GAME);
    }

    async preload() {}

    // CREATE /////////////////////////////////////////////////////////////////////////////////
    create() {
        //console.log("GAME SCENE >> CREATE");
        this.camera = this.cameras.main;
        //this.audio = new AudioManager(this);

        // initial house and players creation
        // EventBus.on(
        //     EventType.GET_HOUSE_RESPONSE,
        //     (house: House, mainDude: IDude, dudes: IDude[], houseItems: IHouseItem[], inventory: IInventoryItem[], players: Player[]) => {
        //         // init UI
        //         createUIPanels(this);
        //         //
        //         this.floorCount = house.floors.length;
        //         //const floorY = getFloorY(mainDude.floor, this.floorCount);

        //         console.log(">>> GET_HOUSE_RESPONSE");
        //         console.log(">>> mainDude", mainDude);
        //         console.log(">>> dudes", dudes);
        //         console.log(">>> players", players);

        //         // get start room coordinates
        //         let baseRoomRoom = 0;
        //         let baseRoomFloor = 0;
        //         house.floors.forEach((floor, floorIndex) => {
        //             floor.rooms.forEach((room, roomIndex) => {
        //                 if (room.type === EHouseRoomType.BASE) {
        //                     baseRoomRoom = roomIndex;
        //                     baseRoomFloor = floorIndex;
        //                 }
        //             });
        //         });
        //         //const floorY = getFloorY(baseRoomFloor);
        //         //this.cameraY = floorY - GROUND_HEIGHT - this.camera.height / 2 + 200;
        //         this.setCameraY(baseRoomFloor);

        //         let isHost = false;
        //         // players.forEach((player) => {
        //         //     if (player.isHost && player.userId === this.mainDude.userId) {
        //         //         isHost = true;
        //         //     }
        //         // });
        //         this.isHost = isHost;

        //         if (isHost) {
        //             // init bots (for host player only)
        //             // const bots = this.dudesContainer.dudes.filter((dude) => dude.isBot);
        //             // if (bots.length > 0) {
        //             //     this.botController.init(bots);
        //             // }
        //         }

        //         // init house events
        //         this.houseEventController = new HouseEventController(this);
        //         this.houseEventController.init();

        //         // room objects
        //         this.houseColliders = this.houseContainer.getColliders();
        //         this.roomObjectsController = new RoomObjectsController(this.queue, this.houseContainer.getRoomObjects(0));

        //         // house items
        //         this.houseItemsContainer.init(houseItems, this.mainDude, this.levelController.getLevel());
        //         this.houseItemsColliders = this.houseItemsContainer.getCollideItems();
        //         // center camera on main player
        //         centerCameraOnMainDude(this, 0);
        //         //set camera bounds
        //         const maxRooms = house.floors.reduce((max, floor) => {
        //             return Math.max(max, floor.rooms.length);
        //         }, 0);
        //         //this.camera.setBounds(-50, 0, house.floors[0].rooms.length * ROOM_WIDTH + 100, (house.floors.length + 1) * FLOOR_HEIGHT);
        //         this.camera.setBounds(-50, -100, maxRooms * ROOM_WIDTH + 100, (house.floors.length + 1) * FLOOR_HEIGHT);

        //         // start walking after delay
        //         this.startWalkLevel();

        //         // test
        //         // const mainMenuMusic = this.sound.add(SOUND_MAIN_MENU_MUSIC, { loop: false, volume: 0.02 });
        //         // setTimeout(() => {
        //         //     mainMenuMusic.play();
        //         // }, 3000);
        //     }
        // );

        // ON SCALE
        this.scale.addListener(
            Scale.Events.RESIZE,
            (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
                //console.log("CAMERA HEIGHT", this.camera.height);
                // CAMERA
                //this.camera.pan(this.mainDude.gameObject.x, this.cameraY, 0, "Sine.easeIn");
                //this.setCameraY(this.levelController.getLevel());
            }
        );

        //EventBus.emit(EventType.GET_HOUSE);

        // KEYBOARD EVENT LISTENERS
        this.cursors = this.input!.keyboard!.createCursorKeys();
        initInputListeners(this);

        this.camera.setBounds(-250, -100, 2000, 2000);

        ////////////////////////////
        // FIELD
        ////////////////////////////

        this.fieldHeight = 10;
        this.fieldWidth = 10;

        this.ownedTiles = [];
        this.ownedTiles.push({ x: 5, y: 5 });
        this.ownedTiles.push({ x: 5, y: 6 });
        this.ownedTiles.push({ x: 6, y: 5 });
        this.ownedTiles.push({ x: 6, y: 6 });

        this.allTiles = [];
        for (let i = 0; i < this.fieldWidth; i++) {
            for (let j = 0; j < this.fieldWidth; j++) {
                const ownedTile = this.ownedTiles.find((tile) => tile.x === i && tile.y === j);
                if (ownedTile) {
                    const status = ownedTile ? ETileStatus.OWNED : ETileStatus.FREE;

                    let tile;
                    if (i === 6 && j === 5) {
                        tile = { x: i, y: j, status, monster: baseIncomeMonster };
                    } else {
                        tile = { x: i, y: j, status, monster: defaultMonster };
                    }
                    this.allTiles.push(tile);

                    if (status === ETileStatus.OWNED) {
                        ownedTile.tile = tile;
                    }
                }
            }
        }

        this.packController = new PackController(this);

        this.buffController = new BuffController(this);

        this.buyController = new BuyController(this);

        this.tilesContainer = new TilesContainer(this, 0, 0);
        this.add.existing(this.tilesContainer);

        this.bankController = new BankController(this, 400, 50);

        createUIPanels(this);

        this.bankController.init();

        setTimeout(() => {
            this.buyController.rerollAvailableTiles();
        }, 1000);
    }

    update() {
        //update(this);
    }

    addToBank(value: number) {
        this.bankController.addToBank(value);
        this.topPanel.setBank(this.bankController.bank);
    }

    changeAvailableTiles(availableTiles: Record<string, IMonster>) {
        this.allTiles.forEach((tile) => {
            if (tile.status === ETileStatus.OWNED) {
                return;
            }

            const monster = availableTiles[tile.x + "-" + tile.y];
            if (monster) {
                console.log("NEW TILE AVAILABLE", tile.x, tile.y, monster);
                tile.status = ETileStatus.AVAILABLE;
                this.tilesContainer.changeTile(tile.x, tile.y, ETileStatus.AVAILABLE, monster);
                return;
            }

            tile.status = ETileStatus.FREE;
            this.tilesContainer.changeTile(tile.x, tile.y, ETileStatus.FREE, defaultMonster);
        });
    }

    changeTileStatus(x: number, y: number, status: ETileStatus) {
        const tile = this.allTiles.find((tile) => tile.x === x && tile.y === y);
        if (tile) {
            tile.status = status;
            this.tilesContainer.changeTileStatus(x, y, status);
            if (status === ETileStatus.OWNED) {
                this.addOwnedtyle(x, y, tile);
            }

            // apply buff effects
            if (status === ETileStatus.OWNED) {
                if (isBuff(tile.monster)) {
                    this.buffController.applyBuffs(tile);
                }
            }
        }
    }

    addOwnedtyle(x: number, y: number, tile: ITile) {
        this.ownedTiles.push({ x, y, tile });
    }

    // setCameraY(floor: number) {
    //     const floorY = getFloorY(floor);
    //     this.cameraY = floorY - GROUND_HEIGHT - this.camera.height / 2 + 200;
    // }
}
