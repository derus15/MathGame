import React, { useEffect } from 'react';
import style from './GameModsProvider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sessionDataActions } from 'entities/SessionData';
import { StandardMode } from 'features/GameMods/StandardMode';
import { SprintMode } from 'features/GameMods/SprintMode';
import { HungerMode } from 'features/GameMods/HungerMode';
import { exampleActions, getIsRetrySession } from 'entities/Example';
import { getParamsGameMode } from 'entities/SessionParams';

export const GameModsProvider = () => {

    const gameMode = useSelector(getParamsGameMode);
    const dispatch = useDispatch();
    const isRetry = useSelector(getIsRetrySession);
    
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
        dispatch(sessionDataActions.resetSessionHungerRounds());
        return () => {
            dispatch(exampleActions.resetIsPersonalSeed());
        };
    }, []);

    return (
        <div className={style.gameModeContainer}>
            {gameModeList[gameMode]}
        </div>
    );
};
