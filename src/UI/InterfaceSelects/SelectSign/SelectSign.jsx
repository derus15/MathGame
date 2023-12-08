import React from 'react';
import { useSelector } from 'react-redux';
import style from './SelectSign.module.css';
import { classNames } from '../../../helpers/classNames/classNames';

const SelectSign = ({ children, onClick, sign }) => {

    const signs = useSelector((state) => state.interface.signList);
    const isSelectedSigns = Boolean(signs.includes(sign));

    return (
        <div 
            className={classNames(style.signs, { [style.signsActive]: isSelectedSigns }, [])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SelectSign;
