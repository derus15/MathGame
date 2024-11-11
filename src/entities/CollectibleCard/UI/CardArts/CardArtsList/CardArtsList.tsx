import React, { ReactNode } from 'react';
import style from './CardArtsList.module.css';

interface NumberCollectionPatternProps {
    children: ReactNode;
}

const NumberCollectionPattern = ({ children }: NumberCollectionPatternProps) => (
    <div className={style.cardBorder}>
        {children}
    </div>
);

export const CardZero = () => (
    <NumberCollectionPattern>
        <span className={style.cardTitle}>{0}</span>
        <div className={style.cardArtZero} />
    </NumberCollectionPattern>
);

export const CardFirst = () => (
    <NumberCollectionPattern>
        <span className={style.cardTitle}>{1}</span>
        <div className={style.cardArtFirst} />
    </NumberCollectionPattern>
);

export const CardSecond = () => (
    <NumberCollectionPattern>
        <span className={style.cardTitle}>{2}</span>
        <div className={style.cardArtSecondContainer}>
            <div className={style.cardArtSecondsVerticalLine} />
            <div className={style.cardArtSecondsHorizontalLine} />
        </div>
    </NumberCollectionPattern>
);

export const CardThird = () => (
    <NumberCollectionPattern>
        <span className={style.cardTitle}>{3}</span>
        <div className={style.cardArtThirdContainer}>
            <div className={style.cardArtThirdTopLeftLine} />
            <div className={style.cardArtThirdTopRightLine} />
            <div className={style.cardArtThirdBottomLine} />
        </div>
    </NumberCollectionPattern>
);

export const CardArtsList: Record<number, ReactNode> = {
    1: <CardZero />,
    2: <CardFirst />,
    3: <CardSecond />,
    4: <CardThird />,
};
