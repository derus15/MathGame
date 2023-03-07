import React from 'react';
import classes from "./Interface.module.css";

const Number = () => {
    return (
     <div className={classes.containerNumber}>
       <div className={classes.number}>0:15</div>
       <div className={classes.number}>0:30</div>
       <div className={classes.number}>1:00</div>
    </div>
    );
};

export default Number_Time;