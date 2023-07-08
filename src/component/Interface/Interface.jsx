import React from 'react';
import classes from './Interface.module.css'
import ChangeModes from "./ChangeParams/ChangeModes";
import ChangeSigns from "./ChangeParams/ChangeSigns";
import Lines from "./Lines/Lines";
import ChangeTimeNumber from "./ChangeParams/ChangeTimeNumber";

const Interface = ({sessionProgress}) => {

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer} >
                  <ChangeTimeNumber sessionProgress={sessionProgress} />
                  <ChangeSigns sessionProgress={sessionProgress} />
                  <Lines />
                  <ChangeModes sessionProgress={sessionProgress} />
                </div>
            </div>
        </div>
    );
};

export default Interface;