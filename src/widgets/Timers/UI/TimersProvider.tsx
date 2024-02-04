import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import StandardTimer from './StandardTimer';
import SprintTimer from './SprintTimer';
import { sessionDataActions } from 'entities/SessionData';

export const TimersProvider = () => {

    const gameMode = useSelector(getInterfaceGameMode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sessionDataActions.resetSessionPoints());
    }, []);

    return (
        <div>
            {gameMode === 'Стандарт'
                ? <StandardTimer />
                : <SprintTimer />}
        </div>
    );
};
