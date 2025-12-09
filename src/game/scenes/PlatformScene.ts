import { Cameras, Input, Scale, Structs } from "phaser";
import Dude from "../components/house/Dude";
import HouseContainer from "../components/house/HouseContainer";
import { EventBus, EventType } from "../EventBus";
import { DudesContainer } from "../components/house/DudesContainer";
import { DUDES_MOVE_SPEED, FLOOR_HEIGHT, getFloorY, GROUND_HEIGHT, MAX_DUDE_HP, ROOM_WIDTH, SOUND_MAIN_MENU_MUSIC } from "../consts";
import { createAnimations } from "../components/house/animation";
import {
    EHouseRoomType,
    House,
    IHouseItem,
    IDude,
    IInventoryItem,
    IHouseGlobals,
    IMob,
    Player,
    ActionType,
    ERoomStatus,
    EScene,
    EBonusType,
} from "../../types";
import { NotificationPanel } from "../components/ui/NotificationPanel";
import { InventoryPanel } from "../components/ui/InventoryPanel";
import { loadImages } from "../utils/imageLoadUtils";
import HouseItemsContainer, { HouseItem } from "../components/house/HouseItemsContainer";
import { ItemsPanel } from "../components/ui/ItemsPanel";
import { loadSounds } from "../utils/soundLoadUtils";
import { AudioManager } from "../components/audio/AudioManager";
import { ItemActionPanel } from "../components/ui/ItemActionPanel";
import { Globals } from "../components/house/Globals";
import { initInputListeners } from "./PlatformScene/keyboardInputs";
import { createUIPanels, initUIPanels } from "./PlatformScene/uiPanels";
import { RiddlePanel } from "../components/ui/RiddlePanel";
import { Queue } from "../components/house/Queue";
import { update } from "./PlatformScene/update";
import { BotController } from "./PlatformScene/BotController/BotController";
import { centerCameraOnMainDude } from "./PlatformScene/camera";
import RoomObject from "../components/house/roomObjects/RoomObject";
import { HouseEventController } from "./PlatformScene/HouseEventController";
import { LevelController } from "./PlatformScene/LevelController";
import { CursePanel } from "../components/ui/CursePanel";
import { RoomObjectsController } from "../components/house/RoomObjectsController";
import { EFirstPlanObject, FirstPlanContainer } from "./PlatformScene/FirstPlanContainer";
import { CurseTargetSelectPanel } from "../components/ui/CurseTargetSelectPanel";
import { FirstPlanController } from "./PlatformScene/FirstPlanController";
import { DudeAnimationController } from "../components/house/DudeAnimationController";
import { BonusSelectPanel } from "../components/ui/BonusSelectPanel";
import { TopPanel } from "../components/ui/TopPanel";

const syncWait = (ms: number) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
};

export class PlatformScene extends Phaser.Scene {
    isHost: boolean;
    // input
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    keyA: Input.Keyboard.Key;
    keyD: Input.Keyboard.Key;
    isInputEnabled: boolean;
    // camera
    camera: Cameras.Scene2D.Camera;
    cameraY: number;
    // dudes
    mainDude: Dude;
    dudesContainer: DudesContainer;
    //mobsContainer: MobsContainer;
    dudeWalkSpeed: number = 0;
    // house
    maxDudeHp: number;
    houseColliders: RoomObject[]; // house objects player can interact when collides
    houseItemsColliders: HouseItem[]; // items on the floor player can interact when collides
    houseContainer: HouseContainer;
    houseItemsContainer: HouseItemsContainer;
    floorCount: number;
    // global house variables
    globals: Globals;
    // ui
    notificationPanel: NotificationPanel;
    inventoryPanel: InventoryPanel;
    cursePanel: CursePanel;
    itemsPanel: ItemsPanel;
    itemActionPanel: ItemActionPanel;
    riddlePanel: RiddlePanel;
    bonusSelectPanel: BonusSelectPanel;
    curseTargetSelectPanel: CurseTargetSelectPanel;
    topPanel: TopPanel;
    //curseVideoPanel: CurseVideoPanel;
    // audio
    audio: AudioManager;

    isWalking: boolean;
    queue: Queue;

    botController: BotController;

    houseEventController: HouseEventController;
    levelController: LevelController;

