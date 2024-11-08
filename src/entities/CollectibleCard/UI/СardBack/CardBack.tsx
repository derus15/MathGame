import React from 'react';
import style from './CardBack.module.css';

export const CardBack = () => {

    const letters = [
        'm', 'a', 't', 'h',
        'm', 'a', 'a', 't', 'h', 'm', 'a', 't',
        't', 'h', 'm', 'a', 't', 'h', 'h', 'm', 'a', 't', 'h', 'm',
        'm', 'a', 't', 'h',
        'm', 'a', 'a', 't', 'h', 'm', 'a', 't',
    ];

    return (
        <div className={style.card}>
            {letters.map((letter, index) => (
                <div key={index} className={style.letter}>{letter}</div>
            ))}
        </div>
    );
};
