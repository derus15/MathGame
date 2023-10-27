import React from 'react';
import { useSelector } from 'react-redux';
import classes from './SelectNumber.module.css';

function SelectNumber({ children, number, onClick }) {
    const duration = useSelector((state) => state.interface.number);

    const getClassName = (number) => {
        if (duration === number) {
            return `${classes.number} ${classes.numberActive}`;
        }
        return classes.number;
    };

    return (
        <div className={getClassName(number)} onClick={onClick}>
            {children}
        </div>
    );
}

export default SelectNumber;
