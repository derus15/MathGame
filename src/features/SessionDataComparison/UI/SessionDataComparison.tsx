import React from 'react';
import style from './SessionDataComparison.module.css';
import { useCalculateComparison } from '../model/hooks/useCalculateComparison';

export const SessionDataComparison = () => {

    const comparisonList = useCalculateComparison();

    return (
        <div className={style.comparisonContainer}>
            {comparisonList.map((number, index) => (
                number.includes('+')
                    ? <span className={style.betterResultNumber} key={index}>{number}</span>
                    : <span key={index} className={style.worseResultNumber}>{number}</span>
            ))}
        </div>

    );
};