    blackContainer: Phaser.GameObjects.Rectangle;

    roomObjectsController: RoomObjectsController;

    firstPlan: FirstPlanContainer;
    firstPlanController: FirstPlanController;

    dudeAnimationController: DudeAnimationController;

    constructor() {
        super(EScene.PLATFORM);
    }

    async preload() {
        //syncWait(Math.floor(Math.random() * 10000));
        //console.log("PLARFORM >> PRELOAD");
        //loadImages(this);
        //loadSounds(this);
        //loadVideos(this);
        //syncWait(5000);
        //this.scene.stop(EScene.GAME_LOADING);
        //console.log("preload FINISHED");
        // this.load.on("start", () => {
        //     console.log("RESOURCES START LOADING");
        // });
        // this.load.on("complete", () => {
        //     console.log("RESOURCES LOADED");
        // });
    }

    // CREATE /////////////////////////////////////////////////////////////////////////////////
    create() {
        //console.log("PLARFORM >> CREATE");
        this.camera = this.cameras.main;

        this.audio = new AudioManager(this);

        //console.log("CAMERA HEIGHT: ", this.camera.height);
        //console.log("CAMERA WIDTH: ", this.camera.width);

        this.maxDudeHp = MAX_DUDE_HP;

        const dudesContainer = new DudesContainer(this);
        //this.mobsContainer = new MobsContainer(this);
        this.mainDude = dudesContainer.mainDude;
        this.dudesContainer = dudesContainer;

        this.houseContainer = new HouseContainer(this, this.audio);

        this.houseItemsContainer = new HouseItemsContainer(this, 0, 0);

        this.globals = new Globals();

        this.isWalking = false;
        this.botController = new BotController(this);
        this.levelController = new LevelController(this);

        EventBus.on(EventType.MAIN_DUDE_DIED, () => {
            this.notificationPanel.setMainText("YOU DIED");
        });

        // initial house and players creation
        EventBus.on(
            EventType.GET_HOUSE_RESPONSE,
            (house: House, mainDude: IDude, dudes: IDude[], houseItems: IHouseItem[], inventory: IInventoryItem[], players: Player[]) => {
                // init UI
                createUIPanels(this);
                //
                this.floorCount = house.floors.length;
                //const floorY = getFloorY(mainDude.floor, this.floorCount);

                console.log(">>> GET_HOUSE_RESPONSE");
                console.log(">>> mainDude", mainDude);
                console.log(">>> dudes", dudes);
                console.log(">>> players", players);

                // get start room coordinates
                let baseRoomRoom = 0;
                let baseRoomFloor = 0;
                house.floors.forEach((floor, floorIndex) => {
                    floor.rooms.forEach((room, roomIndex) => {
                        if (room.type === EHouseRoomType.BASE) {
                            baseRoomRoom = roomIndex;
                            baseRoomFloor = floorIndex;
                        }
                    });
                });
                //const floorY = getFloorY(baseRoomFloor);
                //this.cameraY = floorY - GROUND_HEIGHT - this.camera.height / 2 + 200;
                this.setCameraY(baseRoomFloor);
                // init dudes queue
                this.queue = new Queue(this, mainDude, dudes);
                // init players
                this.dudesContainer.init(
                    dudes,
                    this.houseContainer.staticGroup,
                    mainDude,
                    {
                        room: baseRoomRoom,
                        floor: baseRoomFloor,
                    },
                    this.queue
                );
                this.mainDude = this.dudesContainer.mainDude;
                this.queue.init(this.mainDude, this.dudesContainer.dudes);

                let isHost = false;
                players.forEach((player) => {
                    if (player.isHost && player.userId === this.mainDude.userId) {
                        isHost = true;
                    }
                });
                this.isHost = isHost;

                if (isHost) {
                    // init bots (for host player only)
                    const bots = this.dudesContainer.dudes.filter((dude) => dude.isBot);
                    if (bots.length > 0) {
                        this.botController.init(bots);
                    }
                }

                // init level change handling (for host player only)
                this.levelController.init(house, isHost);

                //this.cooldowns = new Cooldowns();

                this.dudeAnimationController = new DudeAnimationController();

                // init house (rooms, wall, ...)
                this.houseContainer.init(house, this.mainDude);
                // init mobs
                //this.mobsContainer.init(mobs, this.houseContainer.staticGroup, this.floorCount);
                // init ui panels
                initUIPanels(this, inventory, this.mainDude.curses);
                // init first plan effects
                this.firstPlan = new FirstPlanContainer(this, 0, 0);
                this.firstPlanController = new FirstPlanController(this);

                //this.firstPlan.addObject(EFirstPlanObject.CHAIN_SMALL);

                // setTimeout(() => {
                //     //this.firstPlan.addObject(EFirstPlanObject.);
                //     //this.firstPlan.addObject(EFirstPlanObject.ROCK);
                //     this.firstPlan.addObject(EFirstPlanObject.BAT_GIANT);
                //     //this.firstPlan.addObject(EFirstPlanObject.SPIDER);
                // }, 2000);
                //this.firstPlan.addObject(EFirstPlanObject.WEB);
                // // this.firstPlan.addObject(EFirstPlanObject.BAT_VERY_BIG);

                // setTimeout(() => {
                //     this.firstPlan.addObject(EFirstPlanObject.WATER_DROP_BIG);
                // }, 4000);
                // setTimeout(() => {
                //     this.firstPlan.addObject(EFirstPlanObject.WATER_DROP_BIG);
                // }, 7000);
                // setTimeout(() => {
                //     this.firstPlan.addObject(EFirstPlanObject.WATER_DROP_BIG);
                // }, 9000);

                // setTimeout(() => {
                //     this.firstPlan.addObject(EFirstPlanObject.CHAIN);
                // }, 4000);

                // setTimeout(() => {
                //     this.firstPlan.addObject(EFirstPlanObject.CHAIN_SMALL);
                // }, 5000);
                //this.firstPlan.addObject(EFirstPlanObject.SPIDER);

                // init house events
                this.houseEventController = new HouseEventController(this);
                this.houseEventController.init();

                // room objects
                this.houseColliders = this.houseContainer.getColliders();
                this.roomObjectsController = new RoomObjectsController(this.queue, this.houseContainer.getRoomObjects(0));

                // house items
                this.houseItemsContainer.init(houseItems, this.mainDude, this.levelController.getLevel());
                this.houseItemsColliders = this.houseItemsContainer.getCollideItems();
                // center camera on main player
                centerCameraOnMainDude(this, 0);
                //set camera bounds
                const maxRooms = house.floors.reduce((max, floor) => {
                    return Math.max(max, floor.rooms.length);
                }, 0);
                //this.camera.setBounds(-50, 0, house.floors[0].rooms.length * ROOM_WIDTH + 100, (house.floors.length + 1) * FLOOR_HEIGHT);
                this.camera.setBounds(-50, -100, maxRooms * ROOM_WIDTH + 100, (house.floors.length + 1) * FLOOR_HEIGHT);

                // start walking after delay
                this.startWalkLevel();

                // test
                // const mainMenuMusic = this.sound.add(SOUND_MAIN_MENU_MUSIC, { loop: false, volume: 0.02 });
                // setTimeout(() => {
                //     mainMenuMusic.play();
                // }, 3000);
            }
        );

        // ON SCALE
        this.scale.addListener(
            Scale.Events.RESIZE,
            (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
                //console.log("CAMERA HEIGHT", this.camera.height);
                // CAMERA
                this.camera.pan(this.mainDude.gameObject.x, this.cameraY, 0, "Sine.easeIn");
                this.setCameraY(this.levelController.getLevel());
            }
        );

        // when all players load resources for Platform scene
        // EventBus.on(EventType.ROOM_STATUS_CHANGED, (status: ERoomStatus) => {
        //     //console.log(">>>>> ROOM_STATUS_CHANGED", status);
        //     if (status === ERoomStatus.PLATFORM_LOADED) {
        //         this.scene.stop(EScene.GAME_LOADING);
        //         // get initial house and players data
        //         EventBus.emit(EventType.GET_HOUSE);
        //     }
        // });

        //EventBus.emit(EventType.SCENE_PLATFORM_LOADED);

        EventBus.emit(EventType.GET_HOUSE);

        // cameras

        //const scrollCamera = new ScrollCamera(this, camera.width, camera.height).setName('scrollCamera');
        //this.scrollCamera.setBackgroundColor(0x111166);
        //this.cameras.addExisting(scrollCamera);
        ////

        //this.platforms = this.physics.add.staticGroup();

        //this.platforms.create(400, floor1Y, 'ground').setScale(10, 1).refreshBody();

        //this.platforms.create(0, floor2Y, 'ground').setScale(1, 1).refreshBody();
        //this.platforms.create(900, floor2Y, 'ground').setScale(1, 1).refreshBody();

        //const image: GameObjects.Image = this.platforms.create(400, 568, 'ground');

        //this.platforms.create(400, 168, 'ground').setScale(2).refreshBody();

        // platforms.create(600, 400, 'ground');
        // platforms.create(50, 250, 'ground');
        // platforms.create(750, 220, 'ground');

        //this.movingPlatform = this.physics.add.image(400, 400, 'ground');

        //this.movingPlatform.setImmovable(true);
        //this.movingPlatform.body.allowGravity = false;
        //this.movingPlatform.setVelocityX(50);

        //this.player.setBounce(0.2);
        //this.player.setCollideWorldBounds(true);

        // animations
        // createAnimations(this);

        // this.stars = this.physics.add.group({
        //     key: 'star',
        //     repeat: 11,
        //     setXY: { x: 12, y: 0, stepX: 70 },
        // });

        // for (const star of this.stars.getChildren()) {
        //     star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        // }

        //this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        // KEYBOARD EVENT LISTENERS
        this.cursors = this.input!.keyboard!.createCursorKeys();
        initInputListeners(this);

        //
        // this.bonusSelectPanel.show(
        //     [EBonusType.ADD_HP, EBonusType.HEAL_FULL, EBonusType.ITEM_SHIELD, EBonusType.ADD_HP, EBonusType.HEAL_FULL, EBonusType.ITEM_SHIELD],
        //     this.mainDude.userId
        // );
    }

