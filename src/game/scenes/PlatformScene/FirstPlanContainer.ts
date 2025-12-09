import { Scale, Structs } from "phaser";
import { AnimationType } from "../../components/house/animation";
import {
    CAMERA_MAX_HEIGHT,
    GROUND_HEIGHT,
    IMAGE_CURSE_FOG,
    IMAGE_FIRSTPLAN_BAT,
    IMAGE_FIRSTPLAN_BAT_GIANT,
    IMAGE_FIRSTPLAN_CHAIN,
    IMAGE_FIRSTPLAN_CHAIN_SMALL,
    IMAGE_FIRSTPLAN_COLUMN,
    IMAGE_FIRSTPLAN_ROCK,
    IMAGE_FIRSTPLAN_SPIDER,
    IMAGE_FIRSTPLAN_STONE,
    IMAGE_FIRSTPLAN_WATER_DROP,
    IMAGE_FIRSTPLAN_WEB,
    IMAGE_FIRSTPLAN_WITCH,
    IMAGE_ROOM_OBJECT_GHOST_BEHIND,
    IMAGE_ROOM_OBJECT_GHOST_FRONT,
} from "../../consts";
import { PlatformScene } from "../../scenes/PlatformScene";
import { getRandomIntFromInterval } from "../../utils/commonUtils";

export enum EFirstPlanObject {
    BAT_BIG = "BAT_BIG",
    BAT_VERY_BIG = "BAT_VERY_BIG",
    BAT_GIANT = "BAT_GIANT",
    COLUMN = "COLUMN",
    CHAIN = "CHAIN",
    CHAIN_SMALL = "CHAIN_SMALL",
    FOG = "FOG",
    GHOST = "GHOST",
    STONE_FALL = "STONE_FALL",
    STONE_FALL_BIG = "STONE_FALL_BIG",
    ROCK = "ROCK",
    SPIDER = "SPIDER",
    WATER_DROP = "WATER_DROP",
    WATER_DROP_BIG = "WATER_DROP_BIG",
    WEB = "WEB",
    WITCH = "WITCH",
}

export class FirstPlanContainer extends Phaser.GameObjects.Container {
    scene: PlatformScene;
    fixedContainer: Phaser.GameObjects.Container;
    objects: { type: EFirstPlanObject; object: Phaser.GameObjects.Image }[];

    constructor(scene: PlatformScene, x: number, y: number) {
        super(scene, x, y);

        this.scene = scene;
        this.objects = [];

        this.fixedContainer = scene.add.container().setScrollFactor(0, 0, true).setDepth(180);
        this.fixedContainer.setPosition(0, 0);

        // ON SCALE
        // this.scene.scale.addListener(
        //     Scale.Events.RESIZE,
        //     (gameSize: Structs.Size, baseSize: Structs.Size, displaySize: Structs.Size, previousWidth: number, previousHeight: number) => {
        //         this.objects.forEach((fpObject) => {
        //             if (fpObject.type === EFirstPlanObject.BAT_GIANT) {
        //                 fpObject.object.
        //             }

        //             if (
        //                 [EFirstPlanObject.CHAIN, EFirstPlanObject.CHAIN_SMALL, EFirstPlanObject.WATER_DROP, EFirstPlanObject.WATER_DROP_BIG].includes(
        //                     fpObject.type
        //                 )
        //             ) {

        //             }
        //         });
        //     }
        // );
    }

