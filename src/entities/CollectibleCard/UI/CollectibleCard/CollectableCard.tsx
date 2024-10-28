import React, { useEffect } from 'react';
import style from './CollectableCard.module.css';

interface CollectibleCardProps {
    id: number
}

export const CollectableCard = ({ id }: CollectibleCardProps) => {

    useEffect(() => {
        console.log('placeholder');
    }, []);

    return (
        <div className={style.cardContainer}>
            <span className={style.cardTitle}>{id}</span>
            <div className={style.cardBorder}>
                <div className={style.cardArt} />
            </div>
        </div>
    );
};
