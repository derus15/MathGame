import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getInterfaceTime } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';
import { RetryFlag } from 'entities/Example';

export const StandardTimer = memo(() => {

    const duration = useSelector(getInterfaceTime);
    const sessionProgress = useSelector(getSessionProgress);
    const [timerTime, setTimerTime] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionProgress && timerTime % 1000 === 0) {
            dispatch(sessionDataActions.saveSessionTime(duration - Math.floor(timerTime / 1000)));
        }
    }, [timerTime]);

    useEffect(() => {
        setTimerTime(duration * 1000);
    }, [duration]);

    const endSession = () => {
        dispatch(sessionDataActions.setSessionTimeFlags());
        dispatch(sessionActions.endSession());
    };

    return (
        <div className="timer">
            <BaseTimer
                onFinishCallback={endSession}
                setTime={setTimerTime}
                time={timerTime}
                startCondition={sessionProgress}
            />
            <RetryFlag />
        </div>
    );
});
