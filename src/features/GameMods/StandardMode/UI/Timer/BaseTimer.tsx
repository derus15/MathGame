import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSessionProgress } from 'entities/Session';

interface TimerProps {
    onFinishCallback: () => void;
    time: number;
    setTime: Dispatch<SetStateAction<number>>
}

export const BaseTimer = ({ time, onFinishCallback, setTime }: TimerProps) => {

    const sessionProgress = useSelector(getSessionProgress);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (sessionProgress) {
            interval = setInterval(() => {

                setTime((prevTime) => {

                    if (prevTime - 0.1 <= 0) {
                        onFinishCallback();
                        clearInterval(interval);
                        return 0;
                    }

                    return prevTime - 0.1;

                });

            }, 100);
        }

        return () => clearInterval(interval);
    }, [sessionProgress]);

    const seconds = Math.floor(time);
    const milliseconds = Math.floor((time % 1) * 10); // Получаем десятые доли секунды

    return (
        <div className="timer">
            {seconds},{milliseconds}
        </div>
    );
};
