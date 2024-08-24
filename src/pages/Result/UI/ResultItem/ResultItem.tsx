import React, { useEffect, useState } from 'react';
import style from './ResultItem.module.css';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';
import { classNames } from 'shared/lib/classNames/classNames';

interface ResultItemProps {
    description?: string
    title: string,
    value: string | number,
    isTime?: boolean,
    isEPS?: boolean,
    onClick?: () => void,
    className?: string,
}

export const ResultItem = ({
    title,
    value,
    onClick,
    description,
    isTime = false, 
    isEPS = false,
    className,
}: ResultItemProps) => {

    const [incrementValue, setIncrementValue] = useState<number | string>();

    useEffect(() => {

        let interval: ReturnType<typeof setInterval>;

        const startTime = performance.now();
        const duration = 700;
        const steps = 20;
        const stepTime = duration / steps;

        const updateValue = () => {

            const targetValue = Number(value);
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            return (elapsedTime / duration) * targetValue;

        };

        if (typeof value === 'number' && !isTime) {
            const targetValue = Number(value);

            interval = setInterval(() => {

                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(Math.round(newValue));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(targetValue);
                }

            }, stepTime);

        } else if (typeof value === 'number' && isTime) {
            const targetValue = Number(value);

            interval = setInterval(() => {

                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(timeNormalization(Math.round(newValue), newValue >= 3600));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(timeNormalization(targetValue, targetValue >= 3600));
                }

            }, stepTime);

        } else if (typeof value === 'string' && value.includes('.') && isEPS) {

            const targetValue = parseFloat(value);

            interval = setInterval(() => {

                const newValue = Math.min(targetValue, updateValue());
                setIncrementValue(newValue.toFixed(2));

                if (newValue >= targetValue) {
                    clearInterval(interval);
                    setIncrementValue(targetValue.toFixed(2));
                }

            }, stepTime);

        } else {

            setIncrementValue(value);

        }

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className={classNames(style.itemContainer, {}, [className])} onClick={onClick}>
            <span title={description}>{title}</span>
            <span className={style.itemValue}>{incrementValue}</span>
        </div>
    );
};
