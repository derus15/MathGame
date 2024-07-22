import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';
import { getSessionErrors } from 'entities/SessionData';

interface ExampleInputProps extends InputHTMLAttributes<HTMLInputElement>{
    focus?: () => void;
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    signal?: string | number;
    onlyNumber?: boolean;
    className?: string;
}

const ExampleInput = ({
    focus,
    onlyNumber,
    signal = null,
    className,
    ...props }: ExampleInputProps) => {

    const [answerSignal, setAnswerSignal] = useState(false);
    const [isError, setIsError] = useState(false);
    const error = useSelector(getSessionErrors);
    const sessionProgress = useSelector(getSessionProgress);
    const inputRef = useRef(null);

    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
        if (!isNumber && onlyNumber) {
            e.target.value = '';
        }
    };

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if (sessionProgress) {
            setIsError(true);

            timeout = setTimeout(() => {
                setIsError(false);
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [error]);
    
    useEffect(() => {
        if (sessionProgress) {
            setAnswerSignal(true);

            setTimeout(() => {
                setAnswerSignal(false);
            }, 800);
        }
    }, [signal]);

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
        <input
            onChange={(e) => {
                checkNumber(e);
            }}
            ref={inputRef}
            onFocus={focus}
            inputMode="numeric"
            className={classNames(style.npt, { 
                [style.nptActive]: answerSignal,
                [style.nptError]: isError,
            }, [className])}
            {...props}
        />
    );
};

export default ExampleInput;
