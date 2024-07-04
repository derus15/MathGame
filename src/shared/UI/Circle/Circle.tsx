import React from 'react';
import style from './Circle.module.css';

interface CircleProps {
    info: string | number
}

export const Circle = ({ info }: CircleProps) => (
    <div className={style.circle}>
        <div className={style.front}>
            {info}
        </div>
        <div className={style.back}>MG</div>
    </div>
);
