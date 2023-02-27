import React from 'react';
import classes from './Interface.module.css'

const Interface = () => {
    return (
        <div className={classes.center}>
            <div className={classes.mainContainer}>
            <div className={classes.containerPositionModes}>
                <div className={classes.containerModes}>
                    <div className={classes.modes}>Стандарт</div>
                    <div className={classes.modes}>Спринт</div>
                    <div className={classes.modes}>Дзен</div>
                </div>
            </div>
            <div className={classes.containerLines}>
                <div className={classes.verticalLine}></div>
                <div className={classes.verticalLine}></div>
            </div>
                <div className={classes.containerNumber}>
                   <div className={classes.number}>| x |</div>
                   <div className={classes.number}>|| x ||</div>
                   <div className={classes.number}>||| x |||</div>
                </div>
            <div>
                <div className={classes.containerSigns}>
                    <div className={classes.signs}>+</div>
                    <div className={classes.signs}>-</div>
                    <div className={classes.signs}>*</div>
                    <div className={classes.signs}>/</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Interface;