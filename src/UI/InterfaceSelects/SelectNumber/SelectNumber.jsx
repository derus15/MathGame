import React from 'react';
import classes from './SelectNumber.module.css'
import { useSelector } from 'react-redux';

const SelectNumber = ({ children, number, onClick }) => {

    const duration = useSelector(state => state.interface.number);

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
};

export default SelectNumber;