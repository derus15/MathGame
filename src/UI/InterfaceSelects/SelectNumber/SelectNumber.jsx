import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectNumber.module.css';
import { classNames } from '../../../helpers/classNames';

const SelectNumber = ({ children, number, onClick }) => {

    const duration = useSelector((state) => state.interface.number);
    const isSelectedItem = Boolean(duration === number);

    return (
        <div
            className={classNames(style.number, { [style.numberActive]: isSelectedItem }, [])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SelectNumber;
