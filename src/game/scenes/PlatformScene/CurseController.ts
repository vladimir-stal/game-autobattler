import { ECurseType, EDudeActionLetter } from "../../../types";
import Dude from "../../components/house/Dude";

import { EventBus, EventType } from "../../EventBus";
import { getRandomArrayItem, getRandomIntFromInterval } from "../../utils/commonUtils";
import { PlatformScene } from "../PlatformScene";
import { EFirstPlanObject } from "./FirstPlanContainer";

const CLUMSY_TIME = 5000;
const CLUMSY_CHANSE = 10;

const PLAGUE_TIME = 5000;
const PLAGUE_CHANSE = 10;

const INITIAL_FOG_TIME = 10000;
const FOG_TIME = 30000;
const FOG_CHANSE = 70;

const BATS_TIME = 30000;

const allLetters = ["q", "w", "e", "r", "a", "s", "d", "f", "z", "x", "v"];
const allActionLetters = [EDudeActionLetter.E, EDudeActionLetter.T, EDudeActionLetter.W];

export class CurseController {
    scene: PlatformScene;
    dude: Dude;

    // timerIds
    //clumsyTimerId: number;
    plagueTimerId: number;
    fogTimerId: number;
    batsTimerId: number;

    clumsyLetters: Record<string, EDudeActionLetter>;
    clumsyActionLetters: Record<EDudeActionLetter, string[]>;

    constructor(scene: PlatformScene, dude: Dude) {
        this.scene = scene;
        this.dude = dude;

        EventBus.on(EventType.DUDE_REMOVE_CURSE_RESPONSE, (userId: string, curseType: ECurseType) => {
            if (dude.userId === userId) {
                console.log(`REMOVE CURSE ${curseType} FROM MAIN DUDE`);
                this.removeCurse(curseType);
            }
        });
    }

    initCurse(type: ECurseType) {
        switch (type) {
            case ECurseType.CLUMSY:
                {
                    this.createClumsyLetters();
                    //this.setClumsyTimer();
                }
                break;
            case ECurseType.FOG:
                {
                    this.setFogTimer(INITIAL_FOG_TIME);
                }
                break;
            case ECurseType.PLAGUE:
                {
                    this.setPlagueTimer();
                }
                break;
            case ECurseType.SMALL_INVENTORY:
                {
                    // TODO: animation to disable slot
                }
                break;
            // AFTER HOUSE EVENT CURSES
            case ECurseType.BATS:
                {
                    this.setBatsTimer();
                }
                break;
            default: {
                console.log("ERROR! initCurse. No handler for", type);
            }
        }
    }

    // setClumsyTimer() {
    //     this.clumsyTimerId = window.setTimeout(() => {
    //         //console.log("clumsy tick", this.dude.userId);
    //         if (getRandomIntFromInterval(0, 100) < CLUMSY_CHANSE) {
    //             //console.log("clumsy execute");
    //             EventBus.emit(EventType.DUDE_CURSE_EXECUTE, this.dude.userId, ECurseType.CLUMSY);
    //         }
    //         this.setClumsyTimer();
    //     }, CLUMSY_TIME);
    // }

    // stopClumsyTimer() {
    //     clearTimeout(this.clumsyTimerId);
    // }

    setPlagueTimer() {
        this.plagueTimerId = window.setTimeout(() => {
            const randomInt = getRandomIntFromInterval(0, 100);
            //console.log("plague tick", this.dude.userId);
            if (randomInt < PLAGUE_CHANSE) {
                //console.log("plague execute");
                EventBus.emit(EventType.DUDE_CURSE_EXECUTE, this.dude.userId, ECurseType.PLAGUE);
            }
            this.setPlagueTimer();
        }, PLAGUE_TIME);
    }

    stopPlagueTimer() {
        clearTimeout(this.plagueTimerId);
    }

    setFogTimer(time: number) {
        console.log("START FOG TIMER");
        this.fogTimerId = window.setTimeout(() => {
            //console.log("clumsy tick", this.dude.userId);
            if (getRandomIntFromInterval(0, 100) < FOG_CHANSE) {
                //console.log("clumsy execute");
                //EventBus.emit(EventType.DUDE_CURSE_EXECUTE, this.dude.userId, ECurseType.CLUMSY);
                console.log("EXECUTE FOG TIMER");
                this.scene.firstPlan.addObject(EFirstPlanObject.FOG);
            }
            this.setFogTimer(FOG_TIME);
        }, time);
    }

    stopFogTimer() {
        console.log("STOP FOG TIMER");
        clearTimeout(this.fogTimerId);
    }

    setBatsTimer() {
        console.log("START BATS TIMER");
        //this.scene.firstPlanController.addSmallBasicObjectTimer;
        this.scene.firstPlanController.addCustomObjectTimer(EFirstPlanObject.BAT_GIANT, BATS_TIME);
    }

    stopCurse(type: ECurseType) {
        switch (type) {
            case ECurseType.CLUMSY:
                {
                    //this.stopClumsyTimer();
                }
                break;
            case ECurseType.PLAGUE:
                {
                    this.stopPlagueTimer();
                }
                break;
        }
    }

    stopAllCurses() {
        this.dude.curses.forEach((curse) => {
            switch (curse.type) {
                case ECurseType.CLUMSY:
                    {
                        //this.stopClumsyTimer();
                    }
                    break;
                case ECurseType.FOG:
                    {
                        this.stopFogTimer();
                    }
                    break;
                case ECurseType.PLAGUE:
                    {
                        this.stopPlagueTimer();
                    }
                    break;
            }
        });
    }

    startAllCurses() {
        this.dude.curses.forEach((curse) => {
            switch (curse.type) {
                case ECurseType.CLUMSY:
                    {
                        //this.setClumsyTimer();
                    }
                    break;
                case ECurseType.FOG:
                    {
                        this.setFogTimer(INITIAL_FOG_TIME);
                    }
                    break;
                case ECurseType.PLAGUE:
                    {
                        this.setPlagueTimer();
                    }
                    break;
            }
        });
    }

    removeCurse(curseType: ECurseType) {
        const index = this.dude.curses.findIndex((curse) => curse.type === curseType);
        if (index === -1) {
            return;
        }

        this.dude.curses.splice(index, 1);

        switch (curseType) {
            case ECurseType.CLUMSY:
                {
                    //this.stopClumsyTimer();
                }
                break;
            case ECurseType.PLAGUE:
                {
                    this.stopPlagueTimer();
                }
                break;
            case ECurseType.FOG:
                {
                    this.stopFogTimer();
                }
                break;
            default:
                console.log("No handler for curse remove for curse", curseType);
        }
    }

    createClumsyLetters() {
        this.clumsyLetters = {};
        this.clumsyActionLetters = { [EDudeActionLetter.E]: [], [EDudeActionLetter.T]: [], [EDudeActionLetter.W]: [] };

        allLetters.forEach((letter, index) => {
            let actionLetter = getRandomArrayItem(allActionLetters);

            // none of action letters array should stay empty
            if (index >= allLetters.length - 2) {
                if (this.clumsyActionLetters[EDudeActionLetter.E].length === 0) {
                    actionLetter = EDudeActionLetter.E;
                } else if (this.clumsyActionLetters[EDudeActionLetter.T].length === 0) {
                    actionLetter = EDudeActionLetter.T;
                } else if (this.clumsyActionLetters[EDudeActionLetter.W].length === 0) {
                    actionLetter = EDudeActionLetter.W;
                }
            }

            this.clumsyLetters[letter] = actionLetter;
            this.clumsyActionLetters[actionLetter].push(letter);
        });
    }
}
