import React from 'react';
import style from './Circle.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface CircleProps {
    info: string | number,
    className?: string,
}

export const Circle = ({ info, className }: CircleProps) => (
    <div className={classNames(style.circle, {}, [className])}>
        <div className={style.front}>
            {info}
        </div>
        <div className={style.back}>MG</div>
    </div>
);
