import React, {useEffect} from 'react';

const Timer = ({time, sessionProgress, end, setTime, duration, ...props}) => {

    useEffect(() => {if (time === undefined) {setTime(localStorage.getItem('time'))}},  [time]);

    useEffect(() => {

    if (time > 0 && sessionProgress) {

    let start = setInterval(() => {
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