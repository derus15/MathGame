import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectNumber.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

const SelectNumber = ({ children, number, callback }) => {

    const duration = useSelector((state) => state.interface.number);
    const isSelectedItem = Boolean(duration === number);

    return (
        <div
            className={classNames(style.number, { [style.numberActive]: isSelectedItem }, [])}
            onClick={callback}
        >
            {children}
        </div>
    );
};

export default SelectNumber;
