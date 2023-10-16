import React from 'react';
import { useSelector } from 'react-redux';
import classes from './SelectSign.module.css'

const SelectSign = ({children, onClick, sign}) => {

    const signs = useSelector(state => state.interface.signList);

    const getClassName = (sign) => {
        if (signs.includes(sign)) {
            return `${classes.signs} ${classes.signsActive}`;
        }
        return classes.signs;
    };

    return (
        <div className={getClassName(sign)} onClick={onClick}>
            {children}
        </div>
    );
};

export default SelectSign;