import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User';
import { BoosterPack } from '../BoosterPack/BoosterPack';
import style from './InviteBoosterPack.module.css';
import Modal from 'shared/UI/Modal/Modal';

export const InviteBoosterPack = () => {

    const isAuth = useSelector(getIsAuth);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenBoosterPack = () => {
        setIsModalOpen(true);
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
                <Modal visible={isModalOpen} setVisible={setIsModalOpen} className={style.inviteModal}>
                    <BoosterPack />
                </Modal>
            </div>
        )
    );
};
