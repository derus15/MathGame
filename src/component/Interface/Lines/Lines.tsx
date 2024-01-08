import React, { useState } from 'react';
import style from '../Interface.module.css';

const Lines = () => {
    const [rotate, setRotate] = useState(false);

    function handleClick() {
        setRotate((prevState) => !prevState);
    }

    function rotation(direction: string) {
        if (rotate) {
            return `${style.verticalLine} ${style[direction]} ${style.rotateLine}`;
        }
        return `${style.verticalLine} ${style[direction]}`;
    }

    return (
        <div className={style.containerLines}>
            <div className={rotation('rightLine')} onClick={handleClick} />
            <div className={rotation('leftLine')} onClick={handleClick} />
        </div>
    );
};

export default Lines;
