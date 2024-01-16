import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from 'redux/types';

interface TimerProps {
    seconds: number,
    milliseconds: number,
    setSeconds: Dispatch<SetStateAction<number>>,
    setMilliseconds: Dispatch<SetStateAction<number>>,
}

const Timer = ({ seconds, milliseconds, setMilliseconds, setSeconds }: TimerProps) => {

    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (sessionProgress) {
            interval = setInterval(() => {

                setMilliseconds((milliseconds) => {
                    if (milliseconds === 0) {

                        setSeconds((seconds) => {

                            if (seconds === 0 && milliseconds === 0) {
                                clearInterval(interval);
                            }
                            return seconds - 1;

                        });
                        return 9;

                    }
                    return milliseconds - 1;

                });

            }, 100);
        }

        return () => {
            clearInterval(interval);
        };

    }, [sessionProgress]);

    return (
        <div className="timer">
            {seconds},{milliseconds}
        </div>
    );
};

export default Timer;
