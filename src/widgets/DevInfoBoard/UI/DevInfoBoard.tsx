import React from 'react';
import { useSelector } from 'react-redux';
import {
    getSessionEPS,
    getSessionErrors,
    getSessionHungerRounds,
    getSessionPoints,
    getSessionTime,
} from 'entities/SessionData';
import style from './DevInfoBoard.module.css';

export const DevInfoBoard = () => {

    const points = useSelector(getSessionPoints);
    const time = useSelector(getSessionTime);
    const hungerRounds = useSelector(getSessionHungerRounds);
    const eps = useSelector(getSessionEPS);
    const error = useSelector(getSessionErrors);

    const infoList = [
        { name: 'P', value: points },
        { name: 'T', value: time },
        { name: 'HR', value: hungerRounds },
        { name: 'Ep', value: eps },
        { name: 'Er', value: error },
    ];

    return (
        <div className={style.devInfoContainer}>
            {infoList.map((item, index) => (
                <span key={index}>
                    {`${item.name}: ${item.value}`}
                </span>
            ))}
        </div>
    );
};
