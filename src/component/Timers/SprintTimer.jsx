import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSprintTime } from '../../redux/Slices/frontSlices/dataSlice';
import { classNames } from '../../helpers/classNames';

const SprintTimer = ({ answer, sessionProgress, end }) => {

    const duration = useSelector((state) => state.interface.number);
    const [time, setTime] = useState(0);
    const [sprintCounter, setSprintCounter] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= sprintCounter) {
            dispatch(saveSprintTime(time));
            end();
        }
    }, [sprintCounter]);

    useEffect(() => {
        if (sessionProgress) {
            setSprintCounter(sprintCounter + 1);
        }
    }, [answer]);

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
            {sprintCounter} | {duration}
        </div>
    );
};

export default SprintTimer;
