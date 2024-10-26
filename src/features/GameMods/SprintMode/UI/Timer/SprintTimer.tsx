import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress, sessionActions } from 'entities/Session';
import { getSessionPoints, sessionDataActions } from 'entities/SessionData';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';
import { getParamsNumber } from 'entities/SessionParams';

export const SprintTimer = () => {

    const sessionProgress = useSelector(getSessionProgress);
    const duration = useSelector(getParamsNumber);
    const userCounter = useSelector(getSessionPoints);
    const dispatch = useDispatch();

    const endSession = () => {
        dispatch(sessionActions.endSession());
        dispatch(sessionDataActions.calculateSessionTime());
        dispatch(sessionDataActions.calculateEPS());
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
