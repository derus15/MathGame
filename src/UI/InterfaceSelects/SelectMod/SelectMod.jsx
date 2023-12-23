import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectMode.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

const SelectMod = ({ children = '', onClick = null, mode = null }) => {
    
    const gameMode = useSelector((state) => state.interface.mode);
    const isSelectedMode = Boolean(gameMode === mode);

    return (
        <div 
            className={classNames(style.mode, { [style.modeActive]: isSelectedMode }, [])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SelectMod;
