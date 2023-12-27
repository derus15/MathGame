import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectTime.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

const SelectTime = ({ children, time, callback }) => {

    const duration = useSelector((state) => state.interface.time);
    const isSelectedTime = Boolean(duration === time);

    return (
        <div
            className={classNames(style.time, { [style.timeActive]: isSelectedTime }, [])}
            onClick={callback}
        >
            {children}
        </div>
    );
};

export default SelectTime;
