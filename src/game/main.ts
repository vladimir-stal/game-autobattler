//import { Boot } from './scenes/Boot';
//import { Game as MainGame } from './scenes/Game';
//import { MainMenu } from './scenes/MainMenu';
import { AUTO, Game, Scale, ScaleModes } from "phaser";
import { MainMenuScene } from "./scenes/MainMenuScene";
//import { GameMultScene } from './scenes/GameMultScene';
import { GameLoadingScene } from "./scenes/GameLoadingScene";
import { GameScene } from "./scenes/GameScene";
//import { LobbyScene } from "./scenes/LobbyScene";
import { LobbyLoadingScene } from "./scenes/LobbyLoadingScene";
import { ResourceLoadScene } from "./scenes/ResourceLoadScene";
//import { Preloader } from './scenes/Preloader';
import BBCodeTextPlugin from "phaser3-rex-plugins/plugins/bbcodetext-plugin.js";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: "100%",
    height: "100%",
    parent: "game-container",
    backgroundColor: "000000", //"#028af8",
    scale: {
        mode: Phaser.Scale.RESIZE, //Scale.ScaleModes.RESIZE,
        parent: "game-container",
        width: "100%",
        height: "100%",
        //autoCenter: Scale.Center.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { x: 0, y: 400 },
            debug: false,
        },
    },
    plugins: {
        global: [
            {
                key: "rexBBCodeTextPlugin",
                plugin: BBCodeTextPlugin,
                start: true,
            },
        ],
    },
    // callbacks: {
    //     postBoot: function (game) {
    //         game.domContainer.style.pointerEvents = "none";
    //     },
    // },
    scene: [MainMenuScene, LobbyLoadingScene, GameScene, GameLoadingScene, ResourceLoadScene],
};

const StartGame = (parent: string) => {
    const game = new Game({ ...config, parent });
    // game.scale.addListener(
    //     Phaser.Scale.Events.RESIZE,
    //     (gameSize, baseSize, displaySize, previousWidth, previousHeight) => {
    //         console.log(
    //             'GAME RESIZED',
    //             gameSize,
    //             baseSize,
    //             displaySize,
    //             previousWidth,
    //             previousHeight
    //         );
    //     }
    // );
    return game;
};

export default StartGame;
