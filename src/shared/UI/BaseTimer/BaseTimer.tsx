import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface TimerProps {
    onFinishCallback?: () => void;
    time: number;
    setTime: Dispatch<SetStateAction<number>>;
    startCondition: boolean,
}

export const BaseTimer = ({ time, onFinishCallback, setTime, startCondition }: TimerProps) => {

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (startCondition) {
            interval = setInterval(() => {

                setTime((prevTime) => {

                    if (prevTime <= 100) {
                        onFinishCallback();
                        clearInterval(interval);
                        return 0;
                    }

                    return prevTime - 100;

                });

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
