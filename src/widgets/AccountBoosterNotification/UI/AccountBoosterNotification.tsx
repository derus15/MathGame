import React from 'react';
import style from './AccountBoosterNotification.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { boosterPackActions, getBoosterCount } from 'features/BoosterPack';

export const AccountBoosterNotification = () => {

    const boosterNumber = useSelector(getBoosterCount);
    const dispatch = useDispatch();

    const handleOpenPack = () => {
        dispatch(boosterPackActions.openBoosterPack());
    };

    return (
        (boosterNumber > 0) && (
            <div className={style.notificationContainer} onClick={handleOpenPack}>
                <span className={style.notificationTitle}>
                    Вам доступно открытие паков ({boosterNumber})
                </span>
            </div>
        )
    );
};
