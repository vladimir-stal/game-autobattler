import { Sound, Types } from "phaser";
import {
    SOUND_DUDE_APPLY_CURSE,
    SOUND_DUDE_BEAR_HURT,
    SOUND_DUDE_FOX_HURT,
    SOUND_DUDE_PIG_HURT,
    SOUND_DUDE_WOLF_HURT,
    SOUND_MAIN_MENU_CLICK,
    SOUND_MAIN_MENU_CLICK_2,
    SOUND_RO_SPIDER,
    SOUND_TAKE_ITEM,
    SOUND_TAKE_ITEM_DAGGER,
    SOUND_TAKE_ITEM_HP_BOTTLE,
    SOUND_TAKE_ITEM_KEY,
    SOUND_TAKE_ITEM_SHIELD,
    SOUND_TAKE_ITEM_SKULL,
    SOUND_TAKE_ITEM_STONE_HEAVY,
    SOUND_TAKE_ITEM_STONE_LIGHT,
    SOUND_TRIGGER_BAT_ATTACK,
    SOUND_TRIGGER_GHOST_BEHIND,
    SOUND_UI_CLICK_3,
    SOUND_UI_CLICK_4,
    SOUND_UI_CLICK_6,
    SOUND_UI_OPEN_CURSE_BOOK,
    SOUND_USE_BAT_ATTACK,
    SOUND_USE_CHEST,
    SOUND_USE_CHEST_LOCKED,
    SOUND_USE_CURSED_CHEST,
    SOUND_USE_ITEM_DAGGER,
    SOUND_USE_ITEM_HP_BOTTLE,
    SOUND_USE_ITEM_HP_BOTTLE_2,
    SOUND_USE_ITEM_SKULL_BEAR,
    SOUND_USE_ITEM_STONE,
    SOUND_USE_ITEM_STONE_2,
    SOUND_USE_SKULL_PILE,
    SOUND_WOOD_1,
    SOUND_WOOD_2,
    SOUND_WOOD_3,
} from "../../consts";
import { ECharacterType, EItemType, ERoomObjectStatus, ERoomObjectType } from "../../../types";
import { PlatformScene } from "../../scenes/PlatformScene";

const mainPlayerVolume = 0.3;
const otherPlayerVolume = 0.05;

const getVolume = (isMainPlayer: boolean) => {
    return isMainPlayer ? mainPlayerVolume : otherPlayerVolume;
};

export class AudioManager {
    private scene: PlatformScene;
    private sounds: Record<string, Sound.HTML5AudioSound | Sound.WebAudioSound | Sound.NoAudioSound>;

    constructor(scene: PlatformScene) {
        this.scene = scene;
        this.sounds = {};

        // UI sounds
        this.add(SOUND_WOOD_1);
        this.add(SOUND_WOOD_2);
        this.add(SOUND_WOOD_3);
        this.add(SOUND_USE_CHEST);
        this.add(SOUND_USE_CHEST_LOCKED);
        this.add(SOUND_USE_CURSED_CHEST);
        this.add(SOUND_USE_SKULL_PILE);
        this.add(SOUND_TRIGGER_BAT_ATTACK);

        this.addSingle(SOUND_UI_OPEN_CURSE_BOOK, { volume: mainPlayerVolume });
        this.addSingle(SOUND_MAIN_MENU_CLICK, { volume: mainPlayerVolume });
        this.addSingle(SOUND_UI_CLICK_3, { volume: mainPlayerVolume / 10 });
        //this.addSingle(SOUND_UI_CLICK_4, { volume: mainPlayerVolume });
        this.addSingle(SOUND_UI_CLICK_6, { volume: mainPlayerVolume / 10 });
        this.addSingle(SOUND_MAIN_MENU_CLICK_2, { volume: mainPlayerVolume / 4 });

        this.addSingle(SOUND_RO_SPIDER, { volume: otherPlayerVolume, loop: true });
        // this.sounds[SOUND_RO_SPIDER] = this.scene.sound.add(SOUND_RO_SPIDER, { volume: otherPlayerVolume, loop: true });
        this.add(SOUND_USE_BAT_ATTACK);

        // DUDE sounds
        this.add(SOUND_USE_ITEM_DAGGER);
        this.add(SOUND_USE_ITEM_HP_BOTTLE);
        this.add(SOUND_USE_ITEM_HP_BOTTLE_2);
        this.add(SOUND_USE_ITEM_STONE);
        this.add(SOUND_USE_ITEM_STONE_2);
        this.add(SOUND_USE_ITEM_SKULL_BEAR);

        this.add(SOUND_TAKE_ITEM);
        this.addSingle(SOUND_TAKE_ITEM_HP_BOTTLE, { volume: mainPlayerVolume });
        this.addSingle(SOUND_TAKE_ITEM_SKULL, { volume: mainPlayerVolume });
        this.addSingle(SOUND_TAKE_ITEM_SHIELD, { volume: mainPlayerVolume });
        this.addSingle(SOUND_TAKE_ITEM_DAGGER, { volume: mainPlayerVolume });
        this.addSingle(SOUND_TAKE_ITEM_KEY, { volume: mainPlayerVolume });
        this.addSingle(SOUND_TAKE_ITEM_STONE_LIGHT, { volume: mainPlayerVolume * 2 });
        this.addSingle(SOUND_TAKE_ITEM_STONE_HEAVY, { volume: mainPlayerVolume * 2 });
        //this.add(SOUND_TAKE_ITEM_HP_BOTTLE);
        //this.add(SOUND_TAKE_ITEM_SKULL);
        //this.add(SOUND_TAKE_ITEM_SHIELD);
        //this.add(SOUND_TAKE_ITEM_DAGGER);

        this.add(SOUND_DUDE_PIG_HURT);
        this.add(SOUND_DUDE_WOLF_HURT);
        this.add(SOUND_DUDE_BEAR_HURT);
        this.add(SOUND_DUDE_FOX_HURT);

        this.add(SOUND_DUDE_APPLY_CURSE);
    }

