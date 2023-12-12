import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTime } from '../../redux/Slices/frontSlices/sessionDataSlice';
import { classNames } from '../../helpers/classNames/classNames';

const SprintTimer = ({ sessionProgress, end }) => {

    const duration = useSelector((state) => state.interface.number);
    const [time, setTime] = useState(0);
    const standardNumber = useSelector((state) => state.sessionData.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= standardNumber) {
            dispatch(saveTime(time));
            end();
        }
    }, [standardNumber]);

    useEffect(() => {
        let interval;
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
