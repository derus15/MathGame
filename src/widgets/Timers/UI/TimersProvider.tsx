import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import StandardTimer from './StandardTimer';
import SprintTimer from './SprintTimer';
import { sessionDataActions } from 'entities/SessionData';

export const TimersProvider = memo(() => {

    const gameMode = useSelector(getInterfaceGameMode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sessionDataActions.resetSessionPoints());
        dispatch(sessionDataActions.resetSessionTime());
    }, []);

    return (
        <div>
            {gameMode === 'Стандарт'
                ? <StandardTimer />
                : <SprintTimer />}
        </div>
    );
});
