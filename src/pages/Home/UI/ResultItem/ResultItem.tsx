import React, { useEffect, useState } from 'react';
import style from './ResultItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import NumberFlow from '@number-flow/react';
import { timeNormalization } from 'shared/lib/timeNormalization/timeNormalization';

interface ResultItemProps {
    description?: string
    title: string,
    isSeed?: boolean,
    isTime?: boolean,
    isEps?: boolean,
    value: string | number,
    onClick?: () => void,
    className?: string,
}

export const ResultItem = ({
    title,
    value,
    isEps = false,
    isSeed = false,
    isTime = false,
    onClick,
    description,
    className,
}: ResultItemProps) => {

    const [animationInitialState, setAnimationInitialState] = useState(0);
    const [additionAnimateParams, setAdditionAnimateParams] = useState(0);

    const [zeroAnimation, setZeroAnimation] = useState(9);

    useEffect(() => {
        setAnimationInitialState(value as number);
        if (isEps) {
            value = Number(value);
            const secondNumberEps = value < 1
                ? Number(value.toString().split('.')[1])
                : 0 as number;
            setAdditionAnimateParams(secondNumberEps as number);
        } else if (isTime) {
            const time = timeNormalization(Math.round(value as number), value as number >= 3600);
            const [min, sec] = time.split(':');
            setAnimationInitialState(Number(min[0]));
            setAdditionAnimateParams(Number(sec));
            setZeroAnimation(0);
        }
    }, []);

    if (isSeed) {
        return (
            <div className={classNames(style.itemContainer, {}, [className])} onClick={onClick}>
                <span title={description}>{title}</span>
                <span className={style.itemValue}>{value}</span>
            </div>
        );
    }

    if (isEps) {
        return (
            <div className={classNames(style.itemContainer, {}, [className])} onClick={onClick}>
                <span title={description}>{title}</span>
                <div style={{ display: 'flex' }}>
                    <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={animationInitialState < 1 ? 0 : 1}
                        trend
                    />
                    <span style={{ color: 'var(--active-color)' }}>.</span>
                    <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={additionAnimateParams}
                        trend
                    />
                    {additionAnimateParams % 10 === 0
                        && <NumberFlow
                            willChange
                            className={style.itemValue}
                            value={0}
                            trend
                        />}
                </div>
            </div>
        );
    }

    if (isTime) {

        return (
            <div className={classNames(style.itemContainer, {}, [className])} onClick={onClick}>
                <span title={description}>{title}</span>
                <div style={{ display: 'flex' }}>
                    {additionAnimateParams <= 9 && <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={zeroAnimation}
                        trend
                    />}
                    <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={animationInitialState}
                        trend
                    />
                    <span style={{ color: 'var(--active-color)' }}>:</span>
                    {additionAnimateParams <= 9 && <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={zeroAnimation}
                        trend
                    />}
                    <NumberFlow
                        willChange
                        className={style.itemValue}
                        value={additionAnimateParams}
                        trend
                    />
                    {additionAnimateParams % 10 === 0
                        && <NumberFlow
                            willChange
                            className={style.itemValue}
                            value={0}
                            trend
                        />}
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(style.itemContainer, {}, [className])} onClick={onClick}>
            <span title={description}>{title}</span>
            <NumberFlow
                willChange
                className={style.itemValue}
                value={animationInitialState}
                trend
            />
        </div>
    );
};
