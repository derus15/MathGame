import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';

interface ExampleInputProps {
    focus: () => void;
    onInput: (e: ChangeEvent<HTMLInputElement>) => void;
    signalAnswer?: string;
}

const ExampleInput = ({ focus, signalAnswer = null, ...props }: ExampleInputProps) => {

    const [answerSignal, setAnswerSignal] = useState(false);
    const sessionProgress = useSelector(getSessionProgress);
    const inputRef = useRef(null);

    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
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
    }, [signalAnswer]);

    const actionWithSpace = (e: KeyboardEvent): null => {
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
