import React, { ChangeEvent } from 'react';
import style from './PersonParamsInput.module.css';
import { testNumber } from 'shared/lib/testNumber/testNumber';

interface PersonParamsInputProps {
    onInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const PersonParamsInput = ({ ...props }: PersonParamsInputProps) => {

    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {

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
