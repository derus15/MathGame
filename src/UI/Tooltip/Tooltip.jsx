import React from 'react';
import {useEffect} from "react";
import style from './Tooltip.module.css'

const Tooltip = ({children, condition, depend, setShow, ...props}) => {

    useEffect(() => {
        if (condition) {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1600);
        }
    }, [depend]);

    return (

        <div className={style.container}>
            <div className={style.support}>{children}</div>
        </div>
    );
};

export default Tooltip;