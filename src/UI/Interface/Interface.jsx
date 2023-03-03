import React, {useState} from 'react';
import classes from './Interface.module.css'
import Modes from "./Modes";
import Number from "./Number";
import Signs from "./Signs";
import Lines from "./Lines";

const Interface = () => {

    const [active, setActive] = useState(false);

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer}>
                  <Modes onClick={() => setActive(true)} active={active} setActive={setActive}/>
                  <Lines/>
                  <Number/>
                  <Signs/>
                </div>
            </div>
        </div>
    );
};

export default Interface;