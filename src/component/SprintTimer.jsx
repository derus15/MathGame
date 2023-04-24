import React, {useEffect, useState} from 'react';

const SprintTimer = ({duration, counter, sessionProgress, end, ...props}) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const durationNum = Number(duration);
        if (durationNum <= counter){
            end();
        }
    }, [counter]);


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
            <div className={'timer'}>{counter} | {duration}</div>
        </div>
    );
};

export default SprintTimer;