    update() {
        this.objects.forEach((object) => {
            switch (object.type) {
                case EFirstPlanObject.BAT_BIG:
                    {
                        object.object.x -= 40;
                    }
                    break;
                case EFirstPlanObject.BAT_VERY_BIG:
                    {
                        object.object.x -= 90;
                    }
                    break;
                case EFirstPlanObject.CHAIN:
                    {
                        object.object.x -= 5;
                    }
                    break;
                case EFirstPlanObject.CHAIN_SMALL:
                    {
                        object.object.x -= 5;
                    }
                    break;
                case EFirstPlanObject.COLUMN:
                    {
                        object.object.x -= 8;
                    }
                    break;
                case EFirstPlanObject.FOG:
                    {
                        object.object.x -= 2;
                    }
                    break;
                case EFirstPlanObject.GHOST:
                    {
                        object.object.x -= 20;
                    }
                    break;
                case EFirstPlanObject.STONE_FALL:
                    {
                        object.object.y += 15;
                        object.object.angle += 2;
                        if (object.object.y > this.scene.camera.height - GROUND_HEIGHT - 350) {
                            object.object.setVisible(false);
                        }
                    }
                    break;
                case EFirstPlanObject.STONE_FALL_BIG:
                    {
                        object.object.y += 15;
                        object.object.angle += 2;
                    }
                    break;
                case EFirstPlanObject.ROCK:
                    {
                        object.object.x -= 7;
                    }
                    break;

                case EFirstPlanObject.SPIDER:
                    {
                        object.object.y += 3;
                        //object.object.x -= 3;
                    }
                    break;
                case EFirstPlanObject.WATER_DROP:
                    {
                        //object.object.x -= 3;
                    }
                    break;
                case EFirstPlanObject.WATER_DROP_BIG:
                    {
                        object.object.x -= 7;
                    }
                    break;
                case EFirstPlanObject.WEB:
                    {
                        object.object.x -= 5;
                    }
                    break;
                case EFirstPlanObject.WITCH:
                    {
                        object.object.x -= 5;
                    }
                    break;
            }
        });
    }

