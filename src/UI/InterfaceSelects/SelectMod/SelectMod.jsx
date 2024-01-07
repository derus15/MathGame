import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectMode.module.css';
import { classNames } from '../../../helpers/classNames/classNames';
import { OutlineButton } from '../../Button/OutlineButton/OutlineButton';

const SelectMod = ({ children = '', callback = null, mode = null }) => {
    
    const gameMode = useSelector((state) => state.interface.mode);
    const isSelectedMode = Boolean(gameMode === mode);

    return (
        <OutlineButton
            className={classNames(style.mode, { [style.modeActive]: isSelectedMode }, [])}
            onClick={callback}
        >
            {children}
        </OutlineButton>
    );
};

export default SelectMod;
