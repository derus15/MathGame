import React from 'react';
import classes from "./Interface.module.css";

const Number_Time = ({changeTime_15, changeTime_30, changeTime_00, ...props}) => {

    return (
     <div className={classes.containerNumber}>
       <div className={classes.number} onClick={changeTime_15}>0:15</div>
       <div className={classes.number} onClick={changeTime_30}>0:30</div>
       <div className={classes.number} onClick={changeTime_00}>1:00</div>
    </div>
    );
};

export default Number_Time;