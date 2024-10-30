import React from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getSessionProgress } from 'entities/Session';
import { getSessionPoints } from 'entities/SessionData';
import { BaseCounter } from 'shared/UI/BaseCounter/BaseCounter';
import { RetryFlag } from 'entities/Example';
import { getParamsNumber } from 'entities/SessionParams';

interface SprintTimerProps {
    endSessionCallback?: () => void
}

export const SprintTimer = ({ endSessionCallback }: SprintTimerProps) => {

    const sessionProgress = useSelector(getSessionProgress);
    const duration = useSelector(getParamsNumber);
    const userCounter = useSelector(getSessionPoints);

    const endSession = () => {
        endSessionCallback();
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
