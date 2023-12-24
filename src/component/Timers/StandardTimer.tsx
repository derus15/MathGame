import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activitiesSessionActions } from '../../redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { sessionDataActions } from '../../redux/Slices/frontSlices/sessionData/sessionDataSlice';
import { StateSchema } from '../../redux/types';

const StandardTimer = () => {

    const duration = useSelector((state: StateSchema) => state.interface.time);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const [time, setTime] = useState(duration);
    const [seconds, setSeconds] = useState(0);
    // const [width, setWidth] = useState('890');
    const dispatch = useDispatch();

    useEffect(() => {
        setTime(duration);
    }, [duration]);

    useEffect(() => {
        // сохранение времени в permanentMode
        if (sessionProgress) {
            dispatch(sessionDataActions.saveTime(duration - time));
        }
    }, [time]);

    useEffect(() => {
        if (time > 0 && sessionProgress) {
            setTime(time - 1);

            const start = setInterval(() => {
                setTime((time) => {
                    if (time <= 0) {
                        clearInterval(start);
                        dispatch(activitiesSessionActions.endSession());
                    }
                    // setWidth(width => Math.abs(width - Math.round(890 / duration)));
                    return time - 1;
                });
            }, 1000);
        }
    }, [sessionProgress]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (sessionProgress) {
            setSeconds(9);

            interval = setInterval(() => {
                setSeconds((second) => {
                    if (second === 0) {
                        return 9; // return setSeconds(9);
                    }

                    return second - 1;
                });
            }, 100);
        }

        return () => clearInterval(interval);
    }, [sessionProgress]);

    return (
        <div className="timer">
            {time},{seconds}
        </div>
    );
};

export default StandardTimer;
