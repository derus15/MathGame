import React, { useEffect, useRef, useState } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from '../../../helpers/classNames/classNames';
import { useSelector } from 'react-redux';

const ExampleInput = ({ focus, signal = null, ...props }) => {
    const [answerSignal, setAnswerSignal] = useState(false);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);
    const inputRef = useRef(null);

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

    const actionWithSpace = (e) => {
        if (!sessionProgress && e.keyCode === 32 && inputRef.current) {
            inputRef.current.focus();
        }
        return null;
    };

    useEffect(() => {
        window.addEventListener('keydown', actionWithSpace);
        return () => {
            window.removeEventListener('keydown', actionWithSpace);
        };
    }, [sessionProgress]);

    return (
        <div>
            <input
                onChange={(e) => {
                    checkNumber(e);
                }}
                ref={inputRef}
                onFocus={focus}
                inputMode="numeric"
                className={classNames(style.npt, { [style.nptActive]: answerSignal })}
                {...props}
            />
        </div>
    );
};

export default ExampleInput;