    update() {
        update(this);
    }

    getFloor(y: number) {
        return this.floorCount - Math.floor(y / FLOOR_HEIGHT) - 1;
    }

    disableInput() {
        this.isInputEnabled = false;
    }

    enableInput() {
        this.isInputEnabled = true;
    }

    showChangeLevelAnimation() {
        this.blackContainer.setVisible(true);
        setTimeout(() => {
            this.blackContainer.setVisible(false);
        }, 1000);
    }

    startwalking() {
        this.isWalking = true;
    }

    stopWalking() {
        this.isWalking = false;
    }

    setCameraY(floor: number) {
        const floorY = getFloorY(floor);
        this.cameraY = floorY - GROUND_HEIGHT - this.camera.height / 2 + 200;
    }

    startWalkLevel() {
        setTimeout(() => {
            //this.mainDude.startWalk();
            this.dudeWalkSpeed = DUDES_MOVE_SPEED;
            this.startwalking();
            this.enableAllActions();
            if (this.isHost) {
                this.houseEventController.initEventsForLevel();
            }
        }, 2000);
    }

    disableAllActions() {
        // disable all inputs
        this.disableInput();
        // disable item actions
        this.inventoryPanel.inventory.disableAllItemActionCooldowns();
        // disable curses
        this.mainDude.curseController.stopAllCurses();
        // disable bots (for host only)
        if (this.isHost && this.botController.getIsEnabled()) {
            this.botController.disableBots();
        }
        // disable room objects moving
        this.roomObjectsController.clear();
        // remove roomObjects from level
        const level = this.levelController.getLevel();
        console.log("disableAllActions LEVEL", level);
        this.houseContainer.deleteRoomObjects(level);
        // stop dudes animations
        this.dudesContainer.stopAllAnimations();
        this.firstPlanController.stop();
    }

    enableAllActions() {
        // enable all inputs
        this.enableInput();
        //TODO: enable item actions - start timers
        //this.inventoryPanel.inventory.disableAllItemActionCooldowns();
        // enable curses
        this.mainDude.curseController.startAllCurses();
        // disable bots (for host only)
        if (this.isHost && this.botController.getIsEnabled()) {
            this.botController.enableBots();
        }
        // enable room objects moving
        const level = this.levelController.getLevel();
        this.roomObjectsController.setRoomObjects(this.houseContainer.getRoomObjects(level));
        this.firstPlanController.start();
    }
}
