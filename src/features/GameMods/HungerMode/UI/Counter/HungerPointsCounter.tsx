import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHungerPoints } from '../../model/selectors/getHungerPoints';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { getSessionPoints } from 'entities/SessionData';
import { BaseCounter } from './BaseCounter';

export const HungerPointsCounter = () => {

    const [userPoint, setUserPoint] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const globalPoints = useSelector(getSessionPoints);
    const hungerPoints = useSelector(getHungerPoints);
    const dispatch = useDispatch();

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
        dispatch(hungerModeActions.endRound());
        dispatch(hungerModeActions.incrementRound());
    };
    
    return (
        <BaseCounter incrementArg={userPoint} targetArg={hungerPoints} mark="|" callback={endRound} />
    );
};
