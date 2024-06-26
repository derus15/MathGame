import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { getSessionProgress, sessionActions } from 'entities/Session';
import style from './HungerTimer.module.css';
import { getSessionTime, sessionDataActions } from 'entities/SessionData';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { HungerTooltip } from '../Tooltip/HungerTooltip';

export const HungerTimer = () => {

    const dispatch = useDispatch();
    const [time, setTime] = useState(10_000);
    const [isMounted, setIsMounted] = useState(false);

    const globalTime = useSelector(getSessionTime);
    const sessionProgress = useSelector(getSessionProgress);

    useEffect(() => {
        if (time % 1000 === 0 && isMounted) {
            dispatch(sessionDataActions.saveSessionTime(globalTime + 1));
        }
    }, [time]);
    
    const endSession = () => {
        dispatch(sessionActions.unexpectedEnd('Время истекло'));
        dispatch(hungerModeActions.endRound());
        dispatch(sessionDataActions.setSessionTimeFlags());
        dispatch(sessionActions.endSession());
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={style.hungerTimerContainer}>
            <div className={style.hungerTimer}>
                <BaseTimer
                    time={time}
                    setTime={setTime}
                    onFinishCallback={endSession}
                    startCondition={sessionProgress}
                />
            </div>
            <HungerTooltip setTime={setTime} isMounted={isMounted} />
        </div>
    );
};
