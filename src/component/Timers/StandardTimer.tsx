import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activitiesSessionActions } from 'redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from 'redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from 'redux/types';
import Timer from './Timer';
import { getTime } from '../Interface';

const StandardTimer = () => {

    const duration = useSelector(getTime);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const [seconds, setSeconds] = useState(duration);
    const [milliseconds, setMilliseconds] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (sessionProgress) {
            // сохранение времени в permanentMode
            dispatch(sessionDataActions.saveTime(duration - seconds));
        } else {
            // слежение за выставленным игроком временем
            setSeconds(duration);
        }
    }, [seconds, duration]);
    
    useEffect(() => {
        if (seconds === 0 && milliseconds === 0) {
            dispatch(activitiesSessionActions.endSession());
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
