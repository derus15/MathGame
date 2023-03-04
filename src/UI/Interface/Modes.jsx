import React from 'react';
import classes from "./Interface.module.css";

const Modes = ({setActive, active, ...props}) => {

    const activeClasses = [classes.modes]

    if(active){
        activeClasses.push(classes.modesActive)
    }

    return (
         <div className={classes.containerPositionModes}>
            <div className={classes.containerModes}>
                <div className={activeClasses.join(' ')} {...props}>Спринт</div>
                <div className={[classes.modes, classes.modesActive].join(' ')} {...props}>Стандарт</div>
                <div className={activeClasses.join(' ')} {...props}>Дзен</div>
            </div>
         </div>
    );
};

export default Modes;