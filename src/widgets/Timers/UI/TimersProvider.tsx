import React from 'react';
import { useSelector } from 'react-redux';
import { getGameMod } from 'widgets/Interface';
import StandardTimer from './StandardTimer';
import SprintTimer from './SprintTimer';

export const TimersProvider = () => {

    const gameMode = useSelector(getGameMod);

    return (
        <div>
            {gameMode === 'Стандарт'
                ? <StandardTimer />
                : <SprintTimer />}
        </div>
    );
};
