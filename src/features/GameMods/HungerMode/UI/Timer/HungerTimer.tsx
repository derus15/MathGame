import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { getSessionProgress, sessionActions } from 'entities/Session';
import style from './HungerTimer.module.css';
import { sessionDataActions } from 'entities/SessionData';
import { hungerModeActions } from '../../model/slice/hungerModeSlice';
import { HungerTooltip } from '../Tooltip/HungerTooltip';
import { useFirstRender } from 'shared/lib/hooks/useFirstRender';

export const HungerTimer = () => {

    const dispatch = useDispatch();
    const [time, setTime] = useState(10_000);
    const isFirstRender = useFirstRender();

    const sessionProgress = useSelector(getSessionProgress);
    
    const endSession = () => {
        dispatch(sessionActions.unexpectedEnd('Время истекло'));
        dispatch(hungerModeActions.endRound());
        dispatch(sessionDataActions.setSessionTimeFlags());
        dispatch(sessionActions.endSession());
        dispatch(sessionDataActions.calculateSessionTime());
        dispatch(sessionDataActions.calculateEPS());
    };

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
            <HungerTooltip setTime={setTime} isFirstRender={isFirstRender} />
        </div>
    );
};
