import React from 'react';
import classes from "./Interface.module.css";

const Signs = () => {
    return (
        <div className={classes.containerSigns}>
            <div className={classes.signs}>+</div>
            <div className={classes.signs}>-</div>
            <div className={classes.signs}>*</div>
            <div className={[classes.signs, classes.signsActive].join(' ')}>/</div>
        </div>
    );
};

export default Signs;