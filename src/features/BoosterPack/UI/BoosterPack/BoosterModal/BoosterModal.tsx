import React, { useEffect, useState } from 'react';
import { Portal } from 'shared/UI/Portal/Portal';
import Modal from 'shared/UI/Modal/Modal';
import style from '../BoosterPack.module.css';
import { useSelector } from 'react-redux';
import { getIsVisibleBoosterPack } from '../../../model/selectors/getIsVisibleBoosterPack';
import { BoosterPack } from '../BoosterPack';

export const BoosterModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const isOpenPack = useSelector(getIsVisibleBoosterPack);

    useEffect(() => {
        setIsModalOpen(isOpenPack);
    }, [isOpenPack]);

    return (
        <Portal>
            <Modal visible={isModalOpen} setVisible={setIsModalOpen} className={style.boosterModal}>
                <BoosterPack />
            </Modal>
        </Portal>
    );
};
