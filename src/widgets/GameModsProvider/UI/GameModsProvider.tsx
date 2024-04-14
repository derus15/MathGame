import React, { useEffect } from 'react';
import style from './GameModsProvider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';
import { StandardMode } from 'features/GameMods/StandardMode';
import { SprintMode } from 'features/GameMods/SprintMode';

interface GameModsProviderProps {
    startSessionHandler: () => void,
}

export const GameModsProvider = ({ startSessionHandler }: GameModsProviderProps) => {

    const gameMode = useSelector(getInterfaceGameMode);
    const dispatch = useDispatch();

    const gameModeList: Record<string, React.ReactElement> = {
        'Стандарт': <StandardMode startSessionHandler={startSessionHandler} />,
        'Спринт': <SprintMode startSessionHandler={startSessionHandler} />,
    };

    useEffect(() => {
        dispatch(sessionDataActions.resetSessionPoints());
        dispatch(sessionDataActions.resetSessionTime());
    }, []);

    return (
        <div className={style.gameModeContainer}>
            {gameModeList[gameMode]}
        </div>
    );
};
