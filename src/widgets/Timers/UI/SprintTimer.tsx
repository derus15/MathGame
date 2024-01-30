import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { sessionDataActions } from 'redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from 'app/Providers/Store/types';
import { getNumber } from '../../Interface';
import { getSessionProgress, sessionActions } from 'entities/Session';

const SprintTimer = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const duration = useSelector(getNumber);
    const [seconds, setSeconds] = useState(0);
    const userCounter = useSelector((state: StateSchema) => state.sessionData.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= userCounter) {
            dispatch(sessionActions.endSession());
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
