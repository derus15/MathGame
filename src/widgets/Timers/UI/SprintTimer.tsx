import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getInterfaceNumber } from 'widgets/Interface';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';

const SprintTimer = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const duration = useSelector(getInterfaceNumber);
    const [seconds, setSeconds] = useState(0);
    const userCounter = useSelector(getSessionPoints);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= userCounter) {
            dispatch(sessionActions.endSession());
        }
    }, [userCounter]);

    useEffect(() => {
        if (sessionProgress) {
            dispatch(sessionDataActions.saveSessionTime(seconds));
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
