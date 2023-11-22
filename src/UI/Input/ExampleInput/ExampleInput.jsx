import React, { useEffect, useState } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from '../../../helpers/classNames';

const ExampleInput = ({ sessionProgress, signal = null, ...props }) => {
    const [answerSignal, setAnswerSignal] = useState(false);

    const checkNumber = (e) => {
        const { value } = e.target;
        const isNumber = /^[0-9]+$/.test(value);
        if (!isNumber) {
            e.target.value = '';
        }
    };

    const changeInputColor = () => {
        if (sessionProgress) {
            setAnswerSignal(true);

            setTimeout(() => {
                setAnswerSignal(false);
            }, 800);
        }
    };

    useEffect(() => {
        changeInputColor();
    }, [signal]);

    return (
        <div>
            <input
                onChange={(e) => {
                    checkNumber(e);
                }}
                className={classNames(style.npt, { [style.nptActive]: answerSignal }, [])}
                {...props}
            />
        </div>
    );
};

export default ExampleInput;
