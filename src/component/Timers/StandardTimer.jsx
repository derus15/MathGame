import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const StandardTimer = ({ sessionProgress, end }) => {

    const duration = useSelector((state) => state.interface.time);
    const [time, setTime] = useState(duration);
    const [seconds, setSeconds] = useState(0);
    // const [width, setWidth] = useState('890');
    const [isVisibleSeconds, setIsVisibleSeconds] = useState(
        JSON.parse(localStorage.getItem('seconds')) || true,
    );

    const showSeconds = () => {
        if (!sessionProgress) {
            setIsVisibleSeconds((prev) => !prev);
        }
    };

    useEffect(() => {
        localStorage.setItem('seconds', JSON.stringify(isVisibleSeconds));
    }, [isVisibleSeconds]);

    useEffect(() => {
        setTime(duration);
    }, [duration]);

    useEffect(() => {
        if (time > 0 && sessionProgress) {
            setTime(time - 1);

            const start = setInterval(() => {
                setTime((time) => {
                    if (time <= 0) {
                        clearInterval(start);
                        end();
                    }
                    // setWidth(width => Math.abs(width - Math.round(890 / duration)));
                    return time - 1;
                });
            }, 1000);
        }
    }, [sessionProgress]);

    useEffect(() => {
        let interval;
        if (sessionProgress && isVisibleSeconds) {
            setSeconds(9);

            interval = setInterval(() => {
                setSeconds((second) => {
                    if (second === 0) {
                        return setSeconds(9);
                    }

                    return second - 1;
                });
            }, 100);
        }

        return () => clearInterval(interval);
    }, [sessionProgress]);

    return (
        <div className="timer" onClick={showSeconds}>
            {time}{isVisibleSeconds ? `,${seconds}` : ''}
        </div>
    );
};

export default StandardTimer;
