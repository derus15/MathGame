import React, { useState } from 'react';
import style from './BoosterPack.module.css';
import { CollectableCard } from 'entities/CollectibleCard';

const generateId = () => Math.floor(Math.random() * (9 - 1)) + 1;

export const BoosterPack = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPack = () => {
        setIsOpen(true);
    };

    return (
        <div onClick={handleOpenPack}>
            {isOpen
                ? (
                    <div className={style.cardContainer}>
                        <CollectableCard id={generateId()} />
                        <CollectableCard id={generateId()} />
                    </div>)
                : (
                    <div className={style.packContainer}>
                        <span className={style.packTitle}>
                            Booster Pack
                        </span>
                    </div>
                )}
        </div>
    );
};
