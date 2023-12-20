import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endSession } from '../../redux/Slices/frontSlices/activitiesSession';
import { saveTime } from '../../redux/Slices/frontSlices/sessionDataSlice';

const StandardTimer = () => {

    const duration = useSelector((state) => state.interface.time);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);
    const [time, setTime] = useState(duration);
    const [seconds, setSeconds] = useState(0);
    // const [width, setWidth] = useState('890');
    const dispatch = useDispatch();
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
        // сохранение времени в permantMode
        if (sessionProgress) {
            dispatch(saveTime(duration - time));
        }
    }, [time]);

    useEffect(() => {
        if (time > 0 && sessionProgress) {
            setTime(time - 1);

            const start = setInterval(() => {
                setTime((time) => {
                    if (time <= 0) {
                        clearInterval(start);
                        dispatch(endSession());
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
