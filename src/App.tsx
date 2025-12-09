import * as React from 'react';

import Game from './components/Game';
import { PlayersContextProvider } from './providers/PlayersContextProvider';
import ErrorBoundary from './components/ErrorBoundary';
import { GameContextProvider } from './providers/GameContextProvider';
export default function App() {
    console.log('APP')
    return (
        <ErrorBoundary fallback={<p>SMTH WENT WRONG!</p>}>
                <PlayersContextProvider>
                    <GameContextProvider>
                        <Game />
                    </GameContextProvider>
                </PlayersContextProvider>
        </ErrorBoundary>
    );
}
