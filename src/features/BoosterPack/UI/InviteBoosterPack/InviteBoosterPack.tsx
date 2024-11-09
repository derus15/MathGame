import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User';
import { BoosterPack } from '../BoosterPack/BoosterPack';
import style from './InviteBoosterPack.module.css';

export const InviteBoosterPack = () => {

    const [isOpen, setIsOpen] = useState(false);
    const isAuth = useSelector(getIsAuth);

    const handleOpenBoosterPack = () => {
        setIsOpen(true);
    };
    
    return (
        isAuth && (
            <div className={style.inviteContainer}>
                <span
                    className={style.inviteTitle}
                    onClick={handleOpenBoosterPack}
                >
                    Вам доступно открытие пака
                </span>
                <BoosterPack isOpenPack={isOpen} />
            </div>
        )
    );
};
