import React from 'react';
import style from './GenerateAvatar.module.css';

const generateRandomColor = (isMono: boolean = false) => {

    const letters = isMono ? '000000000000000' : '0123456789ABCDEF';
    let color = '#';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const AvatarGenerator = () => {

    const squares = Array.from({ length: 145 }, () => generateRandomColor(true));

    return (
        <div className={style.avatarCircle}>
            {squares.map((color, index) => (
                <div key={index} className={style.square} style={{ backgroundColor: color }} />
            ))}
        </div>
    );
};
