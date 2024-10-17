import React, { useEffect, useState } from 'react';
import { ResultItem } from '../ResultItem/ResultItem';
import { useSelector } from 'react-redux';
import style from './ResultStat.module.css';
import {
    getSessionEPS,
    getSessionHungerRounds,
    getSessionPoints,
    getSessionTime, 
} from 'entities/SessionData';
import { getInitialSeed } from 'entities/Example';
import { copyTextToClipboard } from 'shared/lib/copyTextToClipboard/copyTextToClipboard';
import { toast } from 'react-toastify';
import { getParamsGameMode } from 'entities/SessionParams';

export const ResultStat = () => {

    const [numberInitialState, setNumberInitialState] = useState(0);

    const gameMode = useSelector(getParamsGameMode);
    const numberResult = useSelector(getSessionPoints);
    const sessionTime = useSelector(getSessionTime);
    const round = useSelector(getSessionHungerRounds);
    const seed = useSelector(getInitialSeed);
    const eps = useSelector(getSessionEPS);

    useEffect(() => {
        setNumberInitialState(numberResult);
    }, []);

    const handleCopyToClipboard = (text: string) => {
        copyTextToClipboard(text);
        toast.error('Сид скопирован');
    };

    return (
        <div className={style.result}>
            <ResultItem title="Примеров решено:" value={numberResult} />
            {gameMode === 'Голод' && <ResultItem title="Раундов завершено:" value={round} />}
            <ResultItem title="Ваше время:" value={sessionTime} isTime />
            <ResultItem title="ПВС:" value={eps} description="Примеров в секунду" isEps />
            <ResultItem
                isSeed
                title="Сид:" 
                value={seed}
                onClick={() => handleCopyToClipboard(seed)}
                className={style.resultSeed}
            />
        </div>
    );
};
