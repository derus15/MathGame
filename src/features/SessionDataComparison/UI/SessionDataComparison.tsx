import React from 'react';
import style from './SessionDataComparison.module.css';
import { useCalculateComparison } from '../model/hooks/useCalculateComparison';

export const SessionDataComparison = () => {

    const comparisonList = useCalculateComparison();

    return (
        <div className={style.comparisonContainer}>
            {comparisonList.map((number, index) => (
                <span 
                    className={style.comparisonNumber}
                    key={index}
                >
                    {number}
                </span>
            ))}
        </div>

    );
};
