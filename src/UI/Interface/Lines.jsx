import React from 'react';
import classes from "./Interface.module.css";

const Lines = () => {
    return (
        <div className={classes.containerLines}>
            <div className={classes.verticalLine}></div>
            <div className={classes.verticalLine}></div>
        </div>
    );
};

export default Lines;