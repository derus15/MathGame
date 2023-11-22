import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectTime.module.css';
import { classNames } from '../../../helpers/classNames';

const SelectTime = ({ children, time, onClick }) => {

    const duration = useSelector((state) => state.interface.time);
    const isSelectedTime = Boolean(duration === time);

    return (
        <div
            className={classNames(style.time, { [style.timeActive]: isSelectedTime }, [])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SelectTime;
