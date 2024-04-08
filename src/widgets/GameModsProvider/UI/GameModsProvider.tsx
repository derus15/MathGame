import React, { useEffect } from 'react';
import { StandardMode } from 'features/GameModes/StandardMode';
import style from './GameModsProvider.module.css';
import { SprintMode } from 'features/GameModes/SprintMode';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';

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
