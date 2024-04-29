import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from './BaseTimer';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getInterfaceTime } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';

export const StandardTimer = memo(() => {

    const duration = useSelector(getInterfaceTime);
    const sessionProgress = useSelector(getSessionProgress);
    const [timerTime, setTimerTime] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionProgress) {
            // сохранение времени в permanentMode
            dispatch(sessionDataActions.saveSessionTime(duration - Math.floor(timerTime)));
        } else {
            // слежение за выставленным игроком временем
            setTimerTime(duration);
        }
    }, [timerTime, duration]);
    
    const endSession = () => {
        dispatch(sessionActions.endSession());
    };

    return (
        <div className="timer">
            <BaseTimer
                onFinishCallback={endSession}
                setTime={setTimerTime}
                time={timerTime}
            />
        </div>
    );
});
