import React, { createContext } from 'react';
import { Player } from '../types';

export const PlayersContext = createContext<Player[]>([]);

export function PlayersContextProvider({ children }: { children: React.ReactNode }) {
    const players = usePlayersContextSetup();

    return <PlayersContext.Provider value={players}>{children}</PlayersContext.Provider>;
}

/**
 * This hook sets up listeners for each player so that their state is kept up to date and can be consumed elsewhere in the app
 * One improvement worth considering is using a map instead of an array
 */
function usePlayersContextSetup(): Player[] {
    const [players, setPlayers] = React.useState<Player[]>([]);

    return players;
}