    play(name: string, isMainPlayer: boolean) {
        //console.log("PLAY SOUND", name, volume);
        if (isMainPlayer) {
            this.sounds[name].play();
        } else {
            this.sounds[`${name}_NOT_MAIN`].play();
        }
    }

    stop(name: string) {
        this.sounds[name].stop();
    }

    /**
     * Add sounds both for main player and other players
     */
    private add(name: string, loop: boolean = false) {
        //options?: Types.Sound.SoundConfig
        this.sounds[`${name}_NOT_MAIN`] = this.scene.sound.add(name, { volume: otherPlayerVolume, loop });
        this.sounds[name] = this.scene.sound.add(name, { volume: mainPlayerVolume, loop });
    }

    /**
     * Add sound only for main player
     */
    private addSingle(name: string, options?: Types.Sound.SoundConfig) {
        this.sounds[name] = this.scene.sound.add(name, options);
    }

    playUseRoomObjectSound(roomObjectType: ERoomObjectType, isMainPlayer: boolean, roomObjectStatus: ERoomObjectStatus = ERoomObjectStatus.AVAILABLE) {
        console.log("PLAY SOUND", roomObjectType);
        switch (roomObjectType) {
            case ERoomObjectType.BAT:
            case ERoomObjectType.BAT_ATTACK:
                {
                    this.play(SOUND_USE_BAT_ATTACK, isMainPlayer);
                }
                break;
            case ERoomObjectType.SKULL_PILE:
                {
                    this.play(SOUND_USE_SKULL_PILE, isMainPlayer);
                }
                break;
            case ERoomObjectType.CURSED_CHEST:
                {
                    if (!isMainPlayer) {
                        // another player opens chest sound should not tell if it cursed chest or treasure chest
                        this.play(SOUND_USE_CHEST, isMainPlayer);
                        return;
                    }
                    this.play(SOUND_USE_CURSED_CHEST, isMainPlayer);
                }
                break;
            case ERoomObjectType.TREASURE_CHEST:
                {
                    if (!isMainPlayer) {
                        // another player opens chest sound should not tell if it is closed
                        this.play(SOUND_USE_CHEST, isMainPlayer);
                        return;
                    }

                    if (roomObjectStatus === ERoomObjectStatus.AVAILABLE) {
                        this.play(SOUND_USE_CHEST, isMainPlayer);
                    } else if (roomObjectStatus === ERoomObjectStatus.CLOSED) {
                        this.play(SOUND_USE_CHEST_LOCKED, isMainPlayer);
                    }
                }
                break;
            case ERoomObjectType.TRAP:
                {
                    this.play(SOUND_USE_CHEST, isMainPlayer);
                }
                break;
            default:
                console.log("NO SOUND FOUND FOR ROOM OBJECT", roomObjectType);
        }
    }

    playTriggerRoomObjectSound(roomObjectType: ERoomObjectType, isMainPlayer: boolean) {
        const soundVolume = getVolume(isMainPlayer);
        switch (roomObjectType) {
            case ERoomObjectType.BAT:
            case ERoomObjectType.BAT_ATTACK:
                {
                    this.play(SOUND_TRIGGER_BAT_ATTACK, isMainPlayer);
                }
                break;
            case ERoomObjectType.GHOST_BEHIND:
                {
                    this.play(SOUND_TRIGGER_GHOST_BEHIND, isMainPlayer);
                }
                break;
            case ERoomObjectType.TRAP:
                {
                    this.play(SOUND_TRIGGER_BAT_ATTACK, isMainPlayer);
                }
                break;
            default:
                console.log("NO SOUND FOUND FOR ROOM OBJECT", roomObjectType);
        }
    }

