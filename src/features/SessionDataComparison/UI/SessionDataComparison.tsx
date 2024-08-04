import React from 'react';
import style from './SessionDataComparison.module.css';
import { useCalculateComparison } from '../model/hooks/useCalculateComparison';
import { useSelector } from 'react-redux';
import { getIsRetrySession } from 'entities/Example';

export const SessionDataComparison = () => {

    const comparisonList = useCalculateComparison();
    const isRetry = useSelector(getIsRetrySession);

    return (
        isRetry && ( 
            <div className={style.comparisonContainer}>
                {comparisonList.map(({ value, isBetter }, index) => (
                    isBetter
                        ? <span className={style.betterResultNumber} key={index}>{value}</span>
                        : <span className={style.worseResultNumber} key={index}>{value}</span>
                ))}
            </div>
        )
    );
};
