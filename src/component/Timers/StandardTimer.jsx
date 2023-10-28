import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    incrementStandardCounter,
    resetStandardCounter,
} from '../../redux/Slices/frontSlices/dataSlice';

const StandardTimer = ({ answer, sessionProgress, end }) => {

    const duration = useSelector((state) => state.interface.time);
    const [time, setTime] = useState(duration);
    const [seconds, setSeconds] = useState(0);
    // const [width, setWidth] = useState('890');
    const [isVisibleSeconds, setIsVisibleSeconds] = useState(
        JSON.parse(localStorage.getItem('seconds')) || false,
    );
    const dispatch = useDispatch();

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
            dispatch(resetStandardCounter());

            const start = setInterval(() => {
                setTime((time) => {
                    if (time <= 0) {
                        clearInterval(start);
                        end();
                        return null;
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

    useEffect(() => {
        if (sessionProgress) {
            dispatch(incrementStandardCounter());
        }
    }, [answer]);

    return (
        <div onClick={showSeconds}>
            <div className="timer">
                {time}{isVisibleSeconds ? `,${seconds}` : ''}
            </div>
        </div>
    );
};

export default StandardTimer;