    playUseItemSound(itemType: EItemType, isMainPlayer: boolean, characterType: ECharacterType) {
        //console.log("PLAY SOUND USE ITEM", itemType, isMainPlayer);
        const soundVolume = getVolume(isMainPlayer);
        // START HERE
        switch (itemType) {
            case EItemType.DAGGER: {
                window.setTimeout(() => {
                    this.play(SOUND_USE_ITEM_DAGGER, isMainPlayer);
                }, 1000);
                break;
            }
            case EItemType.HP_BOTTLE: {
                this.play(SOUND_USE_ITEM_HP_BOTTLE_2, isMainPlayer);
                window.setTimeout(() => {
                    this.play(SOUND_USE_ITEM_HP_BOTTLE, isMainPlayer);
                    //this.play(SOUND_USE_ITEM_HP_BOTTLE, soundVolume);
                }, 500);
                break;
            }
            case EItemType.SKULL: {
                if (characterType === ECharacterType.BEAR) {
                    setTimeout(() => {
                        this.play(SOUND_USE_ITEM_SKULL_BEAR, isMainPlayer);
                    }, 200);
                    setTimeout(() => {
                        this.play(SOUND_USE_ITEM_SKULL_BEAR, isMainPlayer);
                    }, 1200);
                }

                break;
            }
            case EItemType.STONE_LIGHT: {
                window.setTimeout(() => {
                    this.play(SOUND_USE_ITEM_STONE, isMainPlayer);
                    //this.play(SOUND_USE_ITEM_STONE, soundVolume);
                }, 100);
                break;
            }
            default: {
                console.log("NO SOUND FOR USE ITEM", itemType);
            }
        }
    }

    playDudeTakeItem(isMainPlayer: boolean) {
        setTimeout(() => {
            this.play(SOUND_TAKE_ITEM, isMainPlayer);
        }, 300);
    }

    playTakeItemSound(itemType: EItemType, isMainPlayer: boolean) {
        //setTimeout(() => {
        switch (itemType) {
            case EItemType.DAGGER: {
                this.play(SOUND_TAKE_ITEM_DAGGER, isMainPlayer);
                break;
            }
            case EItemType.HP_BOTTLE: {
                this.play(SOUND_TAKE_ITEM_HP_BOTTLE, isMainPlayer);
                break;
            }
            case EItemType.KEY: {
                this.play(SOUND_TAKE_ITEM_KEY, isMainPlayer);
                break;
            }
            case EItemType.SHIELD: {
                this.play(SOUND_TAKE_ITEM_SHIELD, isMainPlayer);
                break;
            }
            case EItemType.SKULL: {
                this.play(SOUND_TAKE_ITEM_SKULL, isMainPlayer);
                break;
            }
            case EItemType.STONE_HEAVY: {
                this.play(SOUND_TAKE_ITEM_STONE_HEAVY, isMainPlayer);
                break;
            }
            case EItemType.STONE_LIGHT: {
                this.play(SOUND_TAKE_ITEM_STONE_LIGHT, isMainPlayer);
                break;
            }
            default: {
                this.play(SOUND_TAKE_ITEM, isMainPlayer);
            }
        }
        //}, 800);
    }

    playDudeHurtSound(characterType: ECharacterType, isMainPlayer: boolean) {
        switch (characterType) {
            case ECharacterType.BEAR: {
                this.play(SOUND_DUDE_BEAR_HURT, isMainPlayer);
                break;
            }
            case ECharacterType.FOX: {
                this.play(SOUND_DUDE_FOX_HURT, isMainPlayer);
                break;
            }
            case ECharacterType.PIG: {
                this.play(SOUND_DUDE_PIG_HURT, isMainPlayer);
                break;
            }
            case ECharacterType.WOLF: {
                this.play(SOUND_DUDE_WOLF_HURT, isMainPlayer);
                break;
            }
            default: {
                console.log("NO HURT SOUND FOR CHARACTER", characterType);
            }
        }
    }

    playRoomObjectSound(roomObjectType: ERoomObjectType) {
        switch (roomObjectType) {
            case ERoomObjectType.SPIDER: {
                //window.setTimeout(() => {
                this.play(SOUND_RO_SPIDER, true);
                setTimeout(() => {
                    this.stop(SOUND_RO_SPIDER);
                }, 10000);
                //}, 2000);
            }
            default: {
                console.log("NO SOUND FOR ROOM OBJECT", roomObjectType);
            }
        }
    }

    playDudeApplyCurse(isMainPlayer: boolean) {
        this.play(SOUND_DUDE_APPLY_CURSE, isMainPlayer);
    }

    playUIOpenCurseBook() {
        this.play(SOUND_UI_OPEN_CURSE_BOOK, true);
    }

    playDudeStoneOnTop(isMainPlayer: boolean) {
        this.play(SOUND_USE_ITEM_STONE_2, isMainPlayer);
    }

    // UI

    playUIOpenBonusPanel() {
        this.play(SOUND_WOOD_1, true);
    }

    playUICloseBonusPanel() {
        this.play(SOUND_WOOD_3, true);
    }

    playUIButtonClick() {
        this.play(SOUND_MAIN_MENU_CLICK, true);
    }

    playUISlotSelect() {
        this.play(SOUND_UI_CLICK_3, true);
    }

    playUIClosePanelClick() {
        this.play(SOUND_UI_CLICK_6, true);
    }

    playUIApplyCurseClick() {
        this.play(SOUND_MAIN_MENU_CLICK_2, true);
    }

    playUIBonusSelectClick() {
        this.play(SOUND_MAIN_MENU_CLICK_2, true);
    }
}
