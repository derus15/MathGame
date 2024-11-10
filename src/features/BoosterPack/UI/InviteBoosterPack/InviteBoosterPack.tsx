import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User';
import { BoosterPack } from '../BoosterPack/BoosterPack';
import style from './InviteBoosterPack.module.css';
import { useCalculateChanceBooster } from '../../hooks/useCalculateChanceBooster';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

export const InviteBoosterPack = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(true);
    const { calculateBoosterPackChance } = useCalculateChanceBooster();
    const [isVisibleBoosterPack, setIsVisibleBoosterPack] = useState(calculateBoosterPackChance);
    const isAuth = useSelector(getIsAuth);

    const handleOpenBoosterPack = () => {
        setIsOpen(true);
        setIsTextVisible(false);
    };

    return (
        (isAuth && isVisibleBoosterPack) && (
            <div className={style.inviteContainer}>
                {isTextVisible && (
                    <OutlineButton
                        className={style.inviteTitle}
                        onClick={handleOpenBoosterPack}
                    >
                        Вам доступно открытие пака
                    </OutlineButton>
                )}
                <BoosterPack isOpenPack={isOpen} />
            </div>
        )
    );
};
