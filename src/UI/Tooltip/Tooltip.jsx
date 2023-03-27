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

        <div className={classes.container}
             style={{bottom: style.bottom, left: style.left, position: style.position, textAlign: style.textalign}}>
            <div className={classes.support}>{children}</div>
        </div>
    );
};

export default Tooltip;