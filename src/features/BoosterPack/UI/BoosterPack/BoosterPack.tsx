import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { boosterPackActions } from 'features/BoosterPack';
import style from './BoosterPack.module.css';
import { CollectableCard } from 'entities/CollectibleCard';
import { classNames } from 'shared/lib/classNames/classNames';

const generateRandomNumberList = (length: number) => Array.from(
    { length },
    () => Math.floor(Math.random() * (5 - 1)) + 1,
);

export const BoosterPack = () => {

    const dispatch = useDispatch();
    const [isOpenPack, setIsOpenPack] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const cardCount = 3;
    const idList = generateRandomNumberList(cardCount);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // eslint-disable-next-line no-unused-expressions
            isAnimation && setIsOpenPack(true);
        }, 190);
        
        return () => {
            clearTimeout(timeout);
        };
        
    }, [isAnimation]);
    
    const handleOpenPack = () => {
        setIsAnimation(true);
        dispatch(boosterPackActions.decrementBoosterCount());
    };

    useEffect(() => () => {
        setIsOpenPack(false);
        setIsAnimation(false);
        dispatch(boosterPackActions.closeBoosterPack());
    }, []);

    return (
        <div onClick={handleOpenPack}>
            {isOpenPack ? (
                <div className={style.cardContainer}>
                    {idList.map((id, i) => <CollectableCard key={i} id={id} />)}
                </div>
            ) : (
                <div className={classNames(
                    style.packContainer,
                    { [style.packContainerOpen]: isAnimation },
                    [],
                )}
                >
                    <span className={style.packTitle}>
                        Booster Pack
                    </span>
                </div>
            )}
        </div>
    );
};
