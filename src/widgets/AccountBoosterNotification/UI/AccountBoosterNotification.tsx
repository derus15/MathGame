import React, { useState } from 'react';
import style from './AccountBoosterNotification.module.css';
import { useDispatch } from 'react-redux';
import { BoosterPack } from 'features/BoosterPack/UI/BoosterPack/BoosterPack';

export const AccountBoosterNotification = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const boosterNumber = 1;

    const handleOpenPack = () => {
        setIsOpen(true);
    };

    return (
        <div className={style.notificationContainer} onClick={handleOpenPack}>
            <span className={style.notificationTitle}>
                Вам доступно открытие паков ({boosterNumber})
            </span>
            <BoosterPack isOpenPack={isOpen} />
        </div>
    );
};
