import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'features/GameMods/StandardMode/UI/Timer/BaseTimer';
import { sessionActions } from 'entities/Session';
import style from './HungerTimer.module.css';
import { getSessionPoints, getSessionTime, sessionDataActions } from 'entities/SessionData';
import { hungerModeActions } from 'features/GameMods/HungerMode';

export const HungerTimer = () => {

    const dispatch = useDispatch();
    const [time, setTime] = useState(10_000);
    const globalTime = useSelector(getSessionTime);
    const [spentTime, setSpentTime] = useState(globalTime === 0 ? 0 : globalTime);
    const globalPoints = useSelector(getSessionPoints);

    useEffect(() => {
        if (globalPoints > 0) {
            setTime((prevState) => prevState + 2000);
        }
    }, [globalPoints]);

    useEffect(() => {
        if (time % 1000 === 0) {
            setSpentTime((spentTime) => spentTime + 1);
            dispatch(sessionDataActions.saveSessionTime(spentTime));
        }
    }, [time]);
    
    const endSession = () => {
        dispatch(hungerModeActions.endRound());
        dispatch(sessionActions.endSession());    
    };
    
    return (
        <div className={style.hungerTimerContainer}>
            <BaseTimer time={time} setTime={setTime} onFinishCallback={endSession} />
        </div>
    );
};
