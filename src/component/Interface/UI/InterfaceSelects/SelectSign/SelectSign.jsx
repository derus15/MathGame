import React from 'react';
import style from './SelectSign.module.css';
import { classNames } from '../../../../../helpers/classNames/classNames';
import { OutlineButton } from '../../../../../UI/Button/OutlineButton/OutlineButton';

const SelectSign = ({ children, callback, sign, globalState }) => {

    const isSelectedSigns = Boolean(globalState.includes(sign));

    return (
        <OutlineButton
            className={classNames(style.signs, { [style.signsActive]: isSelectedSigns }, [])}
            onClick={callback}
        >
            {children}
        </OutlineButton>
    );
};

export default SelectSign;