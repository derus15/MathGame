import React, { useEffect, useRef } from 'react';
import style from './CollectableCard.module.css';
import { CardBack } from '../СardBack/CardBack';
import { CardArtsList } from '../CardArts/CardArtsList/CardArtsList';

interface CollectibleCardProps {
    id: number
}

export const CollectableCard = ({ id }: CollectibleCardProps) => {

    const titleRef = useRef(null);

    useEffect(() => {

        const title = titleRef.current;

        const handleMouseMove = (event: MouseEvent) => {

            const { offsetX, offsetY, target } = event;
            const { offsetWidth, offsetHeight } = target as HTMLElement;

            const rotateX = ((offsetY / offsetHeight) - 0.5) * -30;
            const rotateY = ((offsetX / offsetWidth) - 0.5) * 30;

            title.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            title.classList.add(style.reset);
            title.style.transform = '';
            title.classList.remove(style.reset);
        };

        title.addEventListener('mousemove', handleMouseMove);
        title.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            title.removeEventListener('mousemove', handleMouseMove);
            title.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={style.cardContainer} ref={titleRef}>
            <div className={style.cardFront}>
                {CardArtsList[id]}
            </div>
            <div className={style.cardBack}>
                <CardBack />
            </div>
        </div>
    );
};
