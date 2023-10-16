import React from 'react';
import classes from './SelectMode.module.css'
import { useSelector } from 'react-redux';

const SelectMod = ({children, onClick, mode}) => {

    const gameMode = useSelector(state => state.interface.mode);

    function getClassName(mode) {
        if (gameMode === mode) {
            return `${classes.modes} ${classes.modesActive}`;
        }
        return `${classes.modes}`;
    }

    return (
        <div className={getClassName(mode)} onClick={onClick}>
            {children}
        </div>
    );
};

export default SelectMod;