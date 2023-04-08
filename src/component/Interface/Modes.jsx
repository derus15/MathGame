import React from 'react';
import classes from "./Interface.module.css";

const Modes = ({...props}) => {

    function getClassName() {
        return `${classes.modes} ${classes.modesActive}`
    }

    return (
        <div className={classes.containerModes}>
            <div className={classes.modes} {...props} >Скоро...</div>
            <div className={getClassName()} >Стандарт</div>
            <div className={classes.modes} {...props} >Скоро...</div>
        </div>
    );
};

export default Modes;