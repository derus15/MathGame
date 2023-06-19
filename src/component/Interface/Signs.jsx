import React from 'react';
import classes from "./Interface.module.css";

const Signs = ({signList, addSignInSession, ...props}) => {

    const getClassName = (id) => {
        if (signList.includes(id)) {
            return `${classes.signs} ${classes.signsActive}`;
            }
        return classes.signs;
    }

    return (
        <div className={classes.containerSigns}>
            <div className={getClassName('+')} onClick={() => (addSignInSession('+'))}>+</div>
            <div className={getClassName('-')} onClick={() => (addSignInSession('-'))}>-</div>
            <div className={getClassName('*')} onClick={() => (addSignInSession('*'))}>x</div>
            <div className={getClassName('/')} onClick={() => (addSignInSession('/'))}>/</div>
        </div>
    );
};

export default Signs;