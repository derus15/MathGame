import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementStandardCounter, resetStandardCounter } from '../../redux/Slices/dataSlice';

const StandardTimer = ({ answer, sessionProgress, end }) => {

    const duration = useSelector(state => state.interface.time);
    const [time, setTime] = useState(duration);
    const [seconds, setSeconds] = useState(0);
    const [visibleSeconds, setVisibleSeconds] = useState(JSON.parse(localStorage.getItem('seconds')) || false);
    const dispatch = useDispatch();

    const showSeconds = () => {
        if (!sessionProgress) {
            setVisibleSeconds(!visibleSeconds);
        }
    };

    useEffect(() => {
        localStorage.setItem('seconds', JSON.stringify(visibleSeconds));
    }, [visibleSeconds]);

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

                    } else {

                        return time - 1;
                    }
                });
            }, 1000);
        }
    }, [sessionProgress]);

    useEffect(() => {

        if (sessionProgress && visibleSeconds) {
            setSeconds(9);
            setInterval(() => {
                setSeconds((second) => {

                    if (second === 0) {
                        return setSeconds(9);
                    }

                    return second - 1;

                });
            }, 100);
        }
    }, [sessionProgress]);

    useEffect(() => {

        if (sessionProgress) {

            dispatch(incrementStandardCounter());
        }

    }, [answer]);

    return (
        <div style={{ cursor: 'pointer' }} onClick={showSeconds}>
            <div className={'timer'}>{time}{visibleSeconds ? ',' + seconds : ''}</div>
        </div>
    );
};

export default StandardTimer;