import React from 'react';
import classes from './Interface.module.css'
import Modes from "./Modes";
import Number_Time from "./Number_Time";
import Signs from "./Signs";
import Lines from "./Lines";

const Interface = ({changeTimeInterface, addSignInSession, signList, time, ...props}) => {

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer}>
                  <Number_Time changeTimeInterface={changeTimeInterface} time={time}/>
                  <Signs addSignInSession={addSignInSession} signList={signList}/>
                  <Lines/>
                  <Modes/>
                </div>
            </div>
        </div>
    );
};

export default Interface;