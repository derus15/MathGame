import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Timer = ({sessionProgress, end}) => {

    const duration = useSelector(state => state.interface.time);
    const [time, setTime] = useState(duration);

    useEffect(() => {setTime(duration)}, [duration])

    useEffect(() => {

    if (time > 0 && sessionProgress) {

        const start = setInterval(() => {
            setTime((time) => {
                if (time <= 1) {
                    clearInterval(start);
                    end();
                }else{
                    return time - 1}
            })
        }, 1000)}}, [sessionProgress]);

    return (
        <div>
            <div className={'timer'}>{time}</div>
        </div>
    );
};

export default Timer;