import React from 'react';
import { ResultItem } from 'pages/Result/UI/ResultItem/ResultItem';
import { useSelector } from 'react-redux';
import { getInterfaceGameMode } from 'widgets/Interface';
import { getSessionPoints, getSessionTime } from 'entities/SessionData';
import { getCurrentRound } from 'features/GameMods/HungerMode';
import { getInitialSeed } from 'entities/Example';
import { useCalculateEPS } from 'shared/lib/hooks/useCalculateEPS';

export const ResultStat = () => {

    const gameMode = useSelector(getInterfaceGameMode);
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const round = useSelector(getCurrentRound);
    const seed = useSelector(getInitialSeed);
    const eps = useCalculateEPS();
    console.log('resultStat');
    return (
        <div>
            <ResultItem title="Примеров решено:" value={numberResult} />
            {gameMode === 'Голод' && <ResultItem title="Раундов завершено:" value={round} />}
            <ResultItem title="Ваше время:" value={sessionTime} isTime />
            <ResultItem title="ПВС:" value={eps} description="Примеров в секунду" isEPS />
            <ResultItem title="Сид:" value={seed} />
        </div>
    );
};
