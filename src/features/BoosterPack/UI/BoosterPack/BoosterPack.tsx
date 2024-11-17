import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boosterPackActions } from 'features/BoosterPack';
import style from './BoosterPack.module.css';
import { CollectableCard } from 'entities/CollectibleCard';

const generateRandomNumberList = (length: number) => Array.from(
    { length },
    () => Math.floor(Math.random() * (5 - 1)) + 1,
);

export const BoosterPack = () => {

    const dispatch = useDispatch();
    const [isOpenPack, setIsOpenPack] = useState(false);
    const cardCount = 3;
    const idList = generateRandomNumberList(cardCount);

    const handleOpenPack = () => {
        setIsOpenPack(true);
        dispatch(boosterPackActions.decrementBoosterCount());
    };

    useEffect(() => () => {
        setIsOpenPack(false);
        dispatch(boosterPackActions.closeBoosterPack());
    }, []);

    return (
        <div onClick={handleOpenPack}>
            {isOpenPack ? (
                <div className={style.cardContainer}>
                    {idList.map((id, i) => <CollectableCard key={i} id={id} />)}
                </div>
            ) : (
                <div className={style.packContainer}>
                    <span className={style.packTitle}>
                        Booster Pack
                    </span>
                </div>
            )}
        </div>
    );
};
