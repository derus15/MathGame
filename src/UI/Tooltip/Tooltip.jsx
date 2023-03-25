import React from 'react';
import {useEffect} from "react";
import classes from './Tooltip.module.css'

const Tooltip = ({children, condition, depend, setShow, style={}, ...props}) => {

    useEffect(() => {
        if (condition) {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 2300);
        }
    }, [depend]);

    return (

        <div style={{bottom:style.bottom, left:style.left}} className={classes.container} >
            <div className={classes.support}>{children}</div>
        </div>
    );
};

export default Tooltip;