import React from 'react';
import style from './Progressbar.module.css';

interface ProgressbarProps {
    percent?: number,
}

export const Progressbar = ({ percent }: ProgressbarProps) => (
    <div className={style.progressbarContainer}>
        <div className={style.innerProgress} style={{ width: `${percent}%` }} />
        <div
            className={style.progressbarCounter}
            style={{ color: percent >= 47 ? 'var(--base-color)' : 'var(--active-color)' }}
        >
            4 / 10
        </div>
    </div>
);
