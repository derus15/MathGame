import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const SprintTimer = ({answer, sessionProgress, end}) => {

    const duration = useSelector(state => state.interface.number);
    const [time, setTime] = useState(0);
    const [sprintCounter, setSprintCounter] = useState(0);

    useEffect(() => {
        const durationNum = Number(duration);

        if (durationNum <= sprintCounter){
            end();
        }

    }, [sprintCounter]);


    useEffect(() => {

        if(sessionProgress){
            setSprintCounter(sprintCounter + 1)
        }

    },[answer]);

    useEffect(() => {

        if (sessionProgress) {

        localStorage.removeItem('time');
        const start = setInterval(() => {

            setTime((time) => {
                localStorage.setItem('time', time + 1);

                return time + 1
                }
            )
        }, 1000)}}, [sessionProgress]);

    return (
        <div>
            <div className={'timer'}>{sprintCounter} | {duration}</div>
        </div>
    );
};

export default SprintTimer;