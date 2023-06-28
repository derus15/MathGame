import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Timer = ({answer, sessionProgress, end}) => {

    const duration = useSelector(state => state.interface.time);
    const [time, setTime] = useState(duration);
    const [standardCounter, setStandardCounter] = useState(0);

    useEffect(() => {setTime(duration)}, [duration])

    useEffect(() => {

    if (time > 0 && sessionProgress) {

        const start = setInterval(() => {
            setTime((time) => {

                if (time <= 1) {

                    clearInterval(start);
                    end();

                } else {

                    return time - 1}
            })
        }, 1000)}}, [sessionProgress]);

    useEffect(() => {

        if(sessionProgress){

            setStandardCounter(prevCounter => prevCounter + 1);
            localStorage.setItem('counter', standardCounter + 1);
        }

    },[answer]);

    return (
        <div>
            <div className={'timer'}>{time}</div>
        </div>
    );
};

export default Timer;