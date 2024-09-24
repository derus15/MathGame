import React, { ReactNode } from 'react';
import style from './Circle.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface CircleProps {
    front: string | number | ReactNode,
    className?: string,
    back?: string | ReactNode
}

export const Circle = ({ front, back = 'MG', className }: CircleProps) => (
    <div className={classNames(style.circle, {}, [className])}>
        <div className={style.front}>
            {front}
        </div>
        <div className={style.back}>{back}</div>
    </div>
);
