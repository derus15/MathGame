import React from 'react';
import classes from "./Interface.module.css";

const Number_Time = ({changeTimeInterface, time, ...props}) => {

    const handleOnClick = (id) => {
        changeTimeInterface(id);
    }

    const getClassName = (id) => {
        if (time === id) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    }


    return (
     <div className={classes.containerTime}>
       <div className={`${classes.time} ${time === 15 || time === '15' ? classes.timeActive : ''}`} onClick={() => handleOnClick('15')}>0:15</div>
       <div className={getClassName('30')} onClick={() => handleOnClick('30')}>0:30</div>
       <div className={getClassName('60')} onClick={() => handleOnClick('60')}>1:00</div>
    </div>
    );
};

export default Number_Time;


