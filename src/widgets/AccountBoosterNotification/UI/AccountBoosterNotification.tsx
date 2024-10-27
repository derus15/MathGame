import React from 'react';
import style from './AccountBoosterNotification.module.css';
import { useDispatch } from 'react-redux';

export const AccountBoosterNotification = () => {

    const dispatch = useDispatch();
    const boosterNumber = 1;

    const handleOpenPack = () => {
        console.log('test');
    };
    
    return (
        <div className={style.notificationContainer} onClick={handleOpenPack}>
            <span className={style.notificationTitle}>
                Вам доступно открытие паков ({boosterNumber})
            </span>
        </div>
    );
};
