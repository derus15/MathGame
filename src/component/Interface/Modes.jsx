import React from 'react';
import classes from "./Interface.module.css";

const Modes = ({gameMode, changeGameMode, ...props}) => {

    const handleOnClick = (id) => {
        changeGameMode(id);
    }

    function getClassName(id) {
        if (gameMode === id) {
            return `${classes.modes} ${classes.modesActive}`
        }
        return `${classes.modes}`
    }

    return (
        <div className={classes.containerModes}>
            <div className={getClassName('Спринт')} onClick={() => handleOnClick('Спринт')} {...props} >Спринт</div>
            <div className={getClassName('Стандарт')}  onClick={() => handleOnClick('Стандарт')}>Стандарт</div>
            <div className={classes.modes} {...props} >Скоро...</div>
        </div>
    );
};

export default Modes;