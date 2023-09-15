import React, { useState } from 'react';
import classes from './../Interface.module.css';

const Lines = () => {

    const [rotate, setRotate] = useState(false);

    function handleClick() {
        setRotate(prevState => !prevState);
    }

    function rotation(direction) {
        if (rotate) {
            return `${classes.verticalLine} ${classes[direction]} ${classes.rotateLine}`;
        }
        return `${classes.verticalLine} ${classes[direction]}`;
    }

    return (
        <div className={classes.containerLines}>
            <div className={rotation('rightLine')} onClick={handleClick}></div>
            <div className={rotation('leftLine')} onClick={handleClick}></div>
        </div>
    );
};

export default Lines;