import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectTime.module.css';
import { classNames } from '../../../helpers/classNames/classNames';
import { OutlineButton } from '../../Button/OutlineButton/OutlineButton';

const SelectTime = ({ children, time, callback }) => {

    const duration = useSelector((state) => state.interface.time);
    const isSelectedTime = Boolean(duration === time);

    return (
        <OutlineButton
            className={classNames(style.time, { [style.timeActive]: isSelectedTime }, [])}
            onClick={callback}
        >
            {children}
        </OutlineButton>
    );
};

export default SelectTime;
