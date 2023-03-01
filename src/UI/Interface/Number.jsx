import React from 'react';
import classes from "./Interface.module.css";

const Number = () => {
    return (
     <div className={classes.containerNumber}>
       <div className={classes.number}>| x |</div>
       <div className={classes.number}>|| x ||</div>
       <div className={classes.number}>||| x |||</div>
    </div>
    );
};

export default Number;