import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames/classNames';
import { activitiesSessionActions } from '../../redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from '../../redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from '../../redux/types';

const SprintTimer = () => {

    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const duration = useSelector((state: StateSchema) => state.interface.number);
    const [time, setTime] = useState(0);
    const standardNumber = useSelector((state: StateSchema) => state.sessionData.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= standardNumber) {
            dispatch(activitiesSessionActions.endSession());
        }
    }, [standardNumber]);

    useEffect(() => {
        if (sessionProgress) {
            dispatch(sessionDataActions.saveTime(time));
        }
    }, [time]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (sessionProgress) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [sessionProgress]);

    return (
        <div className={classNames('timer', { timerActive: sessionProgress }, [])}>
            {standardNumber} | {duration}
        </div>
    );
};

export default SprintTimer;
