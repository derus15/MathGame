import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'helpers/classNames/classNames';
import { activitiesSessionActions } from 'redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from 'redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from 'redux/types';
import { getNumber } from '../Interface';

const SprintTimer = () => {

    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const duration = useSelector(getNumber);
    const [seconds, setSeconds] = useState(0);
    const userCounter = useSelector((state: StateSchema) => state.sessionData.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= userCounter) {
            dispatch(activitiesSessionActions.endSession());
        }
    }, [userCounter]);

    useEffect(() => {
        if (sessionProgress) {
            dispatch(sessionDataActions.saveTime(seconds));
        }
    }, [seconds]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (sessionProgress) {
            interval = setInterval(() => {
                setSeconds((time) => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [sessionProgress]);

    return (
        <div className={classNames('timer', { timerActive: sessionProgress }, [])}>
            {userCounter} | {duration}
        </div>
    );
};

export default SprintTimer;
