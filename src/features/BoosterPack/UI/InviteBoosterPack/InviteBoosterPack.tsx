import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User';
import style from './InviteBoosterPack.module.css';
import { useCalculateChanceBooster } from '../../hooks/useCalculateChanceBooster';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { boosterPackActions } from '../../model/slice/boosterPackSlice';

export const InviteBoosterPack = () => {

    const [isTextVisible, setIsTextVisible] = useState(true);
    const { calculateBoosterPackChance } = useCalculateChanceBooster();
    const [isVisibleBoosterPack, setIsVisibleBoosterPack] = useState(calculateBoosterPackChance);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    const handleOpenBoosterPack = () => {
        dispatch(boosterPackActions.openBoosterPack());
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
            </div>
        )
    );
};
