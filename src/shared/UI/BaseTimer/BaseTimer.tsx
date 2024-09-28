import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { setInterval, clearInterval } from 'worker-timers';

interface TimerProps {
    onFinishCallback?: () => void;
    time: number;
    setTime: Dispatch<SetStateAction<number>>;
    startCondition: boolean,
}

export const BaseTimer = ({ time, onFinishCallback, setTime, startCondition }: TimerProps) => {

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        let startTime: number;

        if (startCondition) {
            startTime = performance.now();
            interval = setInterval(() => {
                const elapsed = performance.now() - startTime;

                setTime((prevTime) => {
                    if (prevTime <= elapsed) {
                        onFinishCallback();
                        clearInterval(interval);
                        return 0;
                    }

                    return prevTime - elapsed;

                });
                startTime = performance.now();
            }, 100);
        }

        return () => clearInterval(interval);
    }, [startCondition]);

    const seconds = Math.floor(time / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);

    return (
        <>
            {seconds},{milliseconds}
        </>
    );
};
