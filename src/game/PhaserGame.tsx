import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import StartGame from './main';
import { EventBus, EventType } from './EventBus';

import {
    ERoomStatus,
    LobbyPlayer,
    Player,

} from '../types';

export interface IRefPhaserGame {
    game: Phaser.Game | null;
    scene: Phaser.Scene | null;
}

interface IProps {
    currentActiveScene?: (scene_instance: Phaser.Scene) => void; // is it always undefined? do I need it?
}

export const PhaserGame = forwardRef<IRefPhaserGame, IProps>(function PhaserGame({currentActiveScene}, ref) {
    console.log('PhaserGame')
    const game = useRef<Phaser.Game | null>(null!);

    
    useLayoutEffect(() => {
        if (game.current === null) {
            game.current = StartGame('game-container');

            if (typeof ref === 'function') {
                ref({ game: game.current, scene: null });
            } else if (ref) {
                ref.current = { game: game.current, scene: null };
            }
        } else {
            console.log('useLayoutEffect game.current NOT NULL');
        }

        return () => {
            if (game.current) {
                game.current.destroy(true);
                if (game.current !== null) {
                    game.current = null;
                }
            }
        };
    }, [ref]);

    useEffect(() => {
        EventBus.on('current-scene-ready', (scene_instance: Phaser.Scene) => {


            if (typeof ref === 'function') {
                ref({ game: game.current, scene: scene_instance });
            } else if (ref) {
                ref.current = {
                    game: game.current,
                    scene: scene_instance,
                };
            }
        });

        return () => {
            EventBus.removeListener('current-scene-ready');
        };
    }, [currentActiveScene, ref]);

    return <div id="game-container" style={{ backgroundColor: 'black' }}></div>;
});
