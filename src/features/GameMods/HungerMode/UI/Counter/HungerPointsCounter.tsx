import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { getCurrentRound } from '../../model/selectors/getCurrentRound';
import { RetryFlag } from 'entities/Example';
import style from './Counter.module.css';
import { useFirstRender } from 'shared/lib/hooks/useFirstRender';

export const HungerPointsCounter = () => {

    const [userPoint, setUserPoint] = useState(0);
    const isFirstRender = useFirstRender();

    const dispatch = useDispatch();
    const currentRounds = useSelector(getCurrentRound);
    const globalPoints = useSelector(getSessionPoints);
    const exampleStep = 2;
    const hungerPoints = exampleStep * currentRounds + exampleStep;

    useEffect(() => {
        if (!isFirstRender) {
            setUserPoint((prev) => prev + 1);
        }
    }, [globalPoints]);

    const endRound = () => {
        setUserPoint(0);
        dispatch(sessionDataActions.startNewRoundTime());
        dispatch(hungerModeActions.endRound());
        dispatch(sessionDataActions.incrementSessionHungerRounds());
        dispatch(hungerModeActions.incrementRound());
    };

    return (
        <div className={style.counterRetryContainer}>
            <BaseCounter incrementArg={userPoint} targetArg={hungerPoints} mark="|" callback={endRound} />
            <RetryFlag />
        </div>
    );
};
