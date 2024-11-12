import React from 'react';
import style from './CollectableCard.module.css';
import { CardBack } from '../СardBack/CardBack';
import { CardArtsList } from '../CardArts/CardArtsList/CardArtsList';
import { useFlexHover } from 'shared/UI/useFlexHover/useFlexHover';

interface CollectibleCardProps {
    id: number
}

export const CollectableCard = ({ id }: CollectibleCardProps) => {

    const { flexHoverRef } = useFlexHover();

    return (
        <div className={style.cardContainer} ref={flexHoverRef}>
            <div className={style.cardFront}>
                {CardArtsList[id]}
            </div>
            <div className={style.cardBack}>
                <CardBack />
            </div>
        </div>
    );
};
