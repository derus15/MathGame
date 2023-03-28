import React from 'react';
import classes from "./Interface.module.css";

const Modes = ({...props}) => {

    return (
        <div className={classes.containerModes}>
            <div className={classes.modes} {...props}>Скоро...</div>
            <div className={[classes.modes, classes.modesActive].join(' ')} {...props}>Стандарт</div>
            <div className={classes.modes} {...props}>Скоро...</div>
        </div>
    );
};

export default Modes;