import React, { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from 'react';
import style from './ExampleInput.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { testNumber } from 'shared/lib/testNumber/testNumber';
import { getSessionProgress } from 'entities/Session';
import { LineInput } from 'shared/UI/Input/LineInput/LineInput';

interface ExampleInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    answerSignal?: boolean;
    errorSignal?: boolean;
}

export const ExampleInput = ({ className, answerSignal, errorSignal, ...props }: ExampleInputProps) => {

    const sessionProgress = useSelector(getSessionProgress);
    const inputRef = useRef(null);

    const checkNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNumber = testNumber(value);
        if (!isNumber) {
            e.target.value = '';
        }
    };

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
                [style.nptActive]: answerSignal,
                [style.nptError]: errorSignal,
            }, [className])}
            {...props}
        />
    );
};
