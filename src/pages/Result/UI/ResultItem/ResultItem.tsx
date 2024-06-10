import React, { useEffect, useState } from 'react';
import style from './ResultItem.module.css';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';

interface ResultItemProps {
    description?: string
    title: string,
    value: string | number,
}

const parseTimeString = (time: string) => {
    const parts = time.split(':').map(Number);
    if (parts.length === 3) {
        const [hours, minutes, seconds] = parts;
        return hours * 3600 + minutes * 60 + seconds;
    } if (parts.length === 2) {
        const [minutes, seconds] = parts;
        return minutes * 60 + seconds;
    } 
    return 0;
    
};

export const ResultItem = ({ title, value, description }: ResultItemProps) => {

    const [incrementValue, setIncrementValue] = useState<number | string>();

    useEffect(() => {

        let interval: ReturnType<typeof setInterval>;
        // eslint-disable-next-line no-unused-vars
        let current = 0;
        let targetValue = typeof value === 'number' ? value : parseTimeString(value);
        const startTime = performance.now();
        const duration = 700;
        const steps = 20;
        const increment = targetValue / steps;
        const intervalTime = duration / steps;

        const updateValue = () => {

            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = elapsedTime / duration;
            return progress * targetValue;

        };

        if (typeof value === 'number') {

            interval = setInterval(() => {
                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(Math.round(newValue));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(targetValue);
                }
                console.log('time');
            }, intervalTime);

        } else if (typeof value === 'string' && value.includes(':')) {

            const stringValue = parseTimeString(value);
            targetValue = Number(stringValue);

            interval = setInterval(() => {
                current += increment;
                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(timeNormalization(Math.round(newValue), newValue >= 3600));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(timeNormalization(targetValue, targetValue >= 3600));
                }
            }, intervalTime);

        } else if (typeof value === 'string' && value.includes('.')) {

            targetValue = parseFloat(value);
            const increment = targetValue / steps;

            interval = setInterval(() => {
                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(newValue.toFixed(2));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(targetValue.toFixed(2));
                }
            }, intervalTime);

        } else {
            setIncrementValue(value);
        }

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className={style.itemContainer}>
            <span title={description}>{title}</span>
            <span className={style.itemValue}>{incrementValue}</span>
        </div>
    );
};
