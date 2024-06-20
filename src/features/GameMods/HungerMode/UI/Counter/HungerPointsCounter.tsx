import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { getCurrentRound } from 'features/GameMods/HungerMode';
import { RetryFlag } from 'entities/Example';
import style from '../HungerMode.module.css';

export const HungerPointsCounter = () => {

    const [userPoint, setUserPoint] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const dispatch = useDispatch();
    const currentRounds = useSelector(getCurrentRound);
    const globalPoints = useSelector(getSessionPoints);
    const exampleStep = 2;
    const hungerPoints = exampleStep * currentRounds + exampleStep;

    useEffect(() => {
        if (isMounted) {
            setUserPoint((prev) => prev + 1);
        }
    }, [globalPoints]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const endRound = () => {
        setUserPoint(0);
        dispatch(sessionDataActions.startNewRoundTime());
        dispatch(hungerModeActions.endRound());
        dispatch(hungerModeActions.incrementRound());
    };

    return (
        <div className={style.retryContainer}>
            <BaseCounter incrementArg={userPoint} targetArg={hungerPoints} mark="|" callback={endRound} />
            <RetryFlag />
        </div>
    );
};
