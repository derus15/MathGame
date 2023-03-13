import React, {useEffect, useState} from 'react';
import classes from "./Interface.module.css";

const Number_Time = ({changeTimeInterface, ...props}) => {
    const [kashActiveId, setKashActiveId] = useState(15);
    const [activeId, setActiveId] = useState(kashActiveId);


    const handleOnClick = (id) => {
        changeTimeInterface(id);
        setActiveId(id);
    }


    const getClassName = (id) => {
        if (activeId === id) {
            return `${classes.number} ${classes.numberActive}`;
        }
        return classes.number;
    }


    return (
     <div className={classes.containerNumber}>
       <div className={getClassName('15')} onClick={() => handleOnClick('15')}>0:15</div>
       <div className={getClassName('30')} onClick={() => handleOnClick('30')}>0:30</div>
       <div className={getClassName('60')} onClick={() => handleOnClick('60')}>1:00</div>
    </div>
    );
};

export default Number_Time;


