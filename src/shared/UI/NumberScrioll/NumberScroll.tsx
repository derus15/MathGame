import React, { useEffect, useState } from 'react';
import style from './NumberScroll.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useFirstRender } from 'shared/lib/hooks/useFirstRender';

interface CounterProps {
    value?: number
}

export const NumberScroll = ({ value = 0 }: CounterProps) => {

    const [incrementValue, setIncrementValue] = useState(value);
    const [prevValue, setPrevValue] = useState(value);
    const isFirstRender = useFirstRender();
    const [isAnimate, setIsAnimate] = useState(false);

    const handleClick = () => {
        setPrevValue((prev) => prev + 1);
        setIsAnimate(true);
    };

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>;

        if (!isFirstRender) {

            interval = setTimeout(() => {
                setIsAnimate((prev) => !prev);
                setIncrementValue((prev) => prev + 1);
            }, 500);
        }

        return () => clearTimeout(interval);
    }, [prevValue]);

    return (
        <div className={style.containerCounter} onClick={handleClick}>
            <div
                className={classNames(style.counter, { [style.counterAnimation]: isAnimate }, [])}
            >
                <span>
                    {prevValue}
                </span>
                <span>
                    {incrementValue}
                </span>
            </div>
        </div>
    );
};
