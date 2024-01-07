import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectSign.module.css';
import { classNames } from '../../../helpers/classNames/classNames';
import { OutlineButton } from '../../Button/OutlineButton/OutlineButton';

const SelectSign = ({ children, callback, sign }) => {

    const signs = useSelector((state) => state.interface.signList);
    const isSelectedSigns = Boolean(signs.includes(sign));

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
