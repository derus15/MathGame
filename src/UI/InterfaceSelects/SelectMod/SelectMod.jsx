import React from 'react';
import { useSelector } from 'react-redux';
import classes from './SelectMode.module.css';

const SelectMod = ({ children, onClick, mode }) => {
    const gameMode = useSelector((state) => state.interface.mode);

    const getClassName = (mode) => {
        if (gameMode === mode) {
            return `${classes.mode} ${classes.modeActive}`;
        }
        return `${classes.mode}`;
    };

    return (
        <div className={getClassName(mode)} onClick={onClick}>
            {children}
        </div>
    );
};

export default SelectMod;