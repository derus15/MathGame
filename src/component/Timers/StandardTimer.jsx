import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementStandardCounter, resetStandardCounter } from '../../redux/Slices/dataSlice';

const StandardTimer = ({ answer, sessionProgress, end }) => {

    const duration = useSelector(state => state.interface.time);
    const [time, setTime] = useState(duration);
    const dispatch = useDispatch();

    useEffect(() => {
        setTime(duration);
    }, [duration]);

    useEffect(() => {

        if (time > 0 && sessionProgress) {

            dispatch(resetStandardCounter());
            const start = setInterval(() => {
                setTime((time) => {

                    if (time <= 1) {

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

        if (sessionProgress) {

            dispatch(incrementStandardCounter());
        }

    }, [answer]);

    return (
        <div>
            <div className={'timer'}>{time}</div>
        </div>
    );
};

export default StandardTimer;