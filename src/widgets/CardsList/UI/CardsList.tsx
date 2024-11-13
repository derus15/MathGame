import React from 'react';
import style from './CardsList.module.css';
import { CollectableCard } from 'entities/CollectibleCard';

export const CardsList = () => {
    
    const idCardList = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2];
    
    return (
        <div className={style.cardsListContainer}>
            {idCardList.map((id) => <CollectableCard id={id} key={id} />)}
        </div>
    );
};
