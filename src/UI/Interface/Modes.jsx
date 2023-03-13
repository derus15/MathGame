import React from 'react';
import classes from "./Interface.module.css";

const Modes = ({setActive, active, ...props}) => {


    return (
         <div className={classes.containerPositionModes}>
            <div className={classes.containerModes}>
                <div className={classes.modes} {...props}>Скоро...</div>
                <div className={[classes.modes, classes.modesActive].join(' ')} {...props}>Стандарт</div>
                <div className={classes.modes} {...props}>Скоро...</div>
            </div>
         </div>
    );
};

export default Modes;