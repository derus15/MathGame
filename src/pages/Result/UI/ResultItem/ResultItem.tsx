import React from 'react';
import style from './ResultItem.module.css';

interface ResultItemProps {
    description?: string
    title: string,
    value: string | number,
}

export const ResultItem = ({ title, value, description }: ResultItemProps) => (
    <div className={style.itemContainer}>
        <span title={description}>{title}</span>
        <span className={style.itemValue}>{value}</span>
    </div>
);
