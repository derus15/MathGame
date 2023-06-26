import React from 'react';
import classes from './Interface.module.css'
import Modes from "./Modes";
import Time from "./Time";
import Signs from "./Signs";
import Lines from "./Lines";
import Number from "./Number";

const Interface = ({gameMode, changeGameMode, sessionProgress}) => {

    return (
        <div className={classes.position}>
            <div className={classes.center}>
                <div className={classes.mainContainer} >
                    {(gameMode === 'Стандарт')
                    ?
                      <Time sessionProgress={sessionProgress} />
                    :
                      <Number sessionProgress={sessionProgress} />
                    }
                  <Signs sessionProgress={sessionProgress}/>
                  <Lines />
                  <Modes gameMode={gameMode} changeGameMode={changeGameMode}/>
                </div>
            </div>
        </div>
    );
};

export default Interface;