import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'features/GameMods/StandardMode/UI/Timer/BaseTimer';
import { sessionActions } from 'entities/Session';
import style from './HungerTimer.module.css';
import { getSessionPoints, getSessionTime, sessionDataActions } from 'entities/SessionData';
import { hungerModeActions } from 'features/GameMods/HungerMode';
import { useCalculateHungerTime } from '../../../hooks/useCalculateHungerTime/useCalculateHungerTime';
import { getExampleAnswer, getExampleSign } from 'entities/Example';

export const HungerTimer = () => {

    const dispatch = useDispatch();
    const [time, setTime] = useState(10_000);
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [isStartNewRound, setIsStartNewRound] = useState(false);
    const [hungerTime, setHungerTime] = useState(2);

    const globalTime = useSelector(getSessionTime);
    const globalPoints = useSelector(getSessionPoints);
    const answer = useSelector(getExampleAnswer);
    const sign = useSelector(getExampleSign);

    useEffect(() => {

        let timeout: ReturnType<typeof setTimeout>;
        setHungerTime(useCalculateHungerTime(answer, sign));

        if (globalPoints > 0 && isStartNewRound) {

            setIsShowTooltip(true);
            timeout = setTimeout(() => {
                setIsShowTooltip(false);
            }, 400);

            setTime((prevState) => prevState + (hungerTime * 1000));
        }

        return () => clearTimeout(timeout);
    }, [globalPoints]);

    useEffect(() => {
        if (time % 1000 === 0 && isStartNewRound) {
            dispatch(sessionDataActions.saveSessionTime(globalTime + 1));
        }
    }, [time]);
    
    const endSession = () => {
        dispatch(sessionActions.unexpectedEnd());
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
            {isShowTooltip && <div className={style.hungerCounter}>+ {hungerTime}</div>}
        </div>
    );
};
