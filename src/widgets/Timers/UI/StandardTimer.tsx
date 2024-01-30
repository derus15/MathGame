import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from './Timer';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getInterfaceTime } from 'widgets/Interface';
import { sessionDataActions } from 'entities/SessionData';

const StandardTimer = () => {

    const duration = useSelector(getInterfaceTime);
    const sessionProgress = useSelector(getSessionProgress);
    const [seconds, setSeconds] = useState(duration);
    const [milliseconds, setMilliseconds] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionProgress) {
            // сохранение времени в permanentMode
            dispatch(sessionDataActions.saveSessionTime(duration - seconds));
        } else {
            // слежение за выставленным игроком временем
            setSeconds(duration);
        }
    }, [seconds, duration]);
    
    useEffect(() => {
        if (seconds === 0 && milliseconds === 0) {
            dispatch(sessionActions.endSession());
        }
    }, [milliseconds]);

    return (
        <Timer
            setMilliseconds={setMilliseconds}
            milliseconds={milliseconds}
            setSeconds={setSeconds}
            seconds={seconds}
        />
    );
};

export default StandardTimer;
