import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';
import { getSessionErrors, getSessionPoints } from 'entities/SessionData';
import { LineInput } from 'shared/UI/Input/LineInput/LineInput';

interface ExampleInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const ExampleInput = ({ className, ...props }: ExampleInputProps) => {

    const [isAnswer, setIsAnswer] = useState(false);
    const [isError, setIsError] = useState(false);
    const error = useSelector(getSessionErrors);
    const points = useSelector(getSessionPoints);
    const sessionProgress = useSelector(getSessionProgress);
    const inputRef = useRef(null);

    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
        if (!isNumber) {
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
        let timeout: ReturnType<typeof setTimeout>;

        if (sessionProgress) {
            setIsAnswer(true);

            timeout = setTimeout(() => {
                setIsAnswer(false);
            }, 800);
        }

        return () => clearTimeout(timeout);
    }, [points]);

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
        <LineInput
            onChange={(e) => {
                checkNumber(e);
            }}
            ref={inputRef}
            inputMode="numeric"
            className={classNames('', {
                [style.nptActive]: isAnswer,
                [style.nptError]: isError,
            }, [className])}
            {...props}
        />
    );
};
