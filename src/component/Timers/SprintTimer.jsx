import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSprintTime } from '../../redux/Slices/frontSlices/dataSlice';

const SprintTimer = ({ answer, sessionProgress, end }) => {

    const duration = useSelector(state => state.interface.number);
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

        if (sessionProgress) {

            const start = setInterval(() => {
                setTime(time => {

                    return time + 1

                })
            }, 1000)

        }
    }, [sessionProgress]);

    return (
        <div>
            <div className={'timer'}>{sprintCounter} | {duration}</div>
        </div>
    );
};

export default SprintTimer;