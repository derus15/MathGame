import React from 'react';
import style from './Achievements.module.css';
import { Progressbar } from 'shared/UI/Progressbar/Progressbar';

interface AchievementsProps {
    title?: string,
    text?: string
}

export const Achievements = ({ title = 'Студент', text = 'Создать аккаунт' }: AchievementsProps) => (
    <div className={style.container}>
        <div className={style.picture} />
        <div className={style.textContainer}>
            <span className={style.textTitle}>
                {title}
            </span>
            <span className={style.textDescription}>
                {text}
            </span>
        </div>
        <Progressbar percent={50} />
    </div>
);