    addObject(type: EFirstPlanObject, x: number = 0) {
        // TODO: destroy object in X sec
        switch (type) {
            case EFirstPlanObject.BAT_BIG:
                {
                    const batImage = this.scene.add.sprite(2000, 0, IMAGE_FIRSTPLAN_BAT).setOrigin(0, 0);
                    batImage.anims.play(AnimationType.FP_BIG_BAT);
                    this.fixedContainer.add(batImage);
                    this.objects.push({ type, object: batImage });
                }
                break;
            case EFirstPlanObject.BAT_VERY_BIG:
                {
                    const batImage = this.scene.add.sprite(2000, -1900, IMAGE_FIRSTPLAN_BAT).setOrigin(0, 0).setDisplaySize(4000, 4000);
                    batImage.anims.play(AnimationType.FP_BIG_BAT);
                    this.fixedContainer.add(batImage);
                    this.objects.push({ type, object: batImage });
                }
                break;
            case EFirstPlanObject.BAT_GIANT:
                {
                    const batImage = this.scene.add.sprite(this.scene.camera.width - 50, 0, IMAGE_FIRSTPLAN_BAT_GIANT).setOrigin(1, 0);
                    //batImage.anims.play(AnimationType.FP_BIG_BAT);
                    this.fixedContainer.add(batImage);
                    this.objects.push({ type, object: batImage });
                }
                break;
            case EFirstPlanObject.CHAIN:
                {
                    const chainImage = this.scene.add.image(2000, 0, IMAGE_FIRSTPLAN_CHAIN).setOrigin(0, 0);
                    this.fixedContainer.add(chainImage);
                    this.objects.push({ type, object: chainImage });
                }
                break;
            case EFirstPlanObject.CHAIN_SMALL:
                {
                    const chainImage = this.scene.add.image(1800, 0, IMAGE_FIRSTPLAN_CHAIN_SMALL).setOrigin(0, 0);
                    this.fixedContainer.add(chainImage);
                    this.objects.push({ type, object: chainImage });
                }
                break;
            case EFirstPlanObject.COLUMN:
                {
                    const y = this.scene.camera.height < CAMERA_MAX_HEIGHT ? 0 : this.scene.camera.height - CAMERA_MAX_HEIGHT - 30;
                    const image = this.scene.add.image(2000, y, IMAGE_FIRSTPLAN_COLUMN).setOrigin(0, 0);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                }
                break;
            case EFirstPlanObject.FOG:
                {
                    const image = this.scene.add.image(2000, -100, IMAGE_CURSE_FOG).setOrigin(0, 0);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                }
                break;
            case EFirstPlanObject.GHOST:
                {
                    const y = this.scene.camera.height - GROUND_HEIGHT - 50;
                    const image = this.scene.add.image(2000, y, IMAGE_ROOM_OBJECT_GHOST_FRONT).setOrigin(0, 1);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                }
                break;
            case EFirstPlanObject.ROCK:
                {
                    const image = this.scene.add.image(2000, 800, IMAGE_FIRSTPLAN_ROCK).setOrigin(0, 1);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                }
                break;
            case EFirstPlanObject.SPIDER:
                {
                    const image = this.scene.add.image(1000, 0, IMAGE_FIRSTPLAN_SPIDER).setOrigin(0, 1);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                    setTimeout(() => {
                        const index = this.objects.findIndex((object) => object.type === EFirstPlanObject.SPIDER);
                        if (index !== -1) {
                            this.objects.splice(index, 1);
                        }
                        this.fixedContainer.remove(image);
                    }, 6500);
                }
                break;
            case EFirstPlanObject.STONE_FALL:
                {
                    const stoneImage = this.scene.add.image(x, -300, IMAGE_FIRSTPLAN_STONE).setDisplaySize(40, 40);
                    stoneImage.setAngle(getRandomIntFromInterval(0, 360));
                    this.fixedContainer.add(stoneImage);
                    this.objects.push({ type, object: stoneImage });
                }
                break;
            case EFirstPlanObject.STONE_FALL_BIG:
                {
                    const x = getRandomIntFromInterval(this.scene.camera.width / 3, (this.scene.camera.width * 2) / 3);
                    const stoneImage = this.scene.add.image(x, -300, IMAGE_FIRSTPLAN_STONE);
                    stoneImage.setAngle(getRandomIntFromInterval(0, 360));
                    this.fixedContainer.add(stoneImage);
                    this.objects.push({ type, object: stoneImage });
                }
                break;
            case EFirstPlanObject.WATER_DROP:
                {
                    const x = getRandomIntFromInterval(100, 1500);
                    const y = this.scene.camera.height < CAMERA_MAX_HEIGHT ? -20 : this.scene.camera.height - CAMERA_MAX_HEIGHT - 50;
                    const dropImage = this.scene.add.sprite(x, y, IMAGE_FIRSTPLAN_WATER_DROP).setOrigin(0, 0);
                    dropImage.anims.play(AnimationType.FP_WATER_DROP);
                    this.fixedContainer.add(dropImage);
                    this.objects.push({ type, object: dropImage });
                }
                break;
            case EFirstPlanObject.WATER_DROP_BIG:
                {
                    const y = this.scene.camera.height < CAMERA_MAX_HEIGHT ? -50 : this.scene.camera.height - CAMERA_MAX_HEIGHT - 50;
                    const dropImage = this.scene.add.sprite(1600, y, IMAGE_FIRSTPLAN_WATER_DROP).setOrigin(0, 0).setDisplaySize(100, 1800);
                    dropImage.anims.play(AnimationType.FP_WATER_DROP);
                    this.fixedContainer.add(dropImage);
                    this.objects.push({ type, object: dropImage });
                }
                break;
            case EFirstPlanObject.WEB:
                {
                    const y = this.scene.camera.height < CAMERA_MAX_HEIGHT ? 0 : this.scene.camera.height - CAMERA_MAX_HEIGHT - 30;
                    const webImage = this.scene.add.sprite(2000, y, IMAGE_FIRSTPLAN_WEB).setOrigin(0, 0);
                    //dropImage.anims.play(AnimationType.FP_WATER_DROP);
                    this.fixedContainer.add(webImage);
                    this.objects.push({ type, object: webImage });
                }
                break;
            case EFirstPlanObject.WITCH:
                {
                    const image = this.scene.add.image(2000, 800, IMAGE_FIRSTPLAN_WITCH).setOrigin(0, 1);
                    this.fixedContainer.add(image);
                    this.objects.push({ type, object: image });
                }
                break;
            default: {
                console.log("ERROR! No handler for EFirstPlanObject type", type);
            }
        }
    }

    removeObject(type: EFirstPlanObject) {
        const index = this.objects.findIndex((obj) => obj.type === type);
        const { object } = this.objects[index];
        if (index !== -1) {
            object.setVisible(false);
            this.objects.splice(index, 1);
        }
    }

    /** Remove all first plan objects */
    clear() {
        this.objects.forEach((fpObject) => {
            fpObject.object.destroy();
        });
        this.objects = [];
    }
}
