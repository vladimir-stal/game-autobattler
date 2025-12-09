import { Cameras, Input, Scale, Structs } from "phaser";
import { AnimationType, ECardType, EScene, IUnit, TUnits } from "../../types";
import { initInputListeners } from "./PlatformScene/keyboardInputs";
import { createUIPanels } from "../components/ui/uiPanels";
import { TopPanel } from "../components/ui/TopPanel";
import { BankController } from "../components/BankController";
import { RoomSelectPanel } from "../components/ui/RoomSelectPanel";
import { CardSelectPanel } from "../components/ui/CardSelectPanel";
import { UnitPanel } from "../components/ui/UnitPanel";
import { CardInventoryPanel } from "../components/ui/CardInventoryPanel";
import { CardSlot } from "../components/CardSlot";
import { Card } from "../components/Card";
import { BattlePanel } from "../components/ui/BattlePanel";
import { BattleController } from "../components/BattleController";
import { basicClassHeroes } from "../heroConsts";
import { SelectController } from "../components/SelectController";
import { activateSlots, getExpAfterDuelValue } from "../utils/selectPhaseUtils";
import { addExp, generateUnitId } from "../utils/unitUtils";
import { UnitUpgradePanel } from "../components/ui/UnitUpgradePanel";
import { applyAfterDuelBonuses } from "../utils/afterDuelUtils";
import { loadImages } from "../utils/imageLoadUtil";
import { createAnimations } from "../utils/animationUtils";
import { LeaderController } from "../components/LeaderController";
import { SellCardPanel } from "../components/ui/SellCardPanel";
import { LeaderPanel } from "../components/ui/LeaderPanel";
import { LeadersPanel } from "../components/ui/LeadersPanel";
import { getDuelEnemy } from "../utils/duelUtils";
import { CardUpgradetPanel } from "../components/ui/CardUpgradetPanel";

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

    topPanel: TopPanel;
    roomSelectPanel: RoomSelectPanel;
    cardSelectPanel: CardSelectPanel;
    unitPanel: UnitPanel;
    unitUpgradePanel: UnitUpgradePanel;
    inventoryPanel: CardInventoryPanel;
    sellCardPanel: SellCardPanel;
    leaderPanel: LeaderPanel;
    leadersPanel: LeadersPanel;
    battlePanel: BattlePanel;
    cardUpgradePanel: CardUpgradetPanel;

    leaderController: LeaderController;
    bankController: BankController;
    selectController: SelectController;
    battleController: BattleController;

    allCardSlots: CardSlot[] = [];
    isCardBuyMode: boolean = false;
    isCardMoveMode: boolean = false;
    isCardMoveAfterUpgrade: boolean = false;
    isUnitUpgradeMode: boolean = false;
    cardToMove: Card | undefined;
    cardSlotToUpgrade: CardSlot | undefined;

    phase: "SELECT" | "DUEL" | "MOB_DUEL" | "BOSS_DUEL" = "SELECT";

    units: IUnit[] = []; // all units player owns

    //

    constructor() {
        super(EScene.GAME);
    }

    async preload() {
        loadImages(this);
    }

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

        this.camera.setBounds(0, 0, 2000, 2000);
        this.selectController = new SelectController(this);

        createAnimations(this);

        this.leaderController = new LeaderController(this);
        this.leaderController.selectNextOpponent();

        this.bankController = new BankController(this);

        createUIPanels(this);

        this.bankController.init();

        this.battleController = new BattleController();

        // start game
        this.selectController.showRoomSelect();

        //testing
    }

    update() {
        //update(this);
    }

    setIsCardBuyMode(value: boolean) {
        this.isCardBuyMode = value;
    }

    setIsCardMoveMode(value: boolean) {
        this.isCardMoveMode = value;
        if (!this.cardToMove) {
            return;
        }

        activateSlots(this.allCardSlots, value, this.cardToMove.card, this);
    }

    cancelCardMove() {
        this.setIsCardMoveMode(false);
        this.isCardMoveAfterUpgrade = false;
    }

    setIsUnitUpgradeMode(value: boolean, cardSlotToUpgrade?: CardSlot) {
        console.log("setIsUnitUpgradeMode", value);
        this.isUnitUpgradeMode = value;
        if (value) {
            this.cardSlotToUpgrade = cardSlotToUpgrade;
        } else {
            if (!this.cardSlotToUpgrade) {
                console.log("ERROR! NO CARDSLOT TO REMOVE CARD");
            }
            //this.cardSlotToUpgrade?.removeCard();
            //this.cardSlotToUpgrade?.setUnit();

            //this.unitPanel.
            this.cardSlotToUpgrade = undefined;
        }
    }

    finishCardMove() {
        this.setIsCardMoveMode(false);
        if (this.isCardBuyMode) {
            if (this.cardToMove?.card.type === ECardType.UNIT && this.cardToMove?.card.unit) {
                this.units.push(this.cardToMove.card.unit);
            }
            this.setIsCardBuyMode(false);
            this.cardSelectPanel.finishBuy();
        }

        if (!this.cardToMove) {
            return;
        }

        this.cardToMove.destroy(true);
        this.cardToMove = undefined;

        if (this.isCardMoveAfterUpgrade) {
            this.isCardMoveAfterUpgrade = false;
            this.cardUpgradePanel.hide();
            this.selectController.showNextRoomSelect();
        }
    }

    selectCardToMove(cardToMove: Card) {
        this.cardToMove = cardToMove;
        this.setIsCardMoveMode(true);
    }

    selectCardToBuy(card: Card) {
        this.selectCardToMove(card);
        this.setIsCardBuyMode(true);
    }

    addCardSlot(slot: CardSlot) {
        this.allCardSlots.push(slot);
    }

    startNewDay() {
        this.selectController.startNewDay();
        this.bankController.getIncome();
        this.leaderController.selectNextOpponent();
    }

    changeToDuelPhase() {
        this.phase = "DUEL";
        this.topPanel.changeToDuelPhase();
        this.roomSelectPanel.setVisible(false);
        this.cardSelectPanel.setVisible(false);
        this.unitPanel.hide();
        this.inventoryPanel.setVisible(false);
        this.sellCardPanel.setVisible(false);
        this.leaderPanel.setVisible(false);
        this.leadersPanel.setVisible(false);
        //
        const units = this.unitPanel.slots.map((slot) => (slot.slot.card ? slot.slot.card.card.unit || basicClassHeroes[0] : null));

        const enemyUnits: (IUnit | null)[] = getDuelEnemy(this.leaderController.nextOpponentId)[this.selectController.day];
        const unitsCount = enemyUnits.length;
        for (let i = 0; i < 4 - unitsCount; i++) {
            enemyUnits.push(null);
        }
        this.battlePanel.show(units, enemyUnits);
        // TODO: calculate round count from day and enemies left
        const battleRoundCount = 3; //this.selectController.day + 1;
        this.battleController.start(this.battlePanel.playerUnits, this.battlePanel.enemyUnits, true, battleRoundCount);
        this.battlePanel.playBattle(this.battleController.battleRecord);
    }

    changeToMobsDuelPhase(mobs: TUnits) {
        this.phase = "MOB_DUEL";
        this.topPanel.changeToDuelPhase();
        this.roomSelectPanel.setVisible(false);
        this.cardSelectPanel.setVisible(false);
        this.unitPanel.hide();
        this.inventoryPanel.setVisible(false);
        this.sellCardPanel.setVisible(false);
        this.leaderPanel.setVisible(false);
        this.leadersPanel.setVisible(false);
        //
        const units = this.unitPanel.slots.map((slot) => (slot.slot.card ? slot.slot.card.card.unit || basicClassHeroes[0] : null));
        mobs.forEach((mob) => {
            if (mob) generateUnitId(mob);
        });
        this.battlePanel.show(units, mobs);
        this.battleController.start(this.battlePanel.playerUnits, this.battlePanel.enemyUnits, true, 0);
        setTimeout(() => {
            this.battlePanel.playBattle(this.battleController.battleRecord);
        }, 1000);
    }

    changeToBossDuelPhase(mobs: TUnits) {
        this.phase = "BOSS_DUEL";
        this.topPanel.changeToDuelPhase();
        this.roomSelectPanel.setVisible(false);
        this.cardSelectPanel.setVisible(false);
        this.unitPanel.hide();
        this.inventoryPanel.setVisible(false);
        this.sellCardPanel.setVisible(false);
        this.leaderPanel.setVisible(false);
        this.leadersPanel.setVisible(false);
        //
        const units = this.unitPanel.slots.map((slot) => (slot.slot.card ? slot.slot.card.card.unit || basicClassHeroes[0] : null));
        mobs.forEach((mob) => {
            if (mob) generateUnitId(mob);
        });
        this.battlePanel.show(units, mobs);
        this.battleController.start(this.battlePanel.playerUnits, this.battlePanel.enemyUnits, true, 0);
        setTimeout(() => {
            this.battlePanel.playBattle(this.battleController.battleRecord);
        }, 1000);
    }

    changeToSelectPhase() {
        const { day } = this.selectController;
        const units = this.battleController.player1Units;
        console.log("DUEL FINISHED. WIN:", this.battleController.isBattleWin);
        //
        this.topPanel.changeToSelectPhase();
        this.roomSelectPanel.setVisible(true);
        // get experince and hp decrease after duel
        if (this.phase === "DUEL") {
            //const experienceFromBattle = getExpAfterDuelValue(day);
            //addExp(units, experienceFromBattle);
            //
            if (!this.battleController.isBattleWin) {
                this.leaderController.decreaseMainPlayerHp(day + 1);
            } else {
                this.leaderController.decreasePlayerHp(this.leaderController.nextOpponentId, day + 1);
            }
            this.leaderController.decreaseRandomPlayersHp(day + 1);
            this.leadersPanel.refresh();
        } else if (this.phase === "BOSS_DUEL") {
            if (!this.battleController.isBattleWin) {
                this.leaderController.decreaseMainPlayerHp(day + 1);
            }
            this.leaderController.decreaseRandomPlayersHp(day + 1);
            this.leadersPanel.refresh();
        }
        //
        // REWARDS
        //
        if (this.phase === "DUEL" || this.phase === "BOSS_DUEL") {
            this.startNewDay();
        } else if (this.phase === "MOB_DUEL") {
            if (this.battleController.isBattleWin) {
                this.selectController.showMobRewards();
            } else {
                this.selectController.showNextRoomSelect();
            }
        }
        //
        this.unitPanel.setUnits(units);
        this.unitPanel.show();
        if (this.phase === "DUEL" || this.phase === "BOSS_DUEL") {
            // check items with after duel bonuses
            applyAfterDuelBonuses(this, units);
        }

        this.inventoryPanel.setVisible(true);
        this.sellCardPanel.setVisible(true);
        this.leaderPanel.setVisible(true);
        this.leadersPanel.setVisible(true);
        this.battlePanel.hide();

        this.phase = "SELECT";
    }
}
