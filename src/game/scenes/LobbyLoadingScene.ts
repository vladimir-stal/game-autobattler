import { AnimationType, EScene } from "../../types";
import { ANIMATION_COMPLETE } from "../consts";
import { Cameras, GameObjects, Scene } from "phaser";
import { getRandomArrayItem } from "../utils/commonUtils";

//const IMAGE_LOBBY_LOADING = "IMAGE_LOBBY_LOADING";
//const IMAGE_LOBBY_FOX_SMILE = "IMAGE_LOBBY_FOX_SMILE";

export class LobbyLoadingScene extends Scene {
    camera: Cameras.Scene2D.Camera;
    background: GameObjects.Image;
    titleText: GameObjects.Text;
    scrollText: GameObjects.Text;
    cameraControls: Cameras.Controls.SmoothedKeyControl;
    loadingImage: GameObjects.Sprite;

    pointer: { x: number; y: number };

    hintText: GameObjects.Text;

    hints: string[];

    timeoutId: number;

    constructor() {
        super(EScene.LOBBY_LOADING);
    }

    preload() {
        // this.load.spritesheet(IMAGE_LOBBY_LOADING, "assets/sprites/background/fox_loading.png", {
        //     frameWidth: 1000,
        //     frameHeight: 1500,
        // });
        // this.load.spritesheet(IMAGE_LOBBY_FOX_SMILE, "assets/sprites/background/fox_smile.png", {
        //     frameWidth: 400,
        //     frameHeight: 600,
        // });
    }

    // update() {
    //     const status = this.scene.getStatus(EScene.LOBBY_LOADING);
    //     console.log("STATUS:" + status);
    //     if (status !== 5) {
    //         console.log("STATUS IS NOT 5 >>" + status);
    //     }
    // }

    create() {
        this.initHints();

        this.events.on("create", () => {
            console.log("SCENE LOADING IS CREATED");
        });

        this.events.on("destroy", () => {
            console.log("SCENE LOADING IS DESTROYED");
        });

        this.events.on("pause", () => {
            console.log("SCENE LOADING IS PAUSED");
        });

        this.events.on("shutdown", () => {
            console.log("SCENE LOADING IS shutdown");
        });

        this.events.on("sleep", () => {
            console.log("SCENE LOADING IS sleep");
        });

        this.events.on("start", () => {
            console.log("SCENE LOADING IS start");
        });

        // this.anims.create({
        //     key: AnimationType.LOBBY_LOADING,
        //     defaultTextureKey: IMAGE_LOBBY_LOADING,
        //     frames: [
        //         { frame: 0, duration: 5000 },
        //         { frame: 1, duration: 100 },
        //         { frame: 2, duration: 100 },
        //         { frame: 3, duration: 100 },
        //         { frame: 4, duration: 1000 },
        //         { frame: 3, duration: 100 },
        //         { frame: 2, duration: 100 },
        //         { frame: 1, duration: 100 },
        //     ],
        //     repeat: -1,
        // });

        // this.anims.create({
        //     key: AnimationType.LOBBY_FOX_SMILE,
        //     defaultTextureKey: IMAGE_LOBBY_FOX_SMILE,
        //     frames: [
        //         { frame: 0, duration: 50 },
        //         { frame: 1, duration: 50 },
        //         { frame: 2, duration: 50 },
        //         { frame: 3, duration: 50 },
        //         { frame: 4, duration: 50 },
        //         { frame: 5, duration: 100 },
        //         //{ frame: 6, duration: 100 },
        //     ],
        // });

        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;

        // this.loadingImage = this.add
        //     .sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_LOADING)
        //     .setDisplaySize(400, 600)
        //     .setOrigin(0.5, 0.5);
        // this.loadingImage.anims.play(AnimationType.LOBBY_LOADING);

        const text = this.add
            .text(screenCenterX, screenCenterY - 200, "ЗАГРУЗКА...", { fontFamily: "Arial Black", fontSize: 24, color: "#ffffff" })
            .setOrigin(0.5, 0); //LOADING...

        this.add
            .text(screenCenterX, screenCenterY - 150, "Подождите. Загрузка ресурсов может занять несколько минут.", {
                fontFamily: "Arial Black",
                fontSize: 16,
                //fontStyle: "bold",
                color: "#dddddd",
            })
            .setOrigin(0.5, 0); //LOADING...

        this.hintText = this.add
            .text(screenCenterX, screenCenterY, getRandomArrayItem(this.hints), {
                fontFamily: "Arial Black",
                fontSize: 20,
                color: "#dddddd",
            })
            .setOrigin(0.5, 0)
            .setAlpha(0); //LOADING...

        //this.changeHint();
        setTimeout(() => {
            this.tweens.add({
                targets: this.hintText,
                //x: { from: 2000, to: -1000 },
                //y: { from: -1000, to: 2000 },
                alpha: { from: 0, to: 1 },
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 800,
                repeat: 0, // -1: infinity
                yoyo: false,
            });
            //this.hintText.setVisible(true);
        }, 1000);

        setTimeout(() => {
            this.changeHint();
        }, 8000);

        //EventBus.on(EventType.GAME_STATUS_CHANGED, (status: EGameStatus) => {
        //if (status === EGameStatus.LOBBY) {
        //this.loadingImage.setVisible(false);

        // const loadedImage = this.add.sprite(screenCenterX, screenCenterY - 100, IMAGE_LOBBY_FOX_SMILE).setOrigin(0.5, 0.5);
        // loadedImage.anims.play(AnimationType.LOBBY_FOX_SMILE);

        // const rect = this.add.rectangle(2000, -1000, 3000, 3000, 0);
        // rect.setRotation(0.785);

        // loadedImage.on(ANIMATION_COMPLETE, () => {
        //     //loadedImage.destroy();
        //     //this.scene.stop();
        //     //this.scene.start(EScene.LOBBY);
        //     this.tweens.add({
        //         targets: rect,
        //         //x: "-=1",
        //         // x: '+=1',
        //         // x: '-=1',
        //         // x: '*=1',
        //         // x: '/=1',
        //         // x: 'random(0.25, 0.75)',
        //         // x: 'int(10, 100)',
        //         // x: [100, 300, 200, 600],
        //         x: { from: 2000, to: -1000 },
        //         y: { from: -1000, to: 2000 },
        //         // x: { start: 0, to: 1 },
        //         // x: { start: value0, from: value1, to: value2 },
        //         // x: {
        //         //      getActive: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
        //         //      getStart: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
        //         //      getEnd: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; }
        //         // },
        //         ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
        //         duration: 1700,
        //         repeat: 0, // -1: infinity
        //         yoyo: false,

        //         // interpolation: null,
        //     });
        // });

        //setTimeout(() => {
        this.scene.launch(EScene.RESOURCE_LOAD);
        //}, 1000);

        // setTimeout(() => {
        //     this.scene.stop();
        //     //this.scene.start(EScene.LOBBY);
        //     this.scene.start(EScene.GAME);
        // }, 1000);
        //}
        //});

        //EventBus.emit(EventType.JOIN_LOBBY);
    }

