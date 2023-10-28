import React from 'react';
import classes from './PersonParamsInput.module.css';

const PersonParamsInput = ({ callback }) => {

    const testNumber = (e) => {

        const value = Number(e.target.value);
        const isNumber = /^(?!0$)\d+$|^(?:[1-9]\d*|0\d+)$/.test(value);

        if (!isNumber) {
            e.target.value = '';
        } else {
            callback(value);
        }
    };

    return (
        <input
            autoFocus
            className={classes.modalInput}
            onInput={(e) => testNumber(e)}
            type="input"
        />
    );
};

export default PersonParamsInput;
