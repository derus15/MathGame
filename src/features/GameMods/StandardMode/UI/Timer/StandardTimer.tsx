import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BaseTimer } from 'shared/UI/BaseTimer/BaseTimer';
import { getSessionProgress } from 'entities/Session';
import { sessionDataActions } from 'entities/SessionData';
import { RetryFlag } from 'entities/Example';
import { getParamsTime } from 'entities/SessionParams';

interface StandardTimerProps {
    endSessionCallback?: () => void
}

export const StandardTimer = memo(({ endSessionCallback }: StandardTimerProps) => {

    const duration = useSelector(getParamsTime);
    const sessionProgress = useSelector(getSessionProgress);
    const [timerTime, setTimerTime] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimerTime(duration * 1000);
    }, [duration]);

    const endSession = () => {
        dispatch(sessionDataActions.setSessionTimeFlags());
        endSessionCallback();
    };

    return (
        <div className="timer">
            <BaseTimer
                onFinishCallback={endSession}
                setTime={setTimerTime}
                time={timerTime}
                startCondition={sessionProgress}
            />
            <RetryFlag />
        </div>
    );
});
