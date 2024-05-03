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
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [isStartNewRound, setIsStartNewRound] = useState(false);

    const globalTime = useSelector(getSessionTime);
    const [spentTime, setSpentTime] = useState(globalTime === 0 ? 0 : globalTime);
    const globalPoints = useSelector(getSessionPoints);

    useEffect(() => {

        let timeout: ReturnType<typeof setTimeout>;

        if (globalPoints > 0 && isStartNewRound) {

            setIsShowTooltip(true);
            timeout = setTimeout(() => {
                setIsShowTooltip(false);
            }, 400);

            setTime((prevState) => prevState + 2000);
        }

        return () => clearTimeout(timeout);
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

    useEffect(() => {
        setIsStartNewRound(true);
    }, []);

    return (
        <div className={style.hungerTimerContainer}>
            <div className={style.hungerTimer}>
                <BaseTimer time={time} setTime={setTime} onFinishCallback={endSession} />
            </div>
            {isShowTooltip && <div className={style.hungerCounter}>+ 2</div>}
        </div>
    );
};
