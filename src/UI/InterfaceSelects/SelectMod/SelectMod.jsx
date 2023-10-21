import React from 'react';
import classes from './SelectMode.module.css'
import { useSelector } from 'react-redux';

const SelectMod = ({children, onClick, mode}) => {

    const gameMode = useSelector(state => state.interface.mode);

    const getClassName = (mode) => {
        if (gameMode === mode) {
            return `${classes.mode} ${classes.modeActive}`;
        }
        return `${classes.mode}`;
    }

    return (
        <div className={getClassName(mode)} onClick={onClick}>
            {children}
        </div>
    );
};

export default SelectMod;