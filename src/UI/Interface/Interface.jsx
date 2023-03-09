import React, {useState} from 'react';
import classes from './Interface.module.css'
import Modes from "./Modes";
import Number_Time from "./Number_Time";
import Signs from "./Signs";
import Lines from "./Lines";

const Interface = ({changeTime_15, changeTime_30, changeTime_00, ...props}) => {

    const [active, setActive] = useState(false);

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer}>
                  <Modes onClick={() => setActive(true)} active={active} setActive={setActive}/>
                  <Lines/>
                  <Number_Time changeTime_15={changeTime_15} changeTime_30={changeTime_30} changeTime_00={changeTime_00}/>
                  <Signs/>
                </div>
            </div>
        </div>
    );
};

export default Interface;