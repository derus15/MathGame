import React from 'react';
import style from './PersonParamsInput.module.css';
import { testNumber } from 'shared/lib/testNumber/testNumber';

const PersonParamsInput = ({ ...props }) => {

    const checkNumber = (e) => {

        const { value } = e.target;
        const isNumber = testNumber(value);

        if ((!isNumber) || (value === '0')) {
            e.target.value = '';
        }
        
    };

    return (
        <input
            autoFocus
            inputMode="numeric"
            className={style.modalInput}
            type="input"
            onChange={(e) => checkNumber(e)}
            {...props}
        />
    );
};

export default PersonParamsInput;
