import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHungerPoints } from '../../model/selectors/getHungerPoints';
import { hungerModeActions } from '../../model/slice/HungerModeSlice';
import { getSessionPoints } from 'entities/SessionData';
import { getIsRoundProgress } from '../../model/selectors/getIsRoundProgress';

export const HungerPointsCounter = () => {

    const [point, setPoint] = useState(0);

    const globalPoints = useSelector(getSessionPoints);
    const hungerPoints = useSelector(getHungerPoints);
    const isRoundProgress = useSelector(getIsRoundProgress);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isRoundProgress) {
            setPoint((prev) => prev + 1);
        }
    }, [globalPoints]);

    useEffect(() => {
        if (point >= hungerPoints && isRoundProgress) {
            setPoint(0);
            dispatch(hungerModeActions.endRound());
            dispatch(hungerModeActions.incrementRound());
        }
    }, [point]);

    return (
        <div>
            {point} | {hungerPoints}
        </div>
    );
};
