import React, { useEffect } from 'react';
import style from './GameModsProvider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';
import { StandardMode } from 'features/GameMods/StandardMode';
import { SprintMode } from 'features/GameMods/SprintMode';
import { HungerMode, hungerModeActions } from 'features/GameMods/HungerMode';
import { StateSchema } from 'app/Providers/Store/types';
import { exampleActions } from 'entities/Example';

export const GameModsProvider = () => {

    const gameMode = useSelector(getInterfaceGameMode);
    const dispatch = useDispatch();
    const isRetry = useSelector((state: StateSchema) => state.example.isRetry);
    
    const gameModeList: Record<string, React.ReactElement> = {
        'Стандарт': <StandardMode />,
        'Спринт': <SprintMode />,
        'Голод': <HungerMode />,
    };

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        !isRetry ? dispatch(exampleActions.generateSeed()) : null;
        dispatch(sessionDataActions.resetSessionPoints());
        dispatch(sessionDataActions.resetSessionTime());
        dispatch(hungerModeActions.endRound());
        dispatch(hungerModeActions.setRounds(0));
    }, []);

    return (
        <div className={style.gameModeContainer}>
            {gameModeList[gameMode]}
        </div>
    );
};
