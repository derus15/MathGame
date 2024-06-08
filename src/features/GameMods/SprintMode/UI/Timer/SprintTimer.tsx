import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getInterfaceNumber } from 'widgets/Interface';
import { getSessionPoints, getSessionTime, sessionDataActions } from 'entities/SessionData';
import { BaseCounter } from 'features/GameMods/HungerMode/UI/Counter/BaseCounter';
import { RetryFlag } from 'entities/Example';

export const SprintTimer = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const duration = useSelector(getInterfaceNumber);
    const seconds = useSelector(getSessionTime);
    const userCounter = useSelector(getSessionPoints);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
            
        if (sessionProgress) {

            interval = setInterval(() => {
                dispatch(sessionDataActions.saveSessionTime(seconds + 1));
            }, 1000);
            
        }
        return () => clearInterval(interval);

    }, [seconds, sessionProgress]);
    
    const endSession = () => {
        dispatch(sessionActions.endSession());
    };

    return (
        <div className="timer">
            <BaseCounter
                className={classNames('', { timerActive: sessionProgress })}
                incrementArg={userCounter}
                targetArg={duration}
                mark="|"
                callback={endSession}
            />
            <RetryFlag />
        </div>
    );
};
