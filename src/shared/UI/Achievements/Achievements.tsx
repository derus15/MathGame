import React from 'react';
import style from './Achievements.module.css';

interface AchievementsProps {
    title: string,
    text: string
}

const Achievements = ({ title = 'Студент', text = 'Создать аккаунт' }: AchievementsProps) => (
    <div className={style.container}>
        <div className={style.picture} />
        <div>
            <h4>{title} !</h4>
            <span>{text}</span>
        </div>
    </div>
);

export default Achievements;
