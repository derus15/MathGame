import React, {useState} from 'react';
import classes from './Interface.module.css'
import Modes from "./Modes";
import Number_Time from "./Number_Time";
import Signs from "./Signs";
import Lines from "./Lines";

const Interface = ({changeTimeInterface, ...props}) => {

    const [active, setActive] = useState(false);

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer}>
                  <Modes onClick={() => setActive(true)} active={active} setActive={setActive}/>
                  <Lines/>
                  <Number_Time changeTimeInterface={changeTimeInterface}/>
                  <Signs/>
                </div>
            </div>
        </div>
    );
};

export default Interface;