    changeHint() {
        this.tweens.add({
            targets: this.hintText,
            alpha: { from: 1, to: 0 },
            ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 800,
            repeat: 0, // -1: infinity
            yoyo: false,
        });

        this.timeoutId = setTimeout(() => {
            if (this.scene.getStatus(EScene.LOBBY_LOADING) !== 5) {
                return;
            }

            this.hintText.setText(getRandomArrayItem(this.hints));

            this.tweens.add({
                targets: this.hintText,
                alpha: { from: 0, to: 1 },
                ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 800,
                repeat: 0, // -1: infinity
                yoyo: false,
            });

            setTimeout(() => {
                this.changeHint();
            }, 8000);
        }, 900);
    }

    initHints() {
        this.hints = [];

        this.hints.push(
            "ПОДСКАЗКА: Некоторые предметы имеют ограничения на класс персонажа, который может их носить.\n " +
                "Например, мечи могут носить только персонажи с базовым классом Воин или Мастер, а посохи - Маг или Мистик.",
        );

        this.hints.push("ПОДСКАЗКА: Соединив два одинаковых предмета или навыка,\nвы получите более мощную версию этого предмета или навыка.");

        this.hints.push(
            "ПОДСКАЗКА: Во время боя герои атакуют по очереди. В свой ход герой сначала активирует свой навык,\n" +
                "а после проводит базовую атаку. Если навыка нет - только базовую атаку.",
        );

        this.hints.push("ПОДСКАЗКА: Каждый навык привязан к конкретному базовуму классу.\nИ только герой с этим классом может использовать этот навык.");

        this.hints.push(
            "ПОДСКАЗКА: Игра в жанре автобатлер. Во время фазы подготовки усиливайте своих героев.\nА во время фазы автобоя наблюдайте за результатами своего выбора.",
        );

        this.hints.push(
            "ПОДСКАЗКА: Чтобы экипировать предмет или навык, кликните <Двигать>,<Взять> или <Купить>,\n" +
                "а затем кликните на героя. Чтобы отменить выбор нажмите ПКМ.",
        );

        this.hints.push(
            "ПОДСКАЗКА: После боя, герои получают опыт. Опыт увеличивает уровень героя.\n" +
                "При увеличении уровня у героя увеличиваются статы.\n" +
                "При достижении 4-го уровня герой может быть улучшен до мультикласса.",
        );

        this.hints.push("ПОДСКАЗКА: Герои мультикласса имеют 2 базовых класса\n" + "и могут экипировать предметы и навыки обоих классов.");
    }
}
