import React, { useEffect, useState } from 'react';
import style from './BoosterPack.module.css';
import { CollectableCard } from 'entities/CollectibleCard';
import Modal from 'shared/UI/Modal/Modal';

const generateRandomNumberList = (length: number) => Array.from(
    { length },
    () => Math.floor(Math.random() * (5 - 1)) + 1,
);

interface BoosterPackProps {
    isOpenPack: boolean,
}

export const BoosterPack = ({ isOpenPack }: BoosterPackProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardCount = 3;
    const idList = generateRandomNumberList(cardCount);

    useEffect(() => {
        setIsModalOpen(isOpenPack);
    }, [isOpenPack]);

    const handleOpenPack = () => {
        setIsOpen(true);
    };

    return (
        <Modal visible={isModalOpen} setVisible={setIsModalOpen} className={style.boosterModal}>
            <div onClick={handleOpenPack}>
                {isOpen
                    ? (
                        <div className={style.cardContainer}>
                            {idList.map((id, i) => <CollectableCard key={i} id={id} />)}
                        </div>)
                    : (
                        <div className={style.packContainer}>
                            <span className={style.packTitle}>
                                Booster Pack
                            </span>
                        </div>
                    )}
            </div>
        </Modal>
    );
};
