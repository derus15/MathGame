import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHungerPoints } from '../../model/selectors/getHungerPoints';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { getSessionPoints } from 'entities/SessionData';
import { getIsRoundProgress } from '../../model/selectors/getIsRoundProgress';

export const HungerPointsCounter = () => {

    const [userPoint, setUserPoint] = useState(0);
    const [isStartNewRound, setIsStartNewRound] = useState(false);

    const globalPoints = useSelector(getSessionPoints);
    const hungerPoints = useSelector(getHungerPoints);
    const isRoundProgress = useSelector(getIsRoundProgress);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isStartNewRound) {
            setUserPoint((prev) => prev + 1);
        }
    }, [globalPoints]);

    useEffect(() => {
        if (userPoint >= hungerPoints && isRoundProgress) {
            setUserPoint(0);
            dispatch(hungerModeActions.endRound());
            dispatch(hungerModeActions.incrementRound());
        }
    }, [userPoint]);

    useEffect(() => {
        setIsStartNewRound(true);
    }, []);

    return (
        <div>
            {userPoint} | {hungerPoints}
        </div>
    );
};
