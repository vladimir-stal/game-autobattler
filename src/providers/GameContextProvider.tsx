import { createContext, useEffect, useRef, useState } from 'react';
import {EGameStatus,ERoomStatus,LobbyPlayer} from '../types';


interface IUseGame {
    status: string; // game status for the client
    roomStatus: ERoomStatus; // global game status (game host status)
    lobbyPlayers: LobbyPlayer[];
};

export const GameContext = createContext<IUseGame>({
    status: EGameStatus.MAIN_MENU,
    roomStatus: ERoomStatus.MAIN_MENU,
    lobbyPlayers: [],
});

export function GameContextProvider({ children }: { children: React.ReactNode }) {
    const game = useGameContextSetup();

    return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}

function useGameContextSetup(): IUseGame {
    const [status, setStatus] = useState<EGameStatus>(EGameStatus.MAIN_MENU);
    const [roomStatus, setRoomStatus] = useState<ERoomStatus>(ERoomStatus.MAIN_MENU);
    const [lobbyPlayers, setLobbyPlayers] = useState<LobbyPlayer[]>([]);

    const isHostRef = useRef(false);

    return {
        status,
        roomStatus,
        lobbyPlayers
    };
}
