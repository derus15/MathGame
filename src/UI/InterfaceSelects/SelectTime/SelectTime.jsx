import React from 'react';
import classes from './SelectTime.module.css';
import { useSelector } from 'react-redux';

const SelectTime = ({ children, time, onClick }) => {

    const duration = useSelector(state => state.interface.time);

    const getClassName = (time) => {
        if (duration === time) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    };

    return (
        <div className={getClassName(time)} onClick={onClick}>
            {children}
        </div>
    );
};

export default SelectTime;