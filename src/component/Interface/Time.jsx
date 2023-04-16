import React, {useState} from 'react';
import classes from "./Interface.module.css";

const Time = ({changeTimeInSession, ...props}) => {

    const handleOnClick = (id) => {
        changeTimeInSession(id);
    }

    const getClassName = (id) => {
        if (localStorage.getItem('duration') === id) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    }

    return (
     <div className={classes.containerTime}>
         <div className={getClassName('15')} onClick={() => handleOnClick('15')}>0:15</div>
         <div className={getClassName('30')} onClick={() => handleOnClick('30')}>0:30</div>
         <div className={getClassName('60')} onClick={() => handleOnClick('60')}>1:00</div>
     </div>
    );
};

export default Time;


